const navbar = document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')

window.addEventListener('scroll', () => mainFn())

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

mainFn()

window.addEventListener('resize', () => window.location.reload())