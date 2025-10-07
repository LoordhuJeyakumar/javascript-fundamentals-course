// Lesson 6: Best Practices
// This file teaches JavaScript best practices and common pitfalls

console.log("⚡ Welcome to JavaScript Basics Lesson 6: Best Practices!");
console.log("=======================================================");

// 1. Variable Naming Conventions
console.log("\n📚 1. Variable Naming Conventions");
console.log("--------------------------------");

console.log("JavaScript naming conventions:");
console.log("1. Use camelCase for variables and functions");
console.log("2. Use PascalCase for constructors and classes");
console.log("3. Use UPPER_SNAKE_CASE for constants");
console.log("4. Use descriptive names");
console.log("5. Avoid reserved keywords");

// Good naming examples
let userName = "john_doe";
let userAge = 25;
let isLoggedIn = true;
let userEmail = "john@example.com";
let userPreferences = { theme: "dark", language: "en" };

// Constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;

// Functions
function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

function validateUserInput(input) {
    return input && input.trim().length > 0;
}

// Classes
class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(user) {
        this.users.push(user);
    }
}

console.log("Good naming examples:");
console.log("userName:", userName);
console.log("userAge:", userAge);
console.log("isLoggedIn:", isLoggedIn);
console.log("MAX_RETRY_ATTEMPTS:", MAX_RETRY_ATTEMPTS);
console.log("API_BASE_URL:", API_BASE_URL);

// 2. Code Organization and Structure
console.log("\n📚 2. Code Organization and Structure");
console.log("-----------------------------------");

console.log("Best practices for code organization:");
console.log("1. Group related code together");
console.log("2. Use consistent indentation");
console.log("3. Add comments for complex logic");
console.log("4. Use meaningful function names");
console.log("5. Keep functions small and focused");

// Example of well-organized code
class Calculator {
    constructor() {
        this.history = [];
    }
    
    // Addition method
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        
        let result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }
    
    // Subtraction method
    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        
        let result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }
    
    // Get calculation history
    getHistory() {
        return this.history;
    }
    
    // Clear history
    clearHistory() {
        this.history = [];
    }
}

let calc = new Calculator();
console.log("Calculator example:");
console.log("5 + 3 =", calc.add(5, 3));
console.log("10 - 4 =", calc.subtract(10, 4));
console.log("History:", calc.getHistory());

// 3. Performance Considerations
console.log("\n📚 3. Performance Considerations");
console.log("-------------------------------");

console.log("Performance best practices:");
console.log("1. Minimize DOM manipulation");
console.log("2. Use efficient loops");
console.log("3. Avoid unnecessary calculations");
console.log("4. Use appropriate data structures");
console.log("5. Cache frequently used values");

// Efficient loop example
function efficientLoop(array) {
    let sum = 0;
    let length = array.length; // Cache length
    
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }
    
    return sum;
}

// Inefficient loop example
function inefficientLoop(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) { // Recalculates length each iteration
        sum += array[i];
    }
    
    return sum;
}

let testArray = Array.from({ length: 1000000 }, (_, i) => i);

console.log("Performance test:");
let startTime = performance.now();
efficientLoop(testArray);
let endTime = performance.now();
console.log("Efficient loop:", (end - start).toFixed(2), "ms");

startTime = performance.now();
inefficientLoop(testArray);
end = performance.now();
console.log("Inefficient loop:", (end - start).toFixed(2), "ms");

// 4. Common Mistakes and How to Avoid Them
console.log("\n📚 4. Common Mistakes and How to Avoid Them");
console.log("----------------------------------------");

console.log("Common mistakes to avoid:");
console.log("1. Using var instead of let/const");
console.log("2. Not declaring variables");
console.log("3. Using == instead of ===");
console.log("4. Not handling errors");
console.log("5. Forgetting to return values");

// Mistake 1: Using var
console.log("Mistake 1: Using var instead of let/const");
// Don't do this
var oldVariable = "I'm old";
// Do this instead
let newVariable = "I'm new";
const constantVariable = "I'm constant";

// Mistake 2: Not declaring variables
console.log("Mistake 2: Not declaring variables");
// Don't do this
// undeclaredVariable = "I'm global";
// Do this instead
let declaredVariable = "I'm properly declared";

