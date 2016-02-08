var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var imageResize = require('gulp-image-resize');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});

gulp.task('image', function () {
  gulp.src('src/img/*')
    .pipe(imageResize({ 
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/img'));
});