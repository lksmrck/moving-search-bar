const input = document.querySelector(".input");
const search = document.querySelector(".search-container");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
