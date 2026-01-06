// Exercise 6: Advanced Function Concepts
// Practice with advanced function features and patterns

console.log("💪 Exercise 6: Advanced Function Concepts");
console.log("=======================================");

// Exercise 1: Create a generator function
console.log("\n1. Generator Function:");
// TODO: Create a generator function called fibonacciGenerator that:
// - Generates Fibonacci numbers
// - Takes a limit parameter
// - Yields each Fibonacci number up to the limit
// - Use yield to return values
// Hint: function* fibonacciGenerator(limit) { ... }

function* fibonacciGenerator(limit) {
    // Your code here
}

// Test your function
console.log("Fibonacci numbers up to 100:");
for (let num of fibonacciGenerator(100)) {
    console.log(num);
}

// Exercise 2: Create a function with method binding
console.log("\n2. Method Binding:");
// TODO: Create an object with methods and demonstrate binding
// - Create an object called calculator with methods: add, subtract, multiply, divide
// - Create a function called demonstrateBinding that shows how 'this' context changes
// - Use bind, call, and apply to change the context
// Hint: Use this.add, this.subtract, etc.

let calculator = {
    // Your code here
};

function demonstrateBinding() {
    // Your code here
}

// Test your function
demonstrateBinding();

// Exercise 3: Create a function with currying
console.log("\n3. Currying Function:");
// TODO: Create a curried function called curriedAdd that:
// - Takes one parameter at a time
// - Returns a function until all parameters are provided
// - Then returns the final result
// - Support any number of parameters
// Hint: Use closure to store accumulated parameters

function curriedAdd(...args) {
    // Your code here
}

// Test your function
let add5 = curriedAdd(5);
let add5And3 = add5(3);
let add5And3And2 = add5And3(2);
console.log("Curried add result:", add5And3And2);

// Exercise 4: Create a function with partial application
console.log("\n4. Partial Application Function:");
// TODO: Create a function called partial that:
// - Takes a function and some arguments
// - Returns a new function with those arguments pre-filled
// - The returned function should accept the remaining arguments
// Hint: Use bind or closure to pre-fill arguments

function partial(func, ...args) {
    // Your code here
}

// Test your function
let multiply = (a, b, c) => a * b * c;
let multiplyBy2And3 = partial(multiply, 2, 3);
console.log("Partial application result:", multiplyBy2And3(4));

// Exercise 5: Create a function with function overloading simulation
console.log("\n5. Function Overloading Simulation:");
// TODO: Create a function called overloadedFunction that:
// - Behaves differently based on the number and types of arguments
// - If one number: return the number squared
// - If two numbers: return their sum
// - If one string: return the string length
// - If two strings: return their concatenation
// - If one array: return the array length
// - If two arrays: return their concatenation
// Hint: Use arguments object and typeof checks

function overloadedFunction() {
    // Your code here
}

// Test your function
console.log("One number:", overloadedFunction(5));
console.log("Two numbers:", overloadedFunction(3, 4));
console.log("One string:", overloadedFunction("hello"));
console.log("Two strings:", overloadedFunction("hello", "world"));
console.log("One array:", overloadedFunction([1, 2, 3]));
console.log("Two arrays:", overloadedFunction([1, 2], [3, 4]));

// Exercise 6: Create a function with lazy evaluation
console.log("\n6. Lazy Evaluation Function:");
// TODO: Create a function called lazyEvaluate that:
// - Takes a function as parameter
// - Returns a lazy version that only executes when called
// - The lazy function should cache the result after first execution
// - Log when the function is actually executed
// Hint: Use a flag to track if the function has been executed

function lazyEvaluate(func) {
    // Your code here
}

// Test your function
let expensiveComputation = () => {
    console.log("Performing expensive computation...");
    return Math.random() * 1000;
};

let lazyExpensive = lazyEvaluate(expensiveComputation);
console.log("First call:", lazyExpensive());
console.log("Second call:", lazyExpensive());
console.log("Third call:", lazyExpensive());

// Exercise 7: Create a function with function chaining
console.log("\n7. Function Chaining:");
// TODO: Create a function that returns an object with chainable methods
// - Create a function called createChainable that returns an object
// - The object should have methods: add, subtract, multiply, divide, value
// - Each method should return the object itself for chaining
// - The value method should return the current result
// Hint: Store the current value and return this from each method

function createChainable(initialValue = 0) {
    // Your code here
}

// Test your function
let chain = createChainable(10);
let result = chain.add(5).multiply(2).subtract(3).divide(2).value();
console.log("Chained result:", result);

// Exercise 8: Create a function with function decorators
console.log("\n8. Function Decorators:");
// TODO: Create a function called createDecorator that:
// - Takes a decorator function and a target function
// - Returns a new function that applies the decorator
// - The decorator should receive the original function and arguments
// - Support multiple decorators
// Hint: Use function composition to apply decorators

function createDecorator(decorator, target) {
    // Your code here
}

// Test your function
let loggingDecorator = (func, ...args) => {
    console.log(`Calling function with args: ${args}`);
    const result = func(...args);
    console.log(`Function returned: ${result}`);
    return result;
};

let timingDecorator = (func, ...args) => {
    const start = Date.now();
    const result = func(...args);
    const end = Date.now();
    console.log(`Function took ${end - start}ms`);
    return result;
};

let add = (a, b) => a + b;
let decoratedAdd = createDecorator(loggingDecorator, add);
let doubleDecoratedAdd = createDecorator(timingDecorator, decoratedAdd);

console.log("Decorated add result:", doubleDecoratedAdd(3, 4));

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced advanced function concepts.");
console.log("Key concepts practiced:");
console.log("- Generator functions");
console.log("- Method binding");
console.log("- Currying");
console.log("- Partial application");
console.log("- Function overloading");
console.log("- Lazy evaluation");
console.log("- Function chaining");
console.log("- Function decorators");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Functions assignments");
console.log("4. Ask questions if you need help");
