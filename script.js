//jshint esversion: 6

/*
Author: Anthony Noel
-This page tracks how long you have been on it

Future Development
-Show the start time on the page to the left + show the end time on the page to the right
-There is a bug where it'll just keep collecting everything in mins and
 nothing in hours because seconds never gets up to enough to an hour without minute taking it.
 To fix this instead of having seconds convert for hrs, make mins do it
*/


const elapsedTimeElement = document.querySelector("h2");
let startTime;
console.log(elapsedTimeElement);


//When the page first initiallizes im gonna start a timer
//Then every second I'm going to call update time which is going to create a new time element and subtract it from that
//initial value to give the time in miliseconds
//after that i will convert it to seconds and then mins, and then hours

const initPage = () => {
  startTime = Date.now();
  console.log(startTime);
};


const updateTimeElement = (hours, mins, secs) => {
  //Pass a temperate literal with the variables to the h2 element used to hold the elapsed time
    elapsedTimeElement.textContent = `${hours} : ${mins} : ${secs}`;

};

const getElapsedTime = () => {
  //Get the current time
  const timeNow = Date.now();
  //Take away the end time from the  start time to get the elapsed time converted to seconds
  let elapsedTimeSecs = (timeNow-startTime)/1000;
  console.log("Total time in Secs: "+elapsedTimeSecs);



  //Take out the amount for minutes converted to a single digit
  let elapsedMins = Math.floor(elapsedTimeSecs / 60);
  elapsedTimeSecs %= 60;
  console.log("Mins: "+ elapsedMins);
  console.log("New Seconds: "+elapsedTimeSecs);

  //Take out the amount for hours converted to a single digit
  let elapsedHours = Math.floor(elapsedMins / 60);
  elapsedMins %= 60;
  console.log("Hours: "+elapsedHours);
  console.log("New seconds: "+elapsedTimeSecs);

  //Round the seconds to a whole number
  elapsedTimeSecs = Math.floor(elapsedTimeSecs);

  //Update the element used to show the time to the user
  updateTimeElement(elapsedHours,elapsedMins,elapsedTimeSecs);
};




initPage();

setInterval(getElapsedTime, 1000);
