// Lesson 1: Promise Basics
// This file teaches fundamental Promise concepts

console.log("⚡ Welcome to Promises Lesson 1: Promise Basics!");
console.log("==============================================");

// 1. What are Promises?
console.log("\n📚 1. What are Promises?");
console.log("----------------------");

console.log("A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.");
console.log("Think of it like a receipt for a future value - you get a promise that you'll receive something later.");

// 2. Promise States
console.log("\n📚 2. Promise States");
console.log("------------------");

console.log("Promises have three states:");
console.log("1. Pending: Initial state, neither fulfilled nor rejected");
console.log("2. Fulfilled: Operation completed successfully");
console.log("3. Rejected: Operation failed");

// 3. Creating Promises
console.log("\n📚 3. Creating Promises");
console.log("---------------------");

// Promise with resolve
let successPromise = new Promise((resolve, reject) => {
    console.log("Promise executor is running...");
    setTimeout(() => {
        resolve("Operation completed successfully!");
    }, 1000);
});

console.log("Created a Promise that will resolve in 1 second");
console.log("Promise state:", successPromise);

// Promise with reject
let failurePromise = new Promise((resolve, reject) => {
    console.log("Promise executor is running...");
    setTimeout(() => {
        reject(new Error("Operation failed!"));
    }, 500);
});

console.log("Created a Promise that will reject in 0.5 seconds");
console.log("Promise state:", failurePromise);

// Handle the rejection to prevent uncaught exception
failurePromise.catch((error) => {
    console.log("Handled failure promise:", error.message);
});

// 4. Promise Constructor
console.log("\n📚 4. Promise Constructor");
console.log("----------------------");

console.log("Promise constructor takes a function called 'executor'");
console.log("The executor function receives two parameters:");
console.log("- resolve: Function to call when the operation succeeds");
console.log("- reject: Function to call when the operation fails");

// Example with different scenarios
function createPromise(shouldSucceed, delay = 1000) {
    return new Promise((resolve, reject) => {
        console.log(`Creating promise that will ${shouldSucceed ? 'succeed' : 'fail'} in ${delay}ms`);
        
        setTimeout(() => {
            if (shouldSucceed) {
                resolve(`Success after ${delay}ms`);
            } else {
                reject(new Error(`Failure after ${delay}ms`));
            }
        }, delay);
    });
}

let promise1 = createPromise(true, 500);
let promise2 = createPromise(false, 800);

console.log("Promise 1 (success):", promise1);
console.log("Promise 2 (failure):", promise2);

// Handle the createPromise rejections
promise1.then((result) => {
    console.log("Promise 1 result:", result);
}).catch((error) => {
    console.log("Promise 1 error:", error.message);
});

promise2.then((result) => {
    console.log("Promise 2 result:", result);
}).catch((error) => {
    console.log("Promise 2 error:", error.message);
});

// 5. Promise vs Callbacks
console.log("\n📚 5. Promise vs Callbacks");
console.log("-------------------------");

// Callback approach (callback hell)
function callbackExample(callback) {
    console.log("Callback approach:");
    setTimeout(() => {
        console.log("First operation");
        setTimeout(() => {
            console.log("Second operation");
            setTimeout(() => {
                console.log("Third operation");
                callback("All operations completed");
            }, 100);
        }, 100);
    }, 100);
}

// Promise approach
function promiseExample() {
    console.log("Promise approach:");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First operation");
            resolve();
        }, 100);
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Second operation");
                resolve();
            }, 100);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Third operation");
                resolve("All operations completed");
            }, 100);
        });
    });
}

// Test both approaches
callbackExample((result) => {
    console.log("Callback result:", result);
});

promiseExample().then((result) => {
    console.log("Promise result:", result);
});

// 6. Basic Promise Handling
console.log("\n📚 6. Basic Promise Handling");
console.log("---------------------------");

// Using .then() for success
let basicPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello from Promise!");
    }, 1000);
});

console.log("Handling Promise with .then():");
basicPromise.then((result) => {
    console.log("Promise resolved with:", result);
});

// Using .catch() for errors
let errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"));
    }, 500);
});

console.log("Handling Promise with .catch():");
errorPromise.catch((error) => {
    console.log("Promise rejected with:", error.message);
});

// 7. Promise Chaining
console.log("\n📚 7. Promise Chaining");
console.log("--------------------");

// Simple chaining
let chainPromise = new Promise((resolve) => {
    resolve(5);
});

chainPromise
    .then((value) => {
        console.log("Step 1:", value);
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 10;
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value / 2;
    })
    .then((value) => {
        console.log("Final result:", value);
    });

// 8. Promise with Different Data Types
console.log("\n📚 8. Promise with Different Data Types");
console.log("--------------------------------------");

