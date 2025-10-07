// Lesson 7: Debugging
// This file teaches JavaScript debugging techniques and tools

console.log("⚡ Welcome to JavaScript Basics Lesson 7: Debugging!");
console.log("==================================================");

// 1. Console Logging
console.log("\n📚 1. Console Logging");
console.log("-------------------");

console.log("Console logging is the most basic debugging technique:");
console.log("1. console.log() - General logging");
console.log("2. console.error() - Error logging");
console.log("3. console.warn() - Warning logging");
console.log("4. console.info() - Information logging");
console.log("5. console.debug() - Debug logging");

// Basic logging
console.log("This is a log message");
console.error("This is an error message");
console.warn("This is a warning message");
console.info("This is an info message");
console.debug("This is a debug message");

// Logging with variables
let name = "John";
let age = 30;
let isActive = true;

console.log("User information:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Active:", isActive);

// Logging objects and arrays
let user = { name: "John", age: 30, city: "New York" };
let numbers = [1, 2, 3, 4, 5];

console.log("User object:", user);
console.log("Numbers array:", numbers);

// 2. Console Methods
console.log("\n📚 2. Console Methods");
console.log("-------------------");

console.log("Advanced console methods for debugging:");

// console.table() - Display data in table format
let users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "Chicago" }
];

console.log("console.table() example:");
console.table(users);

// console.group() - Group related logs
console.log("console.group() example:");
console.group("User Details");
console.log("Name: John");
console.log("Age: 30");
console.log("City: New York");
console.groupEnd();

// console.time() - Measure execution time
console.log("console.time() example:");
console.time("Array Processing");
let largeArray = Array.from({ length: 1000000 }, (_, i) => i);
let sum = largeArray.reduce((total, num) => total + num, 0);
console.timeEnd("Array Processing");

// console.count() - Count function calls
function processItem(item) {
    console.count("processItem calls");
    return item * 2;
}

console.log("console.count() example:");
processItem(1);
processItem(2);
processItem(3);

// console.trace() - Show call stack
function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    console.trace("Call stack trace");
}

console.log("console.trace() example:");
functionA();

// 3. Debugger Statement
console.log("\n📚 3. Debugger Statement");
console.log("-----------------------");

console.log("The debugger statement pauses execution when debugging tools are open:");

function debuggerExample() {
    let x = 10;
    let y = 20;
    
    console.log("Before debugger statement");
    
    // Uncomment the next line to pause execution
    // debugger;
    
    let sum = x + y;
    console.log("Sum:", sum);
    
    return sum;
}

console.log("debugger statement example:");
debuggerExample();

// 4. Common Error Types
console.log("\n📚 4. Common Error Types");
console.log("-----------------------");

console.log("Common JavaScript error types:");
console.log("1. SyntaxError - Syntax errors");
console.log("2. ReferenceError - Undefined variables");
console.log("3. TypeError - Wrong type operations");
console.log("4. RangeError - Out of range values");
console.log("5. EvalError - eval() function errors");

// SyntaxError example
console.log("SyntaxError example:");
try {
    // eval("let x = ;"); // This would cause a SyntaxError
    console.log("SyntaxError: Invalid syntax");
} catch (error) {
    console.log("Caught error:", error.name, error.message);
}

// ReferenceError example
console.log("ReferenceError example:");
try {
    // console.log(undefinedVariable); // This would cause a ReferenceError
    console.log("ReferenceError: Variable not defined");
} catch (error) {
    console.log("Caught error:", error.name, error.message);
}

// TypeError example
console.log("TypeError example:");
try {
    let x = null;
    console.log(x.property); // This would cause a TypeError
} catch (error) {
    console.log("Caught error:", error.name, error.message);
}

// RangeError example
console.log("RangeError example:");
try {
    let array = new Array(-1); // This would cause a RangeError
} catch (error) {
    console.log("Caught error:", error.name, error.message);
}

// 5. Error Handling and Debugging
console.log("\n📚 5. Error Handling and Debugging");
console.log("--------------------------------");

console.log("Error handling techniques for debugging:");

// Try-catch with detailed error information
function processData(data) {
    try {
        if (!data) {
            throw new Error("Data is required");
        }
        
        if (!Array.isArray(data)) {
            throw new Error("Data must be an array");
        }
        
        if (data.length === 0) {
            throw new Error("Data array cannot be empty");
        }
        
        let result = data.map(item => {
            if (typeof item !== 'number') {
                throw new Error(`Invalid item: ${item} (expected number)`);
            }
            return item * 2;
        });
        
        return result;
        
    } catch (error) {
        console.error("Error in processData:", {
            message: error.message,
            stack: error.stack,
            data: data,
            timestamp: new Date().toISOString()
        });
        throw error;
    }
}

