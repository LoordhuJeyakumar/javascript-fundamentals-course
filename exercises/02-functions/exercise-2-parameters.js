// Exercise 2: Function Parameters
// Practice with function parameters and arguments

console.log("💪 Exercise 2: Function Parameters");
console.log("=================================");

// Exercise 1: Create a function with multiple parameters
console.log("\n1. Multiple Parameters Function:");
// TODO: Create a function called calculateArea that:
// - Takes width and height as parameters
// - Returns the area (width * height)
// - Logs the calculation
// Hint: function calculateArea(width, height) { ... }

function calculateArea(width, height) {
    // Your code here
}

// Test your function
console.log("Area of 5x3 rectangle:", calculateArea(5, 3));
console.log("Area of 10x8 rectangle:", calculateArea(10, 8));

// Exercise 2: Create a function with default parameters
console.log("\n2. Default Parameters Function:");
// TODO: Create a function called greet that:
// - Takes name and greeting as parameters
// - Uses "Hello" as default for greeting
// - Returns a greeting message
// Hint: function greet(name, greeting = "Hello") { ... }

function greet(name, greeting = "Hello") {
    // Your code here
}

// Test your function
console.log("Default greeting:", greet("Alice"));
console.log("Custom greeting:", greet("Bob", "Good morning"));

// Exercise 3: Create a function with rest parameters
console.log("\n3. Rest Parameters Function:");
// TODO: Create a function called sumAll that:
// - Takes any number of arguments using rest parameters
// - Returns the sum of all arguments
// - Handles the case when no arguments are provided
// Hint: function sumAll(...numbers) { ... }

function sumAll(...numbers) {
    // Your code here
}

// Test your function
console.log("Sum of 1, 2, 3:", sumAll(1, 2, 3));
console.log("Sum of 10, 20, 30, 40:", sumAll(10, 20, 30, 40));
console.log("Sum of no arguments:", sumAll());

// Exercise 4: Create a function with destructuring parameters
console.log("\n4. Destructuring Parameters Function:");
// TODO: Create a function called displayUser that:
// - Takes an object with name, age, and email properties
// - Uses destructuring to extract the properties
// - Returns a formatted user string
// Hint: function displayUser({ name, age, email }) { ... }

function displayUser({ name, age, email }) {
    // Your code here
}

// Test your function
let user1 = { name: "John", age: 30, email: "john@example.com" };
let user2 = { name: "Jane", age: 25, email: "jane@example.com" };
console.log("User 1:", displayUser(user1));
console.log("User 2:", displayUser(user2));

// Exercise 5: Create a function that validates parameters
console.log("\n5. Parameter Validation Function:");
// TODO: Create a function called divide that:
// - Takes two parameters: a and b
// - Validates that both are numbers
// - Validates that b is not zero
// - Returns the result or an error message
// Hint: Use typeof to check types and throw errors

function divide(a, b) {
    // Your code here
}

// Test your function
console.log("10 / 2 =", divide(10, 2));
console.log("15 / 3 =", divide(15, 3));
console.log("10 / 0 =", divide(10, 0));
console.log("10 / 'a' =", divide(10, 'a'));

// Exercise 6: Create a function with optional parameters
console.log("\n6. Optional Parameters Function:");
// TODO: Create a function called createMessage that:
// - Takes a message and optional prefix and suffix
// - Returns the formatted message
// - Uses default values for prefix and suffix
// Hint: function createMessage(message, prefix = "", suffix = "") { ... }

function createMessage(message, prefix = "", suffix = "") {
    // Your code here
}

// Test your function
console.log("Basic message:", createMessage("Hello World"));
console.log("With prefix:", createMessage("Hello World", ">>> "));
console.log("With suffix:", createMessage("Hello World", "", " <<<"));
console.log("With both:", createMessage("Hello World", ">>> ", " <<<"));

// Exercise 7: Create a function that uses arguments object
console.log("\n7. Arguments Object Function:");
// TODO: Create a function called findMax that:
// - Uses the arguments object to accept any number of arguments
// - Returns the maximum value
// - Handles the case when no arguments are provided
// Hint: Use arguments object and Math.max

function findMax() {
    // Your code here
}

// Test your function
console.log("Max of 1, 5, 3:", findMax(1, 5, 3));
console.log("Max of 10, 20, 30, 40:", findMax(10, 20, 30, 40));
console.log("Max of no arguments:", findMax());

// Exercise 8: Create a function with parameter destructuring and defaults
console.log("\n8. Complex Parameter Function:");
// TODO: Create a function called createPerson that:
// - Takes an object with optional name, age, and city properties
// - Uses destructuring with default values
// - Returns a person object with all properties
// Hint: function createPerson({ name = "Unknown", age = 0, city = "Unknown" } = {}) { ... }

function createPerson({ name = "Unknown", age = 0, city = "Unknown" } = {}) {
    // Your code here
}

// Test your function
console.log("Empty object:", createPerson({}));
console.log("Partial object:", createPerson({ name: "Alice" }));
console.log("Full object:", createPerson({ name: "Bob", age: 30, city: "New York" }));
console.log("No arguments:", createPerson());

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Great job! You've practiced function parameters.");
console.log("Key concepts practiced:");
console.log("- Multiple parameters");
console.log("- Default parameters");
console.log("- Rest parameters");
console.log("- Destructuring parameters");
console.log("- Parameter validation");
console.log("- Optional parameters");
console.log("- Arguments object");
console.log("- Complex parameter patterns");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: Return Values");
console.log("4. Ask questions if you need help");
