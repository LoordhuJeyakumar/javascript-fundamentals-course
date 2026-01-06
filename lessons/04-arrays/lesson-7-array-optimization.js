// Lesson 7: Array Optimization and Best Practices
// This file teaches array performance and optimization techniques

console.log("📦 Welcome to Arrays Lesson 7: Array Optimization and Best Practices!");
console.log("===================================================================");

// 1. Performance Comparison: Different Array Methods
console.log("\n📚 1. Performance Comparison: Different Array Methods");
console.log("---------------------------------------------------");

let testArray = Array.from({length: 10000}, (_, i) => i);
console.log("Test array length:", testArray.length);

// Traditional for loop
console.time("Traditional for loop");
let sum1 = 0;
for (let i = 0; i < testArray.length; i++) {
    sum1 += testArray[i];
}
console.timeEnd("Traditional for loop");

// For...of loop
console.time("For...of loop");
let sum2 = 0;
for (let num of testArray) {
    sum2 += num;
}
console.timeEnd("For...of loop");

// forEach method
console.time("forEach method");
let sum3 = 0;
testArray.forEach(num => {
    sum3 += num;
});
console.timeEnd("forEach method");

// reduce method
console.time("reduce method");
let sum4 = testArray.reduce((total, num) => total + num, 0);
console.timeEnd("reduce method");

console.log("All sums are equal:", sum1 === sum2 && sum2 === sum3 && sum3 === sum4);

// 2. Memory-Efficient Array Operations
console.log("\n📚 2. Memory-Efficient Array Operations");
console.log("--------------------------------------");

// Inefficient: Creating new arrays unnecessarily
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Inefficient approach
let inefficientDoubled = numbers.map(num => num * 2);
console.log("Inefficient doubled:", inefficientDoubled);

// Efficient: Modify in place when possible
let efficientDoubled = [...numbers]; // Copy if you need to keep original
for (let i = 0; i < efficientDoubled.length; i++) {
    efficientDoubled[i] *= 2;
}
console.log("Efficient doubled:", efficientDoubled);

// 3. Avoiding Unnecessary Array Creation
console.log("\n📚 3. Avoiding Unnecessary Array Creation");
console.log("---------------------------------------");

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inefficient: Multiple array operations
let inefficient = data
    .filter(x => x % 2 === 0)
    .map(x => x * 2)
    .filter(x => x > 5);
console.log("Inefficient result:", inefficient);

// Efficient: Single pass
let efficient = [];
for (let x of data) {
    if (x % 2 === 0) {
        let doubled = x * 2;
        if (doubled > 5) {
            efficient.push(doubled);
        }
    }
}
console.log("Efficient result:", efficient);

// 4. Array Method Performance Tips
console.log("\n📚 4. Array Method Performance Tips");
console.log("----------------------------------");

let largeArray = Array.from({length: 1000}, (_, i) => i);

// Use appropriate methods for the task
console.time("map for transformation");
let transformed = largeArray.map(x => x * 2);
console.timeEnd("map for transformation");

console.time("filter for selection");
let filtered = largeArray.filter(x => x % 2 === 0);
console.timeEnd("filter for selection");

console.time("reduce for aggregation");
let reduced = largeArray.reduce((sum, x) => sum + x, 0);
console.timeEnd("reduce for aggregation");

// 5. Optimizing Array Iteration
console.log("\n📚 5. Optimizing Array Iteration");
console.log("-------------------------------");

let matrix = Array.from({length: 100}, () => Array.from({length: 100}, () => Math.random()));

// Row-wise access (faster)
console.time("Row-wise access");
let rowSum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        rowSum += matrix[i][j];
    }
}
console.timeEnd("Row-wise access");

// Column-wise access (slower)
console.time("Column-wise access");
let colSum = 0;
for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
        colSum += matrix[i][j];
    }
}
console.timeEnd("Column-wise access");

// 6. Array Size Optimization
console.log("\n📚 6. Array Size Optimization");
console.log("----------------------------");

// Pre-allocate array size when known
let knownSize = 1000;
let preAllocated = new Array(knownSize);
for (let i = 0; i < knownSize; i++) {
    preAllocated[i] = i * 2;
}
console.log("Pre-allocated array length:", preAllocated.length);

// vs dynamic allocation
let dynamic = [];
for (let i = 0; i < knownSize; i++) {
    dynamic.push(i * 2);
}
console.log("Dynamic array length:", dynamic.length);

// 7. Avoiding Common Performance Pitfalls
console.log("\n📚 7. Avoiding Common Performance Pitfalls");
console.log("---------------------------------------");

let testData = [1, 2, 3, 4, 5];

// Pitfall 1: Using indexOf in loops
console.time("indexOf in loop (inefficient)");
let indices = [];
for (let i = 0; i < testData.length; i++) {
    if (testData.indexOf(testData[i]) === i) {
        indices.push(i);
    }
}
console.timeEnd("indexOf in loop (inefficient)");

// Better: Use Set for uniqueness
console.time("Set for uniqueness (efficient)");
let seen = new Set();
let uniqueIndices = [];
for (let i = 0; i < testData.length; i++) {
    if (!seen.has(testData[i])) {
        seen.add(testData[i]);
        uniqueIndices.push(i);
    }
}
console.timeEnd("Set for uniqueness (efficient)");

