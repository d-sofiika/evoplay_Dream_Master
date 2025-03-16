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

  function toggleMenu() {
    modal.classList.toggle('is-open');
    burgerMenu.classList.toggle('is-open');
    document.body.style.overflow = modal.classList.contains('is-open')
      ? 'hidden'
      : '';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  btnOpen.addEventListener('click', toggleMenu);

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
});
