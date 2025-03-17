import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  let reverse = false;

  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Autoplay],
    scrollbar: {
      el: '.gallery-swiper .swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 6,
    centeredSlides: false,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        if (!reverse && this.isEnd) {
          reverse = true;
          this.params.autoplay.reverseDirection = true;
          this.autoplay.start();
        } else if (reverse && this.isBeginning) {
          reverse = false;
          this.params.autoplay.reverseDirection = false;
          this.autoplay.start();
        }
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
