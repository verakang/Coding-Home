"use strict";

$(function () {
  var swiper = new Swiper(".mySwiper-type", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 50
      }
    }
  });
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true
  });
  var swiper = new Swiper(".mySwiper-button", {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 50
      }
    }
  });
});
//# sourceMappingURL=all.js.map
