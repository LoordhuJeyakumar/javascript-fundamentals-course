// Ex 1: Map Method
console.log("\n1. Map Method:");
const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

console.log("\n1.1 Double each number:");
const doubledNumbers = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubledNumbers);

console.log("\n1.2 Convert to strings:");
const stringNumbers = numbers.map(String);
console.log("String numbers:", stringNumbers);

console.log("\n1.3 Create objects with number and square:");
const numberSquares = numbers.map(n => ({ number: n, square: n ** 2 }));
console.log("Number squares:", numberSquares);

// Ex 2: Filter Method
console.log("\n2. Filter Method:");
const scores = [85, 92, 78, 96, 88, 91, 73, 89, 94, 87];
console.log("Original scores:", scores);

console.log("\n2.1 Filter scores above 90:");
const highScores = scores.filter(score => score > 90);
console.log("High scores (>90):", highScores);

console.log("\n2.2 Filter even scores:");
const evenScores = scores.filter(score => score % 2 === 0);
console.log("Even scores:", evenScores);

console.log("\n2.3 Filter scores between 80 and 90:");
const mediumScores = scores.filter(score => score >= 80 && score <= 90);
console.log("Medium scores (80-90):", mediumScores);

// Ex 3: Reduce Method
console.log("\n3. Reduce Method:");
const prices = [10, 20, 30, 40, 50];
console.log("Original prices:", prices);

console.log("\n3.1 Calculate sum of prices:");
const totalPrice = prices.reduce((sum, p) => sum + p, 0);
console.log("Total price:", totalPrice);

console.log("\n3.2 Find maximum price:");
const maxPrice = Math.max(...prices);
console.log("Maximum price:", maxPrice);

console.log("\n3.3 Count prices above 25:");
const countAbove25 = prices.filter(p => p > 25).length;
console.log("Count of prices above 25:", countAbove25);

// Ex 4: Method Chaining
console.log("\n4. Method Chaining:");
const products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Book", price: 15, category: "Education" },
    { name: "Phone", price: 699, category: "Electronics" },
    { name: "Pen", price: 2, category: "Office" },
    { name: "Tablet", price: 499, category: "Electronics" }
];
console.log("Original products:", products);

console.log("\n4.1 Get names of electronics products:");
const electronicsNames = products
    .filter(p => p.category === "Electronics")
    .map(p => p.name);
console.log("Electronics names:", electronicsNames);

console.log("\n4.2 Get prices above 100, then double them:");
const doubledHighPrices = products
    .filter(p => p.price > 100)
    .map(p => p.price * 2);
console.log("Doubled high prices:", doubledHighPrices);

console.log("\n4.3 Get total price of electronics products:");
const electronicsTotal = products
    .filter(p => p.category === "Electronics")
    .reduce((sum, p) => sum + p.price, 0);
console.log("Electronics total price:", electronicsTotal);

// Ex 5: Complex Transformations
console.log("\n5. Complex Transformations:");
const students = [
    { name: "Alice", grades: [85, 92, 78, 96] },
    { name: "Bob", grades: [88, 91, 73, 89] },
    { name: "Charlie", grades: [94, 87, 91, 85] },
    { name: "Diana", grades: [76, 82, 88, 90] }
];
console.log("Students with grades:", students);

console.log("\n5.1 Calculate average grade for each student:");
const studentsWithAverages = students.map(({ name, grades }) => ({
    name,
    average: grades.reduce((a, b) => a + b, 0) / grades.length
}));
console.log("Students with averages:", studentsWithAverages);

console.log("\n5.2 Find students with average above 85:");
const highAchievers = studentsWithAverages.filter(s => s.average > 85);
console.log("High achievers:", highAchievers);

console.log("\n5.3 Get names of high achievers:");
const highAchieverNames = highAchievers.map(s => s.name);
console.log("High achiever names:", highAchieverNames);

// Ex 6: Array Flattening
console.log("\n6. Array Flattening:");
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
console.log("Nested arrays:", nestedArrays);

console.log("\n6.1 Flatten using reduce:");
const flattened = nestedArrays.reduce((acc, curr) => [...acc, ...curr], []);
console.log("Flattened array:", flattened);

