const questionsRefs = document.querySelectorAll('.faq-btn');

const handleClick = ({ currentTarget }) => {
  const panel = currentTarget.nextElementSibling;
  const svgElem = currentTarget.children[1];

  if (panel) {
    if (svgElem?.nodeName === 'svg') {
      svgElem.classList.toggle('active');
    }
    if (!panel.style.maxHeight) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      console.log(panel.style.maxHeight);
      panel.classList.toggle('show');
    } else {
      panel.style.maxHeight = null;
      panel.classList.toggle('show');
    }
  }
};

questionsRefs.forEach(btn => btn.addEventListener('click', handleClick));
