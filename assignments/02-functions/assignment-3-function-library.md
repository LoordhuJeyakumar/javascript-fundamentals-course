# Assignment 3: Function Library Project

## 📝 Assignment Overview

Create a comprehensive JavaScript function library that demonstrates mastery of all function concepts learned in this module. This is a capstone project that combines basic functions, advanced techniques, and real-world applications into a cohesive, reusable library.

## 🎯 Learning Objectives

By completing this assignment, you will:
- Integrate all function concepts into a practical project
- Create a professional-grade function library
- Implement comprehensive error handling and validation
- Design a user-friendly API
- Write extensive documentation and tests
- Demonstrate real-world problem-solving skills

## 📋 Project Requirements

### **Core Library Structure**

Create a main library file `function-library.js` with the following structure:

```javascript
const FunctionLibrary = {
    // Utility Functions
    utils: {
        // Basic utility functions
    },
    
    // Math Functions
    math: {
        // Mathematical operations
    },
    
    // Array Functions
    arrays: {
        // Array manipulation and processing
    },
    
    // String Functions
    strings: {
        // String manipulation and processing
    },
    
    // Object Functions
    objects: {
        // Object manipulation and processing
    },
    
    // Async Functions
    async: {
        // Asynchronous operations
    },
    
    // Validation Functions
    validation: {
        // Data validation utilities
    },
    
    // Event System
    events: {
        // Event handling system
    }
};
```

### **Part 1: Utility Functions (20 points)**

#### **1.1 Basic Utilities**
```javascript
utils: {
    // Function composition
    compose: (...fns) => { /* implementation */ },
    
    // Function piping
    pipe: (...fns) => { /* implementation */ },
    
    // Function memoization
    memoize: (fn, keyGenerator) => { /* implementation */ },
    
    // Function debouncing
    debounce: (fn, delay) => { /* implementation */ },
    
    // Function throttling
    throttle: (fn, limit) => { /* implementation */ },
    
    // Function currying
    curry: (fn) => { /* implementation */ },
    
    // Partial application
    partial: (fn, ...args) => { /* implementation */ }
}
```

#### **1.2 Advanced Utilities**
```javascript
utils: {
    // Retry mechanism
    retry: (fn, options) => { /* implementation */ },
    
    // Timeout wrapper
    timeout: (fn, ms) => { /* implementation */ },
    
    // Function profiling
    profile: (fn, name) => { /* implementation */ },
    
    // Function caching
    cache: (fn, ttl) => { /* implementation */ },
    
    // Function batching
    batch: (fn, delay) => { /* implementation */ }
}
```

### **Part 2: Math Functions (15 points)**

```javascript
math: {
    // Basic operations
    add: (...numbers) => { /* implementation */ },
    subtract: (a, b) => { /* implementation */ },
    multiply: (...numbers) => { /* implementation */ },
    divide: (a, b) => { /* implementation */ },
    
    // Advanced operations
    power: (base, exponent) => { /* implementation */ },
    sqrt: (number) => { /* implementation */ },
    factorial: (n) => { /* implementation */ },
    fibonacci: (n) => { /* implementation */ },
    
    // Statistical functions
    mean: (numbers) => { /* implementation */ },
    median: (numbers) => { /* implementation */ },
    mode: (numbers) => { /* implementation */ },
    standardDeviation: (numbers) => { /* implementation */ },
    
    // Utility functions
    clamp: (value, min, max) => { /* implementation */ },
    lerp: (start, end, factor) => { /* implementation */ },
    random: (min, max) => { /* implementation */ },
    randomInt: (min, max) => { /* implementation */ }
}
```

### **Part 3: Array Functions (15 points)**

```javascript
arrays: {
    // Basic operations
    chunk: (array, size) => { /* implementation */ },
    flatten: (array, depth) => { /* implementation */ },
    unique: (array) => { /* implementation */ },
    shuffle: (array) => { /* implementation */ },
    
    // Search and filter
    findIndex: (array, predicate) => { /* implementation */ },
    findLast: (array, predicate) => { /* implementation */ },
    groupBy: (array, key) => { /* implementation */ },
    partition: (array, predicate) => { /* implementation */ },
    
    // Transformation
    mapAsync: async (array, fn) => { /* implementation */ },
    filterAsync: async (array, fn) => { /* implementation */ },
    reduceAsync: async (array, fn, initial) => { /* implementation */ },
    
    // Utility
    zip: (...arrays) => { /* implementation */ },
    unzip: (array) => { /* implementation */ },
    rotate: (array, positions) => { /* implementation */ }
}
```

