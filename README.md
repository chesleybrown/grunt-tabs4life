# grunt-tabs4life

[![Build Status](https://travis-ci.org/chesleybrown/grunt-tabs4life.svg?branch=master)](https://travis-ci.org/chesleybrown/grunt-tabs4life)
[![Dependency Status](https://david-dm.org/chesleybrown/grunt-tabs4life.svg)](https://david-dm.org/chesleybrown/grunt-tabs4life)
[![devDependency Status](https://david-dm.org/chesleybrown/grunt-tabs4life/dev-status.svg)](https://david-dm.org/chesleybrown/grunt-tabs4life#info=devDependencies)

Grunt task for enforcing a very opinionated coding style.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tabs4life --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tabs4life');
```

## tabs4life task
_Run this task with the `grunt tabs4life` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Typically you'll just want to provide files in the standard Grunt way.

```json
tabs4life: {
	src: 'path/to/files/*.js'
}
```

### Options
This is basically just a wrapper around existing grunt tasks, but passes the
opinionated options as their defaults. However you are free to override any
of these defaults. One important note is that `jscs` and `jshint` will ONLY be
used on `.js` files. `lintspaces` will be run against all files provided.

#### jscs
Pass this whatever you would pass for options for [grunt-jscs](https://github.com/jscs-dev/grunt-jscs).

#### jshint
Pass this whatever you would pass for options for [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint).

#### lintspaces
Pass this whatever you would pass for options for [grunt-lintspaces](https://github.com/schorfES/grunt-lintspaces).

```json
tabs4life: {
	options: {
		jscs: {
			disallowTrailingWhitespace: true
		},
		jshint: {
			quotmark: 'double'
		},
		lintspaces: {
			trailingspaces: true
		}
	}
	src: 'path/to/files/*.js'
}
```

## Running Tests
To execute all the tests, just run:

```
npm test
```

You can also just run the available `grunt` commands. The default
being to check the code styling of the project itself.

```
grunt
```

## Contact
You can follow me on twitter at [@Chesley](https://twitter.com/Chesley)
