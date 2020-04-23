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

