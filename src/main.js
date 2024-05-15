import { createApp } from 'vue';
import App from './App.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.mount('#app');

const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  gsap.fromTo(
    section,
    { backgroundPositionY: `-${window.innerHeight / 1}px` },
    {
      backgroundPositionY: `${window.innerHeight / 1}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    }
  );
});

const text = document.querySelector('.text');
let isLoaded = false;

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= text.offsetTop) {
    if (!isLoaded) {
      text.style.animation = 'text-blend 2s ease-in-out forwards';
      isLoaded = true;
    }
  }
});