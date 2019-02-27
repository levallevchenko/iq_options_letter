'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var inky = require('inky');
var inlineCss = require('gulp-inline-css');



//STYLES
gulp.task('styles', function () {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

//CONVERTE INKY
gulp.task('inky', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(inky())
    .pipe(gulp.dest('./build'));
});

//INLINE CSS
gulp.task('inline', function () {
  return gulp.src('./dist/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./inline'));
});

gulp.task('image', function () {
   return gulp.src('./img/*.{png,svg}')
        .pipe(gulp.dest('build/img'));
});       



//WATCH
gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./templates/**/*.html', gulp.series('inky'));
    gulp.watch('./dist/*.html', gulp.series('inline'))
}); 

gulp.task('build', gulp.series('styles', 'inky', 'inline', 'image'));