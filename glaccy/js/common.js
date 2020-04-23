//Слайдер
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let bodyChangeSlide = document.querySelector('body');
let goodDealName = document.querySelector('.good-deal__name');
let currentSlide = "slider-1";

//Открытие и закрытие модалки
let modalFeedback = document.querySelector(".feedback-modal-window");
let closeFeedbackWindow = modalFeedback.querySelector(".feedback-modal-window__close-modal");
let overlayFeedback = document.querySelector(".feedback-overlay");
let openFeedbackWindow = document.querySelector(".open-modal");
let nameInput = modalFeedback.querySelector("[name=name]");

//Анимаци при отправке
let modalForm = modalFeedback.querySelector("form");
let emailInput = document.getElementById("feedback-user-email");
let textInput = document.getElementById("feedback-text");


/////////////////////////////////
/////////// Слайдер//////////////
/////////////////////////////////

slide1.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-1")) {
        //Убирает предидущий класс
        bodyChangeSlide.classList.remove(currentSlide);
        //Меняет оглавление
        goodDealName.textContent = "Крем брюле и пломбир с малиновым джемом";
        //Находит предидущий активный баттон, убирает фон и добавляет фон текущему элементу
        let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide1.classList.add("current-slider-button");
        //Меняет оформление фона страницы
        bodyChangeSlide.classList.add("slider-1");
        //Устанавлиает текущий класс для последующего удаления при смене фона
        currentSlide = "slider-1";
    }
});

slide2.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-2")) {
        bodyChangeSlide.classList.remove(currentSlide);
        goodDealName.textContent = "Шоколадный пломбир и лимонный сорбет";
        let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide2.classList.add("current-slider-button");
        bodyChangeSlide.classList.add("slider-2");
        currentSlide = "slider-2";
    }
});

slide3.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-3")) {
        bodyChangeSlide.classList.remove(currentSlide);
        goodDealName.textContent = "Пломбир с помадкой и клубничный щербет";
        bodyChangeSlide.classList.add("slider-3");
       let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide3.classList.add("current-slider-button");
        currentSlide = "slider-3";
    }
});

///////////////////////////
////////Local//////////////
//////////storage//////////
let isStorageSupport = true;
let nameStorage="";


try {
    nameStorage=localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

//////////Форма//////////////////
////////Обратной/////////////////
//////////Связи//////////////////

openFeedbackWindow.addEventListener("click", function (evt) {
    //Убирает поведение по умолчанию
    evt.preventDefault();
    //Убирает анимацию закрытия, чтоб появившийся элемент при открытия не уменьшился.
    modalFeedback.classList.remove("close-animation");
    modalFeedback.classList.remove("modal-error");
    //Добавляет анимацию и делает видимым модальное окно и оверлей
    modalFeedback.classList.add("modal-animation");
    modalFeedback.classList.add("show-modal");
    overlayFeedback.classList.add("show-modal");
    //При открытии формы автоматически помещает фокус в поле ввода имени
    if (nameStorage) {
        nameInput.value = nameStorage;
        emailInput.focus()
    } else {
        nameInput.focus();
    }
    
});

closeFeedbackWindow.addEventListener("click", function (evt) {
    evt.preventDefault();
    //Убирает анимацию открытия
    modalFeedback.classList.remove("modal-animation");
    //Добавляет анимацию закрытия
    modalFeedback.classList.add("close-animation");
    //после проигрывания анимации скрывает модалку, хоть она уже и скрыта но влияет на доступность
    setTimeout(function () {
        modalFeedback.classList.remove("show-modal")
    }, 600);
    //скрывает оверлей
    overlayFeedback.classList.remove("show-modal");
});

window.addEventListener("keyup", function (evt) {
    if (evt.keyCode === 27 && modalFeedback.classList.contains("show-modal")) {
    modalFeedback.classList.remove("modal-animation");
    modalFeedback.classList.add("close-animation");
    setTimeout(function () {
        modalFeedback.classList.remove("show-modal")
    }, 100);
    overlayFeedback.classList.remove("show-modal");
    }
});

modalForm.addEventListener("submit", function (evt) {
    if (!nameInput.value || !emailInput.value || !textInput.value ) {
        evt.preventDefault();
        modalFeedback.classList.remove('modal-error');
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
    } else {
        if(isStorageSupport) {
            localStorage.setItem("name", nameInput.value);
        }
    }
});

/////////////////////////////////
////////Автофокусы форм//////////
/////////////////////////////////

let searchModal = document.querySelector(".search-modal");
let enterModal = document.querySelector(".enter-modal");

searchModal.addEventListener("mouseenter", function(evt){
    evt.preventDefault();
    searchModal.querySelector(".modal-inputs").focus();
});

enterModal.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    enterModal.querySelector("[type='email']").focus();
});

  let lazyLoadInstance = new LazyLoad({
    elements_selector :'.lazy',
    load_delay: 300
});

lazyLoadInstance.update();

