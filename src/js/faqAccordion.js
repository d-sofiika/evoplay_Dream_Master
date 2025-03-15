const questionsRefs = document.querySelectorAll('.faq-btn');

const handleClick = ({ currentTarget }) => {

  const panel = currentTarget.nextElementSibling;
  const svgElem = currentTarget.children[1];

  if (panel) {
    if (svgElem?.nodeName === 'svg') {
      svgElem.classList.toggle('active');
    }
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : `${panel.scrollHeight}px`;
  }
};

questionsRefs.forEach(btn => btn.addEventListener('click', handleClick));