// Mistake 3: Using == instead of ===
console.log("Mistake 3: Using == instead of ===");
let num1 = 5;
let str1 = "5";

// Don't do this
console.log("5 == '5':", num1 == str1); // true (type coercion)
// Do this instead
console.log("5 === '5':", num1 === str1); // false (strict comparison)

// Mistake 4: Not handling errors
console.log("Mistake 4: Not handling errors");
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log("10 / 2 =", divide(10, 2));
    console.log("10 / 0 =", divide(10, 0));
} catch (error) {
    console.log("Error caught:", error.message);
}

// Mistake 5: Forgetting to return values
console.log("Mistake 5: Forgetting to return values");
function addNumbers(a, b) {
    // Don't forget to return
    return a + b;
}

function multiplyNumbers(a, b) {
    // This won't work
    a * b; // Missing return
}

console.log("addNumbers(5, 3):", addNumbers(5, 3));
console.log("multiplyNumbers(5, 3):", multiplyNumbers(5, 3)); // undefined

// 5. Modern JavaScript Features
console.log("\n📚 5. Modern JavaScript Features");
console.log("-------------------------------");

console.log("Modern JavaScript features to use:");
console.log("1. Template literals");
console.log("2. Destructuring assignment");
console.log("3. Arrow functions");
console.log("4. Default parameters");
console.log("5. Rest and spread operators");

// Template literals
let name = "John";
let age = 30;
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log("Template literal:", greeting);

// Destructuring assignment
let person = { firstName: "John", lastName: "Doe", age: 30 };
let { firstName, lastName, age: personAge } = person;
console.log("Destructuring:", firstName, lastName, personAge);

let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log("Array destructuring:", first, second, rest);

// Arrow functions
let add = (a, b) => a + b;
let square = x => x * x;
let greet = name => `Hello, ${name}!`;

console.log("Arrow functions:");
console.log("add(5, 3):", add(5, 3));
console.log("square(4):", square(4));
console.log("greet('Alice'):", greet('Alice'));

// Default parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("Default parameters:");
console.log("greetUser():", greetUser());
console.log("greetUser('John'):", greetUser('John'));
console.log("greetUser('Jane', 'Hi'):", greetUser('Jane', 'Hi'));

// Rest and spread operators
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];

console.log("Rest and spread:");
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
console.log("combined array:", combined);

// 6. Error Handling Best Practices
console.log("\n📚 6. Error Handling Best Practices");
console.log("-----------------------------------");

console.log("Error handling best practices:");
console.log("1. Use try-catch for error handling");
console.log("2. Provide meaningful error messages");
console.log("3. Handle specific error types");
console.log("4. Log errors for debugging");
console.log("5. Don't swallow errors silently");

// Error handling example
function processUserData(userData) {
    try {
        // Validate input
        if (!userData || typeof userData !== 'object') {
            throw new Error('User data must be an object');
        }
        
        if (!userData.name || typeof userData.name !== 'string') {
            throw new Error('User name is required and must be a string');
        }
        
        if (!userData.email || typeof userData.email !== 'string') {
            throw new Error('User email is required and must be a string');
        }
        
        // Process data
        let processedData = {
            name: userData.name.trim(),
            email: userData.email.toLowerCase(),
            id: generateId(),
            createdAt: new Date()
        };
        
        return processedData;
        
    } catch (error) {
        console.error('Error processing user data:', error.message);
        throw error;
    }
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Test error handling
try {
    let userData = { name: "John Doe", email: "JOHN@EXAMPLE.COM" };
    let processed = processUserData(userData);
    console.log("Processed user data:", processed);
} catch (error) {
    console.log("Error:", error.message);
}

// 7. Code Documentation
console.log("\n📚 7. Code Documentation");
console.log("----------------------");

console.log("Documentation best practices:");
console.log("1. Use JSDoc for function documentation");
console.log("2. Add comments for complex logic");
console.log("3. Document function parameters and return values");
console.log("4. Use meaningful variable names");
console.log("5. Keep comments up to date");

/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 * @throws {Error} If width or height is not a positive number
 */
function calculateRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Width and height must be numbers');
    }
    
    if (width <= 0 || height <= 0) {
        throw new Error('Width and height must be positive numbers');
    }
    
    return width * height;
}

