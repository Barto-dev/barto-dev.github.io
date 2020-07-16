/*
  Scroll
*/
(function () {
  const scrollButton = document.querySelector('.promo__scroll-btn');
  const projects = document.querySelector('.projects');
  const scrollToProjects = () => projects.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
  scrollButton.addEventListener('click', scrollToProjects);
}());
