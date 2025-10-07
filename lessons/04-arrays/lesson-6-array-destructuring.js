// Lesson 6: Array Destructuring
// This file teaches array destructuring and modern syntax

console.log("📦 Welcome to Arrays Lesson 6: Array Destructuring!");
console.log("==================================================");

// 1. Basic Array Destructuring
console.log("\n📚 1. Basic Array Destructuring");
console.log("-----------------------------");

let colors = ["red", "green", "blue"];
console.log("Colors array:", colors);

// Basic destructuring
let [firstColor, secondColor, thirdColor] = colors;
console.log("First color:", firstColor);
console.log("Second color:", secondColor);
console.log("Third color:", thirdColor);

// Destructuring with fewer variables
let [primary, secondary] = colors;
console.log("Primary:", primary, "Secondary:", secondary);

// Destructuring with more variables than array elements
let [a, b, c, d] = colors;
console.log("a:", a, "b:", b, "c:", c, "d:", d); // d is undefined

// 2. Skipping Elements
console.log("\n📚 2. Skipping Elements");
console.log("---------------------");

let numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);

// Skip middle elements
let [firstNum, , thirdNum, , fifthNum] = numbers;
console.log("First:", firstNum, "Third:", thirdNum, "Fifth:", fifthNum);

// Skip first elements
let [,,, fourthNum, lastNum] = numbers;
console.log("Fourth:", fourthNum, "Last:", lastNum);

// Skip last elements
let [startNum, secondNum] = numbers;
console.log("Start:", startNum, "Second:", secondNum);

// 3. Default Values
console.log("\n📚 3. Default Values");
console.log("------------------");

let shortArray = ["apple"];
console.log("Short array:", shortArray);

// Provide default values
let [fruit1, fruit2 = "banana", fruit3 = "orange"] = shortArray;
console.log("Fruit1:", fruit1);
console.log("Fruit2:", fruit2); // Uses default
console.log("Fruit3:", fruit3); // Uses default

// Default values with undefined elements
let mixedArray = ["hello", undefined, "world"];
let [greeting, middleVal = "default", ending] = mixedArray;
console.log("Greeting:", greeting);
console.log("Middle:", middleVal); // Uses default because undefined
console.log("Ending:", ending);

// 4. Rest Operator (...)
console.log("\n📚 4. Rest Operator (...)");
console.log("------------------------");

let items = ["laptop", "mouse", "keyboard", "monitor", "headphones"];
console.log("Items array:", items);

// Get first item and rest
let [firstItem, ...remainingItems] = items;
console.log("First item:", firstItem);
console.log("Remaining items:", remainingItems);

// Get first two items and rest
let [item1, item2, ...otherItems] = items;
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Other items:", otherItems);

// Rest operator with empty array
let [only, ...empty] = ["single"];
console.log("Only:", only);
console.log("Empty:", empty);

// 5. Swapping Variables
console.log("\n📚 5. Swapping Variables");
console.log("----------------------");

let x = 10;
let y = 20;
console.log("Before swap - x:", x, "y:", y);

// Swap using destructuring
[x, y] = [y, x];
console.log("After swap - x:", x, "y:", y);

// Swap multiple variables
let a2 = 1, b2 = 2, c2 = 3;
console.log("Before swap - a:", a2, "b:", b2, "c:", c2);

[a2, b2, c2] = [c2, a2, b2];
console.log("After swap - a:", a2, "b:", b2, "c:", c2);

// 6. Destructuring Function Parameters
console.log("\n📚 6. Destructuring Function Parameters");
console.log("------------------------------------");

// Function that returns an array
function getCoordinates() {
    return [10, 20, 30];
}

// Destructure return value
let [xCoord, yCoord, zCoord] = getCoordinates();
console.log("Coordinates - x:", xCoord, "y:", yCoord, "z:", zCoord);

// Function that takes destructured parameters
function processUser([name, age, city]) {
    console.log(`User: ${name}, Age: ${age}, City: ${city}`);
}

let userData = ["Alice", 25, "New York"];
processUser(userData);

// 7. Nested Array Destructuring
console.log("\n📚 7. Nested Array Destructuring");
console.log("-------------------------------");

let nestedArray = [1, [2, 3], 4];
console.log("Nested array:", nestedArray);

// Destructure nested array
let [firstNested, [nestedFirst, nestedSecond], lastNested] = nestedArray;
console.log("First:", firstNested);
console.log("Nested first:", nestedFirst);
console.log("Nested second:", nestedSecond);
console.log("Last:", lastNested);

