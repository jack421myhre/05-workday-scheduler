let saveBtn = $(".saveBtn");
// Keeps the jumbotron date up to date using moment.js
function headerDate() {
    let currentDay = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay);
}
headerDate();

let currentTime = moment().format("HH");
$(".hour").each(function () {
    // Grabs the id number from each time block and parses and int from it.
    let timeBlockHour = parseInt($(this).prop("id"));
    // Checks current time against each time block and applies the color classes accordingly, removing older ones.
    if (timeBlockHour < currentTime) {
        $(this).siblings("textarea").addClass("past");
        $(this).siblings("textarea").removeClass("present");
    } else if (timeBlockHour > currentTime) {
        $(this).siblings("textarea").addClass("future");
        $(this).siblings("textarea").removeClass("past");
    } else {
        $(this).siblings("textarea").addClass("present");
        $(this).siblings("textarea").removeClass("future");
    }
});

// Loads the saved tasks in each time block respectively.
$(".time-block").each(function () {
    time = $(this).children(".hour").prop("id");
    let setEvent = window.localStorage.getItem(time);
    $(this).children("textarea").text(setEvent);
});

// Saves the tasks to local storage for each time block.
saveBtn.on("click", () => {
    $(".time-block").each(function () {
        time = $(this).children(".hour").prop("id");
        eventDesc = $(this).children("textarea").val();

        window.localStorage.setItem(time, eventDesc);
    });
});
