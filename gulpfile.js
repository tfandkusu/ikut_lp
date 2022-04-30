const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src('./views/index.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./dist'));
});
