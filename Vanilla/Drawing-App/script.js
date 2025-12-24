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

function drawCircle() { }

function drawLine() { }

function updateSizeOnScreen() { }
