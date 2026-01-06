// Exercise 4: Promise Error Handling
// Practice with advanced error handling in Promises

console.log("💪 Exercise 4: Promise Error Handling");
console.log("===================================");

// Exercise 1: Handle Promise rejections
console.log("\n1. Handle Promise Rejections:");
// TODO: Create a function called handlePromiseRejection that:
// - Takes a Promise as parameter
// - Returns a Promise that handles both resolve and reject
// - Logs different types of errors appropriately
// - Returns a default value for rejected promises
// Hint: Use .catch() to handle rejections

function handlePromiseRejection(promise, defaultValue = null) {
    // Your code here
}

// Test your function
let successPromise = Promise.resolve("Success!");
let errorPromise = Promise.reject(new Error("Something went wrong"));
let networkErrorPromise = Promise.reject(new Error("Network error"));

console.log("Success promise:", handlePromiseRejection(successPromise));
console.log("Error promise:", handlePromiseRejection(errorPromise, "Default value"));
console.log("Network error promise:", handlePromiseRejection(networkErrorPromise, "Network failed"));

// Exercise 2: Retry failed Promises
console.log("\n2. Retry Failed Promises:");
// TODO: Create a function called retryPromise that:
// - Takes a function that returns a Promise, maxRetries, and delay
// - Retries the Promise if it fails
// - Waits for the specified delay between retries
// - Returns the result or throws an error after max retries
// Hint: Use recursion or a loop with setTimeout

function retryPromise(promiseFunction, maxRetries = 3, delay = 1000) {
    // Your code here
}

// Test your function
let unreliableFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.7) {
            reject(new Error("Random failure"));
        } else {
            resolve("Success after retries!");
        }
    });
};

console.log("Retrying unreliable function...");
retryPromise(unreliableFunction, 3, 500)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 3: Handle multiple Promise errors
console.log("\n3. Handle Multiple Promise Errors:");
// TODO: Create a function called handleMultiplePromises that:
// - Takes an array of Promises as parameter
// - Returns a Promise that resolves with results and errors
// - Handles each Promise individually
// - Returns an object with successful results and failed promises
// Hint: Use Promise.allSettled() or handle each Promise individually

function handleMultiplePromises(promises) {
    // Your code here
}

// Test your function
let promiseArray = [
    Promise.resolve("Success 1"),
    Promise.reject(new Error("Error 1")),
    Promise.resolve("Success 2"),
    Promise.reject(new Error("Error 2")),
    Promise.resolve("Success 3")
];

console.log("Handling multiple promises...");
handleMultiplePromises(promiseArray)
    .then(result => console.log("Results:", result));

// Exercise 4: Create error recovery strategies
console.log("\n4. Create Error Recovery Strategies:");
// TODO: Create a function called createErrorRecovery that:
// - Takes a Promise and recovery strategies as parameters
// - Implements different recovery strategies based on error type
// - Returns a Promise with recovered data or original error
// Hint: Use .catch() with different error handling strategies

function createErrorRecovery(promise, recoveryStrategies = {}) {
    // Your code here
}

// Test your function
let apiCall = () => {
    return new Promise((resolve, reject) => {
        const error = new Error("API Error");
        error.type = "NETWORK_ERROR";
        reject(error);
    });
};

let recoveryStrategies = {
    NETWORK_ERROR: () => Promise.resolve("Cached data"),
    TIMEOUT_ERROR: () => Promise.resolve("Default data"),
    VALIDATION_ERROR: () => Promise.resolve("Corrected data")
};

console.log("Creating error recovery...");
createErrorRecovery(apiCall(), recoveryStrategies)
    .then(result => console.log("Recovered result:", result));

// Exercise 5: Implement Promise timeout
console.log("\n5. Implement Promise Timeout:");
// TODO: Create a function called promiseWithTimeout that:
// - Takes a Promise and timeout duration as parameters
// - Returns a Promise that rejects if the original Promise takes too long
// - Uses Promise.race() to implement timeout
// Hint: Create a timeout Promise that rejects after the specified duration

function promiseWithTimeout(promise, timeoutMs) {
    // Your code here
}

// Test your function
let slowPromise = new Promise(resolve => {
    setTimeout(() => resolve("Slow result"), 2000);
});

let fastPromise = new Promise(resolve => {
    setTimeout(() => resolve("Fast result"), 500);
});

console.log("Testing timeout with slow promise...");
promiseWithTimeout(slowPromise, 1000)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Timeout error:", error.message));

console.log("Testing timeout with fast promise...");
promiseWithTimeout(fastPromise, 1000)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Timeout error:", error.message));

// Exercise 6: Create error logging system
console.log("\n6. Create Error Logging System:");
// TODO: Create a function called createErrorLogger that:
// - Takes a Promise and logging options as parameters
// - Logs errors with timestamps and context
// - Supports different log levels and formats
// - Returns the original Promise result
// Hint: Use .catch() to intercept errors and log them

function createErrorLogger(promise, options = {}) {
    // Your code here
}

// Test your function
let errorLogger = createErrorLogger(
    Promise.reject(new Error("Test error")),
    {
        level: "ERROR",
        includeTimestamp: true,
        includeStack: true
    }
);

console.log("Testing error logging...");
errorLogger
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Logged error:", error.message));

// Exercise 7: Implement Promise fallback
console.log("\n7. Implement Promise Fallback:");
// TODO: Create a function called promiseWithFallback that:
// - Takes a primary Promise and fallback Promise as parameters
// - Returns the primary Promise result if successful
// - Falls back to the secondary Promise if the primary fails
// - Handles errors from both Promises
// Hint: Use .catch() to handle primary failure and try fallback

function promiseWithFallback(primaryPromise, fallbackPromise) {
    // Your code here
}

// Test your function
let primaryAPI = () => Promise.reject(new Error("Primary API failed"));
let fallbackAPI = () => Promise.resolve("Fallback API success");

console.log("Testing promise fallback...");
promiseWithFallback(primaryAPI(), fallbackAPI())
    .then(result => console.log("Fallback result:", result))
    .catch(error => console.log("Both failed:", error.message));

// Exercise 8: Create Promise error boundary
console.log("\n8. Create Promise Error Boundary:");
// TODO: Create a function called createErrorBoundary that:
// - Takes a Promise and error boundary options as parameters
// - Catches and handles errors within a boundary
// - Prevents errors from propagating beyond the boundary
// - Returns a safe result or default value
// Hint: Use try-catch with async functions or .catch() with error handling

function createErrorBoundary(promise, options = {}) {
    // Your code here
}

// Test your function
let dangerousPromise = () => {
    return new Promise((resolve, reject) => {
        reject(new Error("Dangerous error"));
    });
};

let errorBoundary = createErrorBoundary(dangerousPromise(), {
    fallbackValue: "Safe fallback",
    logErrors: true,
    preventPropagation: true
});

console.log("Testing error boundary...");
errorBoundary
    .then(result => console.log("Boundary result:", result))
    .catch(error => console.log("Boundary error:", error.message));

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced Promise error handling.");
console.log("Key concepts practiced:");
console.log("- Handling Promise rejections");
console.log("- Retrying failed Promises");
console.log("- Handling multiple Promise errors");
console.log("- Creating error recovery strategies");
console.log("- Implementing Promise timeouts");
console.log("- Creating error logging systems");
console.log("- Implementing Promise fallbacks");
console.log("- Creating Promise error boundaries");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Promise Utilities");
console.log("4. Ask questions if you need help");
