# zalando.github.io 

Zalando github io page **DEV** repository.

[![Build Status](https://travis-ci.org/zalando/zalando.github.io-dev.svg?branch=dev)](https://travis-ci.org/zalando/zalando.github.io-dev)


## Install

Clone the repository and run ```npm install```

## Run and watch for changes

```npm start``` or ```gulp start```

## Tests

Before run tests be sure you have a ```src/config/parameters.json``` file. (run ```gulp parameters```)

```npm test```

## Lint

```npm run lint``` or ```gulp lint```

### Provide different parameters (env specific configuration)

Add a new json file in the ```src/config``` folder called  ```parameters.<ENV>.json```.

Example (src/config/parameters.prod.json):

```json
{
  "CATWATCH_API" : {
    "BASE_URL": "api.catwatch.com"
  }
}
```

Run the task with the env flag.

```npm start -- --env=prod``` or ```gulp start --env=prod```

The generated ```src/config/parameters.json``` file is the result of a merge 
between ```src/config/parameters.default.json``` and ```src/config/parameters.prod.json```. 

## How to deploy

**Always** move/checkout the **master** branch first.
 
```git checkout master```

Then to deploy the [project page](https://zalando.github.io/zalando.github.io-dev) (```gh-pages``` branch), run:

```gulp deploy```

To deploy the [organization page](https://zalando.github.io), run: 

```gulp deploy --organization```  


-------------------

Base skeleton was:

# React Starterify


[![Build Status](https://travis-ci.org/Granze/react-starterify.svg?branch=master)](https://travis-ci.org/Granze/react-starterify)
[![bitHound Score](https://www.bithound.io/github/Granze/react-starterify/badges/score.svg)](https://www.bithound.io/github/Granze/react-starterify/master)

A minimal and solid React JS application skeleton.

## Start small, add only what you need.

This starter kit aims to give you a good starting point for your projects. If you're looking for a minimal ES6 React JS starter, this is probably for you.

## Why there are no Flux or Isomorphic things inside?

If you are a beginner, you probably don't want a complex structure with lots of things to care about.
If you are an advanced user, why should I choose a Flux implementation for you? 

## Usage

__Clone this repository:__

`git clone https://github.com/Granze/react-starterify.git`

__Install the dependencies:__

`npm install`

__Test:__

`npm run test`

__Development mode with livereload:__

`gulp watch`

__When you are done, create a production ready version of the JS bundle:__

`gulp build`

## Tools used:

__Build__
- [Gulp](http://gulpjs.com/)

__Styles__
- [Gulp-sass](https://www.npmjs.org/package/gulp-sass)
- [Gulp-csso](https://www.npmjs.org/package/gulp-csso)
- [gulp-autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer)

__JSX tranform/ES6 support__
- [Babel (formerly 6to5)](https://github.com/babel/babel)

__Minification__
- [Gulp-uglify](https://github.com/terinjokes/gulp-uglify/)

__Modules__
- [Browserify](http://browserify.org/)

__Ajax__
- [Superagent](http://visionmedia.github.io/superagent/)

__Server/livereload__
- [Browser Sync](http://www.browsersync.io/)

__Code linting__
- [Eslint](http://eslint.org/)

__Test__
- [Mocha](http://mochajs.org/)
- [Chai](http://chaijs.com/)
