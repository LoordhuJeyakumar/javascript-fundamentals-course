// Lesson 2: Promise Methods
// This file teaches Promise methods and chaining

console.log("⚡ Welcome to Promises Lesson 2: Promise Methods!");
console.log("===============================================");

// 1. .then() Method
console.log("\n📚 1. .then() Method");
console.log("-------------------");

console.log("The .then() method is used to handle successful Promise resolution");
console.log("It takes up to two parameters: onFulfilled and onRejected");

// Basic .then() usage
let basicPromise = new Promise((resolve) => {
    resolve("Hello from Promise!");
});

basicPromise.then((result) => {
    console.log("Basic .then() result:", result);
});

// .then() with return value
let returnPromise = new Promise((resolve) => {
    resolve(5);
});

returnPromise
    .then((value) => {
        console.log("Original value:", value);
        return value * 2;
    })
    .then((value) => {
        console.log("Doubled value:", value);
        return value + 10;
    })
    .then((value) => {
        console.log("Final value:", value);
    });

// 2. .catch() Method
console.log("\n📚 2. .catch() Method");
console.log("--------------------");

console.log("The .catch() method is used to handle Promise rejection");
console.log("It's equivalent to .then(null, onRejected)");

// Basic .catch() usage
let errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong!"));
});

errorPromise.catch((error) => {
    console.log("Caught error:", error.message);
});

// .catch() in chain
let chainErrorPromise = new Promise((resolve) => {
    resolve(10);
});

chainErrorPromise
    .then((value) => {
        console.log("Step 1:", value);
        if (value > 5) {
            throw new Error("Value is too large!");
        }
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 5;
    })
    .catch((error) => {
        console.log("Error caught in chain:", error.message);
    });

// 3. .finally() Method
console.log("\n📚 3. .finally() Method");
console.log("----------------------");

console.log("The .finally() method runs regardless of Promise resolution or rejection");
console.log("It's useful for cleanup operations");

// .finally() with success
let successWithFinally = new Promise((resolve) => {
    resolve("Success!");
});

successWithFinally
    .then((result) => {
        console.log("Success result:", result);
    })
    .finally(() => {
        console.log("Finally block executed (success case)");
    });

// .finally() with error
let errorWithFinally = new Promise((resolve, reject) => {
    reject(new Error("Failed!"));
});

errorWithFinally
    .catch((error) => {
        console.log("Error result:", error.message);
    })
    .finally(() => {
        console.log("Finally block executed (error case)");
    });

// 4. Promise Chaining Patterns
console.log("\n📚 4. Promise Chaining Patterns");
console.log("-------------------------------");

// Sequential operations
function sequentialOperations() {
    return new Promise((resolve) => {
        console.log("Starting sequential operations");
        resolve(1);
    })
    .then((value) => {
        console.log("Step 1:", value);
        return new Promise((resolve) => {
            setTimeout(() => resolve(value + 1), 500);
        });
    })
    .then((value) => {
        console.log("Step 2:", value);
        return new Promise((resolve) => {
            setTimeout(() => resolve(value * 2), 300);
        });
    })
    .then((value) => {
        console.log("Step 3:", value);
        return new Promise((resolve) => {
            setTimeout(() => resolve(value - 1), 200);
        });
    })
    .then((value) => {
        console.log("Final result:", value);
        return value;
    });
}

sequentialOperations().then((result) => {
    console.log("Sequential operations completed with result:", result);
});

// 5. Error Handling in Chains
console.log("\n📚 5. Error Handling in Chains");
console.log("-----------------------------");

// Error propagation
function errorPropagationExample() {
    return new Promise((resolve) => {
        resolve(10);
    })
    .then((value) => {
        console.log("Step 1:", value);
        if (value > 5) {
            throw new Error("Value too large in step 1");
        }
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 5;
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value / 2;
    })
    .catch((error) => {
        console.log("Error caught:", error.message);
        return 0; // Default value
    })
    .then((value) => {
        console.log("Final value after error handling:", value);
    });
}

errorPropagationExample();

// 6. Promise Method Chaining
console.log("\n📚 6. Promise Method Chaining");
console.log("----------------------------");

// Complex chaining example
function complexChainingExample() {
    return new Promise((resolve) => {
        console.log("Starting complex chain");
        resolve([1, 2, 3, 4, 5]);
    })
    .then((numbers) => {
        console.log("Original numbers:", numbers);
        return numbers.filter(n => n % 2 === 0);
    })
    .then((evenNumbers) => {
        console.log("Even numbers:", evenNumbers);
        return evenNumbers.map(n => n * n);
    })
    .then((squaredNumbers) => {
        console.log("Squared numbers:", squaredNumbers);
        return squaredNumbers.reduce((sum, n) => sum + n, 0);
    })
    .then((sum) => {
        console.log("Sum of squared even numbers:", sum);
        return sum;
    })
    .catch((error) => {
        console.log("Error in complex chain:", error.message);
        return 0;
    })
    .finally(() => {
        console.log("Complex chain completed");
    });
}

complexChainingExample();

// 7. Promise with Different Return Types
console.log("\n📚 7. Promise with Different Return Types");
console.log("----------------------------------------");

// Promise returning different types
let typePromise = new Promise((resolve) => {
    resolve("Hello");
});

