// Exercise 4: Error Recovery Strategies
// Practice with implementing error recovery mechanisms

console.log("💪 Exercise 4: Error Recovery Strategies");
console.log("======================================");

// Exercise 1: Implement retry mechanism
console.log("\n1. Implement Retry Mechanism:");
// TODO: Create a function called retryOperation that:
// - Takes an operation function, maxRetries, and delay
// - Retries the operation if it fails
// - Waits for the specified delay between retries
// - Returns the result or throws an error after max retries
// Hint: Use recursion or a loop with setTimeout

function retryOperation(operation, maxRetries = 3, delay = 1000) {
    // Your code here
}

// Test your function
let unreliableOperation = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.7) {
            reject(new Error("Operation failed"));
        } else {
            resolve("Operation succeeded");
        }
    });
};

console.log("Testing retry mechanism...");
retryOperation(unreliableOperation, 3, 500)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 2: Implement exponential backoff
console.log("\n2. Implement Exponential Backoff:");
// TODO: Create a function called retryWithExponentialBackoff that:
// - Takes an operation function, maxRetries, and baseDelay
// - Retries the operation with exponentially increasing delays
// - Uses the formula: delay = baseDelay * (2 ^ attempt)
// - Returns the result or throws an error after max retries
// Hint: Calculate delay using Math.pow(2, attempt)

function retryWithExponentialBackoff(operation, maxRetries = 3, baseDelay = 1000) {
    // Your code here
}

// Test your function
let failingOperation = () => {
    return new Promise((resolve, reject) => {
        reject(new Error("Operation failed"));
    });
};

console.log("Testing exponential backoff...");
retryWithExponentialBackoff(failingOperation, 3, 1000)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 3: Implement circuit breaker pattern
console.log("\n3. Implement Circuit Breaker Pattern:");
// TODO: Create a class called CircuitBreaker that:
// - Takes a threshold and timeout
// - Tracks failure count and state
// - Opens circuit after threshold failures
// - Closes circuit after timeout
// - Executes operations only when circuit is closed
// Hint: Implement states: CLOSED, OPEN, HALF_OPEN

class CircuitBreaker {
    // Your code here
}

// Test your circuit breaker
let circuitBreaker = new CircuitBreaker(3, 5000);
let failingService = () => Promise.reject(new Error("Service unavailable"));

console.log("Testing circuit breaker...");
for (let i = 0; i < 5; i++) {
    circuitBreaker.execute(failingService)
        .then(result => console.log(`Attempt ${i + 1}:`, result))
        .catch(error => console.log(`Attempt ${i + 1}:`, error.message));
}

// Exercise 4: Implement fallback mechanism
console.log("\n4. Implement Fallback Mechanism:");
// TODO: Create a function called executeWithFallback that:
// - Takes a primary operation and fallback operation
// - Executes the primary operation first
// - Falls back to the secondary operation if primary fails
// - Returns the result from whichever operation succeeds
// Hint: Use Promise.catch() to handle primary failure

function executeWithFallback(primaryOperation, fallbackOperation) {
    // Your code here
}

// Test your function
let primaryService = () => Promise.reject(new Error("Primary service failed"));
let fallbackService = () => Promise.resolve("Fallback service success");

console.log("Testing fallback mechanism...");
executeWithFallback(primaryService, fallbackService)
    .then(result => console.log("Fallback result:", result))
    .catch(error => console.log("Both services failed:", error.message));

// Exercise 5: Implement error recovery with validation
console.log("\n5. Implement Error Recovery with Validation:");
// TODO: Create a function called recoverWithValidation that:
// - Takes an operation and validation function
// - Executes the operation
// - If operation fails, attempts recovery
// - Validates the recovered result
// - Returns validated result or throws error
// Hint: Implement recovery logic with result validation

function recoverWithValidation(operation, validationFunction, recoveryFunction) {
    // Your code here
}

// Test your function
let dataOperation = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            reject(new Error("Data operation failed"));
        } else {
            resolve({ id: 1, name: "Test", valid: true });
        }
    });
};

