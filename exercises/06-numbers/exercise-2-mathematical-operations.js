// Exercise 2: Mathematical Operations
// Complete the TODO sections below

console.log("💪 Exercise 2: Mathematical Operations");
console.log("======================================");

// Exercise 1: Math Object Methods
console.log("\n1. Use Math object methods:");
let numbers = [4.7, 4.3, 4.5, -4.7, -4.3];

// TODO: Round each number using Math.round()
let rounded = []; // Your code here
// Hint: Use map() with Math.round()

// TODO: Floor each number using Math.floor()
let floored = []; // Your code here
// Hint: Use map() with Math.floor()

// TODO: Ceil each number using Math.ceil()
let ceiled = []; // Your code here
// Hint: Use map() with Math.ceil()

// TODO: Get absolute value of each number using Math.abs()
let absolute = []; // Your code here
// Hint: Use map() with Math.abs()

console.log("Original:", numbers);
console.log("Rounded:", rounded);
console.log("Floored:", floored);
console.log("Ceiled:", ceiled);
console.log("Absolute:", absolute);

// Exercise 2: Power and Root Operations
console.log("\n2. Power and root operations:");
let base = 2;
let exponent = 3;
let number = 8;

// TODO: Calculate 2^3 using Math.pow()
let powerResult = 0; // Your code here
// Hint: Use Math.pow(base, exponent)

// TODO: Calculate 2^3 using ** operator
let powerResult2 = 0; // Your code here
// Hint: Use base ** exponent

// TODO: Calculate square root of 8 using Math.sqrt()
let sqrtResult = 0; // Your code here
// Hint: Use Math.sqrt(number)

// TODO: Calculate cube root of 8 using Math.cbrt()
let cbrtResult = 0; // Your code here
// Hint: Use Math.cbrt(number)

console.log(`${base}^${exponent} (Math.pow):`, powerResult);
console.log(`${base}^${exponent} (**):`, powerResult2);
console.log(`√${number}:`, sqrtResult);
console.log(`∛${number}:`, cbrtResult);

// Exercise 3: Trigonometric Functions
console.log("\n3. Trigonometric functions:");
let angleInRadians = Math.PI / 4; // 45 degrees

// TODO: Calculate sine of the angle
let sine = 0; // Your code here
// Hint: Use Math.sin(angleInRadians)

// TODO: Calculate cosine of the angle
let cosine = 0; // Your code here
// Hint: Use Math.cos(angleInRadians)

// TODO: Calculate tangent of the angle
let tangent = 0; // Your code here
// Hint: Use Math.tan(angleInRadians)

// TODO: Calculate arcsine of 0.707
let arcsine = 0; // Your code here
// Hint: Use Math.asin(0.707)

console.log("Angle (radians):", angleInRadians);
console.log("sin:", sine);
console.log("cos:", cosine);
console.log("tan:", tangent);
console.log("asin(0.707):", arcsine);

// Exercise 4: Logarithmic Functions
console.log("\n4. Logarithmic functions:");
let logNumber = 100;

// TODO: Calculate natural logarithm using Math.log()
let naturalLog = 0; // Your code here
// Hint: Use Math.log(logNumber)

// TODO: Calculate base 10 logarithm using Math.log10()
let log10 = 0; // Your code here
// Hint: Use Math.log10(logNumber)

// TODO: Calculate base 2 logarithm using Math.log2()
let log2 = 0; // Your code here
// Hint: Use Math.log2(logNumber)

// TODO: Create a custom logarithm function for base 5
function logBase5(number) {
    // Your code here
    // Hint: Use Math.log(number) / Math.log(5)
    return 0;
}

console.log("Number:", logNumber);
console.log("ln:", naturalLog);
console.log("log10:", log10);
console.log("log2:", log2);
console.log("log5:", logBase5(logNumber));

// Exercise 5: Min and Max Operations
console.log("\n5. Min and max operations:");
let numberArray = [5, 2, 8, 1, 9, 3];

// TODO: Find minimum value using Math.min()
let minimum = 0; // Your code here
// Hint: Use Math.min(...numberArray)

// TODO: Find maximum value using Math.max()
let maximum = 0; // Your code here
// Hint: Use Math.max(...numberArray)

// TODO: Find minimum using Math.min.apply()
let minimumApply = 0; // Your code here
// Hint: Use Math.min.apply(null, numberArray)

// TODO: Find maximum using Math.max.apply()
let maximumApply = 0; // Your code here
// Hint: Use Math.max.apply(null, numberArray)

console.log("Array:", numberArray);
console.log("Min (spread):", minimum);
console.log("Max (spread):", maximum);
console.log("Min (apply):", minimumApply);
console.log("Max (apply):", maximumApply);

// Exercise 6: Random Number Generation
console.log("\n6. Random number generation:");
// TODO: Generate 5 random numbers between 0 and 1
let randomNumbers = []; // Your code here
// Hint: Use a loop and Math.random()

// TODO: Generate 5 random integers between 1 and 10
let randomIntegers = []; // Your code here
// Hint: Use Math.floor(Math.random() * (max - min + 1)) + min

// TODO: Generate 5 random floats between 0 and 100
let randomFloats = []; // Your code here
// Hint: Use Math.random() * (max - min) + min

console.log("Random 0-1:", randomNumbers);
console.log("Random integers 1-10:", randomIntegers);
console.log("Random floats 0-100:", randomFloats);

// Exercise 7: Advanced Math Operations
console.log("\n7. Advanced math operations:");
let testNumber = 2.5;

// TODO: Get sign of the number using Math.sign()
let sign = 0; // Your code here
// Hint: Use Math.sign(testNumber)

