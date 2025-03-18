import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const btnOpen = document.querySelector('.btn-burger');
  const modal = document.querySelector('.modal-menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const navigation = document.querySelectorAll('.menu-item-modal');
  const header = document.querySelector('.header-box');

  if (!btnOpen || !modal || !burgerMenu || !header) return;

  function getHeaderOffset() {
    return header.offsetHeight || 90;
  }

  let offset = getHeaderOffset();

  window.addEventListener('resize', () => {
    offset = getHeaderOffset();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        closeModal();
      }
    });
  });

  function openMenu() {
    gsap.to(modal, { x: 0, duration: 0.5, ease: 'power2.out' });
    modal.classList.add('is-open');
    burgerMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    gsap.to(modal, { x: '100%', duration: 0.5, ease: 'power2.in' });
    setTimeout(() => {
      modal.classList.remove('is-open');
      burgerMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }, 500); // Чекаємо, поки завершиться анімація
  }

  btnOpen.addEventListener('click', () => {
    if (modal.classList.contains('is-open')) {
      closeModal();
    } else {
      openMenu();
    }
  });

  navigation.forEach(item => {
    item.addEventListener('click', closeModal);
  });

  document.addEventListener('click', e => {
    if (
      modal.classList.contains('is-open') &&
      !modal.contains(e.target) &&
      !btnOpen.contains(e.target)
    ) {
      closeModal();
    }
  });

  gsap.set(modal, { x: '100%' });
});
