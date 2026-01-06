// Lesson 2: Data Types
// This file teaches JavaScript data types and type checking

console.log("⚡ Welcome to JavaScript Basics Lesson 2: Data Types!");
console.log("==================================================");

// 1. Primitive Data Types
console.log("\n📚 1. Primitive Data Types");
console.log("-------------------------");

console.log("JavaScript has 6 primitive data types:");
console.log("1. number - Numeric values");
console.log("2. string - Text values");
console.log("3. boolean - True/false values");
console.log("4. null - Intentional absence of value");
console.log("5. undefined - Uninitialized variable");
console.log("6. symbol - Unique identifier (ES6)");

// Number type
let numberVar = 42;
let decimalVar = 3.14159;
let negativeVar = -15;
let scientificVar = 1.23e4; // 12300
let infinityVar = Infinity;
let nanVar = NaN;

console.log("Number examples:");
console.log("Integer:", numberVar, typeof numberVar);
console.log("Decimal:", decimalVar, typeof decimalVar);
console.log("Negative:", negativeVar, typeof negativeVar);
console.log("Scientific:", scientificVar, typeof scientificVar);
console.log("Infinity:", infinityVar, typeof infinityVar);
console.log("NaN:", nanVar, typeof nanVar);

// String type
let stringVar = "Hello, World!";
let singleQuoteVar = 'Single quotes';
let templateVar = `Template literal with ${numberVar}`; // Template literals are a new way to create strings in ES6 => `${variable}`
let multilineVar = `This is a
multiline string`; // Multiline strings are a new way to create strings in ES6 => `string`

console.log("String examples:");
console.log("Double quotes:", stringVar, typeof stringVar);
console.log("Single quotes:", singleQuoteVar, typeof singleQuoteVar);
console.log("Template literal:", templateVar, typeof templateVar);
console.log("Multiline:", multilineVar, typeof multilineVar);

// Boolean type
let trueVar = true;
let falseVar = false;
let booleanExpression = 5 > 3;

console.log("Boolean examples:");
console.log("True:", trueVar, typeof trueVar);
console.log("False:", falseVar, typeof falseVar);
console.log("Expression:", booleanExpression, typeof booleanExpression);

// Null type
let nullVar = null;
console.log("Null:", nullVar, typeof nullVar);

// Undefined type
let undefinedVar = undefined;
let uninitializedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);
console.log("Uninitialized:", uninitializedVar, typeof uninitializedVar);

// Symbol type (ES6) => Unique identifier for objects
let symbolVar = Symbol("description");
let symbolVar2 = Symbol("description"); // Symbols are unique and immutable
console.log("Symbol:", symbolVar, typeof symbolVar);
console.log("Symbol equality:", symbolVar === symbolVar2); // false => Symbols are unique and immutable

// 2. Reference Data Types
console.log("\n📚 2. Reference Data Types");
console.log("-------------------------");

console.log("Reference data types:");
console.log("1. object - Collection of key-value pairs");
console.log("2. array - Ordered collection of elements");
console.log("3. function - Reusable code block");

// Object type
let objectVar = {
    name: "John",
    age: 30,
    isActive: true
};

console.log("Object example:");
console.log("Object:", objectVar, typeof objectVar);
console.log("Object keys:", Object.keys(objectVar));
console.log("Object values:", Object.values(objectVar));

// Array type
let arrayVar = [1, 2, 3, 4, 5];
let mixedArrayVar = [1, "hello", true, { name: "John" }];

console.log("Array examples:");
console.log("Number array:", arrayVar, typeof arrayVar);
console.log("Mixed array:", mixedArrayVar, typeof mixedArrayVar);
console.log("Array length:", arrayVar.length);

// Function type
function functionVar() {
    return "I'm a function";
}

const arrowFunctionVar = () => "I'm an arrow function"; // Arrow functions are a new way to write functions in ES6 => () => { return statement; }

console.log("Function examples:");
console.log("Function:", functionVar, typeof functionVar);
console.log("Arrow function:", arrowFunctionVar, typeof arrowFunctionVar);

// 3. Type Checking
console.log("\n📚 3. Type Checking");
console.log("------------------");

