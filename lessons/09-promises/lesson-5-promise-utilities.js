// Lesson 5: Promise Utilities
// This file teaches Promise utility methods and combinations

console.log("⚡ Welcome to Promises Lesson 5: Promise Utilities!");
console.log("=================================================");

// 1. Promise.all() - Parallel Execution
console.log("\n📚 1. Promise.all() - Parallel Execution");
console.log("---------------------------------------");

console.log("Promise.all() waits for all Promises to resolve or any to reject");
console.log("It's useful for parallel execution of independent operations");

// Basic Promise.all() usage
function createDelayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Promise ${value} resolved after ${delay}ms`);
            resolve(value);
        }, delay);
    });
}

let promises = [
    createDelayedPromise("A", 1000),
    createDelayedPromise("B", 800),
    createDelayedPromise("C", 600)
];

Promise.all(promises)
    .then((results) => {
        console.log("Promise.all() results:", results);
    })
    .catch((error) => {
        console.log("Promise.all() error:", error.message);
    });

// 2. Promise.all() with Error Handling
console.log("\n📚 2. Promise.all() with Error Handling");
console.log("-------------------------------------");

// Promise.all() with one failing Promise
let mixedPromises = [
    createDelayedPromise("Success 1", 500),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This Promise fails"));
        }, 300);
    }),
    createDelayedPromise("Success 3", 700)
];

Promise.all(mixedPromises)
    .then((results) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("Promise.all() with error:", error.message);
    });

// 3. Promise.race() - First Completion
console.log("\n📚 3. Promise.race() - First Completion");
console.log("-------------------------------------");

console.log("Promise.race() returns the first Promise to resolve or reject");
console.log("It's useful for timeouts and first-available scenarios");

// Basic Promise.race() usage
let racePromises = [
    createDelayedPromise("Fast", 300),
    createDelayedPromise("Medium", 600),
    createDelayedPromise("Slow", 1000)
];

Promise.race(racePromises)
    .then((result) => {
        console.log("Promise.race() winner:", result);
    })
    .catch((error) => {
        console.log("Promise.race() error:", error.message);
    });

// 4. Promise.race() for Timeouts
console.log("\n📚 4. Promise.race() for Timeouts");
console.log("--------------------------------");

// Timeout using Promise.race()
function withTimeout(promise, timeoutMs) {
    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeoutMs}ms`));
        }, timeoutMs);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

// Test timeout
let slowOperation = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Slow operation completed");
    }, 2000);
});

withTimeout(slowOperation, 1000)
    .then((result) => {
        console.log("Timeout test result:", result);
    })
    .catch((error) => {
        console.log("Timeout test error:", error.message);
    });

// 5. Promise.allSettled() - All Results
console.log("\n📚 5. Promise.allSettled() - All Results");
console.log("--------------------------------------");

console.log("Promise.allSettled() waits for all Promises to settle (resolve or reject)");
console.log("It returns results for all Promises, regardless of success or failure");

// Basic Promise.allSettled() usage
let settledPromises = [
    createDelayedPromise("Success 1", 500),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This Promise fails"));
        }, 300);
    }),
    createDelayedPromise("Success 3", 700)
];

