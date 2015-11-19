'use strict';

var Targz = require('tar.gz');
var path = require('path');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');

function unpack(packPath, destPath) {
  return new Promise(function(fulfill, reject) {
    if (!packPath) {
      reject(new Error('packPath is required'));
      return;
    }
    if (!destPath) {
      reject(new Error('destPath is required'));
      return;
    }

    mkdirp.sync(destPath);

    new Targz().extract(packPath, destPath, function(err) {
      if (err) {
        reject(err);
        return;
      }

      rimraf(packPath, function(err) {
        if (err) {
          reject(err);
          return;
        }
        fulfill();
      });
    });
  });
}

module.exports = unpack;
