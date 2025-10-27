// Lesson 5: Type Conversion
// This file teaches JavaScript type conversion and coercion

console.log("⚡ Welcome to JavaScript Basics Lesson 5: Type Conversion!");
console.log("=======================================================");

// 1. Implicit Type Conversion (Coercion)
console.log("\n📚 1. Implicit Type Conversion (Coercion)");
console.log("---------------------------------------");

console.log("JavaScript automatically converts types in certain contexts:");
console.log("This is called type coercion or implicit conversion");

// String concatenation
console.log("String concatenation examples:");
console.log("'5' + 3 =", '5' + 3); // "53"
console.log("5 + '3' =", 5 + '3'); // "53"
console.log("'5' + '3' =", '5' + '3'); // "53"
console.log("5 + 3 =", 5 + 3); // 8

// Arithmetic operations
console.log("Arithmetic operation examples:");
console.log("'5' - 3 =", '5' - 3); // 2
console.log("5 - '3' =", 5 - '3'); // 2
console.log("'5' * 3 =", '5' * 3); // 15
console.log("5 * '3' =", 5 * '3'); // 15
console.log("'5' / 3 =", '5' / 3); // 1.666...
console.log("5 / '3' =", 5 / '3'); // 1.666...

// Boolean conversion
console.log("Boolean conversion examples:");
console.log("'5' && 3 =", '5' && 3); // 3
console.log("5 && '3' =", 5 && '3'); // "3"
console.log("'5' || 3 =", '5' || 3); // "5"
console.log("5 || '3' =", 5 || '3'); // 5

// 2. Explicit Type Conversion
console.log("\n📚 2. Explicit Type Conversion");
console.log("-----------------------------");

console.log("Explicit conversion uses functions to convert types:");

// String to Number
console.log("String to Number conversion:");
console.log("Number('42') =", Number('42'), typeof Number('42'));
console.log("Number('3.14') =", Number('3.14'), typeof Number('3.14'));
console.log("Number('hello') =", Number('hello'), typeof Number('hello'));
console.log("Number('') =", Number(''), typeof Number(''));
console.log("Number(' ') =", Number(' '), typeof Number(' '));
console.log("Number('0') =", Number('0'), typeof Number('0'));

// parseInt and parseFloat
console.log("parseInt and parseFloat:");
console.log("parseInt('42') =", parseInt('42'), typeof parseInt('42'));
console.log("parseInt('3.14') =", parseInt('3.14'), typeof parseInt('3.14'));
console.log("parseFloat('3.14') =", parseFloat('3.14'), typeof parseFloat('3.14'));
console.log("parseInt('42px') =", parseInt('42px'), typeof parseInt('42px'));
console.log("parseFloat('3.14abc') =", parseFloat('3.14abc'), typeof parseFloat('3.14abc'));

// Number to String
console.log("Number to String conversion:");
console.log("String(42) =", String(42), typeof String(42));
console.log("String(3.14) =", String(3.14), typeof String(3.14));
console.log("String(0) =", String(0), typeof String(0));
console.log("String(NaN) =", String(NaN), typeof String(NaN));
console.log("String(Infinity) =", String(Infinity), typeof String(Infinity));

// toString method
console.log("toString method:");
console.log("(42).toString() =", (42).toString(), typeof (42).toString());
console.log("(3.14).toString() =", (3.14).toString(), typeof (3.14).toString());
console.log("(true).toString() =", (true).toString(), typeof (true).toString());
console.log("(false).toString() =", (false).toString(), typeof (false).toString());

// Boolean conversion
console.log("Boolean conversion:");
console.log("Boolean(42) =", Boolean(42), typeof Boolean(42));
console.log("Boolean(0) =", Boolean(0), typeof Boolean(0));
console.log("Boolean('hello') =", Boolean('hello'), typeof Boolean('hello'));
console.log("Boolean('') =", Boolean(''), typeof Boolean(''));
console.log("Boolean(null) =", Boolean(null), typeof Boolean(null));
console.log("Boolean(undefined) =", Boolean(undefined), typeof Boolean(undefined));
console.log("Boolean({}) =", Boolean({}), typeof Boolean({}));
console.log("Boolean([]) =", Boolean([]), typeof Boolean([]));

