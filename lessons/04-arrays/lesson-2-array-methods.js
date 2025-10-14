// Lesson 2: Array Methods (push, pop, shift, unshift, splice, slice)
// This file teaches array manipulation methods

console.log("📦 Welcome to Arrays Lesson 2: Array Methods!");
console.log("=============================================");

// 1. Adding Elements to Arrays
console.log("\n📚 1. Adding Elements to Arrays");
console.log("-------------------------------");

let fruits = ["apple", "banana"];
console.log("Original array:", fruits);

// push() - Add to end
fruits.push("orange");
console.log("After push('orange'):", fruits);

fruits.push("grape", "kiwi"); // Can add multiple elements
console.log("After push('grape', 'kiwi'):", fruits);

// unshift() - Add to beginning
fruits.unshift("mango");
console.log("After unshift('mango'):", fruits);

fruits.unshift("peach", "cherry"); // Can add multiple elements
console.log("After unshift('peach', 'cherry'):", fruits);

// 2. Removing Elements from Arrays
console.log("\n📚 2. Removing Elements from Arrays");
console.log("----------------------------------");

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// pop() - Remove from end
let lastElement = numbers.pop();
console.log("After pop():", numbers, "Removed:", lastElement);

// shift() - Remove from beginning
let firstElement = numbers.shift();
console.log("After shift():", numbers, "Removed:", firstElement);

// 3. splice() Method - Powerful Array Manipulation
console.log("\n📚 3. splice() Method - Powerful Array Manipulation");
console.log("---------------------------------------------------");

let colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Original colors:", colors);

// Remove elements (start index, delete count)
let removedColors = colors.splice(1, 2);
console.log("After splice(1, 2):", colors, "Removed:", removedColors);

// Add elements (start index, delete count, ...elements)
colors.splice(1, 0, "orange", "pink");
console.log("After splice(1, 0, 'orange', 'pink'):", colors);

// Replace elements (start index, delete count, ...elements)
let replacedColors = colors.splice(2, 2, "cyan", "magenta");
console.log("After splice(2, 2, 'cyan', 'magenta'):", colors, "Replaced:", replacedColors);

// 4. slice() Method - Extract Array Portions
console.log("\n📚 4. slice() Method - Extract Array Portions");
console.log("--------------------------------------------");

let numbers2 = [10, 20, 30, 40, 50, 60, 70];
console.log("Original numbers:", numbers2);

// Extract from index to end
let fromIndex2 = numbers2.slice(2);
console.log("slice(2):", fromIndex2); //[30, 40, 50, 60, 70]

// Extract from start to end (exclusive)
let from2To5 = numbers2.slice(2, 5); //[30, 40, 50]
console.log("slice(2, 5):", from2To5);

// Extract last 3 elements
let lastThree = numbers2.slice(-3); //[50, 60, 70]
console.log("slice(-3):", lastThree);

// Extract from -4 to -2
let negativeSlice = numbers2.slice(-4, -2); //[40, 50]
console.log("slice(-4, -2):", negativeSlice);

// 5. concat() Method - Combine Arrays
console.log("\n📚 5. concat() Method - Combine Arrays");
console.log("--------------------------------------");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Combine two arrays
let combined = array1.concat(array2);
console.log("array1.concat(array2):", combined);

// Combine multiple arrays
let allCombined = array1.concat(array2, array3);
console.log("array1.concat(array2, array3):", allCombined);

// Combine with individual elements
let withElements = array1.concat(10, 11, 12);
console.log("array1.concat(10, 11, 12):", withElements);

// 6. join() Method - Convert Array to String
console.log("\n📚 6. join() Method - Convert Array to String");
console.log("--------------------------------------------");

let words = ["Hello", "World", "JavaScript"];
console.log("Words array:", words);

// Default separator (comma)
console.log("join():", words.join());

// Custom separator
console.log("join(' '):", words.join(" "));
console.log("join('-'):", words.join("-"));
console.log("join(''):", words.join(""));
console.log("join(' | '):", words.join(" | "));

// 7. reverse() Method - Reverse Array Order
console.log("\n📚 7. reverse() Method - Reverse Array Order");
console.log("------------------------------------------");

