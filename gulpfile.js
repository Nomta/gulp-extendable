'use strict';

var gulp 		= require('./gulp')(),
	config		= require('./gulp/config'),
	browserSync = require('browser-sync');

process.env.NODE_ENV = 'development';

gulp.task('default', ['dev']);

gulp.task('dev', ['browser-sync', 'build'], function() {
	gulp.start('watch');
});

gulp.task('prod', ['clean'], function() {
	process.env.NODE_ENV = 'production';
	gulp.start('build');
});

gulp.task('build', ['build-js', 'build-assets', 'build-css', 'build-html']); 

gulp.task('watch', function() {
	gulp.watch(config.js.src, 	['build-js']);
	gulp.watch(config.css.src, 	['build-css']);
	gulp.watch(config.assets, 	['build-assets']);
	gulp.watch(config.html.src, ['build-html']);
	
	gulp.watch(config.outputDir + '**/*').on('change', 	browserSync.reload);
});

