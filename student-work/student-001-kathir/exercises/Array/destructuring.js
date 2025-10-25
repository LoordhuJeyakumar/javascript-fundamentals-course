// Ex 1: Basic Destructuring
console.log("\n1. Basic Destructuring:");
const colors = ["red", "green", "blue"];

console.log("Colors array:", colors);

// 1.1: Destructure the first three colors
console.log("\n1.1 Destructure first three colors:");
let [firstColor, secondColor, thirdColor] = colors;
console.log("First color:", firstColor);
console.log("Second color:", secondColor);
console.log("Third color:", thirdColor);

// 1.2: Destructure only the first two colors
console.log("\n1.2 Destructure first two colors:");
let [color1, color2] = colors;
console.log("Color 1:", color1);
console.log("Color 2:", color2);

// 1.3: Skip the second element and get first and third
console.log("\n1.3 Skip second element:");
let [firstElement, , thirdElement] = colors;
console.log("First:", firstElement);
console.log("Third:", thirdElement);

// Ex 2: Default Values
console.log("\n2. Default Values:");
const shortArray = ["apple"];

console.log("Short array:", shortArray);

// 2.1: Destructure with default values
console.log("\n2.1 Destructure with default values:");
let [fruit1 = "banana", fruit2 = "orange", fruit3 = "grape"] = shortArray;
console.log("Fruit 1:", fruit1);
console.log("Fruit 2:", fruit2);
console.log("Fruit 3:", fruit3);

// 2.2: Destructure from empty array with defaults
console.log("\n2.2 Destructure from empty array:");
let emptyArray = [];
let [firstItem = "default1", secondItem = "default2"] = emptyArray;
console.log("Item 1:", firstItem);
console.log("Item 2:", secondItem);

// Ex 3: Rest Operator
console.log("\n3. Rest Operator:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Numbers array:", numbers);

// 3.1: Get first two numbers and rest
console.log("\n3.1 Get first two and rest:");
let [num1, num2, ...restNumbers] = numbers;
console.log("First number:", num1);
console.log("Second number:", num2);
console.log("Rest numbers:", restNumbers);

// 3.2: Get first number and rest
console.log("\n3.2 Get first and rest:");
let [firstNum, ...remainingNumbers] = numbers;
console.log("First number:", firstNum);
console.log("Remaining numbers:", remainingNumbers);

// 3.3: Skip first two and get rest
console.log("\n3.3 Skip first two and get rest:");
let [, , ...skippedRest] = numbers;
console.log("Skipped rest:", skippedRest);

// Ex 4: Swapping Variables
console.log("\n4. Swapping Variables:");
let A = 10;
let B = 20;

console.log("Before swap - A:", A, "B:", B);

// 4.1: Swap variables using destructuring
console.log("\n4.1 Swap variables:");
[A, B] = [B, A];
console.log("After swap - A:", A, "B:", B);

// 4.2: Swap multiple variables
console.log("\n4.2 Swap multiple variables:");
let x = 1, y = 2, z = 3;
console.log("Before swap - x:", x, "y:", y, "z:", z);
[x, y, z] = [z, x, y];
console.log("After swap - x:", x, "y:", y, "z:", z);

// Ex 5: Nested Destructuring
console.log("\n5. Nested Destructuring:");
const nestedArray = [1, [2, 3], [4, [5, 6]]];

console.log("Nested array:", nestedArray);

// 5.1: Destructure nested arrays
console.log("\n5.1 Destructure nested arrays:");
let [first, [second, third], [fourth, [fifth, sixth]]] = nestedArray; // Your code here
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);
console.log("Fourth:", fourth);
console.log("Fifth:", fifth);
console.log("Sixth:", sixth);

// 5.2: Destructure with skipping in nested arrays
console.log("\n5.2 Destructure with skipping:");
let [item1, [, item3], [item4]] = nestedArray;
console.log("Item 1:", item1);
console.log("Item 3:", item3);
console.log("Item 4:", item4);

// Ex 6: Function Parameters
console.log("\n6. Function Parameters:");

// 6.1: Create function that accepts array and destructures it
console.log("\n6.1 Function with array destructuring:");
function processCoordinates([x, y, z = 0]) {
    console.log(`Coordinates: x=${x}, y=${y}, z=${z}`);
    return {x, y, z};
}

let Coordinates = [10, 20];
let result = processCoordinates(Coordinates);
console.log("Result:", result);

// 6.2: Create function with rest parameter
console.log("\n6.2 Function with rest parameter:");
function sumNumbers(first, ...rest) {
    let sum = first;
    for (let num of rest) {
        sum += num;
    }
    return sum;
}

