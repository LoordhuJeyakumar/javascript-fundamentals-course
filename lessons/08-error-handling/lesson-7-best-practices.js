// Lesson 7: Error Handling Best Practices
// Comprehensive best practices for error handling

console.log("🎓 Lesson 7: Error Handling Best Practices");
console.log("=========================================");

// 📚 1. Error Handling Design Principles
console.log("\n📚 1. Error Handling Design Principles");
console.log("------------------------------------");

console.log("Core principles for effective error handling:");
console.log("1. Fail Fast - Detect errors as early as possible");
console.log("2. Fail Safe - System should remain stable after errors");
console.log("3. Fail Informative - Provide clear error information");
console.log("4. Fail Gracefully - Degrade functionality, don't crash");
console.log("5. Fail Recoverably - Allow system to recover from errors");

// 📚 2. Error Classification System
console.log("\n📚 2. Error Classification System");
console.log("-------------------------------");

// Error classification
class ErrorClassifier {
    constructor() {
        this.categories = {
            SYSTEM: 'system',      // Infrastructure, network, server errors
            APPLICATION: 'application', // Business logic, validation errors
            USER: 'user',          // User input, authentication errors
            EXTERNAL: 'external',  // Third-party service errors
            UNKNOWN: 'unknown'     // Unclassified errors
        };
        
        this.severities = {
            CRITICAL: 'critical',  // System cannot continue
            HIGH: 'high',          // Major functionality affected
            MEDIUM: 'medium',      // Some functionality affected
            LOW: 'low',            // Minor impact
            INFO: 'info'           // Informational only
        };
    }
    
    classify(error, context = {}) {
        const classification = {
            category: this.determineCategory(error, context),
            severity: this.determineSeverity(error, context),
            recoverable: this.isRecoverable(error, context),
            userFacing: this.isUserFacing(error, context)
        };
        
        return classification;
    }
    
    determineCategory(error, context) {
        // System errors
        if (error.name === 'NetworkError' || error.name === 'TimeoutError') {
            return this.categories.SYSTEM;
        }
        
        // Application errors
        if (error.name === 'ValidationError' || error.name === 'BusinessLogicError') {
            return this.categories.APPLICATION;
        }
        
        // User errors
        if (error.name === 'AuthenticationError' || error.name === 'AuthorizationError') {
            return this.categories.USER;
        }
        
        // External errors
        if (context.source === 'external_api' || context.source === 'third_party') {
            return this.categories.EXTERNAL;
        }
        
        return this.categories.UNKNOWN;
    }
    
    determineSeverity(error, context) {
        // Critical errors
        if (error.name === 'TypeError' && error.message.includes('Cannot read property')) {
            return this.severities.CRITICAL;
        }
        
        // High severity
        if (error.name === 'ReferenceError' || error.name === 'SyntaxError') {
            return this.severities.HIGH;
        }
        
        // Medium severity
        if (error.name === 'NetworkError' || error.name === 'TimeoutError') {
            return this.severities.MEDIUM;
        }
        
        // Low severity
        if (error.name === 'ValidationError') {
            return this.severities.LOW;
        }
        
        return this.severities.MEDIUM;
    }
    
    isRecoverable(error, context) {
        // Network errors are usually recoverable
        if (error.name === 'NetworkError' || error.name === 'TimeoutError') {
            return true;
        }
        
        // Validation errors are recoverable
        if (error.name === 'ValidationError') {
            return true;
        }
        
        // Syntax errors are not recoverable
        if (error.name === 'SyntaxError') {
            return false;
        }
        
        return true;
    }
    
    isUserFacing(error, context) {
        // Validation errors should be shown to users
        if (error.name === 'ValidationError') {
            return true;
        }
        
        // Authentication errors should be shown to users
        if (error.name === 'AuthenticationError') {
            return true;
        }
        
        // System errors should not be shown to users
        if (error.name === 'NetworkError' || error.name === 'TimeoutError') {
            return false;
        }
        
        return false;
    }
}

const errorClassifier = new ErrorClassifier();

// Test error classification
const testErrors = [
    { name: 'NetworkError', message: 'Connection failed' },
    { name: 'ValidationError', message: 'Invalid email format' },
    { name: 'TypeError', message: 'Cannot read property of undefined' },
    { name: 'AuthenticationError', message: 'Invalid credentials' }
];

testErrors.forEach(error => {
    const classification = errorClassifier.classify(error);
    console.log(`Error: ${error.name}`, classification);
});

// 📚 3. Error Handling Patterns
console.log("\n📚 3. Error Handling Patterns");
console.log("-----------------------------");

// Pattern 1: Error Wrapper
class ErrorWrapper {
    constructor(originalError, context = {}) {
        this.originalError = originalError;
        this.context = context;
        this.timestamp = new Date().toISOString();
        this.id = this.generateId();
    }
    
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    toJSON() {
        return {
            id: this.id,
            timestamp: this.timestamp,
            message: this.originalError.message,
            name: this.originalError.name,
            stack: this.originalError.stack,
            context: this.context
        };
    }
    
