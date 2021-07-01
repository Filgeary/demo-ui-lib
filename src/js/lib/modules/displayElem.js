import Lib from '../core'

Lib.prototype.showElem = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (!element.style) continue
    element.style.display = ''
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

Lib.prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    if (!element.style) continue

    if (element.style.display === 'none') {
      element.style.display = ''
    } else {
      element.style.display = 'none'
    }
  }
  return this
}
