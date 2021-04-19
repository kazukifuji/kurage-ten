import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

export default {
  create: (selector) => {
    return new Swiper(selector, {
      breakpoints: {
        [PC_BREAKPOINT - 1]: {
          spaceBetween: 20,
        }
      },
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 1,
      pagination: {
        el: selector + ' + .swiper-pagination',
        clickable: true,
      },
      spaceBetween: 50,
      slidesPerView: 'auto',
      speed: 1000,
    });
  },
}