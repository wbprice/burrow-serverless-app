'use strict';

const gulp = require('gulp');
const concatCss = require('gulp-concat-css');

function compileStyles(opts) {
    return gulp.src(opts.src)
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest(opts.dest));
}

module.exports = compileStyles;
