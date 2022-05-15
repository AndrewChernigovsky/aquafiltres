// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';

import swiperSlider from './components/slider';
import swiperSliderProducts from './components/products/slider-product';
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderProducts.init();
    tabs.init();
  });
})(jQuery);
