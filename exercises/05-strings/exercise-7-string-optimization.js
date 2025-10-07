// Exercise 7: String Optimization
// Practice with string performance and optimization techniques

console.log("💪 Exercise 7: String Optimization");
console.log("=================================");

// Exercise 1: String concatenation optimization
console.log("\n1. String Concatenation Optimization:");
// TODO: Create a function called optimizeConcatenation that:
// - Takes an array of strings as parameter
// - Returns the concatenated string using the most efficient method
// - Compare different concatenation methods
// - Measure performance differences
// Hint: Use join() for arrays, template literals for variables

function optimizeConcatenation(strings) {
    // Your code here
}

// Test your function
let stringArray = ["Hello", " ", "World", "!", " How", " are", " you?"];
console.log("String array:", stringArray);
console.log("Optimized concatenation:", optimizeConcatenation(stringArray));

// Exercise 2: String building with StringBuilder
console.log("\n2. String Building with StringBuilder:");
// TODO: Create a StringBuilder class that:
// - Efficiently builds strings by avoiding repeated concatenation
// - Has methods: append(), toString(), clear(), length()
// - Uses an array internally to store parts
// - Joins only when toString() is called
// Hint: Use an array to store string parts

class StringBuilder {
    // Your code here
}

// Test your function
let sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.append("!");
console.log("StringBuilder result:", sb.toString());
console.log("Length:", sb.length());

// Exercise 3: String caching and memoization
console.log("\n3. String Caching and Memoization:");
// TODO: Create a function called createStringCache that:
// - Takes a function that processes strings as parameter
// - Returns a memoized version that caches results
// - Avoids recomputing expensive string operations
// - Handle cache size limits
// Hint: Use Map or object to store cached results

function createStringCache(processor, maxSize = 100) {
    // Your code here
}

// Test your function
let expensiveProcessor = (str) => {
    console.log(`Processing: ${str}`);
    return str.split('').reverse().join('').toUpperCase();
};

let cachedProcessor = createStringCache(expensiveProcessor, 5);
console.log("First call:", cachedProcessor("hello"));
console.log("Second call (cached):", cachedProcessor("hello"));
console.log("Third call (cached):", cachedProcessor("hello"));

// Exercise 4: String pooling and deduplication
console.log("\n4. String Pooling and Deduplication:");
// TODO: Create a function called deduplicateStrings that:
// - Takes an array of strings as parameter
// - Returns an array with duplicate strings removed
// - Use a Set or Map to track unique strings
// - Preserve original order
// Hint: Use Set for uniqueness, Array.from() for conversion

function deduplicateStrings(strings) {
    // Your code here
}

// Test your function
let duplicateStrings = ["apple", "banana", "apple", "cherry", "banana", "date"];
console.log("Original strings:", duplicateStrings);
console.log("Deduplicated strings:", deduplicateStrings(duplicateStrings));

// Exercise 5: String compression simulation
console.log("\n5. String Compression Simulation:");
// TODO: Create a function called compressString that:
// - Takes a string as parameter
// - Returns a compressed version using simple run-length encoding
// - Compress consecutive identical characters
// - Handle both compression and decompression
// Hint: Use regular expressions or loops to find consecutive characters

function compressString(str) {
    // Your code here
}

function decompressString(compressedStr) {
    // Your code here
}

// Test your function
let originalString = "aaabbbcccdddeeefff";
let compressed = compressString(originalString);
let decompressed = decompressString(compressed);
console.log("Original:", originalString);
console.log("Compressed:", compressed);
console.log("Decompressed:", decompressed);

// Exercise 6: String slicing optimization
console.log("\n6. String Slicing Optimization:");
// TODO: Create a function called optimizeSlicing that:
// - Takes a string and multiple slice operations as parameters
// - Returns the result of all slice operations
// - Optimize by combining adjacent slices
// - Avoid creating intermediate strings
// Hint: Use substring() or slice() efficiently

function optimizeSlicing(str, operations) {
    // Your code here
}

// Test your function
let testString = "The quick brown fox jumps over the lazy dog";
let sliceOperations = [
    { start: 4, end: 9 },   // "quick"
    { start: 10, end: 15 }, // "brown"
    { start: 16, end: 19 }  // "fox"
];
console.log("Original string:", testString);
console.log("Slice operations:", sliceOperations);
console.log("Optimized result:", optimizeSlicing(testString, sliceOperations));

// Exercise 7: String search optimization
console.log("\n7. String Search Optimization:");
// TODO: Create a function called optimizeSearch that:
// - Takes a string and search terms as parameters
// - Returns optimized search results
// - Use efficient search algorithms
// - Handle multiple search terms
// Hint: Use indexOf, includes, or regular expressions efficiently

function optimizeSearch(str, searchTerms) {
    // Your code here
}

// Test your function
let searchText = "The quick brown fox jumps over the lazy dog";
let searchTerms = ["fox", "dog", "cat", "quick"];
console.log("Search text:", searchText);
console.log("Search terms:", searchTerms);
console.log("Search results:", optimizeSearch(searchText, searchTerms));

// Exercise 8: String memory optimization
console.log("\n8. String Memory Optimization:");
// TODO: Create a function called optimizeMemory that:
// - Takes a string as parameter
// - Returns memory-optimized version
// - Remove unnecessary whitespace
// - Normalize string representation
// - Handle large strings efficiently
// Hint: Use trim(), normalize(), and efficient string methods

function optimizeMemory(str) {
    // Your code here
}

// Test your function
let memoryTestString = "   Hello   World   !   ";
console.log("Original string:", `"${memoryTestString}"`);
console.log("Memory optimized:", `"${optimizeMemory(memoryTestString)}"`);

// Exercise 9: String performance benchmarking
console.log("\n9. String Performance Benchmarking:");
// TODO: Create a function called benchmarkStringOperations that:
// - Takes a string and operation type as parameters
// - Measures performance of different string operations
// - Returns performance metrics
// - Compare different approaches
// Hint: Use performance.now() or Date.now() for timing

function benchmarkStringOperations(str, operation) {
    // Your code here
}

// Test your function
let benchmarkString = "The quick brown fox jumps over the lazy dog";
console.log("Benchmarking string operations...");
console.log("Concatenation:", benchmarkStringOperations(benchmarkString, "concatenation"));
console.log("Search:", benchmarkStringOperations(benchmarkString, "search"));
console.log("Replace:", benchmarkStringOperations(benchmarkString, "replace"));

console.log("\n🎉 Exercise 7 Complete!");
console.log("=====================");
console.log("Great job! You've practiced string optimization.");
console.log("Key concepts practiced:");
console.log("- String concatenation optimization");
console.log("- StringBuilder pattern");
console.log("- String caching and memoization");
console.log("- String pooling and deduplication");
console.log("- String compression techniques");
console.log("- String slicing optimization");
console.log("- String search optimization");
console.log("- String memory optimization");
console.log("- String performance benchmarking");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Strings assignments");
console.log("4. Ask questions if you need help");
