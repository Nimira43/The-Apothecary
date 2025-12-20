import { colourTokens } from './colours.js' 

const colourGrid = document.querySelector('#colours .token-grid')

Object.entries(colourTokens).forEach(([name, value]) => {
  const token = document.createElement('div')
  token.className = 'token'
})