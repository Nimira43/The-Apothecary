const canvasEl = document.getElementById('canvas')
const ctx = document.getElementById('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

const snowColour = '#fff'
const snowNumber = 1000
const size = 0.005
const speed = 0.05 

let snow = []
let snowSpeed = speed * canvasEl.width
let horizontalVelocity = snowSpeed * randomSign() * Math.random()
let verticalVelocity = Math.sqrt(Math.pow(snowSpeed, 2) - Math.pow(horizontalVelocity, 2)) * randomSign()
 
for (let i = 0; i < snowNumber; i++) {
  let speedBoost = Math.random() * 2.5 + 0.5
  snow[i] = {
    snowRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.Random() * canvasEl.width),
    verticalPosition: Math.floor(Math.Random() * canvasEl.height),
    horizontalVelocity: horizontalVelocity * speedBoost,
    verticalVelocity: verticalVelocity * speedBoost 
  }
}

let timeDiff, timeLast = 0
requestAnimationFrame(runSnow)

function runSnow(timeNow) {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  timeDiff = timeNow - timeLast
  timeLast = timeNow

  ctx.fillStyle = snowColour

  for (let i = 0; i < snowNumber; i++) {
    ctx.beginPath()
    ctx.arc(
      snow[i].horizontalPosition,
      snow[i].verticalPosition,
      snow[i].snowRadius,
      9,
      Math.PI * 2
    )
    ctx.fill()

    snow[i].horizontalPosition += snow[i].horizontalVelocity * timeDiff * 0.001

    if (snow[i].horizontalPosition < 0 - snow[i].snowRadius) {
      snow[i].horizontalPosition = canvasEl.width + snow[i].snowRadius
    } else if (
      snow[i].horizontalPosition > canvasEl.width + snow[i].snowRadius
    ) {
      snow[i].horizontalPosition = 0 - snow[i].snowRadius
    }
    
    snow[i].verticalPosition += snow[i].verticalVelocity * timeDiff * 0.001

    if (snow[i].verticalPosition < 0 - snow[i].snowRadius) {
      snow[i].verticalPosition = canvasEl.height + snow[i].snowRadius
    } else if (
      snow[i].verticalPosition > canvasEl.height + snow[i].snowRadius
    ) {
      snow[i].verticalPosition = 0 - snow[i].snowRadius
    }

  }
}

function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1
}