// Test error handling
console.log("Error handling example:");
try {
    let result = processData([1, 2, 3, 4, 5]);
    console.log("Success:", result);
} catch (error) {
    console.log("Caught error:", error.message);
}

try {
    let result = processData([1, 2, "invalid", 4, 5]);
    console.log("Success:", result);
} catch (error) {
    console.log("Caught error:", error.message);
}

// 6. Debugging Techniques
console.log("\n📚 6. Debugging Techniques");
console.log("------------------------");

console.log("Effective debugging techniques:");
console.log("1. Add strategic console.log statements");
console.log("2. Use breakpoints in debugging tools");
console.log("3. Check variable values at different points");
console.log("4. Trace execution flow");
console.log("5. Isolate the problem");

// Debugging example with strategic logging
function calculateTotal(items, taxRate) {
    console.log("calculateTotal called with:", { items, taxRate });
    
    if (!Array.isArray(items)) {
        console.error("Items is not an array:", items);
        throw new Error("Items must be an array");
    }
    
    let subtotal = 0;
    console.log("Initial subtotal:", subtotal);
    
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        console.log(`Processing item ${i}:`, item);
        
        if (typeof item.price !== 'number' || item.price < 0) {
            console.error("Invalid price for item:", item);
            throw new Error(`Invalid price for item ${i}: ${item.price}`);
        }
        
        subtotal += item.price;
        console.log(`Subtotal after item ${i}:`, subtotal);
    }
    
    console.log("Final subtotal:", subtotal);
    
    if (typeof taxRate !== 'number' || taxRate < 0) {
        console.error("Invalid tax rate:", taxRate);
        throw new Error(`Invalid tax rate: ${taxRate}`);
    }
    
    let tax = subtotal * taxRate;
    console.log("Tax amount:", tax);
    
    let total = subtotal + tax;
    console.log("Final total:", total);
    
    return total;
}

// Test debugging
let testItems = [
    { name: "Item 1", price: 10.00 },
    { name: "Item 2", price: 15.50 },
    { name: "Item 3", price: 5.25 }
];

console.log("Debugging example:");
try {
    let total = calculateTotal(testItems, 0.08);
    console.log("Total calculated successfully:", total);
} catch (error) {
    console.log("Error in calculation:", error.message);
}

// 7. Debugging Tools
console.log("\n📚 7. Debugging Tools");
console.log("--------------------");

console.log("JavaScript debugging tools:");
console.log("1. Browser Developer Tools");
console.log("2. Node.js Inspector");
console.log("3. VS Code Debugger");
console.log("4. Chrome DevTools");
console.log("5. Firefox Developer Tools");

// Example of code that benefits from debugging tools
function complexCalculation(data) {
    let result = [];
    
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        
        // This is a good place to set a breakpoint
        if (item.value > 0) {
            let processed = item.value * 2;
            
            if (processed > 100) {
                processed = processed * 0.9; // Apply discount
            }
            
            result.push({
                id: item.id,
                originalValue: item.value,
                processedValue: processed
            });
        }
    }
    
    return result;
}

let testData = [
    { id: 1, value: 50 },
    { id: 2, value: 75 },
    { id: 3, value: 25 },
    { id: 4, value: 100 },
    { id: 5, value: 150 }
];

console.log("Complex calculation example:");
let result = complexCalculation(testData);
console.log("Result:", result);

// 8. Performance Debugging
console.log("\n📚 8. Performance Debugging");
console.log("--------------------------");

console.log("Performance debugging techniques:");
console.log("1. Use console.time() to measure execution time");
console.log("2. Profile memory usage");
console.log("3. Identify bottlenecks");
console.log("4. Optimize slow operations");

// Performance debugging example
function slowOperation(data) {
    console.time("slowOperation");
    
    let result = [];
    for (let i = 0; i < data.length; i++) {
        // Simulate slow operation
        let processed = data[i] * 2;
        result.push(processed);
    }
    
    console.timeEnd("slowOperation");
    return result;
}

function fastOperation(data) {
    console.time("fastOperation");
    
    let result = data.map(item => item * 2);
    
    console.timeEnd("fastOperation");
    return result;
}

let performanceData = Array.from({ length: 100000 }, (_, i) => i);

console.log("Performance debugging example:");
let slowResult = slowOperation(performanceData);
let fastResult = fastOperation(performanceData);

console.log("Results are equal:", JSON.stringify(slowResult) === JSON.stringify(fastResult));

// 9. Memory Debugging
console.log("\n📚 9. Memory Debugging");
console.log("--------------------");

console.log("Memory debugging techniques:");
console.log("1. Monitor memory usage");
console.log("2. Identify memory leaks");
console.log("3. Use garbage collection");
console.log("4. Profile memory allocation");

// Memory debugging example
class MemoryDebugger {
    constructor() {
        this.objects = [];
        this.startMemory = this.getMemoryUsage();
    }
    
