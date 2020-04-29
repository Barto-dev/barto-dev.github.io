//Навигация
let toggleButton = document.querySelector('.toggle-button');
let siteNavigation = document.querySelector('.site-navigation');
let line_1 = document.querySelector('.toggle-button__line--1');
let line_2 = document.querySelector('.toggle-button__line--2');
let line_3 = document.querySelector('.toggle-button__line--3');
let line_4 = document.querySelector('.toggle-button__line--4');

//Timeline
let circle = document.querySelector('.circle__wrapper');
let thumbs = document.querySelectorAll('.circle__thumb');
let timeLine = document.querySelector('.timeline');

//Переключение меню
function toggleMenu() {
  siteNavigation.classList.toggle("site-navigation--opened");
  line_1.classList.toggle("main-nav__line--cross-1");
  line_2.classList.toggle("main-nav__line--fade-out");
  line_3.classList.toggle("main-nav__line--fade-out");
  line_4.classList.toggle("main-nav__line--cross-4");
}

toggleButton.addEventListener('click', toggleMenu);
dataPosition(thumbs);

//Размещает элементы по кругу
function dataPosition(arr) {
  //Позиция первого элемента
  let startPositionY = 85;
  //Rotate первого элемента
  let startRotate = -40;
  //Первое смещение координаты Y
  let bias = 35;
  //Счетчик смещения для получения стилей зеркального элемента
  let arrCounter = 2;
  //
  let replaceRotate ='';
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.cssText = `transform: translateY(${startPositionY}px) rotate(${startRotate}deg)`;
    if (i > 4) {
      //Получает стили элемента с зеркальной стороны
      replaceRotate= arr[i - arrCounter].style.transform.replace('-', '');
      arr[i].style.transform = replaceRotate;
      arrCounter += 2;
    } else {
      //Смещение координаты Y
      bias /= (i - 0.14) + 1;
      startPositionY -= bias;
      startRotate += 10;
    }
  }
}

//Высчитывает градус поворота у элемента
function calculateRotateDegree(dateArr) {
  let isMinusDeg = true;
  let getRotate = '';
  //Получает подстроку со значением поворота
  getRotate = dateArr.style.transform.substr(-7);
  let getNumberRotate = '';
  //Проверка на отрицательный градус поворота
  if (getRotate.indexOf('-') === -1) {
    isMinusDeg = false;
  };
  //Получение числового значения поворота
  getRotate.split('').forEach(function (letter) {
    if (parseInt(letter) >= 0) {
      getNumberRotate += letter;
    }
  });
  //Инвертируем, если градус поворота отрицательный, крутим в обратную сторону
  if (!isMinusDeg) {
    getNumberRotate = -getNumberRotate;
  }
  return parseInt(getNumberRotate, 10);
}

//evt: клик по дате
for (let i = 0; i < thumbs.length; i ++) {
  thumbs[i].addEventListener('click', function () {
    let activeDate = document.querySelector('.circle__thumb--active');
    activeDate.classList.remove('circle__thumb--active');
    thumbs[i].classList.add('circle__thumb--active');
    moveCircle(thumbs[i]);
    mySwiper.slideTo(i);
  })
}

// Высчитывает градус поворота при скролле вниз и меняет active на следующий элемент
function scrollDownRotate() {
  let activeDate = document.querySelector('.circle__thumb--active');
  if (activeDate.nextElementSibling) {
    activeDate.classList.remove('circle__thumb--active');
    activeDate.nextElementSibling.classList.add('circle__thumb--active');
    return activeDate.nextElementSibling;
  }
}

// Высчитывает градус поворота при скролле вверх и меняет active на предидущий элемент
function scrollUpRotate() {
  let activeDate = document.querySelector('.circle__thumb--active');
  if (activeDate.previousElementSibling) {
    activeDate.classList.remove('circle__thumb--active');
    activeDate.previousElementSibling.classList.add('circle__thumb--active');
    return activeDate.previousElementSibling;
  }
}


//Двигает таймлайн
function moveCircle(thumb) {
  circle.style.cssText = `transform: rotate(${calculateRotateDegree(thumb)}deg)`;
}

//Индикатор скролла
var indicator = new WheelIndicator({
  elem: timeLine,
  callback: function(evt){
    let nextDate = document.querySelector('.circle__thumb--active').nextElementSibling;
    let prevDate = document.querySelector('.circle__thumb--active').previousElementSibling;
    if (evt.direction == 'down' && nextDate) {
      moveCircle(scrollDownRotate());
      mySwiper.slideNext();
    } else if (evt.direction == 'up' && prevDate) {
      mySwiper.slidePrev();
      moveCircle(scrollUpRotate());
    }

  }
});
indicator.getOption('preventMouse');

//Свайпер
var mySwiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 1,
  touchRatio: 0.4,
  slideToClickedSlide: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  initialSlide: 4,
  allowTouchMove:false,
  speed: 500
  // loop: true,
  // loopedSlides: 4,

});


timeLine.addEventListener('swiped-left', function(e) {
  let nextDate = document.querySelector('.circle__thumb--active').nextElementSibling;
  if (nextDate) {
    moveCircle(scrollDownRotate());
    mySwiper.slideNext();
  }
});
timeLine.addEventListener('swiped-right', function(e) {
    let prevDate = document.querySelector('.circle__thumb--active').previousElementSibling;
    if (prevDate) {
      mySwiper.slidePrev();
      moveCircle(scrollUpRotate());
    }
});
