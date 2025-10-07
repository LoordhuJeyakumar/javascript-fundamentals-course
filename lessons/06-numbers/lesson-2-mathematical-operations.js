// Lesson 2: Mathematical Operations
// This file teaches mathematical operations and Math object methods

console.log("🔢 Welcome to Numbers Lesson 2: Mathematical Operations!");
console.log("======================================================");

// 1. Math Object Overview
console.log("\n📚 1. Math Object Overview");
console.log("------------------------");

console.log("Math object properties:");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.SQRT1_2:", Math.SQRT1_2);

// 2. Basic Math Methods
console.log("\n📚 2. Basic Math Methods");
console.log("----------------------");

let numbers = [4.7, 4.3, 4.5, -4.7, -4.3];
console.log("Test numbers:", numbers);

numbers.forEach(num => {
    console.log(`${num}:`);
    console.log(`  Math.round(): ${Math.round(num)}`);
    console.log(`  Math.floor(): ${Math.floor(num)}`);
    console.log(`  Math.ceil(): ${Math.ceil(num)}`);
    console.log(`  Math.trunc(): ${Math.trunc(num)}`);
    console.log(`  Math.abs(): ${Math.abs(num)}`);
    console.log("");
});

// 3. Power and Root Operations
console.log("\n📚 3. Power and Root Operations");
console.log("------------------------------");

let base = 2;
let exponent = 3;
let number = 8;

console.log("Power operations:");
console.log(`${base} ** ${exponent} =`, base ** exponent);
console.log(`Math.pow(${base}, ${exponent}) =`, Math.pow(base, exponent));

console.log("Root operations:");
console.log(`Math.sqrt(${number}) =`, Math.sqrt(number));
console.log(`Math.cbrt(${number}) =`, Math.cbrt(number));
console.log(`Math.pow(${number}, 1/3) =`, Math.pow(number, 1/3));

// 4. Trigonometric Functions
console.log("\n📚 4. Trigonometric Functions");
console.log("---------------------------");

let angleInDegrees = 45;
let angleInRadians = Math.PI / 4;

console.log("Trigonometric functions:");
console.log(`Angle: ${angleInDegrees}° (${angleInRadians} radians)`);
console.log(`Math.sin(${angleInRadians}) =`, Math.sin(angleInRadians));
console.log(`Math.cos(${angleInRadians}) =`, Math.cos(angleInRadians));
console.log(`Math.tan(${angleInRadians}) =`, Math.tan(angleInRadians));

console.log("Inverse trigonometric functions:");
let sinValue = 0.707;
console.log(`Math.asin(${sinValue}) =`, Math.asin(sinValue));
console.log(`Math.acos(${sinValue}) =`, Math.acos(sinValue));
console.log(`Math.atan(${sinValue}) =`, Math.atan(sinValue));

// 5. Logarithmic Functions
console.log("\n📚 5. Logarithmic Functions");
console.log("-------------------------");

let logNumber = 100;
console.log("Logarithmic functions:");
console.log(`Math.log(${logNumber}) =`, Math.log(logNumber)); // Natural log
console.log(`Math.log10(${logNumber}) =`, Math.log10(logNumber)); // Base 10
console.log(`Math.log2(${logNumber}) =`, Math.log2(logNumber)); // Base 2

// Custom logarithm function
function logBase(number, base) {
    return Math.log(number) / Math.log(base);
}

console.log(`Custom log base 5 of ${logNumber}:`, logBase(logNumber, 5));

// 6. Min and Max Operations
console.log("\n📚 6. Min and Max Operations");
console.log("-------------------------");

let numberArray = [5, 2, 8, 1, 9, 3];
console.log("Number array:", numberArray);

console.log("Min and max operations:");
console.log(`Math.min(...numberArray) =`, Math.min(...numberArray));
console.log(`Math.max(...numberArray) =`, Math.max(...numberArray));

// Using apply method (older approach)
console.log(`Math.min.apply(null, numberArray) =`, Math.min.apply(null, numberArray));
console.log(`Math.max.apply(null, numberArray) =`, Math.max.apply(null, numberArray));

// 7. Random Number Generation
console.log("\n📚 7. Random Number Generation");
console.log("----------------------------");

console.log("Random number generation:");
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());

// Random integer in range
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random integers in range 1-10:");
for (let i = 0; i < 5; i++) {
    console.log(`Random ${i + 1}:`, randomInt(1, 10));
}

// 8. Advanced Math Operations
console.log("\n📚 8. Advanced Math Operations");
console.log("----------------------------");

let advancedNumber = 2.5;
console.log("Advanced math operations:");
console.log(`Math.sign(${advancedNumber}) =`, Math.sign(advancedNumber));
console.log(`Math.sign(-${advancedNumber}) =`, Math.sign(-advancedNumber));
console.log(`Math.sign(0) =`, Math.sign(0));

console.log(`Math.hypot(3, 4) =`, Math.hypot(3, 4)); // Pythagorean theorem
console.log(`Math.hypot(5, 12, 13) =`, Math.hypot(5, 12, 13));

// 9. Practical Example: Scientific Calculator
console.log("\n📚 9. Practical Example: Scientific Calculator");
console.log("--------------------------------------------");

class ScientificCalculator {
    constructor() {
        this.history = [];
        this.memory = 0;
    }
    
    // Basic operations
    add(a, b) {
        let result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }
    
    subtract(a, b) {
        let result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }
    
    multiply(a, b) {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }
    
