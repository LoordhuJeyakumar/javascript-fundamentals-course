// Lesson 2: For...of and For...in Loops
// This file teaches modern loop syntax

console.log("🔄 Welcome to Loops Lesson 2: For...of and For...in Loops!");
console.log("=========================================================");

// 1. For...of Loop with Arrays
console.log("\n📚 1. For...of Loop with Arrays");
console.log("-------------------------------");

let colors = ["red", "green", "blue", "yellow"];
console.log("Colors using for...of:");
for (let color of colors) {
    console.log(`Color: ${color}`);
}

// 2. For...of vs Traditional For Loop
console.log("\n📚 2. For...of vs Traditional For Loop");
console.log("-------------------------------------");

let numbers = [10, 20, 30, 40];
console.log("Traditional for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

console.log("For...of loop:");
for (let number of numbers) {
    console.log(`Value: ${number}`);
}

// 3. For...of with Strings
console.log("\n📚 3. For...of with Strings");
console.log("---------------------------");

let word = "JavaScript";
console.log(`Letters in "${word}":`);
for (let letter of word) {
    console.log(`Letter: ${letter}`);
}

// 4. For...of with Sets
console.log("\n📚 4. For...of with Sets");
console.log("------------------------");

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log("Unique numbers using Set:");
for (let number of uniqueNumbers) {
    console.log(`Unique: ${number}`);
}

// 5. For...of with Maps
console.log("\n📚 5. For...of with Maps");
console.log("-----------------------");

let studentGrades = new Map([
    ["Alice", 95],
    ["Bob", 87],
    ["Charlie", 92]
]);

console.log("Student grades using Map:");
for (let [name, grade] of studentGrades) {
    console.log(`${name}: ${grade}`);
}

// 6. For...in Loop with Objects
console.log("\n📚 6. For...in Loop with Objects");
console.log("-------------------------------");

let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

console.log("Person properties using for...in:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 7. For...in with Arrays (Not Recommended)
console.log("\n📚 7. For...in with Arrays (Not Recommended)");
console.log("-------------------------------------------");

let fruits = ["apple", "banana", "orange"];
console.log("Array indices using for...in (not recommended):");
for (let index in fruits) {
    console.log(`Index ${index}: ${fruits[index]}`);
}

console.log("Better to use for...of:");
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// 8. For...in with Object Methods
console.log("\n📚 8. For...in with Object Methods");
console.log("----------------------------------");

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return "Engine started";
    }
};

console.log("Car properties (including methods):");
for (let property in car) {
    if (typeof car[property] === 'function') {
        console.log(`${property}: [Function]`);
    } else {
        console.log(`${property}: ${car[property]}`);
    }
}

// 9. Practical Example: Processing Array of Objects
console.log("\n📚 9. Practical Example: Processing Array of Objects");
console.log("---------------------------------------------------");

let students = [
    { name: "Alice", grade: 95, subject: "Math" },
    { name: "Bob", grade: 87, subject: "Science" },
    { name: "Charlie", grade: 92, subject: "English" }
];

console.log("Student information:");
for (let student of students) {
    console.log(`${student.name} got ${student.grade} in ${student.subject}`);
}

// 10. Practical Example: Object Property Validation
console.log("\n📚 10. Practical Example: Object Property Validation");
console.log("--------------------------------------------------");

function validateObject(obj, requiredProps) {
    let missingProps = [];
    
    for (let prop of requiredProps) {
        if (!(prop in obj)) {
            missingProps.push(prop);
        }
    }
    
    return missingProps;
}

let user = { name: "John", email: "john@example.com" };
let required = ["name", "email", "age"];
let missing = validateObject(user, required);

if (missing.length === 0) {
    console.log("All required properties are present");
} else {
    console.log(`Missing properties: ${missing.join(", ")}`);
}

// 11. Practical Example: Counting Characters
console.log("\n📚 11. Practical Example: Counting Characters");
console.log("---------------------------------------------");

function countCharacters(text) {
    let charCount = {};
    
    for (let char of text) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

let text = "hello";
let counts = countCharacters(text);
console.log(`Character counts in "${text}":`);
for (let char in counts) {
    console.log(`'${char}': ${counts[char]}`);
}

// 12. Practical Example: Object Transformation
console.log("\n📚 12. Practical Example: Object Transformation");
console.log("-----------------------------------------------");

function transformObject(obj, transformer) {
    let result = {};
    
    for (let key in obj) {
        result[key] = transformer(obj[key]);
    }
    
    return result;
}

let data = { a: 1, b: 2, c: 3 };
let doubled = transformObject(data, x => x * 2);
console.log("Original:", data);
console.log("Doubled:", doubled);

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use for...of for arrays, strings, sets, and maps");
console.log("- Use for...in for object properties");
console.log("- For...of gives you values directly");
console.log("- For...in gives you keys/indices");
console.log("- Modern loops are cleaner and more readable");

console.log("\n📝 Practice Exercises:");
console.log("1. Use for...of to print all elements of an array");
console.log("2. Use for...in to print all properties of an object");
console.log("3. Create a function that counts vowels in a string");
console.log("4. Create a function that finds the longest word in an array");
console.log("5. Create a function that transforms object values");
