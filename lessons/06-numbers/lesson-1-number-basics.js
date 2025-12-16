// Lesson 1: Number Basics
// This file teaches fundamental number concepts

console.log("🔢 Welcome to Numbers Lesson 1: Number Basics!");
console.log("=============================================");

// 1. Number Creation and Initialization
console.log("\n📚 1. Number Creation and Initialization");
console.log("---------------------------------------");

// Number literals
let integer = 42;
let decimal = 3.14159;
let negative = -15;
let scientific = 1.23e4; // 12300

console.log("Number literals:");
console.log("Integer:", integer);
console.log("Decimal:", decimal);
console.log("Negative:", negative);
console.log("Scientific notation:", scientific);

// Number constructor
let numberFromConstructor = new Number(100);
let numberFromString = Number("50");
let numberFromBoolean = Number(true);

console.log("Number constructor:");
console.log("From constructor:", numberFromConstructor);
console.log("From string:", numberFromString);
console.log("From boolean:", numberFromBoolean);

// 2. Number Properties
console.log("\n📚 2. Number Properties");
console.log("---------------------");

let testNumber = 42.567;
console.log("Test number:", testNumber);

// Number properties
console.log("Number properties:");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);

// 3. Special Number Values
console.log("\n📚 3. Special Number Values");
console.log("-------------------------");

// NaN (Not a Number)
let notANumber = NaN;
let invalidOperation = 0 / 0;
let stringToNumber = Number("hello");

console.log("NaN examples:");
console.log("NaN:", notANumber);
console.log("0 / 0:", invalidOperation);
console.log("Number('hello'):", stringToNumber);
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN(42):", isNaN(42));

// Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let divisionByZero = 1 / 0;

console.log("Infinity examples:");
console.log("Infinity:", positiveInfinity);
console.log("-Infinity:", negativeInfinity);
console.log("1 / 0:", divisionByZero);
console.log("isFinite(Infinity):", isFinite(Infinity));
console.log("isFinite(42):", isFinite(42));

// 4. Basic Arithmetic Operations
console.log("\n📚 4. Basic Arithmetic Operations");
console.log("--------------------------------");

let a = 10;
let b = 3;

console.log("Basic arithmetic:");
console.log(`${a} + ${b} =`, a + b);
console.log(`${a} - ${b} =`, a - b);
console.log(`${a} * ${b} =`, a * b);
console.log(`${a} / ${b} =`, a / b);
console.log(`${a} % ${b} =`, a % b); // Modulo (remainder)
console.log(`${a} ** ${b} =`, a ** b); // Exponentiation

// 5. Number Comparison
console.log("\n📚 5. Number Comparison");
console.log("---------------------");

let num1 = 5;
let num2 = 10;
let num3 = '5';

console.log("Number comparison:");
console.log(`${num1} === ${num2}:`, num1 === num2);
console.log(`${num1} === ${num3}:`, num1 === num3);
console.log(`${num1} < ${num2}:`, num1 < num2);
console.log(`${num1} > ${num2}:`, num1 > num2);
console.log(`${num1} <= ${num3}:`, num1 <= num3);
console.log(`${num1} >= ${num3}:`, num1 >= num3);

// 6. Number Type Checking
console.log("\n📚 6. Number Type Checking");
console.log("------------------------");

let testValues = [42, "42", true, null, undefined, NaN, Infinity];

testValues.forEach(value => {
    console.log(`${value} (${typeof value}):`);
    console.log(`  typeof === 'number': ${typeof value === 'number'}`);
    console.log(`  isNaN(): ${isNaN(value)}`);
    console.log(`  isFinite(): ${isFinite(value)}`);
    console.log(`  Number.isNaN(): ${Number.isNaN(value)}`);
    console.log(`  Number.isFinite(): ${Number.isFinite(value)}`);
    console.log("");
});

// 7. Number Conversion
console.log("\n📚 7. Number Conversion");
console.log("---------------------");

// String to number
let stringNumber = "123.45";
let convertedNumber = Number(stringNumber);
let parsedInt = parseInt(stringNumber);
let parsedFloat = parseFloat(stringNumber);

console.log("String to number conversion:");
console.log("Original string:", stringNumber);
console.log("Number():", convertedNumber);
console.log("parseInt():", parsedInt);
console.log("parseFloat():", parsedFloat);

