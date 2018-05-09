const gulp   = require('gulp');
const server = require('gulp-server-livereload');
const ghPages = require('gulp-gh-pages');
const image = require('gulp-image');

gulp.task('server', function() {
  gulp.src('source/')
    .pipe(server({
      livereload:       true,
      directoryListing: false,
      open:             true,
      log:              'debug',
      clientConsole:    true,
      port: 			8080
    }));
});


/** publish gh-page*/
gulp.task('gh-page', function() {

    return gulp.src('source/**/*')
        .pipe(ghPages());
});


 