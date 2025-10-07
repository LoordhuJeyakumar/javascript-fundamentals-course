// Lesson 3: Async Error Handling
// Handling errors in asynchronous operations with Promises and async/await

console.log("🎓 Lesson 3: Async Error Handling");
console.log("================================");

// 📚 1. Promise Error Handling
console.log("\n📚 1. Promise Error Handling");
console.log("----------------------------");

// Basic Promise error handling
function simulateAsyncOperation(success = true, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({ data: "Operation successful", timestamp: new Date().toISOString() });
            } else {
                reject(new Error("Async operation failed"));
            }
        }, delay);
    });
}

console.log("Promise error handling examples:");

// Success case
simulateAsyncOperation(true, 500)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

// Error case
simulateAsyncOperation(false, 500)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

// 📚 2. Async/Await Error Handling
console.log("\n📚 2. Async/Await Error Handling");
console.log("--------------------------------");

async function handleAsyncOperation() {
    try {
        console.log("Starting async operation...");
        
        // Simulate multiple async operations
        let result1 = await simulateAsyncOperation(true, 300);
        console.log("First operation:", result1);
        
        let result2 = await simulateAsyncOperation(false, 200);
        console.log("Second operation:", result2);
        
        return { success: true, results: [result1, result2] };
        
    } catch (error) {
        console.log("Async operation failed:", error.message);
        return { success: false, error: error.message };
    }
}

// Call the async function
handleAsyncOperation().then(result => {
    console.log("Final result:", result);
});

// 📚 3. Promise.all Error Handling
console.log("\n📚 3. Promise.all Error Handling");
console.log("--------------------------------");

