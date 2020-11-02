let projects = document.querySelectorAll(".project__item");
let toggle_btn = document.querySelector(".load");

window.onload = function () {
  for (let i = 0; i < 6; i++) {
    projects[i].style.display = "block";
  }
};

toggle_btn.addEventListener("click", showMore);

function showMore() {
    if(projects[6].style.display == "none"){
        for(let i = 5; i < projects.length; i++){
            projects[i].style.display = "block";
        }
    }
    else{
        for(let i = 5; i < projects.length; i++){
            projects[i].style.display = "none";
        }
    }
    
}


