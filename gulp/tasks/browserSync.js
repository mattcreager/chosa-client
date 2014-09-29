var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
    browserSync({
      files: [
        './public/*.html',
        './public/main-build.css',
        './public/app-build.js'
      ],
      server: {
        baseDir: './public/'
      }
    });
});