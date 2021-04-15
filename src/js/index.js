import 'ress';
import 'objectFitPolyfill';
import 'picturefill';

import 'src/sass/index.scss';

import './config';
import heroHeaderMorphingAnime from './modules/heroHeaderMorphingAnime';
import resizeToFullScreen from './modules/resizeToFullScreen';
import slider from './modules/slider';
import smoothScroller from './modules/smoothScroller';
import loadingScreenController from './modules/loadingScreenController';


window.addEventListener( 'DOMContentLoaded', () => {
  resizeToFullScreen('#hero-header');
  resizeToFullScreen('#shape-mask > svg');
}, { once: true, passive: true } );

window.addEventListener( 'load', () => {
  heroHeaderMorphingAnime.play();
  slider.create('#jellyfish-list .swiper-container');
  smoothScroller('#footer .footer__move-to-top-button', 0);

  loadingScreenController.close('#loading-screen', 500, 500)
  .then(loadingScreen => {
    loadingScreen.querySelectorAll('.loading-screen__loading-chara')
    .forEach(loadingChara => loadingChara.style.animation = 'none');
    loadingScreen.style.display = 'none';
  });
}, { once: true, passive: true } );