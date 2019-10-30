require('./gulp/tasks/styles');
require('./gulp/tasks/watch');


// gulp.task('watch', function () {

//     browserSync.init({
//         notify: false,
//         server: {
//             baseDir: "app"
//         }
//     });

//     watch('./app/index.html', function () {
//         browserSync.reload();
//     });
//     watch('./app/assets/styles/**/*.css', function () {
//         gulp.start('cssInject');
//     });
// });

// gulp.task('cssInject', ['styles'], function () {

//     gulp.src('./app/temp/styles/styles.css')
//         .pipe(browserSync.stream());
// });