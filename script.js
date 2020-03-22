window.onload = function () {

  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    }
  });

  // pagination: '.swiper-pagination',
  //     nextButton: '.swiper-button-next',
  //     prevButton: '.swiper-button-prev',
  //     paginationClickable: true,
  //     spaceBetween: 30,
  //     centeredSlides: true,
  //     autoplay: 5500,
  //     loop: true,
  //     autoplayDisableOnInteraction: false

  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // autoplayDisableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  };




  // $(document).ready(function(){
  //   $('.your-class').slick({
  //     setting-name: setting-value
  //   });
  // });
