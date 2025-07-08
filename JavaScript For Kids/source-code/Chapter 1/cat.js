// Define a function named 'drawCats' that takes one parameter: howManyTimes
var drawCats = function (howManyTimes) {
  
  // Use a for loop to repeat the following block of code 'howManyTimes' times
  for (var i = 0; i < howManyTimes; i++) {
    
    // Print the current loop index followed by a cat face to the console
    console.log(i + " =^.^=");
  }
};

// Call the 'drawCats' function and tell it to draw 10 cats
drawCats(10);


// Define a function called drawCats that takes one parameter: howManyTimes
var drawCats = function (howManyTimes) {
  
  // Start a loop from 20 down to (but not including) howManyTimes
  for (var i = 20; i > howManyTimes; i--) {
    
    // Print the current value of i followed by a cat face
    console.log(i + " =^.^=");
  }
};

// Call the drawCats function and pass 10 as the argument
// This will print cat faces from 20 down to 11
drawCats(10);
