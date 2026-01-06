# Assignment 1: Advanced Calculator Application

## 📝 Assignment Overview
Create a comprehensive calculator application that demonstrates mastery of JavaScript numbers, mathematical operations, formatting, and optimization techniques.

## 🎯 Learning Objectives
- Master all number operations and methods
- Implement advanced mathematical functions
- Create professional number formatting
- Apply performance optimization techniques
- Build a complete, user-friendly application

## 📋 Requirements

### Core Features (Required)
1. **Basic Calculator Operations**
   - Addition, subtraction, multiplication, division
   - Modulo and exponentiation
   - Clear and reset functionality
   - Error handling for invalid operations

2. **Scientific Calculator Functions**
   - Trigonometric functions (sin, cos, tan)
   - Logarithmic functions (log, log10, log2)
   - Power and root operations
   - Constants (π, e, etc.)
   - Angle conversion (degrees/radians)

3. **Number Formatting and Display**
   - Locale-specific number formatting
   - Currency formatting options
   - Percentage calculations
   - Scientific notation display
   - Custom precision settings

4. **Advanced Features**
   - Calculation history
   - Memory functions (store, recall, clear)
   - Undo/redo functionality
   - Expression evaluation
   - Unit conversions

### Advanced Features (Choose 3-4)
1. **Financial Calculator**
   - Loan payment calculations
   - Investment growth projections
   - Compound interest calculations
   - Retirement planning tools
   - Tax calculations

2. **Statistical Calculator**
   - Descriptive statistics (mean, median, mode)
   - Standard deviation and variance
   - Correlation calculations
   - Random number generation
   - Data analysis tools

3. **Graphing Calculator**
   - Function plotting
   - Data visualization
   - Chart generation
   - Interactive graphs
   - Export functionality

4. **Programmer Calculator**
   - Binary, octal, hexadecimal conversions
   - Bitwise operations
   - ASCII/Unicode conversions
   - Base conversion utilities
   - Logic operations

## 🛠️ Technical Requirements

### Code Structure
```javascript
class AdvancedCalculator {
    constructor() {
        this.display = '';
        this.history = [];
        this.memory = 0;
        this.settings = {
            precision: 2,
            locale: 'en-US',
            angleMode: 'degrees',
            numberFormat: 'standard'
        };
    }
    
    // Basic operations
    add(a, b) { }
    subtract(a, b) { }
    multiply(a, b) { }
    divide(a, b) { }
    modulo(a, b) { }
    power(a, b) { }
    
    // Scientific functions
    sin(angle) { }
    cos(angle) { }
    tan(angle) { }
    log(number) { }
    sqrt(number) { }
    factorial(n) { }
    
    // Memory operations
    memoryStore(value) { }
    memoryRecall() { }
    memoryClear() { }
    memoryAdd(value) { }
    memorySubtract(value) { }
    
    // History operations
    addToHistory(operation, result) { }
    getHistory() { }
    clearHistory() { }
    undo() { }
    redo() { }
    
    // Formatting
    formatNumber(number) { }
    formatCurrency(amount) { }
    formatPercentage(value) { }
    
    // Settings
    setPrecision(precision) { }
    setLocale(locale) { }
    setAngleMode(mode) { }
    setNumberFormat(format) { }
}
```

### User Interface Requirements
- Clean, intuitive interface
- Responsive design
- Keyboard support
- Error message display
- Settings panel
- History panel
- Memory indicators

## 📊 Grading Rubric

### Functionality (40 points)
- **Basic Operations (10 points)**
  - All basic operations work correctly
  - Proper error handling
  - Input validation

- **Scientific Functions (15 points)**
  - Trigonometric functions
  - Logarithmic functions
  - Power and root operations
  - Angle conversion

- **Advanced Features (10 points)**
  - History functionality
  - Memory operations
  - Number formatting
  - Settings management

- **User Experience (5 points)**
  - Intuitive interface
  - Error handling
  - Helpful feedback

### Code Quality (30 points)
- **Structure and Organization (10 points)**
  - Clean, readable code
  - Logical class structure
  - Proper method organization

- **Error Handling (10 points)**
  - Input validation
  - Graceful error handling
  - User-friendly error messages

- **Performance (10 points)**
  - Efficient calculations
  - Optimized operations
  - Memory management

### Documentation (20 points)
- **Code Comments (10 points)**
  - Clear, helpful comments
  - Method documentation
  - Complex logic explanations

- **User Documentation (10 points)**
  - Usage instructions
  - Feature descriptions
  - Troubleshooting guide

### Testing (10 points)
- **Test Coverage (10 points)**
  - Comprehensive testing
  - Edge case testing
  - Error condition testing

## 🎯 Example Usage

```javascript
// Create calculator instance
const calc = new AdvancedCalculator();

// Basic operations
calc.add(5, 3);        // 8
calc.multiply(4, 6);   // 24
calc.power(2, 3);      // 8

// Scientific functions
calc.sin(90);          // 1 (if in degrees)
calc.log(100);         // 2
calc.sqrt(16);         // 4

// Memory operations
calc.memoryStore(42);
calc.memoryRecall();   // 42

// Formatting
calc.formatCurrency(1234.56);  // $1,234.56
calc.formatPercentage(0.15);   // 15%

// Settings
calc.setPrecision(4);
calc.setAngleMode('radians');
calc.setLocale('en-GB');
```

## 📝 Submission Requirements

### Files to Submit
1. **`calculator.js`** - Main calculator implementation
2. **`calculator.html`** - User interface
3. **`calculator.css`** - Styling
4. **`test-calculator.js`** - Test cases
5. **`README.md`** - Documentation and usage instructions

### Code Requirements
- All code must be well-commented
- Use modern JavaScript features
- Follow consistent coding style
- Include comprehensive error handling
- Provide clear user feedback

### Documentation Requirements
- Complete usage instructions
- Feature descriptions
- Code examples
- Troubleshooting guide
- Performance notes

## 🚀 Bonus Points

### Extra Credit (Up to 20 points)
1. **Web Interface (10 points)**
   - Professional-looking interface
   - Responsive design
   - Keyboard shortcuts
   - Theme customization

2. **Advanced Features (10 points)**
   - Additional mathematical functions
   - Custom function definitions
   - Data export/import
   - Plugin system

## 📅 Timeline

- **Week 1**: Plan and design the calculator
- **Week 2**: Implement core functionality
- **Week 3**: Add advanced features and testing
- **Week 4**: Final testing and documentation

## 🤝 Collaboration

- Work individually or in pairs
- Use version control (Git)
- Regular progress updates
- Peer code review

## 📚 Resources

### Helpful Resources
- MDN Numbers documentation
- JavaScript Math object guide
- Calculator design patterns
- Number formatting examples

### Getting Help
- Ask questions during office hours
- Use online resources
- Collaborate with classmates
- Review lesson materials

## 🎉 Success Criteria

### Minimum Requirements
- All core features implemented
- Code runs without errors
- Basic documentation provided
- At least 3 advanced features

### Excellent Work
- All features implemented correctly
- Clean, efficient code
- Comprehensive documentation
- Creative and useful features
- Excellent user experience

## 📝 Final Notes

This assignment is designed to help you master JavaScript numbers while building a practical application. Focus on:

1. **Understanding the concepts** - Don't just copy code
2. **Writing clean code** - Make it readable and maintainable
3. **Testing thoroughly** - Ensure your code works correctly
4. **Documenting well** - Help others understand your code
5. **Being creative** - Add your own unique features

Good luck, and have fun building your calculator! 🧮
