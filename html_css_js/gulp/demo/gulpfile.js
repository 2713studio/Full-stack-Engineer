const gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('default', function (next) {
    // 将你的默认的任务代码放在这
    gulp.watch('src/app.js', function (event) {
        if (event.type === 'changed') {
            gulp.src('src/app.js')
                .pipe(jshint())
                .pipe(jshint.reporter()); // 输出检查结果
        }
    });
    // next();
});