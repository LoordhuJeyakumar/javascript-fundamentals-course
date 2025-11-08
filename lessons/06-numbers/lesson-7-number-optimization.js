// Lesson 7: Number Optimization
// This file teaches number performance optimization and best practices

console.log("🔢 Welcome to Numbers Lesson 7: Number Optimization!");
console.log("===================================================");

// 1. Performance Considerations
console.log("\n📚 1. Performance Considerations");
console.log("-----------------------------");

// Benchmarking function
function benchmark(operation, iterations = 1000000) {
    let start = performance.now();
    for (let i = 0; i < iterations; i++) {
        operation();
    }
    let end = performance.now();
    return end - start;
}

// Test different number operations
console.log("Performance comparison (1,000,000 operations):");

// Exponentiation
let powTime = benchmark(() => Math.pow(2, 3));
let expTime = benchmark(() => 2 ** 3);
console.log(`Math.pow(2, 3): ${powTime.toFixed(2)}ms`);
console.log(`2 ** 3: ${expTime.toFixed(2)}ms`);

// Rounding
let roundTime = benchmark(() => Math.round(4.7));//=> 5
let floorTime = benchmark(() => Math.floor(4.7));//=> 4
let ceilTime = benchmark(() => Math.ceil(4.7));//=> 5
console.log(`Math.round(): ${roundTime.toFixed(2)}ms`);
console.log(`Math.floor(): ${floorTime.toFixed(2)}ms`);
console.log(`Math.ceil(): ${ceilTime.toFixed(2)}ms`);

// Math operations
let addTime = benchmark(() => 5 + 3);//=> 8
let multiplyTime = benchmark(() => 5 * 3);//=> 15
let divideTime = benchmark(() => 5 / 3);//=> 1.6666666666666667
console.log(`Addition: ${addTime.toFixed(2)}ms`);
console.log(`Multiplication: ${multiplyTime.toFixed(2)}ms`);
console.log(`Division: ${divideTime.toFixed(2)}ms`);

// 2. Memory Optimization
console.log("\n📚 2. Memory Optimization");
console.log("------------------------");

// Number storage optimization
function testNumberStorage() {
    let numbers = [];
    let startMemory = process.memoryUsage().heapUsed;
    console.log("startMemory", startMemory);
    
    // Create large array of numbers
    for (let i = 0; i < 10000000; i++) {
        numbers.push(Math.random());
    }
    
    let endMemory = performance.memory ? performance.memory.usedJSHeapSize : 0;
    let memoryUsed = endMemory - startMemory;
    
    return {
        arrayLength: numbers.length,
        memoryUsed: memoryUsed,
        averagePerNumber: memoryUsed / numbers.length
    };
}

let storageTest = testNumberStorage();
console.log("Number storage test:");
console.log("Array length:", storageTest.arrayLength);
console.log("Memory used:", storageTest.memoryUsed, "bytes");
console.log("Average per number:", storageTest.averagePerNumber.toFixed(2), "bytes");

// 3. Precision Handling
console.log("\n📚 3. Precision Handling");
console.log("----------------------");

// Floating point precision issues
console.log("Floating point precision examples:");
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

// Safe floating point operations
function safeAdd(a, b) {
    let precision = Math.max(getDecimalPlaces(a), getDecimalPlaces(b)); // 1 or 2 = 2
    let multiplier = Math.pow(10, precision); // 10^1 = 10
    return (Math.round(a * multiplier) + Math.round(b * multiplier)) / multiplier; // (10 + 20) / 10 = 0.3
}

function getDecimalPlaces(num) {
    let str = num.toString();
    let decimalIndex = str.indexOf('.');
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1; // 3 - 1 - 1 = 1
}

function safeMultiply(a, b) {
    let precision = getDecimalPlaces(a) + getDecimalPlaces(b);
    let multiplier = Math.pow(10, precision);
    return (Math.round(a * multiplier) * Math.round(b * multiplier)) / (multiplier * multiplier);
}

console.log("Safe floating point operations:");
console.log("safeAdd(0.1, 0.2) =", safeAdd(0.1, 0.2));
console.log("safeMultiply(0.1, 0.2) =", safeMultiply(0.1, 0.2));

// 4. Number Validation Optimization
console.log("\n📚 4. Number Validation Optimization");
console.log("-----------------------------------");

