'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const through2 = require('through2');
const named = require('vinyl-named');
const { parse }  = require('path');
const { renderToString } = require('react-dom/server');
const { createElement } = require('react');

function compileTemplates(opts) {
    return gulp.src(opts.src)
        .pipe(named())
        .pipe(webpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react', 'es2015']
                    }
                }]
            } 
        }))
        .pipe(through2.obj(function(vinyl, env, callback) {
            const Module = eval(vinyl.contents.toString()).default;
            const html = renderToString(createElement(Module), {});
            vinyl.contents = Buffer.from(html, 'utf8');
            vinyl.basename = `${parse(vinyl.basename).name.toLowerCase()}.html`
            this.push(vinyl);
            callback();
        }))
        .pipe(gulp.dest(opts.dest))
}

module.exports = compileTemplates;
