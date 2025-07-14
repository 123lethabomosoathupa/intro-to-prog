// Print a heading for Part A
console.log("-----Part A-----");

// Part A: for loop that multiplies x by 2 each time, starting from 3
for (var x = 3; x < 10000; x = x * 3) {
    console.log(x); // Print the current value of x
};

// Print a heading for Part B
console.log("-----PartB-----");

// Initialize variable 'number' with 3
let number = 3;

// Part B: do...while loop that multiplies number by 3 each time
do {
    console.log(number); // Print the current value of number
    number *= 3;         // Multiply number by 3
} while (number < 10000); // Continue looping while number is less than 10,000
