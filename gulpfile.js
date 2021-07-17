'use strict'

const gulp = require('gulp')
const del = require('del')
const webpack = require('webpack-stream')
const browsersync = require('browser-sync').create()
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')

const PATH_SRC = {
  allHTML: './src/*.html',
  entrySASS: './src/sass/style.scss',
  allSASS: './src/sass/**/*.scss',
  entryJS: './src/js/main.js',
  allJS: './src/js/**/*.js',
  assets: './src/assets/**/*.*',
  favicons: './src/assets/favicons/**/*.*',
}
const PATH_PUBLIC = './public'

gulp.task('copy-html', () => {
  return gulp
    .src(PATH_SRC.allHTML)
    .pipe(gulp.dest(PATH_PUBLIC))
    .pipe(browsersync.stream())
})

gulp.task('dev-sass', () => {
  return gulp
    .src(PATH_SRC.entrySASS, { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(PATH_PUBLIC, { sourcemaps: '.' }))
    .pipe(browsersync.stream())
})

gulp.task('prod-sass', () => {
  return gulp
    .src(PATH_SRC.entrySASS, { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(PATH_PUBLIC, { sourcemaps: '.' }))
})

gulp.task('build-js', () => {
  return gulp
    .src(PATH_SRC.entryJS)
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'bundle.js',
        },
        watch: false,
        devtool: 'eval-source-map',
      }),
    )
    .pipe(gulp.dest(PATH_PUBLIC))
})

gulp.task('build-prod-js', () => {
  return gulp
    .src(PATH_SRC.entryJS)
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'bundle.js',
        },
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: 'usage',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      }),
    )
    .pipe(gulp.dest(PATH_PUBLIC))
})

gulp.task('copy-assets', () => {
  return gulp
    .src([PATH_SRC.assets, '!./src/assets/favicons/**/*.*'])
    .pipe(gulp.dest(PATH_PUBLIC + '/assets'))
})

gulp.task('copy-favicons', () => {
  return gulp.src(PATH_SRC.favicons).pipe(gulp.dest(PATH_PUBLIC))
})

gulp.task('cleanBuildFolder', () => {
  return del('public')
})

gulp.task('cleanJunkFiles', () => {
  return del('public/**/*.map')
})

// Watch files
function reload(done) {
  browsersync.reload()
  done()
}

gulp.task('watch', () => {
  browsersync.init({
    server: {
      baseDir: PATH_PUBLIC,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    port: 4000,
    notify: false,
    open: false,
    cors: true,
    ui: false,
  })

  gulp.watch(PATH_SRC.allHTML, gulp.parallel('copy-html'))
  gulp.watch(PATH_SRC.allSASS, gulp.parallel('dev-sass'))
  gulp.watch(PATH_SRC.assets, gulp.parallel('copy-assets', reload))
  gulp.watch(PATH_SRC.favicons, gulp.parallel('copy-favicons', reload))
  gulp.watch(PATH_SRC.allJS, gulp.parallel('build-js', reload))
})

// Complex tasks
gulp.task(
  'build',
  gulp.series(
    'cleanBuildFolder',
    gulp.parallel(
      'copy-html',
      'dev-sass',
      'copy-assets',
      'copy-favicons',
      'build-js',
    ),
  ),
)

gulp.task('default', gulp.parallel('watch', 'build'))
