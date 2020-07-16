/*
  Фильтр по категориям
*/

(function () {
  'use strict';
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
}());