    divide(a, b) {
        if (b === 0) return NaN;
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }
    
    // Power operations
    power(base, exponent) {
        let result = Math.pow(base, exponent);
        this.history.push(`${base}^${exponent} = ${result}`);
        return result;
    }
    
    squareRoot(number) {
        if (number < 0) return NaN;
        let result = Math.sqrt(number);
        this.history.push(`√${number} = ${result}`);
        return result;
    }
    
    // Trigonometric operations
    sin(angleInRadians) {
        let result = Math.sin(angleInRadians);
        this.history.push(`sin(${angleInRadians}) = ${result}`);
        return result;
    }
    
    cos(angleInRadians) {
        let result = Math.cos(angleInRadians);
        this.history.push(`cos(${angleInRadians}) = ${result}`);
        return result;
    }
    
    tan(angleInRadians) {
        let result = Math.tan(angleInRadians);
        this.history.push(`tan(${angleInRadians}) = ${result}`);
        return result;
    }
    
    // Logarithmic operations
    log(number) {
        if (number <= 0) return NaN;
        let result = Math.log(number);
        this.history.push(`ln(${number}) = ${result}`);
        return result;
    }
    
    log10(number) {
        if (number <= 0) return NaN;
        let result = Math.log10(number);
        this.history.push(`log10(${number}) = ${result}`);
        return result;
    }
    
    // Memory operations
    memoryStore(value) {
        this.memory = value;
        this.history.push(`Memory stored: ${value}`);
    }
    
    memoryRecall() {
        this.history.push(`Memory recalled: ${this.memory}`);
        return this.memory;
    }
    
    memoryClear() {
        this.memory = 0;
        this.history.push("Memory cleared");
    }
    
    // Utility methods
    getHistory() {
        return this.history;
    }
    
    clearHistory() {
        this.history = [];
    }
    
    // Convert degrees to radians
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    
    // Convert radians to degrees
    radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
}

// Test scientific calculator
let sciCalc = new ScientificCalculator();
console.log("Scientific calculator operations:");
console.log("2^3 =", sciCalc.power(2, 3));
console.log("√16 =", sciCalc.squareRoot(16));
console.log("sin(π/2) =", sciCalc.sin(Math.PI / 2));
console.log("cos(0) =", sciCalc.cos(0));
console.log("ln(e) =", sciCalc.log(Math.E));
console.log("log10(100) =", sciCalc.log10(100));

console.log("Calculation history:");
sciCalc.getHistory().forEach(operation => {
    console.log(operation);
});

// 10. Number Validation and Error Handling
console.log("\n📚 10. Number Validation and Error Handling");
console.log("--------------------------------------------");

function safeMathOperation(operation, a, b) {
    try {
        // Validate inputs
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both inputs must be numbers');
        }
        
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Inputs cannot be NaN');
        }
        
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error('Inputs must be finite numbers');
        }
        
        // Perform operation
        let result = operation(a, b);
        
        // Validate result
        if (isNaN(result)) {
            throw new Error('Operation resulted in NaN');
        }
        
        if (!isFinite(result)) {
            throw new Error('Operation resulted in infinite number');
        }
        
        return { success: true, result: result };
        
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Test safe operations
let testOperations = [
    { op: (a, b) => a + b, name: 'Addition', a: 5, b: 3 },
    { op: (a, b) => a / b, name: 'Division', a: 10, b: 0 },
    { op: (a, b) => Math.sqrt(a), name: 'Square root', a: -4, b: 0 },
    { op: (a, b) => Math.log(a), name: 'Logarithm', a: -1, b: 0 }
];

testOperations.forEach(test => {
    let result = safeMathOperation(test.op, test.a, test.b);
    console.log(`${test.name}(${test.a}, ${test.b}): ${result.success ? result.result : 'Error: ' + result.error}`);
});

// 11. Performance Considerations
console.log("\n📚 11. Performance Considerations");
console.log("-------------------------------");

// Benchmark different approaches
function benchmarkOperation(operation, iterations = 1000000) {
    let start = performance.now();
    for (let i = 0; i < iterations; i++) {
        operation();
    }
    let end = performance.now();
    return end - start;
}

console.log("Performance comparison (1,000,000 operations):");

// Exponentiation
let powTime = benchmarkOperation(() => Math.pow(2, 3));
let expTime = benchmarkOperation(() => 2 ** 3);
console.log(`Math.pow(2, 3): ${powTime.toFixed(2)}ms`);
console.log(`2 ** 3: ${expTime.toFixed(2)}ms`);

// Rounding
let roundTime = benchmarkOperation(() => Math.round(4.7));
let floorTime = benchmarkOperation(() => Math.floor(4.7));
console.log(`Math.round(): ${roundTime.toFixed(2)}ms`);
console.log(`Math.floor(): ${floorTime.toFixed(2)}ms`);

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Math object provides many useful mathematical functions");
console.log("- Use appropriate methods for different operations");
console.log("- Trigonometric functions work with radians, not degrees");
console.log("- Logarithmic functions have different bases");
console.log("- Always validate inputs before performing operations");
console.log("- Consider performance when choosing between methods");
console.log("- Error handling is important for mathematical operations");

console.log("\n📝 Practice Exercises:");
console.log("1. Use Math object methods for calculations");
console.log("2. Convert between degrees and radians");
console.log("3. Generate random numbers in specific ranges");
console.log("4. Implement trigonometric calculations");
console.log("5. Create a scientific calculator");