let total = sumNumbers(1, 2, 3, 4, 5);
console.log("Sum:", total);

// Ex 7: Return Values
console.log("\n7. Return Values:");

// 7.1: Create function that returns array
console.log("\n7.1 Function returning array:");
function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [min, max];
}

let values = [5, 2, 8, 1, 9, 3];
let [minimum, maximum] = getMinMax(values);
console.log("Numbers:", values);
console.log("Minimum:", minimum);
console.log("Maximum:", maximum);

// 7.2: Create function returning multiple values
console.log("\n7.2 Function returning multiple values:");
function getStats(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [sum, average, min, max];
}

let [sum, average, min, max] = getStats(values);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Min:", min);
console.log("Max:", max);

// Ex 8: Object Destructuring with Arrays
console.log("\n8. Object Destructuring with Arrays:");
const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "swimming", "cooking"],
    address: {
        street: "123 Main St",
        city: "New York",
        coordinates: [40.7128, -74.0060]
    }
};

console.log("Person object:", person);

// 8.1: Destructure object with array properties
console.log("\n8.1 Destructure object with arrays:");
let {name, hobbies, address: {coordinates}} = person;
console.log("Name:", name);
console.log("Hobbies:", hobbies);
console.log("Coordinates:", coordinates);

// 8.2: Destructure nested array from object
console.log("\n8.2 Destructure nested array:");
let {address: {coordinates: [lat, lng]}} = person;
console.log("Latitude:", lat);
console.log("Longitude:", lng);

// Ex 9: Spread Operator
console.log("\n9. Spread Operator:");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

// 9.1: Combine arrays using spread
console.log("\n9.1 Combine arrays:");
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// 9.2: Add elements to existing array
console.log("\n9.2 Add elements:");
let newArray = [0, ...arr1, 3.5, ...arr2, 7];
console.log("New array:", newArray);

// 9.3: Copy array using spread
console.log("\n9.3 Copy array:");
let copiedArray = [...arr1];
console.log("Copied array:", copiedArray);
console.log("Are they the same object?", copiedArray === arr1);

// Ex 10: Advanced Destructuring Patterns
console.log("\n10. Advanced Destructuring Patterns:");
const complexArray = [
    {id: 1, name: "Alice", scores: [85, 92, 78]},
    {id: 2, name: "Bob", scores: [88, 91, 73]},
    {id: 3, name: "Charlie", scores: [94, 87, 91]}
];

console.log("Complex array:", complexArray);

// 10.1: Destructure first student's data
console.log("\n10.1 Destructure first student:");
let [firstStudent] = complexArray;
let {name: studentName, scores: studentScores} = firstStudent;
console.log("Student name:", studentName);
console.log("Student scores:", studentScores);

// 10.2: Destructure all students' names
console.log("\n10.2 Destructure all names:");
let [student1, student2, student3] = complexArray;
let names = [student1.name, student2.name, student3.name];
console.log("All names:", names);

// 10.3: Destructure with function
console.log("\n10.3 Destructure in function:");
function processStudent([{name, scores: [firstScore, ...otherScores]}]) {
    return {
        name,
        firstScore,
        otherScores,
        totalScores: otherScores.length + 1
    };
}

let studentInfo = processStudent(complexArray);
console.log("Student info:", studentInfo);

// Ex 11: Practical Applications
console.log("\n11. Practical Applications:");

// 11.1: Parse URL parameters
console.log("\n11.1 Parse URL parameters:");
function parseURL(url) {
    let [protocol, , domain, ...pathParts] = url.split('/');
    return {protocol, domain, path: pathParts.join('/')};
}

let url = "https://www.example.com/path/to/resource";
let {protocol, domain, path} = parseURL(url);
console.log("Protocol:", protocol);
console.log("Domain:", domain);
console.log("Path:", path);

// 11.2: Extract RGB values
console.log("\n11.2 Extract RGB values:");
function extractRGB(rgbString) {
    let [r, g, b] = rgbString.match(/\d+/g).map(Number);
    return {r, g, b};
}

let rgb = "rgb(255, 128, 64)";
let {r, g, b} = extractRGB(rgb);
console.log("Red:", r);
console.log("Green:", g);
console.log("Blue:", b);

// 11.3: Destructure command line arguments
console.log("\n11.3 Simulate command line arguments:");
let args = ["node", "script.js", "--verbose", "--output", "file.txt"];
let [command, script, ...flags] = args;
console.log("Command:", command);
console.log("Script:", script);
console.log("Flags:", flags);