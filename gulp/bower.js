'use strict';

var path = require('path');
var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();


gulp.task('bower', ['clean'], function () {
    gulp.start('bower:build');
});

gulp.task('bower:build', ['bower:scripts', 'bower:styles', 'bower:scripts:minify', 'bower:styles:minify']);

gulp.task('bower:scripts:minify', ['bower:scripts'], function() {
    return gulp.src(paths.dist + '/**/*.js')
    .pipe($.uglify())
    .pipe($.rename(function (path) {
        path.extname = '.min.js';
    }))
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('bower:styles:minify', ['bower:styles'], function() {
    return gulp.src(paths.dist + '/**/*.css')
    .pipe($.csso())
    .pipe($.rename(function (path) {
        path.extname = '.min.css';
    }))
    .pipe(gulp.dest(paths.dist + '/'));
});

var sassOptions = {
    style: 'expanded',
    includePaths: [
        'bower_components'
    ]
};
