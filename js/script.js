const nav = document.querySelector(".header");
let navHeight = nav.clientHeight;

document.documentElement.style.setProperty("--nav-height", -navHeight + "px");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("header--hidden");
  } else {
    nav.classList.remove("header--hidden");
  }
  lastScrollY = window.scrollY;
});