    getMemoryUsage() {
        if (typeof process !== 'undefined' && process.memoryUsage) {
            return process.memoryUsage();
        }
        return { heapUsed: 0, heapTotal: 0 };
    }
    
    createObjects(count) {
        console.log(`Creating ${count} objects...`);
        console.time("Object Creation");
        
        for (let i = 0; i < count; i++) {
            this.objects.push({
                id: i,
                data: new Array(1000).fill(i),
                timestamp: new Date()
            });
        }
        
        console.timeEnd("Object Creation");
        console.log("Memory usage after creation:", this.getMemoryUsage());
    }
    
    clearObjects() {
        console.log("Clearing objects...");
        console.time("Object Clearing");
        
        this.objects = [];
        
        console.timeEnd("Object Clearing");
        console.log("Memory usage after clearing:", this.getMemoryUsage());
    }
}

let memoryDebugger = new MemoryDebugger();
memoryDebugger.createObjects(1000);
memoryDebugger.clearObjects();

// 10. Debugging Best Practices
console.log("\n📚 10. Debugging Best Practices");
console.log("-------------------------------");

console.log("Debugging best practices:");
console.log("1. Start with simple debugging techniques");
console.log("2. Use descriptive variable names");
console.log("3. Add comments to complex logic");
console.log("4. Test edge cases");
console.log("5. Use version control to track changes");

// Example of well-debugged code
function calculateGrade(score) {
    // Validate input
    if (typeof score !== 'number') {
        throw new Error('Score must be a number');
    }
    
    if (score < 0 || score > 100) {
        throw new Error('Score must be between 0 and 100');
    }
    
    // Calculate grade
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    return {
        score: score,
        grade: grade,
        passed: score >= 60
    };
}

// Test the well-debugged function
console.log("Well-debugged function example:");
try {
    console.log("Score 95:", calculateGrade(95));
    console.log("Score 75:", calculateGrade(75));
    console.log("Score 45:", calculateGrade(45));
} catch (error) {
    console.log("Error:", error.message);
}

// 11. Debugging Common Issues
console.log("\n📚 11. Debugging Common Issues");
console.log("----------------------------");

console.log("Common debugging issues and solutions:");

// Issue 1: Undefined variables
console.log("Issue 1: Undefined variables");
function undefinedVariableIssue() {
    // Don't do this
    // console.log(undefinedVariable);
    
    // Do this instead
    let definedVariable = "I'm defined";
    console.log(definedVariable);
}

undefinedVariableIssue();

// Issue 2: Type errors
console.log("Issue 2: Type errors");
function typeErrorIssue() {
    let x = "5";
    let y = 3;
    
    // Don't do this
    // console.log(x + y); // "53"
    
    // Do this instead
    console.log(Number(x) + y); // 8
    console.log(x + String(y)); // "53"
}

typeErrorIssue();

// Issue 3: Logic errors
console.log("Issue 3: Logic errors");
function logicErrorIssue() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    
    // Don't do this
    // for (let i = 0; i <= numbers.length; i++) {
    //     sum += numbers[i];
    // }
    
    // Do this instead
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    console.log("Sum:", sum);
}

logicErrorIssue();

// Issue 4: Scope issues
console.log("Issue 4: Scope issues");
function scopeIssue() {
    let x = 10;
    
    if (true) {
        let y = 20;
        console.log("x:", x); // 10
        console.log("y:", y); // 20
    }
    
    console.log("x:", x); // 10
    // console.log("y:", y); // ReferenceError
}

scopeIssue();

// 12. Debugging Tools Integration
console.log("\n📚 12. Debugging Tools Integration");
console.log("--------------------------------");

console.log("Integrating debugging tools:");

// Example of code that works well with debugging tools
class DebuggableCalculator {
    constructor() {
        this.history = [];
        this.debugMode = false;
    }
    
    setDebugMode(enabled) {
        this.debugMode = enabled;
        if (enabled) {
            console.log("Debug mode enabled");
        }
    }
    
    log(message, data = null) {
        if (this.debugMode) {
            console.log(`[Calculator] ${message}`, data || '');
        }
    }
    
    add(a, b) {
        this.log("add called", { a, b });
        
        if (typeof a !== 'number' || typeof b !== 'number') {
            this.log("Error: Invalid input types", { a, b });
            throw new Error('Both arguments must be numbers');
        }
        
        let result = a + b;
        this.history.push({ operation: 'add', a, b, result });
        
        this.log("add result", result);
        return result;
    }
    
    subtract(a, b) {
        this.log("subtract called", { a, b });
        
        if (typeof a !== 'number' || typeof b !== 'number') {
            this.log("Error: Invalid input types", { a, b });
            throw new Error('Both arguments must be numbers');
        }
        
        let result = a - b;
        this.history.push({ operation: 'subtract', a, b, result });
        
        this.log("subtract result", result);
        return result;
    }
    
