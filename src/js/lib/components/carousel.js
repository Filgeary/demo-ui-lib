import Lib from '../core'

/**
 * Create carousel method
 * @param {Object} obj
 * @param {string} obj.inner Carousel Inner block selector
 * @param {string} obj.item Carousel Item selector
 * @param {string} obj.indicator Carousel Indicator selector
 * @param {string} obj.indicatorSlideTo Carousel Indicator Slide To attribute
 * @param {string} obj.controlNext Control to Next slide selector
 * @param {string} obj.controlPrev Control to Prev slide selector
 * @param {string} obj.activeClass Active class
 */
Lib.prototype.carousel = function ({
  inner,
  item,
  indicator,
  indicatorSlideTo,
  controlNext,
  controlPrev,
  activeClass,
}) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    const carouselWidth = window.getComputedStyle(element).width
    const carouselInner = element.querySelector(inner)
    const carouselItems = element.querySelectorAll(item)
    const carouselIndicators = element.querySelectorAll(indicator)

    carouselInner.style.width = carouselItems.length * 100 + '%'
    carouselItems.forEach((item) => (item.style.width = carouselWidth))

    let offset = 0
    let slideIndex = 0

    // controlNext
    Lib(element.querySelector(controlNext)).onClick((evt) => {
      evt.preventDefault()

      if (offset === parseFloat(carouselWidth) * (carouselItems.length - 1)) {
        offset = 0
      } else {
        offset += parseFloat(carouselWidth)
      }
      carouselInner.style.transform = `translateX(-${offset}px)`

      if (slideIndex === carouselItems.length - 1) {
        carouselInner.style.transition = ''
        slideIndex = 0
      } else {
        carouselInner.style.transition = 'transform 500ms ease-in-out'
        slideIndex++
      }
      carouselIndicators.forEach((item) => item.classList.remove(activeClass))
      carouselIndicators[slideIndex].classList.add(activeClass)
    })

    // controlPrev
    Lib(element.querySelector(controlPrev)).onClick((evt) => {
      evt.preventDefault()

      if (offset === 0) {
        offset = parseFloat(carouselWidth) * (carouselItems.length - 1)
      } else {
        offset -= parseFloat(carouselWidth)
      }
      carouselInner.style.transform = `translateX(-${offset}px)`

      if (slideIndex === 0) {
        carouselInner.style.transition = ''
        slideIndex = carouselItems.length - 1
      } else {
        carouselInner.style.transition = 'transform 500ms ease-in-out'
        slideIndex--
      }
      carouselIndicators.forEach((item) => item.classList.remove(activeClass))
      carouselIndicators[slideIndex].classList.add(activeClass)
    })

    // indicators
    const carouselId = element.getAttribute('id')

    Lib(`#${carouselId} ${indicator}`).onClick((evt) => {
      evt.preventDefault()

      const slideToCount = +evt.target.getAttribute(indicatorSlideTo)
      slideIndex = slideToCount
      offset = parseFloat(carouselWidth) * slideToCount

      carouselInner.style.transform = `translateX(-${offset}px)`
      carouselIndicators.forEach((item) => item.classList.remove(activeClass))
      carouselIndicators[slideIndex].classList.add(activeClass)
    })
  }
}
