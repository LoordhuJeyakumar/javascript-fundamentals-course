// Lesson 5: Loop Optimization and Best Practices
// This file teaches loop optimization and best practices

console.log("🔄 Welcome to Loops Lesson 5: Loop Optimization and Best Practices!");
console.log("=================================================================");

// 1. Loop Performance Comparison
console.log("\n📚 1. Loop Performance Comparison");
console.log("----------------------------------");

let testArray = Array.from({length: 1000}, (_, i) => i);

console.log("Testing different loop types with 1000 elements:");

// Traditional for loop
console.time("Traditional for loop");
let sum1 = 0;
for (let i = 0; i < testArray.length; i++) {
    sum1 += testArray[i];
}
console.timeEnd("Traditional for loop");
console.log(`Sum: ${sum1}`);

// For...of loop
console.time("For...of loop");
let sum2 = 0;
for (let num of testArray) {
    sum2 += num;
}
console.timeEnd("For...of loop");
console.log(`Sum: ${sum2}`);

// forEach method
console.time("forEach method");
let sum3 = 0;
testArray.forEach(num => {
    sum3 += num;
});
console.timeEnd("forEach method");
console.log(`Sum: ${sum3}`);

// 2. Optimizing Loop Conditions
console.log("\n📚 2. Optimizing Loop Conditions");
console.log("--------------------------------");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Inefficient - recalculating length:");
console.time("Inefficient loop");
let inefficientSum = 0;
for (let i = 0; i < numbers.length; i++) {
    inefficientSum += numbers[i];
}
console.timeEnd("Inefficient loop");

console.log("\nEfficient - storing length:");
console.time("Efficient loop");
let efficientSum = 0;
let length = numbers.length;
for (let i = 0; i < length; i++) {
    efficientSum += numbers[i];
}
console.timeEnd("Efficient loop");

// 3. Avoiding Unnecessary Work Inside Loops
console.log("\n📚 3. Avoiding Unnecessary Work Inside Loops");
console.log("------------------------------------------");

let students = [
    { name: "Alice", grade: 95, passed: true },
    { name: "Bob", grade: 78, passed: false },
    { name: "Charlie", grade: 92, passed: true },
    { name: "Diana", grade: 65, passed: false }
];

console.log("Inefficient - creating objects inside loop:");
let inefficientResults = [];
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let result = {
        name: student.name,
        status: student.passed ? "Passed" : "Failed",
        message: `Student ${student.name} ${student.passed ? "passed" : "failed"} with grade ${student.grade}`
    };
    inefficientResults.push(result);
}

console.log("Efficient - pre-calculating values:");
let efficientResults = [];
let statusMap = { true: "Passed", false: "Failed" };
let messageTemplate = (name, passed, grade) => `Student ${name} ${passed ? "passed" : "failed"} with grade ${grade}`;

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let result = {
        name: student.name,
        status: statusMap[student.passed],
        message: messageTemplate(student.name, student.passed, student.grade)
    };
    efficientResults.push(result);
}

console.log("Results:", efficientResults);

// 4. Using Appropriate Loop Types
console.log("\n📚 4. Using Appropriate Loop Types");
console.log("----------------------------------");

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("When to use different loop types:");

console.log("\n1. Traditional for loop - when you need index:");
for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) {
        console.log(`Even index ${i}: ${data[i]}`);
    }
}

console.log("\n2. For...of loop - when you only need values:");
for (let value of data) {
    if (value % 2 === 0) {
        console.log(`Even value: ${value}`);
    }
}

console.log("\n3. forEach - for side effects (not for transformation):");
data.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});

console.log("\n4. map - for transformation:");
let doubled = data.map(value => value * 2);
console.log("Doubled values:", doubled);

console.log("\n5. filter - for selection:");
let evens = data.filter(value => value % 2 === 0);
console.log("Even values:", evens);

// 5. Breaking Out of Loops Early
console.log("\n📚 5. Breaking Out of Loops Early");
console.log("--------------------------------");

let searchArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;

console.log("Finding target without optimization:");
let found = false;
let position = -1;
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
        found = true;
        position = i;
    }
}
console.log(`Found ${target} at position ${position}`);

console.log("\nFinding target with early break:");
let optimizedPosition = -1;
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
        optimizedPosition = i;
        break; // Exit early when found
    }
}
console.log(`Found ${target} at position ${optimizedPosition}`);

// 6. Loop Unrolling
console.log("\n📚 6. Loop Unrolling");
console.log("------------------");

let unrollArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Normal loop:");
let normalSum = 0;
for (let i = 0; i < unrollArray.length; i++) {
    normalSum += unrollArray[i];
}
console.log(`Sum: ${normalSum}`);

