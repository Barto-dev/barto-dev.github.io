/*
  Переключение пагинации
*/

(function () {
  const togglePrev = document.querySelector('.pagination__arrow--prev');
  const toggleNext = document.querySelector('.pagination__arrow--next');
  const currentButtonClass = 'pagination__button--current';
  const paginationButtons = document.querySelectorAll('.pagination__item');
  /*
     Переключение стрелками => передать nextPage/prevPage
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
}());
