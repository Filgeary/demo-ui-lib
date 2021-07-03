import Lib from '../core'

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
  const objLength = Object.keys(this).length

  for (let i = 0; i < objLength; i++) {
    delete this[i]
  }
  this[0] = temp
  this.length = 1

  return this
}

Lib.prototype.index = function () {
  const parentElem = this[0].parentNode
  const childrenList = [...parentElem.children]

  const findMyIndex = (item) => {
    return item === this[0]
  }

  return childrenList.findIndex(findMyIndex)
}

/**
 * Create find method - find element after Lib('selector')
 * @param {string} selector
 */
Lib.prototype.find = function (selector) {
  let foundItemsCount = 0
  let counter = 0
  const copyObjThis = Object.assign({}, this)

  for (let i = 0; i < copyObjThis.length; i++) {
    const arr = copyObjThis[i].querySelectorAll(selector)

    if (arr.length === 0) continue

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j]
      counter++
    }

    foundItemsCount += arr.length
  }
  this.length = foundItemsCount

  const objLength = Object.keys(this).length

  for (; foundItemsCount < objLength; foundItemsCount++) {
    delete this[foundItemsCount]
  }

  return this
}

/**
 * Create closest method - find closest element
 * @param {string} selector
 */
Lib.prototype.closest = function (selector) {
  let counter = 0

  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) return this

    this[i] = this[i].closest(selector)
    counter++
  }

  const objLength = Object.keys(this).length

  for (; counter < objLength; counter++) {
    delete this[counter]
  }

  return this
}

Lib.prototype.siblings = function () {
  let foundItemsCount = 0
  let counter = 0
  const copyObjThis = Object.assign({}, this)

  for (let i = 0; i < copyObjThis.length; i++) {
    const arr = copyObjThis[i].parentNode.children

    for (let j = 0; j < arr.length; j++) {
      if (copyObjThis[i] === arr[j]) continue

      this[counter] = arr[j]
      counter++
    }

    foundItemsCount += arr.length - 1
  }
  this.length = foundItemsCount

  const objLength = Object.keys(this).length

  for (; foundItemsCount < objLength; foundItemsCount++) {
    delete this[foundItemsCount]
  }

  return this
}
