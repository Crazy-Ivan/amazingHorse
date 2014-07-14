var browserify = require('broccoli-browserify');
var uglifyJavaScript = require('broccoli-uglify-js');
var jsHint = require('broccoli-jshint');
var mergeTrees = require('broccoli-merge-trees');
var sass = require('broccoli-sass');

var jsDir ='app';
var sassDir = ['sass'];

jsDir = jsHint(jsDir);
jsDir = uglifyJavaScript(jsDir, { mangle: true, compress: true });
jsDir = browserify(jsDir, { outputFile: 'main.js' });

sassDir = sass(sassDir, 'main.scss', 'main.css');

module.exports = mergeTrees([jsDir, sassDir, 'assets','public']);