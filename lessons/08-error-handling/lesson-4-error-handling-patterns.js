// Lesson 4: Error Handling Patterns
// Advanced error handling strategies and patterns

console.log("🎓 Lesson 4: Error Handling Patterns");
console.log("==================================");

// 📚 1. Error Handling Strategies
console.log("\n📚 1. Error Handling Strategies");
console.log("-------------------------------");

// Strategy 1: Fail Fast => Immediately throw errors when invalid conditions are detected
console.log("Strategy 1: Fail Fast");
function validateInput(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    if (typeof input !== 'string') {
        throw new TypeError("Input must be a string");
    }
    if (input.length === 0) {
        throw new Error("Input cannot be empty");
    }
    return true;
}

try {
    validateInput("valid input");
    console.log("✓ Input validation passed");
} catch (error) {
    console.log("✗ Validation failed:", error.message);
}

// Strategy 2: Graceful Degradation => Provide fallback mechanisms when errors occur
console.log("\nStrategy 2: Graceful Degradation");
function getLocalStorageData(key, fallback = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch (error) {
        console.warn("Failed to get localStorage data:", error.message);
        return fallback;
    }
}

const userData = getLocalStorageData("user", { name: "Guest" });
console.log("User data:", userData);

// Strategy 3: Error Recovery
console.log("\nStrategy 3: Error Recovery");
function processData(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        console.warn("JSON parsing failed, trying alternative format");
        // Try alternative parsing
        try {
            return eval(`(${data})`);
        } catch (evalError) {
            console.error("All parsing methods failed");
            return { error: "Invalid data format" };
        }
    }
}

const validJson = '{"name": "John", "age": 30}';
const invalidJson = '{name: "John", age: 30}';

console.log("Valid JSON result:", processData(validJson));
console.log("Invalid JSON result:", processData(invalidJson));

// 📚 2. Retry Mechanisms
console.log("\n📚 2. Retry Mechanisms");
console.log("---------------------");

