const gulp = require('gulp');
const del = require('del');
const gutil = require('gulp-util');

gulp.task('clean:css', (done) => {
  del(['src/**/*.css'], { dryRun: true }).then(paths => {
    gutil.log(gutil.colors.magenta('Files to delete: '), paths.join('\n'));
  })
})

gulp.task('default',['clean:css'] ,() => {

})
