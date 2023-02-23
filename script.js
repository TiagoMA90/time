function clock()    {
    const dateClock = new Date();
    const hrs = dateClock.getHours();
    const min = dateClock.getMinutes();
    const sec = dateClock.getSeconds();
    const mil = dateClock.getMilliseconds();

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("miliseconds").innerHTML = mil;
}
setInterval(clock, 10);


function calendar()    {
    const dateCalendar = new Date();
    const year = dateCalendar.getFullYear();
    const month = dateCalendar.getMonth();
    const day = dateCalendar.getDate();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}
setInterval(calendar, 12);