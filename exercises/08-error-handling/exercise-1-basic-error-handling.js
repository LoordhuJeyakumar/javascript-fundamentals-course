// Exercise 1: Basic Error Handling
// Practice basic error handling with try-catch blocks

console.log("💪 Exercise 1: Basic Error Handling");
console.log("===================================");

// Exercise 1: Create a function that validates email addresses
console.log("\n1. Email Validation Function:");
// TODO: Create a function called validateEmail that:
// - Takes an email parameter
// - Throws a TypeError if email is not a string
// - Throws an Error if email doesn't contain @
// - Throws an Error if email is less than 5 characters
// - Returns true if email is valid
// Hint: Use if statements and throw new Error() or throw new TypeError()

function validateEmail(email) {
    // Your code here
}

// Test your function
try {
    console.log("Testing valid email:", validateEmail("test@example.com"));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Testing invalid email:", validateEmail("invalid-email"));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 2: Create a function that safely divides two numbers
console.log("\n2. Safe Division Function:");
// TODO: Create a function called safeDivide that:
// - Takes two parameters: a and b
// - Uses try-catch to handle division by zero
// - Returns the result if successful
// - Returns null if there's an error
// - Logs the error message

function safeDivide(a, b) {
    // Your code here
}

// Test your function
console.log("10 / 2 =", safeDivide(10, 2));
console.log("10 / 0 =", safeDivide(10, 0));
console.log("10 / 'a' =", safeDivide(10, 'a'));

// Exercise 3: Create a function that safely accesses array elements
console.log("\n3. Safe Array Access Function:");
// TODO: Create a function called safeArrayAccess that:
// - Takes an array and an index
// - Uses try-catch to handle out-of-bounds access
// - Returns the element if successful
// - Returns undefined if there's an error
// - Logs the error message

function safeArrayAccess(arr, index) {
    // Your code here
}

// Test your function
let testArray = [1, 2, 3, 4, 5];
console.log("Array:", testArray);
console.log("Index 2:", safeArrayAccess(testArray, 2));
console.log("Index 10:", safeArrayAccess(testArray, 10));
console.log("Index -1:", safeArrayAccess(testArray, -1));

// Exercise 4: Create a function that safely parses JSON
console.log("\n4. Safe JSON Parse Function:");
// TODO: Create a function called safeJSONParse that:
// - Takes a JSON string parameter
// - Uses try-catch to handle JSON parsing errors
// - Returns the parsed object if successful
// - Returns null if there's an error
// - Logs the error message

function safeJSONParse(jsonString) {
    // Your code here
}

// Test your function
console.log("Valid JSON:", safeJSONParse('{"name": "John", "age": 30}'));
console.log("Invalid JSON:", safeJSONParse('{"name": "John", "age": 30'));
console.log("Empty string:", safeJSONParse(''));

// Exercise 5: Create a function that validates user input
console.log("\n5. User Input Validation Function:");
// TODO: Create a function called validateUserInput that:
// - Takes a user object with name, email, and age properties
// - Validates that name is a non-empty string
// - Validates that email contains @ and is at least 5 characters
// - Validates that age is a number between 0 and 150
// - Throws appropriate errors for each validation failure
// - Returns true if all validations pass

function validateUserInput(user) {
    // Your code here
}

// Test your function
let validUser = { name: "John Doe", email: "john@example.com", age: 30 };
let invalidUser = { name: "", email: "invalid", age: -5 };

try {
    console.log("Valid user:", validateUserInput(validUser));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Invalid user:", validateUserInput(invalidUser));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 6: Create a function that handles multiple error types
console.log("\n6. Multiple Error Types Function:");
// TODO: Create a function called processData that:
// - Takes a data parameter
// - Throws a TypeError if data is not an object
// - Throws a ReferenceError if data is null or undefined
// - Throws a RangeError if data has more than 10 properties
// - Throws an Error if data doesn't have a required 'id' property
// - Returns the data if all validations pass

function processData(data) {
    // Your code here
}

// Test your function
let validData = { id: 1, name: "Test", value: 100 };
let invalidData1 = "not an object";
let invalidData2 = null;
let invalidData3 = { id: 1, prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5, prop6: 6, prop7: 7, prop8: 8, prop9: 9, prop10: 10, prop11: 11 };
let invalidData4 = { name: "Test" };

try {
    console.log("Valid data:", processData(validData));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Invalid data (not object):", processData(invalidData1));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Invalid data (null):", processData(invalidData2));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Invalid data (too many properties):", processData(invalidData3));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Invalid data (no id):", processData(invalidData4));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 7: Create a function with finally block
console.log("\n7. Finally Block Function:");
// TODO: Create a function called processFile that:
// - Takes a filename parameter
// - Simulates file processing (just log "Processing file: filename")
// - Uses try-catch-finally
// - In the finally block, log "File processing completed"
// - Throws an error if filename is empty or undefined
// - Returns "File processed successfully" if successful

function processFile(filename) {
    // Your code here
}

// Test your function
console.log("Processing valid file:");
processFile("document.txt");

console.log("\nProcessing invalid file:");
processFile("");

// Exercise 8: Create a function that handles nested errors
console.log("\n8. Nested Error Handling Function:");
// TODO: Create a function called processUserData that:
// - Takes a userData parameter
// - Calls validateUserInput internally
// - If validation fails, catches the error and throws a new Error with message "User data validation failed: [original error message]"
// - If validation succeeds, processes the data (just log "Processing user data")
// - Returns "User data processed successfully"

function processUserData(userData) {
    // Your code here
}

// Test your function
let validUserData = { name: "Jane Doe", email: "jane@example.com", age: 25 };
let invalidUserData = { name: "", email: "invalid", age: -5 };

try {
    console.log("Processing valid user data:", processUserData(validUserData));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Processing invalid user data:", processUserData(invalidUserData));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 9: Create a function that logs errors
console.log("\n9. Error Logging Function:");
// TODO: Create a function called logError that:
// - Takes an error and a context parameter
// - Logs the error name, message, and context
// - Logs the current timestamp
// - Logs the error stack trace
// - Returns an error log object with all the information

function logError(error, context = {}) {
    // Your code here
}

// Test your function
try {
    throw new Error("Test error for logging");
} catch (error) {
    let errorLog = logError(error, { operation: "test", userId: 123 });
    console.log("Error log:", errorLog);
}

// Exercise 10: Create a robust calculator function
console.log("\n10. Robust Calculator Function:");
// TODO: Create a function called robustCalculator that:
// - Takes an operation and two operands
// - Validates that operation is one of: 'add', 'subtract', 'multiply', 'divide'
// - Validates that both operands are numbers
// - Uses try-catch to handle division by zero
// - Returns an object with success, result, and operation properties
// - If there's an error, returns an object with success: false and error message

function robustCalculator(operation, a, b) {
    // Your code here
}

// Test your function
console.log("5 + 3 =", robustCalculator('add', 5, 3));
console.log("10 - 4 =", robustCalculator('subtract', 10, 4));
console.log("6 * 7 =", robustCalculator('multiply', 6, 7));
console.log("15 / 3 =", robustCalculator('divide', 15, 3));
console.log("10 / 0 =", robustCalculator('divide', 10, 0));
console.log("Invalid operation:", robustCalculator('power', 2, 3));
console.log("Invalid operands:", robustCalculator('add', 'a', 'b'));

console.log("\n🎉 Exercise 1 Complete!");
console.log("=====================");
console.log("Great job! You've practiced basic error handling.");
console.log("Key concepts practiced:");
console.log("- Try-catch blocks");
console.log("- Throwing different error types");
console.log("- Error handling in functions");
console.log("- Finally blocks");
console.log("- Nested error handling");
console.log("- Error logging");
console.log("- Input validation");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: Custom Error Classes");
console.log("4. Ask questions if you need help");
