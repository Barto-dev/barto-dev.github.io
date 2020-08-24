/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/event-edit.js":
/*!**************************************!*\
  !*** ./src/components/event-edit.js ***!
  \**************************************/
/*! exports provided: createEventEditTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventEditTemplate", function() { return createEventEditTemplate; });
/**
 * @description if point have additional offers, render offers block
 * @param {object|null}additionalOffers
 * @return {string}
 */
const createEventEditAdditionalOfferTemplate = (additionalOffers)=> {
  const offers = additionalOffers !== null
    ? additionalOffers.map((offerItem) => {
      return (
        `<div class="event__offer-selector">
       <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
       <label class="event__offer-label" for="event-offer-luggage-1">
         <span class="event__offer-title">${offerItem.title}</span>
         &plus;
         &euro;&nbsp;<span class="event__offer-price">${offerItem.price}</span>
       </label>
     </div>`
      );
    }).join(``)
    : ``;
  return offers
    ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offers}
        </div>
     </section>`
    : ``;
};


const createEventEditTemplate = (editPointTemplateDate = {}) => {
  // default data
  const {
    point = ``,
    city = ``,
    startTime = ``,
    endTime = ``,
    price = `0`,
    additionalOffer
  } = editPointTemplateDate;
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>
            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
              <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>
          </fieldset>
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Activity</legend>
            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>
            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${point} to
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
          <option value="Saint Petersburg"></option>
        </datalist>
      </div>
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
      </div>
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
      </div>
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
       ${createEventEditAdditionalOfferTemplate(additionalOffer)}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
          </div>
        </div>
      </section>
    </section>
  </form>`
  );
};



/***/ }),

/***/ "./src/components/event-point.js":
/*!***************************************!*\
  !*** ./src/components/event-point.js ***!
  \***************************************/
/*! exports provided: createEventPointTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventPointTemplate", function() { return createEventPointTemplate; });
const createEventPointTemplate = () => {
  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">1</span>
          <time class="day__date" datetime="2019-03-18">MAR 18</time>
        </div>
        <ul class="trip-events__list"></ul>
      </li>
    </ul>`
  );
};


/***/ }),

/***/ "./src/components/events-item.js":
/*!***************************************!*\
  !*** ./src/components/events-item.js ***!
  \***************************************/
/*! exports provided: createEventTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventTemplate", function() { return createEventTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


/**
 * @param {array|null} additionalOffers
 * @return {string}
 */
const createAdditionalOfferTemplate = (additionalOffers) => {
  return additionalOffers !== null
    ? additionalOffers.map((offer) => {
      return (
        `<li class="event__offer">
       <span class="event__offer-title">${offer.title}</span>
       &plus;
       &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
     </li>`
      );
    }).join(``)
    : ``;
};

/**
 * @param {object} eventData
 * @return {string}
 */
const createEventTemplate = (eventData) => {
  const {point, city, startTime, endTime, price, additionalOffer} = eventData;
  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${point} to ${city}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["prettyDate"])(startTime)}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["prettyDate"])(endTime)}</time>
        </p>
        <p class="event__duration">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getTimeBetween"])(startTime, endTime)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createAdditionalOfferTemplate(additionalOffer)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};




/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: createFiltersTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFiltersTemplate", function() { return createFiltersTemplate; });
const createFiltersTemplate = () => {
  return (
    `<form class="trip-filters" action="#" method="get">
       <div class="trip-filters__filter">
         <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
         <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
       </div>
       <div class="trip-filters__filter">
         <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
         <label class="trip-filters__filter-label" for="filter-future">Future</label>
        </div>
        <div class="trip-filters__filter">
          <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
          <label class="trip-filters__filter-label" for="filter-past">Past</label>
         </div>
       <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};


/***/ }),

/***/ "./src/components/site-menu.js":
/*!*************************************!*\
  !*** ./src/components/site-menu.js ***!
  \*************************************/
/*! exports provided: createMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuTemplate", function() { return createMenuTemplate; });
const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
       <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
     </nav>`
  );
};


/***/ }),

