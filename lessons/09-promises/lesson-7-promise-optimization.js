// Lesson 7: Promise Optimization
// This file teaches Promise performance optimization and best practices

console.log("⚡ Welcome to Promises Lesson 7: Promise Optimization!");
console.log("====================================================");

// 1. Performance Considerations
console.log("\n📚 1. Performance Considerations");
console.log("-----------------------------");

// Benchmarking function
function benchmark(name, operation, iterations = 1000) {
    let start = performance.now();
    for (let i = 0; i < iterations; i++) {
        operation();
    }
    let end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
    return end - start;
}

// Test different Promise patterns
console.log("Performance comparison (1000 operations):");

// Promise constructor vs Promise.resolve()
let constructorTime = benchmark("Promise constructor", () => {
    new Promise((resolve) => resolve(42));
});

let resolveTime = benchmark("Promise.resolve()", () => {
    Promise.resolve(42);
});

console.log(`Promise.resolve() is ${(constructorTime / resolveTime).toFixed(2)}x faster than constructor`);

// 2. Memory Management
console.log("\n📚 2. Memory Management");
console.log("---------------------");

// Memory leak prevention
class PromiseManager {
    constructor() {
        this.promises = new Set();
        this.maxPromises = 100;
    }
    
    addPromise(promise) {
        if (this.promises.size >= this.maxPromises) {
            console.log("Too many promises, cleaning up");
            this.cleanup();
        }
        
        this.promises.add(promise);
        
        // Auto-cleanup when promise settles
        promise.finally(() => {
            this.promises.delete(promise);
        });
        
        return promise;
    }
    
    cleanup() {
        // Remove settled promises
        for (let promise of this.promises) {
            if (promise.state === 'fulfilled' || promise.state === 'rejected') {
                this.promises.delete(promise);
            }
        }
    }
    
    getActivePromises() {
        return this.promises.size;
    }
}

// Test memory management
let promiseManager = new PromiseManager();

for (let i = 0; i < 10; i++) {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve(i), Math.random() * 1000);
    });
    
    promiseManager.addPromise(promise);
}

console.log("Active promises:", promiseManager.getActivePromises());

// 3. Promise Pooling
console.log("\n📚 3. Promise Pooling");
console.log("--------------------");

// Promise pool for concurrency control
class PromisePool {
    constructor(concurrency = 5) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async add(promiseFactory) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promiseFactory,
                resolve,
                reject
            });
            
            this.process();
        });
    }
    
    async process() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }
        
        this.running++;
        let { promiseFactory, resolve, reject } = this.queue.shift();
        
        try {
            let result = await promiseFactory();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.process();
        }
    }
    
    getStats() {
        return {
            running: this.running,
            queued: this.queue.length,
            concurrency: this.concurrency
        };
    }
}

// Test promise pool
let pool = new PromisePool(3);