// Number to string
let numberToString = 42.567;
let toStringResult = numberToString.toString();
let toFixedResult = numberToString.toFixed(2);
let toPrecisionResult = numberToString.toPrecision(4);

console.log("Number to string conversion:");
console.log("Original number:", numberToString);
console.log("toString():", toStringResult);
console.log("toFixed(2):", toFixedResult);
console.log("toPrecision(4):", toPrecisionResult);

// 8. Number Validation
console.log("\n📚 8. Number Validation");
console.log("---------------------");

function validateNumber(value) {
    if (typeof value !== 'number') {
        return { isValid: false, error: 'Not a number type' };
    }
    
    if (isNaN(value)) {
        return { isValid: false, error: 'NaN (Not a Number)' };
    }
    
    if (!isFinite(value)) {
        return { isValid: false, error: 'Infinite number' };
    }
    
    return { isValid: true, value: value };
}

let validationTests = [42, "hello", NaN, Infinity, -Infinity, null, undefined];

validationTests.forEach(testValue => {
    let result = validateNumber(testValue);
    console.log(`${testValue}: ${result.isValid ? 'Valid' : 'Invalid - ' + result.error}`);
});

// 9. Practical Example: Calculator Functions
console.log("\n📚 9. Practical Example: Calculator Functions");
console.log("--------------------------------------------");

class BasicCalculator {
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
            this.history.push(`${a} / ${b} = Error: Division by zero`);
            return NaN;
        }
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }
    
    getHistory() {
        return this.history;
    }
    
    clearHistory() {
        this.history = [];
    }
}

// Test calculator
let calc = new BasicCalculator();
console.log("Calculator operations:");
console.log("10 + 5 =", calc.add(10, 5));
console.log("10 - 3 =", calc.subtract(10, 3));
console.log("4 * 6 =", calc.multiply(4, 6));
console.log("15 / 3 =", calc.divide(15, 3));
console.log("10 / 0 =", calc.divide(10, 0));

console.log("Calculation history:");
calc.getHistory().forEach(operation => {
    console.log(operation);
});

// 10. Number Precision and Rounding
console.log("\n📚 10. Number Precision and Rounding");
console.log("----------------------------------");

let preciseNumber = 3.14159265359;
console.log("Original number:", preciseNumber);

// Rounding methods
console.log("Rounding methods:");
console.log("Math.round():", Math.round(preciseNumber));
console.log("Math.floor():", Math.floor(preciseNumber));
console.log("Math.ceil():", Math.ceil(preciseNumber));
console.log("Math.trunc():", Math.trunc(preciseNumber));

// Precision methods
console.log("Precision methods:");
console.log("toFixed(2):", preciseNumber.toFixed(2));
console.log("toFixed(4):", preciseNumber.toFixed(4));
console.log("toPrecision(3):", preciseNumber.toPrecision(3));
console.log("toPrecision(6):", preciseNumber.toPrecision(6));

// 11. Number Formatting
console.log("\n📚 11. Number Formatting");
console.log("----------------------");

let price = 1234.567;
let percentage = 0.15;
let largeNumber = 1234567;

console.log("Number formatting:");
console.log("Price formatting:");
console.log("toFixed(2):", price.toFixed(2));
console.log("toLocaleString():", price.toLocaleString());
console.log("toLocaleString('en-US', {style: 'currency', currency: 'USD'}):", 
    price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

console.log("Percentage formatting:");
console.log("toFixed(2) + '%':", (percentage * 100).toFixed(2) + '%');

console.log("Large number formatting:");
console.log("toLocaleString():", largeNumber.toLocaleString());

// 12. Number Constants
console.log("\n📚 12. Number Constants");
console.log("--------------------");

console.log("Mathematical constants:");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.SQRT1_2:", Math.SQRT1_2);

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Numbers can be created as literals or using constructors");
console.log("- JavaScript has special number values: NaN, Infinity, -Infinity");
console.log("- Use isNaN() and isFinite() to check number validity");
console.log("- Number conversion: Number(), parseInt(), parseFloat()");
console.log("- Number formatting: toFixed(), toPrecision(), toLocaleString()");
console.log("- Mathematical constants are available in Math object");
console.log("- Always validate numbers before performing operations");

console.log("\n📝 Practice Exercises:");
console.log("1. Create different types of numbers");
console.log("2. Perform basic arithmetic operations");
console.log("3. Convert strings to numbers and vice versa");
console.log("4. Format numbers for display");
console.log("5. Validate number inputs");
