// Exercise 3: Array Search and Sort
// Complete the TODO sections below

console.log("💪 Exercise 3: Array Search and Sort");
console.log("===================================");

// Exercise 1: Basic Search Methods
console.log("\n1. Basic Search Methods:");
const fruits = ["apple", "banana", "orange", "grape", "kiwi", "banana"];

console.log("Fruits array:", fruits);

// TODO 1: Use indexOf to find the first occurrence of "banana"
console.log("\n1.1 Find first occurrence of 'banana':");
let firstBanana = fruits.indexOf("banana"); // Your code here
console.log("First 'banana' at index:", firstBanana);

// TODO 2: Use lastIndexOf to find the last occurrence of "banana"
console.log("\n1.2 Find last occurrence of 'banana':");
let lastBanana = fruits.lastIndexOf("banana"); // Your code here
console.log("Last 'banana' at index:", lastBanana);

// TODO 3: Use includes to check if "grape" exists
console.log("\n1.3 Check if 'grape' exists:");
let hasGrape = fruits.includes("grape"); // Your code here
console.log("Has 'grape':", hasGrape);

// TODO 4: Use includes to check if "mango" exists
console.log("\n1.4 Check if 'mango' exists:");
let hasMango = fruits.includes("mango"); // Your code here
console.log("Has 'mango':", hasMango);

// Exercise 2: Advanced Search Methods
console.log("\n2. Advanced Search Methods:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Numbers array:", numbers);

// TODO 5: Use find to find the first even number
console.log("\n2.1 Find first even number:");
let firstEven = numbers.find(num => num % 2 === 0); // Your code here
console.log("First even number:", firstEven);

// TODO 6: Use find to find the first number greater than 5
console.log("\n2.2 Find first number greater than 5:");
let firstGreaterThan5 = numbers.find(num => num > 5); // Your code here
console.log("First number > 5:", firstGreaterThan5);

// TODO 7: Use findIndex to find the index of first even number
console.log("\n2.3 Find index of first even number:");
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // Your code here
console.log("Index of first even number:", firstEvenIndex);

// TODO 8: Use some to check if any number is greater than 8
console.log("\n2.4 Check if any number > 8:");
let hasGreaterThan8 = numbers.some(num => num > 8); // Your code here
console.log("Has number > 8:", hasGreaterThan8);

// TODO 9: Use every to check if all numbers are positive
console.log("\n2.5 Check if all numbers are positive:");
let allPositive = numbers.every(num => num > 0); // Your code here
console.log("All numbers positive:", allPositive);

// Exercise 3: Basic Sorting
console.log("\n3. Basic Sorting:");
const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
const unsortedFruits = ["banana", "apple", "cherry", "date"];

console.log("Unsorted numbers:", unsortedNumbers);
console.log("Unsorted fruits:", unsortedFruits);

// TODO 10: Sort numbers in ascending order
console.log("\n3.1 Sort numbers ascending:");
let sortedNumbers = [...unsortedNumbers]; // Create a copy
sortedNumbers.sort((a, b) => a - b); // Your code here
console.log("Sorted numbers:", sortedNumbers);

// TODO 11: Sort numbers in descending order
console.log("\n3.2 Sort numbers descending:");
let sortedDescending = [...unsortedNumbers]; // Create a copy
sortedDescending.sort((a, b) => b - a); // Your code here
console.log("Sorted descending:", sortedDescending);

// TODO 12: Sort fruits alphabetically
console.log("\n3.3 Sort fruits alphabetically:");
let sortedFruits = [...unsortedFruits]; // Create a copy
sortedFruits.sort(); // Your code here
console.log("Sorted fruits:", sortedFruits);

// TODO 13: Reverse the sorted fruits array
console.log("\n3.4 Reverse sorted fruits:");
let reversedFruits = [...sortedFruits]; // Create a copy
reversedFruits.reverse(); // Your code here
console.log("Reversed fruits:", reversedFruits);

// Exercise 4: Custom Sorting
console.log("\n4. Custom Sorting:");
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 20},
    {name: "Diana", age: 35}
];

console.log("People array:", people);

// TODO 14: Sort people by age (ascending)
console.log("\n4.1 Sort people by age (ascending):");
let sortedByAge = [...people]; // Create a copy
sortedByAge.sort((a, b) => a.age - b.age); // Your code here
console.log("Sorted by age:", sortedByAge);

// TODO 15: Sort people by name (alphabetically)
console.log("\n4.2 Sort people by name (alphabetically):");
let sortedByName = [...people]; // Create a copy
sortedByName.sort((a, b) => a.name.localeCompare(b.name)); // Your code here
console.log("Sorted by name:", sortedByName);

// TODO 16: Sort people by age (descending)
console.log("\n4.3 Sort people by age (descending):");
let sortedByAgeDesc = [...people]; // Create a copy
sortedByAgeDesc.sort((a, b) => b.age - a.age); // Your code here
console.log("Sorted by age (descending):", sortedByAgeDesc);

// Exercise 5: String Search Patterns
console.log("\n5. String Search Patterns:");
const words = ["apple", "application", "apply", "app", "approach", "apartment"];

console.log("Words array:", words);

// TODO 17: Find all words that start with "app"
console.log("\n5.1 Find words starting with 'app':");
let wordsStartingWithApp = words.filter(word => word.startsWith("app")); // Your code here
console.log("Words starting with 'app':", wordsStartingWithApp);

// TODO 18: Find all words that contain "pp"
console.log("\n5.2 Find words containing 'pp':");
let wordsContainingPp = words.filter(word => word.includes("pp")); // Your code here
console.log("Words containing 'pp':", wordsContainingPp);

