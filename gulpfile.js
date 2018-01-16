const gulp = require('gulp'),
      connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: process.env.PORT || 8000,
        livereload: true
    })
})

gulp.task('html', function () {
    gulp.src('./public/index.html')
    .pipe(connect.reload());
});
gulp.task('JS', function () {
    gulp.src('./public/js/main.js')
    .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('./public/CSS/main.css')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch(['./**/*.html'], ['html']);
    gulp.watch(['./**/*.js'], ['JS'])
    gulp.watch(['./**/*.css'], ['css'])
});

gulp.task('default', ['connect', 'watch'])