// //Listing 17.1
// for (var i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!");

// //Listing 17.2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// }

// //Listing 17.3
// alert(Math.random());

// //Listing 17.4
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//Listing 17.5
// Array of weekdays for the forecast
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Array of possible weather conditions
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Set temperature range
var maxTemp = 100; // Maximum temperature
var minTemp = 0;   // Minimum temperature

// Call the function to generate the weather forecast
generateWeather();

// Function to generate and display a random weather forecast for each day
function generateWeather() {
    // Loop through each day in the 'days' array
    for (var i = 0; i < days.length; i++) {

        // Select a random weather condition from the 'weather' array
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];

        // Generate a random temperature between minTemp and maxTemp
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        // Append a new weather forecast block to the element with ID "5DayWeather"
        // Each block includes the day, weather condition, and temperature
        document.getElementById("5DayWeather").innerHTML += 
            "<div id='" + days[i] + "' class='" + weatherToday + "'>" + 
            "<b>Forecast for " + days[i] + ":</b><br><br>" + 
            weatherToday + " and " + tempToday + " degrees." + 
            "</div>";
    }
}
