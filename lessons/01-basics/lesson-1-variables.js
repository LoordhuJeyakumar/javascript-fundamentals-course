// Lesson 1: Variables
// This file teaches variable declaration, scoping, and best practices

console.log("⚡ Welcome to JavaScript Basics Lesson 1: Variables!");
console.log("=================================================");

// 1. Variable Declaration
console.log("\n📚 1. Variable Declaration");
console.log("-------------------------");

console.log("JavaScript has three ways to declare variables:");
console.log("1. var - Function-scoped, can be redeclared");
console.log("2. let - Block-scoped, cannot be redeclared");
console.log("3. const - Block-scoped, cannot be reassigned");

// Using var
var varVariable = "I'm a var variable";
console.log("var variable:", varVariable);

// Using let
let letVariable = "I'm a let variable";
console.log("let variable:", letVariable);

// Using const
const constVariable = "I'm a const variable";
console.log("const variable:", constVariable);

// 2. Variable Assignment and Reassignment
console.log("\n📚 2. Variable Assignment and Reassignment");
console.log("----------------------------------------");

// Initial assignment
let name = "John";
console.log("Initial name:", name);

let city; // variable declaration
console.log("City:", city);
city = "New York"; // variable assignment
console.log("City:", city);

city = "Los Angeles"; // variable reassignment
console.log("City:", city);


name = "Jane";
console.log("Reassigned name:", name);

// Const cannot be reassigned
const age = 25;
console.log("Const age:", age);
// age = 26; // This would cause an error

// 3. Variable Scoping
console.log("\n📚 3. Variable Scoping");
console.log("--------------------");

// Global scope
var globalVar = "I'm global";
let globalLet = "I'm global let";
const globalConst = "I'm global const";

function demonstrateScoping() {
    // Function scope
    var functionVar = "I'm function-scoped";
    let functionLet = "I'm block-scoped";
    const functionConst = "I'm block-scoped";
    
    console.log("Inside function:");
    console.log("Global var:", globalVar);
    console.log("Global let:", globalLet);
    console.log("Global const:", globalConst);
    console.log("Function var:", functionVar);
    console.log("Function let:", functionLet);
    console.log("Function const:", functionConst);
    
    // Block scope demonstration
    if (true) {
        var blockVar = "I'm block-scoped var";
        let blockLet = "I'm block-scoped let";
        const blockConst = "I'm block-scoped const";
        
        console.log("Inside block:");
        console.log("Block var:", blockVar);
        console.log("Block let:", blockLet);
        console.log("Block const:", blockConst);
    }
    
    // var is accessible outside the block
    console.log("Block var outside block:", blockVar);
    // let and const are not accessible outside the block
    // console.log("Block let outside block:", blockLet); // Error
    // console.log("Block const outside block:", blockConst); // Error
}

console.log("Outside function:");
console.log("Funtion Var", functionVar);


demonstrateScoping();


// 4. Hoisting
console.log("\n📚 4. Hoisting");
console.log("-------------");

console.log("Hoisting behavior:");
console.log("var: Hoisted and initialized with undefined");
console.log("let/const: Hoisted but not initialized (Temporal Dead Zone)");

// var hoisting
console.log("var before declaration:", hoistedVar); // undefined
var hoistedVar = "I'm hoisted";
console.log("var after declaration:", hoistedVar);

// let hoisting (Temporal Dead Zone)
 console.log("let before declaration:", hoistedLet); // ReferenceError
// let hoistedLet = "I'm hoisted but not initialized";
console.log("let after declaration:", hoistedLet);

// 5. Variable Naming Conventions
console.log("\n📚 5. Variable Naming Conventions");
console.log("-------------------------------");

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
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";

console.log("Good naming examples:");
console.log("userName:", userName);
console.log("userAge:", userAge);
console.log("isLoggedIn:", isLoggedIn);
console.log("MAX_RETRY_ATTEMPTS:", MAX_RETRY_ATTEMPTS);
console.log("API_BASE_URL:", API_BASE_URL);

