const hackathonEndTime: Date = new Date("2023-06-01T12:00:00Z");

// Update the counter every second
setInterval(() => {
    // Calculate the remaining time
    const remainingTime: number = hackathonEndTime.getTime() - new Date().getTime();

    // Calculate the days, hours, minutes, and seconds
    const days: number = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the counter text
    const counterText: string = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById("counter").innerHTML = counterText;
}, 1000); // 1000 milliseconds = 1 second
