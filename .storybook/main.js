const sassWebpackConfig = require('../webpack.config.js')

module.exports = {
  addons: [
    // Features
    '@storybook/addon-links',
    // Upper panel tabs
    '@storybook/addon-toolbars',
    '@storybook/addon-docs',
    'storybook-addon-playroom',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    // Lower panel tabs
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-mobile',
    // 'storybook-design-token',
  ],
  stories: [
    '../docs/*.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../scss/layouts/**/*.stories.mdx',
    '../scss/components/**/*.stories.mdx',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(sassWebpackConfig)

    return config
  },
}
