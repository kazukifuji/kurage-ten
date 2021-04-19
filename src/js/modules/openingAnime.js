import anime from 'animejs';

const eventPeriod = document.querySelector('.hero-header__event-period');
const titleCharacter = (()=>{
  const title = document.querySelector('.hero-header__site-title');
  const character = title.textContent.split('');
  title.textContent = '';
  character.forEach(titleChara => {
    title.insertAdjacentHTML('beforeend', `<span style="display: inline-block">${titleChara}</span>`);
  });
  return title.querySelectorAll('span');
})();
const desc = document.querySelector('.hero-header__site-desc');
const promptToScroll = document.querySelector('.hero-header__prompt-to-scroll');

anime.set([eventPeriod, titleCharacter, desc, promptToScroll], {
  opacity: 0,
});

anime.set(desc, {
  translateY: '50px',
});

export default anime.timeline({
  autoplay: false
})
.add({
  targets: titleCharacter,
  duration: 1000,
  delay: anime.stagger(150),
  easing: 'easeInOutSine',
  opacity: 1,
  keyframes: [
    { translateY: '-50%', scaleX: 0.8, scaleY: 1.1 },
    { translateY: '0', scaleX: 1.25, scaleY: 0.75 },
    { translateY: '0', scaleX: 1, scaleY: 1 },
  ],
}, '+=500')
.add({
  targets: desc,
  duration: 1000,
  easing: 'easeOutCubic',
  opacity: 1,
  translateY: '0',
}, '+=500')
.add({
  targets: [eventPeriod, promptToScroll],
  duration: 500,
  easing: 'linear',
  opacity: 1,
}, '-=500')