// Exercise 7: Number Optimization
// Complete the TODO sections below

console.log("💪 Exercise 7: Number Optimization");
console.log("=================================");

// Exercise 1: Performance Measurement
console.log("\n1. Performance Measurement:");

// TODO 1: Create function to measure performance
console.log("\n1.1 Create performance measurement function:");
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
    return result;
}

// Test with large number operations
const largeNumber = 999999999;

// TODO 2: Compare different number operations
console.log("\n1.2 Compare number operations:");
let result1 = measurePerformance("Math.pow", () => Math.pow(largeNumber, 2));
let result2 = measurePerformance("Multiplication", () => largeNumber * largeNumber);
let result3 = measurePerformance("Math.sqrt", () => Math.sqrt(largeNumber));

// Exercise 2: Memory Optimization
console.log("\n2. Memory Optimization:");

// TODO 3: Demonstrate efficient number storage
console.log("\n2.1 Efficient number storage:");
// Use const for immutable numbers
const PI = 3.14159265359; // Your code here
const E = 2.71828182846; // Your code here

// Use let for mutable numbers
let counter = 0; // Your code here
let total = 0; // Your code here

console.log("PI:", PI);
console.log("E:", E);
console.log("Counter:", counter);
console.log("Total:", total);

// TODO 4: Avoid unnecessary number creation
console.log("\n2.2 Avoid unnecessary number creation:");
// Inefficient: creating new numbers in loop
let inefficientSum = 0;
for (let i = 0; i < 1000; i++) {
    inefficientSum += new Number(i).valueOf(); // Creates new Number object
}

// Efficient: reuse existing numbers
let efficientSum = 0;
for (let i = 0; i < 1000; i++) {
    efficientSum += i; // Uses primitive number
}

console.log("Inefficient sum:", inefficientSum);
console.log("Efficient sum:", efficientSum);

// Exercise 3: Precision Handling
console.log("\n3. Precision Handling:");

// TODO 5: Handle floating-point precision issues
console.log("\n3.1 Handle floating-point precision:");
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2;

console.log("0.1 + 0.2 =", sum);
console.log("Expected: 0.3");
console.log("Actual:", sum);

// TODO 6: Fix precision issues
console.log("\n3.2 Fix precision issues:");
// Method 1: Use toFixed for display
let displaySum = (num1 + num2).toFixed(1); // Your code here
console.log("Display sum:", displaySum);

// Method 2: Use Math.round for calculations
let roundedSum = Math.round((num1 + num2) * 10) / 10; // Your code here
console.log("Rounded sum:", roundedSum);

// Method 3: Use Number.EPSILON for comparison
let isEqual = Math.abs(sum - 0.3) < Number.EPSILON; // Your code here
console.log("Is equal to 0.3:", isEqual);

// Exercise 4: Algorithm Optimization
console.log("\n4. Algorithm Optimization:");

// TODO 7: Optimize mathematical calculations
console.log("\n4.1 Optimize calculations:");
// Inefficient: repeated calculations
function inefficientFactorial(n) {
    if (n <= 1) return 1;
    return n * inefficientFactorial(n - 1);
}

// Efficient: iterative approach
function efficientFactorial(n) {
    let result = 1; // Your code here
    for (let i = 2; i <= n; i++) {
        result *= i; // Your code here
    }
    return result;
}

let factorialResult = efficientFactorial(5);
console.log("Factorial of 5:", factorialResult);

// TODO 8: Use appropriate Math methods
console.log("\n4.2 Use appropriate Math methods:");
let numbers = [1, 2, 3, 4, 5];

// Find maximum efficiently
let max = Math.max(...numbers); // Your code here
console.log("Maximum:", max);

// Find minimum efficiently
let min = Math.min(...numbers); // Your code here
console.log("Minimum:", min);

// Calculate sum efficiently
let sumNumbers = numbers.reduce((acc, num) => acc + num, 0); // Your code here
console.log("Sum:", sumNumbers);

// Exercise 5: Data Structure Optimization
console.log("\n5. Data Structure Optimization:");

// TODO 9: Use appropriate data structures for numbers
console.log("\n5.1 Use appropriate data structures:");
// For unique numbers, use Set
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]); // Your code here
console.log("Unique numbers:", Array.from(uniqueNumbers));

// For number counting, use Map
let numberCounts = new Map();
let numberArray = [1, 2, 2, 3, 3, 3, 4, 5];
numberArray.forEach(num => {
    numberCounts.set(num, (numberCounts.get(num) || 0) + 1); // Your code here
});
console.log("Number counts:", numberCounts);

// TODO 10: Optimize number arrays
console.log("\n5.2 Optimize number arrays:");
// Pre-allocate array size when known
let preAllocatedArray = new Array(1000); // Your code here
for (let i = 0; i < preAllocatedArray.length; i++) {
    preAllocatedArray[i] = i * 2;
}
console.log("First 5 elements:", preAllocatedArray.slice(0, 5));

// Exercise 6: Modern JavaScript Optimization
console.log("\n6. Modern JavaScript Optimization:");

// TODO 11: Use modern number methods
console.log("\n6.1 Use modern number methods:");
let testNumber = 42.567;

