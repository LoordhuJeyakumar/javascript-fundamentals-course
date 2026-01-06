// Exercise 6: Debugging
// Complete the TODO sections below

console.log("💪 Exercise 6: Debugging");
console.log("=======================");

// Exercise 1: Console Logging
console.log("\n1. Console Logging:");
let userName = "John";
let userAge = 25;
let isActive = true;

// TODO: Use console.log() for basic output
console.log("User information:");
console.log("Name:", null); // Your code here
// Hint: userName

console.log("Age:", null); // Your code here
// Hint: userAge

console.log("Active:", null); // Your code here
// Hint: isActive

// TODO: Use console.log() with template literals
console.log(null); // Your code here
// Hint: `User: ${userName}, Age: ${userAge}, Active: ${isActive}`

// Exercise 2: Console Methods
console.log("\n2. Console Methods:");
let numbers = [1, 2, 3, 4, 5];

// TODO: Use console.table() for arrays
console.log("Numbers array:");
console.table(null); // Your code here
// Hint: numbers

// TODO: Use console.group() for grouping
console.group("User Details");
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Active:", isActive);
console.groupEnd();

// TODO: Use console.time() for timing
console.time("Array Processing");
let doubledNumbersArray = numbers.map(n => n * 2);
console.timeEnd("Array Processing");

console.log("Doubled numbers:", doubledNumbersArray);

// Exercise 3: Error Logging
console.log("\n3. Error Logging:");
let userInput = "hello";

// TODO: Use console.error() for errors
try {
    let num = parseInt(userInput);
    if (isNaN(num)) {
        console.error(null); // Your code here
        // Hint: "Invalid number input"
    }
} catch (error) {
    console.error(null); // Your code here
    // Hint: "Error parsing input:", error.message
}

// TODO: Use console.warn() for warnings
if (userAge < 18) {
    console.warn(null); // Your code here
    // Hint: "User is under 18"
}

// Exercise 4: Debugging Variables
console.log("\n4. Debugging Variables:");
let a = 5;
let b = 10;
let c = a + b;

// TODO: Use console.log() to debug variables
console.log("Debugging variables:");
console.log("a =", null); // Your code here
// Hint: a

console.log("b =", null); // Your code here
// Hint: b

console.log("c =", null); // Your code here
// Hint: c

// TODO: Use console.log() to debug expressions
console.log("a + b =", null); // Your code here
// Hint: a + b

console.log("a * b =", null); // Your code here
// Hint: a * b

// Exercise 5: Debugging Functions
console.log("\n5. Debugging Functions:");
// TODO: Add debugging to a function
function calculateArea(length, width) {
    console.log("Function called with:", null); // Your code here
    // Hint: { length, width }
    
    if (null) { // Your code here
        // Hint: length <= 0 || width <= 0
        console.error("Invalid dimensions");
        return 0;
    }
    
    let area = null; // Your code here
    // Hint: length * width
    
    console.log("Calculated area:", null); // Your code here
    // Hint: area
    
    return area;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(-2, 5);
let area3 = calculateArea(3, 4);

console.log("Areas:", { area1, area2, area3 });

// Exercise 6: Debugging Loops
console.log("\n6. Debugging Loops:");
let fruits = ["apple", "banana", "orange"];

// TODO: Add debugging to a loop
console.log("Loop debugging:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Iteration:", null); // Your code here
    // Hint: i
    
    console.log("Current fruit:", null); // Your code here
    // Hint: fruits[i]
    
    console.log("Fruit length:", null); // Your code here
    // Hint: fruits[i].length
}

// Exercise 7: Debugging Objects
console.log("\n7. Debugging Objects:");
let user = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    hobbies: ["reading", "coding", "gaming"]
};

// TODO: Use console.log() to debug object properties
console.log("User object:", null); // Your code here
// Hint: user

console.log("User name:", null); // Your code here
// Hint: user.name

console.log("User address:", null); // Your code here
// Hint: user.address

console.log("User hobbies:", null); // Your code here
// Hint: user.hobbies

// TODO: Use console.table() for object
console.table(null); // Your code here
// Hint: user

// Exercise 8: Debugging Arrays
console.log("\n8. Debugging Arrays:");
let scores = [85, 92, 78, 96, 88];

// TODO: Use console.log() to debug array operations
console.log("Original scores:", null); // Your code here
// Hint: scores

let sortedScores = scores.sort((a, b) => b - a);
console.log("Sorted scores:", null); // Your code here
// Hint: sortedScores

let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", null); // Your code here
// Hint: averageScore

let highestScore = Math.max(...scores);
console.log("Highest score:", null); // Your code here
// Hint: highestScore

// Exercise 9: Debugging Conditional Logic
console.log("\n9. Debugging Conditional Logic:");
let temperature = 25;
let isRaining = false;
let hasUmbrella = true;

