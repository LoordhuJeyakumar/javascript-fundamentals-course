// Exercise 2: For...of and For...in Loops
// Complete the TODO sections below

console.log("💪 Exercise 2: For...of and For...in Loops");
console.log("==========================================");

// TODO 1: Use for...of to print all elements of an array
console.log("\n1. Print all elements using for...of:");
let colors = ["red", "green", "blue", "yellow"];
// Your code here
// Hint: Use for (let color of colors)

// TODO 2: Use for...of to calculate the sum of an array
console.log("\n2. Calculate sum using for...of:");
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
// Your code here
// Hint: Use for (let number of numbers) and add to sum
console.log(`Sum: ${sum}`);

// TODO 3: Use for...of to find the longest word in an array
console.log("\n3. Find longest word using for...of:");
let words = ["apple", "banana", "cherry", "dragonfruit"];
let longestWord = "";
// Your code here
// Hint: Compare word.length with longestWord.length
console.log(`Longest word: ${longestWord}`);

// TODO 4: Use for...of to count how many words start with 'a'
console.log("\n4. Count words starting with 'a':");
let fruits = ["apple", "banana", "apricot", "orange", "avocado"];
let countA = 0;
// Your code here
// Hint: Check if fruit[0] === 'a' or fruit.startsWith('a')
console.log(`Words starting with 'a': ${countA}`);

// TODO 5: Use for...of to create a new array with doubled values
console.log("\n5. Create array with doubled values:");
let originalNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
// Your code here
// Hint: Use doubledNumbers.push(number * 2)
console.log(`Original: ${originalNumbers}`);
console.log(`Doubled: ${doubledNumbers}`);

// TODO 6: Use for...of to find the average of numbers
console.log("\n6. Find average of numbers:");
let scores = [85, 92, 78, 96, 88];
let total = 0;
let count = 0;
// Your code here
// Hint: Add each score to total and increment count
let average = total / count;
console.log(`Average: ${average}`);

// TODO 7: Use for...of to check if all numbers are positive
console.log("\n7. Check if all numbers are positive:");
let values = [5, 3, 8, 1, 9];
let allPositive = true;
// Your code here
// Hint: If any value < 0, set allPositive = false
console.log(`All positive: ${allPositive}`);

// TODO 8: Use for...of to find the first even number
console.log("\n8. Find first even number:");
let numbers2 = [1, 3, 5, 8, 9, 12];
let firstEven = null;
// Your code here
// Hint: Check if number % 2 === 0 and break if found
console.log(`First even number: ${firstEven}`);

// TODO 9: Use for...in to print object properties
console.log("\n9. Print object properties using for...in:");
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};
// Your code here
// Hint: Use for (let key in person) and print key and person[key]

// TODO 10: Use for...in to count object properties
console.log("\n10. Count object properties:");
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    mileage: 25000
};
let propertyCount = 0;
// Your code here
// Hint: Increment propertyCount for each property
console.log(`Number of properties: ${propertyCount}`);

// TODO 11: Use for...in to find the longest property value
console.log("\n11. Find longest property value:");
let animal = {
    name: "Elephant",
    species: "African Elephant",
    habitat: "Savanna",
    diet: "Herbivore"
};
let longestValue = "";
let longestKey = "";
// Your code here
// Hint: Compare animal[key].length with longestValue.length
console.log(`Longest property: ${longestKey} = ${longestValue}`);

// TODO 12: Use for...in to create a new object with uppercase values
console.log("\n12. Create object with uppercase values:");
let originalObject = {
    greeting: "hello",
    message: "world",
    status: "active"
};
let uppercaseObject = {};
// Your code here
// Hint: Use uppercaseObject[key] = originalObject[key].toUpperCase()
console.log("Original:", originalObject);
console.log("Uppercase:", uppercaseObject);

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Excellent work! You've practiced for...of and for...in loops.");
console.log("Key concepts practiced:");
console.log("- for...of loops for arrays and iterables");
console.log("- for...in loops for object properties");
console.log("- Array manipulation with for...of");
console.log("- Object property access with for...in");
console.log("- Finding values and creating new data structures");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different data");
console.log("3. Move on to Exercise 3: Array Methods");
console.log("4. Ask questions if you need help");