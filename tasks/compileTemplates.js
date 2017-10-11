'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

function compileTemplates(opts) {
    return gulp.src(opts.src)
        .pipe(babel({
            presets: ['env', 'react']
        }))
        .pipe(gulp.dest(opts.dest))
}

module.exports = compileTemplates;
