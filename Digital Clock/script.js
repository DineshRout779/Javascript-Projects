let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getMilliseconds();
let session = "AM";
let clock = document.querySelector(".clock");

function showTime(){

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h -= 12;
        session = "PM";
    }

    
}