// 8. Memory Management
console.log("\n📚 8. Memory Management");
console.log("----------------------");

// Clear large arrays when done
let largeData = new Array(1000000).fill(0);
console.log("Large array created, length:", largeData.length);

// Clear the array
largeData.length = 0; // Efficient way to clear
console.log("Array cleared, length:", largeData.length);

// Alternative: Set to empty array
largeData = [];
console.log("Array reassigned, length:", largeData.length);

// 9. Best Practices for Array Operations
console.log("\n📚 9. Best Practices for Array Operations");
console.log("---------------------------------------");

let students = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 87 },
    { name: "Charlie", grade: 92 }
];

// Good: Use appropriate method for the task
let highGrades = students.filter(student => student.grade >= 90);
console.log("High grades:", highGrades);

// Good: Chain methods efficiently
let topStudentNames = students
    .filter(student => student.grade >= 90)
    .map(student => student.name);
console.log("Top student names:", topStudentNames);

// Good: Use reduce for aggregation
let averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average grade:", averageGrade.toFixed(2));

// 10. Array Method Selection Guide
console.log("\n📚 10. Array Method Selection Guide");
console.log("----------------------------------");

let numbers2 = [1, 2, 3, 4, 5];

console.log("Method selection guide:");
console.log("- Use map() when you need to transform each element");
console.log("- Use filter() when you need to select elements");
console.log("- Use reduce() when you need to aggregate values");
console.log("- Use forEach() when you need side effects only");
console.log("- Use find() when you need the first matching element");
console.log("- Use some() when you need to check if any element matches");
console.log("- Use every() when you need to check if all elements match");

// Examples
let doubled = numbers2.map(x => x * 2);
let evens = numbers2.filter(x => x % 2 === 0);
let sum = numbers2.reduce((total, x) => total + x, 0);
let hasEven = numbers2.some(x => x % 2 === 0);
let allPositive = numbers2.every(x => x > 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);
console.log("Has even:", hasEven);
console.log("All positive:", allPositive);

// 11. Performance Testing Framework
console.log("\n📚 11. Performance Testing Framework");
console.log("-----------------------------------");

function performanceTest(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(4)}ms`);
    return result;
}

let testArray2 = Array.from({length: 10000}, (_, i) => i);

// Test different approaches
let result1 = performanceTest("Traditional loop", () => {
    let sum = 0;
    for (let i = 0; i < testArray2.length; i++) {
        sum += testArray2[i];
    }
    return sum;
});

let result2 = performanceTest("For...of loop", () => {
    let sum = 0;
    for (let num of testArray2) {
        sum += num;
    }
    return sum;
});

let result3 = performanceTest("Reduce method", () => {
    return testArray2.reduce((sum, num) => sum + num, 0);
});

console.log("Results are equal:", result1 === result2 && result2 === result3);

// 12. Real-World Optimization Example
console.log("\n📚 12. Real-World Optimization Example");
console.log("------------------------------------");

// Simulate processing large dataset
let salesData = Array.from({length: 10000}, (_, i) => ({
    id: i,
    amount: Math.random() * 1000,
    region: ['North', 'South', 'East', 'West'][i % 4],
    month: (i % 12) + 1
}));

console.log("Sales data length:", salesData.length);

// Optimized processing
function processSalesDataOptimized(data) {
    let totalSales = 0;
    let salesByRegion = {};
    let salesByMonth = {};
    
    // Single pass through data
    for (let sale of data) {
        totalSales += sale.amount;
        
        // Group by region
        if (!salesByRegion[sale.region]) {
            salesByRegion[sale.region] = 0;
        }
        salesByRegion[sale.region] += sale.amount;
        
        // Group by month
        if (!salesByMonth[sale.month]) {
            salesByMonth[sale.month] = 0;
        }
        salesByMonth[sale.month] += sale.amount;
    }
    
    return {
        totalSales,
        salesByRegion,
        salesByMonth,
        averageSale: totalSales / data.length
    };
}

let optimizedResult = performanceTest("Optimized processing", () => 
    processSalesDataOptimized(salesData)
);

console.log("Optimized result:", {
    totalSales: optimizedResult.totalSales.toFixed(2),
    averageSale: optimizedResult.averageSale.toFixed(2),
    regions: Object.keys(optimizedResult.salesByRegion).length,
    months: Object.keys(optimizedResult.salesByMonth).length
});

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Choose the right method for each task");
console.log("- Avoid unnecessary array creation and operations");
console.log("- Use single-pass algorithms when possible");
console.log("- Consider memory usage for large datasets");
console.log("- Test performance with real data sizes");
console.log("- Clear large arrays when no longer needed");
console.log("- Use appropriate iteration patterns");

console.log("\n📝 Practice Exercises:");
console.log("1. Compare performance of different array methods");
console.log("2. Optimize a slow array operation");
console.log("3. Implement memory-efficient array processing");
console.log("4. Choose appropriate methods for different tasks");
console.log("5. Test performance with large datasets");
