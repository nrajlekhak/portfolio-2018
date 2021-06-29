const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const cssConcat = require('gulp-concat-css');
const clean = require('gulp-clean-css');

/* 
  top level gulp functions

  gulp.task => define tasks
  gulp.src => point to files to use
  gulp.dest => points to folder to output
  gulp.watch => watch for changes in files 

 */
gulp.task('default', ['copyhtml','scripts','styles','images']);
 //copy html to dist
 gulp.task('copyhtml', function(){
    gulp.src('*.html').pipe(gulp.dest('dist'));

 });

//minify images
gulp.task('images', () =>
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

//scripts 

gulp.task('scripts', function(){
gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//styles

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
      // .pipe(cssConcat('app.css'))
      .pipe(clean())
      .pipe(gulp.dest('dist/css'));
  });