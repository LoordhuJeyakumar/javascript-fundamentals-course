// Exercise 4: Type Conversion
// Complete the TODO sections below

console.log("💪 Exercise 4: Type Conversion");
console.log("=============================");

// Exercise 1: String to Number Conversion
console.log("\n1. String to Number Conversion:");
let strNum = "123";
let strFloat = "45.67";
let strInvalid = "hello";

// TODO: Use Number() constructor
let num1 = null; // Your code here
// Hint: Number(strNum)

// TODO: Use parseInt()
let int1 = null; // Your code here
// Hint: parseInt(strNum)

// TODO: Use parseFloat()
let float1 = null; // Your code here
// Hint: parseFloat(strFloat)

// TODO: Use parseInt() with radix
let binaryNum = null; // Your code here
// Hint: parseInt("1010", 2)

// TODO: Use parseInt() with radix
let hexNum = null; // Your code here
// Hint: parseInt("FF", 16)

console.log("String to number conversion:");
console.log("Number('123'):", num1);
console.log("parseInt('123'):", int1);
console.log("parseFloat('45.67'):", float1);
console.log("parseInt('1010', 2):", binaryNum);
console.log("parseInt('FF', 16):", hexNum);

// Exercise 2: Number to String Conversion
console.log("\n2. Number to String Conversion:");
let num = 42;
let float = 3.14159;

// TODO: Use toString() method
let str1 = null; // Your code here
// Hint: num.toString()

// TODO: Use toString() with radix
let binaryStr = null; // Your code here
// Hint: num.toString(2)

// TODO: Use toString() with radix
let hexStr = null; // Your code here
// Hint: num.toString(16)

// TODO: Use String() constructor
let str2 = null; // Your code here
// Hint: String(num)

// TODO: Use template literal
let str3 = null; // Your code here
// Hint: `${num}`

console.log("Number to string conversion:");
console.log("42.toString():", str1);
console.log("42.toString(2):", binaryStr);
console.log("42.toString(16):", hexStr);
console.log("String(42):", str2);
console.log("`${42}`:", str3);

// Exercise 3: Boolean Conversion
console.log("\n3. Boolean Conversion:");
let truthyValues = [1, "hello", [], {}, true];
let falsyValues = [0, "", null, undefined, false, NaN];

// TODO: Use Boolean() constructor for truthy values
console.log("Truthy values:");
truthyValues.forEach(value => {
    let bool = null; // Your code here
    // Hint: Boolean(value)
    console.log(`Boolean(${JSON.stringify(value)}):`, bool);
});

// TODO: Use Boolean() constructor for falsy values
console.log("Falsy values:");
falsyValues.forEach(value => {
    let bool = null; // Your code here
    // Hint: Boolean(value)
    console.log(`Boolean(${JSON.stringify(value)}):`, bool);
});

// Exercise 4: Implicit Type Conversion
console.log("\n4. Implicit Type Conversion:");
let numA = 5;
let strA = "10";
let boolA = true;

// TODO: Demonstrate implicit conversion with addition
let implicitAdd1 = null; // Your code here
// Hint: numA + strA

let implicitAdd2 = null; // Your code here
// Hint: strA + numA

let implicitAdd3 = null; // Your code here
// Hint: numA + boolA

// TODO: Demonstrate implicit conversion with subtraction
let implicitSub1 = null; // Your code here
// Hint: numA - strA

let implicitSub2 = null; // Your code here
// Hint: strA - numA

let implicitSub3 = null; // Your code here
// Hint: numA - boolA

// TODO: Demonstrate implicit conversion with multiplication
let implicitMul1 = null; // Your code here
// Hint: numA * strA

let implicitMul2 = null; // Your code here
// Hint: strA * numA

let implicitMul3 = null; // Your code here
// Hint: numA * boolA

console.log("Implicit type conversion:");
console.log("5 + '10':", implicitAdd1);
console.log("'10' + 5:", implicitAdd2);
console.log("5 + true:", implicitAdd3);
console.log("5 - '10':", implicitSub1);
console.log("'10' - 5:", implicitSub2);
console.log("5 - true:", implicitSub3);
console.log("5 * '10':", implicitMul1);
console.log("'10' * 5:", implicitMul2);
console.log("5 * true:", implicitMul3);

