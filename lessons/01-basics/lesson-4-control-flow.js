// Lesson 4: Control Flow
// This file teaches JavaScript control flow statements

console.log("⚡ Welcome to JavaScript Basics Lesson 4: Control Flow!");
console.log("=====================================================");

// 1. Conditional Statements - if/else
console.log("\n📚 1. Conditional Statements - if/else");
console.log("------------------------------------");

console.log("if/else statements control program flow based on conditions:");

let age = 18;
let hasLicense = true;

// Basic if statement
if (age >= 18) {
    console.log("You are an adult");
}



// if/else statement
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}

// if/else if/else statement
if (age < 13) {
    console.log("You are a child");
} else if (age < 18) {
    console.log("You are a teenager");
} else if (age < 65) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}

// Nested if statements
if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license to drive");
    }
} else {
    console.log("You are too young to drive");
}

// 2. Switch Statement
console.log("\n📚 2. Switch Statement");
console.log("--------------------");

console.log("Switch statements provide multiple execution paths:");

let day = "Monday";
let dayNumber;

switch (day) {
    case "Monday":
        dayNumber = 1;
        break;
    case "Tuesday":
        dayNumber = 2;
        break;
    case "Wednesday":
        dayNumber = 3;
        break;
    case "Thursday":
        dayNumber = 4;
        break;
    case "Friday":
        dayNumber = 5;
        break;
    case "Saturday":
        dayNumber = 6;
        break;
    case "Sunday":
        dayNumber = 7;
        break;
    default:
        dayNumber = 0;
        console.log("Invalid day");
}

console.log(`${day} is day number ${dayNumber}`);

// Switch with fall-through
let month = "June";
let daysInMonth;

switch (month) {
    case "January": // arrayOfMonths.includes("January")
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        daysInMonth = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        daysInMonth = 30;
        break;
    case "February":
        daysInMonth = 28; // Simplified for leap year
        break;
    default:
        daysInMonth = 0;
}

console.log(`${month} has ${daysInMonth} days`);

// 3. For Loop
console.log("\n📚 3. For Loop");
console.log("-------------");

console.log("For loops repeat code a specific number of times:");

