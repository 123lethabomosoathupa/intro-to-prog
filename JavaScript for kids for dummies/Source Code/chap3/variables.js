// ----------- Creating variables and assigning values -----------
var book = 5; // Assigns the number 5 to the variable 'book'
console.log(book); // Logs the value of 'book'

var myFirstName = "Cursh"; // Assigns the string "Cursh" to 'myFirstName'
console.log(myFirstName); // Logs the value of 'myFirstName'

// ----------- String properties and methods -----------
console.log("----------String properties and methods-------");
console.log("Length of the string:", "I am a string.".length); // Returns the number of characters in the string
console.log("Index of the string:", "my first javascript string.".indexOf("first")); // Finds the position of the word "first"

// ----------- Boolean expressions -----------
console.log("--------Boolean expressions-----------");
console.log("Is this condition true or false:", 1 < 10); // true
console.log("Is this condition true or false:", false === false); // true
console.log("Is this condition true or false:", 40 >= 40); // true

// ----------- Alerts -----------
alert("Good job!"); // Shows an alert with a message
alert(300); // Shows an alert with a number
alert(37 * 37); // Shows an alert with the result of 37 * 37

// ----------- Alert using a variable -----------
var myNameIs = "Brock Lesnar";
alert(myNameIs); // Displays the content of the variable in an alert

// ----------- Alert combining text and variables -----------
var firstName = "Brock Lesnar";
var yourScore = 30;
alert("Hi, " + firstName + ". Your current score is: " + yourScore); // Combines text and variables

// ----------- Using document.write() - Part 1 -----------
document.write("------Using document.write Part 1 --------<br>");
document.write("Hi, Mom!<br>");
document.write("How are you?<br>");
document.write("I'm great! Thanks!<br>");
document.write("------End of Part 1 --------<br><br>");

// ----------- Custom letter example using variables -----------
var toName = "Brock Lesnar";
var fromName = "The Grammy Awards";
var letterBody = 'The committee said, "We can\'t believe how good your song is!"';

// ----------- Using document.write() - Part 2 -----------
document.write("------Using document.write Part 2 --------<br>");
document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName + "<br>"); // Concatenated with '+'
document.write("------End of Part 2 --------");
