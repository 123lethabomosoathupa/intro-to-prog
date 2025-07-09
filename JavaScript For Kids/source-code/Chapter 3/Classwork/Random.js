console.log("-----Random Numbers-----");


//Generating a random number between 0 and 1
console.log("Random Number:", Math.random());

//multiplying by 25
console.log("Random number by 25:", Math.random() *25); 

//rounding to the nearest number
console.log("Rounded off:", Math.floor(0.9071541943695214))


//Math.random and math.floor
console.log("Rounded off Random Number:", Math.floor(Math.random() * 35));


console.log("--------------");
//random array

console.log("-----Randome array-----");
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);

console.log("Random Word:", randomWords[randomIndex]);

console.log("-------Random Insult Generator---------");
// Random Insult

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 5)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!!!";
console.log(randomInsult);
randomInsult;