// TODO: Calculate hypotenuse of triangle with sides 3 and 4 using Math.hypot()
let hypotenuse = 0; // Your code here
// Hint: Use Math.hypot(3, 4)

// TODO: Calculate hypotenuse of 3D triangle with sides 3, 4, and 5
let hypotenuse3D = 0; // Your code here
// Hint: Use Math.hypot(3, 4, 5)

console.log("Number:", testNumber);
console.log("Sign:", sign);
console.log("Hypotenuse (3,4):", hypotenuse);
console.log("Hypotenuse (3,4,5):", hypotenuse3D);

// Exercise 8: Scientific Calculator
console.log("\n8. Create a scientific calculator:");
// TODO: Create a scientific calculator class
class ScientificCalculator {
    constructor() {
        this.history = [];
    }
    
    // TODO: Add method for basic operations
    add(a, b) {
        // Your code here
        // Hint: Return a + b and add to history
        return 0;
    }
    
    subtract(a, b) {
        // Your code here
        // Hint: Return a - b and add to history
        return 0;
    }
    
    multiply(a, b) {
        // Your code here
        // Hint: Return a * b and add to history
        return 0;
    }
    
    divide(a, b) {
        // Your code here
        // Hint: Return a / b and add to history, handle division by zero
        return 0;
    }
    
    // TODO: Add method for power operations
    power(base, exponent) {
        // Your code here
        // Hint: Use Math.pow(base, exponent)
        return 0;
    }
    
    squareRoot(number) {
        // Your code here
        // Hint: Use Math.sqrt(number), handle negative numbers
        return 0;
    }
    
    // TODO: Add method for trigonometric operations
    sin(angleInRadians) {
        // Your code here
        // Hint: Use Math.sin(angleInRadians)
        return 0;
    }
    
    cos(angleInRadians) {
        // Your code here
        // Hint: Use Math.cos(angleInRadians)
        return 0;
    }
    
    tan(angleInRadians) {
        // Your code here
        // Hint: Use Math.tan(angleInRadians)
        return 0;
    }
    
    // TODO: Add method for logarithmic operations
    log(number) {
        // Your code here
        // Hint: Use Math.log(number), handle invalid inputs
        return 0;
    }
    
    log10(number) {
        // Your code here
        // Hint: Use Math.log10(number), handle invalid inputs
        return 0;
    }
    
    // TODO: Add utility methods
    getHistory() {
        // Your code here
        // Hint: Return this.history
        return [];
    }
    
    clearHistory() {
        // Your code here
        // Hint: Set this.history to empty array
    }
    
    degreesToRadians(degrees) {
        // Your code here
        // Hint: Return degrees * Math.PI / 180
        return 0;
    }
    
    radiansToDegrees(radians) {
        // Your code here
        // Hint: Return radians * 180 / Math.PI
        return 0;
    }
}

// Test the scientific calculator
let calc = new ScientificCalculator();
console.log("Scientific calculator tests:");
console.log("2 + 3 =", calc.add(2, 3));
console.log("2^3 =", calc.power(2, 3));
console.log("√16 =", calc.squareRoot(16));
console.log("sin(π/2) =", calc.sin(Math.PI / 2));
console.log("cos(0) =", calc.cos(0));
console.log("ln(e) =", calc.log(Math.E));
console.log("log10(100) =", calc.log10(100));

console.log("Calculation history:");
calc.getHistory().forEach(operation => {
    console.log(operation);
});

// Exercise 9: Number Validation and Error Handling
console.log("\n9. Number validation and error handling:");
// TODO: Create a safe math operation function
function safeMathOperation(operation, a, b) {
    // Your code here
    // Hint: Validate inputs, perform operation, validate result
    // Return { success: true, result: value } or { success: false, error: message }
    return { success: false, error: "Not implemented" };
}

// Test safe operations
let testOperations = [
    { op: (a, b) => a + b, name: 'Addition', a: 5, b: 3 },
    { op: (a, b) => a / b, name: 'Division', a: 10, b: 0 },
    { op: (a, b) => Math.sqrt(a), name: 'Square root', a: -4, b: 0 },
    { op: (a, b) => Math.log(a), name: 'Logarithm', a: -1, b: 0 }
];

console.log("Safe math operations:");
testOperations.forEach(test => {
    let result = safeMathOperation(test.op, test.a, test.b);
    console.log(`${test.name}(${test.a}, ${test.b}): ${result.success ? result.result : 'Error: ' + result.error}`);
});

// Exercise 10: Performance Testing
console.log("\n10. Performance testing:");
// TODO: Create a benchmark function
function benchmark(operation, iterations = 1000000) {
    // Your code here
    // Hint: Use performance.now() to measure time
    // Return the time taken in milliseconds
    return 0;
}

// TODO: Test different approaches
let powTime = benchmark(() => Math.pow(2, 3));
let expTime = benchmark(() => 2 ** 3);

console.log("Performance comparison (1,000,000 operations):");
console.log(`Math.pow(2, 3): ${powTime.toFixed(2)}ms`);
console.log(`2 ** 3: ${expTime.toFixed(2)}ms`);

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Great job! You've practiced mathematical operations.");
console.log("Key concepts practiced:");
console.log("- Math object methods");
console.log("- Power and root operations");
console.log("- Trigonometric functions");
console.log("- Logarithmic functions");
console.log("- Random number generation");
console.log("- Scientific calculator implementation");
console.log("- Error handling and validation");
console.log("- Performance testing");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: Number Formatting");
console.log("4. Ask questions if you need help");
