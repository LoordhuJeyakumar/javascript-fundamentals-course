// Lesson 4: Array Transformation (map, filter, reduce)
// This file teaches array transformation methods

console.log("📦 Welcome to Arrays Lesson 4: Array Transformation!");
console.log("===================================================");

// 1. map() Method - Transform Each Element
console.log("\n📚 1. map() Method - Transform Each Element");
console.log("------------------------------------------");

let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

// Double each number
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Square each number
let squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

// Convert to strings
let stringNumbers = numbers.map(num => `Number: ${num}`);
console.log("String numbers:", stringNumbers);

// 2. map() with Objects
console.log("\n📚 2. map() with Objects");
console.log("----------------------");

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];
console.log("Original products:", products);

// Extract names only
let productNames = products.map(product => product.name);
console.log("Product names:", productNames);

// Add tax to prices
let productsWithTax = products.map(product => ({
    ...product,
    priceWithTax: product.price * 1.1
}));
console.log("Products with tax:", productsWithTax);

// Create price summaries
let priceSummaries = products.map(product => 
    `${product.name}: $${product.price}`
);
console.log("Price summaries:", priceSummaries);

// 3. filter() Method - Select Elements
console.log("\n📚 3. filter() Method - Select Elements");
console.log("--------------------------------------");

let scores = [85, 92, 78, 96, 88, 73, 90];
console.log("All scores:", scores);

// Filter passing scores (>= 80)
let passingScores = scores.filter(score => score >= 80);
console.log("Passing scores (>= 80):", passingScores);

// Filter high scores (>= 90)
let highScores = scores.filter(score => score >= 90);
console.log("High scores (>= 90):", highScores);

// Filter even numbers
let evenScores = scores.filter(score => score % 2 === 0);
console.log("Even scores:", evenScores);

// 4. filter() with Objects
console.log("\n📚 4. filter() with Objects");
console.log("--------------------------");

let employees = [
    { name: "Alice", department: "IT", salary: 75000 },
    { name: "Bob", department: "HR", salary: 65000 },
    { name: "Charlie", department: "IT", salary: 80000 },
    { name: "Diana", department: "Finance", salary: 70000 }
];
console.log("All employees:", employees);

// Filter IT employees
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT employees:", itEmployees);

// Filter high earners
let highEarners = employees.filter(emp => emp.salary > 70000);
console.log("High earners (> 70000):", highEarners);

// Filter employees with specific names
let specificEmployees = employees.filter(emp => 
    emp.name.startsWith("A") || emp.name.startsWith("C")
);
console.log("Employees with names starting with A or C:", specificEmployees);

// 5. reduce() Method - Aggregate Values = > reduce is used to reduce the array to a single value.
console.log("\n📚 5. reduce() Method - Aggregate Values");
console.log("---------------------------------------");

    let numbers2 = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers2);

// Sum all numbers
let sum = numbers2.reduce((total, num) => total + num, 10);
console.log("Sum:", sum);

// sum2 is the same as sum, but without the initial value of 0.
let sum2 = numbers2.reduce((total, num) => total + num);
console.log("Sum2:", sum2);

// Product of all numbers
let product = numbers2.reduce((total, num) => total * num, 1);
console.log("Product:", product);

// product2 is the same as product, but without the initial value of 1.
let product2 = numbers2.reduce((total, num) => total * num);
console.log("Product2:", product2);


// Find maximum number

let max = numbers2.reduce((max, num) => num > max ? num : max, numbers2[0]);

let minimum = numbers2.reduce((min, num) =>{
    min = numbers2[0];
    return num < min ? num : min;
}, numbers2[0]);

console.log("Maximum:", max);

// Count even numbers
let evenCount = numbers2.reduce((count, num) => 
    num % 2 === 0 ? count + 1 : count, 0
);
console.log("Even numbers count:", evenCount);

// 6. reduce() with Objects
console.log("\n📚 6. reduce() with Objects");
console.log("--------------------------");

let sales = [
    { month: "January", amount: 1000 },
    { month: "February", amount: 1500 },
    { month: "March", amount: 1200 },
    { month: "April", amount: 1800 }
];
console.log("Sales data:", sales);

