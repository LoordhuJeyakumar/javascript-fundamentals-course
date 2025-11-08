// Lesson 3: Array Search and Sort
// This file teaches array searching and sorting methods

console.log("📦 Welcome to Arrays Lesson 3: Array Search and Sort!");
console.log("=====================================================");

// 1. indexOf() and lastIndexOf() Methods
console.log("\n📚 1. indexOf() and lastIndexOf() Methods");
console.log("----------------------------------------");

let numbers = [1, 2, 3, 2, 4, 2, 5];
console.log("Numbers array:", numbers);

// Find first occurrence
let firstIndex = numbers.indexOf(2);
console.log("indexOf(2):", firstIndex);

// Find last occurrence
let lastIndex = numbers.lastIndexOf(2);
console.log("lastIndexOf(2):", lastIndex);

// Element not found
let notFound = numbers.indexOf(10);
console.log("indexOf(10):", notFound);

// Search from specific index = > start from index 2 and find the first occurrence of 2
let fromIndex = numbers.indexOf(2, 2);
console.log("indexOf(2, 2):", fromIndex);

// 2. includes() Method - Check Element Existence
console.log("\n📚 2. includes() Method - Check Element Existence");
console.log("------------------------------------------------");

let colors = ["red", "green", "blue", "yellow"];
console.log("Colors array:", colors);

console.log("includes('green'):", colors.includes("green"));
console.log("includes('purple'):", colors.includes("purple"));
console.log("includes('red', 1):", colors.includes("red", 1)); // Start from index 1

// 3. find() Method - Find First Matching Element = > find the first 
console.log("\n📚 3. find() Method - Find First Matching Element");
console.log("------------------------------------------------");

let students = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 87 },
    { name: "Charlie", grade: 92 },
    { name: "Diana", grade: 78 }
];
console.log("Students:", students);

// Find student with grade > 90
let topStudent = students.find(student => student.grade > 90);
console.log("Student with grade > 90:", topStudent);

// Find student by name
let charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// Find student with grade < 80
let strugglingStudent = students.find(student => student.grade < 80);
console.log("Student with grade < 80:", strugglingStudent);

// 4. findIndex() Method - Find Index of First Matching Element
console.log("\n📚 4. findIndex() Method - Find Index of First Matching Element");
console.log("------------------------------------------------------------");

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 }
];
console.log("Products:", products);

// Find index of expensive product
let expensiveIndex = products.findIndex(product => product.price > 500);
console.log("Index of expensive product:", expensiveIndex);

// Find index by name
let mouseIndex = products.findIndex(product => product.name === "Mouse");
console.log("Index of Mouse:", mouseIndex);

// 5. some() Method - Check if Any Element Matches
console.log("\n📚 5. some() Method - Check if Any Element Matches");
console.log("------------------------------------------------");

let ages = [25, 30, 35, 40, 45];
console.log("Ages:", ages);

console.log("Any age > 40:", ages.some(age => age > 40));
console.log("Any age < 20:", ages.some(age => age < 20));


const students2 = [
     { name: "Alice", grade: 95 },
    { name: "Bob", grade: 87 },
    { name: "Charlie", grade: 92 },
    { name: "Diana", grade: 78 }];
// Check if any student has grade A
let hasGradeA = students2.some(student => student.grade >= 90);
console.log("Any student has grade A:", hasGradeA);

// 6. every() Method - Check if All Elements Match
console.log("\n📚 6. every() Method - Check if All Elements Match");
console.log("------------------------------------------------");

let scores = [85, 92, 88, 90, 87];
console.log("Scores:", scores);

console.log("All scores >= 80:", scores.every(score => score >= 80));
console.log("All scores >= 90:", scores.every(score => score >= 90));

// Check if all students passed
let allPassed = students.every(student => student.grade >= 70);
console.log("All students passed:", allPassed);

// 7. Basic sort() Method
console.log("\n📚 7. Basic sort() Method");
console.log("------------------------");

let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Unsorted numbers:", unsortedNumbers);

let sortedNumbers = [...unsortedNumbers].sort(); // Copy to avoid modifying original
console.log("After sort():", sortedNumbers);

// Sort strings
let unsortedStrings = ["banana", "apple", "cherry", "date"];
console.log("Unsorted strings:", unsortedStrings);

let sortedStrings = [...unsortedStrings].sort();
console.log("After sort():", sortedStrings);

// 8. Custom Sort Functions
console.log("\n📚 8. Custom Sort Functions");
console.log("-------------------------");

let numbers2 = [10, 2, 40, 1, 5];
console.log("Numbers to sort:", numbers2);

console.log("Sort numerically (ascending):", numbers2.sort());

// Sort numerically (ascending)
let ascending = [...numbers2].sort((a, b) => a - b);
console.log("Ascending sort:", ascending);

