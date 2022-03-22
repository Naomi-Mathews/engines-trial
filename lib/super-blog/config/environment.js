/* eslint-env node */
'use strict';
let nodeSass = require('node-sass');

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'super-blog',
    environment
  };

  return ENV;
};
