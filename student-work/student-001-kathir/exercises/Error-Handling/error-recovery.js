// Exercise 1. Retry Mechanism
console.log("\n1. Implement Retry Mechanism:");

function retryOperation(operation, maxRetries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (retriesLeft) => {
            operation()
                .then(resolve)
                .catch(error => {
                    if (retriesLeft === 0) {
                        reject(error);
                    } else {
                        setTimeout(() => attempt(retriesLeft - 1), delay);
                    }
                });
        };
        attempt(maxRetries);
    });
}
let unreliableOperation = () =>
    Math.random() < 0.7
        ? Promise.reject(new Error("Operation failed"))
        : Promise.resolve("Operation succeeded");

console.log("Testing retry mechanism...");
retryOperation(unreliableOperation, 3, 500)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 2. Exponential Backoff
console.log("\n2. Implement Exponential Backoff:");

function retryWithExponentialBackoff(operation, maxRetries = 3, baseDelay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (retryCount) => {
            operation()
                .then(resolve)
                .catch(error => {
                    if (retryCount >= maxRetries) {
                        reject(error);
                    } else {
                        const delay = baseDelay * Math.pow(2, retryCount);
                        setTimeout(() => attempt(retryCount + 1), delay);
                    }
                });
        };
        attempt(0);
    });
}
let failingOperation = () => Promise.reject(new Error("Operation failed"));

console.log("Testing exponential backoff...");
retryWithExponentialBackoff(failingOperation, 3, 500)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("All retries failed:", error.message));

// Exercise 3. Circuit Breaker Pattern
console.log("\n3. Implement Circuit Breaker Pattern:");

class CircuitBreaker {
    constructor(threshold, timeout) {
        this.threshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.state = "CLOSED";
        this.lastFailureTime = null;
    }

    async execute(operation) {
        if (this.state === "OPEN") {
            if (Date.now() - this.lastFailureTime > this.timeout) {
                this.state = "HALF_OPEN";
            } else {
                throw new Error("Circuit is OPEN");
            }
        }

        try {
            const result = await operation();
            this.failureCount = 0;
            this.state = "CLOSED";
            return result;
        } catch (error) {
            this.failureCount++;
            if (this.failureCount >= this.threshold) {
                this.state = "OPEN";
                this.lastFailureTime = Date.now();
            }
            throw error;
        }
    }
}
let circuitBreaker = new CircuitBreaker(3, 3000);
let failingService = () => Promise.reject(new Error("Service unavailable"));

console.log("Testing circuit breaker...");
for (let i = 0; i < 5; i++) {
    circuitBreaker.execute(failingService)
        .then(result => console.log(`Attempt ${i + 1}:`, result))
        .catch(error => console.log(`Attempt ${i + 1}:`, error.message));
}

// Exercise 4. Fallback Mechanism
console.log("\n4. Implement Fallback Mechanism:");

function executeWithFallback(primaryOperation, fallbackOperation) {
    return primaryOperation().catch(() => fallbackOperation());
}
let primaryService = () => Promise.reject(new Error("Primary service failed"));
let fallbackService = () => Promise.resolve("Fallback service success");

console.log("Testing fallback mechanism...");
executeWithFallback(primaryService, fallbackService)
    .then(result => console.log("Fallback result:", result))
    .catch(error => console.log("Both services failed:", error.message));

// Exercise 5. Error Recovery with Validation
console.log("\n5. Implement Error Recovery with Validation:");

function recoverWithValidation(operation, validationFunction, recoveryFunction) {
    return operation()
        .then(result => {
            if (!validationFunction(result)) {
                throw new Error("Validation failed");
            }
            return result;
        })
        .catch(() =>
            recoveryFunction().then(recovered => {
                if (!validationFunction(recovered)) {
                    throw new Error("Recovered data invalid");
                }
                return recovered;
            })
        );
}
let dataOperation = () =>
    Math.random() < 0.5
        ? Promise.reject(new Error("Data operation failed"))
        : Promise.resolve({ id: 1, name: "Test", valid: true });

let validateData = data => data && data.valid;
let recoverData = () => Promise.resolve({ id: 1, name: "Recovered", valid: true });

console.log("Testing error recovery with validation...");
recoverWithValidation(dataOperation, validateData, recoverData)
    .then(result => console.log("Recovered result:", result))
    .catch(error => console.log("Recovery failed:", error.message));

// Exercise 6. Error Recovery with Caching
console.log("\n6. Implement Error Recovery with Caching:");

function executeWithCache(operation, cacheKey, cache = new Map()) {
    if (cache.has(cacheKey)) {
        return Promise.resolve(cache.get(cacheKey));
    }

    return operation()
        .then(result => {
            cache.set(cacheKey, result);
            return result;
        })
        .catch(error => {
            if (cache.has(cacheKey)) {
                return cache.get(cacheKey);
            }
            throw error;
        });
}
let expensiveOperation = key =>
    Math.random() < 0.3
        ? Promise.reject(new Error("Operation failed"))
        : Promise.resolve(`Result for ${key}`);

console.log("Testing error recovery with caching...");
executeWithCache(() => expensiveOperation("test1"), "test1")
    .then(result => console.log("Cache result 1:", result))
    .catch(error => console.log("Cache error 1:", error.message));

executeWithCache(() => expensiveOperation("test1"), "test1")
    .then(result => console.log("Cache result 2:", result))
    .catch(error => console.log("Cache error 2:", error.message));

// Exercise 7. Error Recovery with Alternative Sources
console.log("\n7. Implement Error Recovery with Alternative Sources:");

function executeWithAlternatives(primaryOperation, alternativeOperations) {
    return primaryOperation().catch(() => {
        let chain = Promise.reject();
        alternativeOperations.forEach(op => {
            chain = chain.catch(() => op());
        });
        return chain;
    });
}
let primarySource = () => Promise.reject(new Error("Primary source failed"));
let alternative1 = () => Promise.reject(new Error("Alternative 1 failed"));
let alternative2 = () => Promise.resolve("Alternative 2 success");
let alternative3 = () => Promise.resolve("Alternative 3 success");

console.log("Testing error recovery with alternatives...");
executeWithAlternatives(primarySource, [alternative1, alternative2, alternative3])
    .then(result => console.log("Alternative result:", result))
    .catch(error => console.log("All sources failed:", error.message));

// Exercise 8. Error Recovery with State Restoration
console.log("\n8. Implement Error Recovery with State Restoration:");

function executeWithStateRestoration(operation, restoreState, initialState) {
    const savedState = { ...initialState };

    return operation(initialState).catch(() => restoreState(savedState));
}
let statefulOperation = state =>
    Math.random() < 0.5
        ? Promise.reject(new Error("Stateful operation failed"))
        : Promise.resolve({ ...state, processed: true });

let restoreState = originalState =>
    Promise.resolve({ ...originalState, restored: true });

let initialState = { id: 1, name: "Test", processed: false };

console.log("Testing error recovery with state restoration...");
executeWithStateRestoration(
    statefulOperation,
    restoreState,
    initialState
)
    .then(result => console.log("State result:", result))
    .catch(error => console.log("State restoration failed:", error.message));