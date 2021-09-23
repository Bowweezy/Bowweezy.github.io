//Navigation Bar for Mobile Response
const nav = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".navbar-menu");

nav.addEventListener("click", function () {
  nav.classList.toggle("is-active");
  navLinks.classList.toggle("active");
});

//display each word in an array of words one by one
let wordArray = [`Coder`, `Father`, `Husband`];
