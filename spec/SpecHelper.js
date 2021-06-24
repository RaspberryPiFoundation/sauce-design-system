const path = require('path')
const sassTrue = require('sass-true')

const Spec = (dirname, filename) => {
  const file = path.join(dirname, `${filename}.spec.scss`)
  sassTrue.runSass({ file }, { describe, it })
}

module.exports = Spec
