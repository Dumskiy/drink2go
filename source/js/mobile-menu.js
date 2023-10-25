const navigationSite = document.querySelector('.header__navigation-site');
const headerToggle = document.querySelector('.header__toggle');

const closeOrOpenMenu = () => {
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
};

headerToggle.addEventListener('click', closeOrOpenMenu);
