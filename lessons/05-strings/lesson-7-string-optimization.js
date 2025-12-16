// Lesson 7: String Optimization and Best Practices
// This file teaches string performance and optimization techniques

console.log("📝 Welcome to Strings Lesson 7: String Optimization and Best Practices!");
console.log("=====================================================================");

// 1. String Performance Comparison
console.log("\n📚 1. String Performance Comparison");
console.log("-----------------------------------");

let testString = "Hello World";
let iterations = 100000;

// String concatenation methods
console.time("String concatenation (+)");
let result1 = "";
for (let i = 0; i < iterations; i++) {
    result1 += testString;
}
console.timeEnd("String concatenation (+)");

console.time("String concatenation (+=)");
let result2 = "";
for (let i = 0; i < iterations; i++) {
    result2 += testString;
}
console.timeEnd("String concatenation (+=)");

console.time("Array join()");
let array = [];
for (let i = 0; i < iterations; i++) {
    array.push(testString);
}
let result3 = array.join("");
console.timeEnd("Array join()");

console.time("Template literals");
let result4 = "";
for (let i = 0; i < iterations; i++) {
    result4 = `${result4}${testString}`;
}
console.timeEnd("Template literals");

// 2. Memory-Efficient String Operations
console.log("\n📚 2. Memory-Efficient String Operations");
console.log("---------------------------------------");

// Inefficient: Creating many temporary strings
function inefficientConcat(strings) {
    let result = "";
    for (let str of strings) {
        result += str + " "; // Creates new string each time
    }
    return result.trim();
}

// Efficient: Use array join
function efficientConcat(strings) {
    return strings.join(" ");
}

let testStrings = ["Hello", "World", "JavaScript", "Programming"];
console.log("Inefficient result:", inefficientConcat(testStrings));
console.log("Efficient result:", efficientConcat(testStrings));

// 3. String Immutability and Performance
console.log("\n📚 3. String Immutability and Performance");
console.log("---------------------------------------");

let originalString = "Hello World";
console.log("Original string:", originalString);

// Strings are immutable - operations create new strings
let upperString = originalString.toUpperCase();
let lowerString = originalString.toLowerCase();
let trimmedString = originalString.trim();

console.log("Upper:", upperString);
console.log("Lower:", lowerString);
console.log("Trimmed:", trimmedString);
console.log("Original unchanged:", originalString);

// 4. Avoiding Unnecessary String Operations
console.log("\n📚 4. Avoiding Unnecessary String Operations");
console.log("------------------------------------------");

// Bad: Multiple string operations
function badStringProcessing(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ")
        .replace(/[^a-z\s]/g, "")
        .trim();
}

// Good: Single pass processing
function goodStringProcessing(str) {
    let result = "";
    let inWord = false;
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (char === " ") {
            if (inWord) {
                result += " ";
                inWord = false;
            }
        } else if (/[a-z]/.test(char)) {
            result += char;
            inWord = true;
        }
    }
    
    return result.trim();
}

let testText = "  Hello   World   123  !  ";
console.log("Bad processing:", badStringProcessing(testText));
console.log("Good processing:", goodStringProcessing(testText));

// 5. String Caching and Memoization
console.log("\n📚 5. String Caching and Memoization");
console.log("----------------------------------");

// String processing with caching
class StringProcessor {
    constructor() {
        this.cache = new Map();
    }
    
    processString(str) {
        if (this.cache.has(str)) {
            console.log("Cache hit for:", str);
            return this.cache.get(str);
        }
        
        let result = str
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
        
        this.cache.set(str, result);
        return result;
    }
    
    clearCache() {
        this.cache.clear();
    }
}

let processor = new StringProcessor();
let testInputs = ["Hello World", "JavaScript Programming", "Hello World"]; // Duplicate

testInputs.forEach(input => {
    let result = processor.processString(input);
    console.log(`"${input}" -> "${result}"`);
});

// 6. String Builder Pattern
console.log("\n📚 6. String Builder Pattern");
console.log("---------------------------");

class StringBuilder {
    constructor() {
        this.parts = [];
    }
    
    add(str) {
        this.parts.push(str);
        return this;
    }
    
    prepend(str) {
        this.parts.unshift(str);
        return this;
    }
    
    insert(index, str) {
        this.parts.splice(index, 0, str);
        return this;
    }
    
    toString() {
        return this.parts.join("");
    }
    
    clear() {
        this.parts = [];
        return this;
    }
}

// Usage example
let builder = new StringBuilder();
let html = builder
    .add("<div>")
    .add("Hello ")
    .add("World")
    .add("</div>")
    .toString();

console.log("StringBuilder result:", html);

// 7. String Comparison Optimization
console.log("\n📚 7. String Comparison Optimization");
console.log("-----------------------------------");

// Efficient string comparison
function efficientCompare(str1, str2) {
    // Quick length check
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Character-by-character comparison
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    
    return true;
}

// Case-insensitive comparison
function caseInsensitiveCompare(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
            return false;
        }
    }
    
    return true;
}

let str1 = "Hello World";
let str2 = "Hello World";
let str3 = "hello world";

console.log("Efficient compare:", efficientCompare(str1, str2));
console.log("Case insensitive compare:", caseInsensitiveCompare(str1, str3));

// 8. Regular Expression Optimization
console.log("\n📚 8. Regular Expression Optimization");
console.log("-----------------------------------");

// Compile regex once for better performance
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{3}-\d{3}-\d{4}$/;
const URL_REGEX = /^https?:\/\/.+/;

// Test multiple strings with compiled regex
let testEmails = ["user@example.com", "invalid-email", "test@domain.org"];
let testPhones = ["123-456-7890", "invalid-phone", "555-123-4567"];