// Exercise 5: Type Checking
console.log("\n5. Type Checking:");
let values = [42, "hello", true, null, undefined, [], {}];

// TODO: Use typeof operator
values.forEach(value => {
    let type = null; // Your code here
    // Hint: typeof value
    console.log(`${JSON.stringify(value)} is ${type}`);
});

// Exercise 6: Array to String Conversion
console.log("\n6. Array to String Conversion:");
let arr = [1, 2, 3, 4, 5];

// TODO: Use join() method
let joined1 = null; // Your code here
// Hint: arr.join()

// TODO: Use join() with separator
let joined2 = null; // Your code here
// Hint: arr.join("-")

// TODO: Use join() with separator
let joined3 = null; // Your code here
// Hint: arr.join(", ")

// TODO: Use toString() method
let toString = null; // Your code here
// Hint: arr.toString()

console.log("Array to string conversion:");
console.log("arr.join():", joined1);
console.log("arr.join('-'):", joined2);
console.log("arr.join(', '):", joined3);
console.log("arr.toString():", toString);

// Exercise 7: Object to String Conversion
console.log("\n7. Object to String Conversion:");
let obj = { name: "John", age: 30 };

// TODO: Use JSON.stringify()
let jsonStr = null; // Your code here
// Hint: JSON.stringify(obj)

// TODO: Use toString() method
let objStr = null; // Your code here
// Hint: obj.toString()

// TODO: Use String() constructor
let objStr2 = null; // Your code here
// Hint: String(obj)

console.log("Object to string conversion:");
console.log("JSON.stringify(obj):", jsonStr);
console.log("obj.toString():", objStr);
console.log("String(obj):", objStr2);

// Exercise 8: Date Conversion
console.log("\n8. Date Conversion:");
let now = new Date();

// TODO: Use toString() method
let dateStr1 = null; // Your code here
// Hint: now.toString()

// TODO: Use toISOString() method
let dateStr2 = null; // Your code here
// Hint: now.toISOString()

// TODO: Use toLocaleDateString() method
let dateStr3 = null; // Your code here
// Hint: now.toLocaleDateString()

// TODO: Use toLocaleTimeString() method
let dateStr4 = null; // Your code here
// Hint: now.toLocaleTimeString()

console.log("Date conversion:");
console.log("now.toString():", dateStr1);
console.log("now.toISOString():", dateStr2);
console.log("now.toLocaleDateString():", dateStr3);
console.log("now.toLocaleTimeString():", dateStr4);

// Exercise 9: Number Formatting
console.log("\n9. Number Formatting:");
let price = 1234.5678;

// TODO: Use toFixed() method
let fixed2 = null; // Your code here
// Hint: price.toFixed(2)

// TODO: Use toFixed() method
let fixed4 = null; // Your code here
// Hint: price.toFixed(4)

// TODO: Use toPrecision() method
let precision3 = null; // Your code here
// Hint: price.toPrecision(3)

// TODO: Use toPrecision() method
let precision6 = null; // Your code here
// Hint: price.toPrecision(6)

// TODO: Use toLocaleString() method
let localeStr = null; // Your code here
// Hint: price.toLocaleString()

console.log("Number formatting:");
console.log("price.toFixed(2):", fixed2);
console.log("price.toFixed(4):", fixed4);
console.log("price.toPrecision(3):", precision3);
console.log("price.toPrecision(6):", precision6);
console.log("price.toLocaleString():", localeStr);

// Exercise 10: Type Conversion Best Practices
console.log("\n10. Type Conversion Best Practices:");
let userInput = "42";
let userAge = "25";
let userScore = "85.5";

// TODO: Create a function that safely converts string to number
function safeStringToNumber(str) {
    if (null) { // Your code here
        // Hint: typeof str !== 'string'
        return null;
    }
    
    let num = null; // Your code here
    // Hint: Number(str)
    
    if (null) { // Your code here
        // Hint: isNaN(num)
        return null;
    }
    
    return num;
}

