'use strict';

module.exports = function(karma) {  
  karma.set({

    basePath: '',

    frameworks: [ 'browserify', 'mocha' ],

    files: [
      'test/**/*Spec.js'
    ],

    reporters: [ 'spec' ],

    preprocessors: {
      'test/**/*.js': [ 'browserify' ],
      'src/**/*.js': [ 'browserify' ]
    },

    browsers: [ 'Firefox' ],

    // browserify configuration
    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [ 'babelify' ]
    }
  });
};