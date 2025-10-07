// Exercise 5: Promise Utilities
// Practice with Promise utility methods and advanced patterns

console.log("💪 Exercise 5: Promise Utilities");
console.log("=============================");

// Exercise 1: Implement Promise.all()
console.log("\n1. Implement Promise.all():");
// TODO: Create a function called myPromiseAll that:
// - Takes an array of Promises as parameter
// - Returns a Promise that resolves with all results
// - Rejects if any Promise rejects
// - Maintains the order of results
// Hint: Use Promise.all() or implement manually

function myPromiseAll(promises) {
    // Your code here
}

// Test your function
let promise1 = Promise.resolve("Result 1");
let promise2 = Promise.resolve("Result 2");
let promise3 = Promise.resolve("Result 3");
let promise4 = Promise.reject(new Error("Promise 4 failed"));

console.log("Testing Promise.all with success:");
myPromiseAll([promise1, promise2, promise3])
    .then(results => console.log("All results:", results))
    .catch(error => console.log("Error:", error.message));

console.log("Testing Promise.all with failure:");
myPromiseAll([promise1, promise2, promise4])
    .then(results => console.log("All results:", results))
    .catch(error => console.log("Error:", error.message));

// Exercise 2: Implement Promise.race()
console.log("\n2. Implement Promise.race():");
// TODO: Create a function called myPromiseRace that:
// - Takes an array of Promises as parameter
// - Returns a Promise that resolves with the first result
// - Resolves or rejects based on the first Promise to settle
// Hint: Use Promise.race() or implement manually

function myPromiseRace(promises) {
    // Your code here
}

// Test your function
let fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
let slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));
let errorPromise = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 200));

console.log("Testing Promise.race with success:");
myPromiseRace([fastPromise, slowPromise])
    .then(result => console.log("Race result:", result))
    .catch(error => console.log("Error:", error.message));

console.log("Testing Promise.race with error:");
myPromiseRace([errorPromise, slowPromise])
    .then(result => console.log("Race result:", result))
    .catch(error => console.log("Error:", error.message));

// Exercise 3: Implement Promise.allSettled()
console.log("\n3. Implement Promise.allSettled():");
// TODO: Create a function called myPromiseAllSettled that:
// - Takes an array of Promises as parameter
// - Returns a Promise that resolves with all results and errors
// - Never rejects, always resolves with status and value/reason
// Hint: Use Promise.allSettled() or implement manually

function myPromiseAllSettled(promises) {
    // Your code here
}

// Test your function
let settledPromises = [
    Promise.resolve("Success 1"),
    Promise.reject(new Error("Error 1")),
    Promise.resolve("Success 2"),
    Promise.reject(new Error("Error 2"))
];

console.log("Testing Promise.allSettled:");
myPromiseAllSettled(settledPromises)
    .then(results => {
        console.log("All settled results:");
        results.forEach((result, index) => {
            console.log(`Promise ${index + 1}:`, result.status, result.value || result.reason);
        });
    });

// Exercise 4: Implement Promise.any()
console.log("\n4. Implement Promise.any():");
// TODO: Create a function called myPromiseAny that:
// - Takes an array of Promises as parameter
// - Returns a Promise that resolves with the first successful result
// - Rejects only if all Promises reject
// Hint: Use Promise.any() or implement manually

function myPromiseAny(promises) {
    // Your code here
}

// Test your function
let anyPromises = [
    Promise.reject(new Error("Error 1")),
    Promise.reject(new Error("Error 2")),
    Promise.resolve("Success 1"),
    Promise.resolve("Success 2")
];

console.log("Testing Promise.any with success:");
myPromiseAny(anyPromises)
    .then(result => console.log("Any result:", result))
    .catch(error => console.log("All failed:", error.message));

let allFailedPromises = [
    Promise.reject(new Error("Error 1")),
    Promise.reject(new Error("Error 2")),
    Promise.reject(new Error("Error 3"))
];

console.log("Testing Promise.any with all failures:");
myPromiseAny(allFailedPromises)
    .then(result => console.log("Any result:", result))
    .catch(error => console.log("All failed:", error.message));

// Exercise 5: Create Promise queue
console.log("\n5. Create Promise Queue:");
// TODO: Create a function called createPromiseQueue that:
// - Takes a concurrency limit as parameter
// - Returns a queue that processes Promises with concurrency control
// - Processes Promises in order but limits concurrent execution
// Hint: Use a queue and track running Promises

