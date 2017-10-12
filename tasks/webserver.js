'use strict';

const gulp = require('gulp');
const webserver = require('gulp-webserver');

function startWebserver(opts) {
    return gulp.src(opts.src)
        .pipe(webserver({
            livereload: true,
            open: true,
            host: 'localhost',
            port: 8080
        }));
}

module.exports = startWebserver;
