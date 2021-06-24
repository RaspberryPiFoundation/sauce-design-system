import './preview.scss'

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  backgrounds: {
    default: 'light',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      htmlWhitespaceSensitivity: 'strict',
      showLineNumbers: true,
      tabWidth: 2,
      useTabs: false,
      wrapLines: false,
    },
  }
}
