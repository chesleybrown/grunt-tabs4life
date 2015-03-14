'use strict';

var _ = require('lodash');
var path = require('path');

module.exports = function (grunt) {
	// Load grunt tasks we depend on
	grunt.task.loadTasks(__dirname + '/../node_modules/grunt-jscs/tasks');
	grunt.task.loadTasks(__dirname + '/../node_modules/grunt-contrib-jshint/tasks');
	grunt.task.loadTasks(__dirname + '/../node_modules/grunt-lintspaces/tasks');
	
	grunt.registerMultiTask('tabs4life', function () {
		var options = this.options({
			jshint: {}
		});
		
		// We only want jshint and jscs to check .js files
		var js = this.filesSrc.filter(function (filepath) {
			return path.extname(filepath) === '.js';
		});
		
		// Get jscs settings from .jscsrc file and load them as the defaults
		var jscsrc = grunt.file.readJSON(__dirname + '/../.jscsrc');
		grunt.config('jscs', {
			options: _.extend(jscsrc, options.jscs || {}),
			src: js
		});
		grunt.task.run('jscs');
		
		// Get jshint settings from .jshintrc file and load them as the defaults
		var jshintrc = grunt.file.readJSON(__dirname + '/../.jshintrc');
		grunt.config('jshint', {
			options: _.extend(jshintrc, options.jshint || {}),
			src: js
		});
		grunt.task.run('jshint');
		
		grunt.config('lintspaces', {
			/*
			 * Have to set defaults here instead of reading them from
			 * .editorconfig because then they wouldn't be able to override
			 * the options
			 */
			options: _.extend({
				indentation: 'tabs',
				newline: true,
				trailingspaces: false,
				ignores: [
					'js-comments'
				]
			}, options.lintspaces || {}),
			src: this.filesSrc
		});
		grunt.task.run('lintspaces');
	});
};
