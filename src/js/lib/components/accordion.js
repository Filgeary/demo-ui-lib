import Lib from '../core'

/**
 * Create accordion method
 * @param {string} headerActiveClass
 * @param {string} contentActiveClass
 */
Lib.prototype.accordion = function (
  headerActiveClass = 'accordion__header--active',
  contentActiveClass = 'accordion__content-wrapper--active',
) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]

    Lib(element).onClick((evt) => {
      evt.preventDefault()

      Lib(element).toggleClass(headerActiveClass)
      Lib(element.nextElementSibling).toggleClass(contentActiveClass)

      if (element.classList.contains(headerActiveClass)) {
        element.nextElementSibling.style.maxHeight =
          element.nextElementSibling.scrollHeight + 'px'
      } else {
        element.nextElementSibling.style.maxHeight = '0px'
      }
    })
  }
}
