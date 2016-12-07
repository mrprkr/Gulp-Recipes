const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
var named = require('vinyl-named');
const config = require('../../config').gulp;

var browserSync = require('browser-sync').get('my-server');


// Production config
const productionConf = {
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	]
}

// Development config
const developmentConf = {
	watch: true,
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js')
	]
}

// Task
gulp.task('scripts', function () {
	gulp.src(config.srcDir.js)
		.pipe(named())
		.pipe(gulpWebpack(config.production ? productionConf : developmentConf, webpack))
		.pipe(gulp.dest(config.destDir.js))
});

gulp.task('js-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});