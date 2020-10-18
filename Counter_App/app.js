let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let num = document.querySelector('.num')
let counter = 0;

num.textContent = counter;

increase.addEventListener('click',function(){
    counter++;
    num.textContent = counter;
    if(counter > 0){
        num.style.color = "rgb(18, 97, 31)";
    }
    if (counter == 0) {
        num.style.color = "rgb(5, 5, 20)";
    }
})

decrease.addEventListener('click',function(){
    counter--;
    num.textContent = counter;
    if (counter < 0) {
        num.style.color = "#ed160e";
    }
    if (counter == 0) {
        num.style.color = "rgb(5, 5, 20)";
    }
})

reset.addEventListener('click',function(){
    counter = 0;
    num.textContent = counter;
    num.style.color = "rgb(5, 5, 20)";
})