import Lib from '../core'

// html
// eq
// index
// find
// closest
// siblings

/**
 * Create html method
 * @param {string} template
 */
Lib.prototype.html = function (template = '') {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (template) {
      element.innerHTML = template
    } else {
      return element.innerHTML
    }
  }
  return this
}
