/*
    Валидация и открытие формы
*/

(function () {
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
    return input.id.charAt(0)
      .toUpperCase() + input.id.slice(1);
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
    // Если какая то из форм содержит ошибку валидации, прервать
    // дефолтное поведение, иначе форма отправится
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
}());
