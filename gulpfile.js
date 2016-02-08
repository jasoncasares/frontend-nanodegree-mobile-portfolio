var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
 
gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('dist/'))
});