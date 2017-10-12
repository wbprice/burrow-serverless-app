'use strict';

const gulp = require('gulp');
const path = require('path');

const compileTemplates = require('./tasks/compileTemplates');

gulp.task('compileTemplates', () => compileTemplates({
    src: path.join(__dirname, 'app/assets/js/pages/**.js'),
    dest: './dist'
}));

gulp.task('default', ['compileTemplates']);

