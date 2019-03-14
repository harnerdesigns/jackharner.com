var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    package = require('./package.json'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();



var browserSyncProxy = "./";


var sassFiles = ["scss/style.scss"];
var sassDest = "./";

var jsFiles = ['js/vendor/*.js', 'js/animations/*.js', 'js/*.js'];
var jsDest = "./"

var watchSassFiles = ['scss/**/*.scss'];
var watchJsFiles = jsFiles;
var watchPhpFiles = ['**/*.php', '**/*.html'];


gulp.task('sass', gulp.series(function(done) {
    gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({ sourceComments: 'map', outputStyle: 'compressed' }))
        .on('error', gutil.log)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write(sassDest))
        .pipe(gulp.dest(sassDest))
        .pipe(browserSync.stream());
    done();
}));




gulp.task('js', gulp.series(function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('theme.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write(jsDest))

        .pipe(gulp.dest(jsDest));
}));





gulp.task('watch', gulp.series(function() {
    gulp.watch(watchSassFiles, gulp.series('sass'));
    gulp.watch(watchJsFiles, gulp.series('js'));


}));






gulp.task('serve', gulp.parallel(function() {

  browserSync.init(null, {
  server: {
     baseDir: './',
     index: "index.html" // or index: "index.html"
  }
 });
}, function() {

    gulp.watch(watchSassFiles, gulp.series('sass'));

    gulp.watch(watchJsFiles, gulp.series('js'));

    gulp.watch(watchPhpFiles).on('change', browserSync.reload);

    gulp.watch("theme.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));