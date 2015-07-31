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

## Provide different parameters (env specific configuration)

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

## Compatibility
 
Tested to work with >=IE10, Chrome, Firefox, Safari, and Opera.

## License

Copyright 2015 Zalando SE

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
