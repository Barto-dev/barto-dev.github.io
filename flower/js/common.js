
//Мобильное меню
(function () {
  let menuButton = document.querySelector(".hamburger");
  let menu       = document.querySelector(".site-navigation");
  let nav        = document.querySelector(".main-nav");

  function openMenu() {
    nav.classList.remove("main-nav--closed-animation");
    menuButton.classList.toggle("is-active");
    menu.classList.toggle("site-navigation--opened");
    nav.classList.add("main-nav--opened-animation");
  };

  function closeMenu () {
    menuButton.classList.toggle("is-active");
    nav.classList.remove("main-nav--opened-animation");
    nav.classList.add("main-nav--closed-animation");
    setTimeout(function () {
      menu.classList.toggle("site-navigation--opened");
    },400);
  };

  menuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!menu.classList.contains("site-navigation--opened")) {
      openMenu();
    } else if (!nav.classList.contains("main-nav--closed-animation")) {
      closeMenu();
    }
  });

})();


//Local storage
let orderForm = document.querySelector(".order-modal__form");
let orderName = document.querySelector("#modal-order__name");
let orderPhone = document.querySelector("#modal-order__phone");


//Для хранения значений с localStorage
let nameStorage = "";
let phoneStorage = "";

if (orderForm) {
  let isStorageSupport = true;


  //Проверяем поддержку localStorage в браузере, по умолчанию в скрипте он определяется как включеный.
  try {
    nameStorage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
    //Получаем данные с local storage
  phoneStorage = localStorage.getItem("tel");

    //При отправке формы ,если локал localStorage работает, записываем в него значения ФИО
    orderForm.addEventListener("submit",function () {
      if (isStorageSupport) {
        localStorage.setItem("name", orderName.value);
        localStorage.setItem("tel", orderPhone.value);
      }
    });

  //Если есть хотяьы имя с локал сторедж, при следующей загрузке страницы в поля форм автоматически подставятся
  // значения
  if (nameStorage) {
    orderName.value = nameStorage;
    orderPhone.value = phoneStorage;
  }
}

//Карусель в каталоге

//инициализация всех слайдеров
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

//Карусель на главной странице
let catalogCarousel = $('.catalog__container').owlCarousel({
    items:1,
    nav: false,
    lazyLoad:true,
    dotsContainer: ".catalog__nav",
    responsive: {
      768: {
        items: 2,
        margin: 25
      },
      1200: {
        items: 4,
        margin: 60
      }
    }
});

//Карусель на страницах каталога
let galleryCarousel = $('.gallery').owlCarousel({
  items:3,
  loop: true,
  nav: false,
  margin: 10,
  stagePadding: 20,
  dots: false,

  responsive: {
    768: {
      items:4,
      margin: 0
    },
    1200: {
      items:4,
      margin: 5,
      stagePadding: 0,
      navContainer: ".service__gallery-nav"
    }
  }
});


//Плавный скролл
$(document).ready(function() {
    $('.main-header__arrow, .main-header__scroll-down').click(function(){
       $('html, body').animate({scrollTop:$('#catalog').position().top },800);
    });
});

  //Модальное окно
(function () {
  let openModalButton = document.querySelector(".js-open-modal");
  let closeModalButton = document.querySelector(".order-modal__close");
  let modalWindow = document.querySelector(".order-modal");
  let submitButton = document.querySelector(".order-modal__submit-button");

  function closeModal () {
    if (!modalWindow.classList.contains("order-modal--closed-animation")) {
      modalWindow.classList.toggle("order-modal--closed-animation");
      setTimeout(function () {
        modalWindow.classList.toggle("order-modal--opened");
      },400)
    }
  }

  openModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!modalWindow.classList.contains("order-modal--opened")) {
      modalWindow.classList.toggle("order-modal--closed-animation");
      modalWindow.classList.toggle("order-modal--opened");
      //Помещаем фокус в инпут телефон если в локал сторедж есть имя
      if (nameStorage) {
        orderPhone.focus()
      } else {
        orderName.focus()
      }
    }
  });

  //Закрытие модального окна при клике на крестик
  closeModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeModal();
  });

  //Закрытие модального окна при нажатии на клавишу ESC
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeModal();
    }
  });

  // Закрытие модального окна при клике в любом другом месте
  $(document).on('click', function(evt) {
      if (!$(evt.target).closest(".order-modal").length && evt.target !== openModalButton) {
        closeModal();
      }
    });

  // Закрытие модального окна при клике в любом другом месте
  document.addEventListener('click', function( event ) {
    //Если цель клика не модальное окно И модальное окно не содержит цель клика и это не кнопка открыть,
    // закрывает модальное окно
    if (modalWindow !== event.target && !modalWindow.contains(event.target) && event.target !== openModalButton) {
    closeModal();
   }
  });

  //Анимация ошибки при отправке не заполненой формы
  orderForm.addEventListener("submit", function (evt) {
    if (!orderName.value || !orderPhone.value) {
      evt.preventDefault();
      modalWindow.classList.remove("order-modal--error");
      modalWindow.offsetWidth = modalWindow.offsetWidth;
      modalWindow.classList.add("order-modal--error");
    }
  })
})();

//Ленивая загрузка картинок
let lazyLoadInstance = new LazyLoad({
    elements_selector :'.lazy',
    load_delay: 300
});

lazyLoadInstance.update();
