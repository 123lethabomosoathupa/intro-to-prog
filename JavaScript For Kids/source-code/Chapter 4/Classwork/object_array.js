//Array of friends:
// Define the Friend Objects
var anna = {
    name: "Anna",
    age: 11,
    luckyNumbers: [2, 4, 8, 16]
};

var dave = {
    name: "Dave",
    age: 5,
    luckyNumbers: [3, 9, 40]
};

var kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1, 2, 3]
};

var lethabo = {
    name: "Lethabo",
    age: 23,
    luckyNumbers:[13, 7, 9]
};

//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [anna, dave, kate, lethabo];

// Accessing Objects in the Array:
console.log("Friend Object: ", friends[3]);

// Accessing Properties within an Object:
console.log("Friend Name: ", friends[3].name);

// Accessing Nested Arrays within Objects:
console.log("Name:", friends[0].name,"and Lucky Number:", friends[0].luckyNumbers[1]);
