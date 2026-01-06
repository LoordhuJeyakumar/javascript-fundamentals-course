# Assignment 2: Advanced Function Techniques

## 📝 Assignment Overview

Build a comprehensive function library that demonstrates advanced JavaScript function concepts including higher-order functions, closures, recursion, and function composition. This assignment will test your understanding of advanced function patterns and their practical applications.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Master higher-order functions and callbacks
- Implement closures for data privacy and state management
- Use recursion to solve complex problems
- Apply function composition patterns
- Create reusable, modular code
- Handle asynchronous operations with callbacks

## 📋 Requirements

### **Part 1: Higher-Order Functions (25 points)**

Create the following higher-order functions:

#### **1.1 Array Processor**
```javascript
function createArrayProcessor(operation) {
    // Returns a function that processes arrays
    // operation: 'map', 'filter', 'reduce', 'find'
}
```

**Requirements:**
- Create a function that returns different array processing functions
- Support map, filter, reduce, and find operations
- Handle edge cases (empty arrays, invalid operations)

#### **1.2 Function Timer**
```javascript
function withTimer(fn) {
    // Returns a wrapped function that logs execution time
}
```

**Requirements:**
- Wrap any function to measure its execution time
- Log the function name and execution time
- Return the original function's result

#### **1.3 Retry Mechanism**
```javascript
function withRetry(fn, maxAttempts = 3, delay = 1000) {
    // Returns a function that retries on failure
}
```

**Requirements:**
- Retry failed function calls up to maxAttempts times
- Add delay between retries
- Return the result or throw the last error

### **Part 2: Closures and State Management (25 points)**

Create the following closure-based modules:

#### **2.1 Shopping Cart**
```javascript
function createShoppingCart() {
    // Returns an object with cart methods
    // Methods: addItem, removeItem, getTotal, getItems, clear
}
```

**Requirements:**
- Private items array and total calculation
- Methods to add/remove items
- Automatic total recalculation
- Item validation (name, price, quantity)

#### **2.2 User Session Manager**
```javascript
function createSessionManager() {
    // Returns an object with session methods
    // Methods: login, logout, isLoggedIn, getUser, setUserData
}
```

**Requirements:**
- Private user data storage
- Session timeout handling
- Data persistence across method calls
- Security validation

#### **2.3 Event Emitter**
```javascript
function createEventEmitter() {
    // Returns an object with event methods
    // Methods: on, off, emit, once, getListeners
}
```

**Requirements:**
- Private listeners storage
- Support for multiple listeners per event
- One-time listeners (once method)
- Event data passing

### **Part 3: Recursion (25 points)**

Implement the following recursive functions:

#### **3.1 Tree Traversal**
```javascript
function traverseTree(node, callback) {
    // Recursively traverse a tree structure
}
```

**Requirements:**
- Handle nested object/array structures
- Apply callback to each node
- Support different traversal orders
- Handle circular references

#### **3.2 Binary Search**
```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Recursively search for target in sorted array
}
```

**Requirements:**
- Return index of target or -1 if not found
- Handle edge cases (empty array, single element)
- Optimize for large arrays

#### **3.3 Directory Structure Generator**
```javascript
function generateDirectoryStructure(path, maxDepth = 3) {
    // Recursively generate directory structure
}
```

**Requirements:**
- Create nested folder/file structure
- Limit recursion depth
- Handle file permissions and types
- Generate realistic structure

### **Part 4: Function Composition (25 points)**

Create the following composition utilities:

#### **4.1 Data Processing Pipeline**
```javascript
function createDataPipeline(...processors) {
    // Returns a function that processes data through multiple steps
}
```

**Requirements:**
- Chain multiple data processing functions
- Handle errors at any step
- Support async processors
- Provide debugging information

#### **4.2 Validation Chain**
```javascript
function createValidator(...validators) {
    // Returns a function that validates data with multiple rules
}
```

**Requirements:**
- Combine multiple validation functions
- Return detailed error messages
- Support conditional validation
- Handle nested object validation

#### **4.3 Transformation Pipeline**
```javascript
function createTransformer(...transformers) {
    // Returns a function that transforms data through multiple steps
}
```

**Requirements:**
- Apply multiple transformations in sequence
- Support different data types
- Handle transformation errors
- Provide rollback capability

## 📝 Implementation Guidelines

