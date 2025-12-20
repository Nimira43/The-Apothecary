import { colourGroups } from './colours.js' 

const colourSection = document.querySelector('#colours .token-grid')

Object.entries(colourTokens).forEach(([name, value]) => {
  const token = document.createElement('div')
  token.className = 'token'

  token.innerHTML = `
Object.entries(colourTokens).forEach(([name, value]) => {
  const token = document.createElement('div')
  token.className = 'token'

  token.innerHTML = `
    <div class='swatch' style='background: ${value};'></div>
    <p class='token-name'>${name}</p>
    <p class='token-value'>${value}</p>
  `
})
  colourGrid.appendChild(token)
})