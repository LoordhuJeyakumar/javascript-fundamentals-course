// Exercise 5: Loop Optimization
// Complete the TODO sections below

console.log("💪 Exercise 5: Loop Optimization");
console.log("===============================");

// Exercise 1: Cache Array Length
console.log("\n1. Cache Array Length:");
const largeArray = Array.from({length: 1000}, (_, i) => i + 1);

console.log("❌ Inefficient way (recalculates length each iteration):");
// TODO: Show inefficient loop that recalculates length
// Hint: Use for (let i = 0; i < largeArray.length; i++)
// Your code here

console.log("\n✅ Efficient way (cache the length):");
// TODO: Show efficient loop that caches the length
// Hint: const length = largeArray.length; then use length in condition
// Your code here

// Exercise 2: Use Appropriate Loop Type
console.log("\n2. Use Appropriate Loop Type:");

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

console.log("❌ Using for loop when for...of is better:");
// TODO: Show inefficient for loop for simple iteration
// Your code here

console.log("\n✅ Using for...of for simple iteration:");
// TODO: Show efficient for...of loop
// Your code here

console.log("\n❌ Using for...of when for loop is better:");
// TODO: Show inefficient for...of when you need index
// Your code here

console.log("\n✅ Using for loop when you need index:");
// TODO: Show efficient for loop when index is needed
// Your code here

// Exercise 3: Avoid Unnecessary Calculations
console.log("\n3. Avoid Unnecessary Calculations:");

console.log("❌ Inefficient (calculates Math.pow every iteration):");
// TODO: Show inefficient loop that calculates Math.pow(2, i) every time
// Hint: Use for loop with Math.pow(2, i) inside
// Your code here

console.log("\n✅ Efficient (calculate once and multiply):");
// TODO: Show efficient loop that calculates power incrementally
// Hint: Start with power = 1, then multiply by 2 each iteration
// Your code here

// Exercise 4: Use Array Methods When Appropriate
console.log("\n4. Use Array Methods When Appropriate:");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("❌ Using for loop for filtering:");
// TODO: Show inefficient for loop for filtering even numbers
// Your code here

console.log("\n✅ Using filter method:");
// TODO: Show efficient filter method
// Your code here

console.log("\n❌ Using for loop for mapping:");
// TODO: Show inefficient for loop for doubling numbers
// Your code here

console.log("\n✅ Using map method:");
// TODO: Show efficient map method
// Your code here

console.log("\n❌ Using for loop for reducing:");
// TODO: Show inefficient for loop for summing numbers
// Your code here

console.log("\n✅ Using reduce method:");
// TODO: Show efficient reduce method
// Your code here

// Exercise 5: Break Early When Possible
console.log("\n5. Break Early When Possible:");

const searchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;

console.log("❌ Inefficient (continues after finding target):");
// TODO: Show inefficient loop that continues after finding target
// Your code here

console.log("\n✅ Efficient (breaks when target found):");
// TODO: Show efficient loop that breaks when target is found
// Your code here

// Exercise 6: Avoid Nested Loops When Possible
console.log("\n6. Avoid Nested Loops When Possible:");

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("❌ Inefficient nested loops (O(n²)):");
// TODO: Show inefficient nested loops to find common elements
// Your code here

console.log("\n✅ Efficient using Set (O(n)):");
// TODO: Show efficient solution using Set
// Hint: Create Set from one array, then check if elements from other array exist in Set
// Your code here

// Exercise 7: Use Destructuring in Loops
console.log("\n7. Use Destructuring in Loops:");

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

console.log("❌ Inefficient (accessing properties repeatedly):");
// TODO: Show inefficient loop accessing person.name and person.age repeatedly
// Your code here

console.log("\n✅ Efficient (using destructuring):");
// TODO: Show efficient loop using destructuring
// Hint: Use for (const {name, age} of people)
// Your code here

// Exercise 8: Optimize String Concatenation
console.log("\n8. Optimize String Concatenation:");

const words = ["Hello", "World", "JavaScript", "Optimization"];

console.log("❌ Inefficient (string concatenation in loop):");
// TODO: Show inefficient string concatenation
// Hint: Use += in a loop
// Your code here

console.log("\n✅ Efficient (using join method):");
// TODO: Show efficient string joining
// Hint: Use words.join(" ")
// Your code here

// Exercise 9: Use const When Possible
console.log("\n9. Use const When Possible:");

console.log("❌ Using let when const is sufficient:");
// TODO: Show inefficient use of let in for...of loop
// Your code here

console.log("\n✅ Using const when variable doesn't change:");
// TODO: Show efficient use of const in for...of loop
// Your code here

// Exercise 10: Optimize Object Iteration
console.log("\n10. Optimize Object Iteration:");

const person = {
    name: "Alice",
    age: 25,
    city: "New York",
    occupation: "Developer"
};

console.log("❌ Inefficient (for...in with hasOwnProperty check):");
// TODO: Show inefficient for...in loop
// Your code here

console.log("\n✅ Efficient (using Object.entries):");
// TODO: Show efficient Object.entries loop
// Your code here

console.log("\n✅ Efficient (using Object.keys):");
// TODO: Show efficient Object.keys loop
// Your code here

// Exercise 11: Use Early Return in Functions
console.log("\n11. Use Early Return in Functions:");

function findFirstEven(numbers) {
    console.log("❌ Inefficient (nested if statements):");
    // TODO: Show inefficient nested if approach
    // Your code here
    
    console.log("\n✅ Efficient (early return):");
    // TODO: Show efficient early return approach
    // Your code here
}

findFirstEven([1, 3, 5, 2, 4, 6]);

// Exercise 12: Optimize Recursive Functions
console.log("\n12. Optimize Recursive Functions:");

console.log("❌ Inefficient recursive Fibonacci:");
// TODO: Show inefficient recursive Fibonacci (no memoization)
// Your code here

console.log("\n✅ Efficient recursive Fibonacci (with memoization):");
// TODO: Show efficient recursive Fibonacci with memoization
// Your code here

// Exercise 13: Use Modern JavaScript Features
console.log("\n13. Use Modern JavaScript Features:");

const data = [
    {id: 1, value: 10, active: true},
    {id: 2, value: 20, active: false},
    {id: 3, value: 30, active: true},
    {id: 4, value: 40, active: false}
];

console.log("❌ Old-style approach:");
// TODO: Show old-style approach with multiple loops
// Your code here

console.log("\n✅ Modern approach (method chaining):");
// TODO: Show modern approach with method chaining
// Hint: Use filter, map, reduce in chain
// Your code here

// Exercise 14: Optimize Async Operations
console.log("\n14. Optimize Async Operations:");

const urls = ["url1", "url2", "url3", "url4", "url5"];

console.log("❌ Inefficient (sequential async operations):");
// TODO: Show inefficient sequential async operations
// Hint: Use await in a for loop
// Your code here

console.log("\n✅ Efficient (parallel async operations):");
// TODO: Show efficient parallel async operations
// Hint: Use Promise.all with map
// Your code here

// Exercise 15: Performance Measurement
console.log("\n15. Performance Measurement:");

function measurePerformance(name, fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
}

console.log("Comparing performance of different approaches:");

// TODO: Create two functions - one inefficient, one efficient
// TODO: Measure their performance using measurePerformance
// Your code here

console.log("\n🎉 Congratulations! You've completed Exercise 5: Loop Optimization!");
console.log("You now understand how to write efficient, optimized loops!");
console.log("Remember: Always measure performance and choose the right tool for the job!");
