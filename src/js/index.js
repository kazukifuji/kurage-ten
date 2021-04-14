import 'ress';
import 'objectFitPolyfill';
import 'picturefill';

import 'src/sass/index.scss';

import './config';
import heroHeaderMorphingAnime from './modules/heroHeaderMorphingAnime';
import resizeToFullScreen from './modules/resizeToFullScreen';
import slider from './modules/slider';


window.addEventListener( 'DOMContentLoaded', () => {
  resizeToFullScreen('#hero-header');
  resizeToFullScreen('#shape-mask > svg');
}, { once: true, passive: true } );

window.addEventListener( 'load', () => {
  heroHeaderMorphingAnime.play();
  slider.create('#jellyfish-list .swiper-container');
}, { once: true, passive: true } );