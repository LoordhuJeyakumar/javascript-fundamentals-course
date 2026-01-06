// Exercise 2: Promise Methods
// Complete the TODO sections below

console.log("💪 Exercise 2: Promise Methods");
console.log("=============================");

// Exercise 1: .then() Method
console.log("\n1. .then() method:");
// TODO: Create a Promise that resolves with 10
let thenPromise = null; // Your code here
// Hint: Promise.resolve(10)

// TODO: Use .then() to multiply by 2
thenPromise.then((value) => {
    console.log("Original value:", value);
    return value * 2; // Your code here
}).then((value) => {
    console.log("Doubled value:", value);
});

// Exercise 2: .catch() Method
console.log("\n2. .catch() method:");
// TODO: Create a Promise that rejects with "Something went wrong"
let catchPromise = null; // Your code here
// Hint: Promise.reject(new Error("Something went wrong"))

// TODO: Use .catch() to handle the error
catchPromise.catch((error) => {
    console.log("Caught error:", error.message);
});

// Exercise 3: .finally() Method
console.log("\n3. .finally() method:");
// TODO: Create a Promise that resolves with "Success"
let finallyPromise = null; // Your code here
// Hint: Promise.resolve("Success")

// TODO: Use .finally() to log "Finally executed"
finallyPromise
    .then((result) => {
        console.log("Success result:", result);
    })
    .finally(() => {
        console.log("Finally executed"); // Your code here
    });

// Exercise 4: Promise Chaining
console.log("\n4. Promise chaining:");
// TODO: Create a Promise that resolves with 5
let chainPromise = null; // Your code here
// Hint: Promise.resolve(5)

// TODO: Chain multiple .then() methods
chainPromise
    .then((value) => {
        console.log("Step 1:", value);
        return value + 5; // Your code here
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value * 2; // Your code here
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value - 3; // Your code here
    })
    .then((value) => {
        console.log("Final result:", value);
    });

// Exercise 5: Error Handling in Chains
console.log("\n5. Error handling in chains:");
// TODO: Create a Promise that resolves with 10
let errorChainPromise = null; // Your code here
// Hint: Promise.resolve(10)

// TODO: Chain with error handling
errorChainPromise
    .then((value) => {
        console.log("Step 1:", value);
        if (value > 5) {
            throw new Error("Value too large"); // Your code here
        }
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 5;
    })
    .catch((error) => {
        console.log("Error caught:", error.message);
        return 0; // Your code here
    })
    .then((value) => {
        console.log("After error handling:", value);
    });

// Exercise 6: Promise with Different Return Types
console.log("\n6. Promise with different return types:");
// TODO: Create a Promise that resolves with "Hello"
let typePromise = null; // Your code here
// Hint: Promise.resolve("Hello")

// TODO: Chain with different return types
typePromise
    .then((value) => {
        console.log("String:", value, typeof value);
        return 42; // Your code here
    })
    .then((value) => {
        console.log("Number:", value, typeof value);
        return { name: "John", age: 30 }; // Your code here
    })
    .then((value) => {
        console.log("Object:", value, typeof value);
        return [1, 2, 3]; // Your code here
    })
    .then((value) => {
        console.log("Array:", value, typeof value);
        return true; // Your code here
    })
    .then((value) => {
        console.log("Boolean:", value, typeof value);
    });

// Exercise 7: Promise with Async Operations
console.log("\n7. Promise with async operations:");
// TODO: Create a function that simulates async operation
function simulateAsyncOperation(name, delay) {
    // Your code here
    // Hint: Return a Promise with setTimeout
    return null;
}

// TODO: Chain multiple async operations
simulateAsyncOperation("Operation 1", 1000)
    .then((result) => {
        console.log("First result:", result);
        return simulateAsyncOperation("Operation 2", 800); // Your code here
    })
    .then((result) => {
        console.log("Second result:", result);
        return simulateAsyncOperation("Operation 3", 600); // Your code here
    })
    .then((result) => {
        console.log("Third result:", result);
        console.log("All operations completed!");
    });

// Exercise 8: Promise Rejection Handling
console.log("\n8. Promise rejection handling:");
// TODO: Create a Promise that rejects with "Operation failed"
let rejectPromise = null; // Your code here
// Hint: Promise.reject(new Error("Operation failed"))

// TODO: Handle rejection with .catch()
rejectPromise
    .then((result) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("Rejection handled:", error.message);
    });

// TODO: Handle rejection with .then() with two parameters
rejectPromise.then(
    (result) => {
        console.log("This won't run");
    },
    (error) => {
        console.log("Rejection handled with .then():", error.message);
    }
);

// Exercise 9: Promise with Conditional Logic
console.log("\n9. Promise with conditional logic:");
// TODO: Create a function that returns a Promise based on condition
function conditionalPromise(condition) {
    // Your code here
    // Hint: Use if/else with resolve/reject
    return null;
}

// TODO: Test different conditions
conditionalPromise(true)
    .then((result) => {
        console.log("True condition result:", result);
    })
    .catch((error) => {
        console.log("True condition error:", error.message);
    });

conditionalPromise(false)
    .then((result) => {
        console.log("False condition result:", result);
    })
    .catch((error) => {
        console.log("False condition error:", error.message);
    });

// Exercise 10: Promise Calculator with Methods
console.log("\n10. Promise calculator with methods:");
// TODO: Create a Promise-based calculator class
class PromiseCalculator {
    constructor() {
        this.history = [];
    }
    
    // TODO: Add method for addition
    add(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a + b and adds to history
        return null;
    }
    
    // TODO: Add method for subtraction
    subtract(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a - b and adds to history
        return null;
    }
    
    // TODO: Add method for multiplication
    multiply(a, b) {
        // Your code here
        // Hint: Return a Promise that resolves with a * b and adds to history
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
    
    // TODO: Add method to clear history
    clearHistory() {
        // Your code here
        // Hint: Set this.history to empty array
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

// Exercise 11: Promise Method Chaining
console.log("\n11. Promise method chaining:");
// TODO: Create a Promise that resolves with an array of numbers
let arrayPromise = null; // Your code here
// Hint: Promise.resolve([1, 2, 3, 4, 5])

// TODO: Chain methods to process the array
arrayPromise
    .then((numbers) => {
        console.log("Original array:", numbers);
        return numbers.filter(n => n % 2 === 0); // Your code here
    })
    .then((evenNumbers) => {
        console.log("Even numbers:", evenNumbers);
        return evenNumbers.map(n => n * n); // Your code here
    })
    .then((squaredNumbers) => {
        console.log("Squared numbers:", squaredNumbers);
        return squaredNumbers.reduce((sum, n) => sum + n, 0); // Your code here
    })
    .then((sum) => {
        console.log("Sum of squared even numbers:", sum);
    });

// Exercise 12: Promise Error Recovery
console.log("\n12. Promise error recovery:");
// TODO: Create a function that might fail
function riskyOperation(success) {
    // Your code here
    // Hint: Return a Promise that resolves or rejects based on success parameter
    return null;
}

// TODO: Implement error recovery
riskyOperation(false)
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error occurred:", error.message);
        return "Error recovered"; // Your code here
    })
    .then((result) => {
        console.log("After error recovery:", result);
    });

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Great job! You've practiced Promise methods.");
console.log("Key concepts practiced:");
console.log("- .then() method for success handling");
console.log("- .catch() method for error handling");
console.log("- .finally() method for cleanup");
console.log("- Promise chaining patterns");
console.log("- Error handling in chains");
console.log("- Method chaining with Promises");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: Async/Await");
console.log("4. Ask questions if you need help");