// Basic for loop
console.log("Basic for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

// For loop with array
let fruits = ["apple", "banana", "orange", "grape"];
console.log("For loop with array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// For loop with different step
console.log("For loop with step 2:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Even number: ${i}`);
}

// Reverse for loop
console.log("Reverse for loop:");
for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

// 4. While Loop
console.log("\n📚 4. While Loop");
console.log("---------------");

console.log("While loops repeat code while a condition is true:");

// Basic while loop
let count = 1;
console.log("Basic while loop:");
while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}

// While loop with condition
let number = 10;
console.log("While loop with condition:");
while (number > 0) {
    console.log(`Number: ${number}`);
    number -= 2;
}

// While loop with user input simulation
let attempts = 0;
let maxAttempts = 3;
let success = false;

console.log("While loop with attempts:");
while (attempts < maxAttempts && !success) {
    attempts++;
    console.log(`Attempt ${attempts}`);
    // Simulate success on third attempt
    if (attempts === 5) {
        success = true;
        console.log("Success!");
    }
}

// 5. Do-While Loop
console.log("\n📚 5. Do-While Loop");
console.log("------------------");

console.log("Do-while loops execute at least once:");

// Basic do-while loop
let counter = 4;
console.log("Basic do-while loop:");
do {
    console.log(`Counter: ${counter}`);
    counter++;
} while (counter <= 3);

// Do-while with condition
let userInput = "no";
let attempts2 = 0;
console.log("Do-while with user input simulation:");
do {
    attempts2++;
    console.log(`Attempt ${attempts2}: ${userInput}`);
    // Simulate user changing input
    if (attempts2 === 2) {
        userInput = "no";
    }
} while (userInput === "yes" && attempts2 < 3);

// 6. For...in Loop
console.log("\n📚 6. For...in Loop");
console.log("------------------");

console.log("For...in loops iterate over object properties:");

// For...in with object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

console.log("For...in with object:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// For...in with array (not recommended)
let colors = ["red", "green", "blue"];
console.log("For...in with array (not recommended):");
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// 7. For...of Loop
console.log("\n📚 7. For...of Loop");
console.log("------------------");

console.log("For...of loops iterate over iterable values:");

// For...of with array
let numbers = [1, 2, 3, 4, 5];
console.log("For...of with array:");
for (let number of numbers) {
    console.log(`Number: ${number}`);
}

// For...of with string
let text = "eHllo";
console.log("For...of with string:");
for (let char of text) {
    console.log(`Character: ${char}`);
}

// For...of with Set
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log("For...of with Set:");
for (let number of uniqueNumbers) {
    console.log(`Unique number: ${number}`);
}

// For...of with Map
let scores = new Map([
    ["Alice", 95],
    ["Bob", 87],
    ["Charlie", 92]
]);
console.log("For...of with Map:");
for (let [name, score] of scores) {
    console.log(`${name}: ${score}`);
}

// 8. Break Statement
console.log("\n📚 8. Break Statement");
console.log("-------------------");

console.log("Break statements exit loops immediately:");

// Break in for loop
console.log("Break in for loop:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log(`Number: ${i}`);
}

// Break in while loop
let num = 1;
console.log("Break in while loop:");
while (num <= 10) {
    if (num === 7) {
        console.log("Breaking at 7");
        break;
    }
    console.log(`Number: ${num}`);
    num++;
}

// Break in nested loops
console.log("Break in nested loops:");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop");
            break outerLoop;
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// 9. Continue Statement
console.log("\n📚 9. Continue Statement");
console.log("----------------------");

console.log("Continue statements skip the current iteration:");

// Continue in for loop
console.log("Continue in for loop (skip even numbers):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Odd number: ${i}`);
}

// Continue in while loop
let count2 = 0;
console.log("Continue in while loop (skip multiples of 3):");
while (count2 < 10) {
    count2++;
    if (count2 % 3 === 0) {
        continue;
    }
    console.log(`Number: ${count2}`);
}

// Continue in nested loops
console.log("Continue in nested loops:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue;
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// 10. Nested Control Structures
console.log("\n📚 10. Nested Control Structures");
console.log("-------------------------------");

console.log("Control structures can be nested inside each other:");

// Nested if statements
let temperature = 25;
let isRaining = false;
let hasUmbrella = true;

console.log("Nested if statements:");
if (temperature > 20) {
    if (isRaining) {
        if (hasUmbrella) {
            console.log("Go outside with umbrella");
        } else {
            console.log("Stay inside or get umbrella");
        }
    } else {
        console.log("Perfect weather to go outside");
    }
} else {
    console.log("Too cold to go outside");
}

// Nested loops
console.log("Nested loops (multiplication table):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

// Loop with conditional
console.log("Loop with conditional:");
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers2) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// 11. Control Flow Best Practices
console.log("\n📚 11. Control Flow Best Practices");
console.log("---------------------------------");

console.log("Best practices for control flow:");
console.log("1. Use meaningful variable names");
console.log("2. Keep conditions simple and readable");
console.log("3. Use early returns to reduce nesting");
console.log("4. Prefer for...of over for...in for arrays");
console.log("5. Use break and continue judiciously");
console.log("6. Avoid deep nesting");

// Example of good practices
function processUser(user) {
    // Early return for invalid input
    if (!user || !user.name) {
        return "Invalid user";
    }
    
    // Simple conditions
    if (user.age < 18) {
        return "User is a minor";
    }
    
    if (user.age >= 65) {
        return "User is a senior";
    }
    
    return "User is an adult";
}

console.log("Best practices example:");
console.log(processUser({ name: "John", age: 25 }));
console.log(processUser({ name: "Jane", age: 16 }));
console.log(processUser(null));

// 12. Control Flow Performance
console.log("\n📚 12. Control Flow Performance");
console.log("------------------------------");

console.log("Performance considerations:");
console.log("1. Minimize loop iterations");
console.log("2. Use efficient loop types");
console.log("3. Avoid unnecessary condition checks");
console.log("4. Use break/continue to skip unnecessary work");

// Performance test
function performanceTest() {
    let iterations = 1000000;
    let array = Array.from({ length: iterations }, (_, i) => i);
    
    // For loop performance
    let start = performance.now();
    let sum1 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
    }
    let end = performance.now();
    console.log("For loop:", (end - start).toFixed(2), "ms");
    
    // For...of loop performance
    start = performance.now();
    let sum2 = 0;
    for (let number of array) {
        sum2 += number;
    }
    end = performance.now();
    console.log("For...of loop:", (end - start).toFixed(2), "ms");
    
    // While loop performance
    start = performance.now();
    let sum3 = 0;
    let i = 0;
    while (i < array.length) {
        sum3 += array[i];
        i++;
    }
    end = performance.now();
    console.log("While loop:", (end - start).toFixed(2), "ms");
}

performanceTest();

// 13. Control Flow Debugging
console.log("\n📚 13. Control Flow Debugging");
console.log("----------------------------");

console.log("Debugging control flow issues:");
console.log("1. Add console.log statements to track execution");
console.log("2. Check loop conditions and termination");
console.log("3. Verify variable values in conditions");
console.log("4. Use debugger statement to pause execution");

// Debugging example
function debugControlFlow() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    
    console.log("Debugging control flow:");
    console.log("Initial sum:", sum);
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(`Iteration ${i}: number=${numbers[i]}, sum=${sum}`);
        sum += numbers[i];
        console.log(`After addition: sum=${sum}`);
        
        // Uncomment to pause execution
        // debugger;
    }
    
    console.log("Final sum:", sum);
}

