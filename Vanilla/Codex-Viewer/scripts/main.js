import { colourGroups } from './sections/colours.js' 
import { typeScale, fontFamilies } from './sections/typography.js'

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

Object.entries(typeScale).forEach(([name, size]) => {
  const item = document.createElement('div')
  item.className = 'type-item'

  item.innerHTML = `
    <p class='type-label'>${name} - ${size}</p>
    <p class='type-preview' style='font-size: ${size}'>The quick brown fox jumps over the lazy poor dog.</p>
  `
  typeScaleContainer.appendChild(item)
})

const fontContainer = document.querySelector('#typography .font-families')

Object.entries(fontFamilies).forEach(([name, family]) => {
  const item = document.createElement('div')
  item.className = 'font-item'

  item.innerHTML = `
    <p class='font-label'>${name}</p>
    <p class='font-preview' style='font-family: ${family}'>The quick brown fox jumps over the lazy poor dog.</p>
  `
  fontContainer.appendChild(item)
})
