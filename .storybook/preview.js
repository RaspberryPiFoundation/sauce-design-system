// import '!sass-loader!./preview.scss'
// import '!css-loader!sass-loader!./preview.scss'
// import '!style-loader!css-loader!sass-loader!./preview.scss'
import './preview.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}