### **Part 4: String Functions (15 points)**

```javascript
strings: {
    // Basic operations
    capitalize: (str) => { /* implementation */ },
    camelCase: (str) => { /* implementation */ },
    kebabCase: (str) => { /* implementation */ },
    snakeCase: (str) => { /* implementation */ },
    
    // Advanced operations
    truncate: (str, length, suffix) => { /* implementation */ },
    pad: (str, length, char) => { /* implementation */ },
    reverse: (str) => { /* implementation */ },
    isPalindrome: (str) => { /* implementation */ },
    
    // Validation
    isEmail: (str) => { /* implementation */ },
    isURL: (str) => { /* implementation */ },
    isPhoneNumber: (str) => { /* implementation */ },
    isCreditCard: (str) => { /* implementation */ },
    
    // Utility
    slugify: (str) => { /* implementation */ },
    extractNumbers: (str) => { /* implementation */ },
    extractEmails: (str) => { /* implementation */ }
}
```

### **Part 5: Object Functions (15 points)**

```javascript
objects: {
    // Basic operations
    deepClone: (obj) => { /* implementation */ },
    deepMerge: (target, source) => { /* implementation */ },
    pick: (obj, keys) => { /* implementation */ },
    omit: (obj, keys) => { /* implementation */ },
    
    // Path operations
    get: (obj, path, defaultValue) => { /* implementation */ },
    set: (obj, path, value) => { /* implementation */ },
    has: (obj, path) => { /* implementation */ },
    unset: (obj, path) => { /* implementation */ },
    
    // Transformation
    mapKeys: (obj, fn) => { /* implementation */ },
    mapValues: (obj, fn) => { /* implementation */ },
    invert: (obj) => { /* implementation */ },
    flip: (obj) => { /* implementation */ }
}
```

### **Part 6: Async Functions (10 points)**

```javascript
async: {
    // Promise utilities
    delay: (ms) => { /* implementation */ },
    timeout: (promise, ms) => { /* implementation */ },
    retry: (fn, options) => { /* implementation */ },
    
    // Concurrency control
    limit: (fn, concurrency) => { /* implementation */ },
    queue: (fn, concurrency) => { /* implementation */ },
    
    // Batch processing
    batch: (items, fn, batchSize) => { /* implementation */ },
    waterfall: (functions) => { /* implementation */ },
    parallel: (functions) => { /* implementation */ }
}
```

### **Part 7: Validation Functions (10 points)**

```javascript
validation: {
    // Type checking
    isString: (value) => { /* implementation */ },
    isNumber: (value) => { /* implementation */ },
    isArray: (value) => { /* implementation */ },
    isObject: (value) => { /* implementation */ },
    
    // Value validation
    isEmail: (value) => { /* implementation */ },
    isURL: (value) => { /* implementation */ },
    isPhoneNumber: (value) => { /* implementation */ },
    isCreditCard: (value) => { /* implementation */ },
    
    // Schema validation
    validate: (data, schema) => { /* implementation */ },
    createSchema: (rules) => { /* implementation */ }
}
```

### **Part 8: Event System (10 points)**

```javascript
events: {
    // Event emitter
    createEmitter: () => { /* implementation */ },
    
    // Event bus
    createBus: () => { /* implementation */ },
    
    // Event delegation
    delegate: (element, selector, event, handler) => { /* implementation */ },
    
    // Event utilities
    once: (element, event, handler) => { /* implementation */ },
    off: (element, event, handler) => { /* implementation */ }
}
```

## 📝 Implementation Guidelines

### **Code Quality Standards**
- Use ES6+ features consistently
- Follow consistent naming conventions
- Add comprehensive JSDoc comments
- Implement proper error handling
- Use TypeScript-style type hints in comments

