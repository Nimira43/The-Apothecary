const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.slider-left')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const slidesLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top = `-${(slidesLength - 1) * 100}`