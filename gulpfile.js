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

gulp.task('copy', function (){
	gulp.src('index.min.html')
	.pipe(rename('index.html'))
	.pipe(gulp.dest('dist'));

	gulp.src('favicon.ico')
	.pipe(gulp.dest('dist'));

	gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'));

	gulp.src('tpl/**/*')
	.pipe(gulp.dest('dist/tpl'));

	gulp.src('js/vendor/**/*')
	.pipe(gulp.dest('dist/js'));

	gulp.src('css/vendor/**/*')
	.pipe(gulp.dest('dist/css'));

	gulp.src('css/local/**/*')
	.pipe(gulp.dest('dist/css/local'));

});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('js/local/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'copy', 'watch']);
