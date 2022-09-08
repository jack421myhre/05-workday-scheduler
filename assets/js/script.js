function headerDate() {
    let currentDay = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay);
}

headerDate();
