var start = document.getElementById("start");
var reset = document.getElementById("reset");
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    // because everything is initially set to zero, nothing happens at this condition
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    //seconds must be decrease
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    //seconds must start from 59 sec & minutes must be decrease
    s.value = 59;
    m.value--;
  } else if (h.value !== 0 && m.value == 0 && s.value == 0) {
    //minutes must start with 60 min & hours --;
    m.value = 60;
    h.value--;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

//start button
start.addEventListener("click", function () {
  //initialize the variable startTimer
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});

//reset button
reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopTimer();
});
