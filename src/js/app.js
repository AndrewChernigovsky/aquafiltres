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

    $('.wrapperProducts-tabs .tab1')
      .click(function () {
        $('.wrapperProducts-tabs .tab1').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab1_item').hide().eq($(this).index()).fadeIn();
      })
      .eq(0)
      .addClass('active');

    $.fancybox.open($('.gallery'));
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderFeedback.init();
    swiperSliderStock.init();
    swiperSliderQuality.init();
    const accordions = new Accordion();
    tabs.init();
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
      },
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

    $('#menuFormCall').click(function () {
      $('body').removeClass('overflow');
      $('nav').removeClass('active');
      $('.js-burger-open').removeClass('active');
    });

    $('.js-smooth-scroll').click(function () {
      var el = $(this).attr('href');
      el = el.replace(/[^\#]*/, ''); //вытаскиваем id из ссылки
      $('body,html').animate(
        {
          scrollTop: $(el).offset().top,
        },
        1000
      );
      return false;
    });
  });
})(jQuery);

let urlCurrentAdress = window.location.href;


let urlCurrentAdressTab1 = 'http://localhost:8080/index.html#tab1';
let urlCurrentAdressTab2 = 'http://localhost:8080/index.html#tab2';
let urlCurrentAdressTab3 = 'http://localhost:8080/index.html#tab3';
let urlCurrentAdressTab4 = 'http://localhost:8080/index.html#tab4';

let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tab4 = document.getElementById('tab4');

let tab11 = document.getElementById('tab11');
let tab22 = document.getElementById('tab22');
let tab33 = document.getElementById('tab33');
let tab44 = document.getElementById('tab44');

let tab1Array = document.querySelectorAll('tab1');
let tab1ItemsArray = document.querySelectorAll('tab1_item');


if (urlCurrentAdress === urlCurrentAdressTab1) {
  tab1Array.forEach(function(e) {
    if(e.classList.contains('active')) {
      e.classList.remove('active')
      e.classList.remove('tabActive');
      e.style.display = 'none';

      tab1.classList.add('tabActive');
      tab11.classList.remove('active');
      tab11.style.display = 'none';
    }
  })
}

if (urlCurrentAdress === urlCurrentAdressTab2) {
  tab1Array.forEach((e)=>{
    if(e.classList.contains('active')) {
      e.classList.remove('active')
      e.classList.remove('tabActive');
      e.style.display = 'none'

      tab2.classList.add('tabActive');
      tab22.classList.remove('active');
      tab22.style.display = 'none';
    }
  })
}

if (urlCurrentAdress === urlCurrentAdressTab3) {
  tab1.classList.add('tabActive');
  tab11.classList.remove('active');
  tab11.style.display = 'none';

  tab2.classList.add('active');
  tab22.classList.add('active');
  tab22.style.display = 'block';
}

if (urlCurrentAdress === urlCurrentAdressTab4) {
  tab1.classList.add('tabActive');
  tab11.classList.remove('active');
  tab11.style.display = 'none';

  tab2.classList.add('active');
  tab22.classList.add('active');
  tab22.style.display = 'block';
}
