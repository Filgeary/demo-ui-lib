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

// carousel
Lib('.carousel').carousel({
  inner: '.carousel__inner',
  item: '.carousel__item',
  indicator: '.carousel__indicators button',
  indicatorSlideTo: 'data-slide-to',
  controlNext: '[data-slide="next"]',
  controlPrev: '[data-slide="prev"]',
  activeClass: 'active',
})

// GET, POST requests
// ===================================================

// GET json
Lib('[data-get-json]').onClick((evt) => {
  evt.preventDefault()

  Lib()
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((json) => alert(JSON.stringify(json)))
    .catch((err) => console.error(err))
})

// POST json
Lib('[data-post-json]').onClick((evt) => {
  evt.preventDefault()

  const data = {
    title: 'My POST request!',
  }

  Lib()
    .post('https://jsonplaceholder.typicode.com/posts', data)
    .then((json) => alert(JSON.stringify(json)))
    .catch((err) => console.error(err))
})
