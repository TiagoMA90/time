// Clock Function
function clock()    {
    const time = new Date();
    const hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const mil = time.getMilliseconds();
    let phase = document.getElementById('phase');

    if (hrs >= 6 && hrs <= 10) {
        phase.innerHTML = "🌤";
    } else if (hrs >= 10 && hrs <= 18) {
        phase.innerHTML = "☀";
    } else if (hrs >= 18 && hrs <= 21) {
        phase.innerHTML = "☁︎";
    } else if (hrs >= 21 && hrs <= 1) {
        phase.innerHTML = "☾";
    } else {
        phase.innerHTML = "☽";
    }


    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("miliseconds").innerHTML = mil;
}
setInterval(clock, 10);

// Calendar Function
function calendar()    {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}
setInterval(calendar, 11);