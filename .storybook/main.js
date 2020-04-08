const path = require('path')
const sass = require('sass')

module.exports = {
  addons: [
    'storybook-addon-playroom',
    'storybook-design-token',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    // '@storybook/addon-storyshots',
    // '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
  ],
  stories: [
    '../docs/*.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../src/**/*.stories.(js|mdx)',
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
            sassOptions: {
              includePaths: [
                'src',
                'node_modules/normalize-scss/sass',
                'node_modules/modularscale-sass/stylesheets',
              ],
              outputStyle: 'compressed',
            },
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    // Return the altered config
    return config
  },
}
