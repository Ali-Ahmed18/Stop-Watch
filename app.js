var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mSec = document.getElementById("mSec");
var interval;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;

function playInterval() {
  milliSeconds++;
  mSec.innerHTML = milliSeconds;
  if(milliSeconds > 0 && milliSeconds < 10){
    mSec.innerHTML = "0"+milliSeconds
  }else{
    mSec.innerHTML = milliSeconds;
  }
  if (milliSeconds == 100) {
    milliSeconds = 0;
    seconds++;
    
    if(seconds > 0 && seconds < 10){
      sec.innerHTML = "0"+seconds
    }else{
      sec.innerHTML = seconds;
    }
  } else if (seconds == 60) {
    seconds = 0;
    minutes++;
   
    if(minutes > 0 && minutes < 10){
      min.innerHTML = "0"+minutes
    }else{
      min.innerHTML = minutes;
    }
  }
}

function play(element) {
  element.innerHTML = "<i class='fa-solid fa-pause'></i>";
  element.setAttribute("onclick", "stop(this)");

  element.className = "clr"
  interval = setInterval(playInterval, 10);
}
function stop(element) {
  element.innerHTML = "<i class='fa-solid fa-play'></i>";
  element.setAttribute("onclick", "play(this)");
  element.className = ""
  clearInterval(interval);
}
function reset(element) {
  clearInterval(interval);
  var btn = element.previousElementSibling
  btn.setAttribute("onclick", "play(this)");
  btn.className = ""
  btn.innerHTML = "<i class='fa-solid fa-play'></i>"
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  min.innerHTML = "00"
  sec.innerHTML = "00"
  mSec.innerHTML = "00"
}
