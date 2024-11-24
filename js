let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let restartbtn = document.querySelector("#restart");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startbtn.addEventListener("click", function() {
    if (!timer) {
        timer = true;
        stopwatch();
    }
});

stopbtn.addEventListener("click", function() {
    timer = false;
});

restartbtn.addEventListener("click", function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerText = "00";
});

function stopwatch() {
    if (timer) {
        count++;
    }

    if (count === 100) {
        second++;
        count = 0;
    }

    if (second === 60) {
        minute++;
        second = 0;
    }

    if (minute === 60) {
        hour++;
        minute = 0;
        second = 0;
    }

    document.getElementById('hr').innerHTML = formatTime(hour);
    document.getElementById('min').innerHTML = formatTime(minute);
    document.getElementById('sec').innerHTML = formatTime(second);
    document.getElementById('count').innerText = formatTime(count);

    if (timer) {
        setTimeout(stopwatch, 10);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