// Sort numerically (descending)
let descending = [...numbers2].sort((a, b) => b - a);
console.log("Descending sort:", descending);

// Sort by string length
let words = ["apple", "pie", "banana", "kiwi"];
console.log("Words to sort:", words);

let byLength = [...words].sort((a, b) => a.length - b.length);
console.log("Sort by length:", byLength);

// 9. Sorting Objects
console.log("\n📚 9. Sorting Objects");
console.log("-------------------");

let employees = [
    { name: "Alice", salary: 75000, department: "IT" },
    { name: "Bob", salary: 65000, department: "HR" },
    { name: "Charlie", salary: 80000, department: "IT" },
    { name: "Diana", salary: 70000, department: "Finance" }
];
console.log("Employees:", employees);

// Sort by salary (ascending)
let bySalary = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Sort by salary (ascending):", bySalary);

// Sort by name (alphabetical) = > sort the employees by name in alphabetical order
// localeCompare is used to compare strings in a locale-sensitive way

/* 
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0


*/

let byName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sort by name:", byName);

// Sort by department, then by salary
let byDeptAndSalary = [...employees].sort((a, b) => {
    if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
    }
    return b.salary - a.salary; // Higher salary first within department
});
console.log("Sort by department, then salary:", byDeptAndSalary);

// 10. reverse() Method
console.log("\n📚 10. reverse() Method");
console.log("----------------------");

let original = [1, 2, 3, 4, 5];
console.log("Original array:", original);

let reversed = [...original].reverse();
console.log("Reversed array:", reversed);
console.log("Original array unchanged:", original);

// 11. Practical Example: Student Grade Management
console.log("\n📚 11. Practical Example: Student Grade Management");
console.log("--------------------------------------------------");

let studentGrades = [
    { name: "Alice", grade: 95, subject: "Math" },
    { name: "Bob", grade: 87, subject: "Science" },
    { name: "Charlie", grade: 92, subject: "Math" },
    { name: "Diana", grade: 78, subject: "English" },
    { name: "Eve", grade: 96, subject: "Science" }
];

console.log("All students:", studentGrades);

// Find top student
let topStudent2 = studentGrades.find(student => student.grade === Math.max(...studentGrades.map(s => s.grade)));
console.log("Top student:", topStudent2);

// Find students with grade A (>= 90)
let gradeAStudents = studentGrades.filter(student => student.grade >= 90);
console.log("Grade A students:", gradeAStudents);

// Check if all students passed (>= 70)
let allPassed2 = studentGrades.every(student => student.grade >= 70);
console.log("All students passed:", allPassed2);

// Sort by grade (descending)
let sortedByGrade = [...studentGrades].sort((a, b) => b.grade - a.grade);
console.log("Students sorted by grade:", sortedByGrade);

// 12. Practical Example: Product Search and Filter
console.log("\n📚 12. Practical Example: Product Search and Filter");
console.log("--------------------------------------------------");

let products2 = [
    { name: "Laptop", price: 1000, category: "Electronics", inStock: true },
    { name: "Mouse", price: 25, category: "Electronics", inStock: false },
    { name: "Book", price: 15, category: "Education", inStock: true },
    { name: "Pen", price: 2, category: "Office", inStock: true },
    { name: "Phone", price: 800, category: "Electronics", inStock: true }
];

console.log("All products:", products2);

// Find expensive products (> 500)
let expensiveProducts = products2.filter(product => product.price > 500);
console.log("Expensive products:", expensiveProducts);

// Find products in stock
let inStockProducts = products2.filter(product => product.inStock);
console.log("Products in stock:", inStockProducts);

// Find cheapest product
let cheapestProduct = products2.find(product => 
    product.price === Math.min(...products2.map(p => p.price))
);
console.log("Cheapest product:", cheapestProduct);

// Sort by price (ascending)
let sortedByPrice = [...products2].sort((a, b) => a.price - b.price);
console.log("Products sorted by price:", sortedByPrice);

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- indexOf() finds first occurrence of element");
console.log("- lastIndexOf() finds last occurrence of element");
console.log("- includes() checks if element exists in array");
console.log("- find() returns first element matching condition");
console.log("- findIndex() returns index of first matching element");
console.log("- some() checks if any element matches condition");
console.log("- every() checks if all elements match condition");
console.log("- sort() sorts array (use custom function for numbers)");
console.log("- reverse() reverses array order");

console.log("\n📝 Practice Exercises:");
console.log("1. Find the index of a specific element in an array");
console.log("2. Check if an array contains a certain value");
console.log("3. Find the first object that meets a condition");
console.log("4. Sort an array of numbers in ascending order");
console.log("5. Sort an array of objects by a specific property");
