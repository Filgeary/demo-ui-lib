import Lib from '../core'

Lib.prototype.fadeIn = function (duration = 800) {
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
    animateFadeIn(element, duration)
  }

  return this
}

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
