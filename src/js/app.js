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
import scrollSmooth from './components/scroll-smooth';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    $.fancybox.open($('.gallery'));
    burgerMenu.init();
    swiperSlider.init();
    swiperSliderFeedback.init();
    swiperSliderStock.init();
    swiperSliderQuality.init();
    const accordions = new Accordion();
    tabs.init();
    scrollSmooth.init();
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
    let input = document.querySelector("#phone");
    let inputHidden = document.querySelector("#phoneHidden");
    let form = document.getElementsByTagName("form");

    let iti = window.intlTelInput(input, {
      singleDialCode: true,
      allowDropdown: true,
      separateDialCode: true,
      formatOnDisplay: true,
      hiddenInput: "full",
      preferredCountries: ["kg","ru","kz" ],
      utilsScript: "utils.js",
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
      initialCountry: "auto",
      nationalMode: true,
      autoPlaceholder: true,
      autoFormat: true,
      geoIpLookup: function(success, failure) {
        $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
          let countryCode = (resp && resp.country) ? resp.country : "kg";
          success(countryCode);
        });
      },
    });

    form.addEventListener('submit', function() {
      input.value = input.intlTelInput("getNumber");
    })

    $('#menuFormCall').click(function(){
      $('body').removeClass('overflow');
      $('nav').removeClass('active');
      $('.js-burger-open').removeClass('active');
    })
  });
})(jQuery);
