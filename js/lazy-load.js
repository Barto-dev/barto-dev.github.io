/*
  Lazy-load
 */
(function () {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 300,
  });
  lazyLoadInstance.update();
}());
