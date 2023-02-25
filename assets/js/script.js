// Clock Function
function clock()    {
    const hrs = String(new Date().getHours()).padStart(2, '0');
    const min = String(new Date().getMinutes()).padStart(2, '0');
    const sec = String(new Date().getSeconds()).padStart(2, '0');
    //const mil = String(new Date().getMilliseconds()).padStart(3, '0');
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