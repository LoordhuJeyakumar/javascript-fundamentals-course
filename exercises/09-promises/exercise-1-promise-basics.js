// Exercise 1: Promise Basics
// Complete the TODO sections below

console.log("💪 Exercise 1: Promise Basics");
console.log("===========================");

// Exercise 1: Create Basic Promises
console.log("\n1. Create basic Promises:");
// TODO: Create a Promise that resolves with "Hello World"
let helloPromise = null; // Your code here
// Hint: Use new Promise((resolve) => { resolve("Hello World"); })

// TODO: Create a Promise that rejects with an error "Something went wrong"
let errorPromise = null; // Your code here
// Hint: Use new Promise((resolve, reject) => { reject(new Error("Something went wrong")); })

// TODO: Create a Promise that resolves after 1 second with "Delayed result"
let delayedPromise = null; // Your code here
// Hint: Use setTimeout inside the Promise executor

console.log("Hello Promise:", helloPromise);
console.log("Error Promise:", errorPromise);
console.log("Delayed Promise:", delayedPromise);

// Exercise 2: Handle Promise Results
console.log("\n2. Handle Promise results:");
// TODO: Handle the helloPromise with .then()
helloPromise.then((result) => {
    console.log("Hello Promise result:", result);
});

// TODO: Handle the errorPromise with .catch()
errorPromise.catch((error) => {
    console.log("Error Promise error:", error.message);
});

// TODO: Handle the delayedPromise with .then()
delayedPromise.then((result) => {
    console.log("Delayed Promise result:", result);
});

// Exercise 3: Promise States
console.log("\n3. Check Promise states:");
// TODO: Create a Promise that is always pending
let pendingPromise = null; // Your code here
// Hint: Don't call resolve or reject

// TODO: Create a Promise that resolves immediately
let resolvedPromise = null; // Your code here
// Hint: Use Promise.resolve()

// TODO: Create a Promise that rejects immediately
let rejectedPromise = null; // Your code here
// Hint: Use Promise.reject()

console.log("Pending Promise:", pendingPromise);
console.log("Resolved Promise:", resolvedPromise);
console.log("Rejected Promise:", rejectedPromise);

// Exercise 4: Promise with Different Data Types
console.log("\n4. Promises with different data types:");
// TODO: Create a Promise that resolves with a number
let numberPromise = null; // Your code here
// Hint: resolve(42)

// TODO: Create a Promise that resolves with an object
let objectPromise = null; // Your code here
// Hint: resolve({ name: "John", age: 30 })

// TODO: Create a Promise that resolves with an array
let arrayPromise = null; // Your code here
// Hint: resolve([1, 2, 3, 4, 5])

// TODO: Create a Promise that resolves with a boolean
let booleanPromise = null; // Your code here
// Hint: resolve(true)

// Handle all promises
numberPromise.then((result) => {
    console.log("Number Promise result:", result, typeof result);
});

objectPromise.then((result) => {
    console.log("Object Promise result:", result, typeof result);
});

arrayPromise.then((result) => {
    console.log("Array Promise result:", result, typeof result);
});

booleanPromise.then((result) => {
    console.log("Boolean Promise result:", result, typeof result);
});

// Exercise 5: Promise Chaining
console.log("\n5. Promise chaining:");
// TODO: Create a Promise that resolves with 5
let chainPromise = null; // Your code here
// Hint: resolve(5)

// TODO: Chain .then() methods to multiply by 2, then add 10, then divide by 2
chainPromise
    .then((value) => {
        console.log("Step 1:", value);
        return value * 2; // Your code here
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 10; // Your code here
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value / 2; // Your code here
    })
    .then((value) => {
        console.log("Final result:", value);
    });

// Exercise 6: Promise Error Handling
console.log("\n6. Promise error handling:");
// TODO: Create a Promise that rejects with "Chain error"
let chainErrorPromise = null; // Your code here
// Hint: reject(new Error("Chain error"))

// TODO: Chain .then() and .catch() methods
chainErrorPromise
    .then((result) => {
        console.log("This won't run");
        return result;
    })
    .catch((error) => {
        console.log("Caught error:", error.message);
        return "Error handled";
    })
    .then((result) => {
        console.log("After error handling:", result);
    });

// Exercise 7: Promise with Conditional Logic
console.log("\n7. Promise with conditional logic:");
// TODO: Create a function that returns a Promise based on a condition
function conditionalPromise(shouldSucceed) {
    // Your code here
    // Hint: Use if/else with resolve/reject
    return null;
}

// Test the conditional Promise
conditionalPromise(true)
    .then((result) => {
        console.log("Success case:", result);
    })
    .catch((error) => {
        console.log("Success case error:", error.message);
    });

conditionalPromise(false)
    .then((result) => {
        console.log("Failure case:", result);
    })
    .catch((error) => {
        console.log("Failure case error:", error.message);
    });

// Exercise 8: Promise with Timeout
console.log("\n8. Promise with timeout:");
// TODO: Create a function that returns a Promise with a timeout
function timeoutPromise(operation, timeoutMs) {
    // Your code here
    // Hint: Use setTimeout for timeout, Promise.race for racing
    return null;
}

// Test timeout Promise
let slowOperation = new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation completed"), 2000);
});

timeoutPromise(slowOperation, 1000)
    .then((result) => {
        console.log("Timeout test result:", result);
    })
    .catch((error) => {
        console.log("Timeout test error:", error.message);
    });

// Exercise 9: Promise All
console.log("\n9. Promise.all():");
// TODO: Create an array of Promises
let promiseArray = []; // Your code here
// Hint: [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

// TODO: Use Promise.all() to wait for all Promises
Promise.all(promiseArray)
    .then((results) => {
        console.log("Promise.all() results:", results);
    })
    .catch((error) => {
        console.log("Promise.all() error:", error.message);
    });

// Exercise 10: Promise Calculator
console.log("\n10. Promise calculator:");
// TODO: Create a Promise-based calculator
class PromiseCalculator {
    constructor() {
        this.history = [];
    }
    
    // TODO: Add method for addition
    add(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a + b
        return null;
    }
    
    // TODO: Add method for subtraction
    subtract(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a - b
        return null;
    }
    
    // TODO: Add method for multiplication
    multiply(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a * b
        return null;
    }
    
    // TODO: Add method for division
    divide(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a / b, handle division by zero
        return null;
    }
    
    // TODO: Add method to get history
    getHistory() {
        // Your code here
        // Hint: Return this.history
        return [];
    }
}

// Test the Promise calculator
let calc = new PromiseCalculator();
console.log("Promise calculator tests:");
calc.add(5, 3).then((result) => {
    console.log("5 + 3 =", result);
});
calc.subtract(10, 4).then((result) => {
    console.log("10 - 4 =", result);
});
calc.multiply(6, 7).then((result) => {
    console.log("6 * 7 =", result);
});
calc.divide(15, 3).then((result) => {
    console.log("15 / 3 =", result);
});
calc.divide(10, 0).then((result) => {
    console.log("10 / 0 =", result);
}).catch((error) => {
    console.log("10 / 0 error:", error.message);
});

console.log("\n🎉 Exercise 1 Complete!");
console.log("=====================");
console.log("Great job! You've practiced basic Promise operations.");
console.log("Key concepts practiced:");
console.log("- Promise creation and handling");
console.log("- Promise states and lifecycle");
console.log("- Error handling with .catch()");
console.log("- Promise chaining");
console.log("- Promise.all() for parallel execution");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: Promise Methods");
console.log("4. Ask questions if you need help");
