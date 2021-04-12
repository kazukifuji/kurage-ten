import 'ress';
import 'objectFitPolyfill';
import 'picturefill';

import 'src/sass/index.scss';

import './config';
import heroHeaderMorphingAnime from './modules/heroHeaderMorphingAnime';


window.addEventListener( 'load', () => {
  heroHeaderMorphingAnime.play();
}, { once: true, passive: true } );