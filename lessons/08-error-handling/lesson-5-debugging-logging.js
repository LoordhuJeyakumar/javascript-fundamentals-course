// Lesson 5: Debugging and Logging
// Debugging techniques and error logging strategies

console.log("🎓 Lesson 5: Debugging and Logging");
console.log("=================================");

// 📚 1. Console Debugging Techniques
console.log("\n📚 1. Console Debugging Techniques");
console.log("----------------------------------");

// Basic console methods
console.log("Basic console methods:");
console.log("console.log() - General information");
console.log("console.warn() - Warnings");
console.log("console.error() - Errors");
console.log("console.info() - Informational messages");
console.log("console.debug() - Debug information");

// Console grouping
console.group("Console Grouping Examples");
console.log("This is inside a group");
console.group("Nested Group");
console.log("This is in a nested group");
console.groupEnd();
console.groupEnd();

// Console table for objects and arrays
const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "Chicago" }
];

console.log("Users as table:");
console.table(users);

// Console time for performance measurement
console.time("Array Processing");
const numbers = Array.from({ length: 1000000 }, (_, i) => i);
const doubled = numbers.map(n => n * 2);
console.timeEnd("Array Processing");

// Console trace for call stack
function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    console.trace("Call stack trace:");
}

functionA();

// 📚 2. Advanced Console Techniques
console.log("\n📚 2. Advanced Console Techniques");
console.log("--------------------------------");

// Conditional logging
const DEBUG = true;
const LOG_LEVEL = 'debug';

function debugLog(message, level = 'info') {
    if (!DEBUG) return;
    
    const levels = { error: 0, warn: 1, info: 2, debug: 3 };
    const currentLevel = levels[LOG_LEVEL] || 0;
    const messageLevel = levels[level] || 0;
    
    if (messageLevel <= currentLevel) {
        console[level](`[${level.toUpperCase()}] ${message}`);
    }
}

debugLog("This is a debug message", "debug");
debugLog("This is an info message", "info");
debugLog("This is a warning", "warn");
debugLog("This is an error", "error");

// Console styling
console.log("%cStyled Console Output", "color: blue; font-size: 20px; font-weight: bold;");
console.log("%cRed text with %cblue background", "color: red;", "background-color: blue; color: white;");

// Console assertions => issue warnings if condition is false 
function validateAge(age) {
    console.assert(typeof age === 'number', "Age must be a number");
    console.assert(age >= 0, "Age must be positive");
    console.assert(age <= 150, "Age must be realistic");
    return age;
}

try {
    validateAge(25);
    validateAge("not a number");
} catch (error) {
    console.error("Validation failed:", error.message);
}

// 📚 3. Error Logging Strategies
console.log("\n📚 3. Error Logging Strategies");
console.log("-----------------------------");

// Basic error logging
class SimpleLogger {
    constructor() {
        this.logs = [];
    }
    
    log(level, message, error = null, context = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level: level,
            message: message,
            error: error ? {
                name: error.name,
                message: error.message,
                stack: error.stack
            } : null,
            context: context
        };
        
        this.logs.push(logEntry);
        console[level](`[${level.toUpperCase()}] ${message}`, logEntry);
    }
    
    error(message, error, context = {}) {
        this.log('error', message, error, context);
    }
    
    warn(message, context = {}) {
        this.log('warn', message, null, context);
    }
    
    info(message, context = {}) {
        this.log('info', message, null, context);
    }
    
    debug(message, context = {}) {
        this.log('debug', message, null, context);
    }
    
    getLogs(level = null) {
        if (level) {
            return this.logs.filter(log => log.level === level);
        }
        return [...this.logs];
    }
}

const logger = new SimpleLogger();

// Example usage
try {
    throw new Error("Database connection failed");
} catch (error) {
    logger.error("Failed to connect to database", error, {
        operation: "database_connect",
        retryCount: 3
    });
}

logger.warn("Memory usage is high", { memoryUsage: "85%" });
logger.info("User logged in", { userId: 123, timestamp: Date.now() });

// 📚 4. Stack Trace Analysis
console.log("\n📚 4. Stack Trace Analysis");
console.log("-------------------------");

