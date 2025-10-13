// Lesson 1: Array Basics
// This file teaches fundamental array concepts

console.log("📦 Welcome to Arrays Lesson 1: Array Basics!");
console.log("===========================================");

// 1. Array Creation and Initialization
console.log("\n📚 1. Array Creation and Initialization");
console.log("---------------------------------------");

// Empty array
let emptyArray = [];
console.log("Empty array:", emptyArray);

// Array with initial values
let fruits = ["apple", "banana", "orange"]; // length => 3
console.log("Fruits array:", fruits);

// Array with mixed data types
let mixedArray = [1, "hello", true, null, undefined, {name:"JOhn"}, []];
console.log("Mixed array:", mixedArray);

// Array using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers array:", numbers);

// Array with specific length
let fixedLength = new Array(5);
console.log("Fixed length array:", fixedLength);

// 2. Accessing Array Elements
console.log("\n📚 2. Accessing Array Elements");
console.log("-----------------------------");

let colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Colors array:", colors);

// Access by index
console.log("First color (index 0):", colors[0]);
console.log("Second color (index 1):", colors[1]);
console.log("Last color (index 4):", colors[4]);

// Access last element dynamically
console.log("Last color:", colors[colors.length - 1]);

// Access non-existent index
console.log("Non-existent index (10):", colors[10]); // undefined

// 3. Array Length Property
console.log("\n📚 3. Array Length Property");
console.log("-------------------------");

let animals = ["cat", "dog", "bird", "fish"];
console.log("Animals array:", animals);
console.log("Array length:", animals.length);

// Length changes when array is modified
animals.push("hamster"); // add a new element to the end
console.log("After push - length:", animals.length);

animals.pop(); // remove the last element
console.log("After pop - length:", animals.length);

// 4. Modifying Array Elements
console.log("\n📚 4. Modifying Array Elements");
console.log("-----------------------------");

let scores = [85, 92, 78, 96, 88];
console.log("Original scores:", scores);

// Modify existing element
scores[2] = 90;
console.log("After modifying index 2:", scores);

scores[7] = 100;
console.log("After adding at index 7:", scores);

// Add new element at specific index
scores[5] = 95;
console.log("After adding at index 5:", scores);

// 5. Array Iteration Basics
console.log("\n📚 5. Array Iteration Basics");
console.log("--------------------------");

let numbers2 = [10, 20, 30, 40, 50];
console.log("Numbers array:", numbers2);

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < numbers2.length; i++) {
    console.log(`Index ${i}: ${numbers2[i]}`);
}

// Using for...of loop
console.log("Using for...of loop:");
for (let number of numbers2) {
    console.log(`Value: ${number} Index: ${numbers2.indexOf(number)}`);
    
}

// 6. Array Methods Overview
console.log("\n📚 6. Array Methods Overview");
console.log("----------------------------");

let items = ["book", "pen", "pencil"];
console.log("Original items:", items);

// Adding elements
items.push("eraser"); // Add to end of the array
console.log("After push:", items);

items.unshift("ruler"); // Add to beginning of the array
console.log("After unshift:", items);

// Removing elements
let lastItem = items.pop(); // Remove from end
console.log("After pop:", items, "Removed:", lastItem);

let firstItem = items.shift(); // Remove from beginning
console.log("After shift:", items, "Removed:", firstItem);

// 7. Array Concatenation
console.log("\n📚 7. Array Concatenation");
console.log("------------------------");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Using concat method
let combined = array1.concat(array2, array3, [10, 11, 12]);
console.log("Combined arrays:", combined);

// Using spread operator
let spreadCombined = [...array1, ...array2, ...array3];
console.log("Spread combined:", spreadCombined);

// 8. Array to String Conversion
console.log("\n📚 8. Array to String Conversion");
console.log("-------------------------------");

let words = ["Hello", "World", "JavaScript"];
console.log("Words array:", words);

// Using toString method
console.log("toString():", words.toString());

// Using join method
console.log("join():", words.join());
console.log("join(' '):", words.join(" "));
console.log("join('-'):", words.join("-"));
console.log("join(''):", words.join(""));

// 9. Checking if Something is an Array
console.log("\n📚 9. Checking if Something is an Array");
console.log("------------------------------------");

let testArray = [1, 2, 3];
let testString = "hello".split("");
console.log("Test string:", testString);
let testObject = { a: 1, b: 2 };

console.log("Array.isArray([1,2,3]):", Array.isArray(testArray));
console.log("Array.isArray('hello'):", Array.isArray(testString));
console.log("Array.isArray({a:1,b:2}):", Array.isArray(testObject));

// 10. Practical Example: Shopping Cart
console.log("\n📚 10. Practical Example: Shopping Cart");
console.log("---------------------------------------");

let shoppingCart = [];
console.log("Empty shopping cart:", shoppingCart);

// Add items
shoppingCart.push("Laptop");
shoppingCart.push("Mouse");
shoppingCart.push("Keyboard");
console.log("Cart after adding items:", shoppingCart);

// Check cart contents
console.log("Cart length:", shoppingCart.length);
console.log("First item:", shoppingCart[0]);
console.log("Last item:", shoppingCart[shoppingCart.length - 1]);

// Remove last item
let removedItem = shoppingCart.pop();
console.log("Removed item:", removedItem);
console.log("Cart after removal:", shoppingCart);

// 11. Practical Example: Student Grades
console.log("\n📚 11. Practical Example: Student Grades");
console.log("----------------------------------------");

let studentGrades = [85, 92, 78, 96, 88];
console.log("Student grades:", studentGrades);

// Calculate average
let sum = 0;
for (let grade of studentGrades) {
    sum += grade;
}
let average = sum / studentGrades.length;
console.log("Average grade:", average.toFixed(2));

// Find highest and lowest grades
let highest = studentGrades[0];
let lowest = studentGrades[0];

for (let grade of studentGrades) {
    if (grade > highest) {
        highest = grade;
    }
    if (grade < lowest) {
        lowest = grade;
    }
}

console.log("Highest grade:", highest);
console.log("Lowest grade:", lowest);

// 12. Array Destructuring Basics
console.log("\n📚 12. Array Destructuring Basics");
console.log("---------------------------------");

let coordinates = [10, 20, 30];
console.log("Coordinates:", coordinates);

// Basic destructuring
let [x, y, z] = coordinates;
console.log("Destructured - x:", x, "y:", y, "z:", z);

// Skip elements
let [first, , third] = coordinates;
console.log("First:", first, "Third:", third);

// Default values
let [a, b, c, d = 40] = coordinates;
console.log("With default - a:", a, "b:", b, "c:", c, "d:", d);

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Arrays are ordered collections of elements");
console.log("- Access elements using index notation [0], [1], etc.");
console.log("- Use length property to get array size");
console.log("- Arrays can contain mixed data types");
console.log("- Use push/pop for end operations, unshift/shift for beginning");
console.log("- Arrays are mutable - you can change their contents");

console.log("\n📝 Practice Exercises:");
console.log("1. Create an array of your favorite foods");
console.log("2. Access the first and last elements of an array");
console.log("3. Add and remove elements from an array");
console.log("4. Calculate the sum of all numbers in an array");
console.log("5. Find the longest word in an array of strings");
