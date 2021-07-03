'use strict'

// main Lib function
import Lib from './lib/lib'

// test - displayElem
// Lib('.text').hideElem().showElem().toggleDisplay()

// test - classes
// Lib('.text')
//   .addClass('bg-tomato', 'test')
//   .removeClass('test', 'bg-tomato')
//   .toggleClass('active-border')

// test - attributes
// Lib('.text')
//   .addAttribute('data-modal', 'data-js')
//   .deleteAttribute('data-js', 'data-modal')

// test - events
// function myLog(evt) {
//   evt.preventDefault()
//   console.log(evt.target)
// }
// Lib('button').on('click', myLog).off('click', myLog).click()

// test - events
// const toggleClassHandler = function (evt) {
//   evt.preventDefault()

//   Lib('.text').toggleClass('active-border')
//   Lib(this).toggleClass('animation-scale')
// }

// Lib('button').onClick(toggleClassHandler)

// test - actions
// html
// console.log(Lib('.active-border').html('<a>ok</a>'))
// console.log(Lib('.active-border').html())

// eq
// console.log(Lib('main p').eq(1).addClass('bg-tomato'))

// index
// console.log(Lib('html').index())

// find
console.log(Lib('div').eq(1).find('.active-border').addClass('bg-tomato'))
