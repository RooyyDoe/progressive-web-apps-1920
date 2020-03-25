const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat')

gulp.task('message', () => {
    return console.log('Gulp is running...');
});

gulp.task('minify-css', () => {
    return gulp.src('public/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('minify-js', () => {
    return gulp.src('public/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/dist/js'));
})

gulp.task('run', ['message', 'minify-css', 'minify-js']);

gulp.task('watch', ['default'], () => {
    gulp.watch('public/css/*.css', ['minify-css']);
    gulp.watch('public/js/*.js', ['minify-js']);
});

gulp.task('default', ['run']);