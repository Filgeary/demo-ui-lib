'use strict'

// main Lib function
import Lib from './lib/lib'

// test - displayElem
// Lib('.text').hideElem().showElem().toggleDisplay()

// test - classes
Lib('.text')
  .addClass('bg-tomato', 'test')
  .removeClass('test', 'bg-tomato')
  .toggleClass('active-border')
