const swiperSlider = (() => {
  const accountantInit = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 60000,
      disableOnInteraction: false,
    },
    preloadImages: false,
    lazy: true,
    centerInsufficientSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const init = () => {};

  return {
    init,
  };

})();

export default swiperSlider;
