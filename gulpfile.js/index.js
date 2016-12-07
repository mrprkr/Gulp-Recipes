require('require-dir')('./tasks');
const gulp = require('gulp')
const config = require('../config').gulp
var browserSync = require('browser-sync').get('my-server');


gulp.task('default', ['styles', 'scripts', 'serve'], function() {
	gulp.watch(config.srcDir.scss, ['styles']);
	
	// gulp.watch("public/scripts/*.js".on('change', browserSync.reload));

	gulp.watch("templates/**/*.pug").on('change', browserSync.reload);
})


gulp.task('build', ['styles', 'scripts'], function(){
	console.log('Build complete...')
});