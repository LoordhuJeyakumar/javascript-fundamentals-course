// Exercise 5: Best Practices
// Complete the TODO sections below

console.log("💪 Exercise 5: Best Practices");
console.log("============================");

// Exercise 1: Variable Naming
console.log("\n1. Variable Naming:");
// TODO: Use descriptive variable names
let userName = null; // Your code here
// Hint: "John Doe"

let userAge = null; // Your code here
// Hint: 25

let isUserActive = null; // Your code here
// Hint: true

let userEmailAddress = null; // Your code here
// Hint: "john@example.com"

console.log("Descriptive variable names:");
console.log("User name:", userName);
console.log("User age:", userAge);
console.log("Is user active:", isUserActive);
console.log("User email:", userEmailAddress);

// Exercise 2: Constants vs Variables
console.log("\n2. Constants vs Variables:");
// TODO: Use const for values that don't change
const PI = null; // Your code here
// Hint: 3.14159

const MAX_USERS = null; // Your code here
// Hint: 100

const API_BASE_URL = null; // Your code here
// Hint: "https://api.example.com"

// TODO: Use let for values that change
let currentUserCount = null; // Your code here
// Hint: 0

let isLoggedIn = null; // Your code here
// Hint: false

console.log("Constants and variables:");
console.log("PI:", PI);
console.log("MAX_USERS:", MAX_USERS);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("Current user count:", currentUserCount);
console.log("Is logged in:", isLoggedIn);

// Exercise 3: Function Best Practices
console.log("\n3. Function Best Practices:");
// TODO: Create a function with descriptive name
function calculateUserScore(score, maxScore) {
    if (null) { // Your code here
        // Hint: maxScore === 0
        return 0;
    }
    
    return null; // Your code here
    // Hint: (score / maxScore) * 100
}

// TODO: Create a function with early return
function validateUserInput(input) {
    if (null) { // Your code here
        // Hint: !input
        return { valid: false, error: "Input is required" };
    }
    
    if (null) { // Your code here
        // Hint: typeof input !== 'string'
        return { valid: false, error: "Input must be a string" };
    }
    
    if (null) { // Your code here
        // Hint: input.length < 3
        return { valid: false, error: "Input must be at least 3 characters" };
    }
    
    return { valid: true, error: null };
}

// TODO: Create a function with default parameters
function greetUser(name, greeting = "Hello") {
    return null; // Your code here
    // Hint: `${greeting}, ${name}!`
}

console.log("Function best practices:");
console.log("User score:", calculateUserScore(85, 100));
console.log("Validation result:", validateUserInput("hello"));
console.log("Greeting:", greetUser("John"));
console.log("Custom greeting:", greetUser("Jane", "Hi"));

// Exercise 4: Error Handling
console.log("\n4. Error Handling:");
// TODO: Create a function with proper error handling
function divideNumbers(a, b) {
    if (null) { // Your code here
        // Hint: typeof a !== 'number' || typeof b !== 'number'
        throw new Error("Both arguments must be numbers");
    }
    
    if (null) { // Your code here
        // Hint: b === 0
        throw new Error("Cannot divide by zero");
    }
    
    return null; // Your code here
    // Hint: a / b
}