// TODO: Create a function that safely converts number to string
function safeNumberToString(num) {
    if (null) { // Your code here
        // Hint: typeof num !== 'number'
        return null;
    }
    
    if (null) { // Your code here
        // Hint: isNaN(num)
        return null;
    }
    
    return null; // Your code here
    // Hint: num.toString()
}

// TODO: Create a function that safely converts to boolean
function safeToBoolean(value) {
    if (null) { // Your code here
        // Hint: value === null
        return false;
    }
    
    if (null) { // Your code here
        // Hint: value === undefined
        return false;
    }
    
    if (null) { // Your code here
        // Hint: typeof value === 'string' && value.trim() === ''
        return false;
    }
    
    return null; // Your code here
    // Hint: Boolean(value)
}

console.log("Safe type conversion:");
console.log("safeStringToNumber('42'):", safeStringToNumber(userInput));
console.log("safeStringToNumber('hello'):", safeStringToNumber("hello"));
console.log("safeNumberToString(42):", safeNumberToString(42));
console.log("safeNumberToString('hello'):", safeNumberToString("hello"));
console.log("safeToBoolean('hello'):", safeToBoolean("hello"));
console.log("safeToBoolean(''):", safeToBoolean(""));
console.log("safeToBoolean(null):", safeToBoolean(null));

// Exercise 11: Type Coercion in Comparisons
console.log("\n11. Type Coercion in Comparisons:");
let val1 = 5;
let val2 = "5";
let val3 = true;
let val4 = 1;

// TODO: Use loose equality
let looseEqual1 = null; // Your code here
// Hint: val1 == val2

let looseEqual2 = null; // Your code here
// Hint: val3 == val4

// TODO: Use strict equality
let strictEqual1 = null; // Your code here
// Hint: val1 === val2

let strictEqual2 = null; // Your code here
// Hint: val3 === val4

// TODO: Use loose inequality
let looseNotEqual1 = null; // Your code here
// Hint: val1 != val2

let looseNotEqual2 = null; // Your code here
// Hint: val3 != val4

// TODO: Use strict inequality
let strictNotEqual1 = null; // Your code here
// Hint: val1 !== val2

let strictNotEqual2 = null; // Your code here
// Hint: val3 !== val4

console.log("Type coercion in comparisons:");
console.log("5 == '5':", looseEqual1);
console.log("true == 1:", looseEqual2);
console.log("5 === '5':", strictEqual1);
console.log("true === 1:", strictEqual2);
console.log("5 != '5':", looseNotEqual1);
console.log("true != 1:", looseNotEqual2);
console.log("5 !== '5':", strictNotEqual1);
console.log("true !== 1:", strictNotEqual2);

// Exercise 12: Type Conversion in Functions
console.log("\n12. Type Conversion in Functions:");
// TODO: Create a function that demonstrates type conversion
function demonstrateTypeConversion() {
    let inputs = ["123", "45.67", "hello", 42, true, null];
    
    inputs.forEach(input => {
        console.log(`\nInput: ${JSON.stringify(input)} (${typeof input})`);
        
        // TODO: Convert to number
        let num = null; // Your code here
        // Hint: Number(input)
        console.log(`Number(): ${num} (${typeof num})`);
        
        // TODO: Convert to string
        let str = null; // Your code here
        // Hint: String(input)
        console.log(`String(): ${str} (${typeof str})`);
        
        // TODO: Convert to boolean
        let bool = null; // Your code here
        // Hint: Boolean(input)
        console.log(`Boolean(): ${bool} (${typeof bool})`);
    });
}

demonstrateTypeConversion();

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced type conversion.");
console.log("Key concepts practiced:");
console.log("- String to number conversion (Number(), parseInt(), parseFloat())");
console.log("- Number to string conversion (toString(), String(), template literals)");
console.log("- Boolean conversion (Boolean())");
console.log("- Implicit type conversion");
console.log("- Type checking with typeof");
console.log("- Array to string conversion (join(), toString())");
console.log("- Object to string conversion (JSON.stringify(), toString())");
console.log("- Date conversion methods");
console.log("- Number formatting (toFixed(), toPrecision(), toLocaleString())");
console.log("- Safe type conversion practices");
console.log("- Type coercion in comparisons");
console.log("- Type conversion in functions");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Best Practices");
console.log("4. Ask questions if you need help");
