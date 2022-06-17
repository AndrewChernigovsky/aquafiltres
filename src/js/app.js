// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Accordion from './components/accordion';
import swiperSlider from './components/slider';
import swiperSliderFeedback from './components/sliderFeedback';
import swiperSliderStock from './components/sliderStock';
import swiperSliderQuality from './components/sliderQuality';
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    tabs.init();
    $.fancybox.open($('.gallery'));
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderFeedback.init();
    swiperSliderStock.init();
    swiperSliderQuality.init();
    const accordions = new Accordion();
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      loop: false,
      freeMode: true,
      loopedSlides: 4, //looped slides should be the same
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: false,
      loopedSlides: false, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    $('#menuFormCall').click(function(){
      $('body').removeClass('overflow');
      $('nav').removeClass('active');
      $('.js-burger-open').removeClass('active');
    })

    $('.js-smooth-scroll').click(function(){
      var el = $(this).attr('href');
      el = el.replace(/[^\#]*/, ''); //вытаскиваем id из ссылки
      $('body,html').animate({
      scrollTop: $(el).offset().top}, 1000);
      return false;
      });
  
  });
})(jQuery);
