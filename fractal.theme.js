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
  labels: {
    panels: {
      html: 'HTML',
      resources: 'Resources',
      notes: 'Usage Docs',
      // view: 'Template Example',
      // context: 'Props',
      info: 'Info',
    },
  },
  nav: ['search', 'docs', 'components', 'information'],
  panels: ['html', 'resources', 'notes', 'view', 'context', 'info'],
  skin: 'maroon',
  styles: [
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&amp;family=Roboto+Slab:wght@400;700&amp;family=Space+Mono&amp;display=swap',
    'default',
    '/theme/fractal.css',
  ],
})
sauceTheme.addLoadPath(`${__dirname}/theme/views`)
sauceTheme.addStatic(`${__dirname}/theme/assets`, '/theme')

module.exports = sauceTheme
