import Lib from '../core'

/**
 * Create fadeIn method
 * @param {number} duration Animation duration
 * @param {string} display block | flex | grid
 * @returns this
 */
Lib.prototype.fadeIn = function (duration = 800, display = 'block') {
  function animateFadeIn(elem, dur = 800, iterations = 1) {
    const keyframes = [
      { opacity: '0', offset: 0 },
      { opacity: '1', offset: 1 },
    ]
    const timing = { duration: dur, iterations: iterations }

    return elem.animate(keyframes, timing)
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.style.display = display
    animateFadeIn(element, duration)
  }

  return this
}

/**
 * Create fadeOut method
 * @param {number} duration Animation duration
 * @returns this
 */
Lib.prototype.fadeOut = function (duration = 800) {
  function animateFadeOut(elem, dur = 800, iterations = 1) {
    const keyframes = [
      { opacity: '1', offset: 0 },
      { opacity: '0', offset: 1 },
    ]
    const timing = { duration: dur, iterations: iterations }

    return elem.animate(keyframes, timing)
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    animateFadeOut(element, duration)
    setTimeout(() => {
      element.style.display = 'none'
    }, duration)
  }

  return this
}

/**
 * Create fadeToggle method
 * @param {number} duration Animation duration
 * @returns this
 */
Lib.prototype.fadeToggle = function (duration = 800) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (window.getComputedStyle(element).display === 'none') {
      Lib(element).fadeIn(duration)
    } else {
      Lib(element).fadeOut(duration)
    }
  }

  return this
}