// TODO: Use try-catch for error handling
try {
    let result = null; // Your code here
    // Hint: divideNumbers(10, 2)
    console.log("Division result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let result = null; // Your code here
    // Hint: divideNumbers(10, 0)
    console.log("Division result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 5: Code Organization
console.log("\n5. Code Organization:");
// TODO: Group related variables
let userInfo = {
    name: null, // Your code here
    // Hint: "John Doe"
    age: null, // Your code here
    // Hint: 25
    email: null // Your code here
    // Hint: "john@example.com"
};

let userSettings = {
    theme: null, // Your code here
    // Hint: "dark"
    language: null, // Your code here
    // Hint: "en"
    notifications: null // Your code here
    // Hint: true
};

console.log("Grouped data:");
console.log("User info:", userInfo);
console.log("User settings:", userSettings);

// Exercise 6: Comments and Documentation
console.log("\n6. Comments and Documentation:");
// TODO: Add meaningful comments
function calculateTax(income, taxRate) {
    // TODO: Add comment explaining the function
    // Hint: // Calculate tax based on income and tax rate
    
    if (null) { // Your code here
        // Hint: income < 0
        return 0;
    }
    
    return null; // Your code here
    // Hint: income * taxRate
}

// TODO: Add JSDoc-style comment
/**
 * TODO: Add JSDoc comment
 * Hint: 
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (0-1)
 * @returns {number} The total price including tax
 */
function calculateTotalPrice(price, taxRate) {
    let tax = null; // Your code here
    // Hint: calculateTax(price, taxRate)
    return null; // Your code here
    // Hint: price + tax
}

console.log("Documented functions:");
console.log("Tax calculation:", calculateTax(1000, 0.1));
console.log("Total price:", calculateTotalPrice(100, 0.08));

// Exercise 7: Performance Best Practices
console.log("\n7. Performance Best Practices:");
// TODO: Use efficient string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = null; // Your code here
// Hint: `${firstName} ${lastName}`

// TODO: Use efficient array operations
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = null; // Your code here
// Hint: numbers.map(n => n * 2)

// TODO: Use efficient object operations
let user = { name: "John", age: 25 };
let updatedUser = null; // Your code here
// Hint: { ...user, age: 26 }

console.log("Performance best practices:");
console.log("Full name:", fullName);
console.log("Doubled numbers:", doubledNumbers);
console.log("Updated user:", updatedUser);

// Exercise 8: Security Best Practices
console.log("\n8. Security Best Practices:");
// TODO: Sanitize user input
function sanitizeInput(input) {
    if (null) { // Your code here
        // Hint: typeof input !== 'string'
        return "";
    }
    
    return null; // Your code here
    // Hint: input.trim().toLowerCase()
}

// TODO: Validate user input
function validateEmail(email) {
    if (null) { // Your code here
        // Hint: !email
        return false;
    }
    
    let emailRegex = null; // Your code here
    // Hint: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return null; // Your code here
    // Hint: emailRegex.test(email)
}

console.log("Security best practices:");
console.log("Sanitized input:", sanitizeInput("  HELLO  "));
console.log("Valid email:", validateEmail("john@example.com"));
console.log("Invalid email:", validateEmail("invalid-email"));

// Exercise 9: Code Readability
console.log("\n9. Code Readability:");
// TODO: Use meaningful function names
function isUserEligibleForDiscount(user) {
    return null; // Your code here
    // Hint: user.age >= 65 || user.isStudent
}

function formatCurrency(amount) {
    return null; // Your code here
    // Hint: `$${amount.toFixed(2)}`
}

// TODO: Use meaningful variable names
let userEligibility = null; // Your code here
// Hint: isUserEligibleForDiscount({ age: 70, isStudent: false })

let formattedPrice = null; // Your code here
// Hint: formatCurrency(123.45)

console.log("Code readability:");
console.log("User eligibility:", userEligibility);
console.log("Formatted price:", formattedPrice);

// Exercise 10: Testing Best Practices
console.log("\n10. Testing Best Practices:");
// TODO: Create testable functions
function addNumbers(a, b) {
    if (null) { // Your code here
        // Hint: typeof a !== 'number' || typeof b !== 'number'
        throw new Error("Both arguments must be numbers");
    }
    
    return null; // Your code here
    // Hint: a + b
}

// TODO: Create test cases
function runTests() {
    let tests = [
        { name: "Add positive numbers", input: [2, 3], expected: 5 },
        { name: "Add negative numbers", input: [-2, -3], expected: -5 },
        { name: "Add zero", input: [0, 5], expected: 5 }
    ];
    
    tests.forEach(test => {
        try {
            let result = null; // Your code here
            // Hint: addNumbers(...test.input)
            let passed = null; // Your code here
            // Hint: result === test.expected
            console.log(`${test.name}: ${passed ? 'PASS' : 'FAIL'}`);
        } catch (error) {
            console.log(`${test.name}: ERROR - ${error.message}`);
        }
    });
}

runTests();

// Exercise 11: Modern JavaScript Features
console.log("\n11. Modern JavaScript Features:");
// TODO: Use destructuring
let person = { name: "John", age: 25, city: "New York" };
let { name, age, city } = null; // Your code here
// Hint: person

// TODO: Use spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = null; // Your code here
// Hint: [...arr1, ...arr2]

// TODO: Use arrow functions
let multiply = null; // Your code here
// Hint: (a, b) => a * b

// TODO: Use template literals
let message = null; // Your code here
// Hint: `Hello, ${name}! You are ${age} years old.`

console.log("Modern JavaScript features:");
console.log("Destructured values:", { name, age, city });
console.log("Combined array:", combinedArray);
console.log("Multiply result:", multiply(3, 4));
console.log("Message:", message);

// Exercise 12: Code Review Checklist
console.log("\n12. Code Review Checklist:");
// TODO: Create a function that follows all best practices
function processUserData(userData) {
    // TODO: Add input validation
    if (null) { // Your code here
        // Hint: !userData || typeof userData !== 'object'
        throw new Error("User data is required and must be an object");
    }
    
    // TODO: Add required field validation
    if (null) { // Your code here
        // Hint: !userData.name
        throw new Error("User name is required");
    }
    
    if (null) { // Your code here
        // Hint: !userData.email
        throw new Error("User email is required");
    }
    
    // TODO: Add email validation
    let emailRegex = null; // Your code here
    // Hint: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (null) { // Your code here
        // Hint: !emailRegex.test(userData.email)
        throw new Error("Invalid email format");
    }
    
    // TODO: Process and return data
    return {
        id: null, // Your code here
        // Hint: Date.now()
        name: null, // Your code here
        // Hint: userData.name.trim()
        email: null, // Your code here
        // Hint: userData.email.toLowerCase()
        processedAt: null // Your code here
        // Hint: new Date().toISOString()
    };
}

try {
    let userData = { name: "  John Doe  ", email: "JOHN@EXAMPLE.COM" };
    let processedUser = null; // Your code here
    // Hint: processUserData(userData)
    console.log("Processed user:", processedUser);
} catch (error) {
    console.log("Error processing user:", error.message);
}

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced best practices.");
console.log("Key concepts practiced:");
console.log("- Descriptive variable and function names");
console.log("- Proper use of const vs let");
console.log("- Function best practices and early returns");
console.log("- Error handling with try-catch");
console.log("- Code organization and grouping");
console.log("- Meaningful comments and documentation");
console.log("- Performance optimization techniques");
console.log("- Security best practices");
console.log("- Code readability improvements");
console.log("- Testing best practices");
console.log("- Modern JavaScript features");
console.log("- Code review checklist");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Apply these best practices to your own code");
console.log("3. Practice writing clean, readable code");
console.log("4. Ask questions if you need help");
