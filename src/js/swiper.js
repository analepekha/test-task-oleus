const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  rewind: true,
  speed: 1000,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1064: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
