console.log("Exercise 7: String Optimization");
// Exercise 1: String Concatenation Optimization
console.log("\n1. String Concatenation Optimization:");

function optimizeConcatenation(strings) {
    return strings.join('');
}
let stringArray = ["Hello", " ", "World", "!", " How", " are", " you?"];
console.log("String array:", stringArray);
console.log("Optimized concatenation:", optimizeConcatenation(stringArray));

// Exercise 2: String Building with StringBuilder
console.log("\n2. String Building with StringBuilder:");

class StringBuilder {
    constructor() {
        this.parts = [];
    }
    append(str) {
        this.parts.push(str);
    }
    toString() {
        return this.parts.join('');
    }
    clear() {
        this.parts = [];
    }
    length() {
        return this.toString().length;
    }
}
let sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.append("!");
console.log("StringBuilder result:", sb.toString());
console.log("Length:", sb.length());

// Exercise 3: String Caching and Memoization
console.log("\n3. String Caching and Memoization:");

function createStringCache(processor, maxSize = 100) {
    const cache = new Map();
    return (str) => {
        if (cache.has(str)) {
            return cache.get(str);
        }
        const result = processor(str);
        cache.set(str, result);
        if (cache.size > maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        return result;
    };
}
let expensiveProcessor = (str) => {
    console.log(`Processing: ${str}`);
    return str.split('').reverse().join('').toUpperCase();
};
let cachedProcessor = createStringCache(expensiveProcessor, 5);
console.log("First call:", cachedProcessor("hello"));
console.log("Second call (cached):", cachedProcessor("hello"));
console.log("Third call (cached):", cachedProcessor("hello"));

// Exercise 4: String Pooling and Deduplication
console.log("\n4. String Pooling and Deduplication:");

function deduplicateStrings(strings) {
    const seen = new Set();
    return strings.filter((str) => {
        if (!seen.has(str)) {
            seen.add(str);
            return true;
        }
        return false;
    });
}
let duplicateStrings = ["apple", "banana", "apple", "cherry", "banana", "date"];
console.log("Original strings:", duplicateStrings);
console.log("Deduplicated strings:", deduplicateStrings(duplicateStrings));

// Exercise 5: String Compression Simulation
console.log("\n5. String Compression Simulation:");

function compressString(str) {
    return str.replace(/(.)\1+/g, (match, char) => `${char}${match.length}`);
}

function decompressString(compressedStr) {
    return compressedStr.replace(/(.)(\d+)/g, (match, char, count) => char.repeat(Number(count)));
}
let originalString = "aaabbbcccdddeeefff";
let compressed = compressString(originalString);
let decompressed = decompressString(compressed);
console.log("Original:", originalString);
console.log("Compressed:", compressed);
console.log("Decompressed:", decompressed);

// Exercise 6: String Slicing Optimization
console.log("\n6. String Slicing Optimization:");

function optimizeSlicing(str, operations) {
    return operations.map(op => str.slice(op.start, op.end)).join(' ');
}
let testString = "The quick brown fox jumps over the lazy dog";
let sliceOperations = [
    { start: 4, end: 9 },
    { start: 10, end: 15 },
    { start: 16, end: 19 }
];
console.log("Original string:", testString);
console.log("Slice operations:", sliceOperations);
console.log("Optimized result:", optimizeSlicing(testString, sliceOperations));

// Exercise 7: String Search Optimization
console.log("\n7. String Search Optimization:");

function optimizeSearch(str, searchTerms) {
    const results = {};
    searchTerms.forEach(term => {
        results[term] = str.includes(term);
    });
    return results;
}
let searchText = "The quick brown fox jumps over the lazy dog";
let searchTerms = ["fox", "dog", "cat", "quick"];
console.log("Search text:", searchText);
console.log("Search terms:", searchTerms);
console.log("Search results:", optimizeSearch(searchText, searchTerms));

// Exercise 8: String Memory Optimization
console.log("\n8. String Memory Optimization:");

function optimizeMemory(str) {
    return str.trim().replace(/\s+/g, ' ').normalize();
}
let memoryTestString = "   Hello   World   !   ";
console.log("Original string:", `"${memoryTestString}"`);
console.log("Memory optimized:", `"${optimizeMemory(memoryTestString)}"`);

// Exercise 9: String Performance Benchmarking
console.log("\n9. String Performance Benchmarking:");

function benchmarkStringOperations(str, operation) {
    const iterations = 100000;
    const start = performance.now();

    switch (operation) {
        case "concatenation":
            let result = "";
            for (let i = 0; i < 1000; i++) {
                result += str;
            }
            break;
        case "search":
            for (let i = 0; i < iterations; i++) {
                str.includes("fox");
            }
            break;
        case "replace":
            for (let i = 0; i < iterations; i++) {
                str.replace("fox", "dog");
            }
            break;
        default:
            break;
    }

    const end = performance.now();
    return `${operation} took ${(end - start).toFixed(2)} ms`;
}
let benchmarkString = "The quick brown fox jumps over the lazy dog";
console.log("Benchmarking string operations...");
console.log("Concatenation:", benchmarkStringOperations(benchmarkString, "concatenation"));
console.log("Search:", benchmarkStringOperations(benchmarkString, "search"));
console.log("Replace:", benchmarkStringOperations(benchmarkString, "replace"));