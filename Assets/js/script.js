$(document).ready(function() {
    var todayDate = moment().format('MMMM Do YYYY');
    console.log(todayDate);

    var currentTime = moment().format('H');
    console.log(currentTime)

    var currentTime = $(this).attr("data-hour");
    console.log(hour)

    var timeBlocks = $(".input-block");
    console.log(timeBlocks)
    console.log(timeBlocks.length);

    // currentTime = currentTime - 9;

    for(var i=0; i < timeBlocks.length; i++) {
        if (i === currentTime) {
            timeBlocks[i].attr("class", "present");
        } 
        else if (i < currentTime) {
            timeBlocks[i].attr("class", "present");
        } else {
            timeBlocks[i].attr("class", "future");
        }    
    }
});

