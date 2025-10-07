// Exercise 7: Array Optimization
// Complete the TODO sections below

console.log("💪 Exercise 7: Array Optimization");
console.log("================================");

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

// Test with large array
const largeArray = Array.from({length: 100000}, (_, i) => i + 1);

// TODO 2: Compare for loop vs forEach performance
console.log("\n1.2 Compare for loop vs forEach:");
let sum1 = 0;
measurePerformance("For loop", () => {
    for (let i = 0; i < largeArray.length; i++) {
        sum1 += largeArray[i];
    }
    return sum1;
});

let sum2 = 0;
measurePerformance("ForEach", () => {
    largeArray.forEach(num => {
        sum2 += num;
    });
    return sum2;
});

// Exercise 2: Memory Optimization
console.log("\n2. Memory Optimization:");

// TODO 3: Demonstrate array copying methods
console.log("\n2.1 Array copying methods:");
const originalArray = [1, 2, 3, 4, 5];

// Shallow copy using spread operator
let spreadCopy = [...originalArray]; // Your code here
console.log("Spread copy:", spreadCopy);

// Shallow copy using slice
let sliceCopy = originalArray.slice(); // Your code here
console.log("Slice copy:", sliceCopy);

// Deep copy for nested arrays
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let deepCopy = nestedArray.map(subArray => [...subArray]); // Your code here
console.log("Deep copy:", deepCopy);

// TODO 4: Demonstrate memory-efficient array creation
console.log("\n2.2 Memory-efficient array creation:");
// Pre-allocate array size
let preAllocated = new Array(1000); // Your code here
console.log("Pre-allocated array length:", preAllocated.length);

// Fill with values
for (let i = 0; i < preAllocated.length; i++) {
    preAllocated[i] = i * 2;
}
console.log("First 5 elements:", preAllocated.slice(0, 5));

// Exercise 3: Loop Optimization
console.log("\n3. Loop Optimization:");

const testArray = Array.from({length: 10000}, (_, i) => i + 1);

// TODO 5: Cache array length
console.log("\n3.1 Cache array length:");
let sum3 = 0;
const length = testArray.length; // Cache the length
for (let i = 0; i < length; i++) {
    sum3 += testArray[i];
}
console.log("Sum with cached length:", sum3);

// TODO 6: Use appropriate loop type
console.log("\n3.2 Use appropriate loop type:");
// For simple iteration, use for...of
let sum4 = 0;
for (const num of testArray) {
    sum4 += num;
}
console.log("Sum with for...of:", sum4);

// For index-based operations, use for loop
let doubledArray = [];
for (let i = 0; i < testArray.length; i++) {
    doubledArray[i] = testArray[i] * 2;
}
console.log("First 5 doubled elements:", doubledArray.slice(0, 5));

// Exercise 4: Array Method Optimization
console.log("\n4. Array Method Optimization:");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO 7: Use appropriate array methods
console.log("\n4.1 Use appropriate array methods:");
// For transformation, use map
let doubled = numbers.map(num => num * 2); // Your code here
console.log("Doubled:", doubled);

// For filtering, use filter
let evens = numbers.filter(num => num % 2 === 0); // Your code here
console.log("Even numbers:", evens);

// For aggregation, use reduce
let sum = numbers.reduce((acc, num) => acc + num, 0); // Your code here
console.log("Sum:", sum);

// TODO 8: Avoid unnecessary method chaining
console.log("\n4.2 Avoid unnecessary chaining:");
// Inefficient: multiple passes
let inefficient = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .filter(num => num > 5);

// Efficient: single pass
let efficient = numbers.reduce((result, num) => {
    if (num % 2 === 0) {
        let doubled = num * 2;
        if (doubled > 5) {
            result.push(doubled);
        }
    }
    return result;
}, []);

console.log("Inefficient result:", inefficient);
console.log("Efficient result:", efficient);

// Exercise 5: Memory Management
console.log("\n5. Memory Management:");

// TODO 9: Demonstrate array clearing
console.log("\n5.1 Array clearing methods:");
let arrayToClear = [1, 2, 3, 4, 5];
console.log("Original array:", arrayToClear);

// Method 1: Set length to 0
arrayToClear.length = 0; // Your code here
console.log("After setting length to 0:", arrayToClear);

// Method 2: Use splice
let arrayToClear2 = [1, 2, 3, 4, 5];
arrayToClear2.splice(0); // Your code here
console.log("After splice(0):", arrayToClear2);

// Method 3: Reassign to empty array
let arrayToClear3 = [1, 2, 3, 4, 5];
arrayToClear3 = []; // Your code here
console.log("After reassignment:", arrayToClear3);

// TODO 10: Demonstrate garbage collection
console.log("\n5.2 Garbage collection:");
function createLargeArray() {
    return Array.from({length: 1000000}, (_, i) => i);
}

// Create and immediately discard
let tempArray = createLargeArray();
tempArray = null; // Help garbage collector
console.log("Large array created and discarded");

// Exercise 6: Algorithm Optimization
console.log("\n6. Algorithm Optimization:");

const unsortedArray = [64, 34, 25, 12, 22, 11, 90, 5, 77, 30];

