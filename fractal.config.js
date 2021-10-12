const fractal = require('@frctl/fractal')
const pkg = require('./package.json')

const sauce = fractal.create()
const sauceTheme = require('./fractal.theme')

sauce.set('project.title', 'Sauce Design System')
sauce.set('project.version', pkg.version)
sauce.set('project.author', pkg.author)

sauce.components.engine('@frctl/nunjucks')
sauce.components.set('default.context', {
  display: {
    'max-width': '1300px',
    'min-width': '400px',
  },
})
sauce.components.set('ext', '.nunj')
sauce.components.set('path', `${__dirname}/components`)
sauce.components.set('statuses', {
  deprecated: {
    label: 'Deprecated',
    description: 'Do not use! See component notes for guidance.',
    color: 'rgb(182, 11, 41)',
  },
  alpha: {
    label: 'Alpha',
    description: 'Very likely to change. Unsuitable for production use.',
    color: '#551A8B',
  },
  beta: {
    label: 'Beta',
    description: 'Work in progress. Implement with caution.',
    color: '#ff9233',
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29cc29',
  },
})

sauce.components.set('default.status', 'alpha')
sauce.components.set('default.preview', '@preview')

sauce.docs.set('indexLabel', 'Home')
sauce.docs.set('path', `${__dirname}/docs`)

sauce.web.set('builder.dest', `${__dirname}/dist`)
sauce.web.set('server.sync', true)
sauce.web.set('server.port', 31415)
sauce.web.set('static.mount', 'assets')
sauce.web.set('static.path', `${__dirname}/public`)
sauce.web.theme(sauceTheme)

module.exports = sauce
