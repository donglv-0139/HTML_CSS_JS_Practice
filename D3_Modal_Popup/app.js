var modal = document.querySelector(".modal");
var btnOpen = document.querySelector(".open-modal-btn");
var btnClose = document.querySelector(".close-modal-btn");
var iconClose = document.querySelector(".modal__header");

function toggleModal() {
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
