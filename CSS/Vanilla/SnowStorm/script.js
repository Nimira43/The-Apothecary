const canvasEl = document.getElementById('canvas')
const ctx = document.getElementById('2d')

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

const snowColour = '#fff'
const snowNumbers = 1000
const size = 0.005
const speed = 0.05 

let snow = []
let snowSpeed = speed * canvasEl.width
let horizontalVelocity = snowSpeed * randomSign() * Math.random()
let verticalVelocity = Math.sqrt(Math.pow(snowSpeed, 2) - Math.pow(horizontalVelocity, 2)) * randomSign()
 
function randomSign() {}