let validateData = (data) => {
    return data && data.id && data.name && data.valid;
};

let recoverData = () => {
    return Promise.resolve({ id: 1, name: "Recovered", valid: true });
};

console.log("Testing error recovery with validation...");
recoverWithValidation(dataOperation, validateData, recoverData)
    .then(result => console.log("Recovered result:", result))
    .catch(error => console.log("Recovery failed:", error.message));

// Exercise 6: Implement error recovery with caching
console.log("\n6. Implement Error Recovery with Caching:");
// TODO: Create a function called executeWithCache that:
// - Takes an operation and cache key
// - Checks cache first
// - Executes operation if cache miss
// - Stores result in cache
// - Returns cached result if operation fails
// Hint: Implement cache check, operation execution, and cache storage

function executeWithCache(operation, cacheKey, cache = new Map()) {
    // Your code here
}

// Test your function
let expensiveOperation = (key) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.3) {
            reject(new Error("Operation failed"));
        } else {
            resolve(`Result for ${key}`);
        }
    });
};

console.log("Testing error recovery with caching...");
executeWithCache(() => expensiveOperation("test1"), "test1")
    .then(result => console.log("Cache result 1:", result))
    .catch(error => console.log("Cache error 1:", error.message));

executeWithCache(() => expensiveOperation("test1"), "test1")
    .then(result => console.log("Cache result 2:", result))
    .catch(error => console.log("Cache error 2:", error.message));

// Exercise 7: Implement error recovery with alternative sources
console.log("\n7. Implement Error Recovery with Alternative Sources:");
// TODO: Create a function called executeWithAlternatives that:
// - Takes an operation and array of alternative operations
// - Executes the primary operation first
// - If primary fails, tries alternatives in order
// - Returns the result from the first successful operation
// Hint: Use Promise.catch() with alternative operations

function executeWithAlternatives(primaryOperation, alternativeOperations) {
    // Your code here
}

// Test your function
let primarySource = () => Promise.reject(new Error("Primary source failed"));
let alternative1 = () => Promise.reject(new Error("Alternative 1 failed"));
let alternative2 = () => Promise.resolve("Alternative 2 success");
let alternative3 = () => Promise.resolve("Alternative 3 success");

console.log("Testing error recovery with alternatives...");
executeWithAlternatives(primarySource, [alternative1, alternative2, alternative3])
    .then(result => console.log("Alternative result:", result))
    .catch(error => console.log("All sources failed:", error.message));

// Exercise 8: Implement error recovery with state restoration
console.log("\n8. Implement Error Recovery with State Restoration:");
// TODO: Create a function called executeWithStateRestoration that:
// - Takes an operation and state restoration function
// - Saves state before operation
// - Executes the operation
// - Restores state if operation fails
// - Returns the result or restored state
// Hint: Implement state saving and restoration logic

function executeWithStateRestoration(operation, stateRestorationFunction, initialState) {
    // Your code here
}

// Test your function
let statefulOperation = (state) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            reject(new Error("Stateful operation failed"));
        } else {
            resolve({ ...state, processed: true });
        }
    });
};

let restoreState = (originalState) => {
    return Promise.resolve({ ...originalState, restored: true });
};

let initialState = { id: 1, name: "Test", processed: false };

console.log("Testing error recovery with state restoration...");
executeWithStateRestoration(
    (state) => statefulOperation(state),
    restoreState,
    initialState
)
    .then(result => console.log("State result:", result))
    .catch(error => console.log("State restoration failed:", error.message));

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced error recovery strategies.");
console.log("Key concepts practiced:");
console.log("- Implementing retry mechanisms");
console.log("- Implementing exponential backoff");
console.log("- Implementing circuit breaker pattern");
console.log("- Implementing fallback mechanisms");
console.log("- Implementing error recovery with validation");
console.log("- Implementing error recovery with caching");
console.log("- Implementing error recovery with alternative sources");
console.log("- Implementing error recovery with state restoration");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Error Monitoring and Logging");
console.log("4. Ask questions if you need help");
