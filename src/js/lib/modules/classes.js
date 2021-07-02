import Lib from '../core'

/**
 * Create addClass method
 * @param  {...string} selectors
 */
Lib.prototype.addClass = function (...selectors) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.classList.add(...selectors)
  }
  return this
}

/**
 * Create removeClass method
 * @param  {...string} selectors
 */
Lib.prototype.removeClass = function (...selectors) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.classList.remove(...selectors)
  }
  return this
}

/**
 * Create toggleClass method
 * @param  {string} selector
 */
Lib.prototype.toggleClass = function (selector) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.classList.toggle(selector)
  }
  return this
}
