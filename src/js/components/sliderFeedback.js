const swiperSliderFeedback = (() => {
    const accountantInit = new Swiper('.swiper-feedback', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    const init = () => {};
  
    return {
      init,
    };
  
  })();
  
  export default swiperSliderFeedback;
  