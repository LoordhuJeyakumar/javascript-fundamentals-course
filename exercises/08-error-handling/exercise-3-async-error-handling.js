// Exercise 3: Async Error Handling
// Practice with error handling in asynchronous JavaScript

console.log("💪 Exercise 3: Async Error Handling");
console.log("=================================");

// Exercise 1: Handle errors in async functions
console.log("\n1. Handle Errors in Async Functions:");
// TODO: Create an async function called asyncOperation that:
// - Takes a shouldFail parameter
// - Simulates an async operation with setTimeout
// - Throws an error if shouldFail is true
// - Returns a success message if shouldFail is false
// - Use try-catch to handle errors properly
// Hint: Use async/await with try-catch blocks

async function asyncOperation(shouldFail = false) {
    // Your code here
}

// Test your function
console.log("Testing async operation with success:");
asyncOperation(false)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));

console.log("Testing async operation with failure:");
asyncOperation(true)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));

// Exercise 2: Handle errors in Promise chains
console.log("\n2. Handle Errors in Promise Chains:");
// TODO: Create a function called promiseChain that:
// - Takes an array of async operations
// - Executes them in sequence
// - Handles errors at each step
// - Returns results or errors for each operation
// Hint: Use Promise.allSettled() or handle each Promise individually

function promiseChain(operations) {
    // Your code here
}

// Test your function
let operations = [
    () => Promise.resolve("Operation 1 success"),
    () => Promise.reject(new Error("Operation 2 failed")),
    () => Promise.resolve("Operation 3 success"),
    () => Promise.reject(new Error("Operation 4 failed"))
];

console.log("Testing promise chain:");
promiseChain(operations)
    .then(results => console.log("Chain results:", results));

// Exercise 3: Handle errors in parallel async operations
console.log("\n3. Handle Errors in Parallel Async Operations:");
// TODO: Create a function called parallelAsyncOperations that:
// - Takes an array of async operations
// - Executes them in parallel
// - Handles errors for each operation
// - Returns results and errors separately
// Hint: Use Promise.allSettled() to handle all Promises

function parallelAsyncOperations(operations) {
    // Your code here
}

// Test your function
let parallelOps = [
    () => new Promise(resolve => setTimeout(() => resolve("Parallel 1"), 100)),
    () => new Promise((resolve, reject) => setTimeout(() => reject(new Error("Parallel 2 failed")), 200)),
    () => new Promise(resolve => setTimeout(() => resolve("Parallel 3"), 150)),
    () => new Promise((resolve, reject) => setTimeout(() => reject(new Error("Parallel 4 failed")), 50))
];

console.log("Testing parallel async operations:");
parallelAsyncOperations(parallelOps)
    .then(results => console.log("Parallel results:", results));

// Exercise 4: Handle errors in async generators
console.log("\n4. Handle Errors in Async Generators:");
// TODO: Create an async generator function called asyncGenerator that:
// - Takes an array of values
// - Yields each value after a delay
// - Throws an error for specific values
// - Handles errors gracefully
// Hint: Use async function* and try-catch in the generator

async function* asyncGenerator(values) {
    // Your code here
}

// Test your generator
let values = ["value1", "error", "value2", "value3"];
console.log("Testing async generator:");

(async () => {
    try {
        for await (const value of asyncGenerator(values)) {
            console.log("Generated value:", value);
        }
    } catch (error) {
        console.log("Generator error:", error.message);
    }
})();

// Exercise 5: Handle errors in async iterators
console.log("\n5. Handle Errors in Async Iterators:");
// TODO: Create a function called createAsyncIterator that:
// - Takes an array of async operations
// - Returns an async iterator
// - Handles errors for each iteration
// - Provides error information in the iteration result
// Hint: Implement async iterator protocol with error handling

function createAsyncIterator(operations) {
    // Your code here
}

