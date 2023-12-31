import {ScrollLock} from '../utils/scroll-lock';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const header = document.querySelector('.main-header');
const navList = document.querySelector('.main-nav__list');
const listItems = document.querySelectorAll('.main-nav__list-item');
window.scrollLock = new ScrollLock();

navMain.classList.remove('main-nav--nojs');

const openCloseMenu = () => {
  if (document.body.contains(document.querySelector('.main-header'))) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        window.scrollLock.disableScrolling();
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        window.scrollLock.enableScrolling();
      }
    });
  }
};

document.addEventListener('click', (evt) => {
  const click = evt.composedPath().includes(header);
  if (!click) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
    }
  }
});

listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
    }
  }
}));

export {openCloseMenu};
