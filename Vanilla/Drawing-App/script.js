const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreasedBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colourEl = document.getElementById('colour')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
let colour = '#000'
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

function drawCircle(x, y) { 
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = colour
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) { 
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = colour
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() { 
  sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
  size += 5
  if (size > 50) size = 50
  updateSizeOnScreen()
})
