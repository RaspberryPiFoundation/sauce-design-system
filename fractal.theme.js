// eslint-disable-next-line import/no-extraneous-dependencies
const mandelbrot = require('@frctl/mandelbrot')
const pkg = require('./package.json')

const sauceTheme = mandelbrot({
  favicon: '/theme/favicon.svg',
  highlightStyles:
    'https://highlightjs.org/static/demo/styles/atom-one-dark.css',
  information: [
    {
      label: '<b>Version</b>',
      value: pkg.version,
    },
    {
      label: '<b>Built on</b>',
      value: new Date(),
      type: 'time',
      format: (value) => value.toISOString().split('T')[0],
    },
  ],
  nav: ['search', 'docs', 'components', 'information'],
  panels: ['html', 'resources', 'notes', 'view', 'context', 'info'],
  scripts: ['default', '/theme/theme-switcher.js'],
  skin: 'maroon',
  styles: ['default', '/theme/theme-switcher.css'],
  themes: {
    'raspberry-pi': 'Raspberry Pi',
    'astro-pi': 'Astro Pi',
    'code-club-world': 'Code Club World',
    'code-club': 'Code Club',
    coderdojo: 'CoderDojo',
    'coolest-projects': 'Coolest Projects',
    'hello-world': 'Hello World',
  },
})
sauceTheme.addLoadPath(`${__dirname}/theme/views`)
sauceTheme.addStatic(`${__dirname}/theme/assets`, '/theme')

module.exports = sauceTheme