async function handleMultiplePromises() {
    console.log("Handling multiple promises...");
    
    let promises = [
        simulateAsyncOperation(true, 200),
        simulateAsyncOperation(true, 300),
        simulateAsyncOperation(false, 400), // This will fail
        simulateAsyncOperation(true, 500)
    ];
    
    try {
        // Promise.all fails fast - if any promise rejects, the whole thing fails
        let results = await Promise.all(promises);
        console.log("All promises succeeded:", results);
        
    } catch (error) {
        console.log("Promise.all failed:", error.message);
        
        // Alternative: Use Promise.allSettled to get all results
        let settledResults = await Promise.allSettled(promises);
        console.log("Promise.allSettled results:");
        settledResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index}: Success -`, result.value);
            } else {
                console.log(`Promise ${index}: Failed -`, result.reason.message);
            }
        });
    }
}

handleMultiplePromises();

// 📚 4. Promise.race Error Handling
console.log("\n📚 4. Promise.race Error Handling");
console.log("---------------------------------");

async function handlePromiseRace() {
    console.log("Handling promise race...");
    
    let fastPromise = simulateAsyncOperation(false, 100); // Fast but fails
    let slowPromise = simulateAsyncOperation(true, 500);  // Slow but succeeds
    
    try {
        // Promise.race resolves with the first promise that settles (fulfilled or rejected)
        let result = await Promise.race([fastPromise, slowPromise]);
        console.log("Race winner (success):", result);
        
    } catch (error) {
        console.log("Race winner (error):", error.message);
        
        // Wait for the slow promise to complete
        try {
            let slowResult = await slowPromise;
            console.log("Slow promise eventually succeeded:", slowResult);
        } catch (slowError) {
            console.log("Slow promise also failed:", slowError.message);
        }
    }
}

handlePromiseRace();

// 📚 5. Error Boundaries in Async Code
console.log("\n📚 5. Error Boundaries in Async Code");
console.log("------------------------------------");

class AsyncErrorBoundary {
    constructor() {
        this.errorHandlers = new Map();
        this.retryCount = new Map();
    }
    
    async execute(operation, context = {}) {
        const operationId = context.id || 'default';
        
        try {
            return await operation();
            
        } catch (error) {
            console.log(`Operation ${operationId} failed:`, error.message);
            
            // Check if we have a custom error handler
            if (this.errorHandlers.has(operationId)) {
                const handler = this.errorHandlers.get(operationId);
                return await handler(error, context);
            }
            
            // Default error handling
            throw error;
        }
    }
    
    setErrorHandler(operationId, handler) {
        this.errorHandlers.set(operationId, handler);
    }
    
    async retry(operation, maxRetries = 3, delay = 1000) {
        const operationId = 'retry_' + Date.now();
        let attempts = 0;
        
        while (attempts < maxRetries) {
            try {
                return await operation();
            } catch (error) {
                attempts++;
                console.log(`Attempt ${attempts} failed:`, error.message);
                
                if (attempts < maxRetries) {
                    console.log(`Retrying in ${delay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                } else {
                    throw new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`);
                }
            }
        }
    }
}

// Usage example
let errorBoundary = new AsyncErrorBoundary();

// Set up error handler for specific operation
errorBoundary.setErrorHandler('api-call', async (error, context) => {
    console.log(`Custom error handler for API call: ${error.message}`);
    
    // Try fallback operation
    try {
        return await simulateAsyncOperation(true, 100);
    } catch (fallbackError) {
        throw new Error(`Both primary and fallback failed: ${error.message}`);
    }
});

// Test error boundary
async function testErrorBoundary() {
    try {
        let result = await errorBoundary.execute(
            () => simulateAsyncOperation(false, 200),
            { id: 'api-call' }
        );
        console.log("Error boundary result:", result);
        
    } catch (error) {
        console.log("Error boundary failed:", error.message);
    }
}

testErrorBoundary();

// Test retry mechanism
async function testRetry() {
    try {
        let result = await errorBoundary.retry(
            () => simulateAsyncOperation(false, 100),
            3,
            500
        );
        console.log("Retry result:", result);
        
    } catch (error) {
        console.log("Retry failed:", error.message);
    }
}

testRetry();

// 📚 6. Unhandled Promise Rejections
console.log("\n📚 6. Unhandled Promise Rejections");
console.log("----------------------------------");

// Handle unhandled promise rejections
if (typeof process !== 'undefined') {
    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Promise Rejection at:', promise, 'reason:', reason);
        // In a real application, you would log this to a monitoring service
    });
}

// Example of unhandled promise rejection (commented out to avoid actual error)
/*
// This would cause an unhandled promise rejection
simulateAsyncOperation(false, 100);
*/

// Proper way to handle promises
simulateAsyncOperation(false, 100)
    .catch(error => {
        console.log("Properly handled promise rejection:", error.message);
    });

// 📚 7. Async Error Propagation
console.log("\n📚 7. Async Error Propagation");
console.log("-----------------------------");

async function level1Async() {
    console.log("Level 1 async: Starting");
    try {
        await level2Async();
        console.log("Level 1 async: Completed");
    } catch (error) {
        console.log("Level 1 async: Caught error:", error.message);
        throw error; // Re-throw to propagate up
    }
}

async function level2Async() {
    console.log("Level 2 async: Starting");
    try {
        await level3Async();
        console.log("Level 2 async: Completed");
    } catch (error) {
        console.log("Level 2 async: Caught error:", error.message);
        throw error; // Re-throw to propagate up
    }
}

async function level3Async() {
    console.log("Level 3 async: Starting");
    throw new Error("Error in level 3 async");
    console.log("Level 3 async: Completed");
}

// Test async error propagation
level1Async().catch(error => {
    console.log("Top level caught error:", error.message);
});

// 📚 8. Practical Example: API Client with Error Handling
console.log("\n📚 8. Practical Example: API Client with Error Handling");
console.log("-----------------------------------------------------");

class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.retryCount = 0;
        this.maxRetries = 3;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...options
        };
        
        try {
            console.log(`Making request to ${url}`);
            
            // Simulate network request
            let response = await this.simulateRequest(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return response.data;
            
        } catch (error) {
            console.log(`Request to ${url} failed:`, error.message);
            
            // Retry logic
            if (this.retryCount < this.maxRetries) {
                this.retryCount++;
                console.log(`Retrying request (attempt ${this.retryCount})...`);
                await new Promise(resolve => setTimeout(resolve, 1000 * this.retryCount));
                return this.request(endpoint, options);
            }
            
            throw error;
        }
    }
    
    async simulateRequest(url, config) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate different response scenarios
                const random = Math.random();
                
                if (random < 0.3) {
                    reject(new Error("Network timeout"));
                } else if (random < 0.5) {
                    resolve({ ok: false, status: 500, statusText: "Internal Server Error" });
                } else {
                    resolve({ 
                        ok: true, 
                        status: 200, 
                        statusText: "OK",
                        data: { message: "Success", url, config }
                    });
                }
            }, 500);
        });
    }
    
    async getUsers() {
        try {
            return await this.request('/users');
        } catch (error) {
            console.log("Failed to get users:", error.message);
            return { users: [], error: error.message };
        }
    }
    
    async createUser(userData) {
        try {
            return await this.request('/users', {
                method: 'POST',
                body: JSON.stringify(userData)
            });
        } catch (error) {
            console.log("Failed to create user:", error.message);
            throw error;
        }
    }
}

// Usage example
let apiClient = new APIClient('https://api.example.com');

async function testAPIClient() {
    console.log("Testing API client...");
    
    try {
        let users = await apiClient.getUsers();
        console.log("Users:", users);
        
        let newUser = await apiClient.createUser({ name: "John Doe", email: "john@example.com" });
        console.log("Created user:", newUser);
        
    } catch (error) {
        console.log("API client test failed:", error.message);
    }
}

testAPIClient();

// 📚 9. Error Handling in Event Handlers
console.log("\n📚 9. Error Handling in Event Handlers");
console.log("------------------------------------");

class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    on(event, handler) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(handler);
    }
    
    async emit(event, data) {
        if (!this.events.has(event)) {
            return;
        }
        
        const handlers = this.events.get(event);
        
        for (let handler of handlers) {
            try {
                await handler(data);
            } catch (error) {
                console.log(`Error in event handler for ${event}:`, error.message);
                // Don't re-throw to prevent one handler from breaking others
            }
        }
    }
}

// Usage example
let eventEmitter = new EventEmitter();

// Add event handlers
eventEmitter.on('user-created', async (userData) => {
    console.log("User created:", userData);
    // Simulate some async operation that might fail
    if (Math.random() < 0.5) {
        throw new Error("Failed to send welcome email");
    }
});

eventEmitter.on('user-created', async (userData) => {
    console.log("Logging user creation:", userData);
    // This handler always succeeds
});

// Emit event
eventEmitter.emit('user-created', { name: "Jane Doe", email: "jane@example.com" });

// 📚 10. Best Practices for Async Error Handling
console.log("\n📚 10. Best Practices for Async Error Handling");
console.log("----------------------------------------------");

class AsyncErrorHandler {
    static async safeExecute(operation, context = {}) {
        try {
            return await operation();
        } catch (error) {
            console.log(`Safe execution failed: ${error.message}`);
            return { success: false, error: error.message, context };
        }
    }
    
    static async withTimeout(operation, timeoutMs = 5000) {
        return Promise.race([
            operation(),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
            )
        ]);
    }
    
    static async withRetry(operation, maxRetries = 3, delay = 1000) {
        let lastError;
        
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await operation();
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${i + 1} failed: ${error.message}`);
                
                if (i < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
                }
            }
        }
        
        throw lastError;
    }
}

