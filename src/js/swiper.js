import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
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
    loop: true,
    speed: 1000, 
    autoplay: {
      delay: 500, 
      disableOnInteraction: true,
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
      restartAutoplay();
    });

  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', () => {
      restartAutoplay();
    });
});