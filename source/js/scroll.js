// header-fixed
(function () {
  var oldScrollY = 0;
var div = document.getElementById("header-fixed");
var addressTop = document.querySelector(".page-header__contacts");

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

    if ($(window).scrollTop() > 300) {
      div.classList.add('header-mobile--dark');
      div.classList.remove('fixed-bottom');
      addressTop.classList.add("hidden");
    } else {
      div.classList.remove('header-mobile--dark');
      addressTop.classList.remove("hidden");
    }

    oldScrollY = scrolled;
  }
});


var $page = $("html, body");
$('a[href*="#"]').click(function() {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
  return false;
});


ScrollReveal().reveal(".door-types__item", { delay: 500 });
ScrollReveal().reveal(".regulations__item", { delay: 500 });
ScrollReveal().reveal(".advantages__item", { delay: 500 });
ScrollReveal().reveal(".reviews", { delay: 500 });
ScrollReveal().reveal(".gallery", { delay: 500 });
ScrollReveal().reveal(".action", { delay: 500 });
ScrollReveal().reveal(".contacts", { delay: 500 });

})();

// header-fixed end
