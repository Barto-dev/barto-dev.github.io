let navigation = document.querySelector(".main-nav");
let toggleMenuButton = document.querySelector(".main-nav__toggle-button");
let lineOne = document.querySelector(".main-nav__line--1");
let lineTwo = document.querySelector(".main-nav__line--2");
let lineThree = document.querySelector(".main-nav__line--3");
let siteNavigation = document.querySelector(".site-navigation");
//массив с кнопками меню
let menuButton = document.querySelectorAll(".site-navigation__link");
//слайд
let swiperContainer = document.querySelector(".swiper-container");
//Карточка навыков
let card = document.querySelectorAll(".skill-card");
//Контейнер карточки навыков
let cardContainer = document.querySelectorAll(".skill-card__container");
let activeButton = document.querySelector(".site-navigation__link--active");

//flipped skill card
for (let i=0; i<card.length;i++) {
  card[i].addEventListener("click", function () {
    cardContainer[i].classList.toggle("flipped");
  })
}


//Закрытие мобильного меню
function toggleMenu () {
  navigation.classList.toggle("main-nav--opened");
  lineOne.classList.toggle("main-nav__line--cross-1");
  lineTwo.classList.toggle("main-nav__line--fade-out");
  lineThree.classList.toggle("main-nav__line--cross-3");
  swiperContainer.classList.toggle("swiper-container--fade");
}

toggleMenuButton.addEventListener("click", toggleMenu);

//Swiper
var mySwiper = new Swiper ('.swiper-container', {
    keyboard: true,
    direction: 'horizontal',
    autoHeight: true,
    effect: "fade",
    speed: 500,
    // preloadImages: false,
    // lazy: {
    //   loadPrevNext: true
    // },
    fadeEffect: { crossFade: true },
    breakpoints: {
      1200: {
       allowTouchMove:false
      }
    }
  });


//Навигация по слайдам при клике на элементе меню
for (let i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener("click", function () {
    let activeButton = document.querySelector(".site-navigation__link--active");
    activeButton.classList.remove("site-navigation__link--active");
    menuButton[i].classList.add("site-navigation__link--active");
    mySwiper.slideTo(i);
    toggleMenu();
  })
}