console.log("\nUnrolled loop (for small arrays):");
let unrolledSum = 0;
let i = 0;
while (i < unrollArray.length - 3) {
    unrolledSum += unrollArray[i] + unrollArray[i + 1] + unrollArray[i + 2] + unrollArray[i + 3];
    i += 4;
}
while (i < unrollArray.length) {
    unrolledSum += unrollArray[i];
    i++;
}
console.log(`Sum: ${unrolledSum}`);

// 7. Memory-Efficient Loops
console.log("\n📚 7. Memory-Efficient Loops");
console.log("----------------------------");

console.log("Avoiding memory leaks in loops:");

// Bad - creating new objects in each iteration
console.log("Inefficient - creating objects in loop:");
let inefficientObjects = [];
for (let i = 0; i < 5; i++) {
    let obj = {
        id: i,
        data: new Array(1000).fill(i),
        timestamp: new Date()
    };
    inefficientObjects.push(obj);
}

// Good - reusing objects
console.log("Efficient - reusing objects:");
let efficientObjects = [];
let reusableObj = { id: 0, data: [], timestamp: null };
for (let i = 0; i < 5; i++) {
    reusableObj.id = i;
    reusableObj.data = new Array(1000).fill(i);
    reusableObj.timestamp = new Date();
    efficientObjects.push({ ...reusableObj });
}

// 8. Best Practices Summary
console.log("\n📚 8. Best Practices Summary");
console.log("--------------------------");

console.log("Loop Best Practices:");
console.log("1. Use for...of for simple iteration");
console.log("2. Use traditional for when you need the index");
console.log("3. Use array methods (map, filter, reduce) for transformations");
console.log("4. Cache array length in loops");
console.log("5. Break out of loops early when possible");
console.log("6. Avoid unnecessary work inside loops");
console.log("7. Choose the right loop type for your use case");
console.log("8. Consider performance implications of nested loops");

// 9. Common Loop Anti-patterns
console.log("\n📚 9. Common Loop Anti-patterns");
console.log("-----------------------------");

console.log("Anti-patterns to avoid:");

console.log("\n1. Using for...in with arrays:");
let antiArray = [1, 2, 3, 4, 5];
console.log("Don't do this:");
for (let index in antiArray) {
    console.log(`Index: ${index}, Value: ${antiArray[index]}`);
}

console.log("\n2. Modifying array while iterating:");
let modifyArray = [1, 2, 3, 4, 5];
console.log("Don't modify array while iterating:");
console.log("Original array:", modifyArray);

console.log("\n3. Using loops for simple operations:");
let simpleArray = [1, 2, 3, 4, 5];
console.log("Don't use loop for simple sum:");
let manualSum = 0;
for (let i = 0; i < simpleArray.length; i++) {
    manualSum += simpleArray[i];
}
console.log("Manual sum:", manualSum);

console.log("Use reduce instead:");
let reduceSum = simpleArray.reduce((sum, num) => sum + num, 0);
console.log("Reduce sum:", reduceSum);

// 10. Performance Testing
console.log("\n📚 10. Performance Testing");
console.log("-------------------------");

function performanceTest() {
    const testData = Array.from({length: 10000}, (_, i) => i);
    
    console.log("Performance comparison with 10,000 elements:");
    
    // Test 1: Traditional for loop
    console.time("Traditional for");
    let sum1 = 0;
    for (let i = 0; i < testData.length; i++) {
        sum1 += testData[i];
    }
    console.timeEnd("Traditional for");
    
    // Test 2: For...of loop
    console.time("For...of");
    let sum2 = 0;
    for (let num of testData) {
        sum2 += num;
    }
    console.timeEnd("For...of");
    
    // Test 3: forEach
    console.time("forEach");
    let sum3 = 0;
    testData.forEach(num => sum3 += num);
    console.timeEnd("forEach");
    
    // Test 4: reduce
    console.time("reduce");
    let sum4 = testData.reduce((sum, num) => sum + num, 0);
    console.timeEnd("reduce");
    
    console.log("All sums should be equal:", sum1 === sum2 && sum2 === sum3 && sum3 === sum4);
}

performanceTest();

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Choose the right loop type for your use case");
console.log("- Optimize loop conditions and avoid unnecessary work");
console.log("- Use early breaks and efficient algorithms");
console.log("- Consider performance implications of nested loops");
console.log("- Follow best practices to write efficient code");

console.log("\n📝 Practice Exercises:");
console.log("1. Optimize a slow loop by caching the length");
console.log("2. Rewrite a nested loop to be more efficient");
console.log("3. Use appropriate array methods instead of loops");
console.log("4. Implement early exit in a search function");
console.log("5. Compare performance of different loop types");
