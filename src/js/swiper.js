import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  let reverse = false;
  let autoplayTimeout;

  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Navigation, Autoplay],
    scrollbar: {
      el: '.gallery-swiper .swiper-scrollbar',
      draggable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 'auto',
    spaceBetween: 6,
    centeredSlides: false,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
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
  const restartAutoplay = () => {
    if (autoplayTimeout) {
      clearTimeout(autoplayTimeout);
    }
    autoplayTimeout = setTimeout(() => {
      gallerySwiper.autoplay.start();
    }, 5000);
  };

  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', () => {
      gallerySwiper.autoplay.stop();
      restartAutoplay();
    });

  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', () => {
      gallerySwiper.autoplay.stop();
      restartAutoplay();
    });

  gallerySwiper.scrollbar.dragEl.addEventListener('mousedown', () => {
    gallerySwiper.autoplay.stop();
    restartAutoplay();
  });

  gallerySwiper.el.addEventListener('mousedown', () => {
    gallerySwiper.autoplay.stop();
    restartAutoplay();
  });
});
