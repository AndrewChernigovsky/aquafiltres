const swiperSliderQuality = (() => {
    const accountantInit = new Swiper('.quality-slider', {
      spaceBetween: 20,
      speed: 800,
      loop: true,
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    });
  
    const init = () => {};
  
    return {
      init,
    };
  
  })();
  
  export default swiperSliderQuality;
  