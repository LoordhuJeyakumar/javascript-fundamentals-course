// Exercise 2: Array Methods
// Complete the TODO sections below

console.log("💪 Exercise 2: Array Methods");
console.log("===========================");

// TODO 1: Use push to add elements to the end of an array
console.log("\n1. Add elements to end using push:");
let fruits = ["apple", "banana"]; // Your code here
console.log("Original fruits:", fruits);
fruits.push("orange", "grape"); // Your code here
console.log("After push:", fruits);

// TODO 2: Use unshift to add elements to the beginning of an array
console.log("\n2. Add elements to beginning using unshift:");
let numbers = [3, 4, 5]; // Your code here
console.log("Original numbers:", numbers);
numbers.unshift(1, 2); // Your code here
console.log("After unshift:", numbers);

// TODO 3: Use pop to remove the last element
console.log("\n3. Remove last element using pop:");
let colors = ["red", "green", "blue", "yellow"]; // Your code here
console.log("Original colors:", colors);
let removedColor = colors.pop(); // Your code here
console.log("After pop:", colors);
console.log("Removed color:", removedColor);

// TODO 4: Use shift to remove the first element
console.log("\n4. Remove first element using shift:");
let animals = ["cat", "dog", "bird", "fish"]; // Your code here
console.log("Original animals:", animals);
let removedAnimal = animals.shift(); // Your code here
console.log("After shift:", animals);
console.log("Removed animal:", removedAnimal);

// TODO 5: Use splice to remove elements from the middle
console.log("\n5. Remove elements using splice:");
let items = ["book", "pen", "pencil", "eraser", "ruler"]; // Your code here
console.log("Original items:", items);
let removedItems = items.splice(1, 2); // Your code here - remove 2 elements starting at index 1
console.log("After splice:", items);
console.log("Removed items:", removedItems);

// TODO 6: Use splice to add elements at a specific position
console.log("\n6. Add elements using splice:");
let letters = ["A", "B", "E", "F"]; // Your code here
console.log("Original letters:", letters);
letters.splice(2, 0, "C", "D"); // Your code here - add C and D at index 2
console.log("After splice:", letters);

// TODO 7: Use slice to extract a portion of an array
console.log("\n7. Extract portion using slice:");
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]; // Your code here
console.log("Original numbers:", numbers2);
let middle = numbers2.slice(2, 5); // Your code here - extract from index 2 to 4
let lastThree = numbers2.slice(-3); // Your code here - extract last 3 elements
console.log("Middle portion:", middle);
console.log("Last three:", lastThree);

// TODO 8: Use concat to combine arrays
console.log("\n8. Combine arrays using concat:");
let array1 = [1, 2, 3]; // Your code here
let array2 = [4, 5, 6]; // Your code here
let array3 = [7, 8, 9]; // Your code here
let combined = array1.concat(array2, array3); // Your code here
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);
console.log("Combined:", combined);

// TODO 9: Use join to convert array to string with different separators
console.log("\n9. Convert array to string using join:");
let words = ["Hello", "World", "JavaScript"]; // Your code here
let spaceSeparated = words.join(" "); // Your code here
let commaSeparated = words.join(", "); // Your code here
let noSeparator = words.join(""); // Your code here
console.log("Words:", words);
console.log("Space separated:", spaceSeparated);
console.log("Comma separated:", commaSeparated);
console.log("No separator:", noSeparator);

// TODO 10: Use reverse to reverse the order of an array
console.log("\n10. Reverse array order:");
let original = [1, 2, 3, 4, 5]; // Your code here
console.log("Original:", original);
let reversed = [...original].reverse(); // Your code here - create a copy and reverse it
console.log("Reversed:", reversed);
console.log("Original unchanged:", original);

// TODO 11: Use sort to sort an array of strings
console.log("\n11. Sort array of strings:");
let unsortedNames = ["Charlie", "Alice", "Bob", "Diana"]; // Your code here
console.log("Unsorted names:", unsortedNames);
let sortedNames = [...unsortedNames].sort(); // Your code here - create a copy and sort it
console.log("Sorted names:", sortedNames);

// TODO 12: Use sort to sort an array of numbers
console.log("\n12. Sort array of numbers:");
let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6]; // Your code here
console.log("Unsorted numbers:", unsortedNumbers);
let sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b); // Your code here - sort numerically
console.log("Sorted numbers:", sortedNumbers);

console.log("\n🎉 Exercise Complete!");
console.log("====================");
console.log("Key Takeaways:");
console.log("- push() adds elements to the end");
console.log("- unshift() adds elements to the beginning");
console.log("- pop() removes and returns the last element");
console.log("- shift() removes and returns the first element");
console.log("- splice() can add, remove, or replace elements");
console.log("- slice() extracts portions without modifying original");
console.log("- concat() combines arrays without modifying originals");
console.log("- join() converts array to string with custom separator");
console.log("- reverse() and sort() modify the original array");

console.log("\n📝 Practice Exercises:");
console.log("1. Create an array and practice all the methods");
console.log("2. Use splice to insert elements at specific positions");
console.log("3. Use slice to extract different portions of an array");
console.log("4. Combine multiple arrays using concat");
console.log("5. Sort arrays of different data types");
