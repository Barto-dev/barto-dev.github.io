const toggleButton = document.querySelector('.toggle-btn');
const siteNavigation = document.querySelector('.main-nav');
// Открытие, закрытие меню
const openMenu = () => {
  toggleButton.classList.toggle('toggle-btn--click');
  siteNavigation.classList.toggle('main-nav--opened');
};
toggleButton.addEventListener('click', openMenu);

// Фильтр по категориям
const projectCard = document.querySelectorAll('.project-card');
const filter = document.querySelector('.projects__filter');
// Фильтрует блоки, принимает значение фильтра и псевдомассив элементов
const choiceBlocks = (value, cards) => {
  cards.forEach((card) => {
    if (card.dataset.category !== value && value !== 'all') {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  });
};
//  Делегируем событие клика внутренним элементам
filter.addEventListener('click', (evt) => {
  // Деструктуризация объекта события
  const { target } = evt;
  if (target.type === 'radio') {
    choiceBlocks(target.value, projectCard);
  }
});

// Скролл
const scrollButton = document.querySelector('.promo__scroll-btn');
const projects = document.querySelector('.projects');
const scrollToProjects = () => projects.scrollIntoView({
  block: 'start',
  behavior: 'smooth'
});
scrollButton.addEventListener('click', scrollToProjects);

// Переключение пагинации
const togglePrev = document.querySelector('.pagination__arrow--prev');
const toggleNext = document.querySelector('.pagination__arrow--next');
const currentButtonClass = 'pagination__button--current';
const paginationButtons = document.querySelectorAll('.pagination__item');
/*
   Переключение стрелками => передать nextPage
   Переключение кликом => передать button
   Включает/выключает стрелки
*/
const onOffArrow = (node) => {
  toggleNext.disabled = false;
  togglePrev.disabled = false;
  if (!node.nextElementSibling) {
    toggleNext.disabled = true;
  } else if (!node.previousElementSibling) {
    togglePrev.disabled = true;
  }
};
// Меняет класс выбранного элемента
const changeCurrentButton = (currentPage, choicePage) => {
  currentPage.classList.remove(currentButtonClass);
  choicePage.classList.add(currentButtonClass);
};
// Переключение пагинации по клику на цифру
paginationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentPage = document.querySelector(`.${currentButtonClass}`);
    changeCurrentButton(currentPage, button);
    onOffArrow(button);
  });
});
// Переключить на следущую страницу
const toNextPage = () => {
  const currentPage = document.querySelector(`.${currentButtonClass}`);
  const nextPage = currentPage.nextElementSibling;
  if (!nextPage) return;
  changeCurrentButton(currentPage, nextPage);
  onOffArrow(nextPage);
};
// Переключить на предидущую страницу
const toPrevPage = () => {
  const currentPage = document.querySelector(`.${currentButtonClass}`);
  const prevPage = currentPage.previousElementSibling;
  if (!prevPage) return;
  changeCurrentButton(currentPage, prevPage);
  onOffArrow(prevPage);
};

toggleNext.addEventListener('click', toNextPage);
togglePrev.addEventListener('click', toPrevPage);

//  Переключение языка
const languageBlock = document.querySelector('.main-header__choice-language');
const languages = document.querySelectorAll('.main-header__language');

languageBlock.addEventListener('click', () => {
  languages.forEach((language) => {
    if (language.classList.contains('hidden')) {
      language.classList.remove('hidden');
    } else {
      language.classList.add('hidden');
    }
  });
});
