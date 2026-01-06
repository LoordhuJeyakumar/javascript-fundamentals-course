// Exercise 1: Number Creation
console.log("\n1. Create different types of numbers:");

let integerNumber = 42;
let decimalNumber = 3.14;
let negativeNumber = -15;
let scientificNumber = 1.23e4; 
console.log("Integer:", integerNumber);
console.log("Decimal:", decimalNumber);
console.log("Negative:", negativeNumber);
console.log("Scientific:", scientificNumber);

// Exercise 2: Number Properties
console.log("\n2. Explore number properties:");

let testNumber = 42.567;
let numberLength = testNumber.toString().length;
let isFiniteNumber = isFinite(testNumber);
let isInteger = Number.isInteger(testNumber);
console.log("Number:", testNumber);
console.log("Length:", numberLength);
console.log("Is finite:", isFiniteNumber);
console.log("Is integer:", isInteger);

// Exercise 3: Basic Arithmetic Operations
console.log("\n3. Perform basic arithmetic operations:");

let a = 10;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;
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
let equal1 = num1 === num2;
let equal2 = num1 === num3;
let lessThan = num1 < num2;
let greaterThan = num1 > num2;
console.log(`${num1} === ${num2}:`, equal1);
console.log(`${num1} === ${num3}:`, equal2);
console.log(`${num1} < ${num2}:`, lessThan);
console.log(`${num1} > ${num2}:`, greaterThan);

// Exercise 5: Number Conversion
console.log("\n5. Convert between numbers and strings:");

let numberString = "123.45";
let convertedNumber = Number(numberString);
let parsedInt = parseInt(numberString);
let parsedFloat = parseFloat(numberString);
let backToString = convertedNumber.toString();
console.log("Original string:", numberString);
console.log("Number():", convertedNumber);
console.log("parseInt():", parsedInt);
console.log("parseFloat():", parsedFloat);
console.log("Back to string:", backToString);

// Exercise 6: Number Validation
console.log("\n6. Validate numbers:");

let validationTests = [42, "hello", NaN, Infinity, null, undefined];

function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
console.log("Number validation:");
validationTests.forEach(test => {
    console.log(`${test}: ${isValidNumber(test)}`);
});

// Exercise 7: Number Formatting
console.log("\n7. Format numbers:");

let price = 1234.5678;
let formatted2 = price.toFixed(2);
let formatted4 = price.toFixed(4);
let formattedSig = price.toPrecision(3);
let formattedCurrency = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log("Original:", price);
console.log("2 decimals:", formatted2);
console.log("4 decimals:", formatted4);
console.log("3 significant:", formattedSig);
console.log("Currency:", formattedCurrency);

// Exercise 8: Mathematical Constants
console.log("\n8. Use mathematical constants:");

let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);
let circumference = 2 * Math.PI * radius;
let ePower2 = Math.pow(Math.E, 2);
console.log("Radius:", radius);
console.log("Circle area:", circleArea);
console.log("Circumference:", circumference);
console.log("e^2:", ePower2);

// Exercise 9: Number Rounding
console.log("\n9. Round numbers:");

let numbersToRound = [4.7, 4.3, 4.5, -4.7, -4.3];
let rounded = numbersToRound.map(n => Math.round(n));
let floored = numbersToRound.map(n => Math.floor(n));
let ceiled = numbersToRound.map(n => Math.ceil(n));
console.log("Original:", numbersToRound);
console.log("Rounded:", rounded);
console.log("Floored:", floored);
console.log("Ceiled:", ceiled);

// Exercise 10: Number Calculator
console.log("\n10. Create a simple calculator:");

function calculator(num1, num2, operation) {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : NaN;
        case '%': return num1 % num2;
        case '**': return num1 ** num2;
        default: return 'Invalid operation';
    }
}
console.log("Calculator tests:");
console.log("10 + 5 =", calculator(10, 5, '+'));
console.log("10 - 3 =", calculator(10, 3, '-'));
console.log("4 * 6 =", calculator(4, 6, '*'));
console.log("15 / 3 =", calculator(15, 3, '/'));
console.log("10 % 3 =", calculator(10, 3, '%'));
console.log("2 ** 3 =", calculator(2, 3, '**'));