// Test your iterator
let iteratorOps = [
    () => Promise.resolve("Iterator 1"),
    () => Promise.reject(new Error("Iterator 2 failed")),
    () => Promise.resolve("Iterator 3"),
    () => Promise.reject(new Error("Iterator 4 failed"))
];

console.log("Testing async iterator:");
(async () => {
    const iterator = createAsyncIterator(iteratorOps);
    
    for await (const result of iterator) {
        if (result.error) {
            console.log("Iterator error:", result.error.message);
        } else {
            console.log("Iterator value:", result.value);
        }
    }
})();

// Exercise 6: Handle errors in async event handlers
console.log("\n6. Handle Errors in Async Event Handlers:");
// TODO: Create a function called createAsyncEventHandler that:
// - Takes an event name and async handler function
// - Returns an event handler that handles async errors
// - Logs errors and prevents them from propagating
// - Provides error recovery mechanisms
// Hint: Wrap async handlers with error handling

function createAsyncEventHandler(eventName, asyncHandler) {
    // Your code here
}

// Test your event handler
let asyncHandler = async (event) => {
    console.log("Handling event:", event.type);
    if (event.type === "error") {
        throw new Error("Event handler error");
    }
    return "Event handled successfully";
};

let errorHandler = createAsyncEventHandler("test", asyncHandler);

// Simulate events
errorHandler({ type: "success" })
    .then(result => console.log("Handler result:", result))
    .catch(error => console.log("Handler error:", error.message));

errorHandler({ type: "error" })
    .then(result => console.log("Handler result:", result))
    .catch(error => console.log("Handler error:", error.message));

// Exercise 7: Handle errors in async middleware
console.log("\n7. Handle Errors in Async Middleware:");
// TODO: Create a function called createAsyncMiddleware that:
// - Takes an async middleware function
// - Returns middleware that handles async errors
// - Provides error logging and recovery
// - Supports error propagation control
// Hint: Implement middleware pattern with async error handling

function createAsyncMiddleware(asyncMiddleware) {
    // Your code here
}

// Test your middleware
let asyncMiddleware = async (req, res, next) => {
    console.log("Processing request:", req.path);
    if (req.path === "/error") {
        throw new Error("Middleware error");
    }
    req.processed = true;
    next();
};

let errorHandlingMiddleware = createAsyncMiddleware(asyncMiddleware);

// Simulate requests
let req1 = { path: "/success" };
let req2 = { path: "/error" };

errorHandlingMiddleware(req1, {}, () => console.log("Request 1 processed"));
errorHandlingMiddleware(req2, {}, () => console.log("Request 2 processed"));

// Exercise 8: Handle errors in async data processing
console.log("\n8. Handle Errors in Async Data Processing:");
// TODO: Create a function called processAsyncData that:
// - Takes an array of data and an async processor function
// - Processes data asynchronously
// - Handles errors for individual items
// - Returns processed data and error information
// Hint: Use Promise.allSettled() for individual item processing

function processAsyncData(data, asyncProcessor) {
    // Your code here
}

// Test your function
let testData = [
    { id: 1, value: "valid" },
    { id: 2, value: "error" },
    { id: 3, value: "valid" },
    { id: 4, value: "error" }
];

let asyncProcessor = async (item) => {
    if (item.value === "error") {
        throw new Error(`Processing error for item ${item.id}`);
    }
    return { ...item, processed: true };
};

console.log("Testing async data processing:");
processAsyncData(testData, asyncProcessor)
    .then(results => console.log("Processing results:", results));

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced async error handling.");
console.log("Key concepts practiced:");
console.log("- Handling errors in async functions");
console.log("- Handling errors in Promise chains");
console.log("- Handling errors in parallel operations");
console.log("- Handling errors in async generators");
console.log("- Handling errors in async iterators");
console.log("- Handling errors in async event handlers");
console.log("- Handling errors in async middleware");
console.log("- Handling errors in async data processing");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: Error Recovery Strategies");
console.log("4. Ask questions if you need help");
