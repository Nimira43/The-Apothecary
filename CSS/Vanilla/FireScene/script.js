const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

const emberColour = '#ffa600ff'   
const emberNumber = 1000
const size = 0.008
const speed = 0.06 

let embers = []
let emberSpeed = speed * canvasEl.width
let horizontalVelocity = emberSpeed * randomSign() * Math.random()
let verticalVelocity = Math.sqrt(Math.pow(emberSpeed, 2) - Math.pow(horizontalVelocity, 2)) * randomSign()
 
for (let i = 0; i < emberNumber; i++) {
  let speedBoost = Math.random() * 2.5 + 0.5
  embers[i] = {
    emberRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.random() * canvasEl.width),
    verticalPosition: Math.floor(Math.random() * canvasEl.height),
    horizontalVelocity: horizontalVelocity * speedBoost,
    verticalVelocity: verticalVelocity * speedBoost 
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
    ctx.arc(
      embers[i].horizontalPosition,
      embers[i].verticalPosition,
      embers[i].emberRadius,
      9,
      Math.PI * 2
    )
    ctx.fill()

    embers[i].horizontalPosition += embers[i].horizontalVelocity * timeDiff * 0.001

    if (embers[i].horizontalPosition < 0 - embers[i].emberRadius) {
      embers[i].horizontalPosition = canvasEl.width + embers[i].emberRadius
    } else if (
      embers[i].horizontalPosition > canvasEl.width + embers[i].emberRadius
    ) {
      embers[i].horizontalPosition = 0 - embers[i].emberRadius
    }
    
    embers[i].verticalPosition += embers[i].verticalVelocity * timeDiff * 0.001

    if (embers[i].verticalPosition < 0 - embers[i].emberRadius) {
      embers[i].verticalPosition = canvasEl.height + embers[i].emberRadius
    } else if (
      embers[i].verticalPosition > canvasEl.height + embers[i].emberRadius
    ) {
      embers[i].verticalPosition = 0 - embers[i].emberRadius
    }
  }
  requestAnimationFrame(runEmbers)
}

function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1
}