/***/ "./src/components/sort-trip.js":
/*!*************************************!*\
  !*** ./src/components/sort-trip.js ***!
  \*************************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
const createSortTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <span class="trip-sort__item  trip-sort__item--day">Day</span>
    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">
        Time
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label class="trip-sort__btn" for="sort-price">
        Price
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>
    <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`
  );
};


/***/ }),

/***/ "./src/components/trip-cost.js":
/*!*************************************!*\
  !*** ./src/components/trip-cost.js ***!
  \*************************************/
/*! exports provided: createTripCostTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripCostTemplate", function() { return createTripCostTemplate; });
const createTripCostTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
       <p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span></p>
     </section>`
  );
};


/***/ }),

/***/ "./src/components/trip-info.js":
/*!*************************************!*\
  !*** ./src/components/trip-info.js ***!
  \*************************************/
/*! exports provided: createTripInfoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripInfoTemplate", function() { return createTripInfoTemplate; });
const createTripInfoTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
       <div class="trip-info__main">
          <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
       </div>
     </section>`
  );
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_site_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/site-menu */ "./src/components/site-menu.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_sort_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sort-trip */ "./src/components/sort-trip.js");
/* harmony import */ var _components_event_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/event-edit */ "./src/components/event-edit.js");
/* harmony import */ var _components_event_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/event-point */ "./src/components/event-point.js");
/* harmony import */ var _components_events_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/events-item */ "./src/components/events-item.js");
/* harmony import */ var _components_trip_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/trip-info */ "./src/components/trip-info.js");
/* harmony import */ var _components_trip_cost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/trip-cost */ "./src/components/trip-cost.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");











const EVENT_COUNT = 7;

const travelPointData = new Array(EVENT_COUNT)
  .fill()
  .map(_mock_point__WEBPACK_IMPORTED_MODULE_8__["generateTravelPoint"]);
// Sort by date
const sortedTravelPoint = travelPointData.sort((a, b)=> {
  return a.startTime.getTime() - b.startTime.getTime();
});
/**
 * render HTML
 * @param {object} container
 * @param {string} template
 * @param {string} place
 */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlElement = tripMainElement.querySelector(`.trip-controls`);
const tripMainMenuElement = tripControlElement.querySelector(`.visually-hidden:first-of-type`);
const tripBoardsElement = document.querySelector(`.trip-events`);

// Menu template (Table, Stats)
render(tripMainMenuElement, Object(_components_site_menu__WEBPACK_IMPORTED_MODULE_0__["createMenuTemplate"])(), `afterend`);

// Filter template (everything, future, past)
render(tripControlElement, Object(_components_filters__WEBPACK_IMPORTED_MODULE_1__["createFiltersTemplate"])());

// sort buttons (event, time, price);
render(tripBoardsElement, Object(_components_sort_trip__WEBPACK_IMPORTED_MODULE_2__["createSortTemplate"])());

// event edit or new event form
render(tripBoardsElement, Object(_components_event_edit__WEBPACK_IMPORTED_MODULE_3__["createEventEditTemplate"])(sortedTravelPoint[0]));

// trip days container
render(tripBoardsElement, Object(_components_event_point__WEBPACK_IMPORTED_MODULE_4__["createEventPointTemplate"])());

const tripsEventsListElement = tripBoardsElement.querySelector(`.trip-events__list`);

for (let i = 1; i < EVENT_COUNT; i += 1) {

  // day event list
  render(tripsEventsListElement, Object(_components_events_item__WEBPACK_IMPORTED_MODULE_5__["createEventTemplate"])(sortedTravelPoint[i]));
}

// top page info (price, points)
render(tripMainElement, Object(_components_trip_info__WEBPACK_IMPORTED_MODULE_6__["createTripInfoTemplate"])(), `afterbegin`);
const tripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);

// top trip info cost
render(tripInfoElement, Object(_components_trip_cost__WEBPACK_IMPORTED_MODULE_7__["createTripCostTemplate"])());



