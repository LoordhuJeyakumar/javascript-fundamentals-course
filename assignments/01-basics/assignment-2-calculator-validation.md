# Assignment 2: Simple Calculator with Validation

## 🎯 **Goal**
Build a command-line calculator with comprehensive input validation and error handling using JavaScript basics. This assignment will test your understanding of operators, control flow, type conversion, and best practices.

## 📝 **Requirements**

### **1. Basic Calculator Functions**

#### **a. Arithmetic Operations**
- `add(a, b)`: Addition
- `subtract(a, b)`: Subtraction
- `multiply(a, b)`: Multiplication
- `divide(a, b)`: Division
- `modulus(a, b)`: Modulus (remainder)
- `power(a, b)`: Exponentiation

#### **b. Advanced Operations**
- `squareRoot(number)`: Square root
- `percentage(value, total)`: Calculate percentage
- `factorial(number)`: Factorial calculation
- `absoluteValue(number)`: Absolute value

### **2. Input Validation**

#### **a. Number Validation**
- `validateNumber(value)`:
  - Checks if value is a valid number
  - Handles strings that can be converted to numbers
  - Returns `true` if valid, `false` if invalid

#### **b. Operation Validation**
- `validateOperation(operation)`:
  - Checks if operation is supported
  - Returns `true` if valid, `false` if invalid
  - Supported operations: +, -, *, /, %, **, sqrt, %, !, abs

### **3. Error Handling**

#### **a. Division by Zero**
- Handle division by zero gracefully
- Return appropriate error message

#### **b. Invalid Inputs**
- Handle non-numeric inputs
- Handle invalid operations
- Provide meaningful error messages

#### **c. Edge Cases**
- Handle negative numbers for square root
- Handle large numbers for factorial
- Handle decimal numbers appropriately

### **4. Calculator Interface**

#### **a. Main Calculator Function**
- `calculate(operation, a, b)`:
  - Main function that handles all operations
  - Validates inputs before processing
  - Returns result or error message

#### **b. Calculator Menu**
- `displayMenu()`:
  - Shows available operations
  - Provides usage examples
  - Displays current settings

### **5. History and Memory**

#### **a. Calculation History**
- Store last 10 calculations
- Display history when requested
- Clear history option

#### **b. Memory Functions**
- `storeInMemory(value)`: Store value in memory
- `recallFromMemory()`: Recall value from memory
- `clearMemory()`: Clear memory

### **6. Advanced Features**

#### **a. Batch Calculations**
- `calculateBatch(operations)`:
  - Process multiple operations at once
  - Return array of results

#### **b. Expression Parser**
- `parseExpression(expression)`:
  - Parse simple mathematical expressions
  - Handle parentheses and operator precedence
  - Example: "2 + 3 * 4"

## 💡 **Hints**
- Use `try-catch` blocks for error handling
- Use `isNaN()` and `isFinite()` for number validation
- Use `Math` object for mathematical functions
- Use arrays to store calculation history
- Use objects to store memory values
- Use `console.log()` for user interface

## 🚀 **Example Usage (Expected Output)**

```javascript
// Basic operations
console.log("Basic Operations:");
console.log("2 + 3 =", calculate("+", 2, 3)); // Expected: 5
console.log("10 - 4 =", calculate("-", 10, 4)); // Expected: 6
console.log("3 * 4 =", calculate("*", 3, 4)); // Expected: 12
console.log("15 / 3 =", calculate("/", 15, 3)); // Expected: 5
console.log("17 % 5 =", calculate("%", 17, 5)); // Expected: 2
console.log("2 ** 3 =", calculate("**", 2, 3)); // Expected: 8

// Advanced operations
console.log("\nAdvanced Operations:");
console.log("√16 =", calculate("sqrt", 16)); // Expected: 4
console.log("25% of 200 =", calculate("%", 25, 200)); // Expected: 50
console.log("5! =", calculate("!", 5)); // Expected: 120
console.log("|-7| =", calculate("abs", -7)); // Expected: 7

// Error handling
console.log("\nError Handling:");
console.log("10 / 0 =", calculate("/", 10, 0)); // Expected: Error: Division by zero
console.log("√-4 =", calculate("sqrt", -4)); // Expected: Error: Cannot calculate square root of negative number
console.log("Invalid operation =", calculate("invalid", 2, 3)); // Expected: Error: Invalid operation

// Input validation
console.log("\nInput Validation:");
console.log("'hello' + 3 =", calculate("+", "hello", 3)); // Expected: Error: Invalid number input
console.log("2 + 'world' =", calculate("+", 2, "world")); // Expected: Error: Invalid number input

// Memory functions
console.log("\nMemory Functions:");
storeInMemory(42);
console.log("Stored 42 in memory");
console.log("Recalled from memory:", recallFromMemory()); // Expected: 42
clearMemory();
console.log("Memory cleared");

// History
console.log("\nCalculation History:");
displayHistory(); // Expected: List of last 10 calculations

// Batch calculations
console.log("\nBatch Calculations:");
let operations = [
    { op: "+", a: 2, b: 3 },
    { op: "-", a: 10, b: 4 },
    { op: "*", a: 3, b: 4 }
];
let results = calculateBatch(operations);
console.log("Batch results:", results); // Expected: [5, 6, 12]

// Expression parsing
console.log("\nExpression Parsing:");
console.log("2 + 3 * 4 =", parseExpression("2 + 3 * 4")); // Expected: 14
console.log("(2 + 3) * 4 =", parseExpression("(2 + 3) * 4")); // Expected: 20
```

## 🌟 **Bonus Challenges (Optional)**
- Implement scientific calculator functions (sin, cos, tan, log)
- Add unit conversion functions (temperature, length, weight)
- Implement a graphical calculator interface
- Add calculation statistics (average, min, max)
- Implement calculation export/import functionality

## 提交 (Submission)
- Create a new JavaScript file (e.g., `calculator.js`) in your `student-work` folder
- Implement all the required functions and demonstrate their usage as shown in the example
- Add comprehensive error handling and input validation
- Include debugging statements throughout your code
- Add comments to explain your code

Good luck! 🧮
