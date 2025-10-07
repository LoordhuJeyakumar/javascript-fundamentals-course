// Lesson 2: Custom Errors
// Creating custom error classes and structured error handling

console.log("🎓 Lesson 2: Custom Errors");
console.log("=========================");

// 📚 1. Creating Custom Error Classes
console.log("\n📚 1. Creating Custom Error Classes");
console.log("-----------------------------------");

// Basic custom error class
class ValidationError extends Error {
    constructor(message, field, value) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
        this.value = value;
        this.timestamp = new Date().toISOString();
    }
}

// Usage example
function validateEmail(email) {
    if (typeof email !== 'string') {
        throw new ValidationError("Email must be a string", "email", email);
    }
    if (!email.includes('@')) {
        throw new ValidationError("Email must contain @ symbol", "email", email);
    }
    if (email.length < 5) {
        throw new ValidationError("Email must be at least 5 characters", "email", email);
    }
    return true;
}

console.log("Custom error example:");
try {
    validateEmail("invalid-email");
} catch (error) {
    console.log("Caught ValidationError:");
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Field:", error.field);
    console.log("Value:", error.value);
    console.log("Timestamp:", error.timestamp);
}

// 📚 2. Error Inheritance and Chaining
console.log("\n📚 2. Error Inheritance and Chaining");
console.log("------------------------------------");

// Base error class
class AppError extends Error {
    constructor(message, code, statusCode = 500) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        this.timestamp = new Date().toISOString();
        this.isOperational = true;
    }
}

// Specific error types
class DatabaseError extends AppError {
    constructor(message, operation, table) {
        super(message, 'DATABASE_ERROR', 500);
        this.operation = operation;
        this.table = table;
    }
}

class NetworkError extends AppError {
    constructor(message, url, statusCode) {
        super(message, 'NETWORK_ERROR', statusCode || 500);
        this.url = url;
        this.retryable = true;
    }
}

class AuthenticationError extends AppError {
    constructor(message, userId) {
        super(message, 'AUTH_ERROR', 401);
        this.userId = userId;
        this.retryable = false;
    }
}

// Error chaining example
function processUserData(userId, userData) {
    try {
        if (!userId) {
            throw new ValidationError("User ID is required", "userId", userId);
        }
        
        // Simulate database operation
        if (Math.random() < 0.3) {
            throw new DatabaseError("Connection to database failed", "SELECT", "users");
        }
        
        // Simulate network operation
        if (Math.random() < 0.2) {
            throw new NetworkError("API request failed", "https://api.example.com/users");
        }
        
        return { success: true, data: userData };
        
    } catch (error) {
        // Chain the error with additional context
        if (error instanceof ValidationError) {
            throw new AppError(`User data validation failed: ${error.message}`, 'VALIDATION_ERROR', 400);
        } else if (error instanceof DatabaseError) {
            throw new AppError(`Database operation failed: ${error.message}`, 'DATABASE_ERROR', 500);
        } else if (error instanceof NetworkError) {
            throw new AppError(`Network operation failed: ${error.message}`, 'NETWORK_ERROR', 503);
        } else {
            throw new AppError(`Unexpected error: ${error.message}`, 'UNKNOWN_ERROR', 500);
        }
    }
}

console.log("Error inheritance and chaining:");
try {
    processUserData("", { name: "John" });
} catch (error) {
    console.log("Chained error:");
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Code:", error.code);
    console.log("Status Code:", error.statusCode);
    console.log("Is Operational:", error.isOperational);
}

// 📚 3. Error Codes and Categorization
console.log("\n📚 3. Error Codes and Categorization");
console.log("-----------------------------------");

// Error code constants
const ERROR_CODES = {
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    DATABASE_ERROR: 'DATABASE_ERROR',
    NETWORK_ERROR: 'NETWORK_ERROR',
    AUTH_ERROR: 'AUTH_ERROR',
    PERMISSION_ERROR: 'PERMISSION_ERROR',
    NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
    RATE_LIMIT_ERROR: 'RATE_LIMIT_ERROR',
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// Error severity levels
const ERROR_SEVERITY = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};

// Enhanced error class with categorization
class CategorizedError extends AppError {
    constructor(message, code, severity = ERROR_SEVERITY.MEDIUM, context = {}) {
        super(message, code);
        this.severity = severity;
        this.context = context;
        this.category = this.getCategory(code);
    }
    
