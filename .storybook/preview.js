import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import { withPlayroom } from 'storybook-addon-playroom'

// Playroom
addDecorator(withPlayroom)
addParameters({
  playroom: {
    url: 'http://localhost:9000', // your Playroom URL (default)
  },
})

// Accessibility
addDecorator(withA11y)

// HTML Output
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  })
)

// Design Tokens
const scssReq = require.context('!!raw-loader!../src/tokens', true, /.\.scss$/)
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

const cssReq = require.context('!!raw-loader!../src/tokens', true, /.\.scss$/)
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }))

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles,
    },
  },
})
