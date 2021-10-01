////////HEADER RESPONSIVE NAVBAR

const links = document.querySelectorAll("nav ul li a");
const icon = document.getElementById("icon");
const navShow = document.querySelector("nav ul");

links.forEach((link) => {
  link.addEventListener("click", function () {
    removeClass();

    link.classList.add("active");
  });
});

function removeClass() {
  links.forEach((cur) => {
    cur.classList.remove("active");
  });
}

icon.addEventListener("click", function () {
  navShow.classList.toggle("show");
});

/////sticky navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 400);
});
