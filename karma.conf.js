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

    browsers: [ 'Firefox' ], // Change to PhantomJS when karma supports PhantomJS 2.0

    // browserify configuration
    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [ 'babelify' ]
    }
  });
};