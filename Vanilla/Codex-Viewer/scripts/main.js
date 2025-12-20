import { colourGroups } from './sections/colours.js' 
import { typeScale } from './sections/typography.js'

// -----------------------------
// COLOUR RENDERING
// -----------------------------

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

// -----------------------------
// TYPE SCALE RENDERING
// -----------------------------

const typeScaleContainer = document.querySelector('#typography .type-scale')

Object.entries(typeScale).forEach(([name, value]) => {
  const item = document.createElement('div')
  token.className = 'type-item'

  token.innerHTML = `
    <p class='type-label'>${name} - ${size}</p>
    <p class='type-preview' style='font-size: ${size}'>The quick brown fox jumps over the lazy poor dog.</p>
  `
  typeScaleContainer.appendChild(item)
})

const typeScaleContainer = document.querySelector('#typography .type-scale')

Object.entries(typeScale).forEach(([name, value]) => {
  const item = document.createElement('div')
  token.className = 'type-item'

  token.innerHTML = `
    <p class='type-label'>${name} - ${size}</p>
    <p class='type-preview' style='font-size: ${size}'>The quick brown fox jumps over the lazy poor dog.</p>
  `
  typeScaleContainer.appendChild(item)
})

