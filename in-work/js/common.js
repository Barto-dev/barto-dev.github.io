let navigation = document.querySelector(".main-nav");
let toggleMenuButton = document.querySelector(".main-nav__toggle-button");
let lineOne = document.querySelector(".main-nav__line--1");
let lineTwo = document.querySelector(".main-nav__line--2");
let lineThree = document.querySelector(".main-nav__line--3");

toggleMenuButton.addEventListener("click", () => {
  navigation.classList.toggle("main-nav--opened");
  lineOne.classList.toggle("main-nav__line--cross-1");
  lineTwo.classList.toggle("main-nav__line--fade-out");
  lineThree.classList.toggle("main-nav__line--cross-3");

});