/**
 * Formats a date string for display
 * @param {Date|string} date - The date to format
 * @param {string} format - The format to use ('short', 'long', 'iso')
 * @returns {string} The formatted date string
 */
function formatDate(date, format = 'short') {
    let dateObj = new Date(date);
    
    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
    }
    
    switch (format) {
        case 'short':
            return dateObj.toLocaleDateString();
        case 'long':
            return dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        case 'iso':
            return dateObj.toISOString();
        default:
            throw new Error('Invalid format specified');
    }
}

console.log("Documentation example:");
console.log("Rectangle area:", calculateRectangleArea(5, 3));
console.log("Formatted date:", formatDate(new Date(), 'long'));

// 8. Testing Best Practices
console.log("\n📚 8. Testing Best Practices");
console.log("--------------------------");

console.log("Testing best practices:");
console.log("1. Write tests for all functions");
console.log("2. Test edge cases and error conditions");
console.log("3. Use descriptive test names");
console.log("4. Keep tests simple and focused");
console.log("5. Test both success and failure scenarios");

// Simple testing framework
function test(description, testFunction) {
    try {
        testFunction();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}: ${error.message}`);
    }
}

function expect(actual) {
    return {
        toBe: function(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected}, but got ${actual}`);
            }
        },
        toThrow: function() {
            try {
                actual();
                throw new Error('Expected function to throw an error');
            } catch (error) {
                // Expected behavior
            }
        }
    };
}

// Test examples
test('add function should add two numbers', function() {
    expect(add(2, 3)).toBe(5);
});

test('add function should handle negative numbers', function() {
    expect(add(-2, 3)).toBe(1);
});

test('divide function should throw error for division by zero', function() {
    expect(() => divide(10, 0)).toThrow();
});

// 9. Code Review Best Practices
console.log("\n📚 9. Code Review Best Practices");
console.log("-------------------------------");

console.log("Code review best practices:");
console.log("1. Review code for correctness");
console.log("2. Check for performance issues");
console.log("3. Verify error handling");
console.log("4. Ensure code follows style guidelines");
console.log("5. Test the code thoroughly");

// Example of code that needs review
function processData(data) {
    let result = [];
    
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            result.push(data[i] * 2);
        }
    }
    
    return result;
}

// Improved version after code review
function processDataImproved(data) {
    // Validate input
    if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
    }
    
    // Use modern array methods
    return data
        .filter(item => typeof item === 'number' && item > 0)
        .map(item => item * 2);
}

console.log("Code review example:");
console.log("Original:", processData([1, 2, 3, -1, 0, 4]));
console.log("Improved:", processDataImproved([1, 2, 3, -1, 0, 4]));

// 10. Performance Optimization
console.log("\n📚 10. Performance Optimization");
console.log("-------------------------------");

console.log("Performance optimization techniques:");
console.log("1. Use efficient algorithms");
console.log("2. Minimize DOM manipulation");
console.log("3. Use appropriate data structures");
console.log("4. Cache frequently used values");
console.log("5. Avoid unnecessary calculations");

// Performance optimization example
class DataProcessor {
    constructor() {
        this.cache = new Map();
    }
    
    // Cache expensive calculations
    processExpensiveData(data) {
        let cacheKey = JSON.stringify(data);
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        let result = this.performExpensiveCalculation(data);
        this.cache.set(cacheKey, result);
        return result;
    }
    
    performExpensiveCalculation(data) {
        // Simulate expensive calculation
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i] * data[i];
        }
        return sum;
    }
    
    clearCache() {
        this.cache.clear();
    }
}

let processor = new DataProcessor();
let testData = [1, 2, 3, 4, 5];

console.log("Performance optimization example:");
let start = performance.now();
let result1 = processor.processExpensiveData(testData);
let end = performance.now();
console.log("First calculation:", result1, "Time:", (end - start).toFixed(2), "ms");

