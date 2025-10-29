// Exercise 1: Math Object Methods
console.log("\n1. Use Math object methods:");

let numbers = [4.7, 4.3, 4.5, -4.7, -4.3];
let rounded = numbers.map(num => Math.round(num));
let floored = numbers.map(num => Math.floor(num));
let ceiled = numbers.map(num => Math.ceil(num));
let absolute = numbers.map(num => Math.abs(num));
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
let powerResult = Math.pow(base, exponent);
let powerResult2 = base ** exponent;
let sqrtResult = Math.sqrt(number);
let cbrtResult = Math.cbrt(number);
console.log(`${base}^${exponent} (Math.pow):`, powerResult);
console.log(`${base}^${exponent} (**):`, powerResult2);
console.log(`√${number}:`, sqrtResult);
console.log(`∛${number}:`, cbrtResult);

// Exercise 3: Trigonometric Functions
console.log("\n3. Trigonometric functions:");

let angleInRadians = Math.PI / 4;
let sine = Math.sin(angleInRadians);
let cosine = Math.cos(angleInRadians);
let tangent = Math.tan(angleInRadians);
let arcsine = Math.asin(0.707);
console.log("Angle (radians):", angleInRadians);
console.log("sin:", sine);
console.log("cos:", cosine);
console.log("tan:", tangent);
console.log("asin(0.707):", arcsine);

// Exercise 4: Logarithmic Functions
console.log("\n4. Logarithmic functions:");

let logNumber = 100;
let naturalLog = Math.log(logNumber);
let log10 = Math.log10(logNumber);
let log2 = Math.log2(logNumber);

function logBase5(number) {
    return Math.log(number) / Math.log(5);
}
console.log("Number:", logNumber);
console.log("ln:", naturalLog);
console.log("log10:", log10);
console.log("log2:", log2);
console.log("log5:", logBase5(logNumber));

// Exercise 5: Min and Max Operations
console.log("\n5. Min and max operations:");

let numberArray = [5, 2, 8, 1, 9, 3];
let minimum = Math.min(...numberArray);
let maximum = Math.max(...numberArray);
let minimumApply = Math.min.apply(null, numberArray);
let maximumApply = Math.max.apply(null, numberArray);
console.log("Array:", numberArray);
console.log("Min (spread):", minimum);
console.log("Max (spread):", maximum);
console.log("Min (apply):", minimumApply);
console.log("Max (apply):", maximumApply);

// Exercise 6: Random Number Generation
console.log("\n6. Random number generation:");

let randomNumbers = Array.from({ length: 5 }, () => Math.random());
let randomIntegers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
let randomFloats = Array.from({ length: 5 }, () => Math.random() * 100);
console.log("Random 0-1:", randomNumbers);
console.log("Random integers 1-10:", randomIntegers);
console.log("Random floats 0-100:", randomFloats);

// Exercise 7: Advanced Math Operations
console.log("\n7. Advanced math operations:");

let testNumber = 2.5;
let sign = Math.sign(testNumber);
let hypotenuse = Math.hypot(3, 4);
let hypotenuse3D = Math.hypot(3, 4, 5);
console.log("Number:", testNumber);
console.log("Sign:", sign);
console.log("Hypotenuse (3,4):", hypotenuse);
console.log("Hypotenuse (3,4,5):", hypotenuse3D);

// Exercise 8: Scientific Calculator
console.log("\n8. Create a scientific calculator:");

class ScientificCalculator {
    constructor() {
        this.history = [];
    }
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
        if (b === 0) {
            this.history.push(`Error: Division by zero`);
            return "Error: Division by zero";
        }
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }
    power(base, exponent) {
        let result = Math.pow(base, exponent);
        this.history.push(`${base}^${exponent} = ${result}`);
        return result;
    }
    squareRoot(number) {
        if (number < 0) {
            this.history.push(`Error: Negative square root`);
            return "Error: Negative square root";
        }
        let result = Math.sqrt(number);
        this.history.push(`√${number} = ${result}`);
        return result;
    }
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
    log(number) {
        if (number <= 0) {
            this.history.push(`Error: Invalid log`);
            return "Error: Invalid log";
        }
        let result = Math.log(number);
        this.history.push(`ln(${number}) = ${result}`);
        return result;
    }
    log10(number) {
        if (number <= 0) {
            this.history.push(`Error: Invalid log10`);
            return "Error: Invalid log10";
        }
        let result = Math.log10(number);
        this.history.push(`log10(${number}) = ${result}`);
        return result;
    }
    getHistory() {
        return this.history;
    }
    clearHistory() {
        this.history = [];
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
}
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

function safeMathOperation(operation, a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Inputs must be numbers");
        }
        let result = operation(a, b);
        if (!isFinite(result) || isNaN(result)) {
            throw new Error("Invalid result");
        }
        return { success: true, result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
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

function benchmark(operation, iterations = 1000000) {
    let start = performance.now();
    for (let i = 0; i < iterations; i++) operation();
    let end = performance.now();
    return end - start;
}
let powTime = benchmark(() => Math.pow(2, 3));
let expTime = benchmark(() => 2 ** 3);
console.log("Performance comparison (1,000,000 operations):");
console.log(`Math.pow(2, 3): ${powTime.toFixed(2)}ms`);
console.log(`2 ** 3: ${expTime.toFixed(2)}ms`);