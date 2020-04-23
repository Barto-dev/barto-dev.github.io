const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formControl = document.querySelectorAll(".form-control")

//Show input error message
//Добавляет клас ошибки валидации
function showError (input, message) {
  //Получаем родитель элемента с параметров
  const  formControl = input.parentElement;
  //Добавляем имя класса родителю инпута
  formControl.className = "form-control error";
  //Получаем элемент с текстом ошибки с тегом small
  const small = formControl.querySelector("small");
  //Меняем текст тега small на текст из параметра функции
  small.innerText = message;
}

//Show succes outline
//Добавляет клас инпуту при успешной валидации
function showSucces(input) {
  //Получаем родитель элемента с параметров
  const  formControl = input.parentElement;
  //Добавляем имя класса родителю инпута
  formControl.className = "form-control succes";
}

//Check email is valid
//Проверяем валидацию почты
function checkEmail(input) {
  //Определяем регулярное выражение
  const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Возвращаем значение проверки, приведя значение email к маленьким буквам
  if (re.test(input.value.trim())) {
    showSucces();
  } else {
    showError(input, 'Email is not valid')
  }

}

//Check passwords match
//Проверяем на совпадение пароли
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

//Get fieldname
//Получаем имя инпута
function getFieldName(input) {
  //Возвращает первую большую букву и склеивает с остальным текстом ID поля ввода
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check required fields
//Проверяем пустые поля
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      //Выводит текст поля с первой большой буквы если поле пустое
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input)
    }
  });
}

//Check input length
//Выводит уведомление об ошибке если value инпута меньше или больше указанных значений
function checkLength(input, min, max) {
  if (input.value.length < min ) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max ) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSucces(input);
  }
}

//Event listeners
form.addEventListener("submit", function (evt) {
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  //Если какая то из форм содержит ошибку валидации, прервать дефолтное поведение, иначе форма отправится
  for (let i=0; i<formControl.length; i++) {
    if (formControl[i].classList.contains("error")) {
      evt.preventDefault();
    }
  }
});