    toString() {
        return `[${this.id}] ${this.originalError.name}: ${this.originalError.message}`;
    }
}

// Pattern 2: Error Chain
class ErrorChain {
    constructor() {
        this.errors = [];
    }
    
    addError(error, context = {}) {
        const wrappedError = new ErrorWrapper(error, context);
        this.errors.push(wrappedError);
        return wrappedError;
    }
    
    getLastError() {
        return this.errors[this.errors.length - 1];
    }
    
    getAllErrors() {
        return [...this.errors];
    }
    
    clear() {
        this.errors = [];
    }
    
    hasErrors() {
        return this.errors.length > 0;
    }
}

// Pattern 3: Error Handler Registry
class ErrorHandlerRegistry {
    constructor() {
        this.handlers = new Map();
        this.defaultHandler = null;
    }
    
    register(errorType, handler) {
        this.handlers.set(errorType, handler);
    }
    
    setDefaultHandler(handler) {
        this.defaultHandler = handler;
    }
    
    handle(error, context = {}) {
        const handler = this.handlers.get(error.name) || this.defaultHandler;
        
        if (handler) {
            return handler(error, context);
        } else {
            console.error("No handler found for error type:", error.name);
            return false;
        }
    }
}

// Example handlers
const errorHandlers = new ErrorHandlerRegistry();

errorHandlers.register('ValidationError', (error, context) => {
    console.log("Handling validation error:", error.message);
    return true;
});

errorHandlers.register('NetworkError', (error, context) => {
    console.log("Handling network error:", error.message);
    return true;
});

errorHandlers.setDefaultHandler((error, context) => {
    console.log("Handling unknown error:", error.message);
    return false;
});

// Test error handlers
try {
    throw new Error("Test error");
} catch (error) {
    errorHandlers.handle(error, { source: 'test' });
}

// 📚 4. Error Prevention Strategies
console.log("\n📚 4. Error Prevention Strategies");
console.log("--------------------------------");

// Input validation
class InputValidator {
    constructor() {
        this.rules = new Map();
    }
    
    addRule(field, rule) {
        if (!this.rules.has(field)) {
            this.rules.set(field, []);
        }
        this.rules.get(field).push(rule);
    }
    
    validate(data) {
        const errors = [];
        
        for (const [field, rules] of this.rules) {
            const value = data[field];
            
            for (const rule of rules) {
                try {
                    rule(value);
                } catch (error) {
                    errors.push({
                        field: field,
                        message: error.message,
                        value: value
                    });
                }
            }
        }
        
        return errors;
    }
}

// Validation rules
const validator = new InputValidator();

validator.addRule('email', (value) => {
    if (!value) throw new Error('Email is required');
    if (typeof value !== 'string') throw new Error('Email must be a string');
    if (!value.includes('@')) throw new Error('Email must contain @');
});

validator.addRule('age', (value) => {
    if (!value) throw new Error('Age is required');
    if (typeof value !== 'number') throw new Error('Age must be a number');
    if (value < 0) throw new Error('Age must be positive');
    if (value > 150) throw new Error('Age must be realistic');
});

// Test validation
const testData = { email: 'invalid-email', age: -5 };
const validationErrors = validator.validate(testData);
console.log("Validation errors:", validationErrors);

// Defensive programming
class DefensiveCalculator {
    constructor() {
        this.operations = new Map();
        this.setupOperations();
    }
    
    setupOperations() {
        this.operations.set('add', (a, b) => this.safeAdd(a, b));
        this.operations.set('subtract', (a, b) => this.safeSubtract(a, b));
        this.operations.set('multiply', (a, b) => this.safeMultiply(a, b));
        this.operations.set('divide', (a, b) => this.safeDivide(a, b));
    }
    
    safeAdd(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both operands must be numbers');
        }
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error('Operands must be finite numbers');
        }
        return a + b;
    }
    
    safeSubtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both operands must be numbers');
        }
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error('Operands must be finite numbers');
        }
        return a - b;
    }
    
    safeMultiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both operands must be numbers');
        }
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error('Operands must be finite numbers');
        }
        return a * b;
    }
    
    safeDivide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both operands must be numbers');
        }
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error('Operands must be finite numbers');
        }
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
    
    calculate(operation, a, b) {
        const op = this.operations.get(operation);
        if (!op) {
            throw new Error(`Unknown operation: ${operation}`);
        }
        return op(a, b);
    }
}

const calculator = new DefensiveCalculator();

// Test defensive calculator
try {
    console.log("5 + 3 =", calculator.calculate('add', 5, 3));
    console.log("10 / 2 =", calculator.calculate('divide', 10, 2));
    console.log("10 / 0 =", calculator.calculate('divide', 10, 0));
} catch (error) {
    console.log("Calculator error:", error.message);
}

// 📚 5. Error Testing Strategies
console.log("\n📚 5. Error Testing Strategies");
console.log("-----------------------------");

// Error testing utilities
class ErrorTester {
    constructor() {
        this.testResults = [];
    }
    
