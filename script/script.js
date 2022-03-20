let openMobileMenu = document.querySelector(".open-mobile");
let header = document.querySelector(".header");

openMobileMenu.onclick = function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
};

let list = document.querySelectorAll(".link__btn");
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("select");
    e.preventDefault();
  });
});