// Custom error with enhanced stack trace
class EnhancedError extends Error {
    constructor(message, context = {}) {
        super(message);
        this.name = 'EnhancedError';
        this.context = context;
        this.timestamp = new Date().toISOString();
        
        // Capture stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EnhancedError);
        }
    }
    
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            context: this.context,
            timestamp: this.timestamp
        };
    }
}

// Function to analyze stack trace
function analyzeStackTrace(error) {
    if (!error.stack) return null;
    
    const stackLines = error.stack.split('\n');
    const analysis = {
        errorMessage: error.message,
        errorName: error.name,
        stackLines: stackLines.length,
        functions: [],
        files: []
    };
    
    stackLines.forEach((line, index) => {
        if (index === 0) return; // Skip error message line
        
        // Extract function name and file info
        const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
        if (match) {
            analysis.functions.push({
                function: match[1],
                file: match[2],
                line: parseInt(match[3]),
                column: parseInt(match[4])
            });
            analysis.files.push(match[2]);
        }
    });
    
    return analysis;
}

// Example: Create and analyze an error
function problematicFunction() {
    throw new EnhancedError("Something went wrong", {
        userId: 123,
        operation: "data_processing"
    });
}

try {
    problematicFunction();
} catch (error) {
    const analysis = analyzeStackTrace(error);
    console.log("Stack trace analysis:", analysis);
}

// 📚 5. Performance Monitoring
console.log("\n📚 5. Performance Monitoring");
console.log("---------------------------");

// Performance monitoring class
class PerformanceMonitor {
    constructor() {
        this.metrics = new Map();
        this.observers = [];
    }
    
    startTiming(name) {
        this.metrics.set(name, {
            startTime: performance.now(),
            endTime: null,
            duration: null
        });
    }
    
    endTiming(name) {
        const metric = this.metrics.get(name);
        if (metric) {
            metric.endTime = performance.now();
            metric.duration = metric.endTime - metric.startTime;
            
            // Notify observers
            this.observers.forEach(observer => {
                observer(name, metric);
            });
        }
    }
    
    getMetric(name) {
        return this.metrics.get(name);
    }
    
    getAllMetrics() {
        return Object.fromEntries(this.metrics);
    }
    
    addObserver(observer) {
        this.observers.push(observer);
    }
    
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
}

const perfMonitor = new PerformanceMonitor();

// Add performance observer
perfMonitor.addObserver((name, metric) => {
    if (metric.duration > 100) { // Log slow operations
        console.warn(`Slow operation detected: ${name} took ${metric.duration.toFixed(2)}ms`);
    }
});

// Example: Monitor function performance
function slowOperation() {
    perfMonitor.startTiming('slowOperation');
    
    // Simulate slow operation
    const start = Date.now();
    while (Date.now() - start < 50) {
        // Busy wait
    }
    
    perfMonitor.endTiming('slowOperation');
}

slowOperation();

// 📚 6. Memory Monitoring
console.log("\n📚 6. Memory Monitoring");
console.log("----------------------");

// Memory monitoring utilities
function getMemoryUsage() {
    if (performance.memory) {
        return {
            used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
        };
    }
    return null;
}

function logMemoryUsage(label = 'Memory Usage') {
    const memory = getMemoryUsage();
    if (memory) {
        console.log(`${label}:`, memory);
        
        // Warn if memory usage is high
        const usagePercent = (memory.used / memory.limit) * 100;
        if (usagePercent > 80) {
            console.warn(`High memory usage: ${usagePercent.toFixed(1)}%`);
        }
    }
}

// Monitor memory usage
logMemoryUsage("Initial");

// Create some objects to increase memory usage
const largeArray = Array.from({ length: 100000 }, (_, i) => ({ id: i, data: `item-${i}` }));
logMemoryUsage("After creating large array");

// Clean up
largeArray.length = 0;
logMemoryUsage("After cleanup");

// 📚 7. Error Reporting
console.log("\n📚 7. Error Reporting");
console.log("--------------------");

// Error reporting service
class ErrorReporter {
    constructor(config = {}) {
        this.config = {
            endpoint: config.endpoint || '/api/errors',
            batchSize: config.batchSize || 10,
            flushInterval: config.flushInterval || 30000,
            ...config
        };
        this.errorQueue = [];
        this.setupGlobalErrorHandlers();
    }
    
