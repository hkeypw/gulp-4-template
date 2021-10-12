//  Gulp
const { src, dest, parallel, series, watch } = require('gulp');

//  Browsersync
const browserSync = require('browser-sync').create();

//  gulp-sass 
const sass = require('gulp-sass')(require('sass'))
	 
//  Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
	 
//  gulp-clean-css
const cleancss = require('gulp-clean-css');

//  gulp-concat
const concat = require('gulp-concat');
	 
//  gulp-uglify-es
const uglify = require('gulp-uglify-es').default;

// gulp-pug
const pug = require('gulp-pug');

// sourcemap
const sourcemaps = require('gulp-sourcemaps');

// plumber
const plumber = require('gulp-plumber');

//  Browsersync
function browsersync() {
	browserSync.init({ 
		server: {
			baseDir: 'dist/',
			//index: "index.html"
		}, 
		notify: false, 
		online: true 
	})
}

// scss to css
function styles(done) {
  	src('src/scss/style.scss')
  	.pipe(plumber())
  	.pipe(sourcemaps.init())
  	.pipe(sass().on('error', sass.logError))
  	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
  	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
  	.pipe(sourcemaps.write('/maps'))
  	.pipe(dest('dist/assets/css'))
  	.pipe(browserSync.reload({stream: true})) 
  	done();
}

// js
function scripts() {
	return src([ 
		'src/js/app1.js', 
		'src/js/app2.js', 
		])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(concat('main.min.js')) 
	.pipe(uglify()) 
	.pipe(sourcemaps.write('/maps'))
	.pipe(dest('dist/assets/js/')) 
	.pipe(browserSync.stream()) 
}

// pug
function pug2html(){
	return src('src/pug/*.pug')
	.pipe(plumber())
	.pipe(pug({pretty: true}))
	.pipe(dest('dist/'))
}

// watch
function Watch(){
	watch(['src/js/*.js'], scripts);
	watch(['src/scss/**/*.scss'], styles);
	watch(['src/pug/**/*.pug'], pug2html);
	watch('dist/*.html').on('change', browserSync.reload);
}

// task styles() sacc to css
exports.styles = styles;

// task browsersync()
exports.browsersync = browsersync;

// task scripts
exports.scripts = scripts;

// task pug to html
exports.pug2html = pug2html;

// build 
exports.build = parallel(pug2html, styles, scripts);

// default
exports.default = parallel(pug2html, styles, scripts, Watch, browsersync);