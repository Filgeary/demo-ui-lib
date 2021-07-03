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

/**
 * Create eq method - find Element by index
 * @param {number} index
 */
Lib.prototype.eq = function (index) {
  const temp = this[index]

  for (let i = 0; i < this.length; i++) {
    delete this[i]
  }
  this[0] = temp
  this.length = 1

  return this
}
