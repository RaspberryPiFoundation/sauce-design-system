const sassWebpackConfig = require('./webpack.config.js')

module.exports = {
  components: './src/components',
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
