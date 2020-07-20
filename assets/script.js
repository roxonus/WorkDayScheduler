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
