var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var inlineCss = require('gulp-inline-css');
var responsive = require('gulp-responsive-images');
 
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

gulp.task('pizza', function () {
  gulp.src('src/views/images/*.jpg')
    .pipe(responsive({
      'pizzeria.jpg': [{
        width: 100,
      }],
      '*.jpg': [{
        width: 600,
        crop: true
      }]
    }))
    .pipe(gulp.dest('dist/views/images'));
});

gulp.task('css', function() {
    return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});

//default task

gulp.task('default', ['minify-inline', 'image-1', 'pizza', 'css']);
