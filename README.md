# is-native

detect if a method is a native one

[![browser support](https://ci.testling.com/bloodyowl/is-native.png)](https://ci.testling.com/bloodyowl/is-native)

[![Build Status](https://travis-ci.org/bloodyowl/is-native.svg)](https://travis-ci.org/bloodyowl/is-native)

## install

```sh
$ npm install bloody-isnative
```

## require

```javascript
var isNative = require("bloody-isnative")
```

## api

### isNative(fn) > boolean

detects if a method is a native one

## example

```javascript
isNative(alert) // true
isNative(function(){}) // false
```
