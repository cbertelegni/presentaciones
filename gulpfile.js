var gulp   = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', function() {
  gulp.src('.')
    .pipe(server({
      livereload:       true,
      directoryListing: false,
      open:             true,
      log:              'debug',
      clientConsole:    true,
      port: 			8080
    }));
});