// Calculate total sales
let totalSales = sales.reduce((total, sale) => total + sale.amount, 0);
console.log("Total sales:", totalSales);

// Find best month
let bestMonth = sales.reduce((best, sale) => 
    sale.amount > best.amount ? sale : best
);
console.log("Best month:", bestMonth);

// Group by amount ranges
let groupedSales = sales.reduce((groups, sale) => {
    let range = sale.amount >= 1500 ? "High" : "Low";
    if (!groups[range]) groups[range] = [];
    groups[range].push(sale);
    return groups;
}, {});
console.log("Grouped sales:", groupedSales);

// 7. Method Chaining
console.log("\n📚 7. Method Chaining");
console.log("--------------------");

let students = [
    { name: "Alice", grade: 95, subject: "Math" },
    { name: "Bob", grade: 87, subject: "Science" },
    { name: "Charlie", grade: 92, subject: "Math" },
    { name: "Diana", grade: 78, subject: "English" },
    { name: "Eve", grade: 96, subject: "Science" }
];
console.log("All students:", students);

// In a Node.js script, you can get input from the user using the 'readline' module.
// Here's an example of how you might ask the user for a subject and print matching student names:

// Uncomment below to try user input (in Node.js):

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter subject to list student names (math, science, english): ', (input) => {
    let subject = input.trim().toLowerCase();
    let subjectNames = students
        .filter(student => student.subject.toLowerCase() === subject)
        .map(student => student.name)
        .sort();
    if (subjectNames.length > 0) {
        console.log(`${subject.charAt(0).toUpperCase() + subject.slice(1)} student names (sorted):`, subjectNames);
    } else {
        console.log('Invalid input or no students found for this subject.');
    }
    rl.close();
});



const cliInput = process.argv[2];
if (cliInput === "math") {
    let mathStudentNames = students
        .filter(student => student.subject === "Math")
        .map(student => student.name)
        .sort();
    console.log("Math student names (sorted):", mathStudentNames);
} else if (cliInput === "science") {
    let scienceStudentNames = students
        .filter(student => student.subject === "Science")
        .map(student => student.name)
        .sort();
    console.log("Science student names (sorted):", scienceStudentNames);
} else if (cliInput === "english") {
    let englishStudentNames = students
        .filter(student => student.subject === "English")
        .map(student => student.name)
        .sort();
    console.log("English student names (sorted):", englishStudentNames);
} else {
    console.log("Invalid input, please enter math, science, or english");
}


// Chain: filter Math students, get names, sort alphabetically
let mathStudentNames = students
    .filter(student => student.subject === "Math")
    .map(student => student.name)
    .sort();
console.log("Math student names (sorted):", mathStudentNames);

// Chain: filter high grades, calculate average
let highGradeStudents = students.filter(student => student.grade >= 90);
let averageHighGrade = highGradeStudents.reduce((sum, student) => 
    sum + student.grade, 0) / highGradeStudents.length;
console.log("Average of high grades:", averageHighGrade.toFixed(2));

// 8. Complex Data Processing
console.log("\n📚 8. Complex Data Processing");
console.log("---------------------------");

let orders = [
    { id: 1, customer: "Alice", items: ["laptop", "mouse"], total: 1025 },
    { id: 2, customer: "Bob", items: ["book", "pen"], total: 17 },
    { id: 3, customer: "Charlie", items: ["phone", "case"], total: 850 },
    { id: 4, customer: "Alice", items: ["keyboard"], total: 75 },
    { id: 5, customer: "Diana", items: ["tablet", "stylus"], total: 400 }
];
console.log("All orders:", orders);

// Find orders over $500
let bigOrders = orders.filter(order => order.total > 500);
console.log("Orders over $500:", bigOrders);

// Get unique customers
let uniqueCustomers = [...new Set(orders.map(order => order.customer))];
console.log("Unique customers:", uniqueCustomers);

// Calculate total revenue by customer
let revenueByCustomer = orders.reduce((revenue, order) => {
    if (!revenue[order.customer]) {
        revenue[order.customer] = 0;
    }
    revenue[order.customer] += order.total;
    return revenue;
}, {});
console.log("Revenue by customer:", revenueByCustomer);

