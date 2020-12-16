import '!style-loader!css-loader!sass-loader!postcss-loader!./preview.scss'

import { addDecorator, addParameters } from '@storybook/react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

// import { withPlayroom } from 'storybook-addon-playroom'

// Viewport testing
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// Playroom
// addDecorator(withPlayroom)
// addParameters({
//   playroom: {
//     url: 'http://localhost:9000',
//   },
// })

// Accessibility
addDecorator(withA11y)

// Design Tokens
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
