const toggleButton = document.querySelector('.toggle-btn');
const siteNavigation = document.querySelector('.main-nav');
const openMenu = () => {
  toggleButton.classList.toggle('toggle-btn--click');
  siteNavigation.classList.toggle('main-nav--opened');
};
toggleButton.addEventListener('click', openMenu);

// Filter
const projectCard = document.querySelectorAll('.project-card');
const filterButton = document.querySelectorAll('.projects__filter-button');
const filter = document.querySelector('.projects__filter');

filter.addEventListener('click', (evt) => {
  let target = evt.target;
  if (target.type === 'radio') {
    choiceBlocks(target.value, projectCard);
  }

});

const choiceBlocks = (value, cards) => {
  cards.forEach((card) => {
    if (card.dataset.category !== value) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });
};
//
// filterButton.forEach((button) => {
//   button.addEventListener('click', choiceBlocks(button.value, projectCard));
// });
