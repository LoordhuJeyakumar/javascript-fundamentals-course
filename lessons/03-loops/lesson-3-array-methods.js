// Lesson 3: Array Methods (forEach, map, filter, reduce)
// This file teaches modern array iteration methods

console.log("🔄 Welcome to Loops Lesson 3: Array Methods!");
console.log("===========================================");

// 1. forEach Method
console.log("\n📚 1. forEach Method");
console.log("-------------------");

let fruits = ["apple", "banana", "orange", "grape"];
console.log("Fruits using forEach:");
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// 2. forEach vs For Loop
console.log("\n📚 2. forEach vs For Loop");
console.log("------------------------");

let numbers = [1, 2, 3, 4, 5];
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number: ${numbers[i]}`);
}

console.log("Using forEach:");
numbers.forEach(number => {
    console.log(`Number: ${number}`);
});

// 3. map Method = > transform each element and return a new array
console.log("\n📚 3. map Method");
console.log("----------------");

let prices = [10, 20, 30, 40];
console.log("Original prices:", prices);

let doubledPrices = prices.map(price => price * 2);
console.log("Doubled prices:", doubledPrices);

let pricesWithTax = prices.map(price => price * 1.1);
console.log("Prices with tax:", pricesWithTax);

// 4. map with Objects
console.log("\n📚 4. map with Objects");
console.log("--------------------");

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

let productNames = products.map(product => product.name);
console.log("Product names:", productNames);

let expensiveProducts = products.map(product => ({
    ...product,
    price: product.price * 1.2
}));
console.log("Expensive products:", expensiveProducts);

// 5. filter Method => select elements that meet criteria and return a new array
console.log("\n📚 5. filter Method");
console.log("------------------");

let scores = [85, 92, 78, 96, 88, 73, 90];
console.log("All scores:", scores);

let passingScores = scores.filter(score => score >= 80);
console.log("Passing scores (>=80):", passingScores);

let highScores = scores.filter(score => score >= 90);
console.log("High scores (>=90):", highScores);

// 6. filter with Objects
console.log("\n📚 6. filter with Objects");
console.log("------------------------");

let employees = [
    { name: "Alice", department: "IT", salary: 75000 },
    { name: "Bob", department: "HR", salary: 65000 },
    { name: "Charlie", department: "IT", salary: 80000 },
    { name: "Diana", department: "Finance", salary: 70000 }
];

let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT employees:", itEmployees);

let highEarners = employees.filter(emp => emp.salary > 70000);
console.log("High earners:", highEarners);

// 7. reduce Method => combine elements into single value and return a new array
// Detailed explanation:
// 1. The reduce method takes a callback function and an initial value.
// 2. The callback function takes two arguments: the accumulator and the current element.
// 3. The accumulator is the value that is returned from the previous iteration.
// 4. The current element is the value that is being processed.
// 5. The initial value is the value that is returned from the first iteration.
// 6. The reduce method returns a single value.


console.log("\n📚 7. reduce Method");
console.log("------------------");

let numbers2 = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers2);

let sum = numbers2.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

let product = numbers2.reduce((total, num) => total * num, 1);
console.log("Product:", product);

// 8. reduce with Objects
console.log("\n📚 8. reduce with Objects");
console.log("------------------------");

let sales = [
    { month: "January", amount: 1000 },
    { month: "February", amount: 1500 },
    { month: "March", amount: 1200 }
];

let totalSales = sales.reduce((total, sale) => total + sale.amount, 0);
console.log("Total sales:", totalSales);

let averageSales = totalSales / sales.length;
console.log("Average sales:", averageSales);

// 9. find and findIndex Methods => find first element that meets criteria and retun the element
console.log("\n📚 9. find and findIndex Methods");
console.log("--------------------------------");

let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

let user = users.find(u => u.age > 28);
console.log("User older than 28:", user);

let userIndex = users.findIndex(u => u.name === "Bob");
console.log("Index of Bob:", userIndex);

// 10. some and every Methods => check if any/all elements meet criteria and return a boolean
console.log("\n📚 10. some and every Methods");
console.log("-----------------------------");

let ages = [25, 30, 35, 40, 15];
console.log("Ages:", ages);
//some method will return true if any of the elements meet the criteria
let hasAdult = ages.some(age => age >= 18); 
console.log("Has adult (>=18):", hasAdult);

//every method will return true if all of the elements meet the criteria
let allAdults = ages.every(age => age >= 18);
console.log("All adults (>=18):", allAdults);

// 11. Practical Example: Data Processing Pipeline
console.log("\n📚 11. Practical Example: Data Processing Pipeline");
console.log("--------------------------------------------------");

let students = [
    { name: "Alice", grade: 95, subject: "Math" },
    { name: "Bob", grade: 87, subject: "Science" },
    { name: "Charlie", grade: 92, subject: "Math" },
    { name: "Diana", grade: 78, subject: "English" },
    { name: "Eve", grade: 96, subject: "Science" }
];

// Filter Math students, get their names, and calculate average
let mathStudents = students.filter(s => s.subject === "Math");
let mathNames = mathStudents.map(s => s.name);
let mathGrades = mathStudents.map(s => s.grade);
let mathAverage = mathGrades.reduce((sum, grade) => sum + grade, 0) / mathGrades.length;

console.log("Math students:", mathNames);
console.log("Math average grade:", mathAverage.toFixed(2));

// 12. Practical Example: Shopping Cart
console.log("\n📚 12. Practical Example: Shopping Cart");
console.log("--------------------------------------");

let cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
    { name: "Monitor", price: 300, quantity: 1 }
];

// Calculate total cost
let totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log("Total cost:", totalCost);

// Find expensive items
let expensiveItems = cart.filter(item => item.price > 100);
console.log("Expensive items:", expensiveItems);

// Get item names
let itemNames = cart.map(item => item.name);
console.log("Item names:", itemNames);

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- forEach: Iterate without returning anything");
console.log("- map: Transform each element and return new array");
console.log("- filter: Select elements that meet criteria");
console.log("- reduce: Combine elements into single value");
console.log("- find: Find first element that meets criteria");
console.log("- some/every: Check if any/all elements meet criteria");

console.log("\n📝 Practice Exercises:");
console.log("1. Use map to double all numbers in an array");
console.log("2. Use filter to find all even numbers");
console.log("3. Use reduce to find the sum of an array");
console.log("4. Use find to locate a specific object");
console.log("5. Chain methods together for complex operations");
