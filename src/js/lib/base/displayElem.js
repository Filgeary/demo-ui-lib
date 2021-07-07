import Lib from '../core'

/**
 * Create showElem method
 * @param {string} display block | flex | grid
 * @returns {Object}
 */
Lib.prototype.showElem = function (display = '') {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (!element.style) continue
    element.style.display = display
  }
  return this
}

Lib.prototype.hideElem = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (!element.style) continue
    element.style.display = 'none'
  }
  return this
}

/**
 * Create toggleDisplay method
 * @param {string} display block | flex | grid
 * @returns {Object}
 */
Lib.prototype.toggleDisplay = function (display = '') {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (!element.style) continue

    if (
      element.style.display === 'none' ||
      window.getComputedStyle(element).display === 'none'
    ) {
      element.style.display = display
    } else {
      element.style.display = 'none'
    }
  }
  return this
}
