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

    console.log(`Converting RGB(${r}, ${g}, ${b}) to Hex`);
    console.log(r.toString(16));
    console.log(g.toString(16));
    console.log(b.toString(16));

    console.log(`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);

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
