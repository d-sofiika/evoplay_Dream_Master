import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.utils.toArray('.container').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

gsap.utils.toArray('.number').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: -10,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  });
});

gsap.to('.link-btn', {
  scale: 0.9,
  opacity: 0.9,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  ease: 'power1.inOut',
});
gsap.utils.toArray('.section-title').forEach(el => {
  gsap.from(el, {
    text: '',
    duration: el.innerHTML.length * 0.2,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
});
