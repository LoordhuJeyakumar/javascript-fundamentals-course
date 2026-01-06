# Assignment 2: Complete Loop Mastery Project

## 📝 Assignment Overview

Create a comprehensive program that demonstrates mastery of ALL types of JavaScript loops. This project will showcase your understanding of for loops, while loops, for...of loops, for...in loops, array methods, nested loops, and optimization techniques.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Demonstrate proficiency with all loop types
- Create complex patterns and data processing algorithms
- Apply loop optimization techniques
- Build a complete application using loops
- Show understanding of when to use each loop type

## 📋 Requirements

### Basic Requirements (Must Complete)
Create the following functions:

1. **`createNumberPattern(patternType, size)`** - Creates various number patterns
2. **`processStudentData(students)`** - Processes student data arrays
3. **`analyzeSalesData(sales)`** - Analyzes sales data with different loop types
4. **`generateGameBoard(size)`** - Creates a game board using nested loops
5. **`optimizeDataProcessing(data)`** - Demonstrates loop optimization

### Advanced Requirements (Bonus Points)
Create these additional functions:

6. **`createSpiralPattern(size)`** - Creates a spiral number pattern
7. **`processMatrixOperations(matrix)`** - Performs matrix operations
8. **`buildDataPipeline(data)`** - Chains multiple array methods
9. **`performanceComparison(data)`** - Compares loop performance

## 📝 Implementation Guidelines

### Function Structure
Each function should:
- Use the most appropriate loop type for the task
- Include comments explaining why you chose that loop type
- Handle edge cases and errors gracefully
- Return or display results clearly
- Follow best practices for performance

### Pattern Types to Support
- **Triangle**: Numbers in triangular pattern
- **Pyramid**: Numbers in pyramid pattern
- **Diamond**: Numbers in diamond pattern
- **Chessboard**: Alternating pattern
- **Spiral**: Numbers in spiral pattern

### Loop Types to Demonstrate
- **For loops**: For counting and indexing
- **While loops**: For conditional iteration
- **For...of loops**: For array iteration
- **For...in loops**: For object iteration
- **Array methods**: forEach, map, filter, reduce
- **Nested loops**: For 2D patterns and matrices

## 🧪 Testing Requirements

Create a test file called `test-loops-mastery.js` that:
- Tests each function with various inputs
- Tests edge cases (empty arrays, zero values, etc.)
- Displays results clearly with explanations
- Shows performance comparisons
- Demonstrates different loop types

### Test Cases to Include
```javascript
// Example test cases
console.log("=== Testing Number Patterns ===");
createNumberPattern('triangle', 5);
createNumberPattern('pyramid', 4);
createNumberPattern('diamond', 3);

console.log("=== Testing Data Processing ===");
let students = [
    { name: "Alice", grades: [95, 87, 92] },
    { name: "Bob", grades: [78, 85, 90] }
];
processStudentData(students);

console.log("=== Testing Performance ===");
let testData = Array.from({length: 1000}, (_, i) => i);
performanceComparison(testData);
```

## 📊 Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Functionality** | 30 | All functions work correctly |
| **Loop Usage** | 25 | Appropriate loop types used |
| **Code Quality** | 20 | Clean, readable code with comments |
| **Performance** | 15 | Optimization techniques applied |
| **Testing** | 10 | Comprehensive test cases |

### Grade Breakdown
- **A (90-100%)**: All requirements met, excellent code quality, comprehensive testing
- **B (80-89%)**: Most requirements met, good code quality, adequate testing
- **C (70-79%)**: Basic requirements met, acceptable code quality
- **D (60-69%)**: Some requirements met, needs improvement
- **F (Below 60%)**: Requirements not met

## 📅 Due Date

**Due**: End of Week 3  
**Late Penalty**: 10% per day late  
**Submission**: Upload your `loops-mastery.js` and `test-loops-mastery.js` files

## 💡 Tips for Success

### Start Simple
1. Begin with basic number patterns
2. Test each function as you create it
3. Add complexity gradually
4. Move to advanced features last

### Loop Selection Guide
- **For loops**: When you need index or counting
- **While loops**: When condition is more important than counting
- **For...of loops**: When you only need values from arrays
- **For...in loops**: When you need object properties
- **Array methods**: When transforming or filtering data
- **Nested loops**: When working with 2D data

### Testing Strategy
1. Test with normal inputs first
2. Test with edge cases (empty arrays, zero values)
3. Test with different pattern sizes
4. Verify all functions work together
5. Compare performance of different approaches

## 🚨 Common Mistakes to Avoid

1. **Wrong Loop Type**: Choose appropriate loop for each task
2. **Infinite Loops**: Always ensure loop conditions change
3. **Off-by-One Errors**: Pay attention to array indices
4. **Poor Performance**: Avoid unnecessary work inside loops
5. **Missing Comments**: Explain why you chose each loop type
6. **Not Testing Edge Cases**: Test with various inputs

## 📚 Resources

- [MDN Loops Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Loop Optimization Tips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

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
- [ ] Appropriate loop types are used for each task
- [ ] Comments explain loop choices
- [ ] Test file is comprehensive
- [ ] Code is optimized and readable
- [ ] Files are named correctly
- [ ] All functions work as expected

## 🎯 Sample Output

Your program should produce output like:
```
=== Number Patterns ===
Triangle Pattern (size 5):
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Pyramid Pattern (size 4):
   1
  1 2
 1 2 3
1 2 3 4

=== Data Processing ===
Student Analysis:
Alice: Average 91.3, Grade A
Bob: Average 84.3, Grade B

=== Performance Comparison ===
Traditional for loop: 2.5ms
For...of loop: 3.1ms
Array methods: 4.2ms
```

---

**Good luck! This assignment will demonstrate your complete mastery of JavaScript loops! 🔄**