// Promise resolving with different data types
let stringPromise = new Promise((resolve) => {
    resolve("Hello World");
});

let numberPromise = new Promise((resolve) => {
    resolve(42);
});

let objectPromise = new Promise((resolve) => {
    resolve({ name: "John", age: 30 });
});

let arrayPromise = new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5]);
});

let booleanPromise = new Promise((resolve) => {
    resolve(true);
});

// Handle different data types
stringPromise.then((result) => {
    console.log("String Promise:", result, typeof result);
});

numberPromise.then((result) => {
    console.log("Number Promise:", result, typeof result);
});

objectPromise.then((result) => {
    console.log("Object Promise:", result, typeof result);
});

arrayPromise.then((result) => {
    console.log("Array Promise:", result, typeof result);
});

booleanPromise.then((result) => {
    console.log("Boolean Promise:", result, typeof result);
});

// 9. Promise Timing
console.log("\n📚 9. Promise Timing");
console.log("------------------");

console.log("Promises are asynchronous - they don't block the main thread");
console.log("This code runs immediately:");

let timingPromise = new Promise((resolve) => {
    console.log("Promise executor runs immediately");
    setTimeout(() => {
        console.log("Promise resolves after 2 seconds");
        resolve("Delayed result");
    }, 2000);
});

console.log("This code runs before the Promise resolves");
console.log("Promise object:", timingPromise);

// 10. Practical Example: Simple API Simulation
console.log("\n📚 10. Practical Example: Simple API Simulation");
console.log("-----------------------------------------------");

// Simulate API calls
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user data for ID: ${userId}`);
        
        // Simulate network delay
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`,
                    role: 'user'
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching posts for user ID: ${userId}`);
        
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "First Post", content: "Hello World!" },
                    { id: 2, title: "Second Post", content: "Learning Promises" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 300);
    });
}

// Test the API simulation
console.log("Testing API simulation:");
fetchUserData(1)
    .then((user) => {
        console.log("User data received:", user);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log("User posts received:", posts);
    })
    .catch((error) => {
        console.log("Error occurred:", error.message);
    });

// Test with invalid ID
fetchUserData(0)
    .then((user) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("Expected error:", error.message);
    });

// 11. Promise Static Methods
console.log("\n📚 11. Promise Static Methods");
console.log("----------------------------");

// Promise.resolve() - creates a resolved promise
let resolvedPromise = Promise.resolve("Immediate value");
console.log("Promise.resolve():", resolvedPromise);

// Promise.reject() - creates a rejected promise
let rejectedPromise = Promise.reject(new Error("Immediate error"));
console.log("Promise.reject():", rejectedPromise);

// Handle the rejected promise to prevent uncaught exception
rejectedPromise.catch((error) => {
    console.log("Handled rejected promise:", error.message);
});

// Promise.resolve() with different values
Promise.resolve(42).then(value => console.log("Resolved with number:", value));
Promise.resolve("Hello").then(value => console.log("Resolved with string:", value));
Promise.resolve({ key: "value" }).then(value => console.log("Resolved with object:", value));

// 12. Promise Error Handling
console.log("\n📚 12. Promise Error Handling");
console.log("----------------------------");

// Promise that might fail
function riskyOperation(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operation succeeded!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 500);
    });
}

// Handle success case
riskyOperation(true)
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

// Handle failure case
riskyOperation(false)
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

// 13. Promise Best Practices
console.log("\n📚 13. Promise Best Practices");
console.log("----------------------------");

console.log("Best practices for Promises:");
console.log("1. Always handle errors with .catch()");
console.log("2. Don't forget to return values in .then() chains");
console.log("3. Use meaningful error messages");
console.log("4. Avoid Promise constructor antipattern");
console.log("5. Use async/await for cleaner code when possible");

// Example of good Promise usage
function goodPromiseExample() {
    return new Promise((resolve, reject) => {
        // Simulate some work
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Work completed successfully");
            } else {
                reject(new Error("Work failed due to random chance"));
            }
        }, 1000);
    });
}

// Good error handling
goodPromiseExample()
    .then((result) => {
        console.log("Good Promise result:", result);
    })
    .catch((error) => {
        console.log("Good Promise error:", error.message);
    });

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Promises represent future values from async operations");
console.log("- Promises have three states: pending, fulfilled, rejected");
console.log("- Use new Promise() to create Promises");
console.log("- Use .then() to handle successful results");
console.log("- Use .catch() to handle errors");
console.log("- Promises are asynchronous and don't block the main thread");
console.log("- Always handle errors in Promise chains");

console.log("\n📝 Practice Exercises:");
console.log("1. Create Promises that resolve with different values");
console.log("2. Create Promises that reject with different errors");
console.log("3. Chain Promises together");
console.log("4. Handle errors in Promise chains");
console.log("5. Simulate real-world async operations");
