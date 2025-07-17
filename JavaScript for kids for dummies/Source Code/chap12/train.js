// Initial speed of the train in milliseconds (lower is faster)
var trainSpeed = 250;

// Initial position of the train (in pixels)
var trainPosition = 0;

// Variable to hold the animation interval
var animation;

// Get the train element from the DOM
var train = document.getElementById("train");

// Attach click event to the train to speed it up when clicked
train.addEventListener("click", speedUp);

// Get the stop button element
var stopButton = document.getElementById("stopButton");

// Attach click event to the stop button to stop the train
stopButton.addEventListener("click", stopTrain);

// Function to increase train speed when clicked
function speedUp() {
    // Decrease speed only if above minimum speed
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    // Clear any existing animation before starting a new one
    clearInterval(animation);

    // Set a new interval for the train movement
    animation = setInterval(frame, trainSpeed);

    // This function moves the train forward
    function frame() {
        trainPosition += 2; // move train 2px to the right
        train.style.left = trainPosition + 'px'; // update train's position
        console.log(trainPosition);

        // Check if train has reached position 600 (crash point)
        checkPosition(trainPosition);
    }
}

// Function to check if train reached crash point
function checkPosition(currentPosition) {
    if (currentPosition === 600) {
        alert("OOOOO!");           // Show crash alert
        console.log("Crash!");     // Log the crash
        clearInterval(animation);  // Stop the animation
    }
}

// Function to stop the train using the stop button
function stopTrain() {
    // Only stop if the train hasn’t crashed yet
    if (trainPosition < 600) {
        clearInterval(animation); // Stop animation
    }
}
