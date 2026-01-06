# Assignment 2: Number Patterns and Data Processing

## 📝 Assignment Overview

Create a comprehensive program that demonstrates your understanding of different types of loops by generating various number patterns and processing data arrays.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Practice using different types of loops effectively
- Create complex number patterns
- Process and analyze data arrays
- Apply loop optimization techniques
- Demonstrate understanding of nested loops

## 📋 Requirements

### Basic Requirements (Must Complete)
Create the following functions:

1. **`printNumberPattern(pattern, size)`** - Prints different number patterns
2. **`processStudentData(students)`** - Processes student data arrays
3. **`generateMultiplicationTable(number)`** - Creates multiplication tables
4. **`analyzeSalesData(sales)`** - Analyzes sales data arrays
5. **`createPattern(patternType, size)`** - Creates various patterns

### Advanced Requirements (Bonus Points)
Create these additional functions:

6. **`findPrimeNumbers(limit)`** - Finds all prime numbers up to a limit
7. **`calculateFibonacciSequence(count)`** - Generates Fibonacci sequence
8. **`processMatrix(matrix)`** - Processes 2D arrays (matrices)
9. **`optimizeDataProcessing(data)`** - Demonstrates loop optimization

## 📝 Implementation Guidelines

### Function Structure
Each function should:
- Have a clear, descriptive name
- Take appropriate parameters
- Use the most appropriate loop type
- Return or display results clearly
- Include comments explaining the logic

### Pattern Types to Support
- **Triangle**: Numbers in triangular pattern
- **Pyramid**: Numbers in pyramid pattern
- **Diamond**: Numbers in diamond pattern
- **Spiral**: Numbers in spiral pattern
- **Chessboard**: Alternating pattern

### Data Processing Requirements
- **Student Data**: Calculate averages, find top performers
- **Sales Data**: Calculate totals, find best/worst months
- **Matrix Operations**: Transpose, sum rows/columns

## 🧪 Testing Requirements

Create a test file called `test-loops.js` that:
- Tests each function with various inputs
- Tests edge cases (empty arrays, zero values, etc.)
- Displays results clearly
- Shows both expected and actual results

### Test Cases to Include
```javascript
// Example test cases
console.log("Testing printNumberPattern('triangle', 5):");
printNumberPattern('triangle', 5);

console.log("Testing processStudentData with sample data:");
let students = [
    { name: "Alice", grades: [95, 87, 92] },
    { name: "Bob", grades: [78, 85, 90] }
];
processStudentData(students);
```

## 📊 Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Functionality** | 40 | All functions work correctly |
| **Code Quality** | 20 | Clean, readable code with comments |
| **Loop Usage** | 20 | Appropriate loop types used |
| **Testing** | 15 | Comprehensive test cases |
| **Creativity** | 5 | Additional features or improvements |

### Grade Breakdown
- **A (90-100%)**: All requirements met, excellent code quality, comprehensive testing
- **B (80-89%)**: Most requirements met, good code quality, adequate testing
- **C (70-79%)**: Basic requirements met, acceptable code quality
- **D (60-69%)**: Some requirements met, needs improvement
- **F (Below 60%)**: Requirements not met

## 📅 Due Date

**Due**: End of Week 3  
**Late Penalty**: 10% per day late  
**Submission**: Upload your `loops-assignment.js` and `test-loops.js` files

## 💡 Tips for Success

### Start Simple
1. Begin with basic number patterns
2. Test each function as you create it
3. Add complexity gradually
4. Move to advanced features last

### Testing Strategy
1. Test with normal inputs first
2. Test with edge cases (empty arrays, zero values)
3. Test with different pattern sizes
4. Verify all functions work together

### Code Quality
1. Use meaningful variable names
2. Add comments for complex logic
3. Keep functions focused on one task
4. Use consistent formatting

## 🚨 Common Mistakes to Avoid

1. **Infinite Loops**: Always ensure loop conditions change
2. **Off-by-One Errors**: Pay attention to array indices
3. **Wrong Loop Type**: Choose appropriate loop for each task
4. **Poor Variable Names**: Use descriptive names
5. **Missing Comments**: Explain complex logic
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
- [ ] Appropriate loop types are used
- [ ] Test file is comprehensive
- [ ] Code is commented and readable
- [ ] Files are named correctly
- [ ] All functions work as expected

## 🎯 Sample Output

Your program should produce output like:
```
Triangle Pattern (size 5):
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Student Analysis:
Alice: Average 91.3, Grade A
Bob: Average 84.3, Grade B

Multiplication Table for 7:
7 × 1 = 7
7 × 2 = 14
...
7 × 10 = 70
```

---

**Good luck! Remember to start early and ask for help if needed. 🔄**
