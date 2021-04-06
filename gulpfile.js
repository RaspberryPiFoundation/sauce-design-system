const { dest, parallel, series, src, task, watch } = require('gulp')

const autoprefixer = require('autoprefixer')
const debug = require('gulp-debug')
const pkg = require('./package.json')
const postcss = require('gulp-postcss')
const prepend = require('gulp-prepend')
const rename = require('gulp-rename')
const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')

const { name, version, homepage, author } = pkg
const year = new Date().getFullYear()

const banner = (filename) => `/**
* ${name} ${version}
* ${homepage}
*
* ${filename}
* Copyright ${year}, ${author}
*/\n`

const compileSass = () => {
  console.log('- Compile application.scss')

  return src('scss/sauce.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass(
        {
          includePaths: ['node_modules']
        }
      ).on('error', (error) => console.log(error))
    )
    // .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(postcss([autoprefixer()]))
    .pipe(prepend(banner('sauce.min.css')))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('assets'))
    .pipe(debug())
}

const watchSass = () => {
  return watch('./**/*.scss').on('change', compileSass)
}

task('build', series(compileSass))
task('watch', series(watchSass))
task('default', series(compileSass, watchSass))
