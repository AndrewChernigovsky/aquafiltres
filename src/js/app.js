// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Accordion from './components/accordion';
import swiperSlider from './components/slider';
import swiperSliderFeedback from './components/sliderFeedback';
import swiperSliderStock from './components/sliderStock';
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';
import scrollSmooth from './components/scroll-smooth';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderFeedback.init();
    swiperSliderStock.init();
    const accordions = new Accordion();
    tabs.init();
    scrollSmooth.init();
  });
})(jQuery);
