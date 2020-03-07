var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


function initiateTimer() {

  totalSeconds = 60*(parseInt(workMinutesInput.value) + parseInt(restMinutesInput.value));
  interval =0;
  console.log(totalSeconds);

}

function displayTime() {

  // get minutes
  actualMinutes = Math.floor(totalSeconds/60);

  // get seconds
  actualSeconds = totalSeconds - (actualMinutes * 60);

  // print
  minutesDisplay.textContent = actualMinutes;
  secondsDisplay.textContent = actualSeconds;

}


function setTime() {
  var timerInterval = setInterval(function() {
    totalSeconds--;
    console.log(totalSeconds);
    //display
    displayTime();
    
    if(totalSeconds === 0) {
      clearInterval(timerInterval);
      alert("time finished");
    }
  }, 1000);
}

function startTimer() {
  // Write code to start the timer here
}
 

// =====================

initiateTimer();
setTime();
playButton.addEventListener("click", startTimer);