### **Error Handling**
```javascript
// Example error handling pattern
function exampleFunction(param) {
    if (!param) {
        throw new Error('Parameter is required');
    }
    
    try {
        // Function logic
        return result;
    } catch (error) {
        throw new Error(`Operation failed: ${error.message}`);
    }
}
```

### **Performance Considerations**
- Use efficient algorithms
- Implement memoization where appropriate
- Handle large datasets gracefully
- Provide performance metrics

### **Testing Requirements**
- Unit tests for all functions
- Integration tests for complex features
- Performance tests for critical functions
- Edge case testing

## 🎯 Assessment Criteria

### **Functionality (40 points)**
- All functions work correctly
- Handle edge cases properly
- Error handling is comprehensive
- Performance is acceptable

### **Code Quality (30 points)**
- Code is clean and readable
- Functions are well-organized
- Comments are comprehensive
- Follows JavaScript best practices

### **Documentation (20 points)**
- JSDoc comments for all functions
- Usage examples provided
- API documentation is complete
- README is comprehensive

### **Testing (10 points)**
- Test coverage is comprehensive
- Tests are well-written
- Edge cases are covered
- Performance tests included

## 📚 Example Usage

### **Basic Usage**
```javascript
// Import the library
const FL = FunctionLibrary;

// Use utility functions
const add = FL.utils.curry(FL.math.add);
const addFive = add(5);
console.log(addFive(3)); // 8

// Use array functions
const numbers = [1, 2, 3, 4, 5];
const chunks = FL.arrays.chunk(numbers, 2);
console.log(chunks); // [[1, 2], [3, 4], [5]]

// Use string functions
const email = "user@example.com";
const isValid = FL.validation.isEmail(email);
console.log(isValid); // true
```

### **Advanced Usage**
```javascript
// Function composition
const processData = FL.utils.pipe(
    FL.arrays.filter(x => x > 0),
    FL.arrays.map(x => x * 2),
    FL.arrays.sum
);

const result = processData([-1, 2, -3, 4, 5]);
console.log(result); // 22

// Async operations
const fetchData = FL.async.retry(
    () => fetch('/api/data'),
    { maxAttempts: 3, delay: 1000 }
);

// Event handling
const emitter = FL.events.createEmitter();
emitter.on('data', (data) => console.log(data));
emitter.emit('data', { message: 'Hello' });
```

## 🚀 Bonus Features

### **Bonus 1: TypeScript Support (15 points)**
- Add TypeScript definitions
- Provide type safety
- Include type examples

### **Bonus 2: Plugin System (15 points)**
- Create plugin architecture
- Allow custom function registration
- Provide plugin management

### **Bonus 3: Performance Monitoring (10 points)**
- Add performance metrics
- Create performance dashboard
- Provide optimization suggestions

## 📝 Submission Requirements

### **Files to Submit**
1. `function-library.js` - Main library implementation
2. `function-library.min.js` - Minified version
3. `test-function-library.js` - Comprehensive test suite
4. `README.md` - Complete documentation
5. `examples/` - Usage examples directory
6. `docs/` - API documentation directory

### **Documentation Requirements**
- Complete API documentation
- Usage examples for each function
- Performance characteristics
- Browser compatibility information
- Installation and setup instructions

### **Testing Requirements**
- Unit tests for all functions
- Integration tests for complex features
- Performance benchmarks
- Browser compatibility tests

## 🎯 Learning Outcomes

After completing this assignment, you will have:
- ✅ Mastered all JavaScript function concepts
- ✅ Created a professional-grade library
- ✅ Implemented comprehensive error handling
- ✅ Written extensive documentation and tests
- ✅ Demonstrated real-world problem-solving skills
- ✅ Built a reusable, maintainable codebase
- ✅ Gained experience with library development

## 📚 Resources

- [MDN JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info Functions](https://javascript.info/function-basics)
- [Lodash Documentation](https://lodash.com/docs) - For inspiration
- [Ramda Documentation](https://ramdajs.com/docs/) - For functional programming patterns

---

**Remember: This is your capstone project for the Functions module. Create something you're proud of and that demonstrates your mastery of JavaScript functions! 🚀**
