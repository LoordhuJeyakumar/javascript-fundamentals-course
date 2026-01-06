// Exercise 5: Statistical Calculations
// Practice with statistical functions and data analysis

console.log("💪 Exercise 5: Statistical Calculations");
console.log("=====================================");

// Exercise 1: Calculate mean (average)
console.log("\n1. Calculate Mean:");
// TODO: Create a function called calculateMean that:
// - Takes an array of numbers as parameter
// - Returns the arithmetic mean
// - Handle empty arrays and invalid inputs
// Hint: Sum all numbers and divide by count

function calculateMean(numbers) {
    // Your code here
}

// Test your function
let testScores = [85, 92, 78, 96, 88, 91, 87, 94, 89, 93];
let emptyArray = [];
let singleValue = [42];
console.log("Test scores:", testScores);
console.log("Mean score:", calculateMean(testScores));
console.log("Empty array mean:", calculateMean(emptyArray));
console.log("Single value mean:", calculateMean(singleValue));

// Exercise 2: Calculate median
console.log("\n2. Calculate Median:");
// TODO: Create a function called calculateMedian that:
// - Takes an array of numbers as parameter
// - Returns the median value
// - Handle both odd and even length arrays
// Hint: Sort array and find middle value(s)

function calculateMedian(numbers) {
    // Your code here
}

// Test your function
let oddLength = [1, 3, 5, 7, 9];
let evenLength = [1, 3, 5, 7, 9, 11];
let unsorted = [9, 1, 5, 3, 7];
console.log("Odd length array:", oddLength);
console.log("Median:", calculateMedian(oddLength));
console.log("Even length array:", evenLength);
console.log("Median:", calculateMedian(evenLength));
console.log("Unsorted array:", unsorted);
console.log("Median:", calculateMedian(unsorted));

// Exercise 3: Calculate mode
console.log("\n3. Calculate Mode:");
// TODO: Create a function called calculateMode that:
// - Takes an array of numbers as parameter
// - Returns the mode(s) - most frequent value(s)
// - Handle multiple modes and no mode
// Hint: Use an object to count frequencies

function calculateMode(numbers) {
    // Your code here
}

// Test your function
let withMode = [1, 2, 2, 3, 4, 2, 5];
let multipleModes = [1, 2, 2, 3, 3, 4];
let noMode = [1, 2, 3, 4, 5];
console.log("Array with mode:", withMode);
console.log("Mode:", calculateMode(withMode));
console.log("Array with multiple modes:", multipleModes);
console.log("Mode:", calculateMode(multipleModes));
console.log("Array with no mode:", noMode);
console.log("Mode:", calculateMode(noMode));

// Exercise 4: Calculate standard deviation
console.log("\n4. Calculate Standard Deviation:");
// TODO: Create a function called calculateStandardDeviation that:
// - Takes an array of numbers as parameter
// - Returns the standard deviation
// - Use population standard deviation formula
// Hint: Calculate variance first, then take square root

function calculateStandardDeviation(numbers) {
    // Your code here
}

// Test your function
let normalDistribution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let variedData = [1, 1, 1, 1, 1, 9, 9, 9, 9, 9];
console.log("Normal distribution:", normalDistribution);
console.log("Standard deviation:", calculateStandardDeviation(normalDistribution));
console.log("Varied data:", variedData);
console.log("Standard deviation:", calculateStandardDeviation(variedData));

// Exercise 5: Calculate variance
console.log("\n5. Calculate Variance:");
// TODO: Create a function called calculateVariance that:
// - Takes an array of numbers as parameter
// - Returns the variance
// - Support both population and sample variance
// Hint: Calculate mean, then sum of squared differences

function calculateVariance(numbers, isSample = false) {
    // Your code here
}

// Test your function
let varianceData = [2, 4, 4, 4, 5, 5, 7, 9];
console.log("Variance data:", varianceData);
console.log("Population variance:", calculateVariance(varianceData, false));
console.log("Sample variance:", calculateVariance(varianceData, true));

// Exercise 6: Calculate range
console.log("\n6. Calculate Range:");
// TODO: Create a function called calculateRange that:
// - Takes an array of numbers as parameter
// - Returns an object with min, max, and range
// - Handle edge cases
// Hint: Use Math.min and Math.max

function calculateRange(numbers) {
    // Your code here
}

// Test your function
let rangeData = [10, 5, 8, 3, 12, 7, 15, 1];
console.log("Range data:", rangeData);
console.log("Range:", calculateRange(rangeData));

// Exercise 7: Calculate quartiles
console.log("\n7. Calculate Quartiles:");
// TODO: Create a function called calculateQuartiles that:
// - Takes an array of numbers as parameter
// - Returns an object with Q1, Q2 (median), and Q3
// - Handle different array lengths
// Hint: Sort array and find positions

function calculateQuartiles(numbers) {
    // Your code here
}

// Test your function
let quartileData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Quartile data:", quartileData);
console.log("Quartiles:", calculateQuartiles(quartileData));

// Exercise 8: Calculate correlation coefficient
console.log("\n8. Calculate Correlation Coefficient:");
// TODO: Create a function called calculateCorrelation that:
// - Takes two arrays of numbers as parameters
// - Returns the Pearson correlation coefficient
// - Handle arrays of different lengths
// Hint: Use the Pearson correlation formula

function calculateCorrelation(x, y) {
    // Your code here
}

// Test your function
let xValues = [1, 2, 3, 4, 5];
let yValues = [2, 4, 6, 8, 10];
let negativeCorrelation = [1, 2, 3, 4, 5];
let yNegative = [10, 8, 6, 4, 2];
console.log("X values:", xValues);
console.log("Y values:", yValues);
console.log("Correlation:", calculateCorrelation(xValues, yValues));
console.log("Negative correlation Y:", yNegative);
console.log("Correlation:", calculateCorrelation(xValues, yNegative));

// Exercise 9: Calculate z-scores
console.log("\n9. Calculate Z-Scores:");
// TODO: Create a function called calculateZScores that:
// - Takes an array of numbers as parameter
// - Returns an array of z-scores
// - Z-score = (value - mean) / standard deviation
// Hint: Calculate mean and standard deviation first

function calculateZScores(numbers) {
    // Your code here
}

// Test your function
let zScoreData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Z-score data:", zScoreData);
console.log("Z-scores:", calculateZScores(zScoreData));

// Exercise 10: Generate statistical summary
console.log("\n10. Generate Statistical Summary:");
// TODO: Create a function called generateStatisticalSummary that:
// - Takes an array of numbers as parameter
// - Returns a comprehensive statistical summary
// - Include all major statistical measures
// Hint: Use all the functions you've created

function generateStatisticalSummary(numbers) {
    // Your code here
}

// Test your function
let summaryData = [85, 92, 78, 96, 88, 91, 87, 94, 89, 93, 82, 90, 86, 95, 84];
console.log("Summary data:", summaryData);
console.log("Statistical summary:", generateStatisticalSummary(summaryData));

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced statistical calculations.");
console.log("Key concepts practiced:");
console.log("- Mean (average) calculation");
console.log("- Median calculation");
console.log("- Mode calculation");
console.log("- Standard deviation");
console.log("- Variance calculation");
console.log("- Range calculation");
console.log("- Quartile calculation");
console.log("- Correlation coefficient");
console.log("- Z-score calculation");
console.log("- Statistical summary generation");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Financial Calculations");
console.log("4. Ask questions if you need help");
