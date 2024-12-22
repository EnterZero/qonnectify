'use strict';

// open and close
const open = function () { document.querySelector('.modal').classList.remove('hidden') };
const close = function () { document.querySelector('.modal').classList.add('hidden') };
const esc = function (i) {
  if (i.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) {
    close();
  }
};

// open modal
document.querySelector('.open-modal').addEventListener('click', open)

// close modal
document.querySelector('.close-modal').addEventListener('click', close)
document.addEventListener('keydown', esc)