var btnSearch = document.querySelector(".search-box__btn");
// var searchBox = document.querySelector(".search-box");

btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open"); //lấy element cha của elm hiện tại
  this.previousElementSibling.focus(); //lấy elm trước/sau cua rphaanf tử hiện tại
});
