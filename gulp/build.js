'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
    return gulp.src([
        paths.src + '/app/**/*.html',
        paths.tmp + '/app/**/*.html'
    ])
    .pipe($.if(function(file) {
        return $.match(file, ['!**/partials/*.html']);
    },
    $.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
)
.pipe($.angularTemplatecache('templateCacheHtml.js', {
    module: 'app',
    root  : 'app'
}))
.pipe(gulp.dest(paths.tmp + '/partials/'));
});

gulp.task('html', ['inject', 'partials'], function () {
    var partialsInjectFile = gulp.src(paths.tmp + '/partials/templateCacheHtml.js', { read: false });
    var partialsInjectOptions = {
        starttag: '<!-- inject:partials -->',
        ignorePath: paths.tmp + '/partials',
        addRootSlash: false
    };

    var htmlFilter = $.filter(['*.html', '!/src/app/elements/partials/*.html']);
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src(paths.tmp + '/serve/*.html')
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(paths.dist + '/'))
    .pipe($.size({ title: paths.dist + '/', showFiles: true }));
});

gulp.task('partials', function () {
    return gulp.src('src/**/partials/**/*.{js,scss,html}')
    .pipe(gulp.dest(paths.dist + '/'))
    .pipe($.size());
});

gulp.task('clean', function (done) {
    $.del([paths.dist + '/', paths.tmp + '/'], done);
});

gulp.task('buildapp', ['html', 'partials']);
