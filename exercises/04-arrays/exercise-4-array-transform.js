// Exercise 4: Array Transformation
// Complete the TODO sections below

console.log("💪 Exercise 4: Array Transformation");
console.log("===================================");

// Exercise 1: Map Method
console.log("\n1. Map Method:");
const numbers = [1, 2, 3, 4, 5];

console.log("Original numbers:", numbers);

// TODO 1: Double each number using map
console.log("\n1.1 Double each number:");
let doubledNumbers = numbers.map(num => num * 2); // Your code here
console.log("Doubled numbers:", doubledNumbers);

// TODO 2: Convert numbers to strings using map
console.log("\n1.2 Convert to strings:");
let stringNumbers = numbers.map(num => num.toString()); // Your code here
console.log("String numbers:", stringNumbers);

// TODO 3: Create objects with number and its square using map
console.log("\n1.3 Create objects with number and square:");
let numberSquares = numbers.map(num => ({number: num, square: num * num})); // Your code here
console.log("Number squares:", numberSquares);

// Exercise 2: Filter Method
console.log("\n2. Filter Method:");
const scores = [85, 92, 78, 96, 88, 91, 73, 89, 94, 87];

console.log("Original scores:", scores);

// TODO 4: Filter scores above 90
console.log("\n2.1 Filter scores above 90:");
let highScores = scores.filter(score => score > 90); // Your code here
console.log("High scores (>90):", highScores);

// TODO 5: Filter even scores
console.log("\n2.2 Filter even scores:");
let evenScores = scores.filter(score => score % 2 === 0); // Your code here
console.log("Even scores:", evenScores);

// TODO 6: Filter scores between 80 and 90
console.log("\n2.3 Filter scores between 80 and 90:");
let mediumScores = scores.filter(score => score >= 80 && score <= 90); // Your code here
console.log("Medium scores (80-90):", mediumScores);

// Exercise 3: Reduce Method
console.log("\n3. Reduce Method:");
const prices = [10, 20, 30, 40, 50];

console.log("Original prices:", prices);

// TODO 7: Calculate sum of all prices
console.log("\n3.1 Calculate sum of prices:");
let totalPrice = prices.reduce((sum, price) => sum + price, 0); // Your code here
console.log("Total price:", totalPrice);

// TODO 8: Find the maximum price
console.log("\n3.2 Find maximum price:");
let maxPrice = prices.reduce((max, price) => price > max ? price : max, prices[0]); // Your code here
console.log("Maximum price:", maxPrice);

// TODO 9: Count how many prices are above 25
console.log("\n3.3 Count prices above 25:");
let countAbove25 = prices.reduce((count, price) => price > 25 ? count + 1 : count, 0); // Your code here
console.log("Count of prices above 25:", countAbove25);

// Exercise 4: Method Chaining
console.log("\n4. Method Chaining:");
const products = [
    {name: "Laptop", price: 999, category: "Electronics"},
    {name: "Book", price: 15, category: "Education"},
    {name: "Phone", price: 699, category: "Electronics"},
    {name: "Pen", price: 2, category: "Office"},
    {name: "Tablet", price: 499, category: "Electronics"}
];

console.log("Original products:", products);

// TODO 10: Get names of electronics products
console.log("\n4.1 Get names of electronics products:");
let electronicsNames = products
    .filter(product => product.category === "Electronics")
    .map(product => product.name); // Your code here
console.log("Electronics names:", electronicsNames);

// TODO 11: Get prices of products above 100, then double them
console.log("\n4.2 Get prices above 100, then double them:");
let doubledHighPrices = products
    .filter(product => product.price > 100)
    .map(product => product.price * 2); // Your code here
console.log("Doubled high prices:", doubledHighPrices);

// TODO 12: Get total price of electronics products
console.log("\n4.3 Get total price of electronics products:");
let electronicsTotal = products
    .filter(product => product.category === "Electronics")
    .reduce((sum, product) => sum + product.price, 0); // Your code here
console.log("Electronics total price:", electronicsTotal);

// Exercise 5: Complex Transformations
console.log("\n5. Complex Transformations:");
const students = [
    {name: "Alice", grades: [85, 92, 78, 96]},
    {name: "Bob", grades: [88, 91, 73, 89]},
    {name: "Charlie", grades: [94, 87, 91, 85]},
    {name: "Diana", grades: [76, 82, 88, 90]}
];

console.log("Students with grades:", students);

// TODO 13: Calculate average grade for each student
console.log("\n5.1 Calculate average grade for each student:");
let studentsWithAverages = students.map(student => ({
    name: student.name,
    average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
})); // Your code here
console.log("Students with averages:", studentsWithAverages);

// TODO 14: Find students with average above 85
console.log("\n5.2 Find students with average above 85:");
let highAchievers = studentsWithAverages.filter(student => student.average > 85); // Your code here
console.log("High achievers:", highAchievers);

// TODO 15: Get names of high achievers
console.log("\n5.3 Get names of high achievers:");
let highAchieverNames = highAchievers.map(student => student.name); // Your code here
console.log("High achiever names:", highAchieverNames);

// Exercise 6: Array Flattening
console.log("\n6. Array Flattening:");
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

console.log("Nested arrays:", nestedArrays);

