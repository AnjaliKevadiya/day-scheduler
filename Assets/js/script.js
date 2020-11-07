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

        //Fetch existing record if user already entered something for that time 
        var taskExists = allTasks.find((t) => t.time === hour);

        //if yes update the existing one
        if(taskExists) {
            taskExists.description = inputValue;
        } 
        //else add new task
        else {
            var newTask = {
                'time': hour,
                'description': inputValue
            };  
            //push new task to taskObject  
            allTasks.push(newTask);
        }

        //push all the tasks to the local storage
        localStorage.setItem("taskObject", JSON.stringify(allTasks));
    });

    //display all the task description if user already added before
    //loop over all the task
    allTasks.forEach(task => {

        //sarch by the atribute name (div[data-hour=" + task.time +"])
        //.next will get the next element 
        //and set the value we get it from local storage
        $("div[data-hour=" + task.time +"]").next().val(task.description);
    });
});