    setupGlobalErrorHandlers() {
        // Global error handler
        window.addEventListener('error', (event) => {
            this.reportError({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                stack: event.error?.stack
            });
        });
        
        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            this.reportError({
                type: 'promise',
                message: event.reason?.message || 'Unhandled promise rejection',
                stack: event.reason?.stack
            });
        });
    }
    
    reportError(errorData) {
        const error = {
            ...errorData,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            userId: this.getCurrentUserId()
        };
        
        this.errorQueue.push(error);
        
        // Flush if batch size reached
        if (this.errorQueue.length >= this.config.batchSize) {
            this.flush();
        }
    }
    
    getCurrentUserId() {
        // In a real app, this would get the current user ID
        return localStorage.getItem('userId') || 'anonymous';
    }
    
    async flush() {
        if (this.errorQueue.length === 0) return;
        
        const errors = [...this.errorQueue];
        this.errorQueue = [];
        
        try {
            // In a real app, this would send to your error reporting service
            console.log('Sending errors to reporting service:', errors);
            // await fetch(this.config.endpoint, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ errors })
            // });
        } catch (error) {
            console.error('Failed to send error report:', error);
            // Re-queue errors for retry
            this.errorQueue.unshift(...errors);
        }
    }
    
    start() {
        // Flush errors periodically
        setInterval(() => this.flush(), this.config.flushInterval);
    }
}

// Initialize error reporter
const errorReporter = new ErrorReporter({
    endpoint: '/api/errors',
    batchSize: 5,
    flushInterval: 10000
});

errorReporter.start();

// 📚 8. Debugging Tools and Utilities
console.log("\n📚 8. Debugging Tools and Utilities");
console.log("----------------------------------");

// Debug utility functions
const DebugUtils = {
    // Log function calls
    logCalls(fn, name) {
        return function(...args) {
            console.log(`Calling ${name} with args:`, args);
            const result = fn.apply(this, args);
            console.log(`${name} returned:`, result);
            return result;
        };
    },
    
    // Measure function execution time
    measureTime(fn, name) {
        return function(...args) {
            const start = performance.now();
            const result = fn.apply(this, args);
            const end = performance.now();
            console.log(`${name} executed in ${(end - start).toFixed(2)}ms`);
            return result;
        };
    },
    
    // Count function calls
    countCalls(fn, name) {
        let count = 0;
        return function(...args) {
            count++;
            console.log(`${name} called ${count} times`);
            return fn.apply(this, args);
        };
    },
    
    // Validate function arguments
    validateArgs(fn, validator) {
        return function(...args) {
            if (!validator(args)) {
                throw new Error(`Invalid arguments: ${JSON.stringify(args)}`);
            }
            return fn.apply(this, args);
        };
    }
};

// Example usage
function add(a, b) {
    return a + b;
}

const loggedAdd = DebugUtils.logCalls(add, 'add');
const timedAdd = DebugUtils.measureTime(add, 'add');
const countedAdd = DebugUtils.countCalls(add, 'add');

console.log("Testing debug utilities:");
loggedAdd(2, 3);
timedAdd(4, 5);
countedAdd(6, 7);
countedAdd(8, 9);

// 📚 9. Best Practices for Debugging
console.log("\n📚 9. Best Practices for Debugging");
console.log("---------------------------------");

console.log("1. Use meaningful log messages with context");
console.log("2. Implement different log levels (error, warn, info, debug)");
console.log("3. Include timestamps and unique identifiers in logs");
console.log("4. Use structured logging (JSON format) for better parsing");
console.log("5. Implement log rotation to prevent disk space issues");
console.log("6. Use performance monitoring to identify bottlenecks");
console.log("7. Set up error reporting and alerting systems");
console.log("8. Test error scenarios and edge cases");
console.log("9. Use debugging tools and browser dev tools effectively");
console.log("10. Document common issues and their solutions");

console.log("\n🎉 Lesson 5 Complete: Debugging and Logging");
console.log("You now understand debugging techniques and error logging strategies!");
