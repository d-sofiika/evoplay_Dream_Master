document.addEventListener('DOMContentLoaded', function () {
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptButton = document.querySelector('.cookie-accept');
  const closeButton = document.querySelector('.cookie-close');
  const declineButton = document.querySelector('.cookie-decline');

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookiePopup.classList.add('show'), 1000);
  }

  function hidePopup() {
    cookiePopup.classList.remove('show');

    setTimeout(() => {
      cookiePopup.style.display = 'none';
    }, 300);
  }

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hidePopup();
  });

  declineButton.addEventListener('click', () => {
    hidePopup();
  });

  closeButton.addEventListener('click', hidePopup);
});
