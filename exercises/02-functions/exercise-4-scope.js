// Exercise 4: Function Scope
// Practice with function scope and closures

console.log("💪 Exercise 4: Function Scope");
console.log("============================");

// Exercise 1: Understand global vs local scope
console.log("\n1. Global vs Local Scope:");
// TODO: Create a function called demonstrateScope that:
// - Declares a local variable called 'localVar' with value "I'm local"
// - Logs both a global variable and the local variable
// - Returns the local variable
// Hint: Use let or const for local variables

let globalVar = "I'm global";

function demonstrateScope() {
    // Your code here
}

// Test your function
console.log("Global var before function:", globalVar);
let result = demonstrateScope();
console.log("Function result:", result);
console.log("Global var after function:", globalVar);

// Exercise 2: Create a function with block scope
console.log("\n2. Block Scope Function:");
// TODO: Create a function called demonstrateBlockScope that:
// - Uses if statement to create a block
// - Declares variables with let, const, and var inside the block
// - Shows the difference between var and let/const scope
// - Returns an object with the variables
// Hint: Use if (true) to create a block

function demonstrateBlockScope() {
    // Your code here
}

// Test your function
console.log("Block scope demonstration:", demonstrateBlockScope());

// Exercise 3: Create a closure function
console.log("\n3. Closure Function:");
// TODO: Create a function called createCounter that:
// - Takes an initial value as parameter
// - Returns an object with methods: increment, decrement, getValue
// - Each method should modify and return the current value
// - The value should be private (not accessible from outside)
// Hint: Use closure to keep the value private

function createCounter(initialValue = 0) {
    // Your code here
}

// Test your function
let counter1 = createCounter(10);
let counter2 = createCounter(5);

console.log("Counter 1 initial:", counter1.getValue());
console.log("Counter 1 increment:", counter1.increment());
console.log("Counter 1 increment:", counter1.increment());
console.log("Counter 1 decrement:", counter1.decrement());

console.log("Counter 2 initial:", counter2.getValue());
console.log("Counter 2 increment:", counter2.increment());

// Exercise 4: Create a function with nested scope
console.log("\n4. Nested Scope Function:");
// TODO: Create a function called nestedScopeDemo that:
// - Declares a variable in the outer function
// - Creates an inner function that uses the outer variable
// - Returns the inner function
// - The inner function should modify the outer variable
// Hint: Use function inside function

function nestedScopeDemo() {
    // Your code here
}

// Test your function
let innerFunc = nestedScopeDemo();
console.log("First call:", innerFunc());
console.log("Second call:", innerFunc());
console.log("Third call:", innerFunc());

// Exercise 5: Create a function with parameter scope
console.log("\n5. Parameter Scope Function:");
// TODO: Create a function called parameterScopeDemo that:
// - Takes a parameter with the same name as a global variable
// - Shows how parameters shadow global variables
// - Returns both the parameter and global variable values
// Hint: Use this.globalVar or window.globalVar to access global

let globalParam = "Global parameter";

function parameterScopeDemo(globalParam) {
    // Your code here
}

// Test your function
console.log("Parameter scope demo:", parameterScopeDemo("Local parameter"));

// Exercise 6: Create a function with lexical scope
console.log("\n6. Lexical Scope Function:");
// TODO: Create a function called lexicalScopeDemo that:
// - Declares a variable in the outer scope
// - Creates multiple inner functions that reference the outer variable
// - Returns an object with all inner functions
// - Each inner function should modify the same outer variable
// Hint: Use arrow functions or regular functions

function lexicalScopeDemo() {
    // Your code here
}

// Test your function
let scopeObj = lexicalScopeDemo();
console.log("Add 5:", scopeObj.add(5));
console.log("Subtract 3:", scopeObj.subtract(3));
console.log("Multiply by 2:", scopeObj.multiply(2));
console.log("Get value:", scopeObj.getValue());

// Exercise 7: Create a function with hoisting demonstration
console.log("\n7. Hoisting Demonstration:");
// TODO: Create a function called hoistingDemo that:
// - Uses variables declared with var, let, and const
// - Shows the difference in hoisting behavior
// - Returns an object with the values
// Hint: Use variables before they are declared

function hoistingDemo() {
    // Your code here
}

// Test your function
console.log("Hoisting demo:", hoistingDemo());

// Exercise 8: Create a function with scope chain
console.log("\n8. Scope Chain Function:");
// TODO: Create a function called scopeChainDemo that:
// - Creates multiple levels of nested functions
// - Each level declares a variable with the same name
// - Shows how the scope chain works
// - Returns the innermost function
// Hint: Use multiple levels of nesting

function scopeChainDemo() {
    // Your code here
}

// Test your function
let innermost = scopeChainDemo();
console.log("Innermost function result:", innermost());

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced function scope.");
console.log("Key concepts practiced:");
console.log("- Global vs local scope");
console.log("- Block scope with let/const");
console.log("- Closures and private variables");
console.log("- Nested function scope");
console.log("- Parameter scope and shadowing");
console.log("- Lexical scope");
console.log("- Variable hoisting");
console.log("- Scope chain");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Higher-Order Functions");
console.log("4. Ask questions if you need help");