// TODO 11: Optimize search algorithms
console.log("\n6.1 Optimize search algorithms:");
// Linear search (O(n))
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Binary search (O(log n)) - requires sorted array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let sortedArray = [...unsortedArray].sort((a, b) => a - b);
let target = 25;

console.log("Linear search result:", linearSearch(sortedArray, target));
console.log("Binary search result:", binarySearch(sortedArray, target));

// TODO 12: Optimize sorting algorithms
console.log("\n6.2 Optimize sorting algorithms:");
// Quick sort implementation
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

let quickSorted = quickSort([...unsortedArray]);
console.log("Quick sorted:", quickSorted);

// Exercise 7: Data Structure Optimization
console.log("\n7. Data Structure Optimization:");

// TODO 13: Use appropriate data structures
console.log("\n7.1 Use appropriate data structures:");
// For frequent lookups, use Set
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log("Unique numbers (Set):", Array.from(uniqueNumbers));

// For key-value pairs, use Map
let numberMap = new Map();
numberMap.set("one", 1);
numberMap.set("two", 2);
numberMap.set("three", 3);
console.log("Number map:", numberMap);

// TODO 14: Optimize array operations
console.log("\n7.2 Optimize array operations:");
// Use Set for deduplication
let duplicateArray = [1, 2, 2, 3, 3, 4, 5, 5];
let uniqueArray = [...new Set(duplicateArray)]; // Your code here
console.log("Deduplicated array:", uniqueArray);

// Use Map for counting
let countMap = new Map();
duplicateArray.forEach(num => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
});
console.log("Count map:", countMap);

// Exercise 8: Modern JavaScript Optimization
console.log("\n8. Modern JavaScript Optimization:");

// TODO 15: Use modern array methods
console.log("\n8.1 Use modern array methods:");
const data = [
    {id: 1, name: "Alice", age: 25, active: true},
    {id: 2, name: "Bob", age: 30, active: false},
    {id: 3, name: "Charlie", age: 35, active: true},
    {id: 4, name: "Diana", age: 28, active: true}
];

// Use flatMap for flattening and mapping
let activeNames = data.flatMap(person => person.active ? [person.name] : []);
console.log("Active names:", activeNames);

// Use Object.groupBy (ES2024) or polyfill
let groupedByActive = data.reduce((groups, person) => {
    const key = person.active ? 'active' : 'inactive';
    if (!groups[key]) groups[key] = [];
    groups[key].push(person);
    return groups;
}, {});
console.log("Grouped by active status:", groupedByActive);

// TODO 16: Use typed arrays for performance
console.log("\n8.2 Use typed arrays for performance:");
// For numeric data, use typed arrays
let typedArray = new Int32Array(1000);
for (let i = 0; i < typedArray.length; i++) {
    typedArray[i] = i * 2;
}
console.log("Typed array first 5 elements:", Array.from(typedArray.slice(0, 5)));

// Exercise 9: Lazy Evaluation
console.log("\n9. Lazy Evaluation:");

// TODO 17: Implement lazy evaluation
console.log("\n9.1 Implement lazy evaluation:");
function* generateNumbers(max) {
    for (let i = 0; i < max; i++) {
        yield i * 2;
    }
}

let generator = generateNumbers(10);
let firstFive = [];
for (let i = 0; i < 5; i++) {
    firstFive.push(generator.next().value);
}
console.log("First 5 generated numbers:", firstFive);

// TODO 18: Use lazy filtering
console.log("\n9.2 Use lazy filtering:");
function* filterGenerator(iterable, predicate) {
    for (const item of iterable) {
        if (predicate(item)) {
            yield item;
        }
    }
}

let evenGenerator = filterGenerator(generateNumbers(20), num => num % 4 === 0);
let firstThreeEvens = [];
for (let i = 0; i < 3; i++) {
    firstThreeEvens.push(evenGenerator.next().value);
}
console.log("First 3 even numbers:", firstThreeEvens);

// Exercise 10: Performance Best Practices
console.log("\n10. Performance Best Practices:");

// TODO 19: Demonstrate best practices
console.log("\n10.1 Best practices demonstration:");

// 1. Pre-allocate arrays when size is known
let preAllocatedArray = new Array(1000);
for (let i = 0; i < preAllocatedArray.length; i++) {
    preAllocatedArray[i] = i;
}

// 2. Use for loops for performance-critical code
let sum5 = 0;
for (let i = 0; i < preAllocatedArray.length; i++) {
    sum5 += preAllocatedArray[i];
}

// 3. Avoid creating objects in loops
let result = [];
for (let i = 0; i < 100; i++) {
    result.push(i * 2); // Better than creating objects
}

// 4. Use const when possible
const immutableArray = [1, 2, 3, 4, 5];

// 5. Use appropriate data structures
const lookupSet = new Set([1, 2, 3, 4, 5]);
let hasValue = lookupSet.has(3);
console.log("Has value 3:", hasValue);

console.log("\n🎉 Congratulations! You've completed Exercise 7: Array Optimization!");
console.log("You now understand how to optimize array operations for better performance!");
