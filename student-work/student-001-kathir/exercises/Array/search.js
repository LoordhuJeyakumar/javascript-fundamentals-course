// Ex 1: Basic Search Methods
console.log("\n1. Basic Search Methods:");
const fruits = ["apple", "banana", "orange", "grape", "kiwi", "banana"];

console.log("Fruits array:", fruits);

console.log("\n1.1 Find first occurrence of 'banana':");
const firstBanana = fruits.indexOf("banana");
console.log("First 'banana' at index:", firstBanana);

console.log("\n1.2 Find last occurrence of 'banana':");
const lastBanana = fruits.lastIndexOf("banana");
console.log("Last 'banana' at index:", lastBanana);

console.log("\n1.3 Check if 'grape' exists:");
const hasGrape = fruits.includes("grape");
console.log("Has 'grape':", hasGrape);

console.log("\n1.4 Check if 'mango' exists:");
const hasMango = fruits.includes("mango");
console.log("Has 'mango':", hasMango);

// Ex 2: Advanced Search Methods
console.log("\n2. Advanced Search Methods:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Numbers array:", numbers);

console.log("\n2.1 Find first even number:");
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

console.log("\n2.2 Find first number greater than 5:");
const firstGreaterThan5 = numbers.find(num => num > 5);
console.log("First number > 5:", firstGreaterThan5);

console.log("\n2.3 Find index of first even number:");
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of first even number:", firstEvenIndex);

console.log("\n2.4 Check if any number > 8:");
const hasGreaterThan8 = numbers.some(num => num > 8);
console.log("Has number > 8:", hasGreaterThan8);

console.log("\n2.5 Check if all numbers are positive:");
const allPositive = numbers.every(num => num > 0);
console.log("All numbers positive:", allPositive);

// Ex 3: Basic Sorting
console.log("\n3. Basic Sorting:");
const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
const unsortedFruits = ["banana", "apple", "cherry", "date"];

console.log("Unsorted numbers:", unsortedNumbers);
console.log("Unsorted fruits:", unsortedFruits);

console.log("\n3.1 Sort numbers ascending:");
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

console.log("\n3.2 Sort numbers descending:");
const sortedDescending = [...unsortedNumbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDescending);

console.log("\n3.3 Sort fruits alphabetically:");
const sortedFruits = [...unsortedFruits].sort();
console.log("Sorted fruits:", sortedFruits);

console.log("\n3.4 Reverse sorted fruits:");
const reversedFruits = [...sortedFruits].reverse();
console.log("Reversed fruits:", reversedFruits);

// Ex 4: Custom Sorting
console.log("\n4. Custom Sorting:");
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "Diana", age: 35 }
];

console.log("People array:", people);

console.log("\n4.1 Sort people by age (ascending):");
const sortedByAge = [...people].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortedByAge);

console.log("\n4.2 Sort people by name (alphabetically):");
const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", sortedByName);

console.log("\n4.3 Sort people by age (descending):");
const sortedByAgeDesc = [...people].sort((a, b) => b.age - a.age);
console.log("Sorted by age (descending):", sortedByAgeDesc);

// Ex 5: String Search Patterns
console.log("\n5. String Search Patterns:");
const words = ["apple", "application", "apply", "app", "approach", "apartment"];

console.log("Words array:", words);

console.log("\n5.1 Find words starting with 'app':");
const wordsStartingWithApp = words.filter(word => word.startsWith("app"));
console.log("Words starting with 'app':", wordsStartingWithApp);

console.log("\n5.2 Find words containing 'pp':");
const wordsContainingPp = words.filter(word => word.includes("pp"));
console.log("Words containing 'pp':", wordsContainingPp);

console.log("\n5.3 Find words ending with 'ly':");
const wordsEndingWithLy = words.filter(word => word.endsWith("ly"));
console.log("Words ending with 'ly':", wordsEndingWithLy);

// Ex 6: Number Search Patterns
console.log("\n6. Number Search Patterns:");
const scores = [85, 92, 78, 96, 88, 91, 73, 89, 94, 87];

