const swiperSliderProducts = (() => {
    const accountantInit = new Swiper('.js-products-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
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
      zoom: {
          maxRatio: 5,
          minRatio: 1,
      },
      thumbs: {
          swiper: {
              el: '.product-preview-slider',
              slidesPerView: 5,
            }
        },
    });
  
    const init = () => {};
  
    return {
      init,
    };
  
  })();
  
  export default swiperSliderProducts ;