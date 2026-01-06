// Exercise 1: Performance Measurement
console.log("\n1. Performance Measurement:");

// 1.1 Create performance measurement function
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
    return result;
}
const largeNumber = 999999999;

// 1.2 Compare number operations
console.log("\n1.2 Compare number operations:");
let result1 = measurePerformance("Math.pow", () => Math.pow(largeNumber, 2));
let result2 = measurePerformance("Multiplication", () => largeNumber * largeNumber);
let result3 = measurePerformance("Math.sqrt", () => Math.sqrt(largeNumber));

// Exercise 2: Memory Optimization
console.log("\n2. Memory Optimization:");

// 2.1 Efficient number storage
const PI = 3.14159265359;
const E = 2.71828182846;
let counter = 0;
let total = 0;
console.log("PI:", PI);
console.log("E:", E);
console.log("Counter:", counter);
console.log("Total:", total);

// 2.2 Avoid unnecessary number creation
let inefficientSum = 0;
for (let i = 0; i < 1000; i++) {
    inefficientSum += new Number(i).valueOf();
}
let efficientSum = 0;
for (let i = 0; i < 1000; i++) {
    efficientSum += i;
}
console.log("Inefficient sum:", inefficientSum);
console.log("Efficient sum:", efficientSum);

// Exercise 3: Precision Handling
console.log("\n3. Precision Handling:");

let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2;
console.log("0.1 + 0.2 =", sum);
console.log("Expected: 0.3");
console.log("Actual:", sum);

// 3.2 Fix precision issues
let displaySum = (num1 + num2).toFixed(1);
console.log("Display sum:", displaySum);
let roundedSum = Math.round((num1 + num2) * 10) / 10;
console.log("Rounded sum:", roundedSum);
let isEqual = Math.abs(sum - 0.3) < Number.EPSILON;
console.log("Is equal to 0.3:", isEqual);

// Exercise 4: Algorithm Optimization
console.log("\n4. Algorithm Optimization:");

function inefficientFactorial(n) {
    if (n <= 1) return 1;
    return n * inefficientFactorial(n - 1);
}
function efficientFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
let factorialResult = efficientFactorial(5);
console.log("Factorial of 5:", factorialResult);

// 4.2 Use appropriate Math methods
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
console.log("Maximum:", max);
let min = Math.min(...numbers);
console.log("Minimum:", min);
let sumNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sumNumbers);

// Exercise 5: Data Structure Optimization
console.log("\n5. Data Structure Optimization:");

// 5.1 Use appropriate data structures
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("Unique numbers:", Array.from(uniqueNumbers));
let numberCounts = new Map();
let numberArray = [1, 2, 2, 3, 3, 3, 4, 5];
numberArray.forEach(num => {
    numberCounts.set(num, (numberCounts.get(num) || 0) + 1);
});
console.log("Number counts:", numberCounts);

// 5.2 Optimize number arrays
let preAllocatedArray = new Array(1000);
for (let i = 0; i < preAllocatedArray.length; i++) {
    preAllocatedArray[i] = i * 2;
}
console.log("First 5 elements:", preAllocatedArray.slice(0, 5));

// Exercise 6: Modern JavaScript Optimization
console.log("\n6. Modern JavaScript Optimization:");

let testNumber = 42.567;
let isInteger = Number.isInteger(testNumber);
console.log("Is integer:", isInteger);
let isFiniteNum = Number.isFinite(testNumber);
console.log("Is finite:", isFiniteNum);
let isNaNVal = Number.isNaN(testNumber);
console.log("Is NaN:", isNaNVal);

// 6.2 Use BigInt for large integers
let largeInt = 9007199254740991;
console.log("Large int:", largeInt);
let bigInt = BigInt("9007199254740992");
console.log("BigInt:", bigInt);

// Exercise 7: Caching and Memoization
console.log("\n7. Caching and Memoization:");

let calculationCache = new Map();
function cachedCalculation(n) {
    if (calculationCache.has(n)) {
        console.log(`Cache hit for ${n}`);
        return calculationCache.get(n);
    }
    let result = n * n * n;
    calculationCache.set(n, result);
    console.log(`Cache miss for ${n}, calculated: ${result}`);
    return result;
}
let cachedResult1 = cachedCalculation(5);
let cachedResult2 = cachedCalculation(5);
console.log("Cached result 1:", cachedResult1);
console.log("Cached result 2:", cachedResult2);
function memoizedFibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
    return memo[n];
}
let fibResult = memoizedFibonacci(10);
console.log("Fibonacci(10):", fibResult);

// Exercise 8: Error Handling Optimization
console.log("\n8. Error Handling Optimization:");

function safeDivide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}
try {
    let divisionResult = safeDivide(10, 2);
    console.log("Division result:", divisionResult);
} catch (error) {
    console.log("Error:", error.message);
}
function safeParseNumber(str) {
    try {
        let num = Number(str);
        if (Number.isNaN(num)) {
            throw new Error('Invalid number');
        }
        return num;
    } catch (error) {
        console.log("Parse error:", error.message);
        return 0;
    }
}
let parsedNumber = safeParseNumber("42");
console.log("Parsed number:", parsedNumber);

// Exercise 9: Performance Best Practices
console.log("\n9. Performance Best Practices:");

const MAX_ATTEMPTS = 100;
const DEFAULT_VALUE = 0;
let integerCount = 0;
let decimalValue = 3.14;
let numberString = "42";
let convertedNumber = parseInt(numberString, 10);
console.log("Converted number:", convertedNumber);
let isEven = (n) => (n & 1) === 0;
console.log("Is 4 even:", isEven(4));
console.log("Is 5 even:", isEven(5));

// 9.2 Optimize loops
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayLength = numbersArray.length;
let loopSum = 0;
for (let i = 0; i < arrayLength; i++) {
    loopSum += numbersArray[i];
}
console.log("Loop sum:", loopSum);

// Exercise 10: Real-World Optimization Examples
console.log("\n10. Real-World Optimization Examples:");

// 10.1 Optimize financial calculations
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
    let amount = principal * Math.pow(1 + (rate / compoundFrequency), compoundFrequency * time);
    return Math.round(amount * 100) / 100;
}
let interestResult = calculateCompoundInterest(1000, 0.05, 2, 12);
console.log("Compound interest:", interestResult);

// 10.2 Optimize statistical calculations
function calculateStandardDeviation(numbers) {
    let mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    let variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;
    return Math.sqrt(variance);
}
let testData = [1, 2, 3, 4, 5];
let stdDev = calculateStandardDeviation(testData);
console.log("Standard deviation:", stdDev);