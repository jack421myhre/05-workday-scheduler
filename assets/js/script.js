let saveBtn = $(".saveBtn");

function headerDate() {
    let currentDay = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay);
}
headerDate();
let currentTime = moment().format("HH");

let wrapperParent = $(".wrapper");
// for (let i = 0; i < wrapperParent.children().length; i++) {
//     let hour = $(`#`);
//     console.log(hour);

//     if (hour.text() < currentTime) {
//         console.log("past");
//     }
// }

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
