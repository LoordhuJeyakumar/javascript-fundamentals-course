// Exercise 3: Return Values
// Practice with function return values and scope

console.log("💪 Exercise 3: Return Values");
console.log("===========================");

// Exercise 1: Create a function that returns a calculated value
console.log("\n1. Calculate Function:");
// TODO: Create a function called calculateBMI that:
// - Takes weight (in kg) and height (in meters) as parameters
// - Calculates BMI using the formula: weight / (height * height)
// - Returns the BMI value
// - Logs the calculation
// Hint: function calculateBMI(weight, height) { ... }

function calculateBMI(weight, height) {
    // Your code here
}

// Test your function
console.log("BMI for 70kg, 1.75m:", calculateBMI(70, 1.75));
console.log("BMI for 60kg, 1.60m:", calculateBMI(60, 1.60));

// Exercise 2: Create a function that returns different values based on conditions
console.log("\n2. Conditional Return Function:");
// TODO: Create a function called getGrade that:
// - Takes a score (0-100) as parameter
// - Returns "A" for 90-100, "B" for 80-89, "C" for 70-79, "D" for 60-69, "F" for below 60
// - Returns "Invalid score" for scores outside 0-100 range
// Hint: Use if-else statements

function getGrade(score) {
    // Your code here
}

// Test your function
console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));
console.log("Score 65:", getGrade(65));
console.log("Score 55:", getGrade(55));
console.log("Score 105:", getGrade(105));

// Exercise 3: Create a function that returns an object
console.log("\n3. Object Return Function:");
// TODO: Create a function called createPerson that:
// - Takes name, age, and occupation as parameters
// - Returns an object with these properties plus a greeting method
// - The greeting method should return "Hello, I'm [name] and I'm [age] years old"
// Hint: Return an object literal with a method

function createPerson(name, age, occupation) {
    // Your code here
}

// Test your function
let person1 = createPerson("Alice", 30, "Developer");
let person2 = createPerson("Bob", 25, "Designer");
console.log("Person 1:", person1);
console.log("Person 1 greeting:", person1.greeting());
console.log("Person 2:", person2);
console.log("Person 2 greeting:", person2.greeting());

// Exercise 4: Create a function that returns an array
console.log("\n4. Array Return Function:");
// TODO: Create a function called generateNumbers that:
// - Takes start, end, and step as parameters
// - Returns an array of numbers from start to end (inclusive) with given step
// - If step is not provided, use 1
// - If start > end, return empty array
// Hint: Use a loop to build the array

function generateNumbers(start, end, step = 1) {
    // Your code here
}

// Test your function
console.log("Numbers 1 to 10:", generateNumbers(1, 10));
console.log("Even numbers 2 to 10:", generateNumbers(2, 10, 2));
console.log("Numbers 10 to 1:", generateNumbers(10, 1));
console.log("Numbers 5 to 5:", generateNumbers(5, 5));

// Exercise 5: Create a function that returns a function
console.log("\n5. Function Return Function:");
// TODO: Create a function called createMultiplier that:
// - Takes a number as parameter
// - Returns a function that multiplies any number by the original number
// - The returned function should take one parameter and return the result
// Hint: Return an arrow function or function expression

function createMultiplier(multiplier) {
    // Your code here
}

// Test your function
let double = createMultiplier(2);
let triple = createMultiplier(3);
let quadruple = createMultiplier(4);

console.log("Double 5:", double(5));
console.log("Triple 7:", triple(7));
console.log("Quadruple 3:", quadruple(3));

// Exercise 6: Create a function that returns multiple values using an object
console.log("\n6. Multiple Values Return Function:");
// TODO: Create a function called analyzeString that:
// - Takes a string as parameter
// - Returns an object with properties: length, hasNumbers, hasLetters, isUpperCase, isLowerCase
// - hasNumbers: true if string contains digits
// - hasLetters: true if string contains letters
// - isUpperCase: true if string is all uppercase
// - isLowerCase: true if string is all lowercase
// Hint: Use string methods and regular expressions

function analyzeString(str) {
    // Your code here
}

// Test your function
console.log("Analyze 'Hello123':", analyzeString("Hello123"));
console.log("Analyze 'HELLO':", analyzeString("HELLO"));
console.log("Analyze 'hello':", analyzeString("hello"));
console.log("Analyze '123':", analyzeString("123"));

// Exercise 7: Create a function that returns undefined explicitly
console.log("\n7. Explicit Undefined Return Function:");
// TODO: Create a function called processData that:
// - Takes data and a flag as parameters
// - If flag is true, processes the data and returns the result
// - If flag is false, logs "Processing skipped" and returns undefined
// - If data is invalid, returns undefined
// Hint: Use explicit return undefined

function processData(data, flag) {
    // Your code here
}

// Test your function
console.log("Process with flag true:", processData("test", true));
console.log("Process with flag false:", processData("test", false));
console.log("Process invalid data:", processData(null, true));

// Exercise 8: Create a function that returns early
console.log("\n8. Early Return Function:");
// TODO: Create a function called findFirstEven that:
// - Takes an array of numbers as parameter
// - Returns the first even number found
// - Returns null if no even numbers are found
// - Uses early return when an even number is found
// Hint: Use for loop and early return

function findFirstEven(numbers) {
    // Your code here
}

// Test your function
console.log("First even in [1,3,4,7,8]:", findFirstEven([1, 3, 4, 7, 8]));
console.log("First even in [1,3,5,7]:", findFirstEven([1, 3, 5, 7]));
console.log("First even in [2,4,6,8]:", findFirstEven([2, 4, 6, 8]));
console.log("First even in []:", findFirstEven([]));

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced function return values.");
console.log("Key concepts practiced:");
console.log("- Returning calculated values");
console.log("- Conditional returns");
console.log("- Returning objects and arrays");
console.log("- Returning functions");
console.log("- Multiple value returns");
console.log("- Explicit undefined returns");
console.log("- Early returns");
console.log("- Return value validation");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: Function Scope");
console.log("4. Ask questions if you need help");
