/*
  Открытие/закрытие мобильного меню
*/
(function () {
  const toggleButton = document.querySelector('.toggle-btn');
  const siteNavigation = document.querySelector('.main-nav');
  // Открытие, закрытие меню
  const openMenu = () => {
    toggleButton.classList.toggle('toggle-btn--click');
    siteNavigation.classList.toggle('main-nav--opened');
  };
  toggleButton.addEventListener('click', openMenu);
}());