// Fast number validation = Check if the value is a number, not NaN, and not Infinity
function isNumberFast(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

// Optimized number parsing = Convert a string to a number
function parseNumberFast(str) {
    if (typeof str !== 'string') return NaN;
    
    // Check for empty string
    if (str.length === 0) return NaN;
    
    // Check for single character
    if (str.length === 1) {
        let char = str.charAt(0);
        return char >= '0' && char <= '9' ? parseInt(char) : NaN;
    }
    
    // Use Number() for most cases
    let num = Number(str);
    return isNaN(num) ? NaN : num;
}

// Test validation performance
let validationTests = [42, "42", "hello", null, undefined, NaN, Infinity];
console.log("Number validation tests:");
validationTests.forEach(test => {
    console.log(`${test}: isNumberFast=${isNumberFast(test)}, parseNumberFast=${parseNumberFast(test)}`);
});

// 5. Mathematical Function Optimization
console.log("\n📚 5. Mathematical Function Optimization");
console.log("--------------------------------------");

// Fast power function for small integers = Calculate the power of a number
function fastPower(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    if (exponent === 2) return base * base;
    if (exponent === 3) return base * base * base;
    
    // Use bit shifting for powers of 2
    if (base === 2 && Number.isInteger(exponent) && exponent > 0) {
        return 1 << exponent;
    }
    
    // Fall back to Math.pow for other cases
    return Math.pow(base, exponent);
}

// Fast factorial with memoization
let factorialCache = new Map();
function fastFactorial(n) {
    if (n < 0) return NaN;
    if (n <= 1) return 1;
    
    if (factorialCache.has(n)) {
        return factorialCache.get(n);
    }
    
    let result = n * fastFactorial(n - 1);
    factorialCache.set(n, result);
    return result;
}

// Fast square root approximation
function fastSqrt(n) {
    if (n < 0) return NaN;
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Newton's method approximation
    let x = n;
    let y = (x + n / x) / 2;
    
    while (Math.abs(x - y) > 0.0001) {
        x = y;
        y = (x + n / x) / 2;
    }
    
    return y;
}

console.log("Optimized mathematical functions:");
console.log("fastPower(2, 10):", fastPower(2, 10));
console.log("fastFactorial(5):", fastFactorial(5));
console.log("fastSqrt(16):", fastSqrt(16).toFixed(4));
console.log("Math.sqrt(16):", Math.sqrt(16));

// 6. Array Operations Optimization
console.log("\n📚 6. Array Operations Optimization");
console.log("---------------------------------");

// Optimized array sum
function fastArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Optimized array average
function fastArrayAverage(numbers) {
    if (numbers.length === 0) return 0;
    return fastArraySum(numbers) / numbers.length;
}

// Optimized array min/max
function fastArrayMinMax(numbers) {
    if (numbers.length === 0) return { min: undefined, max: undefined };
    
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) min = numbers[i];
        if (numbers[i] > max) max = numbers[i];
    }
    
    return { min, max };
}

// Test array operations
let testArray = [1, 5, 3, 9, 2, 8, 4, 7, 6];
console.log("Optimized array operations:");
console.log("Array:", testArray);
console.log("Sum:", fastArraySum(testArray));
console.log("Average:", fastArrayAverage(testArray));
console.log("Min/Max:", fastArrayMinMax(testArray));

// 7. Caching and Memoization
console.log("\n📚 7. Caching and Memoization");
console.log("----------------------------");

/* Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
n = 5 => 0, 1, 1, 2, 3 => f(n) = f(n - 1) + f(n - 2)
*/

// Memoized Fibonacci
let fibonacciCache = new Map();
function memoizedFibonacci(n) {
    if (n <= 1) return n;
    
    if (fibonacciCache.has(n)) {
        return fibonacciCache.get(n);
    }
    
    let result = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    fibonacciCache.set(n, result);
    return result;
}



// Memoized prime checking 
let primeCache = new Map();
function isPrimeMemoized(n) {
    if (primeCache.has(n)) {
        return primeCache.get(n);
    }
    
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 !== 0) {
        primeCache.set(n, false);
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            primeCache.set(n, false);
            return false;
        }
    }
    primeCache.set(n, true);
    return true;
}

console.log("Memoization examples:");
console.log("Fibonacci(10):", memoizedFibonacci(10));// => 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 = 55
console.log("Fibonacci(20):", memoizedFibonacci(20));// => 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610 + 987 + 1597 + 2584 + 4181 + 6765 = 10946
console.log("isPrime(17):", isPrimeMemoized(17));
console.log("isPrime(25):", isPrimeMemoized(25));

// 8. Number Formatting Optimization
console.log("\n📚 8. Number Formatting Optimization");
console.log("----------------------------------");

// Fast number formatting
function fastFormatNumber(num, decimals = 2) {
    if (typeof num !== 'number' || isNaN(num)) return '0.00';
    
    // Use bit shifting for powers of 10
    let multiplier = 1;
    for (let i = 0; i < decimals; i++) {
        multiplier *= 10;
    }
    
    return (Math.round(num * multiplier) / multiplier).toFixed(decimals);
}

// Fast currency formatting
function fastFormatCurrency(amount, currency = 'USD') {
    if (typeof amount !== 'number' || isNaN(amount)) return '$0.00';
    
    let formatted = fastFormatNumber(amount, 2);
    
    switch (currency) {
        case 'USD':
            return '$' + formatted;
        case 'EUR':
            return '€' + formatted;
        case 'GBP':
            return '£' + formatted;
        default:
            return currency + ' ' + formatted;
    }
}

// Fast percentage formatting
function fastFormatPercentage(value, decimals = 1) {
    if (typeof value !== 'number' || isNaN(value)) return '0.0%';
    
    let percentage = value * 100;
    return fastFormatNumber(percentage, decimals) + '%';
}

