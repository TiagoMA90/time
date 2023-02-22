function clock()    {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const mil = dateTime.getMilliseconds();

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("miliseconds").innerHTML = mil;
}
setInterval(clock, 10);

// Create a day/month/year