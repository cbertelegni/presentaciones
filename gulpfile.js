const gulp   = require('gulp');
const browserSync = require('browser-sync');
const ghPages = require('gulp-gh-pages');


gulp.task('server', function () {


    // for more browser-sync config options: http://www.browsersync.io/docs/options/
    browserSync.init({

        port: 8080,

        // files: [ "source/**/*.*" ],
        // https: true,

        // open the proxied app in chrome
        // browser: ['google-chrome'],
        open: false,
        server: {
          baseDir: "source",
          directory: false
        },
        ghostMode: {
            clicks: true,
            scroll: true,
            forms: {
                submit: true,
                inputs: true,
                toggles: true,
                keypress: true,
                keydown: true,
                contenteditable: true,
                change: true
            },
            mouseup: true,
            mousedown: true
        },
        capture: true,
        clientEvents: [
          "scroll",
          "input:text",
          "input:toggles",
          "input:keydown",
          "input:keypress",
          "form:submit",
          "form:reset",
          "click",
          "contenteditable:input",
          "mouseup",
          "mousedown",
          "select:change"
        ],
    });

    gulp.watch([ "source/**/*.*"], function(){
        browserSync.reload();
    });

});



/** publish gh-page*/
gulp.task('gh-page', function() {

    return gulp.src('source/**/*')
        .pipe(ghPages());
});


 