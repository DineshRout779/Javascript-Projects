const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  agenda = document.getElementById("agenda");

//show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //add 0
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${amPm}`;
  setTimeout(showTime, 1000);
}

function setBg() {
  let today = new Date(),
    hour = today.getHours();

  if (hour > 0 && hour <= 12) {
    //   morning
    document.body.style.backgroundImage = "url(./images/morning.jpeg)";
    greeting.textContent = "Good Morning";
  }
  if (hour > 12 && hour < 18) {
    //   afternoon
    document.body.style.backgroundImage = "url(./images/afternoon.jpeg)";
    greeting.textContent = "Good Afternoon";
  } else {
    //   night
    document.body.style.backgroundImage = "url(./images/night.jpeg)";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

setBg();
showTime();