    getHistory() {
        this.log("getHistory called");
        return this.history;
    }
}

let calc = new DebuggableCalculator();
calc.setDebugMode(true);

console.log("Debugging tools integration example:");
calc.add(5, 3);
calc.subtract(10, 4);
console.log("History:", calc.getHistory());

// 13. Debugging Workflow
console.log("\n📚 13. Debugging Workflow");
console.log("------------------------");

console.log("Effective debugging workflow:");
console.log("1. Reproduce the issue");
console.log("2. Identify the problem area");
console.log("3. Add debugging statements");
console.log("4. Test and verify");
console.log("5. Fix the issue");
console.log("6. Remove debugging code");
console.log("7. Test the fix");

// Example of debugging workflow
function buggyFunction(data) {
    let result = [];
    
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        
        // Step 1: Reproduce the issue
        // Step 2: Identify the problem area
        // Step 3: Add debugging statements
        console.log(`Processing item ${i}:`, item);
        
        if (item > 0) {
            result.push(item * 2);
        }
        
        console.log(`Result after item ${i}:`, result);
    }
    
    return result;
}

let testData2Array = [1, 2, 3, -1, 4, 5];
console.log("Debugging workflow example:");
let result2 = buggyFunction(testData2Array);
console.log("Final result:", result2);

// 14. Debugging Checklist
console.log("\n📚 14. Debugging Checklist");
console.log("------------------------");

console.log("Debugging checklist:");
console.log("1. ✓ Check for syntax errors");
console.log("2. ✓ Verify variable declarations");
console.log("3. ✓ Check data types");
console.log("4. ✓ Validate input parameters");
console.log("5. ✓ Test edge cases");
console.log("6. ✓ Check loop conditions");
console.log("7. ✓ Verify function returns");
console.log("8. ✓ Test error handling");
console.log("9. ✓ Check scope and closures");
console.log("10. ✓ Profile performance");

// Example of using the checklist
function checklistExample(data) {
    // 1. Check for syntax errors ✓
    // 2. Verify variable declarations ✓
    let result = [];
    
    // 3. Check data types ✓
    if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
    }
    
    // 4. Validate input parameters ✓
    if (data.length === 0) {
        return result;
    }
    
    // 5. Test edge cases ✓
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        
        // 6. Check loop conditions ✓
        if (typeof item === 'number' && item > 0) {
            result.push(item * 2);
        }
    }
    
    // 7. Verify function returns ✓
    return result;
}

console.log("Checklist example:");
let testData3Array = [1, 2, 3, -1, 4, 5];
let result3 = checklistExample(testData3Array);
console.log("Result:", result3);

// 15. Debugging Resources
console.log("\n📚 15. Debugging Resources");
console.log("------------------------");

console.log("Useful debugging resources:");
console.log("1. Browser Developer Tools documentation");
console.log("2. Node.js debugging guide");
console.log("3. VS Code debugging tutorial");
console.log("4. JavaScript error reference");
console.log("5. Performance profiling tools");

// Example of comprehensive debugging setup
class Debugger {
    constructor(name) {
        this.name = name;
        this.logs = [];
        this.startTime = Date.now();
    }
    
    log(level, message, data = null) {
        let logEntry = {
            timestamp: new Date().toISOString(),
            level: level,
            message: message,
            data: data
        };
        
        this.logs.push(logEntry);
        
        switch (level) {
            case 'error':
                console.error(`[${this.name}] ${message}`, data);
                break;
            case 'warn':
                console.warn(`[${this.name}] ${message}`, data);
                break;
            case 'info':
                console.info(`[${this.name}] ${message}`, data);
                break;
            default:
                console.log(`[${this.name}] ${message}`, data);
        }
    }
    
    getLogs() {
        return this.logs;
    }
    
    getExecutionTime() {
        return Date.now() - this.startTime;
    }
}

let debuggerObject = new Debugger("TestDebugger");
debuggerObject.log('info', 'Starting test');
debuggerObject.log('warn', 'This is a warning');
debuggerObject.log('error', 'This is an error');
debuggerObject.log('info', 'Test completed');

console.log("Debugger example:");
console.log("Execution time:", debuggerObject.getExecutionTime(), "ms");
console.log("Logs:", debuggerObject.getLogs());

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use console logging for basic debugging");
console.log("- Understand common error types");
console.log("- Implement proper error handling");
console.log("- Use debugging tools effectively");
console.log("- Follow debugging best practices");
console.log("- Profile performance and memory usage");
console.log("- Use systematic debugging approaches");
console.log("- Keep debugging code organized");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice console logging techniques");
console.log("2. Implement error handling");
console.log("3. Use debugging tools");
console.log("4. Debug common issues");
console.log("5. Profile performance");
