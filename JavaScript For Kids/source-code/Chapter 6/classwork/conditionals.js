console.log("-----IF statement-----");
// Declare a variable called 'name' and assign it the value "Nicholas"
var name = "Lethabo";

// Print a greeting message including the name
console.log("Hello " + name);

// Check if the length of the name is greater than 7 characters
if (name.length > 7) {
    // If the name is longer than 7 characters, print this message
    console.log("Wow, you have a REALLY long name!");
};


console.log("-----ELSE statement-----");

// Declare a variable called 'name' and assign it the value "Nicholas"
var name = "Jackie Chan";

// Print a greeting message including the name
console.log("Hello " + name);

// Check if the length of the name is greater than 7 characters
if (name.length > 15) {
    // If the name is longer than 7 characters, print this message
    console.log("Wow, you have a REALLY long name!");
} else {
    // If the name is 7 characters or fewer, print this message
    console.log("Your name isn't very long.");
}

console.log("-----ELSE IF statement-----");

var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have rice then.");
}
