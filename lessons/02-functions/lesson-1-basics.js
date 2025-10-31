// Lesson 1: Functions - The Building Blocks
// This file contains code examples for the first functions lesson

console.log("🚀 Welcome to Functions Lesson 1!");
console.log("=====================================");

// 1. Basic Function Declaration
console.log("\n📚 1. Basic Function Declaration");
console.log("--------------------------------");

function greet() {
    console.log("Hello, World!");
}

// Calling the function
console.log("Calling greet():");
greet();

// 2. Functions with Parameters
console.log("\n📚 2. Functions with Parameters");
console.log("-------------------------------");

function greetPerson(name) {
    console.log(`Hello, ${name}!`);
}

// Calling with different arguments
console.log("Calling greetPerson('Alice'):");
greetPerson("Alice");

console.log("Calling greetPerson('Bob'):");
greetPerson("Bob");

// 3. Functions with Multiple Parameters
console.log("\n📚 3. Functions with Multiple Parameters");
console.log("----------------------------------------");

function greetPersonWithAge(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

console.log("Calling greetPersonWithAge('Charlie', 25):");
greetPersonWithAge("Charlie", 25);

// 4. Functions with Return Values
console.log("\n📚 4. Functions with Return Values");
console.log("----------------------------------");

function add(a, b) {
    return a + b;
}

// Using the return value
let result = add(5, 3);
console.log(`add(5, 3) = ${result}`);

// 5. More Return Value Examples
console.log("\n📚 5. More Return Value Examples");
console.log("--------------------------------");

function multiply(x, y) {
    return x * y;
    return x + y; // This line will never be reached
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(`multiply(4, 7) = ${multiply(4, 7)}`);
console.log(`isEven(8) = ${isEven(8)}`);
console.log(`isEven(7) = ${isEven(7)}`);

// 6. Function Scope
console.log("\n📚 6. Function Scope");
console.log("--------------------");

function calculateArea(length, width) {
    let area = length * width; // Local variable
    console.log(`Inside function: area = ${area}`);
    return area;
}

let length = 10;
let width = 5;
let area = calculateArea(length, width);
console.log(`Outside function: area = ${area}`);

// 7. Practical Example: Calculator
console.log("\n📚 7. Practical Example: Calculator");
console.log("-----------------------------------");

function calculator(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operation';
    }
}

console.log(`calculator('add', 10, 5) = ${calculator('add', 10, 5)}`);
console.log(`calculator('multiply', 4, 6) = ${calculator('multiply', 4, 6)}`);
console.log(`calculator('divide', 15, 3) = ${calculator('divide', 15, 3)}`);

// 8. String Processing Function
console.log("\n📚 8. String Processing Function");
console.log("--------------------------------");

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`.toUpperCase();
}

console.log(`formatName('john', 'doe') = ${formatName('john', 'doe')}`);

// 9. Array Processing Function
console.log("\n📚 9. Array Processing Function");
console.log("------------------------------");

function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

let numbers = [3, 7, 2, 9, 1, 5];
console.log(`findLargest([3, 7, 2, 9, 1, 5]) = ${findLargest(numbers)}`);

// 10. Function Composition
console.log("\n📚 10. Function Composition");
console.log("--------------------------");

function square(x) {
    return x * x;
}

function addOne(x) {
    return x + 1;
}

// Composing functions
let value = 5;
let result1 = square(value);
let result2 = addOne(result1);
console.log(`square(5) = ${result1}`);
console.log(`addOne(${result1}) = ${result2}`);

// Or in one line
let finalResult = addOne(square(5));
console.log(`addOne(square(5)) = ${finalResult}`);

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Functions are reusable code blocks");
console.log("- Parameters make functions flexible");
console.log("- Return values provide results");
console.log("- Function scope keeps variables local");
console.log("- Functions can be composed together");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a function that prints your name");
console.log("2. Create a function that adds two numbers");
console.log("3. Create a function that greets a person by name");
console.log("4. Create a function that calculates rectangle area");
console.log("5. Create a function that finds the smallest number in an array");