start = performance.now();
let result2 = processor.processExpensiveData(testData);
end = performance.now();
console.log("Cached calculation:", result2, "Time:", (end - start).toFixed(2), "ms");

// 11. Security Best Practices
console.log("\n📚 11. Security Best Practices");
console.log("-----------------------------");

console.log("Security best practices:");
console.log("1. Validate all input");
console.log("2. Sanitize user data");
console.log("3. Use HTTPS for sensitive data");
console.log("4. Avoid eval() and similar functions");
console.log("5. Keep dependencies updated");

// Input validation example
function validateAndSanitizeInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Remove potentially dangerous characters
    let sanitized = input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();
    
    if (sanitized.length === 0) {
        throw new Error('Input cannot be empty after sanitization');
    }
    
    return sanitized;
}

console.log("Security example:");
try {
    let userInput = "<script>alert('xss')</script>Hello World";
    let sanitized = validateAndSanitizeInput(userInput);
    console.log("Sanitized input:", sanitized);
} catch (error) {
    console.log("Validation error:", error.message);
}

// 12. Best Practices Summary
console.log("\n📚 12. Best Practices Summary");
console.log("----------------------------");

console.log("Summary of JavaScript best practices:");
console.log("1. Use modern JavaScript features");
console.log("2. Follow naming conventions");
console.log("3. Write clean, readable code");
console.log("4. Handle errors properly");
console.log("5. Document your code");
console.log("6. Write tests");
console.log("7. Optimize for performance");
console.log("8. Consider security");
console.log("9. Review code regularly");
console.log("10. Keep learning and improving");

// Example of well-written JavaScript code
class UserService {
    constructor() {
        this.users = new Map();
        this.nextId = 1;
    }
    
    /**
     * Creates a new user
     * @param {Object} userData - User data object
     * @returns {Object} Created user object
     * @throws {Error} If user data is invalid
     */
    createUser(userData) {
        try {
            this.validateUserData(userData);
            
            let user = {
                id: this.nextId++,
                name: userData.name.trim(),
                email: userData.email.toLowerCase().trim(),
                createdAt: new Date(),
                isActive: true
            };
            
            this.users.set(user.id, user);
            return user;
            
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw error;
        }
    }
    
    /**
     * Validates user data
     * @param {Object} userData - User data to validate
     * @throws {Error} If validation fails
     */
    validateUserData(userData) {
        if (!userData || typeof userData !== 'object') {
            throw new Error('User data must be an object');
        }
        
        if (!userData.name || typeof userData.name !== 'string' || userData.name.trim().length === 0) {
            throw new Error('Name is required and must be a non-empty string');
        }
        
        if (!userData.email || typeof userData.email !== 'string' || !userData.email.includes('@')) {
            throw new Error('Email is required and must be a valid email address');
        }
    }
    
    /**
     * Gets a user by ID
     * @param {number} id - User ID
     * @returns {Object|null} User object or null if not found
     */
    getUser(id) {
        if (typeof id !== 'number' || id <= 0) {
            throw new Error('ID must be a positive number');
        }
        
        return this.users.get(id) || null;
    }
    
    /**
     * Gets all users
     * @returns {Array} Array of user objects
     */
    getAllUsers() {
        return Array.from(this.users.values());
    }
}

// Test the UserService
let userService = new UserService();

try {
    let user = userService.createUser({
        name: "John Doe",
        email: "john@example.com"
    });
    
    console.log("Created user:", user);
    console.log("Retrieved user:", userService.getUser(user.id));
    console.log("All users:", userService.getAllUsers());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Follow JavaScript naming conventions");
console.log("- Organize code logically and consistently");
console.log("- Consider performance implications");
console.log("- Avoid common mistakes and pitfalls");
console.log("- Use modern JavaScript features");
console.log("- Handle errors properly");
console.log("- Document your code");
console.log("- Write tests for your functions");
console.log("- Review code regularly");
console.log("- Keep learning and improving");

console.log("\n📝 Practice Exercises:");
console.log("1. Apply naming conventions to your code");
console.log("2. Organize code into logical modules");
console.log("3. Implement error handling");
console.log("4. Write documentation for functions");
console.log("5. Create tests for your code");
