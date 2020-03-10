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

//function to start/restart timer and toggle he status

function startTimer() {
  statusToggle = true;
  console.log(statusToggle);

  interval = setInterval(function() {
    totalSeconds--;
    console.log(totalSeconds);
    //display
    displayTime();
    
    if(totalSeconds === 0) {
      clearInterval(interval);
      alert("time finished");
    }
  }, 1000);
}

//function to clear timer interval and toggle status

function pauseTimer(){
  clearInterval(interval);
  statusToggle = false;
  console.log(statusToggle);
}

//function to clear timer interval reset the timer and toggle status

function stopTimer(){
  clearInterval(interval);
  totalSeconds = 59;
  displayTime();
  counterStatus = false;
  console.log(counterStatus);
}
 

// =====================

initiateTimer();

playButton.addEventListener("click",startTimer);
pauseButton.addEventListener("click",pauseTimer);
stopButton.addEventListener("click",stopTimer);
