import Lib from '../core'

/**
 * Create modal method
 * @param {string} attribute Attribute to show modal
 * @param {string} closeControl Control to close modal
 * @param {boolean} isModalCreated Is Modal created OR not by `createModal`
 */
Lib.prototype.modal = function (
  attribute,
  closeControl,
  isModalCreated = false,
) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    const targetAttr = element.getAttribute(attribute)
    const targetElem = Lib(targetAttr)

    Lib(element).onClick((evt) => {
      evt.preventDefault()
      targetElem.fadeIn(300)
    })

    const controlsList = document.querySelectorAll(closeControl)
    controlsList.forEach((control) => {
      Lib(control).onClick((evt) => {
        evt.preventDefault()
        targetElem.fadeOut(200)

        if (targetElem && isModalCreated) {
          setTimeout(() => {
            targetElem[0].remove()
          }, 200)
        }
      })
    })

    targetElem.onClick((evt) => {
      if (evt.target.classList.contains('modal')) {
        targetElem.fadeOut(200)

        if (targetElem && isModalCreated) {
          setTimeout(() => {
            targetElem[0].remove()
          }, 200)
        }
      }
    })
  }
}

/**
 * Define createModal method
 * @param {Object} obj
 * @param {Object} obj.modal
 * @param {string} obj.modal.title
 * @param {string} obj.modal.body
 *
 * @param {Object[]} obj.controls
 * @param {string} obj.controls[].controlTitle
 * @param {string[]} obj.controls[].classList
 * @param {boolean} obj.controls[].isClose
 * @param {Function} [obj.controls[].callback]
 */
Lib.prototype.createModal = function ({ modal, controls }) {
  for (let i = 0; i < this.length; i++) {
    // create modalElem
    const CONTROLS_HERE = '<!-- add controls by JS -->'
    const { title, body } = modal

    const modalElem = document.createElement('section')
    modalElem.classList.add('modal')
    modalElem.setAttribute('id', this[i].getAttribute('data-target').slice(1))

    const modalComponent = `
      <div class="modal__dialog">
        <div class="modal__content">
          <button type="button" class="modal__close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal__header">
            <h2 class="modal__title">${title}</h2>
          </div>
          <div class="modal__body">
            ${body}
          </div>
          <div class="modal__footer">
            ${CONTROLS_HERE}
          </div>
        </div>
      </div>
    `
    modalElem.innerHTML = modalComponent

    // create controlElem
    const controlList = []

    for (let i = 0; i < controls.length; i++) {
      const { controlTitle, classList, isClose, callback } = controls[i]

      const buttonElem = document.createElement('button')
      buttonElem.setAttribute('type', 'button')
      buttonElem.textContent = controlTitle
      buttonElem.classList.add(...classList)

      if (controls.length === 1) buttonElem.style.marginLeft = 'auto'
      if (isClose) buttonElem.setAttribute('data-close', 'true')

      if (callback && typeof callback === 'function') {
        buttonElem.addEventListener('click', (evt) => {
          evt.preventDefault()
          callback()
        })
      }

      controlList.push(buttonElem)
    }
    modalElem.querySelector('.modal__footer').append(...controlList)

    // append full modalElem
    document.body.appendChild(modalElem)

    setTimeout(() => {
      Lib(this[i]).modal('data-target', '[data-close]', true)
      Lib(this[i].getAttribute('data-target')).fadeIn(300)
    }, 0)
  }
}
