# Assignment 1: Basic Loops Mastery

## 📝 Assignment Overview

Create a comprehensive program that demonstrates mastery of basic loop concepts including for loops, while loops, and loop control statements. This assignment focuses on fundamental loop patterns and their practical applications.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Master for loop syntax and variations
- Use while loops for conditional iteration
- Apply break and continue statements effectively
- Create practical loop-based solutions
- Handle edge cases and error conditions
- Write clean, readable loop code

## 📋 Requirements

### **Part 1: Basic For Loops (25 points)**

Create the following functions using for loops:

#### **1.1 Number Sequence Generator**
```javascript
function generateSequence(start, end, step = 1) {
    // Generate a sequence of numbers from start to end
    // Return an array of numbers
}
```

**Requirements:**
- Handle positive and negative steps
- Validate input parameters
- Return empty array for invalid inputs
- Support decimal steps

#### **1.2 Multiplication Table Generator**
```javascript
function generateMultiplicationTable(number, size = 10) {
    // Generate multiplication table for a given number
    // Return formatted table as string
}
```

**Requirements:**
- Generate table up to specified size
- Format output nicely
- Handle edge cases (zero, negative numbers)
- Return formatted string

#### **1.3 Factorial Calculator**
```javascript
function calculateFactorial(n) {
    // Calculate factorial using for loop
    // Return the factorial result
}
```

**Requirements:**
- Handle edge cases (0, 1, negative numbers)
- Use for loop implementation
- Return appropriate error messages
- Support large numbers

#### **1.4 Sum of Squares**
```javascript
function sumOfSquares(n) {
    // Calculate sum of squares from 1 to n
    // Return the sum
}
```

**Requirements:**
- Use for loop to calculate sum
- Handle edge cases
- Validate input
- Return correct mathematical result

### **Part 2: While Loops (25 points)**

Create the following functions using while loops:

#### **2.1 Number Guessing Game**
```javascript
function numberGuessingGame(target, maxAttempts = 10) {
    // Simulate a number guessing game
    // Return game result object
}
```

**Requirements:**
- Use while loop for game logic
- Track number of attempts
- Provide hints (higher/lower)
- Return game statistics

#### **2.2 Collatz Sequence**
```javascript
function collatzSequence(n) {
    // Generate Collatz sequence starting from n
    // Return array of sequence
}
```

**Requirements:**
- Use while loop for sequence generation
- Apply Collatz rules (n/2 if even, 3n+1 if odd)
- Stop when sequence reaches 1
- Return complete sequence

#### **2.3 Prime Number Checker**
```javascript
function isPrime(n) {
    // Check if a number is prime using while loop
    // Return boolean result
}
```

**Requirements:**
- Use while loop for prime checking
- Optimize by checking only up to sqrt(n)
- Handle edge cases (0, 1, 2)
- Return accurate boolean result

#### **2.4 Digit Counter**
```javascript
function countDigits(n) {
    // Count number of digits in a number
    // Return digit count
}
```

**Requirements:**
- Use while loop for digit counting
- Handle negative numbers
- Handle zero
- Return correct digit count

### **Part 3: Loop Control Statements (25 points)**

Create the following functions using break and continue:

#### **3.1 Find First Even Number**
```javascript
function findFirstEven(numbers) {
    // Find first even number in array
    // Return the number or null if none found
}
```

**Requirements:**
- Use for loop with break
- Return first even number found
- Return null if no even numbers
- Handle empty arrays

#### **3.2 Skip Negative Numbers**
```javascript
function sumPositiveNumbers(numbers) {
    // Sum only positive numbers, skip negative ones
    // Return the sum
}
```

**Requirements:**
- Use for loop with continue
- Skip negative numbers
- Sum only positive numbers
- Handle edge cases

#### **3.3 Find Common Elements**
```javascript
function findCommonElements(array1, array2) {
    // Find common elements between two arrays
    // Return array of common elements
}
```

**Requirements:**
- Use nested loops with break
- Avoid duplicate common elements
- Handle empty arrays
- Return unique common elements

#### **3.4 Process Until Condition**
```javascript
function processUntilCondition(numbers, condition) {
    // Process numbers until condition is met
    // Return processed numbers
}
```

**Requirements:**
- Use while loop with break
- Process numbers until condition is true
- Return processed array
- Handle various conditions

### **Part 4: Practical Applications (25 points)**

Create the following practical applications:

#### **4.1 Grade Calculator**
```javascript
function calculateGrades(scores) {
    // Calculate letter grades for scores
    // Return array of grade objects
}
```

**Requirements:**
- Use for loop to process scores
- Apply grading scale (A: 90+, B: 80+, etc.)
- Return array of {score, grade} objects
- Handle invalid scores

#### **4.2 Password Strength Checker**
```javascript
function checkPasswordStrength(password) {
    // Check password strength using loops
    // Return strength object
}
```

**Requirements:**
- Use for loop to analyze password
- Check for uppercase, lowercase, numbers, symbols
- Calculate strength score
- Return detailed strength report

#### **4.3 Data Validation**
```javascript
function validateData(data, rules) {
    // Validate data against rules using loops
    // Return validation result
}
```

**Requirements:**
- Use for loop to check each rule
- Support multiple validation rules
- Return detailed validation report
- Handle various data types

#### **4.4 Simple Calculator**
```javascript
function simpleCalculator(operations) {
    // Perform calculations using loops
    // Return calculation results
}
```

