import {createMenuTemplate} from './components/site-menu';
import {createFiltersTemplate} from './components/filters';
import {createSortTemplate} from './components/sort-trip';
import {createEventEditTemplate} from './components/event-edit';
import {createEventPointTemplate} from './components/event-point';
import {createEventTemplate} from './components/events-item';
import {createTripInfoTemplate} from './components/trip-info';
import {createTripCostTemplate} from './components/trip-cost';

const EVENT_COUNT = 3;

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

render(tripMainMenuElement, createMenuTemplate(), `afterend`);
render(tripControlElement, createFiltersTemplate());
render(tripBoardsElement, createSortTemplate());
render(tripBoardsElement, createEventEditTemplate());
render(tripBoardsElement, createEventPointTemplate());

const tripsEventsListElement = tripBoardsElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENT_COUNT; i += 1) {
  render(tripsEventsListElement, createEventTemplate());
}
render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
const tripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripInfoElement, createTripCostTemplate());

