import Lib from '../core'

// const dropdownComponent = `
//   <div class="dropdown">
//     <button
//       class="btn btn__primary dropdown__toggle"
//       id="dropdownMenuButton"
//     >
//       Dropdown Menu
//     </button>

//     <ul class="dropdown__list" data-toggle-id="dropdownMenuButton">
//       <li class="dropdown__list-item">
//         <a href="#" class="dropdown__link">List Link #1</a>
//       </li>
//       <li class="dropdown__list-item">
//         <a href="#" class="dropdown__link">List Link #2</a>
//       </li>
//       <li class="dropdown__list-item">
//         <a href="#" class="dropdown__link">List Link #3</a>
//       </li>
//     </ul>
//   </div>
// `

Lib.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    const value = element.getAttribute('id')

    Lib(element).onClick(() => {
      Lib(`[data-toggle-id="${value}"]`).fadeToggle(200)
    })
  }
}
