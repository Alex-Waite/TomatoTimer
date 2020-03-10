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

// To switch between working mode and resting mode
var workingMode = true;



function initiateTimer() {

  // In work mode we take work time
  if (workingMode === true){
    totalSeconds = 60*(parseInt(workMinutesInput.value));
  } else {
    // In rest mode we take rest time
    totalSeconds = 60*(parseInt(restMinutesInput.value));
  }
 
  interval = 0;

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
 
  interval = setInterval(function() {
    totalSeconds--;
    console.log(totalSeconds);
    
    // need to check <= 0, === 0 is not enough
    if(totalSeconds <= 0) {
      // stop the timer
      clearInterval(interval);
      // show the alert
      if ( workingMode === true) {
        alert("Time for a break!");
        
      } else {
        alert("Time to get back to work!");
        
      }
    } else {
    //display only when total seconds > 0
    displayTime();
      
    }

    

  }, 1000);
}

//function to clear timer interval and toggle status

function pauseTimer(){
  clearInterval(interval);
}

//function to clear timer interval reset the timer and toggle status

function stopTimer(){
  clearInterval(interval);
  totalSeconds = 0;

  // Reads the values and sets totalSeconds
  initiateTimer();
  displayTime();
}
 
function switchMode() {

 // Check if toggle is checked
 if (statusToggle.checked) {

  workingMode = true;
  statusSpan.innerHTML = "Working";

  //stop the timer, clear total seconds
  clearInterval(interval); 
  totalSeconds = 0;

  // Reads the values and sets totalSeconds again
  initiateTimer();
  displayTime();

} else {
  // we are in rest mode
  workingMode = false;
  statusSpan.innerHTML = "Rest";

   //stop the timer
   clearInterval(interval); 
   totalSeconds = 0;

   // Reads the values and sets totalSeconds
   initiateTimer();
   displayTime();
 
}

console.log(statusToggle.checked);


}

// =====================

// Reads the values and sets totalSeconds
initiateTimer();
displayTime();

playButton.addEventListener("click",startTimer);
pauseButton.addEventListener("click",pauseTimer);
stopButton.addEventListener("click",stopTimer);
statusToggle.addEventListener("click",switchMode);