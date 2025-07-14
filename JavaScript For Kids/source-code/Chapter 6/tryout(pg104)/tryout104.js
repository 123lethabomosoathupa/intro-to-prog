console.log("-----------A----------")
// Original array of animals
var animals = ["Dog", "Shark", "Cobra", "Parrot"];

// Loop through the array and prepend "Awesome " to each animal
for (var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i];
}

// Print the updated array to see the result
console.log(animals);

console.log("-----------B----------")
// All letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Start with an empty string
var randomString = "";

// Keep adding random letters until the string has 6 characters
while (randomString.length < 9) {
    // Generate a random index between 0 and 25
    var randomIndex = Math.floor(Math.random() * alphabet.length);

    // Get the letter at the random index and add it to the string
    randomString += alphabet[randomIndex];
}

// Print the final random string
console.log("Random String:", randomString);

console.log("-----------C----------")
// Input string to convert to h4ck3r sp34k
var input = "javascript is awesome";

// Start with an empty string to store the converted text
var output = "";

// Loop through each character in the input string
for (var i = 0; i < input.length; i++) {
    // Get the current character
    var letter = input[i];

    // Check if the character should be replaced, and add the appropriate value to output
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    } else {
        // If it's not a target letter, keep it as is
        output += letter;
    }
}
console.log(output)     // Print the final converted string