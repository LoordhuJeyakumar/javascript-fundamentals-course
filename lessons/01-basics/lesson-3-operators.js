// Lesson 3: Operators
// This file teaches JavaScript operators and expressions

console.log("⚡ Welcome to JavaScript Basics Lesson 3: Operators!");
console.log("===================================================");

// 1. Arithmetic Operators
console.log("\n📚 1. Arithmetic Operators");
console.log("-------------------------");

console.log("Arithmetic operators perform mathematical operations:");
console.log("+ (Addition), - (Subtraction), * (Multiplication)");
console.log("/ (Division), % (Modulus), ** (Exponentiation)");

let a = 10;
let b = 3;

console.log("Arithmetic operations:");
console.log(`${a} + ${b} =`, a + b); // Addition
console.log(`${a} - ${b} =`, a - b); // Subtraction
console.log(`${a} * ${b} =`, a * b); // Multiplication
console.log(`${a} / ${b} =`, a / b); // Division (Quotient)
console.log(`${a} % ${b} =`, a % b); // Modulus (remainder)
console.log(`${a} ** ${b} =`, a ** b); // Exponentiation

// Special cases
console.log("Special arithmetic cases:");
console.log("10 / 0 =", 10 / 0); // Infinity
console.log("0 / 0 =", 0 / 0); // NaN
console.log("10 % 0 =", 10 % 0); // NaN
console.log("10 ** 0 =", 10 ** 0); // 1

// 2. Assignment Operators
console.log("\n📚 2. Assignment Operators");
console.log("------------------------");

console.log("Assignment operators assign values to variables:");
console.log("= (Assignment), += (Add and assign), -= (Subtract and assign)");
console.log("*= (Multiply and assign), /= (Divide and assign), %= (Modulus and assign)");

let x = 5;
console.log("Initial x:", x);

x++; //=> x = x + 1

x += 3; // x = x + 3
console.log("After x += 3:", x);

x -= 2; // x = x - 2
console.log("After x -= 2:", x);

x *= 4; // x = x * 4
console.log("After x *= 4:", x);

x /= 2; // x = x / 2
console.log("After x /= 2:", x);

x %= 3; // x = x % 3
console.log("After x %= 3:", x);

// 3. Comparison Operators
console.log("\n📚 3. Comparison Operators");
console.log("-------------------------");

console.log("Comparison operators compare values and return boolean:");
console.log("== (Equal), === (Strict equal), != (Not equal)");
console.log("!== (Strict not equal), < (Less than), > (Greater than)");
console.log("<= (Less than or equal), >= (Greater than or equal)");

let num1 = 5;
let num2 = "5";
let num3 = 10;

console.log("Comparison examples:");
console.log(`${num1} == ${num2}:`, num1 == num2); // true (type coercion)
console.log(`${num1} === ${num2}:`, num1 === num2); // false (strict comparison)
console.log(`${num1} != ${num2}:`, num1 != num2); // false (type coercion)
console.log(`${num1} !== ${num2}:`, num1 !== num2); // true (strict comparison)
console.log(`${num1} < ${num3}:`, num1 < num3); // true
console.log(`${num1} > ${num3}:`, num1 > num3); // false
console.log(`${num1} <= ${num3}:`, num1 <= num3); // true
console.log(`${num1} >= ${num3}:`, num1 >= num3); // false

// 4. Logical Operators
console.log("\n📚 4. Logical Operators");
console.log("---------------------");

console.log("Logical operators work with boolean values:");
console.log("&& (AND), || (OR), ! (NOT)");

let bool1 = true;
let bool2 = false;

console.log("Logical operations:");
console.log(`${bool1} && ${bool2}:`, bool1 && bool2); // false
console.log(`${bool1} || ${bool2}:`, bool1 || bool2); // true
console.log(`!${bool1}:`, !bool1); // false
console.log(`!${bool2}:`, !bool2); // true

// Short-circuit evaluation
console.log("Short-circuit evaluation:");
console.log("true && 'hello':", true && 'hello'); // 'hello'
console.log("false && 'hello':", false && 'hello'); // false
console.log("true || 'hello':", true || 'hello'); // true
console.log("false || 'hello':", false || 'hello'); // 'hello'

// 5. Unary Operators
console.log("\n📚 5. Unary Operators");
console.log("--------------------");

console.log("Unary operators work with a single operand:");
console.log("++ (Increment), -- (Decrement), + (Unary plus), - (Unary minus)");
console.log("! (Logical NOT), typeof (Type of), void (Void)");

let counter = 5;
console.log("Initial counter:", counter);

// Pre-increment
console.log("++counter:", ++counter); // 6 => 1 + 5 = 6
console.log("counter after pre-increment:", counter); // 6

// Post-increment
console.log("counter++:", counter++); // 6
console.log("counter after post-increment:", counter); // 7

