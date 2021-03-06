"use strict";

// слайдеры на главной
$(document).ready(function() {
  $(".swiper-object .swiper-container").each(function(index, value) {
    var mySwiper = new Swiper(value, {
      navigation: {
        nextEl: value.nextElementSibling.nextElementSibling,
        prevEl: value.nextElementSibling
      },
      pagination: {
        el: value.nextElementSibling.nextElementSibling.nextElementSibling,
        clickable: true
      },
      slidesPerView: 4,
      loop: true,
      slidesPerColumn: 1,
      breakpoints: {
        // when window width is <= 425px
        425: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 990px
        990: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });

  $(".slider-reviews .swiper-container").each(function(index, value) {
    var swiper = new Swiper(value, {
      navigation: {
        nextEl: value.nextElementSibling.nextElementSibling,
        prevEl: value.nextElementSibling
      },
      pagination: {
        el: value.nextElementSibling.nextElementSibling.nextElementSibling,
        clickable: true
      },
      slidesPerView: 3,
      loop: true,
      slidesPerColumn: 1,
      breakpoints: {
        // when window width is <= 425x
        425: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 780px
        780: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 990px
        990: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });
});
