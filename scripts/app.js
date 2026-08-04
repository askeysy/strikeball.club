document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

const burgerMenu = document.querySelector('.mnu-button__menu')
if (burgerMenu) {
  const menuBackground = document.querySelector('.main-menu-background')
  const mainMenu = document.querySelector('.main-menu')

  burgerMenu.addEventListener('click', menu => {
    burgerMenu.classList.toggle('active')

    if (burgerMenu.classList.contains('active')) {
      lenis.stop()
      menuBackground.classList.add('active')
      mainMenu.classList.add('active')
    } else {
      lenis.start()
      menuBackground.classList.remove('active')
      mainMenu.classList.remove('active')
    }
  })
}

gsap.utils.toArray('[data-parallax-wrapper]').forEach(container => {
  const img = container.querySelector('[data-parallax-target]')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true
    }
  })

  tl.fromTo(img, {
    yPercent: -15,
    ease: 'none'
  }, {
    yPercent: 15,
    ease: 'none'
  })
})

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

