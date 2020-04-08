const sassWebpackConfig = require('./webpack.config.js')

module.exports = {
  components: './src',
  exampleCode: '',
  openBrowser: false,
  outputPath: './dist/playroom',
  webpackConfig: () => {
    return {
      module: {
        rules: [sassWebpackConfig],
      },
    }
  },
}