// Pre-decrement
console.log("--counter:", --counter); // 6
console.log("counter after pre-decrement:", counter); // 6

// Post-decrement
console.log("counter--:", counter--); // 6
console.log("counter after post-decrement:", counter); // 5

// Unary plus and minus
let str = "42";
console.log("Unary plus +str:", +str, typeof +str); // 42 number
console.log("Unary minus -str:", -str, typeof -str); // -42 number

// 6. Ternary Operator
console.log("\n📚 6. Ternary Operator");
console.log("--------------------");

console.log("Ternary operator: condition ? valueIfTrue : valueIfFalse");

let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age} is ${status}`);

let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";
console.log(`Score ${score} gets grade ${grade}`);

// 7. Bitwise Operators
console.log("\n📚 7. Bitwise Operators");
console.log("---------------------");

console.log("Bitwise operators work with binary representations:");
console.log("& (AND), | (OR), ^ (XOR), ~ (NOT)");
console.log("<< (Left shift), >> (Right shift), >>> (Unsigned right shift)");

let numA = 5; // 101 in binary
let numB = 3; // 011 in binary

console.log("Bitwise operations:");
console.log(`${numA} & ${numB}:`, numA & numB); // 1 (001)
console.log(`${numA} | ${numB}:`, numA | numB); // 7 (111)
console.log(`${numA} ^ ${numB}:`, numA ^ numB); // 6 (110)
console.log(`~${numA}:`, ~numA); // -6 (010)
console.log(`${numA} << 1:`, numA << 1); // 10 (1010)
console.log(`${numA} >> 1:`, numA >> 1); // 2 (10)

// 8. String Operators
console.log("\n📚 8. String Operators");
console.log("--------------------");

console.log("String operators work with text values:");
console.log("+ (Concatenation), += (Concatenate and assign)");

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

let greeting = "Hello, ";
greeting += fullName;
console.log("Greeting:", greeting);

// Template literals
let templateGreeting = `Hello, ${firstName} ${lastName}!`;
console.log("Template greeting:", templateGreeting);

// 9. Operator Precedence
console.log("\n📚 9. Operator Precedence");
console.log("------------------------");

console.log("Operator precedence determines the order of operations:");
console.log("1. () - Parentheses (highest precedence)");
console.log("2. ++ -- - Unary operators");
console.log("3. ** - Exponentiation");
console.log("4. * / % - Multiplication, division, modulus");
console.log("5. + - - Addition, subtraction");
console.log("6. < > <= >= - Comparison operators");
console.log("7. == === != !== - Equality operators");
console.log("8. && - Logical AND");
console.log("9. || - Logical OR");
console.log("10. ? : - Ternary operator");
console.log("11. = += -= *= /= %= - Assignment operators");

let result1 = 2 + 3 * 4;
let result2 = (2 + 3) * 4;
let result3 = 2 + 3 * 4 ** 2;
let result4 = (2 + 3) * (4 ** 2);

console.log("Precedence examples:");
console.log("2 + 3 * 4 =", result1); // 14
console.log("(2 + 3) * 4 =", result2); // 20
console.log("2 + 3 * 4 ** 2 =", result3); // 50
console.log("(2 + 3) * (4 ** 2) =", result4); // 80

// 10. Operator Overloading
console.log("\n📚 10. Operator Overloading");
console.log("-------------------------");

console.log("JavaScript doesn't support operator overloading, but operators behave differently with different types:");

// String concatenation vs addition
console.log("String concatenation vs addition:");
console.log("'5' + '3' =", '5' + '3'); // "53"
console.log("'5' + 3 =", '5' + 3); // "53"
console.log("5 + '3' =", 5 + '3'); // "53"
console.log("5 + 3 =", 5 + 3); // 8


console.log("String concatenation vs subtraction:");
console.log("'5' - '3' =", '5' - '3'); // 2
console.log("'5' - 3 =", '5' - 3); // 2
console.log("5 - '3' =", 5 - '3'); // 2
console.log("5 - 3 =", 5 - 3); // 2


// Type coercion examples
console.log("Type coercion examples:");
console.log("'5' - '3' =", '5' - '3'); // 2
console.log("'5' * '3' =", '5' * '3'); // 15
console.log("'5' / '3' =", '5' / '3'); // 1.666...
console.log("'5' % '3' =", '5' % '3'); // 2

// 11. Comparison with Different Types
console.log("\n📚 11. Comparison with Different Types");
console.log("-------------------------------------");

console.log("Comparison behavior with different types:");

// String comparison
console.log("String comparison:");
console.log("'apple' < 'banana':", 'apple' < 'banana'); // true
console.log("'apple' > 'banana':", 'apple' > 'banana'); // false
console.log("'apple' === 'apple':", 'apple' === 'apple'); // true

// Number comparison
console.log("Number comparison:");
console.log("5 < 10:", 5 < 10); // true
console.log("5 > 10:", 5 > 10); // false
console.log("5 === 5:", 5 === 5); // true

// Mixed type comparison
console.log("Mixed type comparison:");
console.log("5 < '10':", 5 < '10'); // true (string converted to number)
console.log("'5' < 10:", '5' < 10); // true (string converted to number)
console.log("'5' < '10':", '5' < '10'); // false (string comparison)

// 12. Logical Operators with Non-Boolean Values
console.log("\n📚 12. Logical Operators with Non-Boolean Values");
console.log("----------------------------------------------");

console.log("Logical operators work with truthy/falsy values:");

// AND operator
console.log("AND operator:");
console.log("'hello' && 'world':", 'hello' && 'world'); // 'world'
console.log("'' && 'world':", '' && 'world'); // ''
console.log("'hello' && 0:", 'hello' && 0); // 0
console.log("'hello' && null:", 'hello' && null); // null

// OR operator
console.log("OR operator:");
console.log("'hello' || 'world':", 'hello' || 'world'); // 'hello'
console.log("'' || 'world':", '' || 'world'); // 'world'
console.log("'hello' || 0:", 'hello' || 0); // 'hello'
console.log("'hello' || null:", 'hello' || null); // 'hello'

// 13. Operator Best Practices
console.log("\n📚 13. Operator Best Practices");
console.log("-----------------------------");

console.log("Best practices for using operators:");
console.log("1. Use === instead of == for equality");
console.log("2. Use parentheses to clarify precedence");
console.log("3. Be aware of type coercion");
console.log("4. Use template literals for string concatenation");
console.log("5. Use logical operators for default values");
console.log("6. Use ternary operator for simple conditionals");

// Example of best practices
function greetUser(name, age) {
    // Use logical OR for default values
    let userName = name || 'Guest';
    let userAge = age || 0;
    
    // Use strict equality
    if (userAge === 0) {
        return `Hello, ${userName}!`;
    }
    
    // Use ternary operator for simple conditional
    let status = userAge >= 18 ? 'adult' : 'minor';
    
    // Use template literals
    return `Hello, ${userName}! You are a ${status}.`;
}

console.log("Best practices example:");
console.log(greetUser('John', 25));
console.log(greetUser('Jane', 16));
console.log(greetUser());

// 14. Operator Performance
console.log("\n📚 14. Operator Performance");
console.log("--------------------------");

console.log("Operator performance considerations:");
console.log("1. Arithmetic operators are fast");
console.log("2. String concatenation with + is slower than template literals");
console.log("3. Bitwise operators are faster than arithmetic for some operations");
console.log("4. Logical operators use short-circuit evaluation");

// Performance test
function performanceTest() {
    let iterations = 1000000;
    
    // String concatenation test
    let start = performance.now();
    let result1 = '';
    for (let i = 0; i < iterations; i++) {
        result1 += 'a';
    }
    let end = performance.now();
    console.log("String concatenation:", (end - start).toFixed(2), "ms");
    
    // Template literal test
    start = performance.now();
    let result2 = '';
    for (let i = 0; i < iterations; i++) {
        result2 = `${result2}a`;
    }
    end = performance.now();
    console.log("Template literal:", (end - start).toFixed(2), "ms");
    
    // Array join test
    start = performance.now();
    let result3 = [];
    for (let i = 0; i < iterations; i++) {
        result3.push('a');
    }
    result3 = result3.join('');
    end = performance.now();
    console.log("Array join:", (end - start).toFixed(2), "ms");
}

performanceTest();

// 15. Operator Debugging
console.log("\n📚 15. Operator Debugging");
console.log("------------------------");

console.log("Debugging operator-related issues:");
console.log("1. Check operator precedence");
console.log("2. Verify type coercion behavior");
console.log("3. Use console.log to inspect intermediate values");
console.log("4. Test with different data types");

// Debugging example
function debugOperators() {
    let a = '5';
    let b = 3;
    
    console.log("Debugging operators:");
    console.log("a:", a, typeof a);
    console.log("b:", b, typeof b);
    console.log("a + b:", a + b, typeof (a + b));
    console.log("a - b:", a - b, typeof (a - b));
    console.log("a * b:", a * b, typeof (a * b));
    console.log("a / b:", a / b, typeof (a / b));
    console.log("a == b:", a == b);
    console.log("a === b:", a === b);
}

debugOperators();

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use === instead of == for equality comparison");
console.log("- Understand operator precedence and use parentheses when needed");
console.log("- Be aware of type coercion with different operators");
console.log("- Use logical operators for default values and short-circuit evaluation");
console.log("- Use template literals for string concatenation");
console.log("- Use ternary operator for simple conditionals");
console.log("- Debug operator issues by checking types and intermediate values");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice all arithmetic operators");
console.log("2. Use comparison operators with different types");
console.log("3. Implement logical operators for conditional logic");
console.log("4. Use assignment operators for variable updates");
console.log("5. Debug operator precedence issues");