// TODO 16: Flatten the nested arrays using reduce
console.log("\n6.1 Flatten using reduce:");
let flattened = nestedArrays.reduce((acc, arr) => acc.concat(arr), []); // Your code here
console.log("Flattened array:", flattened);

// TODO 17: Flatten using flat method (ES2019)
console.log("\n6.2 Flatten using flat method:");
let flattenedFlat = nestedArrays.flat(); // Your code here
console.log("Flattened with flat():", flattenedFlat);

// Exercise 7: Grouping and Categorizing
console.log("\n7. Grouping and Categorizing:");
const items = [
    {name: "Apple", category: "Fruit", price: 1.5},
    {name: "Banana", category: "Fruit", price: 0.8},
    {name: "Carrot", category: "Vegetable", price: 0.6},
    {name: "Broccoli", category: "Vegetable", price: 2.0},
    {name: "Orange", category: "Fruit", price: 1.2}
];

console.log("Items:", items);

// TODO 18: Group items by category
console.log("\n7.1 Group items by category:");
let groupedByCategory = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(item);
    return groups;
}, {}); // Your code here
console.log("Grouped by category:", groupedByCategory);

// TODO 19: Calculate total price for each category
console.log("\n7.2 Calculate total price for each category:");
let categoryTotals = Object.keys(groupedByCategory).map(category => ({
    category: category,
    total: groupedByCategory[category].reduce((sum, item) => sum + item.price, 0)
})); // Your code here
console.log("Category totals:", categoryTotals);

// Exercise 8: Data Processing Pipeline
console.log("\n8. Data Processing Pipeline:");
const sales = [
    {product: "Laptop", quantity: 2, price: 999, date: "2023-01-15"},
    {product: "Phone", quantity: 1, price: 699, date: "2023-01-16"},
    {product: "Laptop", quantity: 1, price: 999, date: "2023-01-17"},
    {product: "Tablet", quantity: 3, price: 499, date: "2023-01-18"},
    {product: "Phone", quantity: 2, price: 699, date: "2023-01-19"}
];

console.log("Sales data:", sales);

// TODO 20: Calculate total revenue for each product
console.log("\n8.1 Calculate total revenue for each product:");
let productRevenue = sales.reduce((revenue, sale) => {
    const product = sale.product;
    const total = sale.quantity * sale.price;
    if (!revenue[product]) {
        revenue[product] = 0;
    }
    revenue[product] += total;
    return revenue;
}, {}); // Your code here
console.log("Product revenue:", productRevenue);

// TODO 21: Find the best selling product
console.log("\n8.2 Find the best selling product:");
let bestSellingProduct = Object.keys(productRevenue).reduce((best, product) => 
    productRevenue[product] > productRevenue[best] ? product : best
); // Your code here
console.log("Best selling product:", bestSellingProduct);

// TODO 22: Get products with revenue above 1000
console.log("\n8.3 Get products with revenue above 1000:");
let highRevenueProducts = Object.keys(productRevenue).filter(product => 
    productRevenue[product] > 1000
); // Your code here
console.log("High revenue products:", highRevenueProducts);

// Exercise 9: Array Deduplication
console.log("\n9. Array Deduplication:");
const duplicateNumbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6];
const duplicateStrings = ["apple", "banana", "apple", "cherry", "banana", "date"];

console.log("Duplicate numbers:", duplicateNumbers);
console.log("Duplicate strings:", duplicateStrings);

// TODO 23: Remove duplicates from numbers array
console.log("\n9.1 Remove duplicates from numbers:");
let uniqueNumbers = [...new Set(duplicateNumbers)]; // Your code here
console.log("Unique numbers:", uniqueNumbers);

// TODO 24: Remove duplicates from strings array
console.log("\n9.2 Remove duplicates from strings:");
let uniqueStrings = [...new Set(duplicateStrings)]; // Your code here
console.log("Unique strings:", uniqueStrings);

// TODO 25: Remove duplicates using filter and indexOf
console.log("\n9.3 Remove duplicates using filter:");
let uniqueNumbersFilter = duplicateNumbers.filter((num, index) => 
    duplicateNumbers.indexOf(num) === index
); // Your code here
console.log("Unique numbers (filter):", uniqueNumbersFilter);

// Exercise 10: Advanced Transformations
console.log("\n10. Advanced Transformations:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);

// TODO 26: Transpose the matrix
console.log("\n10.1 Transpose the matrix:");
let transposedMatrix = matrix[0].map((_, colIndex) => 
    matrix.map(row => row[colIndex])
); // Your code here
console.log("Transposed matrix:", transposedMatrix);

// TODO 27: Flatten the matrix and calculate sum
console.log("\n10.2 Flatten matrix and calculate sum:");
let matrixSum = matrix.flat().reduce((sum, num) => sum + num, 0); // Your code here
console.log("Matrix sum:", matrixSum);

// TODO 28: Get diagonal elements
console.log("\n10.3 Get diagonal elements:");
let diagonalElements = matrix.map((row, index) => row[index]); // Your code here
console.log("Diagonal elements:", diagonalElements);

console.log("\n🎉 Congratulations! You've completed Exercise 4: Array Transformation!");
console.log("You now understand how to transform arrays using map, filter, and reduce!");
