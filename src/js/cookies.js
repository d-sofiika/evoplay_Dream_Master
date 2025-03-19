document.addEventListener('DOMContentLoaded', function () {
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptButton = document.querySelector('.cookie-accept');
  const closeButton = document.querySelector('.cookie-close');
  const declineButton = document.querySelector('.cookie-decline');
  const body = document.body;

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookiePopup.classList.add('show');
      body.classList.add('no-scroll');
    }, 1000);
  }

  function hidePopup() {
    cookiePopup.classList.remove('show');

    setTimeout(() => {
      cookiePopup.style.display = 'none';
      body.classList.remove('no-scroll');
    }, 300);
  }

  acceptButton?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hidePopup();
  });

  declineButton?.addEventListener('click', () => {
    hidePopup();
  });

  closeButton?.addEventListener('click', hidePopup);
});
