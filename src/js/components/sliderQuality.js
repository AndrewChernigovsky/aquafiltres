const swiperSliderQuality = (() => {
    const accountantInit = new Swiper('.quality-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 800,
      loop: false,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      preloadImages: true,
      lazy: true,
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
  
  export default swiperSliderQuality;
  