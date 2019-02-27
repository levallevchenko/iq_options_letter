'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var varinky = require("inky");
var inlineCss = require("gulp-inline-css");
var inlinesource = require("gulp-inline-source");


//STYLES
gulp.task('styles', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

//CONVERTE INKY
gulp.task('inky', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(inky())
    .pipe(gulp.dest('./dist'));
});

//INLINE CSS
gulp.task('inline', function () {
  return gulp.src('./dist/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./dist/inlined'));
});


//WATCH
gulp.task('default',function() {
    gulp.watch('./scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./templates/**/*.html', gulp.series('inky'));
    gulp.watch('./dist/*.html', gulp.series('inline'))
}); 

