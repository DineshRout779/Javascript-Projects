const toggle = document.getElementById("toggle");
let body_bgc = document.body;
let header_bgc = document.querySelector("header");
let social_bgc = document.querySelectorAll(".social-stat-item");
let item_bgc = document.querySelectorAll(".item");
let num_color = document.querySelectorAll(".followers span");

toggle.addEventListener("input", function (e) {
  const isChecked = e.target.checked;

  if (isChecked) {
    for (let i = 0; i < social_bgc.length; i++) {
      social_bgc[i].classList.add("dark-theme");
    }
    for (let i = 0; i < item_bgc.length; i++) {
      item_bgc[i].classList.add("dark-theme");
    }
    for (let i = 0; i < num_color.length; i++) {
      num_color[i].classList.add("dark-theme");
    }
    header_bgc.classList.add("dark-theme");
    body_bgc.classList.add("dark-theme");
  } else {
    for (let i = 0; i < social_bgc.length; i++) {
      social_bgc[i].classList.remove("dark-theme");
    }
    for (let i = 0; i < item_bgc.length; i++) {
      item_bgc[i].classList.remove("dark-theme");
    }
    for (let i = 0; i < num_color.length; i++) {
      num_color[i].classList.remove("dark-theme");
    }
    header_bgc.classList.remove("dark-theme");
    body_bgc.classList.remove("dark-theme");
  }
});