// Use Number.isInteger for integer checking
let isInteger = Number.isInteger(testNumber); // Your code here
console.log("Is integer:", isInteger);

// Use Number.isFinite for finite checking
let isFinite = Number.isFinite(testNumber); // Your code here
console.log("Is finite:", isFinite);

// Use Number.isNaN for NaN checking
let isNaN = Number.isNaN(testNumber); // Your code here
console.log("Is NaN:", isNaN);

// TODO 12: Use BigInt for large integers
console.log("\n6.2 Use BigInt for large integers:");
// Regular number limitation
let largeInt = 9007199254740991; // MAX_SAFE_INTEGER
console.log("Large int:", largeInt);

// BigInt for larger numbers
let bigInt = BigInt("9007199254740992"); // Your code here
console.log("BigInt:", bigInt);

// Exercise 7: Caching and Memoization
console.log("\n7. Caching and Memoization:");

// TODO 13: Implement number caching
console.log("\n7.1 Implement number caching:");
let calculationCache = new Map();

function cachedCalculation(n) {
    if (calculationCache.has(n)) {
        console.log(`Cache hit for ${n}`);
        return calculationCache.get(n);
    }
    
    let result = n * n * n; // Expensive calculation
    calculationCache.set(n, result); // Your code here
    console.log(`Cache miss for ${n}, calculated: ${result}`);
    return result;
}

let cachedResult1 = cachedCalculation(5);
let cachedResult2 = cachedCalculation(5); // Should use cache
console.log("Cached result 1:", cachedResult1);
console.log("Cached result 2:", cachedResult2);

// TODO 14: Implement memoization for expensive calculations
console.log("\n7.2 Implement memoization:");
function memoizedFibonacci(n, memo = {}) {
    if (n in memo) return memo[n]; // Your code here
    if (n <= 2) return 1;
    
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo); // Your code here
    return memo[n];
}

let fibResult = memoizedFibonacci(10);
console.log("Fibonacci(10):", fibResult);

// Exercise 8: Error Handling Optimization
console.log("\n8. Error Handling Optimization:");

// TODO 15: Optimize error handling for numbers
console.log("\n8.1 Optimize error handling:");
function safeDivide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers'); // Your code here
    }
    if (b === 0) {
        throw new Error('Division by zero'); // Your code here
    }
    return a / b;
}

try {
    let divisionResult = safeDivide(10, 2);
    console.log("Division result:", divisionResult);
} catch (error) {
    console.log("Error:", error.message);
}

// TODO 16: Use try-catch efficiently
console.log("\n8.2 Use try-catch efficiently:");
function safeParseNumber(str) {
    try {
        let num = Number(str); // Your code here
        if (Number.isNaN(num)) {
            throw new Error('Invalid number'); // Your code here
        }
        return num;
    } catch (error) {
        console.log("Parse error:", error.message);
        return 0; // Default value
    }
}

let parsedNumber = safeParseNumber("42");
console.log("Parsed number:", parsedNumber);

// Exercise 9: Performance Best Practices
console.log("\n9. Performance Best Practices:");

// TODO 17: Demonstrate best practices
console.log("\n9.1 Best practices demonstration:");

// 1. Use const for constants
const MAX_ATTEMPTS = 100; // Your code here
const DEFAULT_VALUE = 0; // Your code here

// 2. Use appropriate number types
let integerCount = 0; // Use for counters
let decimalValue = 3.14; // Use for precise calculations

// 3. Avoid unnecessary conversions
let numberString = "42";
let convertedNumber = parseInt(numberString, 10); // Explicit radix
console.log("Converted number:", convertedNumber);

// 4. Use bitwise operations for integers when appropriate
let isEven = (n) => (n & 1) === 0; // Your code here
console.log("Is 4 even:", isEven(4));
console.log("Is 5 even:", isEven(5));

// TODO 18: Optimize loops with numbers
console.log("\n9.2 Optimize loops with numbers:");
// Cache array length
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayLength = numbersArray.length; // Cache length

let loopSum = 0;
for (let i = 0; i < arrayLength; i++) { // Use cached length
    loopSum += numbersArray[i];
}
console.log("Loop sum:", loopSum);

// Exercise 10: Real-World Optimization Examples
console.log("\n10. Real-World Optimization Examples:");

// TODO 19: Optimize financial calculations
console.log("\n10.1 Optimize financial calculations:");
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
    // Use efficient calculation
    let amount = principal * Math.pow(1 + (rate / compoundFrequency), compoundFrequency * time); // Your code here
    return Math.round(amount * 100) / 100; // Round to 2 decimal places
}

let interestResult = calculateCompoundInterest(1000, 0.05, 2, 12);
console.log("Compound interest:", interestResult);

// TODO 20: Optimize statistical calculations
console.log("\n10.2 Optimize statistical calculations:");
function calculateStandardDeviation(numbers) {
    let mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length; // Your code here
    let variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length; // Your code here
    return Math.sqrt(variance); // Your code here
}

let testData = [1, 2, 3, 4, 5];
let stdDev = calculateStandardDeviation(testData);
console.log("Standard deviation:", stdDev);

console.log("\n🎉 Congratulations! You've completed Exercise 7: Number Optimization!");
console.log("You now understand how to optimize number operations for better performance!");