// TODO: Add debugging to conditional logic
console.log("Weather conditions:");
console.log("Temperature:", null); // Your code here
// Hint: temperature

console.log("Is raining:", null); // Your code here
// Hint: isRaining

console.log("Has umbrella:", null); // Your code here
// Hint: hasUmbrella

if (temperature > 20) {
    console.log("It's warm");
    if (isRaining) {
        console.log("It's raining");
        if (hasUmbrella) {
            console.log("You have an umbrella - you're good to go!");
        } else {
            console.log("You need an umbrella");
        }
    } else {
        console.log("It's not raining - perfect weather!");
    }
} else {
    console.log("It's cold");
    if (isRaining) {
        console.log("It's cold and raining - stay indoors");
    } else {
        console.log("It's cold but dry - wear a jacket");
    }
}

// Exercise 10: Debugging Error Handling
console.log("\n10. Debugging Error Handling:");
// TODO: Add debugging to error handling
function divideNumbers(a, b) {
    console.log("Dividing:", null); // Your code here
    // Hint: `${a} by ${b}`
    
    if (null) { // Your code here
        // Hint: b === 0
        console.error("Division by zero error");
        throw new Error("Cannot divide by zero");
    }
    
    let result = null; // Your code here
    // Hint: a / b
    
    console.log("Division result:", null); // Your code here
    // Hint: result
    
    return result;
}

try {
    let result1 = divideNumbers(10, 2);
    console.log("Result 1:", result1);
} catch (error) {
    console.error("Error in division 1:", null); // Your code here
    // Hint: error.message
}

try {
    let result2 = divideNumbers(10, 0);
    console.log("Result 2:", result2);
} catch (error) {
    console.error("Error in division 2:", null); // Your code here
    // Hint: error.message
}

// Exercise 11: Debugging Performance
console.log("\n11. Debugging Performance:");
let largeArray = Array.from({ length: 1000 }, (_, i) => i);

// TODO: Use console.time() to measure performance
console.time("Array Filter");
let evenNumbers = largeArray.filter(n => n % 2 === 0);
console.timeEnd("Array Filter");

console.time("Array Map");
let doubledNumbers = largeArray.map(n => n * 2);
console.timeEnd("Array Map");

console.time("Array Reduce");
let sum = largeArray.reduce((acc, n) => acc + n, 0);
console.timeEnd("Array Reduce");

console.log("Performance results:");
console.log("Even numbers count:", evenNumbers.length);
console.log("Doubled numbers count:", doubledNumbers.length);
console.log("Sum:", sum);

// Exercise 12: Debugging Best Practices
console.log("\n12. Debugging Best Practices:");
// TODO: Create a function with comprehensive debugging
function processUserData(userData) {
    console.log("=== Processing User Data ===");
    console.log("Input data:", null); // Your code here
    // Hint: userData
    
    // TODO: Validate input
    if (null) { // Your code here
        // Hint: !userData
        console.error("No user data provided");
        return null;
    }
    
    if (null) { // Your code here
        // Hint: typeof userData !== 'object'
        console.error("User data must be an object");
        return null;
    }
    
    // TODO: Process data
    let processedData = {
        id: null, // Your code here
        // Hint: Date.now()
        name: null, // Your code here
        // Hint: userData.name?.trim() || "Unknown"
        email: null, // Your code here
        // Hint: userData.email?.toLowerCase() || "No email"
        processedAt: null // Your code here
        // Hint: new Date().toISOString()
    };
    
    console.log("Processed data:", null); // Your code here
    // Hint: processedData
    
    console.log("=== Processing Complete ===");
    return processedData;
}

// TODO: Test the function with different inputs
let testData1 = { name: "  John Doe  ", email: "JOHN@EXAMPLE.COM" };
let testData2 = { name: "Jane", email: "jane@example.com" };
let testData3 = null;

console.log("Testing with valid data:");
let result1 = processUserData(testData1);
console.log("Result 1:", result1);

console.log("\nTesting with another valid data:");
let result2 = processUserData(testData2);
console.log("Result 2:", result2);

console.log("\nTesting with null data:");
let result3 = processUserData(testData3);
console.log("Result 3:", result3);

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced debugging techniques.");
console.log("Key concepts practiced:");
console.log("- Console logging methods (log, error, warn, table)");
console.log("- Debugging variables and expressions");
console.log("- Debugging functions and loops");
console.log("- Debugging objects and arrays");
console.log("- Debugging conditional logic");
console.log("- Debugging error handling");
console.log("- Performance debugging with timing");
console.log("- Best practices for debugging");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Practice debugging your own code");
console.log("3. Use browser developer tools for advanced debugging");
console.log("4. Ask questions if you need help");