Promise.allSettled(settledPromises)
    .then((results) => {
        console.log("Promise.allSettled() results:");
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index}: Success - ${result.value}`);
            } else {
                console.log(`Promise ${index}: Failed - ${result.reason.message}`);
            }
        });
    });

// 6. Promise.any() - First Success
console.log("\n📚 6. Promise.any() - First Success");
console.log("---------------------------------");

console.log("Promise.any() returns the first Promise to resolve successfully");
console.log("It only rejects if all Promises reject");

// Basic Promise.any() usage
let anyPromises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("First Promise fails"));
        }, 300);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Second Promise fails"));
        }, 500);
    }),
    createDelayedPromise("Third Promise succeeds", 700)
];

Promise.any(anyPromises)
    .then((result) => {
        console.log("Promise.any() first success:", result);
    })
    .catch((error) => {
        console.log("Promise.any() all failed:", error.message);
    });

// 7. Custom Promise Utilities
console.log("\n📚 7. Custom Promise Utilities");
console.log("----------------------------");

// Promise delay utility
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Promise retry utility
async function retry(operation, maxRetries = 3, delayMs = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error.message);
            
            if (attempt === maxRetries) {
                throw new Error(`Operation failed after ${maxRetries} attempts`);
            }
            
            await delay(delayMs * attempt);
        }
    }
}

// Promise timeout utility
function timeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`Operation timed out after ${ms}ms`));
            }, ms);
        })
    ]);
}

// Promise retry with timeout
async function retryWithTimeout(operation, maxRetries = 3, timeoutMs = 5000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await timeout(operation(), timeoutMs);
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error.message);
            
            if (attempt === maxRetries) {
                throw error;
            }
            
            await delay(1000 * attempt);
        }
    }
}

// Test custom utilities
let testOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                resolve("Operation succeeded!");
            } else {
                reject(new Error("Operation failed"));
            }
        }, 1000);
    });
};

retryWithTimeout(testOperation, 3, 2000)
    .then((result) => {
        console.log("Retry with timeout succeeded:", result);
    })
    .catch((error) => {
        console.log("Retry with timeout failed:", error.message);
    });

// 8. Promise Chaining Utilities
console.log("\n📚 8. Promise Chaining Utilities");
console.log("-------------------------------");

// Sequential execution utility
async function sequential(promises) {
    let results = [];
    for (let promise of promises) {
        try {
            let result = await promise;
            results.push({ status: 'fulfilled', value: result });
        } catch (error) {
            results.push({ status: 'rejected', reason: error });
        }
    }
    return results;
}

// Parallel execution utility
async function parallel(promises) {
    return Promise.allSettled(promises);
}

// Test sequential vs parallel
let testPromises = [
    createDelayedPromise("Task 1", 500),
    createDelayedPromise("Task 2", 300),
    createDelayedPromise("Task 3", 700)
];

console.log("Sequential execution:");
let start = Date.now();
sequential(testPromises).then((results) => {
    let end = Date.now();
    console.log("Sequential results:", results);
    console.log("Sequential time:", end - start, "ms");
});

console.log("Parallel execution:");
start = Date.now();
parallel(testPromises).then((results) => {
    let end = Date.now();
    console.log("Parallel results:", results);
    console.log("Parallel time:", end - start, "ms");
});

// 9. Promise Pool (Concurrency Control)
console.log("\n📚 9. Promise Pool (Concurrency Control)");
console.log("--------------------------------------");

// Promise pool utility
async function promisePool(promises, concurrency = 3) {
    let results = [];
    let executing = [];
    
    for (let promise of promises) {
        let p = promise.then(result => {
            results.push({ status: 'fulfilled', value: result });
        }).catch(error => {
            results.push({ status: 'rejected', reason: error });
        });
        
        executing.push(p);
        
        if (executing.length >= concurrency) {
            await Promise.race(executing);
            executing = executing.filter(p => p !== p);
        }
    }
    
    await Promise.all(executing);
    return results;
}

// Test promise pool
let poolPromises = Array.from({ length: 10 }, (_, i) => 
    createDelayedPromise(`Task ${i + 1}`, Math.random() * 1000 + 500)
);

promisePool(poolPromises, 3).then((results) => {
    console.log("Promise pool results:", results.length);
});

// 10. Promise Memoization
console.log("\n📚 10. Promise Memoization");
console.log("-------------------------");

// Promise memoization utility
function memoizePromise(fn) {
    let cache = new Map();
    
    return function(...args) {
        let key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log("Cache hit for key:", key);
            return cache.get(key);
        }
        
        console.log("Cache miss for key:", key);
        let promise = fn.apply(this, args);
        cache.set(key, promise);
        
        return promise;
    };
}

// Test memoization
let expensiveOperation = memoizePromise((id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Result for ID: ${id}`);
        }, 1000);
    });
});

// First call - cache miss
expensiveOperation(1).then((result) => {
    console.log("First call result:", result);
});

// Second call - cache hit
expensiveOperation(1).then((result) => {
    console.log("Second call result:", result);
});

// 11. Promise Utilities Class
console.log("\n📚 11. Promise Utilities Class");
console.log("-----------------------------");