// 3. Truthy and Falsy Values
console.log("\n📚 3. Truthy and Falsy Values");
console.log("---------------------------");

console.log("Falsy values (convert to false):");
console.log("false =", !!false);
console.log("0 =", !!0);
console.log("-0 =", !!-0);
console.log("0n =", !!0n);
console.log("'' (empty string) =", !!'');
console.log("null =", !!null);
console.log("undefined =", !!undefined);
console.log("NaN =", !!NaN);

console.log("Truthy values (convert to true):");
console.log("true =", !!true);
console.log("42 =", !!42);
console.log("'hello' =", !!'hello');
console.log("'0' =", !!'0');
console.log("'false' =", !!'false');
console.log("{} =", !!{});
console.log("[] =", !![]);
console.log("function(){} =", !!function(){});

// 4. Type Conversion in Comparisons
console.log("\n📚 4. Type Conversion in Comparisons");
console.log("-----------------------------------");

console.log("Loose equality (==) performs type coercion:");
console.log("5 == '5' =", 5 == '5'); // true
console.log("'5' == 5 =", '5' == 5); // true
console.log("true == 1 =", true == 1); // true
console.log("false == 0 =", false == 0); // true
console.log("null == undefined =", null == undefined); // true
console.log("null == 0 =", null == 0); // false
console.log("undefined == 0 =", undefined == 0); // false
console.log("NaN == NaN =", NaN == NaN); // false

console.log("Strict equality (===) does not perform type coercion:");
console.log("5 === '5' =", 5 === '5'); // false
console.log("'5' === 5 =", '5' === 5); // false
console.log("true === 1 =", true === 1); // false
console.log("false === 0 =", false === 0); // false
console.log("null === undefined =", null === undefined); // false
console.log("null === 0 =", null === 0); // false
console.log("undefined === 0 =", undefined === 0); // false
console.log("NaN === NaN =", NaN === NaN); // false

// 5. String Conversion Methods
console.log("\n📚 5. String Conversion Methods");
console.log("-----------------------------");

console.log("Different ways to convert to string:");

let num = 42;
let bool = true;
let obj = { name: "John" };
let arr = [1, 2, 3];

console.log("String() method:");
console.log("String(42) =", String(num));
console.log("String(true) =", String(bool));
console.log("String({}) =", String(obj));
console.log("String([]) =", String(arr));

console.log("toString() method:");
console.log("(42).toString() =", num.toString());
console.log("(true).toString() =", bool.toString());
console.log("({}).toString() =", obj.toString());
console.log("([]).toString() =", arr.toString());

console.log("Template literals:");
console.log("`${42}` =", `${num}`);
console.log("`${true}` =", `${bool}`);
console.log("`${{}}` =", `${obj}`);
console.log("`${[]}` =", `${arr}`);

console.log("Concatenation with empty string:");
console.log("42 + '' =", num + '');
console.log("true + '' =", bool + '');
console.log("{} + '' =", obj + '');
console.log("[] + '' =", arr + '');

// 6. Number Conversion Methods
console.log("\n📚 6. Number Conversion Methods");
console.log("-----------------------------");

console.log("Different ways to convert to number:");

let str = "42";
let strFloat = "3.14";
let strInvalid = "hello";
let boolTrue = true;
let boolFalse = false;
let nullVal = null;
let undefinedVal = undefined;

console.log("Number() constructor:");
console.log("Number('42') =", Number(str));
console.log("Number('3.14') =", Number(strFloat));
console.log("Number('hello') =", Number(strInvalid));
console.log("Number(true) =", Number(boolTrue));
console.log("Number(false) =", Number(boolFalse));
console.log("Number(null) =", Number(nullVal));
console.log("Number(undefined) =", Number(undefinedVal));

console.log("parseInt() function:");
console.log("parseInt('42') =", parseInt(str));
console.log("parseInt('3.14') =", parseInt(strFloat));
console.log("parseInt('hello') =", parseInt(strInvalid));
console.log("parseInt('42px') =", parseInt('42px'));
console.log("parseInt('0x10') =", parseInt('0x10'));

console.log("parseFloat() function:");
console.log("parseFloat('42') =", parseFloat(str));
console.log("parseFloat('3.14') =", parseFloat(strFloat));
console.log("parseFloat('hello') =", parseFloat(strInvalid));
console.log("parseFloat('3.14abc') =", parseFloat('3.14abc'));

