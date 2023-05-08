// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMM D, YYYY'));

var timeBlock = [];
var currentHour = dayjs().hour();
console.log("actual hour", currentHour); 

// const currentHourBlock = currentBlock.find(currentBlock => currentBlock === currentHour);
// console.log(currentHourBlock);
displayTask()

for (let i = 9; i <= 17; i++) {
  const divId = `hour-${i}`;
  const hourDiv = document.getElementById(divId);
  if (hourDiv) {
    const hourText = hourDiv.querySelector('.hour').textContent;
    const hour = parseInt(hourText);
    timeBlock.push(hour);
  }
  if (i === currentHour) {
    $("#hour-"+i).addClass("present");
  } else if (i < currentHour){
    $("#hour-"+i).addClass("past");
  } else if (i > currentHour){
    $("#hour-"+i).addClass("future");
  }

}
console.log(timeBlock);

$(document).ready(function () {
  var saveButton = $(".saveBtn");
  saveButton.on("click", function() {
    console.log(this)
    var task = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");
    localStorage.setItem(taskTime, task);
  }); 
  }); 
  
function displayTask() {
    for (var i = 9; i <= 17; i++) {
      $("#hour-"+i + " .description").val(localStorage.getItem("hour-"+i));
    }
  }

/*
Trying to select the DIV
divID.forEach(divID => {
  const numberPart = divID.slice(1); // or hour.substring(5)
  console.log(numberPart); // outputs "9", "10", "11", and so on
});
for (let i = 0; i < timeBlock.length; i++) {
  if (timeBlock === currentHour) {
    divId.className = "present";
  }
}*/

      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.