'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('autoprefixer-core'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('gulp-eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    p = {
      tmp: '.tmp',
      source: 'src',
      jsx: 'src/index.jsx',
      scss: 'src/index.scss',
      bundle: 'index.js',
      tmpJs: '.tmp/js',
      tmpCss: '.tmp/css',
      tmpImages: '.tmp/images',
      tmpFonts: '.tmp/fonts'
    };

gulp.task('clean', function(cb) {
  del([p.tmp], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: [p.source, p.tmp]
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.tmpJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.jsx)
    .transform(babelify)
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(p.tmpJs));
});

gulp.task('styles', function() {
  return gulp.src(p.scss)
    .pipe(changed(p.tmpCss))
    .pipe(sass({errLogToConsole: true}))
    .on('error', notify.onError())
    .pipe(postcss([autoprefixer('last 1 version')]))
    .pipe(csso())
    .pipe(gulp.dest(p.tmpCss))
    .pipe(reload({stream: true}));
});

gulp.task('images', function () {
  return gulp.src('src/assets/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(p.tmpImages));
});

gulp.task('fonts', function () {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest(p.tmpFonts));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.jsx')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.jsx', ['lint']);
  gulp.watch('src/assets/images/*', ['images']);
});

gulp.task('serve', ['clean'], function() {
  gulp.start(['browserSync', 'watch', 'watchify', 'styles', 'images', 'fonts', 'lint']);
});

// NOT READY YET! TODO
//gulp.task('build', ['clean'], function() {
//  process.env.NODE_ENV = 'production';
//  gulp.start(['browserify', 'styles', 'images']);
//});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
