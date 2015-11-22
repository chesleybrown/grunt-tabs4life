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
					'.jscsrc',
					'.jshintrc',
					'Gruntfile.js',
					'LICENSE',
					'tasks/**/*.js',
					'README.md',
					'test/*.js',
					'test/files/good/**/*'
				]
			},
			testNoConfig: {
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			testJscsCustomConfig: {
				options: {
					jscs: {
						disallowTrailingWhitespace: true,
						requireLineFeedAtFileEnd: false
					}
				},
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			testJshintCustomConfig: {
				options: {
					jshint: {
						quotmark: 'double'
					}
				},
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			testLintspacesCustomConfig: {
				options: {
					lintspaces: {
						trailingspaces: true
					}
				},
				src: ['Gruntfile.js', 'tasks/**/*.js']
			},
			testJscsBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_jscs.js'
				]
			},
			testJshintBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_jshint.js'
				]
			},
			testLintspacesBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_lintspaces.html'
				]
			},
			testEverythingBad: {
				src: [
					'Gruntfile.js',
					'tasks/**/*.js',
					'test/files/bad/test_bad.js'
				]
			}
		}
	});
	
	grunt.registerTask('default', ['tabs4life:self']);
};
