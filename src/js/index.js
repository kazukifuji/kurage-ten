import 'ress';
import 'objectFitPolyfill';
import 'picturefill';
import 'es6-promise/auto';

import 'src/sass/index.scss';

import './config';
import heroHeaderMorphingAnime from './modules/heroHeaderMorphingAnime';
import openingAnime from './modules/openingAnime';
import resizeToFullScreen from './modules/resizeToFullScreen';
import slider from './modules/slider';
import smoothScroller from './modules/smoothScroller';
import loadingScreenController from './modules/loadingScreenController';


window.addEventListener( 'load', () => {
  resizeToFullScreen('#hero-header');
  resizeToFullScreen('#shape-mask > svg');
  heroHeaderMorphingAnime.play();
  slider.create('#jellyfish-list .swiper-container');
  smoothScroller('#footer .footer__move-to-top-button', 0);

  loadingScreenController.close('#loading-screen', 500, 500)
  .then(loadingScreen => {
    loadingScreen.querySelectorAll('.loading-screen__loading-chara')
    .forEach(loadingChara => loadingChara.style.animation = 'none');
    loadingScreen.style.display = 'none';
    openingAnime.play();
  });
}, { once: true, passive: true } );