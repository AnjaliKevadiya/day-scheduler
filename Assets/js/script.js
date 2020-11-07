$(document).ready(function() {
    var todayDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(todayDate);

    var currentTime = moment().format('H');

    $(".input-block").each(function() {
        var hour = parseInt($(this).prev().attr("data-hour"));
        console.log(hour);
        console.log(currentTime);

        if (hour === currentTime) {
            $(this).addClass("present");
        } else if (hour < currentTime) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }    
    });
});