// 6. Variable Types and Values
console.log("\n📚 6. Variable Types and Values");
console.log("------------------------------");

// Different data types
let stringVar = "Hello, World!";
let numberVar = 42;// 0.1, 1e10, 1.23e-10, 0b1010, 0o123, 0x1A
let booleanVar = true; // true, false
let nullVar = null; 
let undefinedVar = undefined;
let objectVar = { "name": "John", "age": 30 };
let arrayVar = [1, 2, 3, 4, 5];

console.log("Different variable types:");
console.log("String:", stringVar, typeof stringVar);
console.log("Number:", numberVar, typeof numberVar);
console.log("Boolean:", booleanVar, typeof booleanVar);
console.log("Null:", nullVar, typeof nullVar);
console.log("Undefined:", undefinedVar, typeof undefinedVar);
console.log("Object:", objectVar, typeof objectVar);
console.log("Array:", arrayVar, typeof arrayVar);

// 7. Variable Declaration Patterns
console.log("\n📚 7. Variable Declaration Patterns");
console.log("----------------------------------");

// Multiple variable declaration
let a = 1, b = 2, c = 3;

// let a = 1;
// let b = 2;
// let c = 3;

console.log("Multiple variables:", a, b, c);

// Destructuring assignment
let [x, y, z] = [10, 20, 30];
console.log("Destructured variables:", x, y, z);

// Object destructuring
let { firstName, lastName } = { firstName: "John", lastName: "Doe" };
console.log("Object destructuring:", firstName, lastName);

// 8. Variable Shadowing => when a variable with the same name is declared in a inner scope, it shadows the outer scope variable => use let instead of var to avoid this


console.log("\n📚 8. Variable Shadowing");
console.log("----------------------");

let shadowVar = "I'm the outer variable";
function demonstrateShadowing() {
    let shadowVar = "I'm the inner variable";
    console.log("Inner shadowVar:", shadowVar);
}

demonstrateShadowing();
console.log("Outer shadowVar:", shadowVar);

// 9. Variable Lifecycle
console.log("\n📚 9. Variable Lifecycle");
console.log("----------------------");

console.log("Variable lifecycle phases:");
console.log("1. Declaration - Variable is declared");
console.log("2. Initialization - Variable is assigned a value");
console.log("3. Assignment - Variable is reassigned");
console.log("4. Destruction - Variable goes out of scope");

function demonstrateLifecycle() {
    console.log("Phase 1: Declaration");
    let lifecycleVar;
    
    console.log("Phase 2: Initialization");
    lifecycleVar = "Initial value";
    console.log("Initialized:", lifecycleVar);
    
    console.log("Phase 3: Assignment");
    lifecycleVar = "New value";
    console.log("Reassigned:", lifecycleVar);
    
    console.log("Phase 4: Destruction (when function ends)");
}

demonstrateLifecycle();

// 10. Common Variable Mistakes
console.log("\n📚 10. Common Variable Mistakes");
console.log("-------------------------------");

console.log("Common mistakes to avoid:");
console.log("1. Using var instead of let/const");
console.log("2. Not declaring variables (creates global variables)");
console.log("3. Using reserved keywords as variable names");
console.log("4. Not initializing variables");
console.log("5. Confusing == and ===");

// Example of common mistake
function commonMistake() {
    // Don't do this - creates global variable
    // undeclaredVar = "I'm global";
    
    // Do this instead
    let declaredVar = "I'm properly declared";
    console.log("Properly declared:", declaredVar);
}

commonMistake();

// 11. Modern JavaScript Variable Features
console.log("\n📚 11. Modern JavaScript Variable Features");
console.log("----------------------------------------");

// Template literals = use backticks to create a string and use ${variable} to insert a variable into the string
let name2 = "John";
let templateVar = `Hello, ${name2}!`; // "hello," + name2 + "!"
console.log("Template literal:", templateVar);

