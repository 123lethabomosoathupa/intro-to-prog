// Create an object called dreamCar with properties describing the car
var dreamCar = {
    make: "Pimpmobile",       // Car brand
    model: "64",              // Model of the car
    color: "Purple",          // Color of the car
    year: 1983,               // Year the car was made
    bodyStyle: "Luxury Car",  // Type/style of the car
    price: 5000               // Price of the car
};

// Display the price of the car inside the element with ID "pricetag"
document.getElementById("pricetag").innerHTML = dreamCar.price;

// Display the year of the car inside the element with ID "modelyear"
document.getElementById("modelyear").innerHTML = dreamCar.year;

// Change the background color of the element with ID "body" to the car's color
//document.getElementById("body").style.backgroundColor = dreamCar.color;

// Display the car's make and model inside the element with ID "body"
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
