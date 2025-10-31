// Lesson 2: Function Types and Modern Syntax
// This file teaches different ways to create functions in JavaScript

console.log("🚀 Welcome to Functions Lesson 2: Function Types!");
console.log("================================================");

// 1. Function Expressions
console.log("\n📚 1. Function Expressions");
console.log("-------------------------");

console.log("Function expressions are functions stored in variables:");
console.log("const functionName = function(parameters) { ... }");

// Basic function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log("Function expression example:");
console.log("const greet = function(name) { return `Hello, ${name}!`; }");
console.log("Result:", greet("Alice"));

// 2. Arrow Functions (ES6)
console.log("\n📚 2. Arrow Functions (ES6)");
console.log("--------------------------");

console.log("Arrow functions are a shorter way to write functions:");
console.log("const functionName = (parameters) => { ... }");

// Basic arrow function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

console.log("Arrow function example:");
console.log("const greetArrow = (name) => { return `Hello, ${name}!`; }");
console.log("Result:", greetArrow("Bob"));

// Arrow function with single parameter (no parentheses needed)
const greetSimple = name => `Hello, ${name}!`;

console.log("Simplified arrow function:");
console.log("const greetSimple = name => `Hello, ${name}!`;");
console.log("Result:", greetSimple("Charlie"));

// Arrow function with multiple parameters
const add = (a, b) => a + b;

console.log("Arrow function with multiple parameters:");
console.log("const add = (a, b) => a + b;");
console.log("Result of add(5, 3):", add(5, 3));

// 3. Anonymous Functions
console.log("\n📚 3. Anonymous Functions");
console.log("------------------------");

console.log("Anonymous functions are functions without names:");
console.log("They are often used as callbacks or immediately invoked");

// Anonymous function as callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Anonymous function as callback:");
console.log("numbers.map(function(num) { return num * 2; })");
console.log("Original array:", numbers);
console.log("Doubled array:", doubled);

// Anonymous function with arrow syntax
const tripled = numbers.map(num => num * 3);

console.log("Anonymous arrow function:");
console.log("numbers.map(num => num * 3)");
console.log("Tripled array:", tripled);

// 4. Immediately Invoked Function Expressions (IIFE)
console.log("\n📚 4. Immediately Invoked Function Expressions (IIFE)");
console.log("--------------------------------------------------");

console.log("IIFE runs immediately when defined:");
console.log("(function() { ... })()");

// Basic IIFE
(function() {
    console.log("This IIFE runs immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello from IIFE, ${name}!`);
})("David");

// IIFE that returns a value
const result = (function(a, b) {
    return a * b;
})(4, 5);

console.log("IIFE that returns a value:");
console.log("const result = (function(a, b) { return a * b; })(4, 5);");
console.log("Result:", result);

// 5. Function Hoisting Differences
console.log("\n📚 5. Function Hoisting Differences");
console.log("----------------------------------");

console.log("Function declarations are hoisted (can be called before definition)");
console.log("Function expressions and arrow functions are NOT hoisted");

// This works because of hoisting
console.log("Calling hoisted function before definition:");
console.log("Result:", hoistedFunction());

function hoistedFunction() {
    return "I was hoisted!";
}

// This would cause an error (commented out to prevent error)
// console.log("Calling function expression before definition:");
// console.log("Result:", notHoistedFunction()); // ReferenceError!

const notHoistedFunction = function() {
    return "I am not hoisted!";
};

console.log("Calling function expression after definition:");
console.log("Result:", notHoistedFunction());

// 6. When to Use Each Type
console.log("\n📚 6. When to Use Each Type");
console.log("--------------------------");

console.log("Function Declarations:");
console.log("- When you need hoisting");
console.log("- For main functions in your code");
console.log("- When you want clear, readable function names");

console.log("\nFunction Expressions:");
console.log("- When you need conditional function creation");
console.log("- When passing functions as arguments");
console.log("- When you want to assign different functions to the same variable");

console.log("\nArrow Functions:");
console.log("- For short, simple functions");
console.log("- In array methods (map, filter, reduce)");
console.log("- When you want to preserve 'this' context");
console.log("- For callback functions");

console.log("\nAnonymous Functions:");
console.log("- As callbacks");
console.log("- In event handlers");
console.log("- When the function is only used once");

console.log("\nIIFE:");
console.log("- To create a private scope");
console.log("- To avoid polluting global namespace");
console.log("- For initialization code that runs once");

// 7. Practical Examples
console.log("\n📚 7. Practical Examples");
console.log("----------------------");

// Example 1: Calculator with different function types
console.log("Example 1: Calculator Functions");

// Function declaration
function multiply(a, b) {
    return a * b;
}

// Function expression
const divide = function(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Arrow function
const power = (base, exp) => Math.pow(base, exp);

console.log("multiply(4, 5):", multiply(4, 5));
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(10, 0):", divide(10, 0));
console.log("power(2, 3):", power(2, 3));

// Example 2: Array processing with different function types
console.log("\nExample 2: Array Processing");

const scores = [85, 92, 78, 96, 88, 91];

// Using function declaration
function isHighScore(score) {
    return score >= 90;
}

const highScores = scores.filter(isHighScore);
console.log("High scores (>=90):", highScores);

// Using arrow function
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", average.toFixed(2));

// Using anonymous function
const letterGrades = scores.map(function(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'F';
});

console.log("Letter grades:", letterGrades);

// Example 3: Event handling simulation
console.log("\nExample 3: Event Handling Simulation");

// Simulating button click handlers
const buttonHandlers = {
    // Function expression
    primary: function() {
        console.log("Primary button clicked!");
    },
    
    // Arrow function
    secondary: () => {
        console.log("Secondary button clicked!");
    },
    
    // Method (function as object property)
    danger() {
        console.log("Danger button clicked!");
    }
};

// Simulate button clicks
console.log("Simulating button clicks:");
buttonHandlers.primary();
buttonHandlers.secondary();
buttonHandlers.danger();

// 8. Common Mistakes and Best Practices
console.log("\n📚 8. Common Mistakes and Best Practices");
console.log("--------------------------------------");

console.log("❌ Common Mistakes:");
console.log("1. Using arrow functions for object methods (loses 'this')");
console.log("2. Forgetting parentheses in arrow functions with multiple parameters");
console.log("3. Trying to call function expressions before they're defined");

console.log("\n✅ Best Practices:");
console.log("1. Use function declarations for main functions");
console.log("2. Use arrow functions for short, simple operations");
console.log("3. Use function expressions when you need conditional creation");
console.log("4. Use IIFE for initialization code");
console.log("5. Choose the right tool for the job");

// 9. Summary
console.log("\n📚 9. Summary");
console.log("-------------");

console.log("You've learned about:");
console.log("✅ Function expressions - functions stored in variables");
console.log("✅ Arrow functions - shorter syntax for simple functions");
console.log("✅ Anonymous functions - functions without names");
console.log("✅ IIFE - immediately invoked function expressions");
console.log("✅ Hoisting differences between function types");
console.log("✅ When to use each function type");
console.log("✅ Common mistakes and best practices");

console.log("\n🎉 Congratulations! You now understand different function types in JavaScript!");
console.log("Next lesson: Advanced function concepts like higher-order functions and closures.");
