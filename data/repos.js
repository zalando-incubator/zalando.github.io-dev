var repos = [
  {
    "org": "zalando",
    "name": "PGObserver",
    "description": "PostgreSQL Performance Monitor",
    "language": "Python",
    "stars": 119,
    "forks": 33,
    "contributors": 10,
    "score": 162.9
  },
  {
    "org": "zalando",
    "name": "java-sproc-wrapper",
    "description": "Java Stored Procedure Wrapper: Calling PostgreSQL stored procedures from Java",
    "language": "Java",
    "stars": 33,
    "forks": 14,
    "contributors": 11,
    "score": 58.2
  },
  {
    "org": "zalando",
    "name": "basic-sproc-crud-scaffolder",
    "description": "basic-sproc-crud-scaffolder",
    "language": "Python",
    "stars": 1,
    "forks": 2,
    "contributors": 4,
    "score": 7.1
  },
  {
    "org": "zalando",
    "name": "system",
    "description": "System App by Zalando",
    "language": "CoffeeScript",
    "stars": 20,
    "forks": 5,
    "contributors": 2,
    "score": 27.0
  },
  {
    "org": "zalando",
    "name": "cube",
    "description": "Management Tool",
    "language": "CoffeeScript",
    "stars": 38,
    "forks": 11,
    "contributors": 3,
    "score": 52.0
  },
  {
    "org": "zalando",
    "name": "camunda-bpm-platform",
    "description": "Flexible framework for workflow and process automation",
    "language": "Java",
    "stars": 2,
    "forks": 0,
    "contributors": 43,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "pg_view",
    "description": "PostgreSQL Activity View Utility",
    "language": "Python",
    "stars": 138,
    "forks": 18,
    "contributors": 10,
    "score": 166.6
  },
  {
    "org": "zalando",
    "name": "hackathon-api-demo-apps",
    "description": "Demo applications using our hackathon shop-catalog API",
    "language": "Java",
    "stars": 0,
    "forks": 2,
    "contributors": 2,
    "score": 4.0
  },
  {
    "org": "zalando",
    "name": "db_agg",
    "description": "Join multiple datasources with a single query",
    "language": "C++",
    "stars": 4,
    "forks": 2,
    "contributors": 3,
    "score": 9.4
  },
  {
    "org": "zalando",
    "name": "pg_sql_parser",
    "description": "PostgreSQL SQL and PL/pgSQL parser",
    "language": "PLpgSQL",
    "stars": 3,
    "forks": 2,
    "contributors": 3,
    "score": 8.0
  },
  {
    "org": "zalando",
    "name": "brave",
    "description": "Java implementation of Zipkin (https://github.com/twitter/zipkin/).",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 11,
    "score": 13.0
  },
  {
    "org": "zalando",
    "name": "gulp-check-unused-css",
    "description": "Check your HTML templates for unused CSS classes.",
    "language": "CSS",
    "stars": 283,
    "forks": 8,
    "contributors": 2,
    "score": 293.0
  },
  {
    "org": "zalando",
    "name": "python-nsenter",
    "description": "Enter kernel namespaces from Python",
    "language": "Python",
    "stars": 32,
    "forks": 4,
    "contributors": 2,
    "score": 38.1
  },
  {
    "org": "zalando",
    "name": "shop-api-documentation",
    "description": "Zalando SE public API documentation",
    "language": null,
    "stars": 21,
    "forks": 1,
    "contributors": 2,
    "score": 24.0
  },
  {
    "org": "zalando",
    "name": "swagger-ui",
    "description": "Swagger UI is a dependency-free collection of HTML, Javascript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 58,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "shop-api-demo",
    "description": "This is a small demo to showcase how to use Zalando Shop API",
    "language": "JavaScript",
    "stars": 7,
    "forks": 3,
    "contributors": 3,
    "score": 13.0
  },
  {
    "org": "zalando",
    "name": "zalando-cli",
    "description": "Zalando CLI",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "tech.zalando.com",
    "description": "Zalando Tech Blog",
    "language": "CSS",
    "stars": 3,
    "forks": 8,
    "contributors": 23,
    "score": 34.9
  },
  {
    "org": "zalando",
    "name": "jgroups-native-s3-ping",
    "description": "JGroups NATIVE_S3_PING protocol",
    "language": "Java",
    "stars": 8,
    "forks": 3,
    "contributors": 4,
    "score": 15.1
  },
  {
    "org": "zalando",
    "name": "switchboard",
    "description": "An event router that helps to write simple, asynchronous tests.",
    "language": "Java",
    "stars": 1,
    "forks": 2,
    "contributors": 2,
    "score": 5.3
  },
  {
    "org": "zalando",
    "name": "python-timeperiod2",
    "description": "Python module to determine if a date/time is within a certain time period.",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "python-eventlog-writer",
    "description": "Python module to write business events to log file",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "elephant-worker",
    "description": "Background workers in PostgreSQL",
    "language": "PLpgSQL",
    "stars": 21,
    "forks": 5,
    "contributors": 5,
    "score": 31.2
  },
  {
    "org": "zalando",
    "name": "SimianArmy",
    "description": "Tools for keeping your cloud operating in top form. Chaos Monkey is a resiliency tool that helps applications tolerate random instance failures.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 26,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "java-eventlog-writer",
    "description": "Write EventLog log files from Java.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 19,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "sprocrest",
    "description": "Automatic restful service wrapper for PostgreSQL",
    "language": "Scala",
    "stars": 3,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-slapd",
    "description": "A Docker image for slapd, the OpenLDAP standalone LDAP daemon",
    "language": "Shell",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-docs",
    "description": "ZMON Documentation",
    "language": null,
    "stars": 5,
    "forks": 5,
    "contributors": 7,
    "score": 17.6
  },
  {
    "org": "zalando",
    "name": "read-our-docs",
    "description": "Simple documentation repository. It currently supports Git repositories with Sphinx docs.",
    "language": "Python",
    "stars": 0,
    "forks": 1,
    "contributors": 2,
    "score": 3.0
  },
  {
    "org": "zalando",
    "name": "MapleBacon",
    "description": "MapleBacon is a Swift image download and caching library.",
    "language": "Swift",
    "stars": 111,
    "forks": 15,
    "contributors": 9,
    "score": 135.8
  },
  {
    "org": "zalando",
    "name": "zmon",
    "description": "ZMON is Zalando's monitoring tool and allows observing services and metrics on various layers, from CPU load to team KPIs.",
    "language": "Shell",
    "stars": 58,
    "forks": 10,
    "contributors": 5,
    "score": 74.1
  },
  {
    "org": "zalando",
    "name": "sdnsd",
    "description": "Static DNS Daemon",
    "language": "Go",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "kairosdb-client",
    "description": "Java Client for KairosDB",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "camunda-meets-cassandra",
    "description": "This small project originated during Zalando Hack Week #3 (2014/12/15 - 2014/12/19) and aims to run the Camunda BPM Engine using the Apache Cassandra database as persistent storage.",
    "language": "Java",
    "stars": 2,
    "forks": 1,
    "contributors": 4,
    "score": 7.0
  },
  {
    "org": "zalando",
    "name": "aws-utilization-monitor",
    "description": "AWS Utilization Monitor",
    "language": "Java",
    "stars": 2,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-controller",
    "description": "ZMON Frontend Controller with UI and REST API",
    "language": "JavaScript",
    "stars": 7,
    "forks": 2,
    "contributors": 7,
    "score": 19.9
  },
  {
    "org": "zalando",
    "name": "zmon-worker",
    "description": "ZMON Python Worker",
    "language": "Python",
    "stars": 6,
    "forks": 3,
    "contributors": 7,
    "score": 18.5
  },
  {
    "org": "zalando",
    "name": "zmon-cli",
    "description": "ZMON Command Line Interface",
    "language": "Python",
    "stars": 4,
    "forks": 4,
    "contributors": 5,
    "score": 14.2
  },
  {
    "org": "zalando",
    "name": "spring-cloud-config-aws-kms",
    "description": "Spring Cloud Config add-on that provides encryption via AWS KMS",
    "language": "Java",
    "stars": 4,
    "forks": 3,
    "contributors": 3,
    "score": 10.3
  },
  {
    "org": "zalando",
    "name": "docker-ubuntu",
    "description": "Ubuntu base image including Zalando CA",
    "language": "Shell",
    "stars": 4,
    "forks": 4,
    "contributors": 5,
    "score": 13.2
  },
  {
    "org": "zalando",
    "name": "simplestack",
    "description": "Create AWS CloudFormation stacks from more human readable manifests.",
    "language": "Clojure",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-openjdk",
    "description": "Docker image with OpenJDK and Zalando CA",
    "language": "Java",
    "stars": 4,
    "forks": 4,
    "contributors": 3,
    "score": 11.3
  },
  {
    "org": "zalando",
    "name": "zmon-eventlog-service",
    "description": "ZMON EventLog service to receive and provide Event Log entries",
    "language": "Java",
    "stars": 2,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "fe-development-101",
    "description": "A series of workshops to get professional developers started with frontend development.",
    "language": "JavaScript",
    "stars": 6,
    "forks": 1,
    "contributors": 1,
    "score": 8.0
  },
  {
    "org": "zalando",
    "name": "phantomjs2",
    "description": "NPM wrapper for installing phantomjs 2",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 41,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "karma-phantomjs2-launcher",
    "description": "A Karma plugin. Launcher for PhantomJS2.",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 10,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-python",
    "description": "Docker image with Python 3.5 and Zalando CA",
    "language": "Python",
    "stars": 3,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "rkt-vagrant-box",
    "description": "Virtual box to test rocket (https://github.com/coreos/rkt)",
    "language": "Shell",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "grafana",
    "description": "Grafana - A Graphite & InfluxDB Dashboard and Graph Editor",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 104,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "SeleniumGridScaler",
    "description": "Selenium Grid auto scaling plugin utilizing AWS",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "openidm-docker",
    "description": "Docker image for openidm",
    "language": null,
    "stars": 0,
    "forks": 2,
    "contributors": 1,
    "score": 3.0
  },
  {
    "org": "zalando",
    "name": "package-build",
    "description": "Building System Packages using Docker and fpm-cookery",
    "language": "Ruby",
    "stars": 11,
    "forks": 3,
    "contributors": 6,
    "score": 20.0
  },
  {
    "org": "zalando",
    "name": "python-gitconfig",
    "description": "Small wrapper around the git cli to expose git configuration as a mapping",
    "language": "Python",
    "stars": 3,
    "forks": 2,
    "contributors": 1,
    "score": 6.0
  },
  {
    "org": "zalando",
    "name": "maze-runner-server",
    "description": "Maze runner REST server ",
    "language": "Java",
    "stars": 3,
    "forks": 3,
    "contributors": 1,
    "score": 7.1
  },
  {
    "org": "zalando",
    "name": "openldap",
    "description": "Openldap (LDAP) binding for Golang (go)",
    "language": "Go",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "aws-saml-login",
    "description": "AWS SAML login helper library for Python (only supports Shibboleth Identity Provider atm)",
    "language": "Python",
    "stars": 3,
    "forks": 2,
    "contributors": 2,
    "score": 7.3
  },
  {
    "org": "zalando",
    "name": "python-clickclick",
    "description": "Click command line utilities",
    "language": "Python",
    "stars": 9,
    "forks": 3,
    "contributors": 3,
    "score": 15.5
  },
  {
    "org": "zalando",
    "name": "turnstile",
    "description": "Zalando's Local Git Hooks",
    "language": "Python",
    "stars": 6,
    "forks": 2,
    "contributors": 3,
    "score": 11.0
  },
  {
    "org": "zalando",
    "name": "zmon-scheduler",
    "description": "ZMON Scheduler",
    "language": "Java",
    "stars": 4,
    "forks": 1,
    "contributors": 5,
    "score": 11.6
  },
  {
    "org": "zalando",
    "name": "kontrolletti",
    "description": "The REST API that aggregates and unifies information from different Source Control Management for auditing purposes.",
    "language": "JavaScript",
    "stars": 3,
    "forks": 2,
    "contributors": 5,
    "score": 14.5
  },
  {
    "org": "zalando",
    "name": "go-ldapdn",
    "description": "go module for handling LDAP DNs",
    "language": "Go",
    "stars": 0,
    "forks": 1,
    "contributors": 0,
    "score": 1.0
  },
  {
    "org": "zalando",
    "name": "riptide",
    "description": "Client side response routing for Spring's RestTemplate",
    "language": "Java",
    "stars": 5,
    "forks": 1,
    "contributors": 3,
    "score": 10.4
  },
  {
    "org": "zalando",
    "name": "oauth2-client-js",
    "description": "A library to help you handling OAuth2 access and refresh tokens.",
    "language": "JavaScript",
    "stars": 6,
    "forks": 2,
    "contributors": 2,
    "score": 10.5
  },
  {
    "org": "zalando",
    "name": "swagger-mock",
    "description": "Runs an HTTP server based on a swagger definition and returns mocked responses.",
    "language": "Clojure",
    "stars": 12,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "superagent-oauth2-client",
    "description": "A superagent plugin for stressless OAuth2 token management.",
    "language": "JavaScript",
    "stars": 3,
    "forks": 1,
    "contributors": 2,
    "score": 6.4
  },
  {
    "org": "zalando",
    "name": "openig-vagrant",
    "description": "A Vagrant Box containing a sample installation of OpenIG",
    "language": "Shell",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "superagent",
    "description": "Ajax with less suck - (and node.js HTTP client to match)",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 81,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "spilo",
    "description": "Highly available elephant herd: HA PostgreSQL cluster using Docker and STUPS",
    "language": "Python",
    "stars": 83,
    "forks": 4,
    "contributors": 7,
    "score": 96.8
  },
  {
    "org": "zalando",
    "name": "zmon-data-service",
    "description": "Receiving end of new worker to push data across DC boundaries",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 4,
    "score": 7.7
  },
  {
    "org": "zalando",
    "name": "governor",
    "description": "Runners to orchestrate a high-availability PostgreSQL",
    "language": "Python",
    "stars": 2,
    "forks": 1,
    "contributors": 7,
    "score": 13.2
  },
  {
    "org": "zalando",
    "name": "jobsite-generator-host",
    "description": "for the new Zalando tech job page",
    "language": "JavaScript",
    "stars": 3,
    "forks": 1,
    "contributors": 4,
    "score": 9.9
  },
  {
    "org": "zalando",
    "name": "metalsmith-greenhouse",
    "description": " A Metalsmith.io plugin to pull in content from Greenhouse.io",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "jobsite-static-gen",
    "description": "Zalando tech job site static files generator",
    "language": "JavaScript",
    "stars": 1,
    "forks": 5,
    "contributors": 9,
    "score": 26.3
  },
  {
    "org": "zalando",
    "name": "environmental",
    "description": "Map a python configuration from environment variables",
    "language": "Python",
    "stars": 5,
    "forks": 3,
    "contributors": 2,
    "score": 10.3
  },
  {
    "org": "zalando",
    "name": "connexion",
    "description": "Python Flask Framework to automagically handle REST API requests based on OpenAPI/Swagger",
    "language": "Python",
    "stars": 142,
    "forks": 35,
    "contributors": 21,
    "score": 203.1
  },
  {
    "org": "zalando",
    "name": "pod-template",
    "description": "An opinionated template for creating a Pod.",
    "language": "Ruby",
    "stars": 0,
    "forks": 0,
    "contributors": 26,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "github-user-team-sync",
    "description": "Sync employees and their team membership with GitHub.com",
    "language": "Python",
    "stars": 4,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-aws-agent",
    "description": "Use AWS API to retrieve \"known\" applications (currently expecting STUPS compatible Taupage userdata for this)",
    "language": "Python",
    "stars": 2,
    "forks": 4,
    "contributors": 5,
    "score": 12.0
  },
  {
    "org": "zalando",
    "name": "catwatch",
    "description": "An open-source metrics dashboard for GitHub organizations, with results accessible via REST API a website",
    "language": "Java",
    "stars": 22,
    "forks": 13,
    "contributors": 18,
    "score": 57.4
  },
  {
    "org": "zalando",
    "name": "bdist_docker",
    "description": "Distutils extension command to build docker images for python applications.",
    "language": "Python",
    "stars": 2,
    "forks": 1,
    "contributors": 1,
    "score": 4.0
  },
  {
    "org": "zalando",
    "name": "psycopg2",
    "description": "Python PostgreSQL adapter",
    "language": "C",
    "stars": 0,
    "forks": 0,
    "contributors": 36,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "lizzy",
    "description": "REST Service to deploy AWS CF templates using Senza",
    "language": "Python",
    "stars": 9,
    "forks": 1,
    "contributors": 5,
    "score": 17.4
  },
  {
    "org": "zalando",
    "name": "iOSCodingGuidelines",
    "description": "Coding guidelines of Zalando iOS team",
    "language": null,
    "stars": 2,
    "forks": 1,
    "contributors": 1,
    "score": 4.0
  },
  {
    "org": "zalando",
    "name": "ExSwift",
    "description": "A set of Swift extensions for standard types and classes.",
    "language": "Swift",
    "stars": 0,
    "forks": 0,
    "contributors": 28,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "lizzy-client",
    "description": "Script to deploy Senza definitions using a Lizzy server.",
    "language": "Python",
    "stars": 3,
    "forks": 2,
    "contributors": 4,
    "score": 9.9
  },
  {
    "org": "zalando",
    "name": "octopus-ci",
    "description": "",
    "language": "CSS",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "jackson-datatype-money",
    "description": "Extension module to properly support datatypes of javax.money.",
    "language": "Java",
    "stars": 13,
    "forks": 6,
    "contributors": 3,
    "score": 22.6
  },
  {
    "org": "zalando",
    "name": "jersey-media-json-gson",
    "description": "Jersey JSON GSON entity providers support",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-kewan",
    "description": "Distributed ZooKeeper cluster appliance for AWS environment",
    "language": "Python",
    "stars": 3,
    "forks": 2,
    "contributors": 4,
    "score": 9.3
  },
  {
    "org": "zalando",
    "name": "turnstile-codevalidator",
    "description": "Codevalidator extension for turnstile",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "turnstile-zalando",
    "description": "Meta-package to install turnstile and extension",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "swagger-codegen",
    "description": "swagger-codegen contains a template-driven engine to generate client code in different languages by parsing your Swagger Resource Declaration.",
    "language": "HTML",
    "stars": 1,
    "forks": 0,
    "contributors": 102,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-tawon",
    "description": "A swarm of workers for reliable distributed bottledwater snapshot export",
    "language": "Python",
    "stars": 9,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "corleone",
    "description": "it gives you translations… and maybe someday you have opportunity to repay us the favour, capisce?",
    "language": "Scala",
    "stars": 0,
    "forks": 3,
    "contributors": 6,
    "score": 10.1
  },
  {
    "org": "zalando",
    "name": "kontrolletti-client-java",
    "description": "Java interfaces and implementations for the Kontrolletti API",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 2,
    "score": 4.5
  },
  {
    "org": "zalando",
    "name": "saiki-buku",
    "description": "Kafka Appliance for STUPS",
    "language": "Python",
    "stars": 5,
    "forks": 4,
    "contributors": 4,
    "score": 14.5
  },
  {
    "org": "zalando",
    "name": "playframework",
    "description": "Play Framework",
    "language": "Scala",
    "stars": 0,
    "forks": 0,
    "contributors": 410,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-lawang",
    "description": "Rest API and Kafka Producer for Saiki Project",
    "language": "Python",
    "stars": 1,
    "forks": 1,
    "contributors": 1,
    "score": 3.2
  },
  {
    "org": "zalando",
    "name": "exhibitor-appliance",
    "description": "Exhibitor appliance for AWS",
    "language": "Shell",
    "stars": 3,
    "forks": 3,
    "contributors": 5,
    "score": 11.4
  },
  {
    "org": "zalando",
    "name": "scala-beanutils",
    "description": "Utilities to work with JavaBeans from Scala",
    "language": "Scala",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-actuator",
    "description": "Improved REST endpoint metrics for Spring Boot Projects",
    "language": "Java",
    "stars": 1,
    "forks": 2,
    "contributors": 3,
    "score": 6.4
  },
  {
    "org": "zalando",
    "name": "saiki",
    "description": "Saiki provides a scalable Change Data Capture (CDC) infrastructure.",
    "language": null,
    "stars": 2,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-banyu",
    "description": "PostgreSQL Replication Log Consumer",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "patroni",
    "description": " Runners to orchestrate a high-availability PostgreSQL",
    "language": "Python",
    "stars": 143,
    "forks": 14,
    "contributors": 12,
    "score": 177.4
  },
  {
    "org": "zalando",
    "name": "beard",
    "description": "Lightweight logicless templating engine, inspired by Mustache",
    "language": "Scala",
    "stars": 13,
    "forks": 11,
    "contributors": 5,
    "score": 30.3
  },
  {
    "org": "zalando",
    "name": "skipper",
    "description": "Skipper is an HTTP router acting as a reverse proxy with support for custom route definitions",
    "language": "Go",
    "stars": 125,
    "forks": 13,
    "contributors": 12,
    "score": 155.3
  },
  {
    "org": "zalando",
    "name": "play-swagger",
    "description": "Provides Swagger support for the Play-Framework",
    "language": "Scala",
    "stars": 45,
    "forks": 7,
    "contributors": 6,
    "score": 62.0
  },
  {
    "org": "zalando",
    "name": "fpm-cookery",
    "description": "A tool for building software packages with fpm.",
    "language": "Ruby",
    "stars": 0,
    "forks": 0,
    "contributors": 29,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-buku-rest",
    "description": "Kafka Rest API",
    "language": "Shell",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zalando.github.io-dev",
    "description": "zalando.github.io Open Source page",
    "language": "JavaScript",
    "stars": 5,
    "forks": 3,
    "contributors": 5,
    "score": 14.7
  },
  {
    "org": "zalando",
    "name": "acid-tools",
    "description": "Various tools around PostgreSQL monitoring/management",
    "language": "Python",
    "stars": 9,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "restrict-maven-plugin",
    "description": "Restrict access from any package/class to any package/class including your dependencies",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-node",
    "description": "Docker image with Node.js and Zalando CA",
    "language": "JavaScript",
    "stars": 3,
    "forks": 2,
    "contributors": 3,
    "score": 8.4
  },
  {
    "org": "zalando",
    "name": "chrome-oauth-bearer-plugin",
    "description": "Chrome plugin to inject OAuth Bearer tokens",
    "language": "JavaScript",
    "stars": 8,
    "forks": 2,
    "contributors": 1,
    "score": 11.2
  },
  {
    "org": "zalando",
    "name": "ssl-keygen",
    "description": "Utilities to generate browser-compatible (test) SSL certificates.",
    "language": "Shell",
    "stars": 3,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "problem",
    "description": "Problem is a Java library that implements application/problem+json.",
    "language": "Java",
    "stars": 7,
    "forks": 3,
    "contributors": 1,
    "score": 11.6
  },
  {
    "org": "zalando",
    "name": "react-simple-inpagenav",
    "description": "Simple \"inpage navigation\" React component",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "spring-data-jpa-businesskey",
    "description": "",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 1,
    "score": 3.1
  },
  {
    "org": "zalando",
    "name": "stumky",
    "description": "The Stups Monkey Scripts",
    "language": "Shell",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "frontend-maven-plugin",
    "description": "\"Maven-node-grunt-gulp-npm-node-plugin to end all maven-node-grunt-gulp-npm-plugins.\" A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 31,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zalando.github.io",
    "description": "Zalando github.io organization page",
    "language": "HTML",
    "stars": 1,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "react-infinite-scroll",
    "description": "An infinite scroll component for React ",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "cassandra-etcd-seed-provider",
    "description": "A Cassandra SeedProvider that fetches the list of seed nodes from Etcd",
    "language": "Java",
    "stars": 8,
    "forks": 6,
    "contributors": 2,
    "score": 16.1
  },
  {
    "org": "zalando",
    "name": "problem-spring-web",
    "description": "Handling Problems in Spring Web MVC",
    "language": "Java",
    "stars": 6,
    "forks": 3,
    "contributors": 3,
    "score": 12.4
  },
  {
    "org": "zalando",
    "name": "stups-opscenter",
    "description": "Opscenter appliance for STUPS ",
    "language": "Shell",
    "stars": 1,
    "forks": 1,
    "contributors": 1,
    "score": 3.1
  },
  {
    "org": "zalando",
    "name": "stups-cassandra",
    "description": "Cassandra appliance for the STUPS (AWS) environment with companion Docker image",
    "language": "Shell",
    "stars": 12,
    "forks": 11,
    "contributors": 3,
    "score": 26.6
  },
  {
    "org": "zalando",
    "name": "Select-or-Die",
    "description": "Yet another jQuery plugin to style select elements. Demo at http://vst.mn/selectordie/",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "emrclient",
    "description": "This is created to view and kill applications/jobs running on yarn inside Amazon EMR or any other remote location.  Currently the amazon api does not include stopping jobs. Also supports adding steps to EMR and listing them. The amazon  EMR api does not contain have calls to terminate jobs and so must be done via yarn api. A small layer of caching is also added.",
    "language": "Python",
    "stars": 0,
    "forks": 1,
    "contributors": 0,
    "score": 1.2
  },
  {
    "org": "zalando",
    "name": "go-zmonmetrics",
    "description": "use with goat (https://github.com/bahlo/goat) and  zmon (https://github.com/zalando/zmon) to collect metrics in the style of https://github.com/zalando/zmon-actuator ",
    "language": "Go",
    "stars": 0,
    "forks": 1,
    "contributors": 0,
    "score": 1.1
  },
  {
    "org": "zalando",
    "name": "money-validation",
    "description": "Validation support for javax.money",
    "language": "Java",
    "stars": 2,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "twintip-spring-web",
    "description": "Twintipify your Spring Web MVC application",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "pathmux",
    "description": "The go package pathmux is a fork of httptreemux",
    "language": "Go",
    "stars": 1,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "testmailserver",
    "description": "Very simple Java SMTP server that helps testing and debugging email sending software, based on Subethasmtp.",
    "language": "Java",
    "stars": 3,
    "forks": 3,
    "contributors": 1,
    "score": 7.2
  },
  {
    "org": "zalando",
    "name": "tranzlate",
    "description": "Simple JS runtime translation library",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 0,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "scala-study-group",
    "description": "Welcome to the wonderful world of Scala",
    "language": "Scala",
    "stars": 7,
    "forks": 4,
    "contributors": 6,
    "score": 17.5
  },
  {
    "org": "zalando",
    "name": "stups-etcd-cluster",
    "description": "Etcd cluster appliance for the STUPS (AWS) environment",
    "language": "Python",
    "stars": 6,
    "forks": 3,
    "contributors": 7,
    "score": 16.9
  },
  {
    "org": "zalando",
    "name": "innkeeper",
    "description": "Simple route management API for Skipper",
    "language": "Scala",
    "stars": 34,
    "forks": 2,
    "contributors": 4,
    "score": 41.7
  },
  {
    "org": "zalando",
    "name": "logbook",
    "description": "HTTP request and response logging",
    "language": "Java",
    "stars": 7,
    "forks": 7,
    "contributors": 4,
    "score": 19.5
  },
  {
    "org": "zalando",
    "name": "spark",
    "description": "Mirror of Apache Spark",
    "language": "Scala",
    "stars": 1,
    "forks": 1,
    "contributors": 368,
    "score": 408.2
  },
  {
    "org": "zalando",
    "name": "spark-appliance",
    "description": "Distributed HA Spark standalone cluster appliance for AWS environment using STUPS, Docker and Jupyter Notebook for Spark SQL, Python / PySpark and R / SparkR",
    "language": "Python",
    "stars": 15,
    "forks": 8,
    "contributors": 5,
    "score": 29.4
  },
  {
    "org": "zalando",
    "name": "go-accesslog",
    "description": "custom access log handler - no sync writes to log",
    "language": "Go",
    "stars": 0,
    "forks": 0,
    "contributors": 0,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "ro2key",
    "description": "Role-based rotatable Key: REST Service to get rotatable AWS access keys (Temporary Security Credentials) from pre-defined IAM roles",
    "language": "Python",
    "stars": 3,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "react-bootstrap-datetimepicker",
    "description": "A react.js datetime picker for bootstrap",
    "language": "JavaScript",
    "stars": 1,
    "forks": 1,
    "contributors": 23,
    "score": 26.2
  },
  {
    "org": "zalando",
    "name": "react-currency-masked-input",
    "description": "Input masking for currency, in React",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "baigan-config",
    "description": "Simple and distributed configuration service framework.",
    "language": "Java",
    "stars": 3,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "dress-code",
    "description": "The Dress Code is the official style guide and style framework for all Brand Solutions products.",
    "language": "CSS",
    "stars": 15,
    "forks": 1,
    "contributors": 6,
    "score": 25.4
  },
  {
    "org": "zalando",
    "name": "json-fields",
    "description": "A Framework for limiting fields of JSON objects exposed by Rest APIs",
    "language": "Java",
    "stars": 5,
    "forks": 2,
    "contributors": 1,
    "score": 8.5
  },
  {
    "org": "zalando",
    "name": "typhoon",
    "description": "Distributed system stress and load testing tool",
    "language": "Erlang",
    "stars": 21,
    "forks": 6,
    "contributors": 1,
    "score": 28.7
  },
  {
    "org": "zalando",
    "name": "tomcat-maven-plugin",
    "description": "Mirror of Apache Tomcat Maven plugin",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-sphinx-doc",
    "description": "Docker image to update, build and serve Sphinx documentation including OAuth authorization flow",
    "language": "Shell",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "spring-boot-etcd",
    "description": "etcd client to access and store configuration values in an etcd cluster",
    "language": "Java",
    "stars": 4,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "nakadi",
    "description": "Zalando Distributed Event Bus",
    "language": "Java",
    "stars": 7,
    "forks": 8,
    "contributors": 8,
    "score": 31.5
  },
  {
    "org": "zalando",
    "name": "tracer",
    "description": "Call tracing and log correlation in distributed systems",
    "language": "Java",
    "stars": 5,
    "forks": 4,
    "contributors": 3,
    "score": 12.5
  },
  {
    "org": "zalando",
    "name": "spring-social-zauth",
    "description": "Spring-Social support for Z-Auth.",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "slate",
    "description": "Beautiful static documentation for your API",
    "language": "JavaScript",
    "stars": 1,
    "forks": 1,
    "contributors": 41,
    "score": 43.8
  },
  {
    "org": "zalando",
    "name": "nakadi-klients",
    "description": "Nakadi Low Level API client",
    "language": "Scala",
    "stars": 3,
    "forks": 4,
    "contributors": 5,
    "score": 12.0
  },
  {
    "org": "zalando",
    "name": "bottledwater-pg",
    "description": "Change data capture from PostgreSQL into Kafka",
    "language": "C",
    "stars": 0,
    "forks": 1,
    "contributors": 4,
    "score": 6.0
  },
  {
    "org": "zalando",
    "name": "stups2go",
    "description": "Go Continuous Delivery service based on the STUPS infrastructure.",
    "language": "Shell",
    "stars": 4,
    "forks": 5,
    "contributors": 5,
    "score": 15.2
  },
  {
    "org": "zalando",
    "name": "react-automatic-width",
    "description": "Automatically sets `width` property on child components",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "solrcloud-appliance",
    "description": "Appliance for running a SolrCloud on the STUPS infrastructure",
    "language": "Python",
    "stars": 2,
    "forks": 1,
    "contributors": 1,
    "score": 4.1
  },
  {
    "org": "zalando",
    "name": "ghe-backup",
    "description": "Backup for Github Enterprise based Docker, AWS.",
    "language": "Shell",
    "stars": 5,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "dress-code-bower",
    "description": "Brand Solutions Dress Code is the official style guide ad style framwork for all Brand Solutions products. (Bower version)",
    "language": "CSS",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "open-source-principles",
    "description": "Zalando's Open Source Principles",
    "language": "Makefile",
    "stars": 7,
    "forks": 3,
    "contributors": 4,
    "score": 14.1
  },
  {
    "org": "zalando",
    "name": "scala-jsonapi",
    "description": "A support library for integrating JSON API specification with Scala and Spray JSON or Play! JSON",
    "language": "Scala",
    "stars": 25,
    "forks": 3,
    "contributors": 3,
    "score": 31.6
  },
  {
    "org": "zalando",
    "name": "scala-tokens",
    "description": "scala-tokens is a library to manage Oauth2 tokens for scala. It requests the tokens for your application and stores them in cache so that next requests do not need to retrieve them again.",
    "language": "Scala",
    "stars": 5,
    "forks": 1,
    "contributors": 1,
    "score": 7.1
  },
  {
    "org": "zalando",
    "name": "crypto",
    "description": "If you want to hide things.",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "spin-docker-selenium",
    "description": "Spin up your docker-selenium grid on a free machine",
    "language": "Shell",
    "stars": 2,
    "forks": 1,
    "contributors": 2,
    "score": 5.0
  },
  {
    "org": "zalando",
    "name": "scarl",
    "description": "binding layer between Erlang and Scala/Akka universes",
    "language": "Scala",
    "stars": 0,
    "forks": 2,
    "contributors": 1,
    "score": 3.1
  },
  {
    "org": "zalando",
    "name": "banknote",
    "description": "Currency formatting in JavaScript",
    "language": "JavaScript",
    "stars": 4,
    "forks": 3,
    "contributors": 2,
    "score": 9.2
  },
  {
    "org": "zalando",
    "name": "gitbook-structured-toc",
    "description": "A Table Of Contents module for Gitbook that adds headers as anchors",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "pacts",
    "description": "Dockerized Pact Broker with OAuth2 integration",
    "language": "Shell",
    "stars": 1,
    "forks": 0,
    "contributors": 6,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "axiom-web",
    "description": "Axiom web libraries",
    "language": "Java",
    "stars": 2,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "gitbook-restructure-navigation",
    "description": "Restructures the navigation bar in a gitbook website",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "queue_utils",
    "description": "Utils for creating microservices around RabbitMQ",
    "language": "Python",
    "stars": 3,
    "forks": 2,
    "contributors": 2,
    "score": 7.5
  },
  {
    "org": "zalando",
    "name": "eclipselink-session-customizer",
    "description": "EclipseLink Session Customizer implementation.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zalmemo",
    "description": "A social memory game (Hackweek project)",
    "language": "TypeScript",
    "stars": 5,
    "forks": 1,
    "contributors": 4,
    "score": 11.8
  },
  {
    "org": "zalando",
    "name": "play-swagger-service",
    "description": "Play-Swagger activator template",
    "language": "JavaScript",
    "stars": 3,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "multireducer",
    "description": "A utility to wrap many copies of a single Redux reducer into a single key-based reducer.",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "funelo",
    "description": "Big Data ingestion made easy.",
    "language": "Java",
    "stars": 4,
    "forks": 1,
    "contributors": 3,
    "score": 8.4
  },
  {
    "org": "zalando",
    "name": "zappr",
    "description": "Approvals for Github pull requests",
    "language": "JavaScript",
    "stars": 14,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-android",
    "description": "Android client for ZMON monitoring",
    "language": "Java",
    "stars": 6,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "intellij-swagger",
    "description": "Intellij Idea plugin that provides support for swagger.io",
    "language": "Java",
    "stars": 6,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "gulp-awspublish",
    "description": "gulp plugin to publish files to amazon s3",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 23,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "scoop",
    "description": "simple library based on Akka Cluster to partition work between multiple instances (belonging to same cluster)",
    "language": "Java",
    "stars": 1,
    "forks": 2,
    "contributors": 1,
    "score": 4.3
  },
  {
    "org": "zalando",
    "name": "ann-fab",
    "description": "Approximate nearest neighbor: Faster and Better",
    "language": "Python",
    "stars": 1,
    "forks": 1,
    "contributors": 2,
    "score": 4.9
  },
  {
    "org": "zalando",
    "name": "solrcloud-cli",
    "description": "Deployment tool for STUPS SolrCloud appliance",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "cassandra-migration",
    "description": "Database migration (evolution) tool for Apache Cassandra",
    "language": "Java",
    "stars": 0,
    "forks": 2,
    "contributors": 2,
    "score": 4.6
  },
  {
    "org": "zalando",
    "name": "kickerhack",
    "description": "Zalando's hack week project for hacking a foosball table",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-notification-service",
    "description": "Push notifications for google cloud messaging",
    "language": "Java",
    "stars": 3,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zengage",
    "description": "",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "elm-street-404",
    "description": "404 Elm Street browser game",
    "language": "Elm",
    "stars": 43,
    "forks": 2,
    "contributors": 5,
    "score": 52.8
  },
  {
    "org": "zalando",
    "name": "zmon-ios",
    "description": "iOS client for ZMON monitoring",
    "language": "Swift",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "metalsmith-prismic",
    "description": "A Metalsmith.io plugin to pull in content from Prismic.io",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "caffe",
    "description": "Caffe: a fast open framework for deep learning.",
    "language": "C++",
    "stars": 1,
    "forks": 2,
    "contributors": 182,
    "score": 185.0
  },
  {
    "org": "zalando",
    "name": "go-ldap",
    "description": "LDAP package for Go/Golang with connection pooling and entry manipulation",
    "language": "Go",
    "stars": 0,
    "forks": 0,
    "contributors": 0,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "stups-burrow",
    "description": "STUPS deployment and ZMON integration for the Kafka lag monitor",
    "language": "Shell",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-metric-cache",
    "description": "API metric cache for ZMON frontend",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "locust",
    "description": "Scalable user load testing tool written in Python",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "contributors": 43,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "tailor",
    "description": "Streaming layout service",
    "language": "JavaScript",
    "stars": 13,
    "forks": 1,
    "contributors": 3,
    "score": 18.2
  },
  {
    "org": "zalando",
    "name": "zalando-howto-open-source",
    "description": "The guide to open-sourcing projects followed by the tech team at Zalando (zalando.com), Europe's largest online fashion platform.",
    "language": null,
    "stars": 9,
    "forks": 1,
    "contributors": 2,
    "score": 12.0
  },
  {
    "org": "zalando",
    "name": "taybl",
    "description": "A fancy way to share table data",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "react-zlide",
    "description": "Lightweight and stateless slider component for React.js",
    "language": "JavaScript",
    "stars": 5,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zmon-demo",
    "description": "ZMON Demo Installation Scripts (single node)",
    "language": "ApacheConf",
    "stars": 1,
    "forks": 1,
    "contributors": 2,
    "score": 4.6
  },
  {
    "org": "zalando",
    "name": "onboarding-buku-config",
    "description": "Storage of the configuration for our Buku cluster. Including topic management scripts.",
    "language": "Shell",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "zappr-mock",
    "description": "Prototyping with the Github API",
    "language": "JavaScript",
    "stars": 0,
    "forks": 1,
    "contributors": 2,
    "score": 3.2
  },
  {
    "org": "zalando",
    "name": "test-service-kit",
    "description": "Micro framework that manages external services for tests (mock HTTP services, docker containers, databases, etc.)",
    "language": "Scala",
    "stars": 5,
    "forks": 2,
    "contributors": 3,
    "score": 10.6
  },
  {
    "org": "zalando",
    "name": "zalando-rules-of-play",
    "description": "Zalando Tech’s guidelines for building new applications and managing legacy systems. ",
    "language": null,
    "stars": 37,
    "forks": 3,
    "contributors": 3,
    "score": 43.3
  },
  {
    "org": "zalando",
    "name": "rant-gate",
    "description": "The entry point to the rant onboarding system.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "pazuzu-cli",
    "description": "CLI of Pazuzu",
    "language": "Rust",
    "stars": 2,
    "forks": 1,
    "contributors": 1,
    "score": 4.3
  },
  {
    "org": "zalando",
    "name": "pazuzu-registry",
    "description": "Feature Registry for Pazuzu",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 7,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "testing-microservices",
    "description": "An experimental repository to try out automated testing of microservice interaction over a message queue.",
    "language": "Java",
    "stars": 3,
    "forks": 1,
    "contributors": 1,
    "score": 5.3
  },
  {
    "org": "zalando",
    "name": "reactjs-style-config-files",
    "description": "Configuration files for eslint, jscs and js-beautify used for reactjs and es6",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "planb-tokeninfo",
    "description": "Plan B Token Info service for JWT tokens",
    "language": "Go",
    "stars": 3,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "planb-provider",
    "description": "Plan B OpenID Connect Provider issuing JWT tokens",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 6,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "planb-revocation",
    "description": "Plan B Revocation Service for JWT tokens",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 5,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "ui-automation-chrome-extension",
    "description": "UI Automation Chrome Extension helps you to write automated UI tests.",
    "language": "JavaScript",
    "stars": 6,
    "forks": 1,
    "contributors": 1,
    "score": 8.3
  },
  {
    "org": "zalando",
    "name": "planb-cassandra",
    "description": "Plan B Cassandra for STUPS/AWS with static IPs",
    "language": "Python",
    "stars": 3,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "spring-boot-cassandra",
    "description": "",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 2,
    "score": 4.3
  },
  {
    "org": "zalando",
    "name": "solution-center-header",
    "description": "Reusable header for software connecting to the Zalando Solution Center",
    "language": "JavaScript",
    "stars": 4,
    "forks": 1,
    "contributors": 2,
    "score": 7.6
  },
  {
    "org": "zalando",
    "name": "cassandra-maven-plugin",
    "description": null,
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 6,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "openapi-cli-client",
    "description": "OpenAPI/Swagger CLI Client",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "saiki-pemetaan",
    "description": "A Control Center for all Saiki and Kafka/Buku Tasks",
    "language": "CSS",
    "stars": 2,
    "forks": 1,
    "contributors": 1,
    "score": 4.3
  },
  {
    "org": "zalando",
    "name": "jackson-json-reference",
    "description": "JSON Reference for Java with Jackson.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "docker-locust",
    "description": "Docker image for the Locust.io open source load testing tool",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "sea-proxy",
    "description": "HTTP reverse proxy which terminates OAuth2 and SSL.",
    "language": "Java",
    "stars": 3,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "esio",
    "description": "HTTP client to Elastic Search for Erlang application.",
    "language": "Erlang",
    "stars": 0,
    "forks": 2,
    "contributors": 1,
    "score": 3.3
  },
  {
    "org": "zalando",
    "name": "javascript",
    "description": "JavaScript Style Guide",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 194,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "elastic-haproxy",
    "description": "HAProxy AWS Appliance",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "scala-study-group-bnb",
    "description": "Scala Study Group for Wholesale Engineering @ BNB",
    "language": "Scala",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "reactive-nakadi",
    "description": "Reactive Streams for Nakadi",
    "language": "Scala",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "sunstreet",
    "description": "Sunstreet is a minimalistic blog template, specially made for Github pages and can be statically/dynamically served anywhere else too",
    "language": "JavaScript",
    "stars": 3,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "react-zoom",
    "description": "Lightweight and stateless modal component for React.js based on flexbox",
    "language": "JavaScript",
    "stars": 4,
    "forks": 0,
    "contributors": 0,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "partitioned",
    "description": "Partitoned coordinates the partition consumption within a group of Nakadi clients",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "toga",
    "description": "A set of tools to work with JSON Schema. This includes generating examples from a schema, providing these examples to an application and verifying an object against a schema.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "planb-docs",
    "description": "Plan B OAuth2/JWT Infrastructure Documentation",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando",
    "name": "react-callout",
    "description": "Lightweight and stateless callout component for React.js",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 0,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "kio",
    "description": "Kio is the application registry in the STUPS ecosystem.",
    "language": "Clojure",
    "stars": 7,
    "forks": 3,
    "contributors": 5,
    "score": 17.4
  },
  {
    "org": "zalando-stups",
    "name": "pierone",
    "description": "Docker Registry with S3 backend, immutable tags and SCM source tracking",
    "language": "Clojure",
    "stars": 23,
    "forks": 5,
    "contributors": 8,
    "score": 38.8
  },
  {
    "org": "zalando-stups",
    "name": "yourturn",
    "description": "Developer Console",
    "language": "JavaScript",
    "stars": 0,
    "forks": 4,
    "contributors": 4,
    "score": 20.5
  },
  {
    "org": "zalando-stups",
    "name": "magnificent",
    "description": "Reference implementation for the STUPS authorization server.",
    "language": "Clojure",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "even",
    "description": "SSH access granting service to distribute personal public SSH keys on demand.",
    "language": "Clojure",
    "stars": 7,
    "forks": 1,
    "contributors": 7,
    "score": 16.3
  },
  {
    "org": "zalando-stups",
    "name": "odd",
    "description": "SSH Bastion Host",
    "language": "Shell",
    "stars": 8,
    "forks": 1,
    "contributors": 4,
    "score": 13.2
  },
  {
    "org": "zalando-stups",
    "name": "sevenseconds",
    "description": "AWS Account Configurator",
    "language": "Python",
    "stars": 20,
    "forks": 3,
    "contributors": 6,
    "score": 30.9
  },
  {
    "org": "zalando-stups",
    "name": "taupage",
    "description": "Amazon Machine Image (AMI) with Docker runtime https://docs.stups.io/en/latest/components/taupage.html",
    "language": "Shell",
    "stars": 17,
    "forks": 19,
    "contributors": 23,
    "score": 65.2
  },
  {
    "org": "zalando-stups",
    "name": "zalando-stups.github.io",
    "description": "Overview of the STUPS landscape with all components",
    "language": "CSS",
    "stars": 0,
    "forks": 3,
    "contributors": 6,
    "score": 9.5
  },
  {
    "org": "zalando-stups",
    "name": "friboo",
    "description": "A utility library to write microservices in Clojure with support for Swagger and OAuth.",
    "language": "Clojure",
    "stars": 22,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "fullstop",
    "description": "Audit reporting: collect violations across all AWS accounts",
    "language": "Java",
    "stars": 20,
    "forks": 7,
    "contributors": 9,
    "score": 50.7
  },
  {
    "org": "zalando-stups",
    "name": "mai",
    "description": "AWS SAML login utility ",
    "language": "Python",
    "stars": 6,
    "forks": 2,
    "contributors": 4,
    "score": 12.6
  },
  {
    "org": "zalando-stups",
    "name": "stups-build",
    "description": "Centralized Maven configuration.",
    "language": null,
    "stars": 0,
    "forks": 1,
    "contributors": 1,
    "score": 2.5
  },
  {
    "org": "zalando-stups",
    "name": "swagger-codegen-tooling",
    "description": "Swagger Codegen Tooling",
    "language": "Java",
    "stars": 5,
    "forks": 6,
    "contributors": 4,
    "score": 16.5
  },
  {
    "org": "zalando-stups",
    "name": "booties",
    "description": "Small collection of Spring-Boot-Starters.",
    "language": "Java",
    "stars": 5,
    "forks": 2,
    "contributors": 2,
    "score": 10.3
  },
  {
    "org": "zalando-stups",
    "name": "senza",
    "description": "Deploy immutable application stacks and create and execute AWS CloudFormation templates in a sane way.",
    "language": "Python",
    "stars": 37,
    "forks": 30,
    "contributors": 19,
    "score": 91.1
  },
  {
    "org": "zalando-stups",
    "name": "berry",
    "description": "berry is an agent to retrieve application credentials",
    "language": "Python",
    "stars": 3,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "piu",
    "description": "Command line client for \"even\" SSH access granting service",
    "language": "Python",
    "stars": 2,
    "forks": 2,
    "contributors": 3,
    "score": 7.6
  },
  {
    "org": "zalando-stups",
    "name": "documentation",
    "description": "STUPS documentation",
    "language": "Python",
    "stars": 10,
    "forks": 29,
    "contributors": 33,
    "score": 76.1
  },
  {
    "org": "zalando-stups",
    "name": "swagger-ui",
    "description": "Swagger UI is a dependency-free collection of HTML, Javascript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",
    "language": "CSS",
    "stars": 0,
    "forks": 0,
    "contributors": 84,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "KanbanWaffle",
    "description": "To have a kanban dashboard over the whole stups team ",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "essentials",
    "description": "ESSENTIALS is the repository for resource types and OAuth 2.0 scopes in the STUPS ecosystem",
    "language": "Clojure",
    "stars": 1,
    "forks": 1,
    "contributors": 6,
    "score": 8.7
  },
  {
    "org": "zalando-stups",
    "name": "logback-s3",
    "description": "Logback RollingPolicy to store logs in S3",
    "language": "Java",
    "stars": 0,
    "forks": 2,
    "contributors": 2,
    "score": 4.0
  },
  {
    "org": "zalando-stups",
    "name": "lein-scm-source",
    "description": "A Leiningen plugin to generate a scm-source.json file according to the STUPS documentation.",
    "language": "Clojure",
    "stars": 0,
    "forks": 1,
    "contributors": 2,
    "score": 3.1
  },
  {
    "org": "zalando-stups",
    "name": "node-scm-source",
    "description": "NPM module to generate scm-source JSON object according to STUPS docs.",
    "language": "JavaScript",
    "stars": 1,
    "forks": 1,
    "contributors": 1,
    "score": 3.0
  },
  {
    "org": "zalando-stups",
    "name": "zign",
    "description": "Command line client to generate OAuth2 access tokens",
    "language": "Python",
    "stars": 2,
    "forks": 3,
    "contributors": 5,
    "score": 10.6
  },
  {
    "org": "zalando-stups",
    "name": "pierone-cli",
    "description": "Convenience command line client for Pier One Docker registry",
    "language": "Python",
    "stars": 6,
    "forks": 5,
    "contributors": 7,
    "score": 18.9
  },
  {
    "org": "zalando-stups",
    "name": "tokens",
    "description": "A Java library that keeps OAuth 2.0 service access tokens in memory for your usage.",
    "language": "Java",
    "stars": 7,
    "forks": 9,
    "contributors": 11,
    "score": 28.9
  },
  {
    "org": "zalando-stups",
    "name": "Turbine",
    "description": "Taupage Turbine // integration for Taupage etcd discovery",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 15,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "kio-client-java",
    "description": "Client-Implementation for kio",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stups-cli",
    "description": "PyPI meta package to pull user CLI tools",
    "language": "Python",
    "stars": 3,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stups-spring-oauth2-support",
    "description": "Spring-OAuth2 STUPS Support",
    "language": "Java",
    "stars": 2,
    "forks": 8,
    "contributors": 6,
    "score": 17.7
  },
  {
    "org": "zalando-stups",
    "name": "pierone-client-java",
    "description": "Java client library for Pier One",
    "language": "Java",
    "stars": 0,
    "forks": 1,
    "contributors": 3,
    "score": 4.2
  },
  {
    "org": "zalando-stups",
    "name": "zmon-entity-adapter",
    "description": "Push STUPS entities (such as KIO applications) to ZMON",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "spring-boot-zalando-stups-tokens",
    "description": "Spring-Boot integration for STUPS OAuth2",
    "language": "Java",
    "stars": 0,
    "forks": 3,
    "contributors": 3,
    "score": 7.4
  },
  {
    "org": "zalando-stups",
    "name": "spring-cloud-netflix-feign-tokens",
    "description": "Spring-Cloud-Netflix-Feign integration for STUPS OAuth2",
    "language": "Java",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "mocks",
    "description": "Mocked services needed for STUPS infrastructure: OAuth provider, IAM services, etc",
    "language": "JavaScript",
    "stars": 1,
    "forks": 5,
    "contributors": 5,
    "score": 11.6
  },
  {
    "org": "zalando-stups",
    "name": "aws-cloudtrail-processing-library",
    "description": "The AWS CloudTrail Processing Library helps Java developers to easily consume and process log files from AWS CloudTrail.",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "mint-storage",
    "description": "The secret rotator and distributor.  http://stups.readthedocs.org/en/latest/components/mint.html",
    "language": "Clojure",
    "stars": 1,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "mint-worker",
    "description": "The secret rotator and distributor.  http://stups.readthedocs.org/en/latest/components/mint.html",
    "language": "Clojure",
    "stars": 1,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "twintip-crawler",
    "description": "TWINTIP is an API definition crawler for the STUPS ecosystem http://docs.stups.io/en/latest/components/twintip.html",
    "language": "Clojure",
    "stars": 0,
    "forks": 1,
    "contributors": 5,
    "score": 6.8
  },
  {
    "org": "zalando-stups",
    "name": "twintip-storage",
    "description": "TWINTIP is an API definition crawler for the STUPS ecosystem http://docs.stups.io/en/latest/components/twintip.html",
    "language": "Clojure",
    "stars": 0,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "docker-maven-plugin",
    "description": "Maven plugin for running and creating Docker images",
    "language": "Java",
    "stars": 1,
    "forks": 1,
    "contributors": 32,
    "score": 37.4
  },
  {
    "org": "zalando-stups",
    "name": "httpie-zign",
    "description": "Zign OAuth plugin for HTTPie",
    "language": "Python",
    "stars": 6,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "ssh-tunnels",
    "description": "Command line utility to manage SSH tunnels for cluster applications on AWS",
    "language": "Python",
    "stars": 4,
    "forks": 4,
    "contributors": 4,
    "score": 12.2
  },
  {
    "org": "zalando-stups",
    "name": "python-tokens",
    "description": "Python library to manage OAuth access tokens",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "txdemarcator",
    "description": "Transaction Demarcator for AppDynamics",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "zalando-cheat-sheet-generator",
    "description": "Zalando cheat sheet generator",
    "language": "CSS",
    "stars": 3,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "deployctl2kio",
    "description": "Transfer DeployCtl projects to Kio",
    "language": "Clojure",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "pierone-image-size-updater",
    "description": "Queries Pierone DB for images of unknown size, then updates",
    "language": "Clojure",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "connection-tracker",
    "description": "Track public endpoints and connections across AWS accounts using VPC Flow Logs",
    "language": "Python",
    "stars": 6,
    "forks": 3,
    "contributors": 2,
    "score": 11.7
  },
  {
    "org": "zalando-stups",
    "name": "sqs-processing-library",
    "description": "Handle AWS SQS messages, e.g. S3 bucket notifications ",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "python-scm-source",
    "description": "Python module to generate scm-source JSON object according to STUPS docs.",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "team-statistics",
    "description": "STUPS team statistics overview page",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "swagger-codegen",
    "description": "swagger-codegen contains a template-driven engine to generate client code in different languages by parsing your Swagger Resource Declaration.",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "contributors": 129,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stups-cli-support",
    "description": "STUPS support library for command line tools",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "fullstop-cli",
    "description": "Simple command line utility to view and resolve fullstop. violations",
    "language": "Python",
    "stars": 1,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "swagger-codegen-tooling-app",
    "description": "An example-project-setup to show and test swagger-codegen-tooling project.",
    "language": "Shell",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "oauth2-proxy",
    "description": "OAuth2 proxy with authorization/redirect flow",
    "language": "Python",
    "stars": 4,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stups-feedback",
    "description": "'Stups-Customer-Feedback' application",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "kio-cli",
    "description": "CLI tool for Kio application registry",
    "language": "Python",
    "stars": 1,
    "forks": 1,
    "contributors": 1,
    "score": 3.2
  },
  {
    "org": "zalando-stups",
    "name": "dependency-spec",
    "description": "API specification for STUPS dependencies (authnz, ..)",
    "language": null,
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "plankton",
    "description": "Tests docker push/pull with Pier One",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "grapple-gun",
    "description": "A toolbar to facilitate seamless navigation between applications aka federated UI",
    "language": "Clojure",
    "stars": 0,
    "forks": 1,
    "contributors": 1,
    "score": 2.2
  },
  {
    "org": "zalando-stups",
    "name": "github-maintainer-cli",
    "description": "CLI support tool for GitHub repo maintainers",
    "language": "Python",
    "stars": 7,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "node-tokens",
    "description": "Like zalando-stups/tokens, but for Node.js",
    "language": "JavaScript",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stupsback-admin",
    "description": "The backend for STUPSback, \"Feed the penguin\".",
    "language": "Java",
    "stars": 3,
    "forks": 1,
    "contributors": 4,
    "score": 9.2
  },
  {
    "org": "zalando-stups",
    "name": "stupsback-js-console",
    "description": "",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "stupsback-js-button",
    "description": "",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-stups",
    "name": "white-fennec",
    "description": "the missing mai tool for mac",
    "language": "Swift",
    "stars": 2,
    "forks": 1,
    "contributors": 2,
    "score": 5.5
  },
  {
    "org": "zalando-stups",
    "name": "costreport",
    "description": "Send emails with cost reports for (multiple) AWS accounts to your teams.",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "hussar-website",
    "description": "Hugo Files",
    "language": "CSS",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "zalando-techmonkeys.github.io",
    "description": "Team Presentation",
    "language": "CSS",
    "stars": 2,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "docs",
    "description": "Documentation for our services",
    "language": "Python",
    "stars": 2,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "gin-gomonitor",
    "description": "Gin middleware for monitoring",
    "language": "Go",
    "stars": 10,
    "forks": 1,
    "contributors": 3,
    "score": 14.2
  },
  {
    "org": "zalando-techmonkeys",
    "name": "gin-glog",
    "description": "Gin middleware to use glog",
    "language": "Go",
    "stars": 7,
    "forks": 1,
    "contributors": 2,
    "score": 10.3
  },
  {
    "org": "zalando-techmonkeys",
    "name": "go-clitable",
    "description": "Command line (ASCII) table for Golang",
    "language": "Go",
    "stars": 1,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "kubernetes-podmaster",
    "description": "Our customization of Kubernete's podmaster hack. ",
    "language": "Go",
    "stars": 4,
    "forks": 2,
    "contributors": 2,
    "score": 8.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "gin-oauth2",
    "description": "Gin middleware for OAuth2 ",
    "language": "Go",
    "stars": 14,
    "forks": 2,
    "contributors": 6,
    "score": 22.4
  },
  {
    "org": "zalando-techmonkeys",
    "name": "macaque-zmon-agg",
    "description": "Macaque is an aggregator service, such that you can lookup values from JSON http endpoints.",
    "language": "Go",
    "stars": 3,
    "forks": 0,
    "contributors": 4,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "napping",
    "description": "Golang HTTP client library",
    "language": "Go",
    "stars": 0,
    "forks": 0,
    "contributors": 13,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "mesos-build-box",
    "description": "",
    "language": "Shell",
    "stars": 3,
    "forks": 0,
    "contributors": 1,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "baboon-proxy",
    "description": "F5 GTM/LTM Proxy API with OAuth2",
    "language": "Go",
    "stars": 5,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "chimp",
    "description": "Chimp: an opinionated deployer for mesos/marathon and kubernetes",
    "language": "Go",
    "stars": 16,
    "forks": 5,
    "contributors": 5,
    "score": 26.9
  },
  {
    "org": "zalando-techmonkeys",
    "name": "howler",
    "description": "Howler: waits to hear something in the Marathon Event Bus and shouts it to the other monkeys",
    "language": "Go",
    "stars": 5,
    "forks": 1,
    "contributors": 4,
    "score": 10.8
  },
  {
    "org": "zalando-techmonkeys",
    "name": "zookeeper_exporter",
    "description": "Prometheus exporter for monitoring a ZooKeeper ensemble.",
    "language": "Go",
    "stars": 1,
    "forks": 0,
    "contributors": 3,
    "score": 0.0
  },
  {
    "org": "zalando-techmonkeys",
    "name": "f5status",
    "description": "F5 Device Status API",
    "language": "Go",
    "stars": 5,
    "forks": 0,
    "contributors": 2,
    "score": 0.0
  }
];