'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    gulp.src(['js/local/**/*.js'])
        .pipe(concat('zcode.min.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

gulp.task('copy-css', function (){
	gulp.src('css/vendor/**/*')
	.pipe(gulp.dest('dist/css'))
});

gulp.task('copy-js', function (){
	gulp.src('js/vendor/**/*')
	.pipe(gulp.dest('dist/js'))
});

gulp.task('copy-html', function (){
	gulp.src('tpl/**/*')
	.pipe(gulp.dest('dist/tpl'))
});

gulp.task('copy-img', function (){
	gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'))
});

gulp.task('copy-index', function (){
	gulp.src('index.min.html')
	.pipe(rename('index.html'))
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('js/local/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'copy-index', 'copy-html', 'copy-img', 'copy-js', 'copy-css', 'watch']);
