var today = moment().format("dddd, MMMM Do, YYYY hh:mm a");
$("#currentDay").text(today);
var now = (moment()).toString();
var today9Am = (moment('09:00', 'HH:mm')).toString();
var today10Am = (moment('10:00', 'HH:mm')).toString();
var today11Am = (moment('11:00', 'HH:mm')).toString();
var today12Pm = (moment('12:00', 'HH:mm')).toString();
var today1Pm = (moment('13:00', 'HH:mm')).toString();
var today2Pm = (moment('14:00', 'HH:mm')).toString();
var today3Pm = (moment('15:00', 'HH:mm')).toString();
var today4Pm = (moment('16:00', 'HH:mm')).toString();
var today5Pm = (moment('17:00', 'HH:mm')).toString();
var today6Pm = (moment('18:00', 'HH:mm')).toString();



// 9AM Block
if (now < today9Am) {
    $("#9amBlock").addClass("future")
}
else if ((now >= today9Am) && (now < today10Am)) {
    $("#9amBlock").addClass("present")
}
else if (now >= today10Am) {
    $("#9amBlock").addClass("past")
};

// 10AM Block
if (now < today10Am) {
    $("#10amBlock").addClass("future")
}
else if ((now >= today10Am) && (now < today11Am)) {
    $("#10amBlock").addClass("present")
}
else if (now >= today11Am) {
    $("#10amBlock").addClass("past")
};

// 11AM Block
if (now < today11Am) {
    $("#11amBlock").addClass("future")
}
else if ((now >= today11Am) && (now < today12Pm)) {
    $("#11amBlock").addClass("present")
}
else if (now >= today12Pm) {
    $("#11amBlock").addClass("past")
};

// 12PM Block
if (now < today12Pm) {
    $("#12pmBlock").addClass("future")
}
else if ((now >= today12Pm) && (now < today1Pm)) {
    $("#12pmBlock").addClass("present")
}
else if (now >= today1Pm) {
    $("#12pmBlock").addClass("past")
};

// 1PM Block
if (now < today1Pm) {
    $("#1pmBlock").addClass("future")
}
else if ((now >= today1Pm) && (now < today2Pm)) {
    $("#1pmBlock").addClass("present")
}
else if (now >= today2Pm) {
    $("#1pmBlock").addClass("past")
};

// 2PM Block
if (now < today2Pm) {
    $("#2pmBlock").addClass("future")
}
else if ((now >= today2Pm) && (now < today3Pm)) {
    $("#2pmBlock").addClass("present")
}
else if (now >= today3Pm) {
    $("#2pmBlock").addClass("past")
};

// 3PM Block
if (now < today3Pm) {
    $("#3pmBlock").addClass("future")
}
else if ((now >= today3Pm) && (now < today4Pm)) {
    $("#3pmBlock").addClass("present")
}
else if (now >= today4Pm) {
    $("#3pmBlock").addClass("past")
};

// 4PM Block
if (now < today4Pm) {
    $("#4pmBlock").addClass("future")
}
else if ((now >= today4Pm) && (now < today5Pm)) {
    $("#4pmBlock").addClass("present")
}
else if (now >= today5Pm) {
    $("#4pmBlock").addClass("past")
};

// 5PM Block
if (now < today5Pm) {
    $("#5pmBlock").addClass("future")
}
else if ((now >= today5Pm) && (now < today6Pm)) {
    $("#5pmBlock").addClass("present")
}
else if (now >= today6Pm) {
    $("#5pmBlock").addClass("past")
};

// 9AM EVENT
var eventRetrieved9Am = localStorage.getItem("9AmEventAdded");
$("#9amBlock").text(eventRetrieved9Am);

$(".Button9Am").on("click", function (event) {

    var eventAdded9Am = $("#9amBlock").text();
    localStorage.setItem("9AmEventAdded", (eventAdded9Am));
});

// 10AM EVENT
var eventRetrieved10Am = localStorage.getItem("10AmEventAdded");
$("#10amBlock").text(eventRetrieved10Am);

$(".Button10Am").on("click", function (event) {

    var eventAdded10Am = $("#10amBlock").text();
    localStorage.setItem("10AmEventAdded", (eventAdded10Am));
});

// 11AM EVENT
var eventRetrieved11Am = localStorage.getItem("11AmEventAdded");
$("#11amBlock").text(eventRetrieved11Am);

$(".Button11Am").on("click", function (event) {

    var eventAdded11Am = $("#11amBlock").text();
    localStorage.setItem("11AmEventAdded", (eventAdded11Am));
});

// 12PM EVENT
var eventRetrieved12Pm = localStorage.getItem("12PmEventAdded");
$("#12pmBlock").text(eventRetrieved12Pm);

$(".Button12Pm").on("click", function (event) {

    var eventAdded12Pm = $("#12pmBlock").text();
    localStorage.setItem("12PmEventAdded", (eventAdded12Pm));
});

// 1PM EVENT
var eventRetrieved1Pm = localStorage.getItem("1PmEventAdded");
$("#1pmBlock").text(eventRetrieved1Pm);

$(".Button1Pm").on("click", function (event) {

    var eventAdded1Pm = $("#1pmBlock").text();
    localStorage.setItem("1PmEventAdded", (eventAdded1Pm));
});

// 2PM EVENT
var eventRetrieved2Pm = localStorage.getItem("2PmEventAdded");
$("#2pmBlock").text(eventRetrieved2Pm);

$(".Button2Pm").on("click", function (event) {

    var eventAdded2Pm = $("#2pmBlock").text();
    localStorage.setItem("2PmEventAdded", (eventAdded2Pm));
});

// 3PM EVENT
var eventRetrieved3Pm = localStorage.getItem("3PmEventAdded");
$("#3pmBlock").text(eventRetrieved3Pm);

$(".Button3Pm").on("click", function (event) {

    var eventAdded3Pm = $("#3pmBlock").text();
    localStorage.setItem("3PmEventAdded", (eventAdded3Pm));
});
// 4PM EVENT
var eventRetrieved4Pm = localStorage.getItem("4PmEventAdded");
$("#4pmBlock").text(eventRetrieved4Pm);

$(".Button4Pm").on("click", function (event) {

    var eventAdded4Pm = $("#4pmBlock").text();
    localStorage.setItem("4PmEventAdded", (eventAdded4Pm));
});

// 5PM EVENT
var eventRetrieved5Pm = localStorage.getItem("5PmEventAdded");
$("#5pmBlock").text(eventRetrieved5Pm);

$(".Button5Pm").on("click", function (event) {

    var eventAdded5Pm = $("#5pmBlock").text();
    localStorage.setItem("5PmEventAdded", (eventAdded5Pm));
});