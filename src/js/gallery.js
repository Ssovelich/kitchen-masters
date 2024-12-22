import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Keyboard, Mousewheel, Pagination],
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    enabled: false,
    eventsTarget: '.swiper',
  },

  breakpoints: {
    320: {
      centredSlides: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
