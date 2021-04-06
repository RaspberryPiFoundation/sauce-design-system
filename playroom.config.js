const sassWebpackConfig = require('./webpack.config.js')

module.exports = {
  components: './scss/components',
  exampleCode: '',
  openBrowser: false,
  outputPath: './storybook-static/playroom',
  webpackConfig: () => {
    return {
      module: {
        rules: [sassWebpackConfig],
      },
    }
  },
}
