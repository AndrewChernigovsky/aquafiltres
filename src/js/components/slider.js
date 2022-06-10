const swiperSlider = (() => {
  const accountantInit = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 500000,
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
    //   slideChange(swiper) {
    //     const slides = swiper.slides;
    //     const activeSlideIndex = swiper.activeIndex;
    //     const activeSlideNode = slides[activeSlideIndex];
    //     const videoSrc = activeSlideNode.dataset.videoSrc;
    //     const bindedTextSliders = Array.from(document.querySelectorAll(".swiper-main__slide"));

    //     const foundText = bindedTextSliders.find(video => video.dataset.aciveSlider === videoSrc);
    //     bindedTextSliders.forEach(video => video.removeAttribute("src"));
    //     foundText.attr("src");
    //   }
    // }
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
