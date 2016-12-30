var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rimraf = require('rimraf');
var templateCache = require('gulp-angular-templatecache');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var tsc = require('gulp-tsc');

var lcbweb = {
  app: require('./bower.json').appPath || 'www',
  dist: 'dist'
};
lcbweb.dist = lcbweb.app + '/' + lcbweb.dist;

var paths = {
  scripts: [ lcbweb.app + '/**/*.ts' ],
  styles: [ lcbweb.app + '/**/*.scss', '!' + lcbweb.app + '/lib/**/*.scss', '!' + lcbweb.app + '/styles/ionic.scss', '!' + lcbweb.app + '/styles/font-awesome.scss' ],
  ionic: [ lcbweb.app + '/styles/ionic.scss' ],
  fa: [ lcbweb.app + '/styles/font-awesome.scss' ],
  templates: [ lcbweb.app + '/features/**/*.html', lcbweb.app + '/components/**/*.html' ]
};

////////////////////////
//Reusable pipelines //
////////////////////////

///////////
//Tasks //
///////////

var _watch = false;
gulp.task('browserify', function() {
  return _browserify(`${lcbweb.app}/app.ts`, 'app.js');
});

var _browserify = function(src, dest) {
  var b = browserify({
    entries: src,
    debug: true
  });
  if (_watch) {
    b = watchify(b);
    _watch = false;
  }
  return b
    .plugin('tsify')
    .bundle()
    .on('error', function (err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(source(dest))
    .pipe(buffer())
    // .pipe(plugins.uglify({ mangle: false }))
    .pipe(gulp.dest(lcbweb.dist));
};

gulp.task('usemin', function() {
  return gulp.src(paths.index_pages)
    .pipe(plugins.useref())
    .pipe(gulpif('*.js', plugins.uglify()))
    .pipe(gulp.dest(lcbweb.app));
});

gulp.task('styles', function() {

  gulp.src(paths.ionic)
    .pipe(plugins.plumber())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(lcbweb.dist));

  gulp.src(paths.fa)
    .pipe(plugins.plumber())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(lcbweb.dist))

  return gulp.src(paths.styles)
    .pipe(plugins.plumber())
    .pipe(plugins.concat('all.scss'))   // combine all scss files so can use _media _mixins and _variables together
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('all.css'))
    .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(lcbweb.dist));

});

// gulp.task('default', ['sass', 'compile']);
//
// gulp.task('compile', function() {
//   gulp.src(paths.scripts)
//     .pipe(tsc())
//     .pipe(gulp.dest('www/js/'));
// });

// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//     .pipe(sass())
//     .on('error', sass.logError)
//     .pipe(gulp.dest('./www/css/'))
//     .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('./www/css/'))
//     .on('end', done);
// });

// gulp.task('watch', ['sass'], function() {
//   gulp.watch(paths.sass, ['sass']);
//   gulp.watch(paths.scripts, ['compile']);
// });

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(templateCache({ module: 'westleaf', transformUrl: function(url) {
      if (url.match(/^directive/)) {
        return 'components/' + url;
      }
      return 'features/' + url;
    }}))
    .pipe(gulp.dest(lcbweb.dist));

});

gulp.task('_watch', function () {
  _watch = true;
  gulp.watch(paths.scripts, [ 'browserify' ]);
  gulp.watch(paths.styles, [ 'styles' ]);
  // gulp.watch(paths.ionic, [ 'styles' ]);
  gulp.watch(paths.templates, [ 'templates' ]);
});

///////////
//Build //
///////////

gulp.task('clean', function (cb) {
  rimraf(`${lcbweb.app}/dist`, cb);
});

gulp.task('build', [ 'browserify', 'styles', 'templates' ]);
gulp.task('default', [ 'build' ]);
gulp.task('watch', [ 'build', '_watch' ]);