    getCategory(code) {
        const categoryMap = {
            [ERROR_CODES.VALIDATION_ERROR]: 'INPUT_VALIDATION',
            [ERROR_CODES.DATABASE_ERROR]: 'DATA_ACCESS',
            [ERROR_CODES.NETWORK_ERROR]: 'NETWORK',
            [ERROR_CODES.AUTH_ERROR]: 'AUTHENTICATION',
            [ERROR_CODES.PERMISSION_ERROR]: 'AUTHORIZATION',
            [ERROR_CODES.NOT_FOUND_ERROR]: 'RESOURCE',
            [ERROR_CODES.RATE_LIMIT_ERROR]: 'RATE_LIMITING',
            [ERROR_CODES.UNKNOWN_ERROR]: 'SYSTEM'
        };
        return categoryMap[code] || 'UNKNOWN';
    }
    
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            statusCode: this.statusCode,
            severity: this.severity,
            category: this.category,
            context: this.context,
            timestamp: this.timestamp,
            stack: this.stack
        };
    }
}

// Usage example
function validateUserInput(input) {
    if (!input.email) {
        throw new CategorizedError(
            "Email is required",
            ERROR_CODES.VALIDATION_ERROR,
            ERROR_SEVERITY.MEDIUM,
            { field: 'email', input: input }
        );
    }
    
    if (!input.password) {
        throw new CategorizedError(
            "Password is required",
            ERROR_CODES.VALIDATION_ERROR,
            ERROR_SEVERITY.HIGH,
            { field: 'password', input: input }
        );
    }
    
    if (input.password.length < 8) {
        throw new CategorizedError(
            "Password must be at least 8 characters",
            ERROR_CODES.VALIDATION_ERROR,
            ERROR_SEVERITY.HIGH,
            { field: 'password', length: input.password.length, input: input }
        );
    }
    
    return true;
}

console.log("Categorized error example:");
try {
    validateUserInput({ email: "test@example.com", password: "123" });
} catch (error) {
    console.log("Categorized error:");
    console.log(JSON.stringify(error.toJSON(), null, 2));
}

// 📚 4. Error Serialization and Logging
console.log("\n📚 4. Error Serialization and Logging");
console.log("------------------------------------");

// Error logger class
class ErrorLogger {
    constructor() {
        this.errors = [];
    }
    
    log(error, additionalContext = {}) {
        const errorLog = {
            id: this.generateErrorId(),
            timestamp: new Date().toISOString(),
            name: error.name,
            message: error.message,
            code: error.code || 'UNKNOWN',
            severity: error.severity || ERROR_SEVERITY.MEDIUM,
            category: error.category || 'UNKNOWN',
            context: { ...error.context, ...additionalContext },
            stack: error.stack,
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Node.js',
            url: typeof window !== 'undefined' ? window.location.href : 'Server'
        };
        
        this.errors.push(errorLog);
        console.log("Error logged:", errorLog);
        
        // In a real application, you would send this to a logging service
        // this.sendToLoggingService(errorLog);
    }
    
    generateErrorId() {
        return 'ERR_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    getErrorsByCategory(category) {
        return this.errors.filter(error => error.category === category);
    }
    
    getErrorsBySeverity(severity) {
        return this.errors.filter(error => error.severity === severity);
    }
    
    getErrorStats() {
        const stats = {
            total: this.errors.length,
            byCategory: {},
            bySeverity: {},
            byCode: {}
        };
        
        this.errors.forEach(error => {
            stats.byCategory[error.category] = (stats.byCategory[error.category] || 0) + 1;
            stats.bySeverity[error.severity] = (stats.bySeverity[error.severity] || 0) + 1;
            stats.byCode[error.code] = (stats.byCode[error.code] || 0) + 1;
        });
        
        return stats;
    }
}

// Usage example
let errorLogger = new ErrorLogger();

function riskyOperation(operation, data) {
    try {
        if (!operation) {
            throw new CategorizedError(
                "Operation is required",
                ERROR_CODES.VALIDATION_ERROR,
                ERROR_SEVERITY.MEDIUM,
                { operation, data }
            );
        }
        
        if (operation === 'divide' && data.denominator === 0) {
            throw new CategorizedError(
                "Division by zero",
                ERROR_CODES.VALIDATION_ERROR,
                ERROR_SEVERITY.HIGH,
                { operation, data }
            );
        }
        
        // Simulate operation
        return { success: true, result: data.numerator / data.denominator };
        
    } catch (error) {
        errorLogger.log(error, { operation, data });
        throw error;
    }
}

console.log("Error logging example:");
try {
    riskyOperation('divide', { numerator: 10, denominator: 0 });
} catch (error) {
    console.log("Error caught and logged");
}

try {
    riskyOperation('', { numerator: 10, denominator: 2 });
} catch (error) {
    console.log("Error caught and logged");
}

console.log("Error statistics:", errorLogger.getErrorStats());

// 📚 5. Error Recovery Strategies
console.log("\n📚 5. Error Recovery Strategies");
console.log("-------------------------------");