console.log("Type checking methods:");
console.log("1. typeof operator - Returns type as string");
console.log("2. instanceof operator - Checks if object is instance of constructor");
console.log("3. Object.prototype.toString.call() - More accurate type checking");

// typeof operator
console.log("typeof examples:");
console.log("typeof 42:", typeof 42); // number
console.log("typeof 'hello':", typeof 'hello'); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof null:", typeof null); // null
console.log("typeof undefined:", typeof undefined);
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // array
console.log("typeof function(){}:", typeof function(){}); // function

// instanceof operator
console.log("instanceof examples:");
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("{} instanceof Object:", {} instanceof Object); // true
console.log("function(){} instanceof Function:", function(){} instanceof Function); // true

// Object.prototype.toString.call() 
/* Prototype is a way to add methods to an object prototype => Object.prototype.toString.call(object) */
console.log("toString.call() examples:");
console.log("toString.call(42):", Object.prototype.toString.call(42));
console.log("toString.call('hello'):", Object.prototype.toString.call('hello'));
console.log("toString.call(true):", Object.prototype.toString.call(true));
console.log("toString.call(null):", Object.prototype.toString.call(null));
console.log("toString.call(undefined):", Object.prototype.toString.call(undefined));
console.log("toString.call({}):", Object.prototype.toString.call({}));
console.log("toString.call([]):", Object.prototype.toString.call([]));


const person = {
    name: "John",
    age: 30,
    isActive: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const anotherPerson = {
    name: "Jane",
};

person.greet.call(anotherPerson);

// 4. Special Values
console.log("\n📚 4. Special Values");
console.log("------------------");

console.log("Special values in JavaScript:");
console.log("1. NaN - Not a Number");
console.log("2. Infinity - Positive infinity");
console.log("3. -Infinity - Negative infinity");
console.log("4. null - Intentional absence of value");
console.log("5. undefined - Uninitialized variable");

// NaN
console.log("NaN examples:");
console.log("0 / 0:", 0 / 0);
console.log("Number('hello'):", Number('hello'));
console.log("parseInt('abc'):", parseInt('abc'));
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN(42):", isNaN(42));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN(42):", Number.isNaN(42));

// Infinity
console.log("Infinity examples:");
console.log("1 / 0:", 1 / 0);
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("isFinite(Infinity):", isFinite(Infinity));
console.log("isFinite(42):", isFinite(42));// true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));// false
console.log("Number.isFinite(42):", Number.isFinite(42));// true

// 5. Type Coercion
console.log("\n📚 5. Type Coercion"); //+ => Type coercion is the process of converting a value from one type to another
console.log("------------------");

console.log("Type coercion examples:");
console.log("String + Number:", "5" + 3); // "53"
console.log("Number + String:", 5 + "3"); // "53"
console.log("String + Boolean:", "5" + true); // "5true" => true is converted to "true"
console.log("Number + Boolean:", 5 + true); // 6 => true is converted to 1
console.log("String + null:", "5" + null); // "5null" => null is converted to "null"
console.log("Number + null:", 5 + null); // 5 => null is converted to 0
console.log("String + undefined:", "5" + undefined); // "5undefined" => undefined is converted to "undefined"
console.log("Number + undefined:", 5 + undefined); // NaN => undefined is converted to NaN

// 6. Type Conversion
console.log("\n📚 6. Type Conversion");
console.log("-------------------");

console.log("Explicit type conversion:");

// String to Number
console.log("String to Number:");
console.log("Number('42'):", Number('42'));
console.log("Number('3.14'):", Number('3.14'));
console.log("Number('hello'):", Number('hello'));
console.log("parseInt('42'):", parseInt('42'));
console.log("parseInt('3.14'):", parseInt('3.14'));
console.log("parseFloat('3.14'):", parseFloat('3.14'));

// Number to String
console.log("Number to String:");
console.log("String(42):", String(42));
console.log("String(3.14):", String(3.14));
console.log("(42).toString():", (42).toString());
console.log("(3.14).toString():", (3.14).toString());

// Boolean conversion
console.log("Boolean conversion:");
console.log("Boolean(42):", Boolean(42));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean('hello'):", Boolean('hello'));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean({}):", Boolean({}));
console.log("Boolean([]):", Boolean([]));

