/*
  Переключение языка
*/
(function () {
  const languageBlock = document.querySelector('.choice-language__wrapper');
  const languageBtn = document.querySelector('.choice-language__btn');
  const promoTitles = document.querySelectorAll('.js-lang');
  // Открытие/закрытие выбора языка
  languageBtn.addEventListener('click', () => {
    languageBlock.classList.toggle('hidden');
    languageBtn.classList.toggle('choice-language__btn--open');
  });
  const choiceLanguage = (target, langPages) => {
    langPages.forEach((title) => {
      if (title.lang !== target.value) {
        title.classList.add('hidden');
      } else {
        title.classList.remove('hidden');
      }
    });
  };
  //  Делегируем событие клика внутренним элементам
  languageBlock.addEventListener('click', (evt) => {
    // Деструктуризация объекта события
    const { target } = evt;
    if (target.name === 'language') {
      languageBtn.innerText = target.parentElement.innerText;
      choiceLanguage(target, promoTitles);
    }
  });
}());
