'use strict'

// main Lib function
import Lib from './lib/lib'

// Components
// ==================================================================

// dropdown
Lib('.dropdown__toggle').dropdown()

// modal
Lib('[data-toggle="modal"]').modal('data-target', '[data-close]')
