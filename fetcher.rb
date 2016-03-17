#!/usr/bin/env ruby

require "json"
require "ostruct"
require "github_api"

Config = OpenStruct.new(YAML.load_file("fetcher.yaml"))

Github.configure do |c|
  c.basic_auth = Config.basic_auth
  c.auto_pagination = true
end

class Repo
  def self.export_all
    repos = Repo.fetch_all.map(&:as_json)
    #TODO: calculate stats
    stats = {
      repos: 273,
      stars: 2529,
      forks: 656,
      languages: 33,
      contributors: 321,
      members: 320
    }
    open("data/github.js", "w") do |out|
      out.write("var github = ")
      out.write(JSON.pretty_generate(stats: stats, repos: repos))
      out.write(";")
    end
  end

  def self.fetch_all
    repos = []
    Config.orgs.each do |org|
      print org
      Github.repos.list(org: org).first(3).each do |data|
        print "."
        repos << Repo.new(data)
      end
    end
    puts
    repos
  end

  def initialize(data)
    @data = data
    init
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
    (stars + forks + contributors + commits * 0.01).round(1) * (forks > 0 ? 1 : 0)
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

  def language
    @language ||= fetch_language
  end

  def as_json
    { 
      org: org,
      name: name, 
      description: description,
      language: language,
      stars: stars, 
      forks: forks, 
      contributors: contributors, 
      score: score 
    }
  end

private

  def init
    contributors
    commits
    language
    nil
  end

  def fetch_contributors
    Github.repos.contributors(*full_name).count
  end

  def fetch_commits
    Github.repos.stats.participation(*full_name).all.inject(0, &:+) rescue 0
  end

  def fetch_language
    Github.repos.languages(*full_name).to_a.map(&:first).first || "(unknown)"
  end

  def full_name
    @data.full_name.split("/")
  end
end

Repo.export_all








