'use strict';

const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');

const compileTemplates = require('./tasks/compileTemplates');
const compileStyles = require('./tasks/compileStyles');
const startWebserver = require('./tasks/webserver');

gulp.task('compileTemplates', () => compileTemplates({
    src: path.join(__dirname, 'app/assets/js/pages/**.js'),
    dest: './dist'
}));

gulp.task('compileStyles', () => compileStyles({
    src: path.join(__dirname, 'app/assets/css/**.css'),
    dest: './dist'
}));

gulp.task('startWebserver', () => startWebserver({
    src: './dist'
}));

gulp.task('default', [
    'compileTemplates',
    'compileStyles',
]);

gulp.task('watch:assets', function() {
    gulp.watch('app/**/**.css', ['compileStyles']);
    gulp.watch('app/**/**.js', ['compileTemplates']);
});

gulp.task('watch', [
    'startWebserver',
    'watch:assets'
]);