// TODO 19: Find all words that end with "ly"
console.log("\n5.3 Find words ending with 'ly':");
let wordsEndingWithLy = words.filter(word => word.endsWith("ly")); // Your code here
console.log("Words ending with 'ly':", wordsEndingWithLy);

// Exercise 6: Number Search Patterns
console.log("\n6. Number Search Patterns:");
const scores = [85, 92, 78, 96, 88, 91, 73, 89, 94, 87];

console.log("Scores array:", scores);

// TODO 20: Find all scores above 90
console.log("\n6.1 Find scores above 90:");
let highScores = scores.filter(score => score > 90); // Your code here
console.log("High scores (>90):", highScores);

// TODO 21: Find all scores between 80 and 90
console.log("\n6.2 Find scores between 80 and 90:");
let mediumScores = scores.filter(score => score >= 80 && score <= 90); // Your code here
console.log("Medium scores (80-90):", mediumScores);

// TODO 22: Find the highest score
console.log("\n6.3 Find highest score:");
let highestScore = Math.max(...scores); // Your code here
console.log("Highest score:", highestScore);

// TODO 23: Find the lowest score
console.log("\n6.4 Find lowest score:");
let lowestScore = Math.min(...scores); // Your code here
console.log("Lowest score:", lowestScore);

// Exercise 7: Array Validation
console.log("\n7. Array Validation:");
const mixedArray = [1, "hello", true, null, undefined, 42, "world"];

console.log("Mixed array:", mixedArray);

// TODO 24: Check if all elements are numbers
console.log("\n7.1 Check if all elements are numbers:");
let allNumbers = mixedArray.every(item => typeof item === "number"); // Your code here
console.log("All elements are numbers:", allNumbers);

// TODO 25: Check if any element is a string
console.log("\n7.2 Check if any element is a string:");
let hasString = mixedArray.some(item => typeof item === "string"); // Your code here
console.log("Has string element:", hasString);

// TODO 26: Find all string elements
console.log("\n7.3 Find all string elements:");
let stringElements = mixedArray.filter(item => typeof item === "string"); // Your code here
console.log("String elements:", stringElements);

// TODO 27: Find all number elements
console.log("\n7.4 Find all number elements:");
let numberElements = mixedArray.filter(item => typeof item === "number"); // Your code here
console.log("Number elements:", numberElements);

// Exercise 8: Complex Search Scenarios
console.log("\n8. Complex Search Scenarios:");
const products = [
    {id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true},
    {id: 2, name: "Book", price: 15, category: "Education", inStock: false},
    {id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true},
    {id: 4, name: "Pen", price: 2, category: "Office", inStock: true},
    {id: 5, name: "Tablet", price: 499, category: "Electronics", inStock: false}
];

console.log("Products array:", products);

// TODO 28: Find all products in stock
console.log("\n8.1 Find products in stock:");
let inStockProducts = products.filter(product => product.inStock); // Your code here
console.log("In stock products:", inStockProducts);

// TODO 29: Find all electronics products
console.log("\n8.2 Find electronics products:");
let electronicsProducts = products.filter(product => product.category === "Electronics"); // Your code here
console.log("Electronics products:", electronicsProducts);

// TODO 30: Find the most expensive product
console.log("\n8.3 Find most expensive product:");
let mostExpensive = products.reduce((max, product) => product.price > max.price ? product : max); // Your code here
console.log("Most expensive product:", mostExpensive);

// TODO 31: Find products with price between 100 and 500
console.log("\n8.4 Find products with price 100-500:");
let midRangeProducts = products.filter(product => product.price >= 100 && product.price <= 500); // Your code here
console.log("Mid-range products:", midRangeProducts);

// Exercise 9: Search with Multiple Criteria
console.log("\n9. Search with Multiple Criteria:");

// TODO 32: Find electronics products that are in stock
console.log("\n9.1 Find electronics products in stock:");
let electronicsInStock = products.filter(product => 
    product.category === "Electronics" && product.inStock
); // Your code here
console.log("Electronics in stock:", electronicsInStock);

// TODO 33: Find products with price less than 50 or more than 800
console.log("\n9.2 Find products with price < 50 or > 800:");
let extremePriceProducts = products.filter(product => 
    product.price < 50 || product.price > 800
); // Your code here
console.log("Extreme price products:", extremePriceProducts);

// TODO 34: Find products that start with "P" and are in stock
console.log("\n9.3 Find products starting with 'P' and in stock:");
let pProductsInStock = products.filter(product => 
    product.name.startsWith("P") && product.inStock
); // Your code here
console.log("Products starting with 'P' in stock:", pProductsInStock);

// Exercise 10: Search Performance
console.log("\n10. Search Performance:");

// TODO 35: Create a large array and measure search performance
console.log("\n10.1 Measure search performance:");
const largeArray = Array.from({length: 10000}, (_, i) => i + 1);
const target = 5000;

console.log("Large array created with", largeArray.length, "elements");
console.log("Searching for:", target);

// Measure indexOf performance
const startIndexOf = performance.now();
const indexOfResult = largeArray.indexOf(target);
const endIndexOf = performance.now();
console.log(`indexOf found at index ${indexOfResult} in ${(endIndexOf - startIndexOf).toFixed(2)}ms`);

// Measure find performance
const startFind = performance.now();
const findResult = largeArray.find(num => num === target);
const endFind = performance.now();
console.log(`find found value ${findResult} in ${(endFind - startFind).toFixed(2)}ms`);

console.log("\n🎉 Congratulations! You've completed Exercise 3: Array Search and Sort!");
console.log("You now understand how to search and sort arrays effectively!");
