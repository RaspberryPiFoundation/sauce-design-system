import '@storybook/addon-console'

import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withHTML } from '@whitespace/storybook-addon-html/react'
import { withPlayroom } from 'storybook-addon-playroom'

addDecorator(withA11y)
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  })
)
addDecorator(withPlayroom)

const scssReq = require.context('!!raw-loader!../src/tokens', true, /.\.scss$/)
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

addParameters({
  designToken: {
    files: {
      scss: scssTokenFiles,
    },
  },
})
