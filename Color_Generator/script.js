let bgc = document.querySelector(".color");
let color_name = document.querySelector(".hex");
let next = document.querySelector(".next");
let copy = document.querySelector(".copy");

window.onload = function(){
    let random = Math.floor(Math.random() * arr.length);
    document.body.style.backgroundColor = arr[random].bgcolor;
    color_name.innerText =arr[random].bgcolor;
}

next.addEventListener("click", function (e) {
    e.preventDefault();
    let random = Math.floor(Math.random() * arr.length);
    document.body.style.backgroundColor = arr[random].bgcolor;
    color_name.innerText =arr[random].bgcolor;
})

copy.addEventListener("click",function(){
    let copy_text = color_name.innerText;
    let myData = document.createElement("textarea");
    document.body.appendChild(myData);
    myData.value = copy_text;
    myData.select();
    document.execCommand("copy");
    document.body.removeChild(myData);
    alert("copied!");
})

