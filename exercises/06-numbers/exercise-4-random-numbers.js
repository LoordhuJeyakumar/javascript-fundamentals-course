// Exercise 4: Random Numbers
// Practice with random number generation and applications

console.log("💪 Exercise 4: Random Numbers");
console.log("===========================");

// Exercise 1: Generate random integers in a range
console.log("\n1. Random Integers in Range:");
// TODO: Create a function called randomInt that:
// - Takes min and max parameters
// - Returns a random integer between min and max (inclusive)
// - Handle edge cases (min > max, equal values)
// Hint: Use Math.random() and Math.floor()

function randomInt(min, max) {
    // Your code here
}

// Test your function
console.log("Random int between 1 and 10:", randomInt(1, 10));
console.log("Random int between 0 and 100:", randomInt(0, 100));
console.log("Random int between -5 and 5:", randomInt(-5, 5));
console.log("Random int between 5 and 5:", randomInt(5, 5));

// Exercise 2: Generate random floating-point numbers
console.log("\n2. Random Floating-Point Numbers:");
// TODO: Create a function called randomFloat that:
// - Takes min, max, and decimalPlaces parameters
// - Returns a random float between min and max
// - Round to specified decimal places
// Hint: Use Math.random() and toFixed()

function randomFloat(min, max, decimalPlaces = 2) {
    // Your code here
}

// Test your function
console.log("Random float between 0 and 1 (2 decimals):", randomFloat(0, 1, 2));
console.log("Random float between 10 and 20 (1 decimal):", randomFloat(10, 20, 1));
console.log("Random float between -1 and 1 (3 decimals):", randomFloat(-1, 1, 3));

// Exercise 3: Generate random boolean values
console.log("\n3. Random Boolean Values:");
// TODO: Create a function called randomBoolean that:
// - Takes an optional probability parameter (0-1)
// - Returns true with the given probability
// - Default probability should be 0.5
// Hint: Use Math.random() and compare with probability

function randomBoolean(probability = 0.5) {
    // Your code here
}

// Test your function
console.log("Random boolean (50% chance):", randomBoolean());
console.log("Random boolean (25% chance):", randomBoolean(0.25));
console.log("Random boolean (75% chance):", randomBoolean(0.75));
console.log("Random boolean (100% chance):", randomBoolean(1));

// Exercise 4: Generate random strings
console.log("\n4. Random Strings:");
// TODO: Create a function called randomString that:
// - Takes length and characterSet parameters
// - Returns a random string of specified length
// - Use the provided character set
// Hint: Use Math.random() to select characters from the set

function randomString(length, characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    // Your code here
}

// Test your function
console.log("Random string (10 chars, alphanumeric):", randomString(10));
console.log("Random string (8 chars, numbers only):", randomString(8, "0123456789"));
console.log("Random string (6 chars, letters only):", randomString(6, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"));

// Exercise 5: Generate random colors
console.log("\n5. Random Colors:");
// TODO: Create a function called randomColor that:
// - Takes a format parameter ('hex', 'rgb', 'hsl')
// - Returns a random color in the specified format
// - Handle different color formats
// Hint: Generate random values for each color component

function randomColor(format = 'hex') {
    // Your code here
}

// Test your function
console.log("Random hex color:", randomColor('hex'));
console.log("Random RGB color:", randomColor('rgb'));
console.log("Random HSL color:", randomColor('hsl'));

// Exercise 6: Generate random arrays
console.log("\n6. Random Arrays:");
// TODO: Create a function called randomArray that:
// - Takes length, min, max, and unique parameters
// - Returns an array of random numbers
// - If unique is true, ensure all numbers are unique
// Hint: Use a Set to track unique values

function randomArray(length, min = 0, max = 100, unique = false) {
    // Your code here
}

// Test your function
console.log("Random array (5 elements, 1-10):", randomArray(5, 1, 10));
console.log("Random array (3 elements, -5 to 5):", randomArray(3, -5, 5));
console.log("Random unique array (5 elements, 1-10):", randomArray(5, 1, 10, true));

// Exercise 7: Generate random passwords
console.log("\n7. Random Passwords:");
// TODO: Create a function called generatePassword that:
// - Takes length and options parameters
// - Returns a random password with specified requirements
// - Support options: includeUppercase, includeLowercase, includeNumbers, includeSymbols
// Hint: Build character set based on options

function generatePassword(length = 12, options = {}) {
    // Your code here
}

// Test your function
let passwordOptions = {
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
};
console.log("Random password (12 chars, all options):", generatePassword(12, passwordOptions));
console.log("Random password (8 chars, letters only):", generatePassword(8, { includeUppercase: true, includeLowercase: true }));

// Exercise 8: Generate random data for testing
console.log("\n8. Random Test Data:");
// TODO: Create a function called generateTestData that:
// - Takes a schema object as parameter
// - Returns an object with random data matching the schema
// - Support different data types: string, number, boolean, array
// Hint: Use a switch statement to handle different types

function generateTestData(schema) {
    // Your code here
}

// Test your function
let userSchema = {
    id: { type: 'number', min: 1, max: 1000 },
    name: { type: 'string', length: 8 },
    email: { type: 'string', length: 15, suffix: '@example.com' },
    age: { type: 'number', min: 18, max: 65 },
    isActive: { type: 'boolean' }
};

console.log("Random user data:", generateTestData(userSchema));

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced random number generation.");
console.log("Key concepts practiced:");
console.log("- Random integer generation");
console.log("- Random floating-point numbers");
console.log("- Random boolean values");
console.log("- Random string generation");
console.log("- Random color generation");
console.log("- Random array generation");
console.log("- Random password generation");
console.log("- Random test data generation");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Statistical Calculations");
console.log("4. Ask questions if you need help");
