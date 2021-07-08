import Lib from '../core'

// const modalComponent = `
//   <section class="modal" id="exampleModal">
//     <div class="modal__dialog">
//       <div class="modal__content">
//         <button type="button" class="modal__close" data-close>
//           <span>&times;</span>
//         </button>
//         <div class="modal__header">
//           <h2 class="modal__title">Modal Title #1</h2>
//         </div>
//         <div class="modal__body">
//           Modal body some text
//         </div>
//         <div class="modal__footer">
//           <button type="button" class="btn btn__danger" data-close>
//             Cancel
//           </button>
//           <button type="button" class="btn btn__success">Save</button>
//         </div>
//       </div>
//     </div>
//   </section>
// `

/**
 * Create modal method
 * @param {string} attribute Attribute to show modal
 * @param {string} closeControl Control to close modal
 */
Lib.prototype.modal = function (attribute, closeControl) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    const target = element.getAttribute(attribute)

    Lib(element).onClick((evt) => {
      evt.preventDefault()

      Lib(target).fadeIn(300)
    })
  }

  const controlsList = document.querySelectorAll(closeControl)
  controlsList.forEach((control) => {
    Lib(control).onClick((evt) => {
      evt.preventDefault()

      Lib('.modal').fadeOut(200)
    })
  })

  Lib('.modal').onClick((evt) => {
    if (evt.target.classList.contains('modal')) {
      Lib('.modal').fadeOut(200)
    }
  })
}
