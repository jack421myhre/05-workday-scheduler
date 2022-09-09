let saveBtn = $(".saveBtn");

function headerDate() {
    let currentDay = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay);
}
headerDate();
let currentTime = moment().format("HH");
let timeBlockHour = $(".hour").prop("id");

$(".hour").each(function () {
    let timeBlockHour = parseInt($(this).prop("id"));
    // console.log(timeBlockHour);
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

// Save data
// Work in Progress
let eventDescription = $(".description");
function saveEvent() {}

saveBtn.on("click", () => {
    if (eventDescription !== "") {
        let savedEvent = JSON.parse(localStorage.getItem("savedEvent")) || [];

        let allEvents = {
            time: $(this).siblings(".hour").prop("id"),
            eventDesc: $(this).siblings("textarea").val(),
        };

        savedEvent.push(allEvents);
        localStorage.setItem("savedEvent", JSON.stringify(savedEvent));
    }
});
