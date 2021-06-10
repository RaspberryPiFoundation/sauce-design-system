/**
 * See https://storybook.js.org/docs/react/essentials/introduction
 */

module.exports = {
  addons: [
    // Background addons (don't add anything to UI)
    '@storybook/addon-links',
    '@storybook/preset-scss',

    // Top Toolbar - added to toolbar UI in order of declaration
    '@storybook/addon-essentials',

    // Addons Drawer - added to drawer UI in order of declaration
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
  ],
  features: {
    postcss: false,
  },
  stories: [
    '../docs/index.stories.mdx',
    '../docs/design-principles.stories.mdx',
    '../docs/design-process.stories.mdx',
    '../docs/get-started/**/*.stories.mdx',
    '../docs/personas/**/*.stories.mdx',
    '../docs/styles/**/*.stories.mdx',
    '../docs/accessibility-inclusion/**/*.stories.mdx',
    '../components/**/*.stories.mdx'
  ]
}