// Usage example
async function testAsyncErrorHandler() {
    console.log("Testing async error handler...");
    
    // Safe execution
    let result1 = await AsyncErrorHandler.safeExecute(
        () => simulateAsyncOperation(false, 100)
    );
    console.log("Safe execution result:", result1);
    
    // With timeout
    try {
        let result2 = await AsyncErrorHandler.withTimeout(
            () => simulateAsyncOperation(true, 2000),
            1000
        );
        console.log("Timeout result:", result2);
    } catch (error) {
        console.log("Timeout error:", error.message);
    }
    
    // With retry
    try {
        let result3 = await AsyncErrorHandler.withRetry(
            () => simulateAsyncOperation(false, 100),
            3,
            500
        );
        console.log("Retry result:", result3);
    } catch (error) {
        console.log("Retry failed:", error.message);
    }
}

testAsyncErrorHandler();

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use .catch() to handle Promise rejections");
console.log("- Use try-catch with async/await for cleaner error handling");
console.log("- Promise.all fails fast, use Promise.allSettled for all results");
console.log("- Promise.race resolves with the first settled promise");
console.log("- Implement error boundaries for async operations");
console.log("- Handle unhandled promise rejections");
console.log("- Use retry mechanisms for transient failures");
console.log("- Implement proper error propagation in async chains");

console.log("\n📝 Practice Exercises:");
console.log("1. Implement async error handling in your functions");
console.log("2. Create retry mechanisms for failed operations");
console.log("3. Build error boundaries for async operations");
console.log("4. Handle unhandled promise rejections");
console.log("5. Implement comprehensive async error handling patterns");
