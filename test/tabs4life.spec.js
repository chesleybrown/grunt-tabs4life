'use strict';

var path = require('path');
var expect = require('chai').expect;
var exec = require('child_process').exec;
var execOptions = {
	cwd: path.join(__dirname, '..')
};

describe('Grunt tabs4life', function () {
	this.timeout(5000);
	
	describe('when checking self', function () {
		it('should be lint free', function (done) {
			exec('grunt', execOptions, function (error, stdout) {
				expect(error).to.be.null;
				expect(stdout).to.contain('files lint free.');
				done();
			});
		});
	});
	
	describe('and custom config for', function () {
		describe('nothing', function () {
			it('should be lint free', function (done) {
				exec('grunt tabs4life:testNoConfig', execOptions, function (error, stdout) {
					expect(error).to.be.null;
					expect(stdout).to.contain('files lint free.');
					done();
				});
			});
		});
		
		describe('jscs', function () {
			it('should now find jscs errors', function (done) {
				exec('grunt tabs4life:testJscsCustomConfig', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('Illegal trailing whitespace');
					done();
				});
			});
		});
		
		describe('jshint', function () {
			it('should now find jshint errors', function (done) {
				exec('grunt tabs4life:testJshintCustomConfig', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('Strings must use doublequote.');
					done();
				});
			});
		});
		
		describe('lintspaces', function () {
			it('should now find lintspace errors', function (done) {
				exec('grunt tabs4life:testLintspacesCustomConfig', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('Unexpected trailing spaces found.');
					done();
				});
			});
		});
	});
	
	describe('when used on files that are bad', function () {
		describe('because they fail jscs', function () {
			it('should now find jscs errors', function (done) {
				exec('grunt tabs4life:testJscsBad', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('One (or more) spaces required before opening brace for block expressions');
					expect(stdout).to.contain('Missing line feed at file end');
					done();
				});
			});
		});
		
		describe('because they fail jshint', function () {
			it('should now find jshint errors', function (done) {
				exec('grunt tabs4life:testJshintBad', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('is defined but never used.');
					done();
				});
			});
		});
		
		describe('because they fail lintspaces', function () {
			it('should now find lintspace errors', function (done) {
				exec('grunt tabs4life:testLintspacesBad', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('Unexpected spaces found.');
					done();
				});
			});
		});
		
		describe('because they everything is bad', function () {
			it('should now errors', function (done) {
				exec('grunt tabs4life:testEverythingBad', execOptions, function (error, stdout) {
					expect(error).not.to.be.null;
					expect(stdout).to.contain('code style errors found');
					done();
				});
			});
		});
	});
});
