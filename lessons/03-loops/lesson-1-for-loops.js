// Lesson 1: For Loops and While Loops
// This file teaches basic loop concepts

console.log("🔄 Welcome to Loops Lesson 1: For Loops and While Loops!");
console.log("========================================================");

// 1. Basic For Loop
console.log("\n📚 1. Basic For Loop");
console.log("-------------------");

console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// 2. For Loop with Different Increments
console.log("\n📚 2. For Loop with Different Increments");
console.log("----------------------------------------");

console.log("Counting by 2s:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Even number: ${i}`);
}

console.log("Counting backwards:");
for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

// 3. For Loop with Arrays
console.log("\n📚 3. For Loop with Arrays");
console.log("-------------------------");

let fruits = ["apple", "banana", "orange", "grape"];
console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

// 4. While Loop
console.log("\n📚 4. While Loop"); // we don't know the number of iterations before the loop starts
console.log("----------------");

let count = 1;
console.log("Counting with while loop:");
while (count <= 3) {
    console.log(`While count: ${count}`);
    count++; // count = count + 1
}

// 5. While Loop with User Input Simulation
console.log("\n📚 5. While Loop with Condition");
console.log("-------------------------------");

let number = 10;
console.log("Halving numbers until less than 1:");
while (number >= 1) {
    console.log(`Number: ${number}`);
    number = number / 2;
}

// 6. Do-While Loop
console.log("\n📚 6. Do-While Loop");
console.log("-------------------");

let counter = 1;
console.log("Do-while example:");
do {
    console.log(`Do-while count: ${counter}`);
    counter++;
} while (counter <= 3);

// 7. Loop Control: Break
console.log("\n📚 7. Loop Control: Break");
console.log("------------------------");

console.log("Breaking out of loop at 3:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) { // (== is loose equality, === is strict equality)
        console.log("Breaking at 3!");
        break;
    }

    console.log(`Count: ${i}`);
}

// 8. Loop Control: Continue
console.log("\n📚 8. Loop Control: Continue");
console.log("----------------------------");

console.log("Skipping even numbers:");
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(`Skipping ${i}`);
        continue;
    }
    console.log(`Odd number: ${i}`);
}

// 9. Practical Example: Sum of Numbers
console.log("\n📚 9. Practical Example: Sum of Numbers");
console.log("---------------------------------------");

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // sum = 0 + 1 + 2 + 3 + 4 + 5 => 15  
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let total = sumNumbers(numbers);
console.log(`Sum of [1, 2, 3, 4, 5] = ${total}`);

// 10. Practical Example: Finding Maximum
console.log("\n📚 10. Practical Example: Finding Maximum");
console.log("----------------------------------------");

function findMaximum(numbers) {
    let max = numbers[0]; // max = 3
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) { // numbers[i] = 7, 2, 9, 1, 5
            max = numbers[i];
        }
    }
    return max;
}

let testNumbers = [3, 7, 2, 9, 1, 5];
let maximum = findMaximum(testNumbers);
console.log(`Maximum in [3, 7, 2, 9, 1, 5] = ${maximum}`);

// 11. Practical Example: Multiplication Table
console.log("\n📚 11. Practical Example: Multiplication Table");
console.log("----------------------------------------------");

function multiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} × ${i} = ${result}`);
    }
}

multiplicationTable(5);

// 12. Practical Example: Factorial
console.log("\n📚 12. Practical Example: Factorial"); // factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
console.log("----------------------------------");

//factorial formula is n! = n * (n-1) * (n-2) * ... * 1
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) { // i = 1, 2, 3, 4, 5
        result *= i; // result = 1 * 1 * 2 * 3 * 4 * 5 = 120 // result = result * i
    }
    return result;
}


//retry machanism server connection



const maxAttempts = 3;
let attempts = 4;

do {
    attempts++;
    if(attempts === 2){
        console.log("Server connection success");
        break;
    }
    console.log(attempts)
  
} while (attempts < maxAttempts);

let fact5 = factorial(5);
console.log(`5! = ${fact5}`);

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- For loops are great for counting and iterating");
console.log("- While loops are good for conditional iteration");
console.log("- Use break to exit loops early");
console.log("- Use continue to skip iterations");
console.log("- Loops are essential for processing data");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a loop that prints numbers 1-10");
console.log("2. Create a loop that prints even numbers 2-20");
console.log("3. Create a loop that calculates the sum of 1-100");
console.log("4. Create a loop that finds the smallest number in an array");
console.log("5. Create a loop that prints a pattern of stars");