// 9. Performance Considerations
console.log("\n📚 9. Performance Considerations");
console.log("-------------------------------");

let largeArray = Array.from({length: 1000}, (_, i) => i);
console.log("Large array length:", largeArray.length);

// Efficient: Use for loop for simple operations
console.time("for loop");
let forSum = 0;
for (let i = 0; i < largeArray.length; i++) {
    forSum += largeArray[i];
}
console.timeEnd("for loop");

// Less efficient: Use reduce for simple operations
console.time("reduce");
let reduceSum = largeArray.reduce((sum, num) => sum + num, 0);
console.timeEnd("reduce");

console.log("Both sums are equal:", forSum === reduceSum);

// 10. Practical Example: E-commerce Analytics
console.log("\n📚 10. Practical Example: E-commerce Analytics");
console.log("--------------------------------------------");

let products3 = [
    { name: "Laptop", price: 1000, category: "Electronics", sold: 5 },
    { name: "Mouse", price: 25, category: "Electronics", sold: 20 },
    { name: "Book", price: 15, category: "Education", sold: 50 },
    { name: "Pen", price: 2, category: "Office", sold: 100 },
    { name: "Phone", price: 800, category: "Electronics", sold: 8 }
];
console.log("Products:", products3);

// Calculate revenue for each product
let productsWithRevenue = products3.map(product => ({
    ...product,
    revenue: product.price * product.sold
}));
console.log("Products with revenue:", productsWithRevenue);

// Find best-selling products (sold > 20)
let bestSellers = products3.filter(product => product.sold > 20);
console.log("Best sellers:", bestSellers);

// Calculate total revenue
let totalRevenue = productsWithRevenue.reduce((total, product) => 
    total + product.revenue, 0
);
console.log("Total revenue:", totalRevenue);

// Group by category
let byCategory = products3.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
}, {});
console.log("Products by category:", byCategory);

// 11. Advanced reduce() Patterns
console.log("\n📚 11. Advanced reduce() Patterns");
console.log("--------------------------------");

let data = [
    { type: "fruit", name: "apple", count: 5 },
    { type: "fruit", name: "banana", count: 3 },
    { type: "vegetable", name: "carrot", count: 8 },
    { type: "fruit", name: "orange", count: 2 },
    { type: "vegetable", name: "broccoli", count: 4 }
];

// Transform array to object
let dataAsObject = data.reduce((obj, item) => {
    obj[item.name] = item.count;
    return obj;
}, {});
console.log("Data as object:", dataAsObject);

// Group and count by type
let countByType = data.reduce((counts, item) => {
    counts[item.type] = (counts[item.type] || 0) + item.count;
    return counts;
}, {});
console.log("Count by type:", countByType);

// 12. Error Handling in Array Methods
console.log("\n📚 12. Error Handling in Array Methods");
console.log("-------------------------------------");

let mixedData = [1, "hello", null, 5, undefined, 8];
console.log("Mixed data:", mixedData);

// Safe number processing
let safeNumbers = mixedData
    .filter(item => typeof item === 'number' && !isNaN(item))
    .map(num => num * 2);
console.log("Safe processed numbers:", safeNumbers);

// Safe object processing
let objects = [
    { value: 10 },
    { value: "invalid" },
    { value: 20 },
    null,
    { value: 30 }
];

let validValues = objects
    .filter(obj => obj && typeof obj.value === 'number')
    .map(obj => obj.value * 2);
console.log("Valid processed values:", validValues);

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- map() transforms each element and returns new array");
console.log("- filter() selects elements that meet criteria");
console.log("- reduce() aggregates values into single result");
console.log("- Method chaining allows complex data processing");
console.log("- Use appropriate method for each task");
console.log("- Consider performance for large datasets");
console.log("- Handle errors and edge cases gracefully");

console.log("\n📝 Practice Exercises:");
console.log("1. Use map to transform an array of numbers");
console.log("2. Use filter to select elements meeting criteria");
console.log("3. Use reduce to calculate totals and averages");
console.log("4. Chain methods together for complex operations");
console.log("5. Process arrays of objects with transformation methods");
