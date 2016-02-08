var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var inlineCss = require('gulp-inline-css');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('image', function () {
	return gulp.src('src/**/*.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('css', function() {
    return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/css'));
});