class ErrorRecovery {
    static retry(operation, maxRetries = 3, delay = 1000) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            
            function attempt() {
                attempts++;
                operation()
                    .then(resolve)
                    .catch(error => {
                        if (attempts < maxRetries) {
                            console.log(`Attempt ${attempts} failed, retrying in ${delay}ms...`);
                            setTimeout(attempt, delay);
                        } else {
                            reject(new CategorizedError(
                                `Operation failed after ${maxRetries} attempts: ${error.message}`,
                                ERROR_CODES.UNKNOWN_ERROR,
                                ERROR_SEVERITY.HIGH,
                                { attempts, originalError: error.message }
                            ));
                        }
                    });
            }
            
            attempt();
        });
    }
    
    static fallback(operation, fallbackOperation) {
        return new Promise((resolve, reject) => {
            operation()
                .then(resolve)
                .catch(error => {
                    console.log("Primary operation failed, trying fallback...");
                    fallbackOperation()
                        .then(resolve)
                        .catch(fallbackError => {
                            reject(new CategorizedError(
                                `Both primary and fallback operations failed: ${error.message}`,
                                ERROR_CODES.UNKNOWN_ERROR,
                                ERROR_SEVERITY.HIGH,
                                { 
                                    primaryError: error.message, 
                                    fallbackError: fallbackError.message 
                                }
                            ));
                        });
                });
        });
    }
}

// Usage example
function simulateNetworkCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                reject(new NetworkError("Network request failed", "https://api.example.com"));
            } else {
                resolve({ data: "Success!" });
            }
        }, 1000);
    });
}

function simulateFallbackCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Fallback success!" });
        }, 500);
    });
}

console.log("Error recovery example:");
ErrorRecovery.retry(simulateNetworkCall, 3, 1000)
    .then(result => console.log("Retry success:", result))
    .catch(error => console.log("Retry failed:", error.message));

ErrorRecovery.fallback(simulateNetworkCall, simulateFallbackCall)
    .then(result => console.log("Fallback success:", result))
    .catch(error => console.log("Fallback failed:", error.message));

// 📚 6. Practical Example: API Error Handler
console.log("\n📚 6. Practical Example: API Error Handler");
console.log("------------------------------------------");

class APIErrorHandler {
    constructor() {
        this.errorLogger = new ErrorLogger();
    }
    
    handleError(error, req = {}) {
        // Log the error
        this.errorLogger.log(error, { 
            request: req,
            endpoint: req.url || 'unknown',
            method: req.method || 'unknown'
        });
        
        // Determine response based on error type
        if (error instanceof CategorizedError) {
            return {
                success: false,
                error: {
                    code: error.code,
                    message: error.message,
                    severity: error.severity,
                    category: error.category,
                    timestamp: error.timestamp
                },
                statusCode: error.statusCode
            };
        } else if (error instanceof AppError) {
            return {
                success: false,
                error: {
                    code: error.code,
                    message: error.message,
                    timestamp: error.timestamp
                },
                statusCode: error.statusCode
            };
        } else {
            return {
                success: false,
                error: {
                    code: 'UNKNOWN_ERROR',
                    message: 'An unexpected error occurred',
                    timestamp: new Date().toISOString()
                },
                statusCode: 500
            };
        }
    }
    
    getErrorStats() {
        return this.errorLogger.getErrorStats();
    }
}

// Usage example
let apiErrorHandler = new APIErrorHandler();

function simulateAPIRequest() {
    try {
        // Simulate some API logic
        if (Math.random() < 0.3) {
            throw new CategorizedError(
                "Invalid request parameters",
                ERROR_CODES.VALIDATION_ERROR,
                ERROR_SEVERITY.MEDIUM,
                { endpoint: '/api/users', method: 'POST' }
            );
        }
        
        if (Math.random() < 0.2) {
            throw new DatabaseError("Database connection failed", "SELECT", "users");
        }
        
        return { success: true, data: { users: [] } };
        
    } catch (error) {
        return apiErrorHandler.handleError(error, { 
            url: '/api/users', 
            method: 'POST' 
        });
    }
}

console.log("API error handling example:");
let response = simulateAPIRequest();
console.log("API Response:", JSON.stringify(response, null, 2));

console.log("Error statistics:", apiErrorHandler.getErrorStats());

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Create custom error classes for specific error types");
console.log("- Use error inheritance to create error hierarchies");
console.log("- Implement error chaining for better context");
console.log("- Categorize errors with codes and severity levels");
console.log("- Serialize errors for logging and monitoring");
console.log("- Implement error recovery strategies");
console.log("- Build comprehensive error handling systems");

console.log("\n📝 Practice Exercises:");
console.log("1. Create custom error classes for your application");
console.log("2. Implement error inheritance and chaining");
console.log("3. Build error categorization and logging systems");
console.log("4. Design error recovery strategies");
console.log("5. Create comprehensive error handling middleware");