console.time("Compiled regex test");
testEmails.forEach(email => EMAIL_REGEX.test(email));
testPhones.forEach(phone => PHONE_REGEX.test(phone));
console.timeEnd("Compiled regex test");

// 9. String Interpolation Optimization
console.log("\n📚 9. String Interpolation Optimization");
console.log("--------------------------------------");

let name = "John";
let age = 30;
let city = "New York";

// Template literal (generally faster)
console.time("Template literal");
for (let i = 0; i < 10000; i++) {
    let message = `Hello, my name is ${name}, I am ${age} years old, and I live in ${city}.`;
}
console.timeEnd("Template literal");

// String concatenation
console.time("String concatenation");
for (let i = 0; i < 10000; i++) {
    let message = "Hello, my name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
}
console.timeEnd("String concatenation");

// 10. String Splitting and Joining Optimization
console.log("\n📚 10. String Splitting and Joining Optimization");
console.log("-----------------------------------------------");

let csvData = "apple,banana,orange,grape,kiwi";
console.log("CSV data:", csvData);

// Efficient splitting
let fruits = csvData.split(",");
console.log("Split result:", fruits);

// Efficient joining
let joinedFruits = fruits.join(" | ");
console.log("Joined result:", joinedFruits);

// Avoid unnecessary splitting
function hasWord(text, word) {
    return text.split(" ").includes(word);
}

function hasWordEfficient(text, word) {
    return text.includes(word);
}

let testText2 = "The quick brown fox jumps over the lazy dog";
console.log("Has word (inefficient):", hasWord(testText2, "fox"));
console.log("Has word (efficient):", hasWordEfficient(testText2, "fox"));

// 11. String Trimming Optimization
console.log("\n📚 11. String Trimming Optimization");
console.log("----------------------------------");

// Custom trim function for better performance
function fastTrim(str) {
    let start = 0;
    let end = str.length - 1;
    
    // Trim start
    while (start < str.length && str[start] === " ") {
        start++;
    }
    
    // Trim end
    while (end >= start && str[end] === " ") {
        end--;
    }
    
    return str.substring(start, end + 1);
}

let testTrim = "   Hello World   ";
console.log("Original trim:", `"${testTrim.trim()}"`);
console.log("Fast trim:", `"${fastTrim(testTrim)}"`);

// 12. String Validation Optimization
console.log("\n📚 12. String Validation Optimization");
console.log("------------------------------------");

// Optimized validation function
function validateInput(input, rules) {
    // Quick length check first
    if (rules.minLength && input.length < rules.minLength) {
        return { isValid: false, error: "Too short" };
    }
    
    if (rules.maxLength && input.length > rules.maxLength) {
        return { isValid: false, error: "Too long" };
    }
    
    // Pattern validation
    if (rules.pattern && !rules.pattern.test(input)) {
        return { isValid: false, error: "Invalid format" };
    }
    
    return { isValid: true };
}

// Pre-compiled patterns
const PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{3}-\d{3}-\d{4}$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
};

let validationRules = {
    minLength: 3,
    maxLength: 50,
    pattern: PATTERNS.email
};

let testInput = "user@example.com";
let validation = validateInput(testInput, validationRules);
console.log("Validation result:", validation);

// 13. Memory Management for Strings
console.log("\n📚 13. Memory Management for Strings");
console.log("----------------------------------");

// Clear large string references
function processLargeText(text) {
    let result = text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
    
    // Clear reference to original text
    text = null;
    
    return result;
}

// Use string pooling for repeated values
class StringPool {
    constructor() {
        this.pool = new Map();
    }
    
    getString(str) {
        if (this.pool.has(str)) {
            return this.pool.get(str);
        }
        
        this.pool.set(str, str);
        return str;
    }
}

let pool = new StringPool();
let str1_pool = pool.getString("Hello");
let str2_pool = pool.getString("Hello"); // Same reference
console.log("String pooling:", str1_pool === str2_pool);

// 14. Best Practices Summary
console.log("\n📚 14. Best Practices Summary");
console.log("----------------------------");

console.log("String Optimization Best Practices:");
console.log("1. Use array join() for multiple concatenations");
console.log("2. Compile regular expressions once and reuse");
console.log("3. Avoid unnecessary string operations");
console.log("4. Use template literals for complex strings");
console.log("5. Cache expensive string operations");
console.log("6. Use StringBuilder for complex string building");
console.log("7. Optimize string comparisons");
console.log("8. Clear large string references when done");
console.log("9. Use string pooling for repeated values");
console.log("10. Profile and measure performance");

// 15. Performance Testing Framework
console.log("\n📚 15. Performance Testing Framework");
console.log("-----------------------------------");

function performanceTest(name, fn, iterations = 1000) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(4)}ms`);
}

// Test different string operations
let testString2 = "Hello World";

performanceTest("String concatenation", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
        result += testString2;
    }
});

performanceTest("Array join", () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(testString2);
    }
    array.join("");
});

performanceTest("Template literal", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
        result = `${result}${testString2}`;
    }
});

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- String concatenation with + can be slow for many operations");
console.log("- Use array join() for multiple concatenations");
console.log("- Compile regular expressions once and reuse them");
console.log("- Avoid unnecessary string operations and temporary strings");
console.log("- Use StringBuilder pattern for complex string building");
console.log("- Cache expensive string operations when possible");
console.log("- Profile and measure performance to identify bottlenecks");
console.log("- Clear large string references to help garbage collection");
console.log("- Use string pooling for repeated values");

console.log("\n📝 Practice Exercises:");
console.log("1. Optimize a slow string concatenation operation");
console.log("2. Create a StringBuilder class for complex string building");
console.log("3. Implement string caching for expensive operations");
console.log("4. Optimize a string validation function");
console.log("5. Measure and compare different string operations");
