//1. Creating array
var fruits = ['apple', 'banana', 'cherry'];

//2. Indexing:
//Each item in an array is assigned a position number (index) 
//starting from 0.
console.log("Value:", fruits[0]);

//3. Changing Elements:
//Update an array item by specifying its index and setting a new value.
fruits[1] = 'blueberry';
console.log("New value:", fruits);

//4. Mixing Data Types and getting value 2
var mixedArray = [42, 'hello', true, {name: 'John'}, [1,2,3], [1, 2, 3], ['alex', 'Tom', 'rick','lethabo']];
console.log("Value:", mixedArray[5][2]);

//5. Finding Length:
console.log("Fruits Length:", fruits.length);

//6. Adding Elements: Append new items to the end of the array
fruits.push('date', 'mango', 'watermelon', 'tomato');
console.log("After appending:", fruits);

//7. Removing Elements:
//Remove items from the end or a specific position in the array
console.log("Removed fruit: ", fruits.pop());
console.log("After pop:", fruits);

//8. Joining Arrays:
var allFruits = fruits.concat(mixedArray);
console.log("Concat allFruits:", allFruits);

//9. Finding Index:
console.log("Index Of:", allFruits.indexOf('watermelon'));

//10. Turning into a String:
//Convert the array into a single string with elements separated by commas
var fruitString = allFruits.join(", ");
console.log("Converted:", fruitString);

//11. Building with push: Add new items to the end of the array
var numbers = [];
numbers.push(1, 2, 3, 4, 6 ,7, 8);
console.log("Numbers Array:", numbers);

//12. Adding to the beginning of the array:
numbers.unshift(0);
console.log("Added:", numbers);