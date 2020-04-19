let navigation = document.querySelector(".main-nav");
let toggleMenuButton = document.querySelector(".main-nav__toggle-button");
let lineOne = document.querySelector(".main-nav__line--1");
let lineTwo = document.querySelector(".main-nav__line--2");
let lineThree = document.querySelector(".main-nav__line--3");
let siteNavigation = document.querySelector(".site-navigation");

toggleMenuButton.addEventListener("click", () => {
  // siteNavigation.classList.toggle("site-navigation--show");
  navigation.classList.toggle("main-nav--opened");
  lineOne.classList.toggle("main-nav__line--cross-1");
  lineTwo.classList.toggle("main-nav__line--fade-out");
  lineThree.classList.toggle("main-nav__line--cross-3");

});

//Swiper
var mySwiper = new Swiper ('.swiper-container', {

    // Optional parameters
 allowTouchMove:true,
    mousewheel: true,
    keyboard: true,
    direction: 'vertical',
    // autoHeight: true,
    effect: "fade",
    speed: 600,
    forceToAxis: true,
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 // "fade", "cube", "coverflow" or "flip"
mySwiper.mousewheel.enable();
