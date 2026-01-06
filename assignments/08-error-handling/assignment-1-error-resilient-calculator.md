# Assignment 1: Error-Resilient Calculator

## 🎯 **Goal**
Build a robust calculator application that handles all possible errors gracefully, including input validation, mathematical errors, and edge cases. This assignment will test your understanding of error handling fundamentals and best practices.

## 📝 **Requirements**

### **1. Basic Calculator Operations**
- Create a `Calculator` class with methods for basic operations:
  - `add(a, b)` - Addition
  - `subtract(a, b)` - Subtraction
  - `multiply(a, b)` - Multiplication
  - `divide(a, b)` - Division
  - `power(a, b)` - Exponentiation
  - `sqrt(a)` - Square root
  - `factorial(n)` - Factorial

### **2. Input Validation**
- Validate that all inputs are numbers
- Handle edge cases:
  - Division by zero
  - Negative numbers for square root
  - Non-integer numbers for factorial
  - Very large numbers that might cause overflow
  - Invalid operation types

### **3. Error Handling**
- Create custom error classes for different error types:
  - `ValidationError` - For input validation failures
  - `MathError` - For mathematical errors (division by zero, etc.)
  - `RangeError` - For values out of acceptable range
  - `OverflowError` - For calculations that result in overflow

### **4. Error Recovery**
- Implement retry mechanisms for transient errors
- Provide fallback calculations where possible
- Log all errors with context information
- Return meaningful error messages to users

### **5. Advanced Features**
- Support for complex expressions (e.g., "2 + 3 * 4")
- Memory functions (store, recall, clear)
- History of calculations
- Undo/redo functionality

## 💡 **Hints**
- Use try-catch blocks for all operations
- Create custom error classes that extend the base Error class
- Implement input validation before performing calculations
- Use appropriate error types for different scenarios
- Consider using a stack-based approach for complex expressions
- Implement proper error logging and recovery mechanisms

## 🚀 **Example Usage (Expected Output)**

```javascript
let calc = new Calculator();

// Basic operations
console.log(calc.add(5, 3));        // 8
console.log(calc.divide(10, 0));    // Error: Division by zero
console.log(calc.sqrt(-4));         // Error: Cannot calculate square root of negative number

// Complex expressions
console.log(calc.evaluate("2 + 3 * 4"));  // 14
console.log(calc.evaluate("10 / 0"));     // Error: Division by zero

// Memory functions
calc.memoryStore(42);
console.log(calc.memoryRecall());   // 42

// History
console.log(calc.getHistory());     // Array of calculation history
```

## 🌟 **Bonus Challenges (Optional)**
- Implement scientific calculator functions (sin, cos, tan, log, etc.)
- Add support for different number bases (binary, hexadecimal)
- Create a web interface for the calculator
- Implement unit tests for all error scenarios
- Add support for variables and constants

## 📋 **Error Scenarios to Handle**
1. **Input Validation Errors:**
   - Non-numeric inputs
   - Missing or undefined parameters
   - Invalid operation types

2. **Mathematical Errors:**
   - Division by zero
   - Square root of negative numbers
   - Factorial of negative numbers
   - Overflow in calculations

3. **Range Errors:**
   - Numbers too large for JavaScript to handle
   - Numbers too small (underflow)
   - Invalid ranges for specific operations

4. **Expression Parsing Errors:**
   - Invalid syntax in expressions
   - Mismatched parentheses
   - Unknown operators or functions

## 提交 (Submission)
- Create a new JavaScript file (e.g., `error-resilient-calculator.js`) in your `student-work` folder
- Implement all the required functionality with comprehensive error handling
- Include examples demonstrating all error scenarios
- Add comments explaining your error handling approach
- Test your calculator with various inputs and edge cases

## 📊 **Evaluation Criteria**
- **Error Handling (40%):** Proper use of try-catch blocks, custom error classes, and error recovery
- **Input Validation (25%):** Comprehensive validation of all inputs and edge cases
- **Code Quality (20%):** Clean, readable code with proper error handling patterns
- **Functionality (15%):** All required calculator operations work correctly

Good luck! 🧮
