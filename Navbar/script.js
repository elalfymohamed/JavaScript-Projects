const btnElm = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

btnElm.addEventListener("click", () => {
  links.classList.toggle("show-links");
  btnElm.classList.toggle("times");
});
