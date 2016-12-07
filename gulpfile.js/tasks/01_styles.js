const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config').gulp;

var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

var browserSync = require('browser-sync').get('my-server');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


gulp.task('styles', function(){
	 gulp.src(config.srcDir.scss)
			.pipe(sass()).on('error', handleError)

			.pipe(autoprefixer())
			.pipe(sourcemaps.init())
			.pipe(cleanCss())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(config.destDir.scss))
			.pipe(browserSync.stream());
});

