// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Accordion from './components/accordion';
import swiperSlider from './components/slider';
import swiperSliderFeedback from './components/sliderFeedback';
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderFeedback.init();
    const accordions = new Accordion();
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: false,
      freeMode: true,
      loopedSlides: 5,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5,
      zoom: {
        maxRatio: 3,
        minRatio: 1,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    tabs.init();
  });
})(jQuery);
