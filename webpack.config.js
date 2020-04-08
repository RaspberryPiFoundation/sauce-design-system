const sass = require('sass')

const sassWebpackConfig = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: sass,
        sassOptions: {
          includePaths: ['src', 'node_modules/normalize-scss/sass'],
          outputStyle: 'compressed',
        },
      },
    },
  ],
}

module.exports = sassWebpackConfig
