var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('image', function () {
	return gulp.src('src/img/*.jpg', 'src/views/images/*.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('build/images'));
});