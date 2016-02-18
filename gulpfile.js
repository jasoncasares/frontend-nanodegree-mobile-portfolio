var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var inlineCss = require('gulp-inline-css');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('image-1', function () {
	return gulp.src('src/img/*.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('image-2', function () {
	return gulp.src('src/views/images/pizzeria.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/views/images'));
});

gulp.task('css', function() {
    return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});

//default task

gulp.task('default', ['minify-inline', 'image-1', 'image-2', 'css']);