// Basic Retry Pattern
function retryOperation(operation, maxRetries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        
        function attempt() {
            operation()
                .then(resolve)
                .catch(error => {
                    attempts++;
                    if (attempts < maxRetries) {
                        console.log(`Attempt ${attempts} failed, retrying in ${delay}ms...`);
                        setTimeout(attempt, delay);
                    } else {
                        reject(new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`));
                    }
                });
        }
        
        attempt();
    });
}

// Example: API call with retry
function mockApiCall() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7; // 30% success rate
        if (success) {
            resolve({ data: "API call successful" });
        } else {
            reject(new Error("API call failed"));
        }
    });
}

retryOperation(mockApiCall, 3, 500)
    .then(result => console.log("✓ API call succeeded:", result))
    .catch(error => console.log("✗ API call failed:", error.message));

// Exponential Backoff Retry
function retryWithExponentialBackoff(operation, maxRetries = 5, baseDelay = 1000) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        
        function attempt() {
            operation()
                .then(resolve)
                .catch(error => {
                    attempts++;
                    if (attempts < maxRetries) {
                        const delay = baseDelay * Math.pow(2, attempts - 1);
                        console.log(`Attempt ${attempts} failed, retrying in ${delay}ms...`);
                        setTimeout(attempt, delay);
                    } else {
                        reject(new Error(`Operation failed after ${maxRetries} attempts`));
                    }
                });
        }
        
        attempt();
    });
}

// 📚 3. Circuit Breaker Pattern ===> the
console.log("\n📚 3. Circuit Breaker Pattern");
console.log("-----------------------------");

class CircuitBreaker {
    constructor(threshold = 5, timeout = 60000) {
        this.threshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    }
    
    async execute(operation) {
        if (this.state === 'OPEN') {
            if (Date.now() - this.lastFailureTime > this.timeout) {
                this.state = 'HALF_OPEN';
                console.log("Circuit breaker: Moving to HALF_OPEN state");
            } else {
                throw new Error("Circuit breaker is OPEN");
            }
        }
        
        try {
            const result = await operation();
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failureCount = 0;
        this.state = 'CLOSED';
    }
    
    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        
        if (this.failureCount >= this.threshold) {
            this.state = 'OPEN';
            console.log("Circuit breaker: Moving to OPEN state");
        }
    }
    
    getState() {
        return {
            state: this.state,
            failureCount: this.failureCount,
            lastFailureTime: this.lastFailureTime
        };
    }
}

// Example usage
const circuitBreaker = new CircuitBreaker(3, 5000);

async function unreliableService() {
    const success = Math.random() > 0.3; // 70% failure rate
    if (success) {
        return { message: "Service call successful" };
    } else {
        throw new Error("Service temporarily unavailable");
    }
}

// Test circuit breaker
async function testCircuitBreaker() {
    for (let i = 0; i < 10; i++) {
        try {
            const result = await circuitBreaker.execute(unreliableService);
            console.log(`Attempt ${i + 1}:`, result);
        } catch (error) {
            console.log(`Attempt ${i + 1}:`, error.message);
        }
        console.log("Circuit state:", circuitBreaker.getState());
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Uncomment to test circuit breaker
// testCircuitBreaker();

// 📚 4. Error Boundaries
console.log("\n📚 4. Error Boundaries");
console.log("---------------------");

// Error Boundary for Functions
function withErrorBoundary(fn, fallback = null) {
    return function(...args) {
        try {
            return fn.apply(this, args);
        } catch (error) {
            console.error("Error caught by boundary:", error.message);
            return fallback;
        }
    };
}

// Example: Safe array processing
function processArray(arr) {
    return arr.map(item => {
        if (typeof item !== 'number') {
            throw new Error(`Invalid item: ${item}`);
        }
        return item * 2;
    });
}

const safeProcessArray = withErrorBoundary(processArray, []);
const testArray = [1, 2, 'invalid', 4, 5];

console.log("Original array:", testArray);
console.log("Processed array:", safeProcessArray(testArray));

// Error Boundary for Async Functions
function withAsyncErrorBoundary(fn, fallback = null) {
    return async function(...args) {
        try {
            return await fn.apply(this, args);
        } catch (error) {
            console.error("Async error caught by boundary:", error.message);
            return fallback;
        }
    };
}

// 📚 5. Error Aggregation =>
console.log("\n📚 5. Error Aggregation");
console.log("----------------------");

class ErrorAggregator {
    constructor() {
        this.errors = [];
        this.maxErrors = 10;
    }
    
    addError(error, context = {}) {
        const errorInfo = {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            context: context
        };
        
        this.errors.push(errorInfo);
        
        // Keep only the most recent errors
        if (this.errors.length > this.maxErrors) {
            this.errors.shift();
        }
    }
    
    getErrors() {
        return [...this.errors];
    }
    
    clearErrors() {
        this.errors = [];
    }
    
    hasErrors() {
        return this.errors.length > 0;
    }
    
    getErrorSummary() {
        const errorCounts = {};
        this.errors.forEach(error => {
            errorCounts[error.message] = (errorCounts[error.message] || 0) + 1;
        });
        return errorCounts;
    }
}

// Example usage
const errorAggregator = new ErrorAggregator();

// Simulate some errors
try {
    throw new Error("Database connection failed");
} catch (error) {
    errorAggregator.addError(error, { operation: "database_connect" });
}

try {
    throw new Error("API timeout");
} catch (error) {
    errorAggregator.addError(error, { operation: "api_call", endpoint: "/users" });
}

console.log("Error summary:", errorAggregator.getErrorSummary());

// 📚 6. Error Monitoring and Logging
console.log("\n📚 6. Error Monitoring and Logging");
console.log("----------------------------------");

class ErrorLogger {
    constructor() {
        this.logs = [];
    }
    
    logError(error, level = 'error', context = {}) {
        const logEntry = {
            level: level,
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            context: context,
            userAgent: navigator.userAgent || 'Node.js',
            url: window.location?.href || 'N/A'
        };
        
        this.logs.push(logEntry);
        
        // In a real application, you would send this to a logging service
        console.log(`[${level.toUpperCase()}] ${error.message}`, logEntry);
    }
    
    getLogs(level = null) {
        if (level) {
            return this.logs.filter(log => log.level === level);
        }
        return [...this.logs];
    }
    
    clearLogs() {
        this.logs = [];
    }
}

const errorLogger = new ErrorLogger();

// Example: Logging different types of errors
try {
    throw new Error("Critical system error");
} catch (error) {
    errorLogger.logError(error, 'critical', { component: 'database' });
}

try {
    throw new Error("Warning: Low memory");
} catch (error) {
    errorLogger.logError(error, 'warning', { component: 'memory' });
}

// 📚 7. Error Recovery Strategies
console.log("\n📚 7. Error Recovery Strategies");
console.log("-------------------------------");

// Strategy 1: Fallback Values
function getConfigValue(key, fallback = null) {
    try {
        const config = JSON.parse(localStorage.getItem('config') || '{}');
        return config[key] || fallback;
    } catch (error) {
        console.warn("Failed to load config, using fallback");
        return fallback;
    }
}

// Strategy 2: Alternative Operations
async function fetchDataWithFallback(url, fallbackUrl) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.warn("Primary data source failed, trying fallback");
        try {
            const response = await fetch(fallbackUrl);
            return await response.json();
        } catch (fallbackError) {
            throw new Error("All data sources failed");
        }
    }
}

// Strategy 3: Graceful Degradation
function createFeatureToggle(featureName, fallbackFunction) {
    return function(...args) {
        try {
            // Try to use the feature
            if (window[featureName] && typeof window[featureName] === 'function') {
                return window[featureName](...args);
            } else {
                throw new Error(`Feature ${featureName} not available`);
            }
        } catch (error) {
            console.warn(`Feature ${featureName} failed, using fallback`);
            return fallbackFunction(...args);
        }
    };
}

// Example: Feature toggle for geolocation
const getLocation = createFeatureToggle('geolocation', () => {
    return { lat: 0, lng: 0, source: 'fallback' };
});

console.log("Location:", getLocation());

// 📚 8. Best Practices Summary
console.log("\n📚 8. Best Practices Summary");
console.log("----------------------------");

console.log("1. Always handle errors at the appropriate level");
console.log("2. Use specific error types for different scenarios");
console.log("3. Implement retry mechanisms for transient failures");
console.log("4. Use circuit breakers for external service calls");
console.log("5. Provide meaningful error messages to users");
console.log("6. Log errors with sufficient context for debugging");
console.log("7. Implement graceful degradation for non-critical features");
console.log("8. Test error scenarios thoroughly");
console.log("9. Monitor error rates and patterns in production");
console.log("10. Have a clear error recovery strategy");

console.log("\n🎉 Lesson 4 Complete: Error Handling Patterns");
console.log("You now understand advanced error handling strategies and patterns!");
