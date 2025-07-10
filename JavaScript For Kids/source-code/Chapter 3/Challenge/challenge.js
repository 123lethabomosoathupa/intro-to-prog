//Part A Code
console.log("-----PART A CODE-----");
console.log("-------------------------");

var bodyParts = ["armpits", "Leg", "feet", "forehead"];
var adjectives = ["smellier", "drier", "hairier", "wrinkled", "bigger"];
var animals = ["orangutan", "elephant", "baboon", "sloth" ];
var animalParts = ["butt", "back", "foot", "lips"];

var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
var randomAnimalPart = animalParts[Math.floor(Math.random() * animalParts.length)];

var insult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalPart + "!!!!!!!!!";
console.log(insult);
//Part B Join 
console.log("----------------------");
console.log("-----PART B CODE-----");
var insultParts = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal + "'s",randomAnimalPart + "!!!!!!!!"];

var insultWithJoin = insultParts.join(" ");
console.log(insultWithJoin);
console.log("------------------------------");
//PART C
console.log("--------PART C---------");
var numbers = [3, 2, 1];
var comparison = numbers.join(" is bigger than ");
console.log(comparison);
