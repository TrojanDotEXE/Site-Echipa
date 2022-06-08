const toggleButton = document.getElementsByClassName('toggle-button')[0];
const header       = document.querySelector(".header");
const navLinks     = document.getElementsByClassName("nav-links")[0];
let   navHeight    = header.clientHeight;

document.documentElement.style.setProperty("--nav-height", -navHeight + "px");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
  lastScrollY = window.scrollY;
});

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})