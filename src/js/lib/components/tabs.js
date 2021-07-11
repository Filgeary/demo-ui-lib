import Lib from '../core'

/**
 * Create tabs method
 * @param {Object} obj
 * @param {string} obj.tabsWrapperSelector
 * @param {string} obj.tabActiveClass
 * @param {string} obj.contentItemSelector
 * @param {string} obj.contentActiveClass
 */
Lib.prototype.tabs = function ({
  tabsWrapperSelector,
  tabActiveClass,
  contentItemSelector,
  contentActiveClass,
}) {
  for (let i = 0; i < this.length; i++) {
    Lib(this[i]).onClick((evt) => {
      evt.preventDefault()

      Lib(this[i])
        .addClass(tabActiveClass)
        .siblings()
        .removeClass(tabActiveClass)
        .closest(tabsWrapperSelector)
        .find(contentItemSelector)
        .removeClass(contentActiveClass, 'js-fadeIn')
        .eq(Lib(this[i]).index())
        .addClass(contentActiveClass, 'js-fadeIn')
    })
  }
}