class PromiseUtils {
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    static timeout(promise, ms) {
        return Promise.race([
            promise,
            new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms);
            })
        ]);
    }
    
    static retry(operation, maxRetries = 3, delayMs = 1000) {
        return this._retry(operation, maxRetries, delayMs, 1);
    }
    
    static async _retry(operation, maxRetries, delayMs, attempt) {
        try {
            return await operation();
        } catch (error) {
            if (attempt >= maxRetries) {
                throw error;
            }
            
            await this.delay(delayMs * attempt);
            return this._retry(operation, maxRetries, delayMs, attempt + 1);
        }
    }
    
    static async sequential(promises) {
        let results = [];
        for (let promise of promises) {
            try {
                let result = await promise;
                results.push({ status: 'fulfilled', value: result });
            } catch (error) {
                results.push({ status: 'rejected', reason: error });
            }
        }
        return results;
    }
    
    static parallel(promises) {
        return Promise.allSettled(promises);
    }
    
    static async pool(promises, concurrency = 3) {
        let results = [];
        let executing = [];
        
        for (let promise of promises) {
            let p = promise.then(result => {
                results.push({ status: 'fulfilled', value: result });
            }).catch(error => {
                results.push({ status: 'rejected', reason: error });
            });
            
            executing.push(p);
            
            if (executing.length >= concurrency) {
                await Promise.race(executing);
                executing = executing.filter(p => p !== p);
            }
        }
        
        await Promise.all(executing);
        return results;
    }
}

// Test PromiseUtils
let testPromises2 = [
    createDelayedPromise("Utils Task 1", 500),
    createDelayedPromise("Utils Task 2", 300),
    createDelayedPromise("Utils Task 3", 700)
];

PromiseUtils.sequential(testPromises2).then((results) => {
    console.log("PromiseUtils sequential results:", results);
});

// 12. Practical Example: API Rate Limiting
console.log("\n📚 12. Practical Example: API Rate Limiting");
console.log("----------------------------------------");

// API rate limiter
class ApiRateLimiter {
    constructor(requestsPerSecond = 5) {
        this.requestsPerSecond = requestsPerSecond;
        this.queue = [];
        this.processing = false;
    }
    
    async makeRequest(url) {
        return new Promise((resolve, reject) => {
            this.queue.push({ url, resolve, reject });
            this.processQueue();
        });
    }
    
    async processQueue() {
        if (this.processing || this.queue.length === 0) {
            return;
        }
        
        this.processing = true;
        
        while (this.queue.length > 0) {
            let { url, resolve, reject } = this.queue.shift();
            
            try {
                let result = await this.simulateApiCall(url);
                resolve(result);
            } catch (error) {
                reject(error);
            }
            
            await PromiseUtils.delay(1000 / this.requestsPerSecond);
        }
        
        this.processing = false;
    }
    
    async simulateApiCall(url) {
        console.log(`Making API call to: ${url}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve(`Response from ${url}`);
                } else {
                    reject(new Error(`API call to ${url} failed`));
                }
            }, Math.random() * 500 + 200);
        });
    }
}

// Test rate limiter
let rateLimiter = new ApiRateLimiter(2); // 2 requests per second

let apiPromises = [
    rateLimiter.makeRequest("/users"),
    rateLimiter.makeRequest("/posts"),
    rateLimiter.makeRequest("/comments"),
    rateLimiter.makeRequest("/likes"),
    rateLimiter.makeRequest("/shares")
];

Promise.allSettled(apiPromises).then((results) => {
    console.log("Rate limited API calls completed:");
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`API call ${index + 1}: Success - ${result.value}`);
        } else {
            console.log(`API call ${index + 1}: Failed - ${result.reason.message}`);
        }
    });
});

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Promise.all() for parallel execution");
console.log("- Promise.race() for first completion");
console.log("- Promise.allSettled() for all results");
console.log("- Promise.any() for first success");
console.log("- Use custom utilities for common patterns");
console.log("- Implement concurrency control when needed");
console.log("- Consider rate limiting for API calls");
console.log("- Use memoization for expensive operations");

console.log("\n📝 Practice Exercises:");
console.log("1. Use Promise.all() for parallel operations");
console.log("2. Implement timeout with Promise.race()");
console.log("3. Handle mixed results with Promise.allSettled()");
console.log("4. Create custom Promise utilities");
console.log("5. Build rate-limited API clients");
