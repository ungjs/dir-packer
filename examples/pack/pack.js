'use strict';

var pack = require('../../').pack;

pack('./foo', './foo.tar.gz')
  .then(function() {
    console.log('success!');
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
      return;
    }
  });
