// Clock Function
function clock()    {
    const hrs = String(new Date().getHours()).padStart(2, '0');
    const min = String(new Date().getMinutes()).padStart(2, '0');
    const sec = String(new Date().getSeconds()).padStart(2, '0');
    const mil = String(new Date().getMilliseconds()).padStart(3, '0');
    let phase = document.getElementById('phase');

    // Phases of the Day
    if (hrs >= 8 && hrs <= 18) {
        phase.innerHTML = "<i class='bi bi-brightness-high'></i>";
    } else if (hrs >= 18 && hrs <= 20) {
        phase.innerHTML = "<i class='bi bi-sunset'></i>";
    } else if (hrs >= 20 && hrs <= 24) {
        phase.innerHTML = "<i class='fa-regular fa-moon'></i>";
    } else if (hrs >= 1 && hrs <= 6) {
        phase.innerHTML = "<i class='fa-regular fa-star'></i>"
    } else if (hrs >= 6 && hrs <= 8) {
        phase.innerHTML = "<i class='bi bi-sunrise'></i>";
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