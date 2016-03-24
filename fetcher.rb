#!/usr/bin/env ruby

require "json"
require "ostruct"
require "github_api"

Config = OpenStruct.new(YAML.load_file("fetcher.yaml"))

Github.configure do |c|
  c.basic_auth = Config.basic_auth
  c.auto_pagination = true
end

class Array
  def sum
    inject(&:+)
  end
end

class Repo
  def self.export_all
    repos = fetch_repos
    stats = {
      repos: repos.count,
      stars: repos.map(&:stars).sum,
      forks: repos.map(&:forks).sum,
      languages: Set.new(repos.map(&:languages).flatten).size,
      contributors: Set.new(repos.map(&:contributors)).size,
      members: fetch_members.count
    }
    data = JSON.pretty_generate(stats: stats, repos: repos.map(&:as_json))
    data = data.tr(%q{"}, %q{'})
    open("src/stores/github.js", "w") do |out|
      out.write("let github = #{data}")
      out.write(";\n\n")
      out.write("export default github;\n")
    end
  end

  def self.fetch_members
    result = []
    puts "fetching all members per org"
    Config.orgs.each do |org|
      result += Github.orgs.members.list(org_name: org).map(&:login)
    end
    Set.new(result)
  end

  def self.fetch_repos
    repos = []
    limit = Config.limit || 10_000
    puts "fetching #{Config.limit || 'all'} repos per org"
    Config.orgs.each do |org|
      print org
      Github.repos.list(org: org).first(limit).each do |data|
        next if data.fork
        print "."
        repos << Repo.new(data)
      end
    end
    puts
    repos.sort_by(&:score).reverse
  end

  def initialize(data)
    @data = data
    init
  end

  def id
    @data.id
  end

  def org
    @data.owner.login
  end

  def name
    @data.name
  end

  def description
    @data.description
  end

  def score
    (stars + forks + contributors.count + commits * 0.01).round(1) * (forks > 0 ? 1 : 0)
  end

  def stars
    @data.stargazers_count
  end

  def forks
    @data.forks_count
  end

  def contributors
    @contributors ||= fetch_contributors
  end

  def commits
    @commits ||= fetch_commits
  end

  def languages
    @languages ||= fetch_languages
  end

  def as_json
    { 
      gitHubProjectId: id,
      name: name, 
      organizationName: org,
      url: "https://github.com/#{org}/#{name}",
      description: quote(description),
      starsCount: stars, 
      forksCount: forks, 
      contributorsCount: contributors.count, 
      score: score,
      primaryLanguage: languages.first || "(unknown)" 
    }
  end

private

  def init
    contributors
    commits
    languages
    nil
  end

  def fetch_contributors
    Github.repos.contributors(*full_name).map(&:login) rescue []
  end

  def fetch_commits
    Github.repos.stats.participation(*full_name).all.inject(0, &:+) rescue 0
  end

  def fetch_languages
    Github.repos.languages(*full_name).to_a.map(&:first) rescue []
  end

  def full_name
    @data.full_name.split("/")
  end

  def quote(text)
    (text || "").gsub("'") { "\\'" }
  end
end

Repo.export_all








