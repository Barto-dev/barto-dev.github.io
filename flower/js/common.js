(function () {
  let menuButton = document.querySelector(".hamburger");
  let menu       = document.querySelector(".site-navigation");
  let nav        = document.querySelector(".main-nav");

  function openMenu() {
    nav.classList.remove("main-nav--closed-animation");
    menuButton.classList.toggle("is-active");
    menu.classList.toggle("site-navigation--opened");
    nav.classList.add("main-nav--opened-animation");
  };

  function closeMenu () {
    menuButton.classList.toggle("is-active");
    nav.classList.remove("main-nav--opened-animation");
    nav.classList.add("main-nav--closed-animation");
    setTimeout(function () {
      menu.classList.toggle("site-navigation--opened");
    },400);
  };

  menuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!menu.classList.contains("site-navigation--opened")) {
      openMenu();
    } else if (!nav.classList.contains("main-nav--closed-animation")) {
      closeMenu();
    }
  });

})();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

let catalogCarousel = $('.catalog__container').owlCarousel({
    items:1,
    nav: false,

    dotsContainer: ".catalog__nav",
    responsive: {
      768: {

        items: 2,
        margin: 25

      },
      1200: {
        items: 4,
        margin: 60,
        mouseDrag: false,
        touchDrag: false
      }
    }
});

$('.owl-dot').click(function () {
  catalogCarousel.trigger('to.catalogCarousel.carouesel', [$(this).index(), 1000])
})
