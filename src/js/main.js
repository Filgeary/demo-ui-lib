'use strict'

// main Lib function
import Lib from './lib/lib'

// Components
// ==================================================================

// dropdown
Lib('.dropdown__toggle').dropdown()

// modal
Lib('[data-toggle="modal"]').modal('data-target', '[data-close]')

// create modal
Lib('#modal-1').onClick((evt) => {
  evt.preventDefault()

  Lib('#modal-1').createModal({
    modal: {
      title: 'modal-1',
      body: 'Short text text text',
    },
    controls: [
      {
        controlTitle: 'OK',
        classList: ['btn', 'btn__primary'],
        isClose: false,
        callback: () => alert('Ok!'),
      },
    ],
  })
})

Lib('#modal-2').onClick((evt) => {
  evt.preventDefault()

  Lib('#modal-2').createModal({
    modal: {
      title: 'modal-2',
      body: 'Long long text text text text text text text text text text text text text text text text text text',
    },
    controls: [
      {
        controlTitle: 'Cancel',
        classList: ['btn', 'btn__danger'],
        isClose: true,
      },
      {
        controlTitle: 'OK',
        classList: ['btn', 'btn__primary'],
        isClose: false,
        callback: () => alert('Ok!'),
      },
    ],
  })
})

// tabs
Lib('[data-tabs-list] .tabs__link').tabs({
  tabsWrapperSelector: '.tabs',
  tabActiveClass: 'tabs__link--active',
  contentItemSelector: '.tabs__content',
  contentActiveClass: 'tabs__content--active',
})

// accordion
Lib('.accordion__header').accordion()
