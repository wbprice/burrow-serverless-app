'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const through2 = require('through2');

function compileTemplates(opts) {
    return gulp.src(opts.src)
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    }
                ]
            } 
        }))
        .pipe(through2.obj(function(chunk, env, callback) {
            const module = eval(chunk.contents.toString());
            console.log(module);

            this.push(chunk);
            callback();
        }))
        .pipe(gulp.dest(opts.dest))
}

module.exports = compileTemplates;