/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: generateTravelPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTravelPoint", function() { return generateTravelPoint; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const points = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const cities = [`Oslo`, `Stockholm`, `Los-Angeles`, `New-York`, `Boston`, `Pekin`];
const offersList = [{title: `choose meal`, price: 10}, {title: `upgrade comfort`, price: 50},
  {title: `lanch`, price: 40}, {title: `airport transfer`, price: 20}, {title: `city tour`, price: 180}];


const getRandomArrayItem = (arr)=> {
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, arr.length - 1);
  return arr[randomIndex];
};

const generateAdditionalOffer = ()=> {
  // return getRandomArrayItem(offersList);
  const noUniqueOffers = new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, offersList.length - 1))
    .fill()
    .map(() => getRandomArrayItem(offersList));
  // only unique offers return
  return [...new Set(noUniqueOffers)];
};

const generateDestination = ()=> {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  let description = ``;
  const maxCount = 5;
  let count = 0;
  const maxPhoto = 6;
  // Чтоб сгенерировалось максимум 5 предложений в массиве
  for (const item of descriptions) {
    if (count >= maxCount) {
      break;
    }
    if ((Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))) {
      description += item;
      count++;
    }
  }

  return {
    description,
    photos: Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, maxPhoto)).fill().map(() => {
      return `http://picsum.photos/248/152?r=${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 200)}`;
    })
  };
};

// Генерируем случайное время начала события
const generateStartTime = ()=> {
  const maxDaysGap = 7;
  const daysGap = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  const startTime = new Date();
  startTime.setDate(startTime.getDate() + daysGap);
  const hours = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 23);
  const minutes = 5 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 11);

  startTime.setHours(hours, minutes, 0, 0);
  return new Date(startTime);
};

// Генерируем случайное время конца события
const generateEndTime = (startTime)=> {
  const endTime = new Date(startTime);
  const day = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 2);
  const hour = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 23);
  const minutes = 5 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 11);
  endTime.setTime(startTime.getTime() + (day * 24 * 60 * 60 * 1000) + (hour * 60 * 60 * 1000) + (minutes * 60 * 1000));

  return new Date(endTime);
};

const generatePrice = ()=> {
  return 10 * (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 30));
};

const generateTravelPoint = ()=> {
  const additionalOffer = generateAdditionalOffer();
  const startTime = generateStartTime();
  return {
    price: generatePrice(),
    point: getRandomArrayItem(points),
    city: getRandomArrayItem(cities),
    additionalOffer: additionalOffer.length === 0 ? null : additionalOffer,
    description: generateDestination(),
    startTime,
    endTime: generateEndTime(startTime),
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))
  };
};




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, humanizeDate, prettyDate, getTimeBetween, diffMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeDate", function() { return humanizeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyDate", function() { return prettyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeBetween", function() { return getTimeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffMinutes", function() { return diffMinutes; });
/**
 * @description generate random integer
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getRandomInteger = (a = 0, b = 1)=> {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeDate = (date)=> {
  return date.toLocaleString(
      `en-US`, {
        day: `numeric`,
        month: `short`
      });
};

// Transform date to hours and minutes
function prettyDate(time) {
  return time.toLocaleTimeString(navigator.language, {
    hour12: false,
    hour: `2-digit`,
    minute: `2-digit`,
  });
}

const getTimeBetween = (startDate, endDate) => {
  const gap = endDate.getTime() - startDate.getTime();

  const day = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hour = Math.floor((gap / 1000 / 60 / 60) % 24);
  const minute = Math.floor((gap / 1000 / 60) % 60);

  let gapString = ``;

  if (day > 0) {
    gapString += day > 9
      ? day
      : `0` + day;
    gapString += `D `;
  }
  if (hour > 0) {
    gapString += hour > 9
      ? hour
      : `0` + hour;
    gapString += `H `;
  }
  if (minute > 0) {
    gapString += minute > 9
      ? minute
      : `0` + minute;
    gapString += `M`;
  }

  return gapString;
};


function diffMinutes(dt2, dt1) {

  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff = diff / 60;
  return Math.abs(Math.round(diff));

}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map