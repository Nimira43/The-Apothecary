import { colourGroups } from './sections/colours.js' 
import { typeScale } from './sections/typography.js'
console.log(typeScale)
const colourSection = document.querySelector('#colours .colour-columns')

Object.entries(colourGroups).forEach(([groupName, tokens]) => {
  const column = document.createElement('div')
  column.className = 'colour-column'
  column.innerHTML = `<h3>${groupName}</h3>`

  Object.entries(tokens).forEach(([name, value]) => {
    const token = document.createElement('div')
    token.className = 'token'

    token.innerHTML = `
      <div class='swatch' style='background: ${value};'></div>
      <p class='token-name'>${name}</p>
      <p class='token-value'>${value}</p>
    `
    column.appendChild(token)
  })
  colourSection.appendChild(column)
})