console.log("Unary plus operator:");
console.log("+'42' =", +str);
console.log("+'3.14' =", +strFloat);
console.log("+'hello' =", +strInvalid);
console.log("+true =", +boolTrue);
console.log("+false =", +boolFalse);

 //object and array
 console.log("Object and array conversion:");
 console.log("{name: 'John'} =", parseInt({name: 'John'}));
 console.log("[1, 2, 3] =", parseInt([2, 2, 3]));
 console.log("['1', '2', '3'] =", parseInt(['10', '2', '3']));
 console.log("['1', '2', '3'] =", parseInt(['0', '2', '3']));

  console.log("['APPLE', 'BANANA', 'CHERRY'] =", parseInt(['APPLE', 'BANANA', 'CHERRY']));

// 7. Boolean Conversion Methods
console.log("\n📚 7. Boolean Conversion Methods");
console.log("-----------------------------");

console.log("Different ways to convert to boolean:");

let numVal = 42;
let zeroVal = 0;
let strVal = "hello";
let emptyStr = "";
let nullVal2 = null;
let undefinedVal2 = undefined;
let objVal = {};
let arrVal = [];

console.log("Boolean() constructor:");
console.log("Boolean(42) =", Boolean(numVal));
console.log("Boolean(0) =", Boolean(zeroVal));
console.log("Boolean('hello') =", Boolean(strVal));
console.log("Boolean('') =", Boolean(emptyStr));
console.log("Boolean(null) =", Boolean(nullVal2));
console.log("Boolean(undefined) =", Boolean(undefinedVal2));
console.log("Boolean({}) =", Boolean(objVal));
console.log("Boolean([]) =", Boolean(arrVal));

console.log("Double negation (!!):");
console.log("!!42 =", !!numVal);
console.log("!!0 =", !!zeroVal);
console.log("!!'hello' =", !!strVal);
console.log("!!'' =", !!emptyStr);
console.log("!!null =", !!nullVal2);
console.log("!!undefined =", !!undefinedVal2);
console.log("!!{} =", !!objVal);
console.log("!![] =", !!arrVal);

// 8. Object to Primitive Conversion
console.log("\n📚 8. Object to Primitive Conversion");
console.log("----------------------------------");

console.log("Objects are converted to primitives using valueOf() and toString():");

let obj2 = {
    name: "John",
    age: 30,
    valueOf() {
        return this.age;
    },
    toString() {
        return this.name;
    }
};

console.log("Object with valueOf and toString:");
console.log("String(obj) =", String(obj2));
console.log("Number(obj) =", Number(obj2));
console.log("obj + '' =", obj2 + '');
console.log("obj + 0 =", obj2 + 0);

let obj3 = {
    name: "Jane",
    age: 25
};

console.log("Object without valueOf and toString:");
console.log("String(obj) =", String(obj3));
console.log("Number(obj) =", Number(obj3));
console.log("obj + '' =", obj3 + '');
console.log("obj + 0 =", obj3 + 0);

// 9. Array to String Conversion
console.log("\n📚 9. Array to String Conversion");
console.log("------------------------------");

console.log("Arrays are converted to strings using join() method:");

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [1, 'a', true];
let arr4 = [];
let arr5 = [null, undefined, NaN];

console.log("Array to string conversion:");
console.log("String([1, 2, 3]) =", String(arr1));
console.log("String(['a', 'b', 'c']) =", String(arr2));
console.log("String([1, 'a', true]) =", String(arr3));
console.log("String([]) =", String(arr4));
console.log("String([null, undefined, NaN]) =", String(arr5));

console.log("Array join method:");
console.log("[1, 2, 3].join() =", arr1.join());
console.log("[1, 2, 3].join('-') =", arr1.join('-'));
console.log("[1, 2, 3].join('') =", arr1.join(''));
console.log("['a', 'b', 'c'].join(', ') =", arr2.join(', '));

// 10. Type Conversion Best Practices
console.log("\n📚 10. Type Conversion Best Practices");
console.log("-----------------------------------");

console.log("Best practices for type conversion:");
console.log("1. Use explicit conversion functions");
console.log("2. Use strict equality (===) when possible");
console.log("3. Validate input before conversion");
console.log("4. Handle conversion errors gracefully");
console.log("5. Use appropriate conversion methods");