### **Code Structure**
```javascript
// Example structure for your solution
const AdvancedFunctions = {
    // Part 1: Higher-Order Functions
    createArrayProcessor,
    withTimer,
    withRetry,
    
    // Part 2: Closures
    createShoppingCart,
    createSessionManager,
    createEventEmitter,
    
    // Part 3: Recursion
    traverseTree,
    binarySearch,
    generateDirectoryStructure,
    
    // Part 4: Composition
    createDataPipeline,
    createValidator,
    createTransformer
};
```

### **Error Handling**
- Use try-catch blocks for error handling
- Provide meaningful error messages
- Handle edge cases gracefully
- Log errors for debugging

### **Testing**
- Create test cases for each function
- Test edge cases and error conditions
- Verify performance with large datasets
- Document expected behavior

### **Documentation**
- Add JSDoc comments for all functions
- Explain complex algorithms
- Provide usage examples
- Document performance characteristics

## 🎯 Assessment Criteria

### **Functionality (40 points)**
- All functions work correctly
- Handle edge cases properly
- Error handling is robust
- Performance is acceptable

### **Code Quality (30 points)**
- Code is clean and readable
- Functions are well-organized
- Comments explain complex logic
- Follows JavaScript best practices

### **Advanced Concepts (20 points)**
- Proper use of closures
- Effective recursion implementation
- Good function composition
- Appropriate use of higher-order functions

### **Creativity (10 points)**
- Creative solutions to problems
- Additional useful features
- Elegant code design
- Real-world applicability

## 📚 Example Usage

### **Higher-Order Functions Example**
```javascript
// Array processor
const mapper = AdvancedFunctions.createArrayProcessor('map');
const doubled = mapper([1, 2, 3, 4], x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// Function timer
const timedFunction = AdvancedFunctions.withTimer(expensiveFunction);
const result = timedFunction(1000);
// Logs: "expensiveFunction took 150ms"

// Retry mechanism
const retryFunction = AdvancedFunctions.withRetry(unreliableFunction, 3, 1000);
const result = await retryFunction();
```

### **Closures Example**
```javascript
// Shopping cart
const cart = AdvancedFunctions.createShoppingCart();
cart.addItem({ name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ name: 'Mouse', price: 25, quantity: 2 });
console.log(cart.getTotal()); // 1049

// Session manager
const session = AdvancedFunctions.createSessionManager();
session.login('user123', { name: 'John', role: 'admin' });
console.log(session.isLoggedIn()); // true
```

### **Recursion Example**
```javascript
// Tree traversal
const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
AdvancedFunctions.traverseTree(tree, node => console.log(node.value));

// Binary search
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const index = AdvancedFunctions.binarySearch(sortedArray, 7);
console.log(index); // 3
```

### **Composition Example**
```javascript
// Data pipeline
const pipeline = AdvancedFunctions.createDataPipeline(
    data => data.filter(x => x > 0),
    data => data.map(x => x * 2),
    data => data.reduce((sum, x) => sum + x, 0)
);
const result = pipeline([-1, 2, -3, 4, 5]); // 22

// Validator
const validator = AdvancedFunctions.createValidator(
    data => data.name && data.name.length > 0,
    data => data.email && data.email.includes('@'),
    data => data.age && data.age >= 18
);
const isValid = validator({ name: 'John', email: 'john@example.com', age: 25 });
```

## 🚀 Bonus Challenges

### **Challenge 1: Async Function Composition (10 points)**
Create a function that composes asynchronous functions and handles promises.

### **Challenge 2: Memoization with Closures (10 points)**
Implement a memoization system that caches function results and handles cache invalidation.

### **Challenge 3: Function Currying (10 points)**
Create a curry function that converts multi-argument functions into curried functions.

## 📝 Submission Requirements

### **Files to Submit**
1. `advanced-functions.js` - Main implementation
2. `test-advanced-functions.js` - Test cases
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
- Test performance with large datasets

## 🎯 Learning Outcomes

After completing this assignment, you will have:
- ✅ Mastered higher-order functions and callbacks
- ✅ Implemented closures for data privacy
- ✅ Used recursion to solve complex problems
- ✅ Applied function composition patterns
- ✅ Created modular, reusable code
- ✅ Handled asynchronous operations
- ✅ Built real-world applicable solutions

## 📚 Resources

- [MDN Higher-Order Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Higher-order_functions)
- [JavaScript.info Closures](https://javascript.info/closure)
- [Recursion in JavaScript](https://javascript.info/recursion)
- [Function Composition Patterns](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

---

**Remember: This assignment tests your understanding of advanced JavaScript function concepts. Take your time, think through each problem, and create elegant, maintainable solutions! 🚀**
