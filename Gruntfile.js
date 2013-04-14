/*
 * grunt-blueprints
 * https://github.com/tombooth/grunt-blueprints
 *
 * Copyright (c) 2013 Tom Booth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    blueprints: {
      default_options: {
        options: {
        },
        src: 'test/templates',
        dest: 'tmp/templates.min.js'
      },
      custom_options: {
        options: {
          minify: false
        },
        src: 'test/templates',
        dest: 'tmp/templates.js'
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'blueprints']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
