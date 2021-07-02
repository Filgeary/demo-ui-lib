/**
 * Create Lib Main Function
 * @param {string} selector
 * @returns {Object}
 */
const Lib = function (selector) {
  // eslint-disable-next-line new-cap
  return new Lib.prototype.init(selector)
}

/**
 * Create Init method
 * @param {string} selector
 * @returns {Object}
 */
Lib.prototype.init = function (selector) {
  if (!selector) {
    return this // {} - empty object
  }

  const elementsList = document.querySelectorAll(selector)
  this.length = elementsList.length

  // add HTML Elements to New instance Lib.init
  return Object.assign(this, elementsList)
}

// It's a Great Magic trick !!!
// add all Lib methods to init
// VSCode says => 'module Lib.prototype' (what is mean really?)
Lib.prototype.init.prototype = Lib.prototype

// Can I do that? it's ok?
window.Lib = Lib

export default Lib