**Requirements:**
- Use for loop to process operations
- Support basic operations (+, -, *, /)
- Handle division by zero
- Return calculation history

## 📝 Implementation Guidelines

### **Code Structure**
```javascript
// Example structure for your solution
const BasicLoops = {
    // Part 1: Basic For Loops
    generateSequence,
    generateMultiplicationTable,
    calculateFactorial,
    sumOfSquares,
    
    // Part 2: While Loops
    numberGuessingGame,
    collatzSequence,
    isPrime,
    countDigits,
    
    // Part 3: Loop Control
    findFirstEven,
    sumPositiveNumbers,
    findCommonElements,
    processUntilCondition,
    
    // Part 4: Practical Applications
    calculateGrades,
    checkPasswordStrength,
    validateData,
    simpleCalculator
};
```

### **Error Handling**
- Validate all input parameters
- Handle edge cases gracefully
- Provide meaningful error messages
- Use try-catch blocks where appropriate

### **Testing**
- Create test cases for each function
- Test edge cases and error conditions
- Verify correct output format
- Test with various input types

### **Documentation**
- Add JSDoc comments for all functions
- Explain complex algorithms
- Provide usage examples
- Document expected behavior

## 🎯 Assessment Criteria

### **Functionality (40 points)**
- All functions work correctly
- Handle edge cases properly
- Error handling is comprehensive
- Output format is correct

### **Code Quality (30 points)**
- Code is clean and readable
- Functions are well-organized
- Comments explain complex logic
- Follows JavaScript best practices

### **Loop Usage (20 points)**
- Appropriate use of for loops
- Effective use of while loops
- Proper use of break and continue
- Efficient loop implementation

### **Creativity (10 points)**
- Creative solutions to problems
- Additional useful features
- Elegant code design
- Real-world applicability

## 📚 Example Usage

### **Basic For Loops Example**
```javascript
// Generate sequence
const sequence = BasicLoops.generateSequence(1, 10, 2);
console.log(sequence); // [1, 3, 5, 7, 9]

// Multiplication table
const table = BasicLoops.generateMultiplicationTable(5, 5);
console.log(table);
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

// Factorial
const factorial = BasicLoops.calculateFactorial(5);
console.log(factorial); // 120
```

### **While Loops Example**
```javascript
// Collatz sequence
const collatz = BasicLoops.collatzSequence(6);
console.log(collatz); // [6, 3, 10, 5, 16, 8, 4, 2, 1]

// Prime check
const isPrime = BasicLoops.isPrime(17);
console.log(isPrime); // true

// Digit count
const digits = BasicLoops.countDigits(12345);
console.log(digits); // 5
```

### **Loop Control Example**
```javascript
// Find first even
const firstEven = BasicLoops.findFirstEven([1, 3, 5, 2, 4]);
console.log(firstEven); // 2

// Sum positive numbers
const sum = BasicLoops.sumPositiveNumbers([1, -2, 3, -4, 5]);
console.log(sum); // 9

// Common elements
const common = BasicLoops.findCommonElements([1, 2, 3], [2, 3, 4]);
console.log(common); // [2, 3]
```

### **Practical Applications Example**
```javascript
// Grade calculation
const grades = BasicLoops.calculateGrades([85, 92, 78, 96, 88]);
console.log(grades);
// [{score: 85, grade: 'B'}, {score: 92, grade: 'A'}, ...]

// Password strength
const strength = BasicLoops.checkPasswordStrength("MyPass123!");
console.log(strength);
// {score: 8, level: 'Strong', details: {...}}

// Data validation
const validation = BasicLoops.validateData(
    {name: "John", age: 25, email: "john@example.com"},
    {name: "required", age: "number", email: "email"}
);
console.log(validation); // {valid: true, errors: []}
```

## 🚀 Bonus Challenges

### **Challenge 1: Advanced Number Patterns (10 points)**
Create functions that generate complex number patterns using loops.

### **Challenge 2: Loop Performance Optimization (10 points)**
Optimize your loop implementations for better performance.

### **Challenge 3: Interactive Loop Applications (10 points)**
Create interactive applications that use loops for user interaction.

## 📝 Submission Requirements

### **Files to Submit**
1. `basic-loops.js` - Main implementation
2. `test-basic-loops.js` - Test cases
3. `README.md` - Documentation and usage examples

### **Code Organization**
- Use ES6+ features
- Follow consistent naming conventions
- Organize code into logical sections
- Include comprehensive comments

### **Testing**
- Test all functions thoroughly
- Include edge case testing
- Verify error handling
- Test with various input types

## 🎯 Learning Outcomes

After completing this assignment, you will have:
- ✅ Mastered for loop syntax and variations
- ✅ Used while loops for conditional iteration
- ✅ Applied break and continue statements effectively
- ✅ Created practical loop-based solutions
- ✅ Handled edge cases and error conditions
- ✅ Written clean, readable loop code
- ✅ Built real-world applicable solutions

## 📚 Resources

- [MDN For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [MDN While Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)
- [JavaScript.info Loops](https://javascript.info/while-for)
- [W3Schools Loops](https://www.w3schools.com/js/js_loop_for.asp)

---

**Remember: This assignment tests your understanding of basic loop concepts. Focus on writing clean, efficient code and handling edge cases properly! 🔄**