let poolPromises = Array.from({ length: 10 }, (_, i) => 
    pool.add(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Pool task ${i + 1} completed`);
                resolve(`Result ${i + 1}`);
            }, Math.random() * 1000 + 500);
        });
    })
);

Promise.all(poolPromises).then((results) => {
    console.log("Pool results:", results);
    console.log("Pool stats:", pool.getStats());
});

// 4. Caching and Memoization
console.log("\n📚 4. Caching and Memoization");
console.log("----------------------------");

// Promise memoization
function memoizePromise(fn, ttl = 60000) {
    let cache = new Map();
    
    return function(...args) {
        let key = JSON.stringify(args);
        let now = Date.now();
        
        if (cache.has(key)) {
            let { value, timestamp } = cache.get(key);
            if (now - timestamp < ttl) {
                console.log("Cache hit for key:", key);
                return value;
            } else {
                cache.delete(key);
            }
        }
        
        console.log("Cache miss for key:", key);
        let promise = fn.apply(this, args);
        cache.set(key, { value: promise, timestamp: now });
        
        return promise;
    };
}

// Test memoization
let expensiveOperation = memoizePromise((id) => {
    console.log(`Expensive operation for ID: ${id}`);
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

// 5. Error Handling Optimization
console.log("\n📚 5. Error Handling Optimization");
console.log("--------------------------------");

// Optimized error handling
class OptimizedErrorHandler {
    constructor() {
        this.errorCounts = new Map();
        this.maxRetries = 3;
        this.backoffMs = 1000;
    }
    
    async handleWithRetry(operation, context = {}) {
        let errorCount = this.errorCounts.get(operation.name) || 0;
        
        if (errorCount >= this.maxRetries) {
            throw new Error(`Operation ${operation.name} failed after ${this.maxRetries} retries`);
        }
        
        try {
            let result = await operation();
            this.errorCounts.delete(operation.name);
            return result;
        } catch (error) {
            this.errorCounts.set(operation.name, errorCount + 1);
            
            console.log(`Operation ${operation.name} failed (attempt ${errorCount + 1}):`, error.message);
            
            if (errorCount + 1 < this.maxRetries) {
                let delay = this.backoffMs * Math.pow(2, errorCount);
                console.log(`Retrying in ${delay}ms`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.handleWithRetry(operation, context);
            } else {
                throw error;
            }
        }
    }
    
    getErrorStats() {
        return Object.fromEntries(this.errorCounts);
    }
}

// Test optimized error handling
let errorHandler = new OptimizedErrorHandler();

let failingOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                resolve("Operation succeeded!");
            } else {
                reject(new Error("Operation failed"));
            }
        }, 500);
    });
};

errorHandler.handleWithRetry(failingOperation)
    .then((result) => {
        console.log("Optimized error handling result:", result);
    })
    .catch((error) => {
        console.log("Optimized error handling failed:", error.message);
    });

// 6. Promise Batching
console.log("\n📚 6. Promise Batching");
console.log("--------------------");

// Batch similar operations
class PromiseBatcher {
    constructor(batchSize = 10, batchDelay = 100) {
        this.batchSize = batchSize;
        this.batchDelay = batchDelay;
        this.batch = [];
        this.timer = null;
    }
    
    add(operation) {
        return new Promise((resolve, reject) => {
            this.batch.push({ operation, resolve, reject });
            
            if (this.batch.length >= this.batchSize) {
                this.processBatch();
            } else if (!this.timer) {
                this.timer = setTimeout(() => {
                    this.processBatch();
                }, this.batchDelay);
            }
        });
    }
    
    async processBatch() {
        if (this.batch.length === 0) return;
        
        let currentBatch = this.batch.splice(0, this.batchSize);
        clearTimeout(this.timer);
        this.timer = null;
        
        console.log(`Processing batch of ${currentBatch.length} operations`);
        
        try {
            let results = await Promise.all(
                currentBatch.map(item => item.operation())
            );
            
            currentBatch.forEach((item, index) => {
                item.resolve(results[index]);
            });
        } catch (error) {
            currentBatch.forEach(item => {
                item.reject(error);
            });
        }
    }
}

// Test promise batching
let batcher = new PromiseBatcher(5, 200);

let batchPromises = Array.from({ length: 15 }, (_, i) => 
    batcher.add(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Batch operation ${i + 1} completed`);
                resolve(`Result ${i + 1}`);
            }, Math.random() * 500 + 200);
        });
    })
);

Promise.all(batchPromises).then((results) => {
    console.log("Batch results:", results);
});

// 7. Promise Streaming
console.log("\n📚 7. Promise Streaming");
console.log("----------------------");

// Stream large datasets
async function* promiseStream(operations, concurrency = 3) {
    let running = [];
    let index = 0;
    
    while (index < operations.length || running.length > 0) {
        // Start new operations up to concurrency limit
        while (running.length < concurrency && index < operations.length) {
            let operation = operations[index++];
            let promise = operation().then(result => ({ result, index: index - 1 }));
            running.push(promise);
        }
        
        // Wait for at least one to complete
        if (running.length > 0) {
            let { result, index: completedIndex } = await Promise.race(running);
            running = running.filter(p => p !== running.find(p => p.then));
            yield { result, index: completedIndex };
        }
    }
}

