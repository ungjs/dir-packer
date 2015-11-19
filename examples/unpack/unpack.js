'use strict';

var unpack = require('../../').unpack;

unpack('./bar.tar.gz', './bar')
  .then(function() {
    console.log('success!');
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
      return;
    }
  });
