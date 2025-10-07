// Lesson 1: Error Basics
// Understanding JavaScript errors and basic error handling

console.log("🎓 Lesson 1: Error Basics");
console.log("========================");

// 📚 1. Understanding JavaScript Errors
console.log("\n📚 1. Understanding JavaScript Errors");
console.log("-----------------------------------");

// JavaScript has several built-in error types
console.log("Common JavaScript error types:");
console.log("- SyntaxError: Invalid syntax");
console.log("- ReferenceError: Undefined variable");
console.log("- TypeError: Wrong type of value");
console.log("- RangeError: Value out of range");
console.log("- EvalError: Error in eval() function");
console.log("- URIError: Error in URI handling");
console.log("- Error: Generic error base class");

// 📚 2. Error Object Properties
console.log("\n📚 2. Error Object Properties");
console.log("----------------------------");

try {
    // This will throw a ReferenceError
    console.log(undefinedVariable);
} catch (error) {
    console.log("Caught error:");
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
    console.log("Error constructor:", error.constructor.name);
}

// 📚 3. Basic Try-Catch Blocks
console.log("\n📚 3. Basic Try-Catch Blocks");
console.log("---------------------------");

function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.log("Error in divideNumbers:", error.message);
        return null;
    }
}

console.log("Division examples:");
console.log("10 / 2 =", divideNumbers(10, 2));
console.log("10 / 0 =", divideNumbers(10, 0));
console.log("10 / 'a' =", divideNumbers(10, 'a'));

// 📚 4. Try-Catch-Finally Blocks
console.log("\n📚 4. Try-Catch-Finally Blocks");
console.log("-----------------------------");

function processData(data) {
    console.log("Processing data:", data);
    
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        if (typeof data !== 'string') {
            throw new TypeError("Data must be a string");
        }
        
        // Simulate processing
        let result = data.toUpperCase();
        console.log("Processing successful:", result);
        return result;
        
    } catch (error) {
        console.log("Error during processing:", error.message);
        return null;
        
    } finally {
        console.log("Cleanup: Processing attempt completed");
    }
}

console.log("Data processing examples:");
processData("hello world");
processData(123);
processData(null);

// 📚 5. Throwing Errors Manually
console.log("\n📚 5. Throwing Errors Manually");
console.log("-----------------------------");

function validateAge(age) {
    if (typeof age !== 'number') {
        throw new TypeError("Age must be a number");
    }
    if (age < 0) {
        throw new RangeError("Age cannot be negative");
    }
    if (age > 150) {
        throw new RangeError("Age cannot be greater than 150");
    }
    if (!Number.isInteger(age)) {
        throw new Error("Age must be a whole number");
    }
    return true;
}

console.log("Age validation examples:");
try {
    validateAge(25);
    console.log("Age 25 is valid");
} catch (error) {
    console.log("Error:", error.message);
}

try {
    validateAge(-5);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    validateAge(25.5);
} catch (error) {
    console.log("Error:", error.message);
}

// 📚 6. Error Propagation and Bubbling
console.log("\n📚 6. Error Propagation and Bubbling");
console.log("-----------------------------------");

function level1() {
    console.log("Level 1: Starting");
    level2();
    console.log("Level 1: Completed");
}

function level2() {
    console.log("Level 2: Starting");
    level3();
    console.log("Level 2: Completed");
}

function level3() {
    console.log("Level 3: Starting");
    throw new Error("Error in level 3");
    console.log("Level 3: Completed");
}

console.log("Error propagation example:");
try {
    level1();
} catch (error) {
    console.log("Caught error at top level:", error.message);
    console.log("Error stack trace:");
    console.log(error.stack);
}

// 📚 7. Common Error Scenarios
console.log("\n📚 7. Common Error Scenarios");
console.log("----------------------------");

// Scenario 1: Accessing undefined properties
function accessProperty(obj, property) {
    try {
        return obj[property];
    } catch (error) {
        console.log("Error accessing property:", error.message);
        return undefined;
    }
}

let testObj = { name: "John", age: 30 };
console.log("Accessing existing property:", accessProperty(testObj, "name"));
console.log("Accessing undefined property:", accessProperty(testObj, "email"));

// Scenario 2: Array operations
function safeArrayAccess(arr, index) {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError("First argument must be an array");
        }
        if (typeof index !== 'number') {
            throw new TypeError("Index must be a number");
        }
        if (index < 0 || index >= arr.length) {
            throw new RangeError("Index out of bounds");
        }
        return arr[index];
    } catch (error) {
        console.log("Array access error:", error.message);
        return null;
    }
}

