'use strict';

var _ = require('lodash');
var path = require('path');

module.exports = function (grunt) {
	grunt.registerMultiTask('tabs4life', function () {
		var options = this.options({
			jshint: {}
		});
		
		var js = this.filesSrc.filter(function (filepath) {
			return path.extname(filepath) === '.js';
		});
		
		var jshintrc = grunt.file.readJSON(__dirname + '/../.jshintrc');
		grunt.config('jshint', {
			options: _.extend(jshintrc, options.jshint || {}),
			src: js
		});
		grunt.task.run('jshint');
		
		var jscsrc = grunt.file.readJSON(__dirname + '/../.jscsrc');
		grunt.config('jscs', {
			options: _.extend(jscsrc, options.jscs || {}),
			src: js
		});
		grunt.task.run('jscs');
		
		grunt.config('lintspaces', {
			options: _.extend({
				editorconfig: __dirname + '/../.editorconfig',
				ignores: [
					'js-comments'
				]
			}, options.lintspaces || {}),
			src: this.filesSrc
		});
		grunt.task.run('lintspaces');
	});
};
