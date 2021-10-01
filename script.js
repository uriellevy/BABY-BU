////////HEADER RESPONSIVE NAVBAR///////

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

///////////////////GALLERY////////////////
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => {
  img.addEventListener("click", imgClick);
});

function imgClick(e) {
  //reset all imgs opacity
  imgs.forEach((img) => {
    img.style.opacity = 1;
  });
  //change img to src img
  current.src = e.target.src;

  //add fadeIn class
  current.classList.add("fade-in");
  //remove fadein class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);
  //change opacity
  e.target.style.opacity = opacity;
}
