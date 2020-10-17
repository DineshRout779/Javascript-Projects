let open_btn = document.querySelector('.menu');
let close_btn = document.querySelector('.close');
let sidebar = document.querySelector('.sidebar');

open_btn.addEventListener("click",function (e) { 
    e.preventDefault();
    if(sidebar.style.left == "-100%"){
        sidebar.style.left = "0";
    }
    else{
        sidebar.style.left = "-100%"
    }
 })

 close_btn.addEventListener("click",function (e) { 
    e.preventDefault();
    sidebar.style.left = "-100%";
 })

