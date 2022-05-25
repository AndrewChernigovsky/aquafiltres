const swiperSlider = (() => {
  const accountantInit = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    preloadImages: false,
    lazy: true,
    centerInsufficientSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    observer: true,
    observeSlideChildren: true,
    observeParents: true,

    // on: {
    //   init: function (){
    //     let activeSlide = swiper.activeIndex;
    //     const video = document.querySelector('.video-swiper')

    //     if(activeSlide) {
    //       video.style.display = "block"
    //     } else {
    //       video.style.display = "none"
    //     }
    //   },

    //   sliderChange: function() {
    //     if(activeSlide) {
    //       video.style.display = "block"
    //     } else {
    //       video.style.display = "none"
    //     }
    //   }
    // }
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
