'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('compileCSS', function () {
    return gulp.src('assets/src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/dst/css'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dst/css/min'))
});

gulp.task('watch', function() {
    gulp.watch('assets/src/scss/**/*.scss', ['compileCSS']);
});