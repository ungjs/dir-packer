# pack-dir

A tool for packing directories into tar.gz files.

[![Dependency Status](https://david-dm.org/zkochan/pack-dir/status.svg?style=flat)](https://david-dm.org/zkochan/pack-dir)
[![Build Status](http://img.shields.io/travis/zkochan/pack-dir.svg?style=flat)](https://travis-ci.org/zkochan/pack-dir)
[![npm version](https://badge.fury.io/js/pack-dir.svg)](http://badge.fury.io/js/pack-dir)


## Installation

```
npm i --save pack-dir
```


## Usage

```js
var packDir = require('pack-dir');

packDir('./src-dir', '../dest-path', function(err) {
  if (err) {
    console.log('Error during compressing');
    console.log(err);
    return;
  }

  console.log('The compression was successfull!');
});
```


## License

The MIT License (MIT)
