// Exercise 5: Higher-Order Functions
// Practice with functions that take or return other functions

console.log("💪 Exercise 5: Higher-Order Functions");
console.log("===================================");

// Exercise 1: Create a function that takes another function as parameter
console.log("\n1. Function as Parameter:");
// TODO: Create a function called processArray that:
// - Takes an array and a function as parameters
// - Applies the function to each element of the array
// - Returns a new array with the results
// - Logs the processing steps
// Hint: Use a loop to apply the function to each element

function processArray(array, processor) {
    // Your code here
}

// Test your function
let numbers = [1, 2, 3, 4, 5];
let doubled = processArray(numbers, x => x * 2);
let squared = processArray(numbers, x => x * x);
let stringified = processArray(numbers, x => `Number: ${x}`);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
console.log("Stringified:", stringified);

// Exercise 2: Create a function that returns a function
console.log("\n2. Function that Returns Function:");
// TODO: Create a function called createValidator that:
// - Takes a validation rule as parameter
// - Returns a function that validates input against the rule
// - The returned function should return true/false
// - Support rules: 'positive', 'negative', 'even', 'odd', 'string'
// Hint: Return different validation functions based on the rule

function createValidator(rule) {
    // Your code here
}

// Test your function
let positiveValidator = createValidator('positive');
let evenValidator = createValidator('even');
let stringValidator = createValidator('string');

console.log("Positive validator - 5:", positiveValidator(5));
console.log("Positive validator - -3:", positiveValidator(-3));
console.log("Even validator - 4:", evenValidator(4));
console.log("Even validator - 7:", evenValidator(7));
console.log("String validator - 'hello':", stringValidator('hello'));
console.log("String validator - 123:", stringValidator(123));

// Exercise 3: Create a function that combines two functions
console.log("\n3. Function Composition:");
// TODO: Create a function called compose that:
// - Takes two functions as parameters
// - Returns a new function that applies both functions
// - The returned function should apply the second function first, then the first
// - Log the composition steps
// Hint: Return a function that calls both functions in sequence

function compose(func1, func2) {
    // Your code here
}

// Test your function
let addOne = x => x + 1;
let multiplyByTwo = x => x * 2;
let composed = compose(addOne, multiplyByTwo);

console.log("Add one:", addOne(5));
console.log("Multiply by two:", multiplyByTwo(5));
console.log("Composed (multiply then add):", composed(5));

// Exercise 4: Create a function that creates a memoized version of another function
console.log("\n4. Memoization Function:");
// TODO: Create a function called memoize that:
// - Takes a function as parameter
// - Returns a memoized version of the function
// - The memoized function should cache results for the same inputs
// - Log cache hits and misses
// Hint: Use a Map or object to store results

function memoize(func) {
    // Your code here
}

// Test your function
let expensiveFunction = n => {
    console.log(`Computing for ${n}...`);
    return n * n * n; // Simulate expensive computation
};

let memoizedExpensive = memoize(expensiveFunction);

console.log("First call with 5:", memoizedExpensive(5));
console.log("Second call with 5:", memoizedExpensive(5));
console.log("First call with 3:", memoizedExpensive(3));
console.log("Second call with 3:", memoizedExpensive(3));

// Exercise 5: Create a function that creates a debounced version of another function
console.log("\n5. Debouncing Function:");
// TODO: Create a function called debounce that:
// - Takes a function and a delay as parameters
// - Returns a debounced version of the function
// - The debounced function should only execute after the delay has passed
// - If called again before the delay, it should reset the timer
// Hint: Use setTimeout and clearTimeout

function debounce(func, delay) {
    // Your code here
}

// Test your function
let searchFunction = query => {
    console.log(`Searching for: ${query}`);
    return `Results for: ${query}`;
};

let debouncedSearch = debounce(searchFunction, 1000);

console.log("Calling debounced search...");
debouncedSearch("javascript");
setTimeout(() => debouncedSearch("react"), 500);
setTimeout(() => debouncedSearch("node"), 1500);

// Exercise 6: Create a function that creates a throttled version of another function
console.log("\n6. Throttling Function:");
// TODO: Create a function called throttle that:
// - Takes a function and a delay as parameters
// - Returns a throttled version of the function
// - The throttled function should only execute once per delay period
// - Additional calls within the delay should be ignored
// Hint: Use a flag to track if the function can execute

function throttle(func, delay) {
    // Your code here
}

// Test your function
let scrollFunction = () => {
    console.log("Scroll event triggered");
    return "Scroll handled";
};

let throttledScroll = throttle(scrollFunction, 1000);

console.log("Calling throttled scroll...");
throttledScroll();
setTimeout(() => throttledScroll(), 500);
setTimeout(() => throttledScroll(), 1000);
setTimeout(() => throttledScroll(), 1500);

// Exercise 7: Create a function that creates a retry mechanism
console.log("\n7. Retry Function:");
// TODO: Create a function called retry that:
// - Takes a function, maxAttempts, and delay as parameters
// - Returns a function that retries the original function on failure
// - If the function throws an error, it should retry up to maxAttempts times
// - Wait for the delay between retries
// Hint: Use a loop and try-catch

function retry(func, maxAttempts = 3, delay = 1000) {
    // Your code here
}

// Test your function
let unreliableFunction = () => {
    if (Math.random() < 0.7) {
        throw new Error("Random failure");
    }
    return "Success!";
};

let retryFunction = retry(unreliableFunction, 3, 500);

console.log("Testing retry function...");
retryFunction()
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 8: Create a function that creates a pipeline of functions
console.log("\n8. Pipeline Function:");
// TODO: Create a function called createPipeline that:
// - Takes an array of functions as parameter
// - Returns a function that applies all functions in sequence
// - Each function should receive the output of the previous function
// - Log each step of the pipeline
// Hint: Use reduce to chain the functions

function createPipeline(functions) {
    // Your code here
}

// Test your function
let addTwo = x => x + 2;
let multiplyByThree = x => x * 3;
let subtractOne = x => x - 1;
let square = x => x * x;

let pipeline = createPipeline([addTwo, multiplyByThree, subtractOne, square]);

console.log("Pipeline result for 5:", pipeline(5));
console.log("Pipeline result for 3:", pipeline(3));

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced higher-order functions.");
console.log("Key concepts practiced:");
console.log("- Functions as parameters");
console.log("- Functions that return functions");
console.log("- Function composition");
console.log("- Memoization");
console.log("- Debouncing");
console.log("- Throttling");
console.log("- Retry mechanisms");
console.log("- Function pipelines");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Advanced Function Concepts");
console.log("4. Ask questions if you need help");
