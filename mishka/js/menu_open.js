// "use strict";

let navigation = document.querySelector(".main-nav");
let toggleButton = document.querySelector(".main-nav__button-toggle");
let siteNavigation = document.querySelector(".site-navigation");
let userNavigation = document.querySelector(".user-navigation");

//Удаляет если в браузере включен JS, иначе мобильное меню всегда будет доступно
navigation.classList.remove("main-nav--nojs");

toggleButton.addEventListener("click", function () {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened")
  } else {
    navigation.classList.remove("main-nav--opened");
    navigation.classList.add("main-nav--closed")
  }
});


//Modal window
let modal = document.querySelector(".modal-order");
let overlay = document.querySelector(".modal-overlay");
//Получаем массив всех кнопок которые могут открыть модальное окно
let openModal = document.querySelectorAll(".js-open-modal");

if (modal && overlay && openModal) {

  let closeModal = function() {
    //сработает только если клас не содержит анимацию закрытия, фиксит повторное
    // открытие при быстром нажатии клавиш esc
    if (!modal.classList.contains("modal-close-animation")) {
      //Добавляет анимацию закрытия так как изначально она удаляется при открытии модального окна.
      modal.classList.toggle("modal-close-animation");
      //через 0.4секунды после проигрывания анимации, убирает класс   открытия окна и потом прячет оверелей
      setTimeout(function () {
        modal.classList.toggle("modal-opened");
      }, 400);
      overlay.classList.toggle("modal-overlay-opened");
    }
  };

  for (let i=0; i < openModal.length; i++) {
    //Открытие модального окна при клике на кнопку заказать
    openModal[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      //Удаляет анимацию ошибки, чтоб не срабатывала при открытии
      modal.classList.remove("modal-error");
      //Открывает модальное окно (так как его изначально нету)
      modal.classList.toggle("modal-opened");
      //Открывает оверлей
      overlay.classList.toggle("modal-overlay-opened");
      //При открытии удаляет анимацию закрытия
      modal.classList.toggle("modal-close-animation");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });
  //При нажатии на оверлей, закрывает модалку, при нажатии на модалку, она не закроется потому что выше оверлея по
  // z-index
  overlay.addEventListener("click", closeModal);

  //error submit animation
  let modalForm = document.querySelector(".modal-order__form");
  let sizeInput = document.querySelectorAll(".size-list__radio-button");

  //Функция для проверки нажатия хоть одного radio-button
  function checked(arr) {
    let result = false;
    for (let i=0; i<arr.length; i++) {
      if(arr[i].checked) {
        result = true
      }
    }
    return result;
  }

  modalForm.addEventListener("submit", function (evt) {
    if (!checked(sizeInput)) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    }
  })
}


//Local storage
let orderForm = document.querySelector(".form");
let orderName = document.querySelector('[name="name"]');
let orderFamilyName = document.querySelector('[name="family-name"]');
let orderFatherName = document.querySelector('[name="father-name"]');

if (orderForm) {
  let isStorageSupport = true;
  let nameStorage = "";
  let familyNameStorage = "";
  let fatherNameStorage = "";

  //Проверяем поддержку localStorage в браузере, по умолчанию в скрипте он определяется как включеный.
  try {
    nameStorage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
    //Получаем данные с local storage
  familyNameStorage = localStorage.getItem("familyName");
  fatherNameStorage = localStorage.getItem("fatherName");

    //При отправке формы ,если локал localStorage работает, записываем в него значения ФИО
    orderForm.addEventListener("submit",function () {
      if (isStorageSupport) {
        localStorage.setItem("name", orderName.value);
        localStorage.setItem("familyName", orderFamilyName.value);
        localStorage.setItem("fatherName", orderFatherName.value);
      }
    });

  //Если есть имя с локал сторедж, при следующей загрузке страницы в поля форм автоматически подставятся
  // значения
  if (nameStorage) {
    orderName.value = nameStorage;
    orderFamilyName.value = familyNameStorage;
    orderFatherName.value = fatherNameStorage;
  }
}

(function () {
  //Слайдер
  //Получаем кнопки
  let togglePrev = document.querySelector(".reviews__nav-button--prev");
  let toggleNext = document.querySelector(".reviews__nav-button--next");

  //Если кнопки доступны
  if (togglePrev && toggleNext) {
    toggleNext.addEventListener("click", function (evt) {
      evt.preventDefault();
      //Получаем текущий слайдер
      let slideCurrent = document.querySelector(".reviews__item--show");
      //Следующий элемент в DOM, общего родителя
      let slideNext = slideCurrent.nextElementSibling;

      if (!slideNext) return; //Если нет следующего отзыва, прерываем выполнение всей функции
      //Если не находит следующий элемент DOM, кнопка недоступна
      if (!slideNext.nextElementSibling) {
        //Добавляет атрибуст disabled чтоб элемент не был доступен через таб
        toggleNext.setAttribute("disabled", "disabled");
      }
      //Прячем текущий отзыв
      slideCurrent.classList.remove("reviews__item--show");
      //Показываем следующий
      slideNext.classList.add("reviews__item--show");
      //Убираем с кнопки атрибут disabled, стили привязаны к псевдокласу disabled
      togglePrev.removeAttribute("disabled", "disabled");
    });

    togglePrev.addEventListener("click", function (evt) {
      evt.preventDefault();
      let slideCurrent = document.querySelector(".reviews__item--show");
      let slidePrev = slideCurrent.previousElementSibling;

      if (!slidePrev) return;
      if (!slidePrev.previousElementSibling) {
        togglePrev.setAttribute("disabled", "disabled");
      }

      slideCurrent.classList.remove("reviews__item--show");
      slidePrev.classList.add("reviews__item--show");
      toggleNext.removeAttribute("disabled", "disabled");
    })
  }

})();