// Safe conversion functions
function safeStringToNumber(str) {
    if (typeof str !== 'string') {
        return NaN;
    }
    
    let trimmed = str.trim();
    if (trimmed === '') {
        return NaN;
    }
    
    let num = Number(trimmed);
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

function safeBooleanConversion(value) {
    if (value === null || value === undefined) {
        return false;
    }
    
    if (typeof value === 'string') {
        return value.length > 0;
    }
    
    if (typeof value === 'number') {
        return value !== 0 && !isNaN(value);
    }
    
    if (typeof value === 'boolean') {
        return value;
    }
    
    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }
    
    return Boolean(value);
}

console.log("Safe conversion examples:");
console.log("safeStringToNumber('42') =", safeStringToNumber('42'));
console.log("safeStringToNumber('hello') =", safeStringToNumber('hello'));
console.log("safeStringToNumber('') =", safeStringToNumber(''));
console.log("safeNumberToString(42) =", safeNumberToString(42));
console.log("safeNumberToString(NaN) =", safeNumberToString(NaN));
console.log("safeBooleanConversion('hello') =", safeBooleanConversion('hello'));
console.log("safeBooleanConversion('') =", safeBooleanConversion(''));
console.log("safeBooleanConversion(0) =", safeBooleanConversion(0));
console.log("safeBooleanConversion({}) =", safeBooleanConversion({}));

// 11. Type Conversion Pitfalls
console.log("\n📚 11. Type Conversion Pitfalls");
console.log("------------------------------");

console.log("Common pitfalls in type conversion:");

// Pitfall 1: String concatenation vs addition
console.log("Pitfall 1: String concatenation vs addition");
console.log("'5' + 3 =", '5' + 3); // "53" (not 8)
console.log("5 + '3' =", 5 + '3'); // "53" (not 8)
console.log("'5' - 3 =", '5' - 3); // 2 (correct)

// Pitfall 2: Boolean conversion
console.log("Pitfall 2: Boolean conversion");
console.log("Boolean('0') =", Boolean('0')); // true (not false)
console.log("Boolean(0) =", Boolean(0)); // false
console.log("Boolean('false') =", Boolean('false')); // true (not false)
console.log("Boolean(false) =", Boolean(false)); // false

// Pitfall 3: Array to string
console.log("Pitfall 3: Array to string");
console.log("String([1, 2, 3]) =", String([1, 2, 3])); // "1,2,3"
console.log("String([]) =", String([])); // ""
console.log("String([null]) =", String([null])); // ""

// Pitfall 4: Object to string
console.log("Pitfall 4: Object to string");
console.log("String({}) =", String({})); // "[object Object]"
console.log("String({name: 'John'}) =", String({name: 'John'})); // "[object Object]"

// Pitfall 5: NaN comparison
console.log("Pitfall 5: NaN comparison");
console.log("NaN == NaN =", NaN == NaN); // false
console.log("NaN === NaN =", NaN === NaN); // false
console.log("isNaN(NaN) =", isNaN(NaN)); // true
console.log("Number.isNaN(NaN) =", Number.isNaN(NaN)); // true

// 12. Type Conversion in Real-World Applications
console.log("\n📚 12. Type Conversion in Real-World Applications");
console.log("------------------------------------------------");

// Form validation
function validateForm(formData) {
    let errors = [];
    
    // Name validation
    if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
        errors.push('Name is required and must be a non-empty string');
    }
    
    // Age validation
    if (!formData.age || typeof formData.age !== 'number' || formData.age < 0) {
        errors.push('Age is required and must be a positive number');
    }
    
    // Email validation
    if (!formData.email || typeof formData.email !== 'string' || !formData.email.includes('@')) {
        errors.push('Email is required and must be a valid email address');
    }
    
    return errors;
}

// Data processing
function processData(data) {
    let result = [];
    
    for (let item of data) {
        if (typeof item === 'string') {
            result.push(item.toUpperCase());
        } else if (typeof item === 'number') {
            result.push(item * 2);
        } else if (typeof item === 'boolean') {
            result.push(!item);
        } else {
            result.push(String(item));
        }
    }
    
    return result;
}

