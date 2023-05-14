var hackathonEndTime = new Date("2023-06-01T12:00:00Z");

// Update the counter every second
setInterval(function() {
    // Calculate the remaining time
    var remainingTime = hackathonEndTime - new Date();

    // Calculate the days, hours, minutes, and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the counter text
    var counterText = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    document.getElementById("counter").innerHTML = counterText;
}, 1000); // 1000 milliseconds = 1 second


