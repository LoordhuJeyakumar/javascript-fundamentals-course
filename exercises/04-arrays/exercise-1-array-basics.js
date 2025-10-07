// Exercise 1: Array Basics
// Complete the TODO sections below

console.log("💪 Exercise 1: Array Basics");
console.log("==========================");

// TODO 1: Create an array of your favorite colors
console.log("\n1. Create an array of favorite colors:");
let favoriteColors = ["red", "blue", "green"]; // Replace with your colors
console.log("Favorite colors:", favoriteColors);

// TODO 2: Access the first and last elements of the array
console.log("\n2. Access first and last elements:");
let firstColor = favoriteColors[0]; // Your code here
let lastColor = favoriteColors[favoriteColors.length - 1]; // Your code here
console.log("First color:", firstColor);
console.log("Last color:", lastColor);

// TODO 3: Create an array of numbers and calculate the sum
console.log("\n3. Calculate sum of numbers:");
let numbers = [1, 2, 3, 4, 5]; // Your code here
let sum = 0; // Your code here
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Numbers:", numbers);
console.log("Sum:", sum);

// TODO 4: Create an array of names and find the longest name
console.log("\n4. Find longest name:");
let names = ["Alice", "Bob", "Christopher", "Diana"]; // Your code here
let longestName = names[0]; // Your code here
for (let name of names) {
    if (name.length > longestName.length) {
        longestName = name;
    }
}
console.log("Names:", names);
console.log("Longest name:", longestName);

// TODO 5: Create an array and modify an element
console.log("\n5. Modify array element:");
let fruits = ["apple", "banana", "orange"]; // Your code here
console.log("Original fruits:", fruits);
fruits[1] = "grape"; // Your code here - change banana to grape
console.log("Modified fruits:", fruits);

// TODO 6: Create an array and add elements using push and unshift
console.log("\n6. Add elements to array:");
let animals = ["cat", "dog"]; // Your code here
console.log("Original animals:", animals);
animals.push("bird"); // Your code here - add bird to end
animals.unshift("fish"); // Your code here - add fish to beginning
console.log("After adding elements:", animals);

// TODO 7: Create an array and remove elements using pop and shift
console.log("\n7. Remove elements from array:");
let items = ["book", "pen", "pencil", "eraser"]; // Your code here
console.log("Original items:", items);
let lastItem = items.pop(); // Your code here - remove last element
let firstItem = items.shift(); // Your code here - remove first element
console.log("After removing elements:", items);
console.log("Removed items:", firstItem, lastItem);

// TODO 8: Create an array and use join to convert to string
console.log("\n8. Convert array to string:");
let words = ["Hello", "World", "JavaScript"]; // Your code here
let sentence = words.join(" "); // Your code here - join with spaces
let hyphenated = words.join("-"); // Your code here - join with hyphens
console.log("Words:", words);
console.log("Sentence:", sentence);
console.log("Hyphenated:", hyphenated);

// TODO 9: Create an array and check if it contains a specific element
console.log("\n9. Check if array contains element:");
let colors = ["red", "green", "blue", "yellow"]; // Your code here
let hasRed = colors.includes("red"); // Your code here
let hasPurple = colors.includes("purple"); // Your code here
console.log("Colors:", colors);
console.log("Has red:", hasRed);
console.log("Has purple:", hasPurple);

// TODO 10: Create an array and find the index of an element
console.log("\n10. Find index of element:");
let cities = ["New York", "London", "Paris", "Tokyo"]; // Your code here
let londonIndex = cities.indexOf("London"); // Your code here
let berlinIndex = cities.indexOf("Berlin"); // Your code here
console.log("Cities:", cities);
console.log("Index of London:", londonIndex);
console.log("Index of Berlin:", berlinIndex);

console.log("\n🎉 Exercise Complete!");
console.log("====================");
console.log("Check your answers and make sure all arrays work correctly!");
console.log("If you get stuck, ask for help or check the solutions folder.");