let numbers = [1, 2, 3, 4, 5];
console.log("Safe array access:");
console.log("Index 2:", safeArrayAccess(numbers, 2));
console.log("Index 10:", safeArrayAccess(numbers, 10));
console.log("Invalid index:", safeArrayAccess(numbers, "a"));

// Scenario 3: JSON parsing
function safeJSONParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("JSON parse error:", error.message);
        return null;
    }
}

console.log("JSON parsing examples:");
console.log("Valid JSON:", safeJSONParse('{"name": "John", "age": 30}'));
console.log("Invalid JSON:", safeJSONParse('{"name": "John", "age": 30'));

// 📚 8. Error Handling Best Practices
console.log("\n📚 8. Error Handling Best Practices");
console.log("-----------------------------------");

function robustCalculator(operation, a, b) {
    try {
        // Input validation
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both operands must be numbers");
        }
        
        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            throw new Error("Operands must be finite numbers");
        }
        
        // Operation validation
        if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
            throw new Error("Invalid operation. Use: add, subtract, multiply, divide");
        }
        
        // Perform operation
        let result;
        switch (operation) {
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                if (b === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                result = a / b;
                break;
        }
        
        return {
            success: true,
            result: result,
            operation: `${a} ${operation} ${b} = ${result}`
        };
        
    } catch (error) {
        return {
            success: false,
            error: error.message,
            operation: `${a} ${operation} ${b}`
        };
    }
}

console.log("Robust calculator examples:");
console.log("5 + 3:", robustCalculator('add', 5, 3));
console.log("10 / 0:", robustCalculator('divide', 10, 0));
console.log("5 + 'a':", robustCalculator('add', 5, 'a'));
console.log("Invalid operation:", robustCalculator('power', 2, 3));

// 📚 9. Error Logging and Debugging
console.log("\n📚 9. Error Logging and Debugging");
console.log("---------------------------------");

function logError(error, context = {}) {
    const errorInfo = {
        timestamp: new Date().toISOString(),
        name: error.name,
        message: error.message,
        stack: error.stack,
        context: context
    };
    
    console.log("Error logged:", errorInfo);
    
    // In a real application, you would send this to a logging service
    // Example: sendToLoggingService(errorInfo);
}

function riskyOperation(data) {
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        
        // Simulate some risky operation
        let result = JSON.parse(data);
        return result;
        
    } catch (error) {
        logError(error, { 
            operation: 'riskyOperation', 
            input: data,
            inputType: typeof data
        });
        throw error; // Re-throw after logging
    }
}

console.log("Error logging example:");
try {
    riskyOperation('{"valid": "json"}');
    riskyOperation('invalid json');
} catch (error) {
    console.log("Caught logged error:", error.message);
}

// 📚 10. Practical Example: File Reader
console.log("\n📚 10. Practical Example: File Reader");
console.log("------------------------------------");

class FileReader {
    constructor() {
        this.files = new Map();
    }
    
    addFile(name, content) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error("File name must be a non-empty string");
        }
        if (typeof content !== 'string') {
            throw new Error("File content must be a string");
        }
        this.files.set(name, content);
    }
    
    readFile(name) {
        try {
            if (!this.files.has(name)) {
                throw new Error(`File '${name}' not found`);
            }
            return this.files.get(name);
        } catch (error) {
            console.log(`Error reading file '${name}':`, error.message);
            return null;
        }
    }
    
    listFiles() {
        return Array.from(this.files.keys());
    }
}

let fileReader = new FileReader();

try {
    fileReader.addFile("config.json", '{"setting": "value"}');
    fileReader.addFile("readme.txt", "This is a readme file");
    
    console.log("Files:", fileReader.listFiles());
    console.log("Reading config.json:", fileReader.readFile("config.json"));
    console.log("Reading non-existent file:", fileReader.readFile("missing.txt"));
    
} catch (error) {
    console.log("File reader error:", error.message);
}

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- JavaScript has several built-in error types");
console.log("- Use try-catch blocks to handle errors gracefully");
console.log("- The finally block always executes");
console.log("- Errors propagate up the call stack");
console.log("- Always validate inputs before processing");
console.log("- Log errors for debugging and monitoring");
console.log("- Use specific error types for better error handling");
console.log("- Implement proper error recovery strategies");

console.log("\n📝 Practice Exercises:");
console.log("1. Create functions that throw different error types");
console.log("2. Implement try-catch blocks for error handling");
console.log("3. Practice error propagation and bubbling");
console.log("4. Build robust functions with input validation");
console.log("5. Implement error logging and debugging");
