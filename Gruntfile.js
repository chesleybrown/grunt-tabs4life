'use strict';

module.exports = function (grunt) {
	grunt.loadTasks('tasks');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tabs4life: {
			self: {
				options: {
					jshint: {
						globals: {
							describe: true,
							it: true
						}
					}
				},
				src: [
					'.gitignore',
					'Gruntfile.js',
					'LICENSE',
					'tasks/**/*.js',
					'README.md',
					'test/*.js',
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
			test_lintspacesCustomConfig: {
				options: {
					lintspaces: {
						trailingspaces: true
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
