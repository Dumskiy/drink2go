const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
