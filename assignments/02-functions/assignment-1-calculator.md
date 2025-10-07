# Assignment 1: Calculator Function Library

## 📝 Assignment Overview

Create a comprehensive calculator function library that demonstrates your understanding of JavaScript functions, parameters, return values, and basic mathematical operations.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Practice creating multiple functions
- Understand parameter passing and return values
- Apply mathematical operations in JavaScript
- Learn to organize code into logical functions
- Practice error handling and input validation

## 📋 Requirements

### Basic Requirements (Must Complete)
Create the following functions:

1. **`add(a, b)`** - Adds two numbers
2. **`subtract(a, b)`** - Subtracts b from a
3. **`multiply(a, b)`** - Multiplies two numbers
4. **`divide(a, b)`** - Divides a by b (handle division by zero)
5. **`power(base, exponent)`** - Raises base to the power of exponent
6. **`squareRoot(number)`** - Calculates square root (handle negative numbers)
7. **`percentage(part, whole)`** - Calculates percentage
8. **`isPrime(number)`** - Checks if a number is prime

### Advanced Requirements (Bonus Points)
Create these additional functions:

9. **`factorial(number)`** - Calculates factorial
10. **`fibonacci(n)`** - Returns nth Fibonacci number
11. **`calculateCircleArea(radius)`** - Calculates circle area
12. **`calculateCircleCircumference(radius)`** - Calculates circle circumference

## 📝 Implementation Guidelines

### Function Structure
Each function should:
- Have a clear, descriptive name
- Take appropriate parameters
- Return the correct result
- Handle edge cases and errors
- Include comments explaining what it does

### Error Handling
- **Division by zero**: Return "Cannot divide by zero"
- **Negative square root**: Return "Cannot calculate square root of negative number"
- **Invalid inputs**: Return "Invalid input" for non-numeric inputs

### Code Organization
- Create a single file called `calculator.js`
- Group related functions together
- Add comments to explain complex logic
- Use consistent naming conventions

## 🧪 Testing Requirements

Create a test file called `test-calculator.js` that:
- Tests each function with various inputs
- Tests edge cases (zero, negative numbers, etc.)
- Displays results clearly
- Shows both expected and actual results

### Test Cases to Include
```javascript
// Example test cases
console.log("Testing add(5, 3):", add(5, 3)); // Expected: 8
console.log("Testing divide(10, 0):", divide(10, 0)); // Expected: "Cannot divide by zero"
console.log("Testing squareRoot(-4):", squareRoot(-4)); // Expected: "Cannot calculate square root of negative number"
```

## 📊 Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Functionality** | 40 | All functions work correctly |
| **Code Quality** | 20 | Clean, readable code with comments |
| **Error Handling** | 20 | Proper handling of edge cases |
| **Testing** | 15 | Comprehensive test cases |
| **Creativity** | 5 | Additional features or improvements |

### Grade Breakdown
- **A (90-100%)**: All requirements met, excellent code quality, comprehensive testing
- **B (80-89%)**: Most requirements met, good code quality, adequate testing
- **C (70-79%)**: Basic requirements met, acceptable code quality
- **D (60-69%)**: Some requirements met, needs improvement
- **F (Below 60%)**: Requirements not met

## 📅 Due Date

**Due**: End of Week 2  
**Late Penalty**: 10% per day late  
**Submission**: Upload your `calculator.js` and `test-calculator.js` files

## 💡 Tips for Success

### Start Simple
1. Begin with basic arithmetic functions
2. Test each function as you create it
3. Add error handling gradually
4. Move to advanced functions last

### Testing Strategy
1. Test with normal inputs first
2. Test with edge cases (zero, negative numbers)
3. Test with invalid inputs
4. Verify all functions work together

### Code Quality
1. Use meaningful variable names
2. Add comments for complex logic
3. Keep functions focused on one task
4. Use consistent formatting

## 🚨 Common Mistakes to Avoid

1. **Forgetting return statements**
2. **Not handling division by zero**
3. **Incorrect parameter order**
4. **Missing error handling**
5. **Poor variable naming**
6. **Not testing edge cases**

## 📚 Resources

- [MDN Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript Number Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Error Handling in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## 🤝 Getting Help

If you get stuck:
1. Review the lesson materials
2. Check the solutions folder for examples
3. Ask questions during office hours
4. Form study groups with classmates
5. Use online resources and documentation

## 📝 Submission Checklist

Before submitting, make sure:
- [ ] All required functions are implemented
- [ ] Error handling is included
- [ ] Test file is comprehensive
- [ ] Code is commented and readable
- [ ] Files are named correctly
- [ ] All functions work as expected

---

**Good luck! Remember to start early and ask for help if needed. 🚀**
