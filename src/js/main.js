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
Lib('.text')
  .addAttribute('data-modal', 'data-js')
  .deleteAttribute('data-js', 'data-modal')
