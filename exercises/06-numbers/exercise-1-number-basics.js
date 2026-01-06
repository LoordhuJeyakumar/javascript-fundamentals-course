// Exercise 1: Number Basics
// Complete the TODO sections below

console.log("💪 Exercise 1: Number Basics");
console.log("===========================");

// Exercise 1: Number Creation
console.log("\n1. Create different types of numbers:");
// TODO: Create an integer number
let integerNumber = 0; // Your code here
// Hint: Use a whole number like 42

// TODO: Create a decimal number
let decimalNumber = 0; // Your code here
// Hint: Use a number with decimal places like 3.14

// TODO: Create a negative number
let negativeNumber = 0; // Your code here
// Hint: Use a negative value like -15

// TODO: Create a number using scientific notation
let scientificNumber = 0; // Your code here
// Hint: Use format like 1.23e4

console.log("Integer:", integerNumber);
console.log("Decimal:", decimalNumber);
console.log("Negative:", negativeNumber);
console.log("Scientific:", scientificNumber);

// Exercise 2: Number Properties
console.log("\n2. Explore number properties:");
let testNumber = 42.567;

// TODO: Get the length property (hint: numbers don't have length, but you can convert to string)
let numberLength = 0; // Your code here
// Hint: Convert to string first, then get length

// TODO: Check if it's a finite number
let isFiniteNumber = false; // Your code here
// Hint: Use isFinite() function

// TODO: Check if it's an integer
let isInteger = false; // Your code here
// Hint: Use Number.isInteger() method

console.log("Number:", testNumber);
console.log("Length:", numberLength);
console.log("Is finite:", isFiniteNumber);
console.log("Is integer:", isInteger);

// Exercise 3: Basic Arithmetic Operations
console.log("\n3. Perform basic arithmetic operations:");
let a = 10;
let b = 3;

// TODO: Calculate addition
let sum = 0; // Your code here
// Hint: Use + operator

// TODO: Calculate subtraction
let difference = 0; // Your code here
// Hint: Use - operator

// TODO: Calculate multiplication
let product = 0; // Your code here
// Hint: Use * operator

// TODO: Calculate division
let quotient = 0; // Your code here
// Hint: Use / operator

// TODO: Calculate remainder (modulo)
let remainder = 0; // Your code here
// Hint: Use % operator

// TODO: Calculate exponentiation
let power = 0; // Your code here
// Hint: Use ** operator

console.log(`${a} + ${b} =`, sum);
console.log(`${a} - ${b} =`, difference);
console.log(`${a} * ${b} =`, product);
console.log(`${a} / ${b} =`, quotient);
console.log(`${a} % ${b} =`, remainder);
console.log(`${a} ** ${b} =`, power);

// Exercise 4: Number Comparison
console.log("\n4. Compare numbers:");
let num1 = 5;
let num2 = 10;
let num3 = 5;

// TODO: Check if num1 equals num2
let equal1 = false; // Your code here
// Hint: Use === operator

// TODO: Check if num1 equals num3
let equal2 = false; // Your code here
// Hint: Use === operator

// TODO: Check if num1 is less than num2
let lessThan = false; // Your code here
// Hint: Use < operator

// TODO: Check if num1 is greater than num2
let greaterThan = false; // Your code here
// Hint: Use > operator

console.log(`${num1} === ${num2}:`, equal1);
console.log(`${num1} === ${num3}:`, equal2);
console.log(`${num1} < ${num2}:`, lessThan);
console.log(`${num1} > ${num2}:`, greaterThan);

// Exercise 5: Number Conversion
console.log("\n5. Convert between numbers and strings:");
let numberString = "123.45";

// TODO: Convert string to number using Number()
let convertedNumber = 0; // Your code here
// Hint: Use Number() constructor

// TODO: Convert string to integer using parseInt()
let parsedInt = 0; // Your code here
// Hint: Use parseInt() function

// TODO: Convert string to float using parseFloat()
let parsedFloat = 0; // Your code here
// Hint: Use parseFloat() function

// TODO: Convert number back to string
let backToString = ""; // Your code here
// Hint: Use toString() method

