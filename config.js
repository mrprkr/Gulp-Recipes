const path = require('path');
exports = module.exports;


exports.gulp = {
	production: process.env.NODE_ENV === 'production',
	srcDir: {
		base: 'src',
		js: [path.join(__dirname, 'src/js/main.js')],
		assets: path.join(__dirname, 'src/assets/**/*'),
		scss: path.join(__dirname, 'src/scss/**/*.scss'),
	},
	destDir: {
		scss: path.join(__dirname, '/public/styles/'),
		js: path.join(__dirname, '/public/scripts/'),
	}
}


exports.server = {

}