// 7. Truthy and Falsy Values
console.log("\n📚 7. Truthy and Falsy Values"); // !! => == Converts a value to its boolean equivalent
console.log("---------------------------");

console.log("Falsy values (evaluate to false):");
console.log("false:", !!false);
console.log("0:", !!0); // 0 is converted to false
console.log("-0:", !!-0);
console.log("0n:", !!0n);
console.log("'' (empty string):", !!'');
console.log("null:", !!null);
console.log("undefined:", !!undefined);
console.log("NaN:", !!NaN);

console.log("Truthy values (evaluate to true):");
console.log("true:", !!true);
console.log("42:", !!42);
console.log("'hello':", !!'hello');
console.log("{}:", !!{});
console.log("[]:", !![]);
console.log("function(){}:", !!function(){});

// 8. Type Checking Functions
console.log("\n📚 8. Type Checking Functions");
console.log("---------------------------");

// Custom type checking functions
function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return value === undefined;
}

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function';
}

// Test type checking functions
console.log("Type checking functions:");
console.log("isString('hello'):", isString('hello'));
console.log("isString(42):", isString(42));
console.log("isNumber(42):", isNumber(42));
console.log("isNumber('42'):", isNumber('42'));
console.log("isBoolean(true):", isBoolean(true));
console.log("isBoolean(1):", isBoolean(1));
console.log("isNull(null):", isNull(null));
console.log("isNull(undefined):", isNull(undefined));
console.log("isUndefined(undefined):", isUndefined(undefined));
console.log("isUndefined(null):", isUndefined(null));
console.log("isObject({}):", isObject({}));
console.log("isObject([]):", isObject([]));
console.log("isObject(null):", isObject(null));
console.log("isArray([]):", isArray([]));
console.log("isArray({}):", isArray({}));
console.log("isFunction(function(){}):", isFunction(function(){}));
console.log("isFunction({}):", isFunction({}));

// 9. Type Safety
console.log("\n📚 9. Type Safety");
console.log("----------------");

console.log("Type safety considerations:");
console.log("1. JavaScript is dynamically typed");
console.log("2. Types are checked at runtime");
console.log("3. Type coercion can cause unexpected behavior");
console.log("4. Always validate input types");

// Type safety example
function safeAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

try {
    console.log("safeAdd(5, 3):", safeAdd(5, 3));
    console.log("safeAdd('5', 3):", safeAdd('5', 3));
} catch (error) {
    console.log("Error:", error.message);
}

// 10. Type Annotations (JSDoc)
console.log("\n📚 10. Type Annotations (JSDoc)");
console.log("-----------------------------");

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function addNumbers(a, b) {
    return a + b;
}

/**
 * Gets user information
 * @param {string} id - User ID
 * @returns {Object} User object
 */
function getUser(id) {
    return { id: id, name: "John", age: 30 };
}

console.log("JSDoc examples:");
console.log("addNumbers(5, 3):", addNumbers(5, 3));
console.log("getUser('123'):", getUser('123'));

// 11. Type Conversion Best Practices
console.log("\n📚 11. Type Conversion Best Practices");
console.log("------------------------------------");

console.log("Best practices for type conversion:");
console.log("1. Use explicit conversion functions");
console.log("2. Validate input before conversion");
console.log("3. Handle conversion errors gracefully");
console.log("4. Use strict equality (===) when possible");

// Safe type conversion
function safeStringToNumber(str) {
    if (typeof str !== 'string') {
        return NaN;
    }
    
    let num = Number(str);
    if (isNaN(num)) {
        return NaN;
    }
    
    return num;
}

function safeNumberToString(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '0';
    }
    
    return num.toString();
}

console.log("Safe conversion examples:");
console.log("safeStringToNumber('42'):", safeStringToNumber('42'));
console.log("safeStringToNumber('hello'):", safeStringToNumber('hello'));
console.log("safeNumberToString(42):", safeNumberToString(42));
console.log("safeNumberToString(NaN):", safeNumberToString(NaN));

// 12. Type Checking in Real-World Applications
console.log("\n📚 12. Type Checking in Real-World Applications");
console.log("----------------------------------------------");

