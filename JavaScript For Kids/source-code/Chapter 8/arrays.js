function areArraysSame(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through the arrays and compare each value
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if any values differ
    }
  }

  // If we get through the loop without returning false, the arrays are the same
  return true;
}

// Test cases
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));     
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));     
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));  