// Computed property names
let propertyName = "dynamic";
let obj = {
    [propertyName]: "value"
};
console.log("Computed property:", obj);

// Default parameters
function greetUser(userName = "Guest") {
    return `Hello, ${userName}!`;
}

console.log("Default parameter:", greetUser());
console.log("With parameter:", greetUser("Alice"));

// 12. Variable Best Practices
console.log("\n📚 12. Variable Best Practices");
console.log("-----------------------------");

console.log("Best practices for variables:");
console.log("1. Use const by default, let when reassignment is needed");
console.log("2. Avoid var unless necessary");
console.log("3. Use descriptive variable names");
console.log("4. Initialize variables when declaring them");
console.log("5. Use camelCase for variable names");
console.log("6. Group related variables together");
console.log("7. Use meaningful names that describe purpose");

// Example of good practices
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 5000;

let currentUser = null;
let isAuthenticated = false;
let retryCount = 0;

function processUser(user) {
    if (user && user.name) {
        currentUser = user;
        isAuthenticated = true;
        retryCount = 0;
        return true;
    }
    return false;
}

console.log("Best practices example:");
console.log("MAX_USERS:", MAX_USERS);
console.log("DEFAULT_TIMEOUT:", DEFAULT_TIMEOUT);
console.log("currentUser:", currentUser);
console.log("isAuthenticated:", isAuthenticated);
console.log("retryCount:", retryCount);

// 13. Variable Scope Chain
console.log("\n📚 13. Variable Scope Chain");
console.log("--------------------------");

let globalScopeVar = "Global scope";

function outerFunction() {
    let outerScopeVar = "Outer function scope";
    
    function innerFunction() {
        let innerScopeVar = "Inner function scope";
        
        console.log("Scope chain access:");
        console.log("Inner scope:", innerScopeVar);
        console.log("Outer scope:", outerScopeVar);
        console.log("Global scope:", globalScopeVar);
    }
    
    innerFunction();
}

outerFunction();

// 14. Variable Memory Management
console.log("\n📚 14. Variable Memory Management");
console.log("--------------------------------");

console.log("Memory management considerations:");
console.log("1. Variables are automatically garbage collected");
console.log("2. Avoid memory leaks by not keeping unnecessary references");
console.log("3. Use const for values that don't change");
console.log("4. Be mindful of closure scope");

// Example of memory management
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

let counter = createCounter();
console.log("Counter example:");
console.log("Initial count:", counter.getCount());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());

// 15. Variable Debugging
console.log("\n📚 15. Variable Debugging");
console.log("------------------------");

console.log("Debugging variables:");
console.log("1. Use console.log() to inspect variable values");
console.log("2. Use typeof to check variable types");
console.log("3. Use debugger statement to pause execution");
console.log("4. Check variable scope and hoisting");

let debugVar = "Debug me";
console.log("Debug variable:", debugVar);
console.log("Debug variable type:", typeof debugVar);
console.log("Debug variable length:", debugVar.length);

// Debugging function
function debugVariables() {
    let localVar = "Local variable";
    console.log("Local variable:", localVar);
    console.log("Local variable type:", typeof localVar);
    
    // Uncomment to pause execution
    // debugger;
}

debugVariables();

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use let and const instead of var");
console.log("- Understand variable scoping (global, function, block)");
console.log("- Be aware of hoisting behavior");
console.log("- Use descriptive variable names");
console.log("- Initialize variables when declaring them");
console.log("- Follow JavaScript naming conventions");
console.log("- Understand variable lifecycle and memory management");

console.log("\n📝 Practice Exercises:");
console.log("1. Declare variables with different data types");
console.log("2. Practice variable scoping with nested functions");
console.log("3. Use destructuring assignment");
console.log("4. Implement variable naming conventions");
console.log("5. Debug variable-related issues");
