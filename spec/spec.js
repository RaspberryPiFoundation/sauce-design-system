var path = require('path')
var sassTrue = require('sass-true')
var sassFile = path.join(__dirname, 'spec_helper.scss')

sassTrue.runSass({ file: sassFile }, { describe, it })
