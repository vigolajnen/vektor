var oldScrollY = 0;
var div = document.getElementById("header-fixed");

$(window).ready(function () {
  div.classList.add('fixed');
  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;

    if (dY > 0) {
      div.className = "fixed fixed-bottom";
    } else {
      div.className = "fixed fixed-top";
    }

    if ($(window).scrollTop() > 600) {
      div.classList.add('header-mobile--dark');
      div.classList.remove('fixed-bottom');
    } else {
      div.classList.remove('header-mobile--dark');
    }

    oldScrollY = scrolled;
  }
});

$('.js-regulations').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#regulations').offset().top + "px"
  }, {
    duration: 1E3
  });
});

$('.js-advantages').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#advantages').offset().top + "px"
  }, {
    duration: 1E3
  });
});

$('.js-contacts').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#contacts').offset().top + "px"
  }, {
    duration: 1E3
  });
});
$('.js-reviews').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#reviews').offset().top + "px"
  }, {
    duration: 1E3
  });
});
$('.js-action').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#action').offset().top + "px"
  }, {
    duration: 1E3
  });
});

$('.js-promo').on('click', function () {
  $('html,body').animate({
    scrollTop: $('#promo').offset().top + "px"
  }, {
    duration: 1E3
  });
});