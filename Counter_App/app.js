let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let num = document.querySelector('.num')
let counter = 0;

num.textContent = counter;

increase.addEventListener('click',function(){
    counter++;
    num.textContent = counter;
})

decrease.addEventListener('click',function(){
    counter--;
    num.textContent = counter;
})

reset.addEventListener('click',function(){
    counter = 0;
    num.textContent = counter;
})