console.log("Fast formatting examples:");
console.log("fastFormatNumber(123.456789, 2):", fastFormatNumber(123.456789, 2));
console.log("fastFormatCurrency(1234.56):", fastFormatCurrency(1234.56));
console.log("fastFormatPercentage(0.15):", fastFormatPercentage(0.15));

// 9. Error Handling Optimization
console.log("\n📚 9. Error Handling Optimization");
console.log("--------------------------------");

// Fast error handling for number operations
function safeNumberOperation(operation, defaultValue = 0) {
    try {
        let result = operation();
        return isFinite(result) ? result : defaultValue;
    } catch (error) {
        return defaultValue;
    }
}

// Optimized number validation with early returns
function validateNumberFast(value) {
    // Early return for non-numbers
    if (typeof value !== 'number') return false;
    
    // Early return for NaN
    if (isNaN(value)) return false;
    
    // Early return for infinite numbers
    if (!isFinite(value)) return false;
    
    return true;
}

// Test error handling
console.log("Error handling optimization:");
let errorTests = [42, "hello", NaN, Infinity, null, undefined];

errorTests.forEach(test => {
    let result = safeNumberOperation(() => test * 2, -1);
    let isValid = validateNumberFast(test);
    console.log(`${test}: safeOperation=${result}, isValid=${isValid}`);
});

// 10. Practical Example: Optimized Number Utilities
console.log("\n📚 10. Practical Example: Optimized Number Utilities");
console.log("--------------------------------------------------");

class OptimizedNumberUtils {
    constructor() {
        this.cache = new Map();
        this.stats = {
            cacheHits: 0,
            cacheMisses: 0,
            operations: 0
        };
    }
    
    // Cached mathematical operations
    cachedOperation(key, operation) {
        if (this.cache.has(key)) {
            this.stats.cacheHits++;
            return this.cache.get(key);
        }
        
        let result = operation();
        this.cache.set(key, result);
        this.stats.cacheMisses++;
        return result;
    }
    
    // Fast number validation
    isValidNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }
    
    // Fast number formatting
    formatNumber(num, decimals = 2) {
        if (!this.isValidNumber(num)) return '0.00';
        
        let key = `format_${num}_${decimals}`;
        return this.cachedOperation(key, () => {
            let multiplier = Math.pow(10, decimals);
            return (Math.round(num * multiplier) / multiplier).toFixed(decimals);
        });
    }
    
    // Fast array operations
    arraySum(numbers) {
        if (!Array.isArray(numbers)) return 0;
        
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (this.isValidNumber(numbers[i])) {
                sum += numbers[i];
            }
        }
        return sum;
    }
    
    // Fast statistical calculations
    arrayStats(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) {
            return { count: 0, sum: 0, mean: 0, min: 0, max: 0 };
        }
        
        let validNumbers = numbers.filter(n => this.isValidNumber(n));
        if (validNumbers.length === 0) {
            return { count: 0, sum: 0, mean: 0, min: 0, max: 0 };
        }
        
        let sum = this.arraySum(validNumbers);
        let count = validNumbers.length;
        let mean = sum / count;
        
        let min = validNumbers[0];
        let max = validNumbers[0];
        
        for (let i = 1; i < validNumbers.length; i++) {
            if (validNumbers[i] < min) min = validNumbers[i];
            if (validNumbers[i] > max) max = validNumbers[i];
        }
        
        return { count, sum, mean, min, max };
    }
    
    // Get cache statistics
    getCacheStats() {
        return {
            ...this.stats,
            cacheSize: this.cache.size,
            hitRate: this.stats.cacheHits / (this.stats.cacheHits + this.stats.cacheMisses)
        };
    }
    
    // Clear cache
    clearCache() {
        this.cache.clear();
        this.stats = { cacheHits: 0, cacheMisses: 0, operations: 0 };
    }
}

// Test optimized number utils
let numUtils = new OptimizedNumberUtils();

console.log("Optimized number utilities:");
console.log("isValidNumber(42):", numUtils.isValidNumber(42));
console.log("isValidNumber('hello'):", numUtils.isValidNumber('hello'));
console.log("formatNumber(123.456789, 2):", numUtils.formatNumber(123.456789, 2));

let testNumbers = [1, 2, 3, 4, 5, 'hello', 6, 7, NaN, 8];
console.log("arraySum:", numUtils.arraySum(testNumbers));
console.log("arrayStats:", numUtils.arrayStats(testNumbers));

// Test caching
numUtils.formatNumber(123.456789, 2); // Cache miss
numUtils.formatNumber(123.456789, 2); // Cache hit
console.log("Cache stats:", numUtils.getCacheStats());

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use appropriate methods for different operations");
console.log("- Consider memory usage for large datasets");
console.log("- Handle floating point precision carefully");
console.log("- Validate numbers efficiently with early returns");
console.log("- Use caching for expensive calculations");
console.log("- Optimize array operations for better performance");
console.log("- Implement proper error handling for robustness");

console.log("\n📝 Practice Exercises:");
console.log("1. Benchmark different mathematical operations");
console.log("2. Implement memoization for expensive calculations");
console.log("3. Optimize number validation and formatting");
console.log("4. Create efficient array processing functions");
console.log("5. Build a high-performance number utility library");
