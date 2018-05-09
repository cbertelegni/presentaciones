var gulp   = require('gulp');
var server = require('gulp-server-livereload');
var ghPages = require('gulp-gh-pages');

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



// var conf = require('../gulp_opts').conf;

/** mahe and push github page branch from build folder */
gulp.task('gh-page', function() {

    return gulp.src('**/*')
        .pipe(ghPages());
});