console.log("Scores array:", scores);

console.log("\n6.1 Find scores above 90:");
const highScores = scores.filter(score => score > 90);
console.log("High scores (>90):", highScores);

console.log("\n6.2 Find scores between 80 and 90:");
const mediumScores = scores.filter(score => score >= 80 && score <= 90);
console.log("Medium scores (80–90):", mediumScores);

console.log("\n6.3 Find highest score:");
const highestScore = Math.max(...scores);
console.log("Highest score:", highestScore);

console.log("\n6.4 Find lowest score:");
const lowestScore = Math.min(...scores);
console.log("Lowest score:", lowestScore);

// Ex 7: Array Validation
console.log("\n7. Array Validation:");
const mixedArray = [1, "hello", true, null, undefined, 42, "world"];

console.log("Mixed array:", mixedArray);

console.log("\n7.1 Check if all elements are numbers:");
const allNumbers = mixedArray.every(item => typeof item === "number");
console.log("All elements are numbers:", allNumbers);

console.log("\n7.2 Check if any element is a string:");
const hasString = mixedArray.some(item => typeof item === "string");
console.log("Has string element:", hasString);

console.log("\n7.3 Find all string elements:");
const stringElements = mixedArray.filter(item => typeof item === "string");
console.log("String elements:", stringElements);

console.log("\n7.4 Find all number elements:");
const numberElements = mixedArray.filter(item => typeof item === "number");
console.log("Number elements:", numberElements);

// Ex 8: Complex Search Scenarios
console.log("\n8. Complex Search Scenarios:");
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Pen", price: 2, category: "Office", inStock: true },
  { id: 5, name: "Tablet", price: 499, category: "Electronics", inStock: false }
];

console.log("Products array:", products);

console.log("\n8.1 Find products in stock:");
const inStockProducts = products.filter(p => p.inStock);
console.log("In stock products:", inStockProducts);

console.log("\n8.2 Find electronics products:");
const electronicsProducts = products.filter(p => p.category === "Electronics");
console.log("Electronics products:", electronicsProducts);

console.log("\n8.3 Find most expensive product:");
const mostExpensive = products.reduce((max, p) => (p.price > max.price ? p : max));
console.log("Most expensive product:", mostExpensive);

console.log("\n8.4 Find products with price 100–500:");
const midRangeProducts = products.filter(p => p.price >= 100 && p.price <= 500);
console.log("Mid-range products:", midRangeProducts);

// Ex 9: Search with Multiple Criteria
console.log("\n9. Search with Multiple Criteria:");

console.log("\n9.1 Find electronics products in stock:");
const electronicsInStock = products.filter(
  ({ category, inStock }) => category === "Electronics" && inStock
);
console.log("Electronics in stock:", electronicsInStock);

console.log("\n9.2 Find products with price < 50 or > 800:");
const extremePriceProducts = products.filter(
  ({ price }) => price < 50 || price > 800
);
console.log("Extreme price products:", extremePriceProducts);

console.log("\n9.3 Find products starting with 'P' and in stock:");
const pProductsInStock = products.filter(
  ({ name, inStock }) => name.startsWith("P") && inStock
);
console.log("Products starting with 'P' in stock:", pProductsInStock);

// Ex 10: Search Performance
console.log("\n10. Search Performance:");

console.log("\n10.1 Measure search performance:");
const largeArray = Array.from({ length: 10_000 }, (_, i) => i + 1);
const target = 5000;

console.log("Large array created with", largeArray.length, "elements");
console.log("Searching for:", target);

// Measure performance of indexOf
const t0IndexOf = performance.now();
const indexOfResult = largeArray.indexOf(target);
const t1IndexOf = performance.now();
console.log(`indexOf found at index ${indexOfResult} in ${(t1IndexOf - t0IndexOf).toFixed(2)}ms`);

// Measure performance of find
const t0Find = performance.now();
const findResult = largeArray.find(num => num === target);
const t1Find = performance.now();
console.log(`find found value ${findResult} in ${(t1Find - t0Find).toFixed(2)}ms`);