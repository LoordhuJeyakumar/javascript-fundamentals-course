// Lesson 3: Advanced Function Concepts
// This file teaches higher-order functions, callbacks, closures, and recursion

console.log("🚀 Welcome to Functions Lesson 3: Advanced Concepts!");
console.log("==================================================");

// 1. Higher-Order Functions
console.log("\n📚 1. Higher-Order Functions");
console.log("----------------------------");

console.log("Higher-order functions are functions that:");
console.log("- Take other functions as arguments, OR");
console.log("- Return functions as their result");

// Example 1: Function that takes another function as argument
function processArray(array, processor) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(processor(array[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

// Using different processor functions
const doubled = processArray(numbers, function(x) { return x * 2; });
const squared = processArray(numbers, x => x * x);
const toString = processArray(numbers, x => `Number: ${x}`);

console.log("Original array:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
console.log("As strings:", toString);

// Example 2: Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("\nFunction that returns functions:");
console.log("const double = createMultiplier(2);");
console.log("double(5):", double(5));
console.log("triple(5):", triple(5));
console.log("quadruple(5):", quadruple(5));

// 2. Callback Functions
console.log("\n📚 2. Callback Functions");
console.log("----------------------");

console.log("Callbacks are functions passed as arguments to other functions");
console.log("They are called back at a specific time or event");

// Simulating asynchronous operations with callbacks
function fetchData(callback) {
    console.log("Fetching data...");
    // Simulate delay
    setTimeout(() => {
        const data = { name: "John", age: 30, city: "New York" };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log("Data received:", data);
}

console.log("Using callback function:");
fetchData(displayData);

// Another callback example
function calculate(a, b, operation, callback) {
    let result;
    switch(operation) {
        case 'add':
            result = a + b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
        default:
            result = "Unknown operation";
    }
    callback(result);
}

calculate(10, 5, 'add', (result) => {
    console.log("Addition result:", result);
});

calculate(10, 5, 'multiply', (result) => {
    console.log("Multiplication result:", result);
});

// 3. Function Composition
console.log("\n📚 3. Function Composition");
console.log("-------------------------");

console.log("Function composition is combining simple functions to create complex ones");

// Simple functions
const add = x => x + 1;
const multiply = x => x * 2;
const square = x => x * x;

// Compose function
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// Compose multiple functions
const addThenMultiply = compose(multiply, add);
const addThenMultiplyThenSquare = compose(square, compose(multiply, add));

console.log("Simple functions:");
console.log("add(5):", add(5));
console.log("multiply(5):", multiply(5));
console.log("square(5):", square(5));

console.log("\nComposed functions:");
console.log("addThenMultiply(5):", addThenMultiply(5)); // (5 + 1) * 2 = 12
console.log("addThenMultiplyThenSquare(5):", addThenMultiplyThenSquare(5)); // ((5 + 1) * 2)² = 144

// More complex composition example
const formatCurrency = amount => `$${amount.toFixed(2)}`;
const addTax = amount => amount * 1.1;
const applyDiscount = amount => amount * 0.9;

const processPrice = compose(formatCurrency, compose(addTax, applyDiscount));
console.log("Processed price (100):", processPrice(100));

// 4. Closures
console.log("\n📚 4. Closures");
console.log("-------------");

console.log("A closure is a function that has access to variables in its outer scope");
console.log("even after the outer function has returned");

// Basic closure example
function outerFunction(x) {
    // This variable is in the outer function's scope
    const outerVariable = x;
    
    // This inner function has access to outerVariable
    return function innerFunction(y) {
        return outerVariable + y;
    };
}

const addToFive = outerFunction(5);
const addToTen = outerFunction(10);

console.log("Closure example:");
console.log("addToFive(3):", addToFive(3)); // 5 + 3 = 8
console.log("addToTen(3):", addToTen(3));   // 10 + 3 = 13

// Practical closure example: Counter
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        },
        reset: function() {
            count = initialValue;
            return count;
        }
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(10);

console.log("\nCounter example:");
console.log("Counter 1 - increment:", counter1.increment());
console.log("Counter 1 - increment:", counter1.increment());
console.log("Counter 1 - get value:", counter1.getValue());
console.log("Counter 2 - get value:", counter2.getValue());
console.log("Counter 2 - decrement:", counter2.decrement());

// Module pattern with closures
const calculator = (function() {
    let history = [];
    
    function add(a, b) {
        const result = a + b;
        history.push(`${a} + ${b} = ${result}`);
        return result;
    }
    
    function multiply(a, b) {
        const result = a * b;
        history.push(`${a} * ${b} = ${result}`);
        return result;
    }
    
    function getHistory() {
        return history.slice(); // Return a copy
    }
    
    function clearHistory() {
        history = [];
    }
    
    return {
        add,
        multiply,
        getHistory,
        clearHistory
    };
})();

console.log("\nModule pattern example:");
console.log("calculator.add(2, 3):", calculator.add(2, 3));
console.log("calculator.multiply(4, 5):", calculator.multiply(4, 5));
console.log("History:", calculator.getHistory());

// 5. Recursion
console.log("\n📚 5. Recursion");
console.log("---------------");

console.log("Recursion is when a function calls itself");
console.log("Every recursive function needs:");
console.log("1. A base case (stopping condition)");
console.log("2. A recursive case (function calls itself)");

// Factorial function
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

console.log("Factorial examples:");
console.log("factorial(0):", factorial(0));
console.log("factorial(1):", factorial(1));
console.log("factorial(5):", factorial(5));
console.log("factorial(10):", factorial(10));

// Fibonacci function
function fibonacci(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("\nFibonacci examples:");
for (let i = 0; i <= 10; i++) {
    console.log(`fibonacci(${i}):`, fibonacci(i));
}

// Array sum using recursion
function sumArray(arr, index = 0) {
    // Base case
    if (index >= arr.length) {
        return 0;
    }
    // Recursive case
    return arr[index] + sumArray(arr, index + 1);
}

const testArray = [1, 2, 3, 4, 5];
console.log("\nArray sum with recursion:");
console.log("Array:", testArray);
console.log("Sum:", sumArray(testArray));

// 6. Practical Examples
console.log("\n📚 6. Practical Examples");
console.log("----------------------");

// Example 1: Event handling system
function createEventHandler() {
    const listeners = [];
    
    return {
        addListener: function(callback) {
            listeners.push(callback);
        },
        removeListener: function(callback) {
            const index = listeners.indexOf(callback);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        },
        trigger: function(data) {
            listeners.forEach(callback => callback(data));
        }
    };
}

const eventHandler = createEventHandler();

// Add listeners
eventHandler.addListener(data => console.log("Listener 1:", data));
eventHandler.addListener(data => console.log("Listener 2:", data.toUpperCase()));

console.log("Event handling example:");
eventHandler.trigger("Hello World");

// Example 2: Function memoization (caching)
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log("Cache hit for", args);
            return cache[key];
        }
        
        console.log("Computing for", args);
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const expensiveFunction = memoize(function(n) {
    // Simulate expensive computation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
});

console.log("\nMemoization example:");
console.log("First call:", expensiveFunction(5));
console.log("Second call (cached):", expensiveFunction(5));
console.log("Third call (cached):", expensiveFunction(5));

// Example 3: Function pipeline
function createPipeline(...functions) {
    return function(value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const squareByTwo = x => x * x;

const pipeline = createPipeline(addOne, multiplyByTwo, squareByTwo);

console.log("\nPipeline example:");
console.log("Pipeline(3):", pipeline(3)); // ((3 + 1) * 2)² = 64

// 7. Common Patterns
console.log("\n📚 7. Common Patterns");
console.log("-------------------");

// Pattern 1: Factory functions
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
        },
        haveBirthday() {
            this.age++;
            return this.age;
        }
    };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

console.log("Factory pattern:");
console.log(person1.greet());
console.log("After birthday:", person1.haveBirthday());
console.log(person2.greet());

// Pattern 2: Partial application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const multiplyBy2And3 = partial(multiply, 2, 3);
console.log("\nPartial application:");
console.log("multiplyBy2And3(4):", multiplyBy2And3(4)); // 2 * 3 * 4 = 24

// Pattern 3: Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

const curriedMultiply = curry(multiply);
console.log("\nCurrying:");
console.log("curriedMultiply(2)(3)(4):", curriedMultiply(2)(3)(4));
console.log("curriedMultiply(2, 3)(4):", curriedMultiply(2, 3)(4));

// 8. Best Practices and Common Mistakes
console.log("\n📚 8. Best Practices and Common Mistakes");
console.log("--------------------------------------");

console.log("✅ Best Practices:");
console.log("1. Use closures to create private variables");
console.log("2. Use higher-order functions for reusable code");
console.log("3. Always have a base case in recursion");
console.log("4. Use function composition for complex operations");
console.log("5. Memoize expensive recursive functions");

console.log("\n❌ Common Mistakes:");
console.log("1. Forgetting base case in recursion (infinite loop)");
console.log("2. Creating memory leaks with closures");
console.log("3. Overusing recursion when iteration is simpler");
console.log("4. Not handling errors in callbacks");
console.log("5. Creating too many nested closures");

// 9. Summary
console.log("\n📚 9. Summary");
console.log("-------------");

console.log("You've learned about:");
console.log("✅ Higher-order functions - functions that work with other functions");
console.log("✅ Callback functions - functions passed as arguments");
console.log("✅ Function composition - combining functions");
console.log("✅ Closures - functions with access to outer scope");
console.log("✅ Recursion - functions that call themselves");
console.log("✅ Common patterns - factory, partial application, currying");
console.log("✅ Best practices and common mistakes");

console.log("\n🎉 Congratulations! You now understand advanced function concepts!");
console.log("You're ready to build complex, maintainable JavaScript applications!");
