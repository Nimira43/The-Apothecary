const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

const emberColour = '#ff4500'  
const emberNumber = 400         
const size = 0.01               
const speed = 0.08              

let embers = []
let emberSpeed = speed * canvasEl.width
let horizontalVelocity = emberSpeed * randomSign() * Math.random()
let verticalVelocity = Math.sqrt(Math.pow(emberSpeed, 2) - Math.pow(horizontalVelocity, 2)) * randomSign()

for (let i = 0; i < emberNumber; i++) {
  let speedBoost = Math.random() * 2.5 + 0.5
  embers[i] = {
    radius: (Math.random() * size * canvasEl.width) / 2,
    x: Math.floor(Math.random() * canvasEl.width),
    y: Math.floor(Math.random() * canvasEl.height),
    vx: horizontalVelocity * speedBoost,
    vy: verticalVelocity * speedBoost 
  }
}

let timeDiff, timeLast = 0
requestAnimationFrame(runEmbers)

function runEmbers(timeNow) {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  timeDiff = timeNow - timeLast
  timeLast = timeNow

  ctx.fillStyle = emberColour

  for (let i = 0; i < emberNumber; i++) {
    ctx.beginPath()
    ctx.arc(embers[i].x, embers[i].y, embers[i].radius, 0, Math.PI * 2)
    ctx.fill()

    embers[i].x += embers[i].vx * timeDiff * 0.001
    embers[i].y += embers[i].vy * timeDiff * 0.001

    if (embers[i].x < 0 - embers[i].radius) embers[i].x = canvasEl.width + embers[i].radius
    else if (embers[i].x > canvasEl.width + embers[i].radius) embers[i].x = 0 - embers[i].radius

    if (embers[i].y < 0 - embers[i].radius) embers[i].y = canvasEl.height + embers[i].radius
    else if (embers[i].y > canvasEl.height + embers[i].radius) embers[i].y = 0 - embers[i].radius
  }
  requestAnimationFrame(runEmbers)
}

function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1
}