// API response handling
function handleApiResponse(response) {
    if (!response || typeof response !== 'object') {
        return { error: 'Invalid response format' };
    }
    
    let data = response.data;
    if (Array.isArray(data)) {
        return { count: data.length, items: data };
    } else if (typeof data === 'object') {
        return { count: 1, items: [data] };
    } else {
        return { count: 0, items: [] };
    }
}

console.log("Real-world application examples:");
console.log("Form validation:", validateForm({ name: "John", age: 25, email: "john@example.com" }));
console.log("Data processing:", processData([1, "hello", true, null]));
console.log("API response handling:", handleApiResponse({ data: [1, 2, 3] }));

// 13. Type Conversion Performance
console.log("\n📚 13. Type Conversion Performance");
console.log("--------------------------------");

console.log("Performance considerations for type conversion:");

// Performance test
function performanceTest() {
    let iterations = 1000000;
    
    // String conversion performance
    let start = performance.now();
    for (let i = 0; i < iterations; i++) {
        String(i);
    }
    let end = performance.now();
    console.log("String() conversion:", (end - start).toFixed(2), "ms");
    
    // toString performance
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        i.toString();
    }
    end = performance.now();
    console.log("toString() conversion:", (end - start).toFixed(2), "ms");
    
    // Template literal performance
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        `${i}`;
    }
    end = performance.now();
    console.log("Template literal conversion:", (end - start).toFixed(2), "ms");
    
    // Concatenation performance
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        i + '';
    }
    end = performance.now();
    console.log("Concatenation conversion:", (end - start).toFixed(2), "ms");
}

performanceTest();

// 14. Type Conversion Debugging
console.log("\n📚 14. Type Conversion Debugging");
console.log("-------------------------------");

console.log("Debugging type conversion issues:");

// Debugging function
function debugTypeConversion(value) {
    console.log("Debugging type conversion:");
    console.log("Original value:", value);
    console.log("Type:", typeof value);
    console.log("String conversion:", String(value));
    console.log("Number conversion:", Number(value));
    console.log("Boolean conversion:", Boolean(value));
    console.log("Truthy:", !!value);
    console.log("Falsy:", !value);
}

debugTypeConversion(42);
debugTypeConversion("hello");
debugTypeConversion(true);
debugTypeConversion(null);
debugTypeConversion(undefined);
debugTypeConversion({});
debugTypeConversion([]);

// 15. Type Conversion Best Practices Summary
console.log("\n📚 15. Type Conversion Best Practices Summary");
console.log("------------------------------------------");

console.log("Summary of best practices:");
console.log("1. Always use explicit conversion when possible");
console.log("2. Use strict equality (===) instead of loose equality (==)");
console.log("3. Validate input before conversion");
console.log("4. Handle conversion errors gracefully");
console.log("5. Use appropriate conversion methods for each type");
console.log("6. Be aware of type coercion in expressions");
console.log("7. Test edge cases and special values");
console.log("8. Use type checking functions to validate conversions");

// Example of comprehensive type conversion
function convertValue(value, targetType) {
    if (targetType === 'string') {
        return String(value);
    } else if (targetType === 'number') {
        let num = Number(value);
        return isNaN(num) ? 0 : num;
    } else if (targetType === 'boolean') {
        return Boolean(value);
    } else {
        return value;
    }
}

console.log("Comprehensive conversion example:");
console.log("convertValue(42, 'string'):", convertValue(42, 'string'));
console.log("convertValue('hello', 'number'):", convertValue('hello', 'number'));
console.log("convertValue('', 'boolean'):", convertValue('', 'boolean'));
console.log("convertValue(0, 'boolean'):", convertValue(0, 'boolean'));

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Understand implicit vs explicit type conversion");
console.log("- Use explicit conversion functions when possible");
console.log("- Be aware of type coercion in expressions");
console.log("- Use strict equality (===) instead of loose equality (==)");
console.log("- Validate input before conversion");
console.log("- Handle conversion errors gracefully");
console.log("- Test edge cases and special values");
console.log("- Follow type conversion best practices");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice all type conversion methods");
console.log("2. Implement safe conversion functions");
console.log("3. Handle type conversion errors");
console.log("4. Debug type conversion issues");
console.log("5. Apply type conversion in real-world scenarios");
