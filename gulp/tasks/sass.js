var sass = require('gulp-sass');
var rename = require('gulp-rename');
var bourbon = require('node-bourbon');
var gulp = require('gulp');

gulp.task('sass', function () {
  gulp.src('./public/scss/*.scss')
      .pipe(sass({
        errLogToConsole: true,
        includePaths: bourbon.includePaths
      }))
      .pipe(rename('main-build.css'))
      .pipe(gulp.dest('./public'));
});