console.log("Original string:", numberString);
console.log("Number():", convertedNumber);
console.log("parseInt():", parsedInt);
console.log("parseFloat():", parsedFloat);
console.log("Back to string:", backToString);

// Exercise 6: Number Validation
console.log("\n6. Validate numbers:");
let validationTests = [42, "hello", NaN, Infinity, null, undefined];

// TODO: Create a function to validate if a value is a valid number
function isValidNumber(value) {
    // Your code here
    // Hint: Check type, isNaN, and isFinite
    return false;
}

console.log("Number validation:");
validationTests.forEach(test => {
    console.log(`${test}: ${isValidNumber(test)}`);
});

// Exercise 7: Number Formatting
console.log("\n7. Format numbers:");
let price = 1234.5678;

// TODO: Format to 2 decimal places
let formatted2 = ""; // Your code here
// Hint: Use toFixed(2)

// TODO: Format to 4 decimal places
let formatted4 = ""; // Your code here
// Hint: Use toFixed(4)

// TODO: Format with 3 significant digits
let formattedSig = ""; // Your code here
// Hint: Use toPrecision(3)

// TODO: Format as currency (USD)
let formattedCurrency = ""; // Your code here
// Hint: Use toLocaleString with currency options

console.log("Original:", price);
console.log("2 decimals:", formatted2);
console.log("4 decimals:", formatted4);
console.log("3 significant:", formattedSig);
console.log("Currency:", formattedCurrency);

// Exercise 8: Mathematical Constants
console.log("\n8. Use mathematical constants:");
// TODO: Calculate the area of a circle with radius 5
let radius = 5;
let circleArea = 0; // Your code here
// Hint: Use Math.PI and Math.pow()

// TODO: Calculate the circumference of a circle with radius 5
let circumference = 0; // Your code here
// Hint: Use Math.PI and 2 * Math.PI * radius

// TODO: Calculate e raised to the power of 2
let ePower2 = 0; // Your code here
// Hint: Use Math.E and Math.pow()

console.log("Radius:", radius);
console.log("Circle area:", circleArea);
console.log("Circumference:", circumference);
console.log("e^2:", ePower2);

// Exercise 9: Number Rounding
console.log("\n9. Round numbers:");
let numbersToRound = [4.7, 4.3, 4.5, -4.7, -4.3];

// TODO: Round each number using Math.round()
let rounded = []; // Your code here
// Hint: Use map() with Math.round()

// TODO: Floor each number using Math.floor()
let floored = []; // Your code here
// Hint: Use map() with Math.floor()

// TODO: Ceil each number using Math.ceil()
let ceiled = []; // Your code here
// Hint: Use map() with Math.ceil()

console.log("Original:", numbersToRound);
console.log("Rounded:", rounded);
console.log("Floored:", floored);
console.log("Ceiled:", ceiled);

// Exercise 10: Number Calculator
console.log("\n10. Create a simple calculator:");
// TODO: Create a calculator function that takes two numbers and an operation
function calculator(num1, num2, operation) {
    // Your code here
    // Hint: Use switch statement or if-else
    // Support operations: '+', '-', '*', '/', '%', '**'
    return 0;
}

// Test the calculator
console.log("Calculator tests:");
console.log("10 + 5 =", calculator(10, 5, '+'));
console.log("10 - 3 =", calculator(10, 3, '-'));
console.log("4 * 6 =", calculator(4, 6, '*'));
console.log("15 / 3 =", calculator(15, 3, '/'));
console.log("10 % 3 =", calculator(10, 3, '%'));
console.log("2 ** 3 =", calculator(2, 3, '**'));

console.log("\n🎉 Exercise 1 Complete!");
console.log("=====================");
console.log("Great job! You've practiced basic number operations.");
console.log("Key concepts practiced:");
console.log("- Number creation and types");
console.log("- Basic arithmetic operations");
console.log("- Number comparison and validation");
console.log("- Number conversion and formatting");
console.log("- Mathematical constants and functions");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: Mathematical Operations");
console.log("4. Ask questions if you need help");
