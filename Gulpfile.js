const gulp = require('gulp');
const mocha = require('gulp-mocha');
const jsTestPaths = ['tests/Domain/**/*.js', 'tests/Application/**/*.js', 'tests/Infrastructure/**/*.js'];

gulp.task('testsTask', function () {
    return gulp.src(['tests/helper.js','tests/Domain/**/*.spec.js'], {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .once('error', function() {
            process.exit(1);
        })
        .once('end', function() {
            process.exit();
        });
});

gulp.task('tests',function() {
    gulp.watch(jsTestPaths,['testsTask']);
});

gulp.task('runtests', ['testsTask']);