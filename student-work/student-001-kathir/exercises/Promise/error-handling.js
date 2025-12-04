// Exercise 1: Handle Promise Rejections
console.log("\n1. Handle Promise Rejections:");

function handlePromiseRejection(promise, defaultValue = null) {
    return promise
        .then(result => result)
        .catch(err => {
            console.error("Caught error:", err.message);
            
            if (err.message.includes("Network")) {
                console.warn("Network-related issue occurred.");
            }

            return defaultValue;
        });
}
let successPromise = Promise.resolve("Success!");
let errorPromise = Promise.reject(new Error("Something went wrong"));
let networkErrorPromise = Promise.reject(new Error("Network error"));

handlePromiseRejection(successPromise).then(r => console.log("Success promise:", r));
handlePromiseRejection(errorPromise, "Default value").then(r => console.log("Error promise:", r));
handlePromiseRejection(networkErrorPromise, "Network failed").then(r => console.log("Network error promise:", r));

// Exercise 2: Retry Failed Promises
console.log("\n2. Retry Failed Promises:");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function retryPromise(promiseFunction, maxRetries = 3, delay = 1000) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await promiseFunction();
        } catch (err) {
            lastError = err;
            console.warn(`Attempt ${attempt} failed:`, err.message);

            if (attempt < maxRetries) {
                await sleep(delay);
            }
        }
    }

    throw lastError;
}
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

function handleMultiplePromises(promises) {
    return Promise.allSettled(promises)
        .then(results => {
            return {
                successes: results.filter(r => r.status === "fulfilled").map(r => r.value),
                errors: results.filter(r => r.status === "rejected").map(r => r.reason.message)
            };
        });
}
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

function createErrorRecovery(promise, recoveryStrategies = {}) {
    return promise.catch(err => {
        let type = err.type;

        if (type && recoveryStrategies[type]) {
            console.log("Recovering using strategy:", type);
            return recoveryStrategies[type]();
        }

        return Promise.reject(err);
    });
}
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

function promiseWithTimeout(promise, timeoutMs) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timed out")), timeoutMs);
    });

    return Promise.race([promise, timeout]);
}
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

function createErrorLogger(promise, options = {}) {
    const { level = "ERROR", includeTimestamp = true, includeStack = false } = options;

    return promise.catch(err => {
        let logMessage = `[${level}]`;

        if (includeTimestamp) {
            logMessage += ` [${new Date().toISOString()}]`;
        }

        logMessage += ` ${err.message}`;

        if (includeStack) {
            logMessage += `\nStack: ${err.stack}`;
        }

        console.error(logMessage);

        throw err;
    });
}
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

function promiseWithFallback(primaryPromise, fallbackPromise) {
    return primaryPromise.catch(() => {
        console.warn("Primary failed → using fallback...");
        return fallbackPromise.catch(err => {
            throw err;
        });
    });
}
let primaryAPI = () => Promise.reject(new Error("Primary API failed"));
let fallbackAPI = () => Promise.resolve("Fallback API success");

console.log("Testing promise fallback...");
promiseWithFallback(primaryAPI(), fallbackAPI())
    .then(result => console.log("Fallback result:", result))
    .catch(error => console.log("Both failed:", error.message));

// Exercise 8: Create Promise Error Boundary
console.log("\n8. Create Promise Error Boundary:");

function createErrorBoundary(promise, options = {}) {
    const { fallbackValue = null, logErrors = false, preventPropagation = true } = options;

    return promise.catch(err => {
        if (logErrors) console.error("Boundary caught:", err.message);

        if (preventPropagation) return fallbackValue;

        throw err;
    });
}
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