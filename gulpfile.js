'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    exec = require('child_process').exec,
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    runSequence = require('run-sequence'),
    autoprefixer = require('autoprefixer-core'),
    browserify = require('browserify'),
    ghPages = require('gulp-gh-pages'),
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
    ghPages = require('gulp-gh-pages'),
    assign = require('object-assign'),
    fs = require('fs'),
    _ = require('lodash'),
    p = {
      tmp: '.tmp',
      dist: 'dist',
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
  return del([p.tmp, '!dist/.git', 'dist/**/*'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: [p.source, p.tmp]
    }
  });
});

gulp.task('watchify', function() {
  var customOpts = {
    entries: [p.jsx],
    debug: true
  };
  var opts = assign({}, watchify.args, customOpts);
  var bundler = watchify(browserify(p.jsx, opts));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(p.tmpJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  return browserify(p.jsx)
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
  return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest(p.tmpFonts));
});

/**
 * Lint js files with eslint
 */
gulp.task('lint', function() {
  return gulp.src(['src/**/*.{jsx,js}','!src/**/*-{mock,test}.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

/**
 * Run tests (wraps npm command)
 */
gulp.task('test', function (cb) {
  exec('npm test --- --reporter spec', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

/**
 * Watch for changes
 */
gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.jsx', ['lint']);
  gulp.watch('src/assets/images/*', ['images']);
});

/**
 * start the development server and watch for changes
 */
gulp.task('start', ['clean','parameters'], function() {
  runSequence(['watch', 'watchify', 'styles', 'images', 'fonts'], 'browserSync');
});

gulp.task('copy-dist', function () {
  return gulp.src(['.tmp/**/*','src/index.html']).pipe(gulp.dest(p.dist));
});

/**
 * Build a production ready version
 */
gulp.task('build', ['clean','parameters'], function (done) {
  runSequence('lint', 'test', ['browserify', 'styles', 'images', 'fonts'], 'copy-dist', done);
});

/**
 * Custom task to generate parameters.json file that contains
 * env dependent configuration values.
 *
 * Usage:
 *
 * gulp parameters [--env=<name>]
 *
 */
gulp.task('parameters', function (done) {
  var argv = require('yargs').argv;
  var env = argv.env;
  var defaultParameters = require('./src/config/parameters.default.json');
  var envParametersFileName = env ? ('./src/config/parameters.'  + env + '.json') : null;
  var parameters =  _.extend({}, defaultParameters);

  if(env && envParametersFileName && fs.existsSync(envParametersFileName)) {
    parameters = _.merge({}, parameters, require(envParametersFileName));
  }

  fs.writeFileSync('./src/config/parameters.json', JSON.stringify(parameters, null, 2));
  done();
});

/**
 * Deploy the application to gh-pages branch (gulp deploy)
 * or
 * to zalando.github.io master branch (gulp deploy --organization)
 */
gulp.task('deploy', ['build'], function () {
  var argv = require('yargs').argv;
  var organization = argv.organization;
  var organizationOptions = {
      remoteUrl: 'https://github.com/zalando/zalando.github.io.git',
    branch: 'master',
    cacheDir: '.publish-organization'
  };
  var src = gulp.src('./dist/**/*');

  if (organization) {
    return src.pipe(ghPages(organizationOptions))
  } else{
    return src.pipe(ghPages());
  }
});

gulp.task('default', ['start']);
