function parallax(evt) {
  this.querySelectorAll(".layer").forEach(layer => {
    let speed = layer.getAttribute('data-speed');


    layer.style.transform = `translateX(${evt.clientX*speed/1000}px)`
  });
}

document.addEventListener('mousemove', parallax);
