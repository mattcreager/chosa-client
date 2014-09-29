/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

'use strict';

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var reactify = require('reactify');
var path = require('path');

gulp.task('browserify', function() {

  var bundler = browserify(path.resolve(__dirname, '../..', 'public/index.js'), {
    basedir: __dirname,
    debug: false,
    cache: {}, // required for watchify
    packageCache: {}, // required for watchify
    fullPaths: true, // required to be true only for watchify,
    globals: false
  });

  if (global.isWatching) {
    bundler = watchify(bundler);
  }

  bundler.transform(reactify);

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('app-build.js'))
      // Specify the output destination
      .pipe(gulp.dest('./public'))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});
