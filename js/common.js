'use strict';

const toggleButton = document.querySelector('.toggle-btn');
const siteNavigation = document.querySelector('.main-nav');
// Открытие, закрытие меню
const openMenu = () => {
  toggleButton.classList.toggle('toggle-btn--click');
  siteNavigation.classList.toggle('main-nav--opened');
};
toggleButton.addEventListener('click', openMenu);

/*
  Фильтр по категориям
*/
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


/*
  Scroll
*/
const scrollButton = document.querySelector('.promo__scroll-btn');
const projects = document.querySelector('.projects');
const scrollToProjects = () => projects.scrollIntoView({
  block: 'start',
  behavior: 'smooth',
});
scrollButton.addEventListener('click', scrollToProjects);


/*
  Переключение пагинации
*/
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


/*
  Переключение языка
*/
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
/*
  Lazy-load
 */
const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
  load_delay: 300,
});
lazyLoadInstance.update();

/*
  Валидация формы
 */
const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const formControl = document.querySelectorAll('.form__control');

// Добавляет клас ошибки валидации
function showError(input, message) {
  // Получаем родитель элемента с параметров
  const control = input.parentElement;
  // Добавляем имя класса родителю инпута
  control.className = 'form__control error';
  const small = control.querySelector('small');
  // Меняем текст тега small на текст из параметра функции
  small.innerText = message;
}

// Показывает успешность заполнения
function showSucces(input) {
  const { parentElement } = input;
  // Добавляем имя класса родителю инпута
  parentElement.className = 'form__control succes';
}

// Проверяем валидацию почты
function checkEmail(input) {
  // Определяем регулярное выражение
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Возвращаем значение проверки, приведя значение email к маленьким буквам
  if (re.test(input.value.trim())) {
    showSucces();
  } else {
    showError(input, 'Пошта не валідна');
  }
}

// Проверяем на совпадение пароли
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Паролі не співпадають');
  }
}

// Получаем имя инпута
function getFieldName(input) {
  // Возвращает первую большую букву и склеивает с остальным текстом ID поля ввода
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Проверяем пустые поля
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      // Выводит текст поля с первой большой буквы если поле пустое
      showError(input, `${getFieldName(input)} повинен бути заповнений`);
    } else {
      showSucces(input);
    }
  });
}

// Выводит уведомление об ошибке если value инпута меньше или больше указанных значений
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} повинен бути не менше ${min} символів`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} повинен бути не більше ${max} символів`);
  } else {
    showSucces(input);
  }
}

// Event listeners
form.addEventListener('submit', (evt) => {
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  // Если какая то из форм содержит ошибку валидации, прервать дефолтное поведение, иначе форма отправится
  for (let i = 0; i < formControl.length; i += 1) {
    if (formControl[i].classList.contains('error')) {
      evt.preventDefault();
    }
  }
});

/*
  Открытие/закрытие формы
*/
const containerForm = document.querySelector('.container-form');
const openFormBtn = document.querySelector('.js-open-form');
const overlay = document.querySelector('.form-overlay');
openFormBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  containerForm.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  containerForm.classList.add('hidden');
});