function createPromiseQueue(concurrency = 3) {
    // Your code here
}

// Test your function
let queue = createPromiseQueue(2);
let queuePromises = [
    () => new Promise(resolve => setTimeout(() => resolve("Task 1"), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve("Task 2"), 500)),
    () => new Promise(resolve => setTimeout(() => resolve("Task 3"), 800)),
    () => new Promise(resolve => setTimeout(() => resolve("Task 4"), 300)),
    () => new Promise(resolve => setTimeout(() => resolve("Task 5"), 600))
];

console.log("Testing Promise queue...");
queuePromises.forEach((promiseFn, index) => {
    queue.add(promiseFn)
        .then(result => console.log(`Queue result ${index + 1}:`, result))
        .catch(error => console.log(`Queue error ${index + 1}:`, error.message));
});

// Exercise 6: Implement Promise retry with backoff
console.log("\n6. Implement Promise Retry with Backoff:");
// TODO: Create a function called retryWithBackoff that:
// - Takes a Promise function, maxRetries, and backoff options
// - Retries failed Promises with exponential backoff
// - Supports different backoff strategies
// Hint: Use setTimeout with increasing delays

function retryWithBackoff(promiseFunction, maxRetries = 3, options = {}) {
    // Your code here
}

// Test your function
let unreliableAPI = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.8) {
            reject(new Error("API failure"));
        } else {
            resolve("API success");
        }
    });
};

console.log("Testing retry with backoff...");
retryWithBackoff(unreliableAPI, 5, {
    initialDelay: 1000,
    maxDelay: 10000,
    backoffFactor: 2
})
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 7: Create Promise cache
console.log("\n7. Create Promise Cache:");
// TODO: Create a function called createPromiseCache that:
// - Takes cache options as parameter
// - Returns a cache that stores Promise results
// - Prevents duplicate Promise execution
// - Supports cache expiration and size limits
// Hint: Use a Map to store cached Promises and results

function createPromiseCache(options = {}) {
    // Your code here
}

// Test your function
let cache = createPromiseCache({
    maxSize: 10,
    ttl: 5000 // 5 seconds
});

let expensiveOperation = (key) => {
    console.log(`Executing expensive operation for key: ${key}`);
    return new Promise(resolve => {
        setTimeout(() => resolve(`Result for ${key}`), 1000);
    });
};

console.log("Testing Promise cache...");
cache.get("key1", () => expensiveOperation("key1"))
    .then(result => console.log("Cache result 1:", result));

cache.get("key1", () => expensiveOperation("key1"))
    .then(result => console.log("Cache result 2 (should be cached):", result));

// Exercise 8: Implement Promise debounce
console.log("\n8. Implement Promise Debounce:");
// TODO: Create a function called createPromiseDebounce that:
// - Takes a Promise function and delay as parameters
// - Returns a debounced version that only executes after delay
// - Cancels previous executions if called again within delay
// Hint: Use setTimeout and clearTimeout to implement debouncing

function createPromiseDebounce(promiseFunction, delay = 300) {
    // Your code here
}

// Test your function
let apiCall = (query) => {
    console.log(`Making API call for: ${query}`);
    return new Promise(resolve => {
        setTimeout(() => resolve(`Results for ${query}`), 500);
    });
};

let debouncedAPI = createPromiseDebounce(apiCall, 1000);

console.log("Testing Promise debounce...");
debouncedAPI("search1")
    .then(result => console.log("Debounced result 1:", result))
    .catch(error => console.log("Debounced error 1:", error.message));

debouncedAPI("search2")
    .then(result => console.log("Debounced result 2:", result))
    .catch(error => console.log("Debounced error 2:", error.message));

debouncedAPI("search3")
    .then(result => console.log("Debounced result 3:", result))
    .catch(error => console.log("Debounced error 3:", error.message));

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced Promise utilities.");
console.log("Key concepts practiced:");
console.log("- Implementing Promise.all()");
console.log("- Implementing Promise.race()");
console.log("- Implementing Promise.allSettled()");
console.log("- Implementing Promise.any()");
console.log("- Creating Promise queues");
console.log("- Implementing retry with backoff");
console.log("- Creating Promise caches");
console.log("- Implementing Promise debouncing");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Real-World Applications");
console.log("4. Ask questions if you need help");
