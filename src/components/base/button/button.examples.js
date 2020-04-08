import './_index.scss'

import React from 'react'

const selector = 'c-button'

const basic = () => <button className={selector}>Hello World</button>

export const WithEmoji = () => (
  <button className={selector}>OMIGOSH EMOJI 😀 😎 👍 💯</button>
)

export default basic
