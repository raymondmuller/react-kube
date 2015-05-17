"use strict";

module.exports = function(karma) {
  karma.set({

    basePath: "",

    frameworks: [ "browserify", "phantomjs-shim", "mocha"],

    files: [
      "test/**/*Spec.js"
    ],

    reporters: [ "spec" ],

    preprocessors: {
      "test/**/*.js": [ "browserify" ],
      "src/**/*.js": [ "browserify" ]
    },

    browsers: [ "PhantomJS" ],

    // browserify configuration
    browserify: {
      debug: true,
      extensions: [".js"],
      transform: [ "babelify" ]
    }
  });
};