let original = [1, 2, 3, 4, 5];
console.log("Original array:", original);

let reversed = original.reverse();
console.log("After reverse():", reversed);
console.log("Original array is modified:", original);

// 8. sort() Method - Sort Array Elements
console.log("\n📚 8. sort() Method - Sort Array Elements");
console.log("----------------------------------------");

let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Unsorted numbers:", unsortedNumbers);

let sortedNumbers = unsortedNumbers.sort();
console.log("After sort():", sortedNumbers);

// Sort strings
let unsortedStrings = ["banana", "apple", "cherry", "date"];
console.log("Unsorted strings:", unsortedStrings);

let sortedStrings = unsortedStrings.sort();
console.log("After sort():", sortedStrings);

// 9. indexOf() and lastIndexOf() Methods
console.log("\n📚 9. indexOf() and lastIndexOf() Methods");
console.log("----------------------------------------");

let searchArray = [1, 2, 3, 2, 4, 2, 5];
console.log("Search array:", searchArray);

// Find first occurrence
let firstIndex = searchArray.indexOf(2);
console.log("indexOf(2):", firstIndex);

// Find last occurrence
let lastIndex = searchArray.lastIndexOf(2);
console.log("lastIndexOf(2):", lastIndex);

// Element not found
let notFound = searchArray.indexOf(10);
console.log("indexOf(10):", notFound);

// 10. includes() Method - Check if Element Exists
console.log("\n📚 10. includes() Method - Check if Element Exists");
console.log("------------------------------------------------");

let checkArray = ["red", "green", "blue", "yellow"];
console.log("Check array:", checkArray);

console.log("includes('green'):", checkArray.includes("green"));
console.log("includes('purple'):", checkArray.includes("purple"));
console.log("includes('red', 1):", checkArray.includes("red", 1)); // Start from index 1

// 11. Practical Example: Task Management
console.log("\n📚 11. Practical Example: Task Management");
console.log("------------------------------------------");

let tasks = [];
console.log("Empty task list:", tasks);

// Add tasks
tasks.push("Buy groceries");
tasks.push("Walk the dog");
tasks.push("Finish homework");
console.log("After adding tasks:", tasks);

// Add urgent task at beginning
tasks.unshift("Call doctor");
console.log("After adding urgent task:", tasks);

// Complete first task
let completedTask = tasks.shift();
console.log("Completed task:", completedTask);
console.log("Remaining tasks:", tasks);

// Remove specific task
let taskIndex = tasks.indexOf("Walk the dog");
if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log("After removing 'Walk the dog':", tasks);
}

// 12. Practical Example: Shopping Cart Management
console.log("\n📚 12. Practical Example: Shopping Cart Management");
console.log("--------------------------------------------------");

let cart = ["laptop", "mouse", "keyboard"];
console.log("Initial cart:", cart);

// Add items
cart.push("monitor", "headphones");
console.log("After adding items:", cart);

// Remove last item (maybe changed mind)
let removedItem = cart.pop();
console.log("Removed item:", removedItem);
console.log("Cart after removal:", cart);

// Add item at specific position
cart.splice(1, 0, "webcam");
console.log("After adding webcam at position 1:", cart);

// Replace item
cart.splice(2, 1, "wireless mouse");
console.log("After replacing mouse with wireless mouse:", cart);

// Get cart summary
console.log("Cart summary:");
console.log("- Total items:", cart.length);
console.log("- Items:", cart.join(", "));

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- push() adds elements to the end of array");
console.log("- pop() removes and returns the last element");
console.log("- unshift() adds elements to the beginning");
console.log("- shift() removes and returns the first element");
console.log("- splice() can add, remove, or replace elements");
console.log("- slice() extracts portions without modifying original");
console.log("- concat() combines arrays without modifying originals");
console.log("- join() converts array to string with custom separator");

console.log("\n📝 Practice Exercises:");
console.log("1. Create an array and add elements using push and unshift");
console.log("2. Remove elements using pop and shift");
console.log("3. Use splice to insert elements at specific positions");
console.log("4. Use slice to extract portions of an array");
console.log("5. Combine multiple arrays using concat");
