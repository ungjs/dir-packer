'use strict';

var packDir = require('../');

packDir('./foo', './foo.tar.gz')
  .then(function() {
    console.log('success!');
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
      return;
    }
  });