// Test promise streaming
let streamOperations = Array.from({ length: 10 }, (_, i) => 
    () => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stream operation ${i + 1} completed`);
            resolve(`Stream result ${i + 1}`);
        }, Math.random() * 1000 + 500);
    })
);

async function testPromiseStream() {
    console.log("Starting promise stream");
    for await (let { result, index } of promiseStream(streamOperations, 3)) {
        console.log(`Stream result ${index + 1}:`, result);
    }
    console.log("Promise stream completed");
}

testPromiseStream();

// 8. Performance Monitoring
console.log("\n📚 8. Performance Monitoring");
console.log("---------------------------");

// Promise performance monitor
class PromiseMonitor {
    constructor() {
        this.metrics = {
            total: 0,
            resolved: 0,
            rejected: 0,
            totalTime: 0,
            averageTime: 0,
            maxTime: 0,
            minTime: Infinity
        };
    }
    
    wrap(promise, name = 'unknown') {
        this.metrics.total++;
        let start = performance.now();
        
        return promise
            .then(result => {
                let duration = performance.now() - start;
                this.updateMetrics('resolved', duration);
                console.log(`Promise ${name} resolved in ${duration.toFixed(2)}ms`);
                return result;
            })
            .catch(error => {
                let duration = performance.now() - start;
                this.updateMetrics('rejected', duration);
                console.log(`Promise ${name} rejected in ${duration.toFixed(2)}ms`);
                throw error;
            });
    }
    
    updateMetrics(status, duration) {
        this.metrics[status]++;
        this.metrics.totalTime += duration;
        this.metrics.averageTime = this.metrics.totalTime / this.metrics.total;
        this.metrics.maxTime = Math.max(this.metrics.maxTime, duration);
        this.metrics.minTime = Math.min(this.metrics.minTime, duration);
    }
    
    getMetrics() {
        return { ...this.metrics };
    }
    
    reset() {
        this.metrics = {
            total: 0,
            resolved: 0,
            rejected: 0,
            totalTime: 0,
            averageTime: 0,
            maxTime: 0,
            minTime: Infinity
        };
    }
}

// Test performance monitoring
let monitor = new PromiseMonitor();

let monitoredPromises = Array.from({ length: 5 }, (_, i) => 
    monitor.wrap(
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.2) {
                    resolve(`Monitored result ${i + 1}`);
                } else {
                    reject(new Error(`Monitored error ${i + 1}`));
                }
            }, Math.random() * 1000 + 500);
        }),
        `operation-${i + 1}`
    )
);

Promise.allSettled(monitoredPromises).then(() => {
    console.log("Performance metrics:", monitor.getMetrics());
});

// 9. Best Practices
console.log("\n📚 9. Best Practices");
console.log("-------------------");

console.log("Best practices for Promise optimization:");
console.log("1. Use Promise.resolve() instead of new Promise() when possible");
console.log("2. Implement proper error handling and retry mechanisms");
console.log("3. Use Promise.all() for parallel operations");
console.log("4. Implement caching for expensive operations");
console.log("5. Use concurrency control for resource management");
console.log("6. Monitor performance and memory usage");
console.log("7. Clean up unused Promises");
console.log("8. Use streaming for large datasets");
console.log("9. Implement proper error boundaries");
console.log("10. Test performance under load");

// Example of optimized Promise usage
class OptimizedPromiseService {
    constructor() {
        this.cache = new Map();
        this.pool = new PromisePool(5);
        this.monitor = new PromiseMonitor();
    }
    
    async getData(id) {
        let cacheKey = `data-${id}`;
        
        if (this.cache.has(cacheKey)) {
            console.log("Cache hit for data:", id);
            return this.cache.get(cacheKey);
        }
        
        let promise = this.pool.add(() => this.fetchData(id));
        let monitoredPromise = this.monitor.wrap(promise, `getData-${id}`);
        
        try {
            let result = await monitoredPromise;
            this.cache.set(cacheKey, result);
            return result;
        } catch (error) {
            console.log("Error fetching data:", error.message);
            throw error;
        }
    }
    
    async fetchData(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve({ id, data: `Data for ${id}` });
                } else {
                    reject(new Error(`Failed to fetch data for ${id}`));
                }
            }, Math.random() * 1000 + 500);
        });
    }
    
    getStats() {
        return {
            cache: this.cache.size,
            pool: this.pool.getStats(),
            monitor: this.monitor.getMetrics()
        };
    }
}

// Test optimized service
let service = new OptimizedPromiseService();

let servicePromises = Array.from({ length: 10 }, (_, i) => 
    service.getData(i + 1)
);

Promise.allSettled(servicePromises).then(() => {
    console.log("Service stats:", service.getStats());
});

// 10. Common Pitfalls
console.log("\n📚 10. Common Pitfalls");
console.log("---------------------");

console.log("Common Promise pitfalls to avoid:");
console.log("1. Promise constructor antipattern");
console.log("2. Forgetting to return Promises in chains");
console.log("3. Not handling errors properly");
console.log("4. Creating too many Promises at once");
console.log("5. Not cleaning up resources");
console.log("6. Using sequential operations when parallel is possible");
console.log("7. Not implementing proper timeout handling");
console.log("8. Ignoring memory leaks");
console.log("9. Not monitoring performance");
console.log("10. Over-optimizing without measuring");

// Example of common pitfalls
function commonPitfalls() {
    // Pitfall 1: Promise constructor antipattern
    function badPromise(value) {
        return new Promise((resolve) => {
            resolve(value);
        });
    }
    
    function goodPromise(value) {
        return Promise.resolve(value);
    }
    
    // Pitfall 2: Forgetting to return
    function badChain() {
        return Promise.resolve(5)
            .then(value => {
                value * 2; // Missing return!
            });
    }
    
    function goodChain() {
        return Promise.resolve(5)
            .then(value => {
                return value * 2; // Correct!
            });
    }
    
    // Test the differences
    badChain().then(result => {
        console.log("Bad chain result:", result); // undefined
    });
    
    goodChain().then(result => {
        console.log("Good chain result:", result); // 10
    });
}

commonPitfalls();

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use Promise.resolve() instead of new Promise() when possible");
console.log("- Implement proper error handling and retry mechanisms");
console.log("- Use Promise.all() for parallel operations");
console.log("- Implement caching for expensive operations");
console.log("- Use concurrency control for resource management");
console.log("- Monitor performance and memory usage");
console.log("- Clean up unused Promises");
console.log("- Use streaming for large datasets");
console.log("- Avoid common Promise pitfalls");
console.log("- Measure before optimizing");

console.log("\n📝 Practice Exercises:");
console.log("1. Implement Promise pooling for concurrency control");
console.log("2. Create a Promise caching system");
console.log("3. Build a performance monitoring system");
console.log("4. Implement Promise streaming for large datasets");
console.log("5. Optimize existing Promise-based code");
