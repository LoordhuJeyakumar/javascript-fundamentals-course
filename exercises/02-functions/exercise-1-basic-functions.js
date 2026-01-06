// Exercise 1: Basic Functions
// Complete the TODO sections below

console.log("💪 Exercise 1: Basic Functions");
console.log("==============================");

// TODO 1: Create a function called 'printName' that prints your name
// Hint: Use console.log() inside the function
function printName() {
    // Your code here
    console.log("Your Name Here"); // Replace with your actual name
}

// Test your function
console.log("\n1. Testing printName():");
printName();

// TODO 2: Create a function called 'add' that takes two parameters and returns their sum
// Hint: Use the return statement
function add(a, b) {
    // Your code here
    return 0; // Replace with actual addition
}

// Test your function
console.log("\n2. Testing add(5, 3):");
let sum = add(5, 3);
console.log(`Result: ${sum}`);

// TODO 3: Create a function called 'greet' that takes a name parameter and returns a greeting
// Hint: Use template literals with backticks
function greet(name) {
    // Your code here
    return "Hello, " + name + "!"; // Replace with template literal
}

// Test your function
console.log("\n3. Testing greet('Alice'):");
let greeting = greet("Alice");
console.log(greeting);

// TODO 4: Create a function called 'calculateArea' that takes length and width parameters
// and returns the area of a rectangle
function calculateArea(length, width) {
    // Your code here
    return 0; // Replace with actual calculation
}

// Test your function
console.log("\n4. Testing calculateArea(10, 5):");
let area = calculateArea(10, 5);
console.log(`Area: ${area}`);

// TODO 5: Create a function called 'isEven' that takes a number and returns true if it's even
// Hint: Use the modulo operator (%)
function isEven(number) {
    // Your code here
    return false; // Replace with actual logic
}

// Test your function
console.log("\n5. Testing isEven(8) and isEven(7):");
console.log(`isEven(8): ${isEven(8)}`);
console.log(`isEven(7): ${isEven(7)}`);

// TODO 6: Create a function called 'findMax' that takes an array of numbers and returns the largest
// Hint: Use a loop to go through the array
function findMax(numbers) {
    // Your code here
    return 0; // Replace with actual logic
}

// Test your function
console.log("\n6. Testing findMax([3, 7, 2, 9, 1]):");
let numbers = [3, 7, 2, 9, 1];
let max = findMax(numbers);
console.log(`Max: ${max}`);

// TODO 7: Create a function called 'formatName' that takes firstName and lastName
// and returns a formatted name (e.g., "John Doe")
function formatName(firstName, lastName) {
    // Your code here
    return ""; // Replace with actual formatting
}

// Test your function
console.log("\n7. Testing formatName('John', 'Doe'):");
let fullName = formatName("John", "Doe");
console.log(`Full Name: ${fullName}`);

// TODO 8: Create a function called 'calculateBMI' that takes weight (kg) and height (m)
// and returns the BMI (weight / height^2)
function calculateBMI(weight, height) {
    // Your code here
    return 0; // Replace with actual calculation
}

// Test your function
console.log("\n8. Testing calculateBMI(70, 1.75):");
let bmi = calculateBMI(70, 1.75);
console.log(`BMI: ${bmi.toFixed(2)}`);

console.log("\n🎉 Exercise Complete!");
console.log("====================");
console.log("Check your answers and make sure all functions work correctly!");
console.log("If you get stuck, ask for help or check the solutions folder.");
