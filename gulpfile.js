var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminJpegoptim = require('imagemin-jpegoptim');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('image', function () {
	return gulp.src('src/img/*.jpg', 'src/views/images/*.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('imagejpeg', function () {
	return gulp.src('src/img/*.jpg', 'scr/views/images/*.jpg')
		.pipe(imageminJpegoptim({progressive: true})())
		.pipe(gulp.dest('dist/images'));
});