const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/styles/'))
}

function comprimeImg() {
    return gulp.src('source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('build/images/'))
}

function comprimeJs() {
    return gulp.src('source/scripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts/'))
}

exports.default = function() {
    gulp.watch('source/styles/main.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg));
    gulp.watch('source/scripts/*js', {ignoreInitial: false}, gulp.series(comprimeJs));

}