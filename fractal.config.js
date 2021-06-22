const fractal = require('@frctl/fractal')
const pkg = require('./package.json')

const sauce = fractal.create()
const sauceTheme = require('./fractal.theme')

sauce.set('project.title', 'Sauce Design System')
sauce.set('project.version', pkg.version)
sauce.set('project.author', pkg.author)

sauce.components.set('default.context', {
  display: {
    'max-width': '400px',
    'min-width': '250px',
  },
})
sauce.components.set('default.status', 'wip')
sauce.components.set('default.preview', '@preview')
sauce.components.set('path', `${__dirname}/components`)

sauce.docs.set('indexLabel', 'Home')
sauce.docs.set('path', `${__dirname}/docs`)

sauce.web.set('builder.dest', `${__dirname}/dist`)
sauce.web.set('server.sync', true)
sauce.web.set('server.port', 31415)
sauce.web.set('static.mount', 'assets')
sauce.web.set('static.path', `${__dirname}/public`)
sauce.web.theme(sauceTheme)

module.exports = sauce
