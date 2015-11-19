# dir-packer

A tool for packing directories into tar.gz files.

[![Dependency Status](https://david-dm.org/zkochan/dir-packer/status.svg?style=flat)](https://david-dm.org/zkochan/dir-packer)
[![Build Status](http://img.shields.io/travis/zkochan/dir-packer.svg?style=flat)](https://travis-ci.org/zkochan/dir-packer)
[![npm version](https://badge.fury.io/js/dir-packer.svg)](http://badge.fury.io/js/dir-packer)


## Installation

```
npm i --save dir-packer
```


## Usage

Packing a directory.

```js
var packer = require('dir-packer');

packer.pack('./src-dir', './result.tar.gz')
  .then(function() {
    console.log('The compression was successfull!');
  })
  .catch(function(err) {
    console.log('Error during compressing');
    console.log(err);
  });
```

Unpacking a directory.

```js
var packer = require('dir-packer');

/* will unpack the content of foo.tar.gz to the foo directory */
packer.unpack('./foo.tar.gz', './foo')
  .then(function() {
    console.log('The tar successfully unpacked!');
  })
  .catch(function(err) {
    console.log('Error during unpacking');
    console.log(err);
  });
```


## License

The MIT License (MIT)
