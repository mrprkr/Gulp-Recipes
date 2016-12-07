var gulp = require('gulp');
var config = require('../../config').gulp;
var browserSync = require('browser-sync').create('my-server');
var nodemon = require('gulp-nodemon')



gulp.task('nodemon', function (cb) {
	
	return nodemon({
		script: 'server.js',
		watch: [
			'server.js',
			'config.js',
			'gulpfile.js/**/*'
		]
	}).once('start', cb)
});


gulp.task('serve', ['nodemon'], function(){
	browserSync.init({
		proxy: "localhost:3000",
		port: 7000,
		files: ["src/**/*.*"],
	});
});