typePromise
    .then((value) => {
        console.log("String:", value, typeof value);
        return 42;
    })
    .then((value) => {
        console.log("Number:", value, typeof value);
        return { name: "John", age: 30 };
    })
    .then((value) => {
        console.log("Object:", value, typeof value);
        return [1, 2, 3];
    })
    .then((value) => {
        console.log("Array:", value, typeof value);
        return true;
    })
    .then((value) => {
        console.log("Boolean:", value, typeof value);
    });

// 8. Promise with Async Operations
console.log("\n📚 8. Promise with Async Operations");
console.log("----------------------------------");

// Simulate multiple async operations
function simulateAsyncOperation(name, delay) {
    return new Promise((resolve) => {
        console.log(`${name} started`);
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve(`${name} result`);
        }, delay);
    });
}

// Chain multiple async operations
simulateAsyncOperation("Operation 1", 1000)
    .then((result) => {
        console.log("First result:", result);
        return simulateAsyncOperation("Operation 2", 800);
    })
    .then((result) => {
        console.log("Second result:", result);
        return simulateAsyncOperation("Operation 3", 600);
    })
    .then((result) => {
        console.log("Third result:", result);
        console.log("All operations completed!");
    });

// 9. Promise Rejection Handling
console.log("\n📚 9. Promise Rejection Handling");
console.log("--------------------------------");

// Different ways to handle rejections
function createRejectingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Operation failed"));
        }, 500);
    });
}

// Method 1: .catch() at the end
createRejectingPromise()
    .then((result) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("Method 1 - Caught error:", error.message);
    });

// Method 2: .then() with two parameters
createRejectingPromise()
    .then(
        (result) => {
            console.log("This won't run");
        },
        (error) => {
            console.log("Method 2 - Caught error:", error.message);
        }
    );

// Method 3: Multiple .catch() handlers
createRejectingPromise()
    .then((result) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("First catch:", error.message);
        throw new Error("New error from catch");
    })
    .catch((error) => {
        console.log("Second catch:", error.message);
    });

// 10. Promise with Conditional Logic
console.log("\n📚 10. Promise with Conditional Logic");
console.log("------------------------------------");

function conditionalPromise(condition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve("Condition was true");
            } else {
                reject(new Error("Condition was false"));
            }
        }, 300);
    });
}

// Handle different conditions
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

// 11. Promise with Timeout
console.log("\n📚 11. Promise with Timeout");
console.log("--------------------------");

function createTimeoutPromise(delay, timeout = 1000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, timeout);
        
        setTimeout(() => {
            clearTimeout(timer);
            resolve(`Operation completed in ${delay}ms`);
        }, delay);
    });
}

// Test with different delays
createTimeoutPromise(500, 1000)
    .then((result) => {
        console.log("Timeout test 1:", result);
    })
    .catch((error) => {
        console.log("Timeout test 1 error:", error.message);
    });

createTimeoutPromise(1500, 1000)
    .then((result) => {
        console.log("Timeout test 2:", result);
    })
    .catch((error) => {
        console.log("Timeout test 2 error:", error.message);
    });

// 12. Practical Example: Data Processing Pipeline
console.log("\n📚 12. Practical Example: Data Processing Pipeline");
console.log("------------------------------------------------");

// Simulate data processing pipeline
function fetchData() {
    return new Promise((resolve) => {
        console.log("Fetching data...");
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }, 500);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        console.log("Filtering even numbers...");
        setTimeout(() => {
            resolve(numbers.filter(n => n % 2 === 0));
        }, 300);
    });
}

function doubleNumbers(numbers) {
    return new Promise((resolve) => {
        console.log("Doubling numbers...");
        setTimeout(() => {
            resolve(numbers.map(n => n * 2));
        }, 200);
    });
}

function calculateSum(numbers) {
    return new Promise((resolve) => {
        console.log("Calculating sum...");
        setTimeout(() => {
            resolve(numbers.reduce((sum, n) => sum + n, 0));
        }, 100);
    });
}

// Chain the operations
fetchData()
    .then((data) => {
        console.log("Original data:", data);
        return filterEvenNumbers(data);
    })
    .then((evenNumbers) => {
        console.log("Even numbers:", evenNumbers);
        return doubleNumbers(evenNumbers);
    })
    .then((doubledNumbers) => {
        console.log("Doubled numbers:", doubledNumbers);
        return calculateSum(doubledNumbers);
    })
    .then((sum) => {
        console.log("Final sum:", sum);
    })
    .catch((error) => {
        console.log("Pipeline error:", error.message);
    })
    .finally(() => {
        console.log("Data processing pipeline completed");
    });

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- .then() handles successful Promise resolution");
console.log("- .catch() handles Promise rejection");
console.log("- .finally() runs regardless of success or failure");
console.log("- Promises can be chained together");
console.log("- Errors propagate through the chain");
console.log("- Always handle errors in Promise chains");
console.log("- Use meaningful return values in .then()");

console.log("\n📝 Practice Exercises:");
console.log("1. Chain multiple .then() methods");
console.log("2. Handle errors with .catch()");
console.log("3. Use .finally() for cleanup");
console.log("4. Create complex Promise chains");
console.log("5. Build data processing pipelines");