// More complex nesting
let complexArray = [1, [2, [3, 4]], 5];
let [startNested, [middleNested, [deep1, deep2]], endNested] = complexArray;
console.log("Start:", startNested);
console.log("Middle:", middleNested);
console.log("Deep 1:", deep1);
console.log("Deep 2:", deep2);
console.log("End:", endNested);

// 8. Destructuring with Objects
console.log("\n📚 8. Destructuring with Objects");
console.log("-------------------------------");

// Array of objects
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Destructure array and object properties
let [{ name: firstPerson }, { name: secondPerson }, { name: thirdPerson }] = people;
console.log("First person:", firstPerson);
console.log("Second person:", secondPerson);
console.log("Third person:", thirdPerson);

// 9. Practical Example: API Response
console.log("\n📚 9. Practical Example: API Response");
console.log("-----------------------------------");

// Simulate API response
function getWeatherData() {
    return ["Sunny", 25, "Celsius", "Low humidity"];
}

let [condition, temperature, unit, humidity] = getWeatherData();
console.log(`Weather: ${condition}, ${temperature}°${unit}, ${humidity}`);

// Function that processes weather data
function displayWeather([condition, temp, unit, humidity]) {
    console.log(`Current weather: ${condition}`);
    console.log(`Temperature: ${temp}°${unit}`);
    console.log(`Humidity: ${humidity}`);
}

displayWeather(getWeatherData());

// 10. Practical Example: RGB Color Processing
console.log("\n📚 10. Practical Example: RGB Color Processing");
console.log("--------------------------------------------");

function getRGBColor() {
    return [255, 128, 64]; // Red, Green, Blue
}

let [red, green, blue] = getRGBColor();
console.log(`RGB Color - Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Convert RGB to hex
function rgbToHex([r, g, b]) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

let hexColor = rgbToHex(getRGBColor());
console.log("Hex color:", hexColor);

// 11. Practical Example: Student Data Processing
console.log("\n📚 11. Practical Example: Student Data Processing");
console.log("-----------------------------------------------");

function getStudentData() {
    return ["Alice", 95, 87, 92]; // name, math, science, english
}

let [studentName, mathGrade, scienceGrade, englishGrade] = getStudentData();
let average = (mathGrade + scienceGrade + englishGrade) / 3;

console.log(`Student: ${studentName}`);
console.log(`Math: ${mathGrade}, Science: ${scienceGrade}, English: ${englishGrade}`);
console.log(`Average: ${average.toFixed(2)}`);

// Function that processes student data
function processStudent([name, math, science, english]) {
    let average = (math + science + english) / 3;
    let grade = average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : "F";
    return { name, average: average.toFixed(2), grade };
}

let studentInfo = processStudent(getStudentData());
console.log("Student info:", studentInfo);

// 12. Advanced Destructuring Patterns
console.log("\n📚 12. Advanced Destructuring Patterns");
console.log("------------------------------------");

// Destructuring with computed property names
let index1 = 0, index2 = 1;
let array = ["first", "second", "third"];
let { [index1]: firstElem, [index2]: secondElem } = array;
console.log("First:", firstElem, "Second:", secondElem);

// Destructuring with string methods
function getFullName() {
    return ["John", "Doe"];
}

let [firstName, lastName] = getFullName();
let fullName = `${firstName} ${lastName}`;
console.log("Full name:", fullName);

// Destructuring with array methods
let numbers2 = [1, 2, 3, 4, 5];
let [head, ...tail] = numbers2;
console.log("Head:", head);
console.log("Tail:", tail);

// Destructuring with spread operator
let original = [1, 2, 3];
let [firstNumber, ...rest] = original;
let newArray = [firstNumber, ...rest, 4];
console.log("New array:", newArray);

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Array destructuring extracts values from arrays");
console.log("- Use commas to skip elements");
console.log("- Provide default values for undefined elements");
console.log("- Use rest operator (...) to collect remaining elements");
console.log("- Destructuring works with function parameters and return values");
console.log("- Can destructure nested arrays");
console.log("- Useful for swapping variables and processing data");

console.log("\n📝 Practice Exercises:");
console.log("1. Destructure an array to get first and last elements");
console.log("2. Use destructuring to swap two variables");
console.log("3. Destructure function return values");
console.log("4. Use rest operator to collect remaining elements");
console.log("5. Destructure nested arrays and objects");
