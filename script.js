function clock()    {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var mil = dateTime.getMilliseconds();

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("miliseconds").innerHTML = mil;
}
setInterval(clock, 10);

function calendar() {
    var dateTime = new Date();
    var year = dateTime.getYear();
    var month = dateTime.getMonth();
    var day = dateTime.getDay();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}
setInterval(calendar, 10);