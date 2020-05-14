const toggleButton = document.querySelector('.toggle-btn');
const siteNavigation = document.querySelector('.main-nav');
const openMenu = () => {
  toggleButton.classList.toggle('toggle-btn--click');
  siteNavigation.classList.toggle('main-nav--opened');
};

toggleButton.addEventListener('click', openMenu);


