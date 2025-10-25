//Ex 4: Find the Longest Name:
console.log("\n4. Find longest name:");
let names = ["Alice", "Bob", "Christopher", "Diana"];
let longestName = names[0];
for (let name of names) {
    if (name.length > longestName.length) {
        longestName = name;
    }
}
console.log("Names:", names);
console.log("Longest name:", longestName);


//Ex 5: Modify Array Element:
console.log("\n5. Modify array element:");
let fruits = ["apple", "banana", "orange"];
console.log("Original fruits:", fruits);
fruits[1] = "grape";
console.log("Modified fruits:", fruits);


// Ex 6: Add Elements using push and unshift:
console.log("\n6. Add elements to array:");
let animals = ["cat", "dog"];
console.log("Original animals:", animals);
animals.push("bird");
animals.unshift("fish");
console.log("After adding elements:", animals);


// Ex 7: Remove Elements using pop and shift:
console.log("\n7. Remove elements from array:");
let items = ["book", "pen", "pencil", "eraser"];
console.log("Original items:", items);
let lastItem = items.pop();
let firstItem = items.shift();
console.log("After removing elements:", items);
console.log("Removed items:", firstItem, lastItem);


// Ex 8: Convert Array to String using join:
console.log("\n8. Convert array to string:");
let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" ");
let hyphenated = words.join("-");
console.log("Words:", words);
console.log("Sentence:", sentence);
console.log("Hyphenated:", hyphenated);


// Ex 9: Check if Array Contains Element (includes):
console.log("\n9. Check if array contains element:");
let colors = ["red", "green", "blue", "yellow"];
let hasRed = colors.includes("red");
let hasPurple = colors.includes("purple");
console.log("Colors:", colors);
console.log("Has red:", hasRed);
console.log("Has purple:", hasPurple);


// Ex 10: Find Index of Element:
console.log("\n10. Find index of element:");
let cities = ["New York", "London", "Paris", "Tokyo"];
let londonIndex = cities.indexOf("London");
let berlinIndex = cities.indexOf("Berlin");
console.log("Cities:", cities);
console.log("Index of London:", londonIndex);
console.log("Index of Berlin:", berlinIndex);