// API response validation
function validateApiResponse(response) {
    if (!response || typeof response !== 'object') {
        return false;
    }
    
    if (!response.hasOwnProperty('data') || !Array.isArray(response.data)) {
        return false;
    }
    
    if (!response.hasOwnProperty('status') || typeof response.status !== 'number') {
        return false;
    }
    
    return true;
}

// Form validation
function validateForm(formData) {
    let errors = [];
    
    if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
        errors.push('Name is required and must be a non-empty string');
    }
    
    if (!formData.email || typeof formData.email !== 'string' || !formData.email.includes('@')) {
        errors.push('Email is required and must be a valid email address');
    }
    
    if (!formData.age || typeof formData.age !== 'number' || formData.age < 0) {
        errors.push('Age is required and must be a positive number');
    }
    
    return errors;
}

// Test validation functions
let apiResponse = { data: [1, 2, 3], status: 200 };
let formData = { name: "John", email: "john@example.com", age: 30 };

console.log("Validation examples:");
console.log("API response valid:", validateApiResponse(apiResponse));
console.log("Form validation errors:", validateForm(formData));

// 13. Type Checking Performance
console.log("\n📚 13. Type Checking Performance");
console.log("------------------------------");

console.log("Type checking performance considerations:");
console.log("1. typeof is fastest for primitive types");
console.log("2. instanceof is slower but more accurate for objects");
console.log("3. Object.prototype.toString.call() is most accurate but slowest");
console.log("4. Cache type checks when possible");

// Performance test
function performanceTest() {
    let iterations = 1000000;
    let testValue = "hello";
    
    console.log("Performance test with", iterations, "iterations:");
    
    // typeof test
    let start = performance.now();
    for (let i = 0; i < iterations; i++) {
        typeof testValue === 'string';
    }
    let end = performance.now();
    console.log("typeof:", (end - start).toFixed(2), "ms");
    
    // instanceof test
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        testValue instanceof String;
    }
    end = performance.now();
    console.log("instanceof:", (end - start).toFixed(2), "ms");
    
    // toString.call test
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        Object.prototype.toString.call(testValue) === '[object String]';
    }
    end = performance.now();
    console.log("toString.call:", (end - start).toFixed(2), "ms");
}

performanceTest();

// 14. Type Checking Best Practices
console.log("\n📚 14. Type Checking Best Practices");
console.log("----------------------------------");

console.log("Best practices for type checking:");
console.log("1. Use typeof for primitive types");
console.log("2. Use instanceof for object types");
console.log("3. Use Array.isArray() for arrays");
console.log("4. Use Number.isNaN() for NaN checking");
console.log("5. Use Number.isFinite() for finite number checking");
console.log("6. Validate input types in functions");
console.log("7. Use JSDoc for type documentation");

// Example of best practices
function processData(data) {
    // Validate input type
    if (typeof data !== 'object' || data === null) {
        throw new Error('Data must be an object');
    }
    
    // Process different object types
    if (Array.isArray(data)) {
        return data.map(item => processItem(item));
    } else if (data instanceof Date) {
        return data.toISOString();
    } else if (typeof data === 'object') {
        return Object.keys(data).length;
    }
    
    return data;
}

function processItem(item) {
    if (typeof item === 'string') {
        return item.toUpperCase();
    } else if (typeof item === 'number') {
        return item * 2;
    } else if (typeof item === 'boolean') {
        return !item;
    }
    
    return item;
}

console.log("Best practices example:");
console.log("processData([1, 2, 3]):", processData([1, 2, 3]));
console.log("processData({a: 1, b: 2}):", processData({a: 1, b: 2}));
console.log("processData(new Date()):", processData(new Date()));

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- JavaScript has 6 primitive types and 3 reference types");
console.log("- Use typeof for primitive type checking");
console.log("- Use instanceof for object type checking");
console.log("- Understand truthy and falsy values");
console.log("- Be aware of type coercion and conversion");
console.log("- Validate input types in functions");
console.log("- Use explicit type conversion when needed");
console.log("- Follow type checking best practices");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice type checking with different values");
console.log("2. Implement type validation functions");
console.log("3. Handle type conversion errors");
console.log("4. Use JSDoc for type documentation");
console.log("5. Debug type-related issues");
