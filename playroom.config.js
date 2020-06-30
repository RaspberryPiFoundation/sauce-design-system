const sassWebpackConfig = require('./webpack.config.js')

module.exports = {
  components: './src/components',
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
