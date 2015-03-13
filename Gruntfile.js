'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	
	grunt.loadTasks('tasks');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tabs4life: {
			self: {
				src: [
					'.gitignore',
					'Gruntfile.js',
					'tasks/**/*.js',
					'README.md',
					'test/files/good/**/*'
				]
			},
			test_noConfig: {
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			test_jscsCustomConfig: {
				options: {
					jscs: {
						disallowTrailingWhitespace: true
					}
				},
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			test_jshintCustomConfig: {
				options: {
					jshint: {
						quotmark: 'double'
					}
				},
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			test_jscsBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_jscs.js'
				]
			},
			test_jshintBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_jshint.js'
				]
			},
			test_lintspacesBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_lintspaces.html'
				]
			}
		}
	});
	
	grunt.registerTask('default', ['tabs4life:self']);
};
