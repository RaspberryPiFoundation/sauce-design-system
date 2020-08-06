const sass = require('sass')
const postcssPresetEnv = require('postcss-preset-env')

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
          outputStyle: 'compressed',
          includePaths: ['node_modules/sass-true/sass'],
        },
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [postcssPresetEnv()],
      },
    },
  ],
}

module.exports = sassWebpackConfig
