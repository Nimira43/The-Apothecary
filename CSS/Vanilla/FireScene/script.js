const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

const emberColour = '#ff8c00'   
const emberNumber = 300        
const size = 0.004
const speed = 0.05 

let embers = []
let emberSpeed = speed * canvasEl.width

for (let i = 0; i < emberNumber; i++) {
  let speedBoost = Math.random() * 1.5 + 0.5
  embers[i] = {
    emberRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.random() * canvasEl.width),
    verticalPosition: Math.floor(Math.random() * canvasEl.height),
    horizontalVelocity: (Math.random() - 0.5) * emberSpeed * 0.2, // gentle sideways drift
    verticalVelocity: -(Math.random() * emberSpeed * speedBoost) // rising upwards
  }
}

let timeDiff, timeLast = 0
requestAnimationFrame(runEmbers)

function runEmbers(timeNow) {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  timeDiff = timeNow - timeLast
  timeLast = timeNow

  for (let i = 0; i < emberNumber; i++) {
    ctx.beginPath()
    ctx.fillStyle = emberColour
    ctx.shadowBlur = 30
    ctx.shadowColor = '#ffbb00ff'

    ctx.arc(
      embers[i].horizontalPosition,
      embers[i].verticalPosition,
      embers[i].emberRadius,
      0,
      Math.PI * 2
    )
    ctx.fill()

    embers[i].horizontalPosition += embers[i].horizontalVelocity * timeDiff * 0.001
    embers[i].verticalPosition += embers[i].verticalVelocity * timeDiff * 0.001

    if (embers[i].horizontalPosition < 0 - embers[i].emberRadius) {
      embers[i].horizontalPosition = canvasEl.width + embers[i].emberRadius
    } else if (embers[i].horizontalPosition > canvasEl.width + embers[i].emberRadius) {
      embers[i].horizontalPosition = 0 - embers[i].emberRadius
    }

    if (embers[i].verticalPosition < 0 - embers[i].emberRadius) {
      embers[i].verticalPosition = canvasEl.height + embers[i].emberRadius
      embers[i].horizontalPosition = Math.random() * canvasEl.width
    }
  }
  requestAnimationFrame(runEmbers)
}

