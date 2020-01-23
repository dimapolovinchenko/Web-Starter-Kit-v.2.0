var gulp         = require('gulp'), // Connect Gulp
		sass         = require('gulp-sass'), // Installing Sass
		browserSync  = require('browser-sync').create(), // Include browserSync
		concat       = require('gulp-concat'), // Plugin for concatination
		uglify       = require('gulp-uglify-es').default, // Minimize Js
		cleancss     = require('gulp-clean-css'), // Remove useless css from project and minimize Css 
		autoprefixer = require('gulp-autoprefixer'), // Puts autoprefix to css properties
		rsync        = require('gulp-rsync'), // Deploy to server
		newer        = require('gulp-newer'), // Use gulp task only for new or modify files
		rename       = require('gulp-rename'), // Rename our files
		del          = require('del'); // Library for removing files and folders

// Local Server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

// Custom Styles
gulp.task('styles', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({
		outputStyle: 'expanded',
		includePaths: [__dirname + '/node_modules']
	}))
	.pipe(concat('styles.min.css'))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

// Scripts & JS Libraries
gulp.task('scripts', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.slim.min.js', // Jquery
		'node_modules/bootstrap/dist/js/popper.min.js', // Bootstrap Js
		'node_modules/bootstrap/dist/js/bootstrap.min.js', // Bootstrap Js
		'app/js/_lazyload.js', // Lazy load
		'app/js/_custom.js', // Custom scripts. Always at the end
		])
	.pipe(concat('scripts.min.js')) // Concat scripts
	.pipe(uglify()) // Minify js (opt.)
	.pipe(gulp.dest('app/js')) // Deploy in folder app/js
	.pipe(browserSync.reload({ stream: true })) // Reload browser if nessesery
});

// Code & Reload
gulp.task('code', function() {
	return gulp.src('app/**/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

// Deploy
gulp.task('rsync', function() {
	return gulp.src('app/')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Included files
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excluded files
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch(['app/js/_custom.js', 'app/js/_libs.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));