console.log("\n6.2 Flatten using flat method:");
const flattenedFlat = nestedArrays.flat();
console.log("Flattened with flat():", flattenedFlat);

// Ex 7: Grouping and Categorizing
console.log("\n7. Grouping and Categorizing:");
const items = [
    { name: "Apple", category: "Fruit", price: 1.5 },
    { name: "Banana", category: "Fruit", price: 0.8 },
    { name: "Carrot", category: "Vegetable", price: 0.6 },
    { name: "Broccoli", category: "Vegetable", price: 2.0 },
    { name: "Orange", category: "Fruit", price: 1.2 }
];
console.log("Items:", items);

console.log("\n7.1 Group items by category:");
const groupedByCategory = items.reduce((acc, item) => {
    acc[item.category] ??= [];
    acc[item.category].push(item);
    return acc;
}, {});
console.log("Grouped by category:", groupedByCategory);

console.log("\n7.2 Calculate total price for each category:");
const categoryTotals = Object.entries(groupedByCategory).map(([category, items]) => ({
    category,
    total: items.reduce((sum, item) => sum + item.price, 0)
}));
console.log("Category totals:", categoryTotals);

// Ex 8: Data Processing Pipeline
console.log("\n8. Data Processing Pipeline:");
const sales = [
    { product: "Laptop", quantity: 2, price: 999, date: "2023-01-15" },
    { product: "Phone", quantity: 1, price: 699, date: "2023-01-16" },
    { product: "Laptop", quantity: 1, price: 999, date: "2023-01-17" },
    { product: "Tablet", quantity: 3, price: 499, date: "2023-01-18" },
    { product: "Phone", quantity: 2, price: 699, date: "2023-01-19" }
];
console.log("Sales data:", sales);

console.log("\n8.1 Calculate total revenue for each product:");
const productRevenue = sales.reduce((acc, { product, quantity, price }) => {
    acc[product] = (acc[product] ?? 0) + quantity * price;
    return acc;
}, {});
console.log("Product revenue:", productRevenue);

console.log("\n8.2 Find the best selling product:");
const bestSellingProduct = Object.entries(productRevenue).reduce(
    (best, [product, revenue]) => revenue > best.revenue ? { product, revenue } : best,
    { product: "", revenue: 0 }
).product;
console.log("Best selling product:", bestSellingProduct);

console.log("\n8.3 Get products with revenue above 1000:");
const highRevenueProducts = Object.entries(productRevenue)
    .filter(([, revenue]) => revenue > 1000)
    .map(([product]) => product);
console.log("High revenue products:", highRevenueProducts);

// Ex 9: Array Deduplication
console.log("\n9. Array Deduplication:");
const duplicateNumbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6];
const duplicateStrings = ["apple", "banana", "apple", "cherry", "banana", "date"];
console.log("Duplicate numbers:", duplicateNumbers);
console.log("Duplicate strings:", duplicateStrings);

console.log("\n9.1 Remove duplicates from numbers:");
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log("Unique numbers:", uniqueNumbers);

console.log("\n9.2 Remove duplicates from strings:");
const uniqueStrings = [...new Set(duplicateStrings)];
console.log("Unique strings:", uniqueStrings);

console.log("\n9.3 Remove duplicates using filter:");
const uniqueNumbersFilter = duplicateNumbers.filter(
    (num, idx, arr) => arr.indexOf(num) === idx
);
console.log("Unique numbers (filter):", uniqueNumbersFilter);
// Ex 10: Advanced Transformations
console.log("\n10. Advanced Transformations:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);

console.log("\n10.1 Transpose the matrix:");
const transposedMatrix = matrix[0].map((_, colIdx) =>
    matrix.map(row => row[colIdx])
);
console.log("Transposed matrix:", transposedMatrix);

console.log("\n10.2 Flatten matrix and calculate sum:");
const matrixSum = matrix.flat().reduce((sum, val) => sum + val, 0);
console.log("Matrix sum:", matrixSum);

console.log("\n10.3 Get diagonal elements:");
const diagonalElements = matrix.map((row, i) => row[i]);
console.log("Diagonal elements:", diagonalElements);