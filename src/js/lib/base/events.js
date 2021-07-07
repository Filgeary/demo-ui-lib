import Lib from '../core'

/**
 * Create 'on' method - add Event Listener
 * @param {string} eventName
 * @param {Function} callback
 */
Lib.prototype.on = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.addEventListener(eventName, callback)
  }
  return this
}

/**
 * Create 'off' method - remove Event Listener
 * @param {string} eventName
 * @param {Function} callback
 */
Lib.prototype.off = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    element.removeEventListener(eventName, callback)
  }
  return this
}

/**
 * Create 'onClick' method
 * @param {Function} callback
 */
Lib.prototype.onClick = function (callback = null) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (callback) {
      element.addEventListener('click', callback)
    } else {
      element.click()
    }
  }
  return this
}
