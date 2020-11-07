$(document).ready(function() {

    //Get current date and formated it
    var todayDate = moment().format('dddd, MMMM Do');

    //Grab the #currentDay and set it's content to current date 
    $("#currentDay").text(todayDate);

    //Get current time
    var currentTime = moment().format('H');

    //Grab task object from the local storage
    var allTasks = JSON.parse(localStorage.getItem("taskObject")) || [];

    //Iterates over all the .input-block to set class
    $(".input-block").each(function() {
        var hour = parseInt($(this).prev().attr("data-hour"));

        if (hour === currentTime) {
            $(this).addClass("present");
        } else if (hour < currentTime) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }    
    });

    //Save task on save button click
    $(".btn-save").on("click", function() {

        var hour = $(this).prev().prev().attr("data-hour");
        var inputValue = $(this).prev().val().trim();

        if(inputValue === "") {
            return;
        }

        var newTask = {
            'time': hour,
            'description': inputValue
        };  
        allTasks.push(newTask);

        localStorage.setItem("taskObject", JSON.stringify(allTasks));
    });
});

