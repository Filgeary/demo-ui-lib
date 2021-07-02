import Lib from '../core'

/**
 * Create addAttribute method
 * @param  {...string} attributes
 */
Lib.prototype.addAttribute = function (...attributes) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    ;[...attributes].forEach((item) => {
      element.setAttribute(item, '')
    })
  }
  return this
}

/**
 * Create deleteAttribute method
 * @param  {...string} attributes
 */
Lib.prototype.deleteAttribute = function (...attributes) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    ;[...attributes].forEach((item) => {
      element.removeAttribute(item)
    })
  }
  return this
}
