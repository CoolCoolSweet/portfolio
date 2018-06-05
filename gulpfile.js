const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('styles', function () {
    gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'))
        .pipe(reload({ stream: true }));
});

//Watch tasks

gulp.task('bs', () => {
    return browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['bs', 'styles'], () => {
    gulp.watch('./styles/**/*.scss', ['styles']);
    gulp.watch('./styles/styles.css', reload);
    gulp.watch('./*.html', reload);
    gulp.watch('./scripts/**/*.js', reload);
});
