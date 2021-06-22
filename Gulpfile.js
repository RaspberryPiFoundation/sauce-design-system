/* eslint-disable no-console */
const { dest, series, src, task, watch } = require('gulp')

const debug = require('gulp-debug')
const postcss = require('gulp-postcss')
const prepend = require('gulp-prepend')
const rename = require('gulp-rename')
const cssnano = require('cssnano')
const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')
const webserver = require('gulp-webserver')

const pkg = require('./package.json')

const { name, version, homepage, author } = pkg
const year = new Date().getFullYear()

const banner = (filename) => `/**
 * ${name} ${version}
 * ${homepage}
 *
 * ${filename}
 * Copyright ${year}, ${author}
 */\n`

const build = () => {
  console.log('- Compile application.scss')

  return src('theme/assets/sauce.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', (error) => console.log(error))
    )
    .pipe(postcss([cssnano()]))
    .pipe(prepend(banner('sauce.min.css')))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('public'))
    .pipe(debug())
}

const serve = () => {
  return src('dist').pipe(webserver())
}

const start = () => {
  return watch('./**/*.scss').on('change', build)
}

task('build', build)
task('serve', serve)
task('start', series(build, start))