debugControlFlow();

// 14. Control Flow Patterns
console.log("\n📚 14. Control Flow Patterns");
console.log("---------------------------");

console.log("Common control flow patterns:");

// Pattern 1: Input validation
function validateInput(input) {
    if (typeof input !== 'string') {
        return false;
    }
    
    if (input.length === 0) {
        return false;
    }
    
    if (input.length > 100) {
        return false;
    }
    
    return true;
}

// Pattern 2: Array processing
function processArray(array) {
    let result = [];
    
    for (let item of array) {
        if (typeof item === 'number' && item > 0) {
            result.push(item * 2);
        }
    }
    
    return result;
}

// Pattern 3: Object iteration
function processObject(obj) {
    let result = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key] * 2;
        }
    }
    
    return result;
}

console.log("Control flow patterns:");
console.log("validateInput('hello'):", validateInput('hello'));
console.log("validateInput(''):", validateInput(''));
console.log("processArray([1, 2, 3, -1, 0]):", processArray([1, 2, 3, -1, 0]));
console.log("processObject({a: 1, b: 2}):", processObject({a: 1, b: 2}));

// 15. Control Flow Exercises
console.log("\n📚 15. Control Flow Exercises");
console.log("----------------------------");

console.log("Practice exercises for control flow:");

// Exercise 1: FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log("FizzBuzz (1-15):");
fizzBuzz(15);

// Exercise 2: Prime numbers
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    
    return true;
}

function findPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log("Prime numbers up to 20:", findPrimes(20));

// Exercise 3: Array operations
function findMax(array) {
    if (array.length === 0) return null;
    
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function findMin(array) {
    if (array.length === 0) return null;
    
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let testArray = [5, 2, 8, 1, 9, 3];
console.log("Array:", testArray);
console.log("Max:", findMax(testArray));
console.log("Min:", findMin(testArray));

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use if/else for conditional execution");
console.log("- Use switch for multiple value comparisons");
console.log("- Use for loops for known iterations");
console.log("- Use while loops for unknown iterations");
console.log("- Use for...of for iterating over values");
console.log("- Use for...in for iterating over object properties");
console.log("- Use break to exit loops early");
console.log("- Use continue to skip iterations");
console.log("- Follow control flow best practices");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice all conditional statements");
console.log("2. Implement different types of loops");
console.log("3. Use break and continue statements");
console.log("4. Create nested control structures");
console.log("5. Debug control flow issues");