    testErrorHandling(fn, testCases) {
        const results = [];
        
        testCases.forEach((testCase, index) => {
            try {
                const result = fn(testCase.input);
                results.push({
                    testCase: index + 1,
                    input: testCase.input,
                    expectedError: testCase.expectedError,
                    actualResult: result,
                    passed: false,
                    message: 'Expected error but got result'
                });
            } catch (error) {
                const passed = error.name === testCase.expectedError;
                results.push({
                    testCase: index + 1,
                    input: testCase.input,
                    expectedError: testCase.expectedError,
                    actualError: error.name,
                    passed: passed,
                    message: passed ? 'Test passed' : `Expected ${testCase.expectedError}, got ${error.name}`
                });
            }
        });
        
        this.testResults.push(...results);
        return results;
    }
    
    getTestSummary() {
        const total = this.testResults.length;
        const passed = this.testResults.filter(r => r.passed).length;
        const failed = total - passed;
        
        return {
            total: total,
            passed: passed,
            failed: failed,
            successRate: total > 0 ? (passed / total) * 100 : 0
        };
    }
}

const errorTester = new ErrorTester();

// Test error handling
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

const testCases = [
    { input: [10, 2], expectedError: null },
    { input: [10, 0], expectedError: 'Error' },
    { input: ['10', 2], expectedError: 'TypeError' },
    { input: [10, '2'], expectedError: 'TypeError' }
];

const testResults = errorTester.testErrorHandling(divide, testCases);
console.log("Test results:", testResults);
console.log("Test summary:", errorTester.getTestSummary());

// 📚 6. Error Documentation
console.log("\n📚 6. Error Documentation");
console.log("-----------------------");

// Error documentation generator
class ErrorDocumentation {
    constructor() {
        this.errorTypes = new Map();
    }
    
    documentErrorType(name, description, examples = []) {
        this.errorTypes.set(name, {
            description: description,
            examples: examples,
            timestamp: new Date().toISOString()
        });
    }
    
    generateDocumentation() {
        const doc = {
            title: 'Error Handling Documentation',
            generated: new Date().toISOString(),
            errorTypes: Object.fromEntries(this.errorTypes)
        };
        
        return doc;
    }
}

const errorDoc = new ErrorDocumentation();

// Document error types
errorDoc.documentErrorType('ValidationError', 'Occurs when input validation fails', [
    'Invalid email format',
    'Required field missing',
    'Value out of range'
]);

errorDoc.documentErrorType('NetworkError', 'Occurs when network operations fail', [
    'Connection timeout',
    'Server unavailable',
    'DNS resolution failed'
]);

console.log("Error documentation:", errorDoc.generateDocumentation());

// 📚 7. Error Handling Checklist
console.log("\n📚 7. Error Handling Checklist");
console.log("-----------------------------");

const errorHandlingChecklist = {
    "Design Phase": [
        "Identify potential error scenarios",
        "Define error classification system",
        "Plan error recovery strategies",
        "Design user-friendly error messages"
    ],
    "Implementation Phase": [
        "Implement input validation",
        "Add try-catch blocks where needed",
        "Create custom error types",
        "Implement error logging",
        "Add error monitoring"
    ],
    "Testing Phase": [
        "Test error scenarios",
        "Verify error messages",
        "Test error recovery",
        "Performance test error handling",
        "Security test error handling"
    ],
    "Deployment Phase": [
        "Monitor error rates",
        "Set up alerting",
        "Document error procedures",
        "Train support team",
        "Review error handling regularly"
    ]
};

console.log("Error Handling Checklist:");
Object.entries(errorHandlingChecklist).forEach(([phase, items]) => {
    console.log(`\n${phase}:`);
    items.forEach(item => console.log(`  ✓ ${item}`));
});

// 📚 8. Common Error Handling Anti-Patterns
console.log("\n📚 8. Common Error Handling Anti-Patterns");
console.log("---------------------------------------");

console.log("❌ Anti-patterns to avoid:");
console.log("1. Empty catch blocks - Always handle errors");
console.log("2. Catching generic Error - Be specific about error types");
console.log("3. Logging sensitive information - Sanitize error messages");
console.log("4. Ignoring errors - Always handle or log errors");
console.log("5. Throwing generic errors - Use specific error types");
console.log("6. Not providing context - Include relevant information");
console.log("7. Not testing error scenarios - Test error handling");
console.log("8. Not monitoring errors - Monitor error rates and patterns");

// 📚 9. Best Practices Summary
console.log("\n📚 9. Best Practices Summary");
console.log("---------------------------");

console.log("✅ Best practices for error handling:");
console.log("1. Use specific error types for different scenarios");
console.log("2. Provide meaningful error messages with context");
console.log("3. Implement proper error logging and monitoring");
console.log("4. Use defensive programming techniques");
console.log("5. Test error scenarios thoroughly");
console.log("6. Implement graceful degradation strategies");
console.log("7. Document error handling procedures");
console.log("8. Monitor error rates and patterns in production");
console.log("9. Implement user-friendly error messages");
console.log("10. Have clear error recovery strategies");

console.log("\n🎉 Lesson 7 Complete: Error Handling Best Practices");
console.log("You now understand comprehensive best practices for error handling!");
