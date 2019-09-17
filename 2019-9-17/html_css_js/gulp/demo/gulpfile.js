const gulp = require('gulp'),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify");

gulp.task('default', function (next) {
    // 将你的默认的任务代码放在这
    gulp.src('dist/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
    gulp.src('dist/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('build'));
    gulp.src('dist/**/!(*.js|*.css)')
        .pipe(gulp.dest('build'));
    next();
});