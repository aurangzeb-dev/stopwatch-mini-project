let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// Function to update the stopwatch time
function updateTime() {
    milliseconds += 10; // it increases the milisecond element every 10 milisecond for better readablity
    
    if (milliseconds === 1000) { // it just increses the second element every 1000 milisecond becouse a thousand milis are 1 seconds
        milliseconds = 0;
        seconds++;
    }
    
    if (seconds === 60) { // it just increses the minutes element every 60 seconds
        seconds = 0;
        minutes++;
    }
    
    if (minutes === 60) { // it just increses the houre element every 60 minutes
        minutes = 0;
        hours++;
    }

    // Format the time with leading zeros
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    let displayMilliseconds = milliseconds < 100 ? `0${milliseconds}` : milliseconds;

    // it just takes the time variable and out them in the h element in the html 
    document.getElementById("time").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

// Function to start the stopwatch
function startStopwatch() {
    interval = setInterval(updateTime, 10); // it just starts the stop and 
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(interval); 
    interval = null // if your dumb ass doesnt understand then let me explain it just sets the timer to null or you can say zero 
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(interval); // Stop the interval
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("time").textContent = "00:00:00:000"; // Reset display
}

// eventlistners to asign the functions to the buttons uwu
document.getElementById("startbtn").addEventListener("click", startStopwatch);
document.getElementById("stopbtn").addEventListener("click", stopStopwatch);
document.getElementById("resetbtn").addEventListener("click", resetStopwatch);
