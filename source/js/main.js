import './swiper.js';

const navigationSite = document.querySelector('.header__navigation-site');
const headerToggle = document.querySelector('.header__toggle');
//let mapInteractive = document.querySelector('.map__interactive');
//let mapImage = document.querySelector('.map__image');

navigationSite.classList.remove('header__navigation-site--nojs');
headerToggle.classList.remove('header__toggle--nojs');
//mapInteractive.classList.remove('map__interactive--nojs');
//mapImage.classList.remove('map__image--nojs');

headerToggle.addEventListener('click', () => {
  if (headerToggle.classList.contains('header__toggle--closed')) {
    headerToggle.classList.remove('header__toggle--closed');
    headerToggle.classList.add('header__toggle--opened');
    navigationSite.classList.remove('header__navigation-site--closed');
    navigationSite.classList.add('header__navigation-site--opened');
  } else {
    headerToggle.classList.add('header__toggle--closed');
    headerToggle.classList.remove('header__toggle--opened');
    navigationSite.classList.add('header__navigation-site--closed');
    navigationSite.classList.remove('header__navigation-site--opened');
  }
});
