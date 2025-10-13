// Lesson 3: Async/Await
// This file teaches async/await syntax and patterns

console.log("⚡ Welcome to Promises Lesson 3: Async/Await!");
console.log("===========================================");

// 1. What is Async/Await?
console.log("\n📚 1. What is Async/Await?");
console.log("-------------------------");

console.log("Async/await is syntactic sugar over Promises that makes asynchronous code look synchronous");
console.log("It makes async code easier to read and write");
console.log("async functions always return a Promise");
console.log("await can only be used inside async functions");

// 2. Basic Async Function
console.log("\n📚 2. Basic Async Function");
console.log("-------------------------");

// Basic async function
async function basicAsyncFunction() {
    console.log("This is an async function");
    return "Hello from async function!";
}

// Call async function
basicAsyncFunction().then((result) => {
    console.log("Async function result:", result);
});

// Async function with Promise
async function asyncWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async with Promise result");
        }, 1000);
    });
}

asyncWithPromise().then((result) => {
    console.log("Async with Promise result:", result);
});

// 3. Using Await
console.log("\n📚 3. Using Await");
console.log("----------------");

// Basic await usage
async function basicAwaitExample() {
    console.log("Before await");
    
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Await result");
        }, 1000);
    });
    
    console.log("After await:", result);
    return result;
}

basicAwaitExample().then((result) => {
    console.log("Basic await example completed:", result);
});

// 4. Await with Different Promise Types
console.log("\n📚 4. Await with Different Promise Types");
console.log("---------------------------------------");

// Await with resolved Promise
async function awaitResolvedPromise() {
    let result = await Promise.resolve("Resolved immediately");
    console.log("Await resolved Promise:", result);
    return result;
}

// Await with rejected Promise
async function awaitRejectedPromise() {
    try {
        let result = await Promise.reject(new Error("Rejected immediately"));
        console.log("This won't run");
    } catch (error) {
        console.log("Caught rejected Promise:", error.message);
    }
}

awaitResolvedPromise();
awaitRejectedPromise();

// 5. Error Handling with Try/Catch
console.log("\n📚 5. Error Handling with Try/Catch");
console.log("----------------------------------");

// Error handling in async/await
async function errorHandlingExample() {
    try {
        console.log("Starting error handling example");
        
        // This will succeed
        let successResult = await new Promise((resolve) => {
            setTimeout(() => resolve("Success!"), 500);
        });
        console.log("Success result:", successResult);
        
        // This will fail
        let errorResult = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Something went wrong!")), 300);
        });
        console.log("This won't run");
        
    } catch (error) {
        console.log("Caught error:", error.message);
    } finally {
        console.log("Finally block executed");
    }
}

errorHandlingExample();

// 6. Sequential vs Parallel Execution
console.log("\n📚 6. Sequential vs Parallel Execution");
console.log("-------------------------------------");

// Sequential execution (slow)
async function sequentialExecution() {
    console.log("Starting sequential execution");
    let start = Date.now();
    
    let result1 = await new Promise((resolve) => {
        setTimeout(() => resolve("Result 1"), 1000);
    });
    console.log("Got result 1:", result1);
    
    let result2 = await new Promise((resolve) => {
        setTimeout(() => resolve("Result 2"), 1000);
    });
    console.log("Got result 2:", result2);
    
    let result3 = await new Promise((resolve) => {
        setTimeout(() => resolve("Result 3"), 1000);
    });
    console.log("Got result 3:", result3);
    
    let end = Date.now();
    console.log("Sequential execution took:", end - start, "ms");
    
    return [result1, result2, result3];
}

// Parallel execution (fast)
async function parallelExecution() {
    console.log("Starting parallel execution");
    let start = Date.now();
    
    let promise1 = new Promise((resolve) => {
        setTimeout(() => resolve("Result 1"), 1000);
    });
    
    let promise2 = new Promise((resolve) => {
        setTimeout(() => resolve("Result 2"), 1000);
    });
    
    let promise3 = new Promise((resolve) => {
        setTimeout(() => resolve("Result 3"), 1000);
    });
    
    let results = await Promise.all([promise1, promise2, promise3]);
    console.log("Got all results:", results);
    
    let end = Date.now();
    console.log("Parallel execution took:", end - start, "ms");
    
    return results;
}

// Test both approaches
sequentialExecution().then((results) => {
    console.log("Sequential results:", results);
});

parallelExecution().then((results) => {
    console.log("Parallel results:", results);
});

// 7. Converting Promises to Async/Await
console.log("\n📚 7. Converting Promises to Async/Await");
console.log("---------------------------------------");

// Promise-based code
function promiseBasedCode() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise result");
        }, 500);
    })
    .then((result) => {
        console.log("Promise result:", result);
        return result.toUpperCase();
    })
    .then((result) => {
        console.log("Uppercase result:", result);
        return result.length;
    })
    .then((result) => {
        console.log("Length result:", result);
        return result;
    });
}

// Async/await equivalent
async function asyncAwaitEquivalent() {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise result");
        }, 500);
    });
    
    console.log("Promise result:", result);
    result = result.toUpperCase();
    
    console.log("Uppercase result:", result);
    result = result.length;
    
    console.log("Length result:", result);
    return result;
}

// Test both approaches
promiseBasedCode().then((result) => {
    console.log("Promise-based final result:", result);
});

asyncAwaitEquivalent().then((result) => {
    console.log("Async/await final result:", result);
});

// 8. Async Functions in Different Contexts
console.log("\n📚 8. Async Functions in Different Contexts");
console.log("-----------------------------------------");

// Async function as method
class AsyncClass {
    async asyncMethod() {
        console.log("Async method called");
        return await new Promise((resolve) => {
            setTimeout(() => resolve("Method result"), 500);
        });
    }
    
    async asyncMethodWithError() {
        try {
            return await new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error("Method error")), 300);
            });
        } catch (error) {
            console.log("Method caught error:", error.message);
            return "Error handled";
        }
    }
}

let asyncObj = new AsyncClass();
asyncObj.asyncMethod().then((result) => {
    console.log("Async method result:", result);
});

asyncObj.asyncMethodWithError().then((result) => {
    console.log("Async method with error result:", result);
});

// Async function as arrow function
const asyncArrowFunction = async () => {
    console.log("Async arrow function called");
    return await new Promise((resolve) => {
        setTimeout(() => resolve("Arrow function result"), 400);
    });
};

asyncArrowFunction().then((result) => {
    console.log("Async arrow function result:", result);
});

// 9. Await with Promise.all()
console.log("\n📚 9. Await with Promise.all()");
console.log("-----------------------------");

// Await with Promise.all()
async function awaitPromiseAll() {
    console.log("Starting Promise.all() example");
    
    let promises = [
        new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Result 2"), 800)),
        new Promise((resolve) => setTimeout(() => resolve("Result 3"), 600))
    ];
    
    let results = await Promise.all(promises);
    console.log("All results:", results);
    
    return results;
}

awaitPromiseAll().then((results) => {
    console.log("Promise.all() completed:", results);
});

// 10. Await with Promise.race()
console.log("\n📚 10. Await with Promise.race()");
console.log("--------------------------------");

// Await with Promise.race() => returns the first resolved promise
async function awaitPromiseRace() {
    console.log("Starting Promise.race() example");
    
    let promises = [
        new Promise((resolve) => setTimeout(() => resolve("Fast result"), 300)),
        new Promise((resolve) => setTimeout(() => resolve("Slow result"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Medium result"), 600))
    ];
    
    let result = await Promise.race(promises);
    console.log("Race result:", result);
    
    return result;
}

awaitPromiseRace().then((result) => {
    console.log("Promise.race() completed:", result);
});

// 11. Practical Example: API Calls
console.log("\n📚 11. Practical Example: API Calls");
console.log("----------------------------------");

// Simulate API calls
async function fetchUserData(userId) {
    console.log(`Fetching user data for ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 500);
    });
}

async function fetchUserPosts(userId) {
    console.log(`Fetching posts for user ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "Post 1", content: "Content 1" },
                    { id: 2, title: "Post 2", content: "Content 2" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 300);
    });
}

async function fetchUserComments(userId) {
    console.log(`Fetching comments for user ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, text: "Comment 1" },
                    { id: 2, text: "Comment 2" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 200);
    });
}

// Sequential API calls
async function sequentialApiCalls(userId) {
    try {
        console.log("Starting sequential API calls");
        let start = Date.now();
        
        let user = await fetchUserData(userId);
        console.log("User data:", user);
        
        let posts = await fetchUserPosts(userId);
        console.log("User posts:", posts);
        
        let comments = await fetchUserComments(userId);
        console.log("User comments:", comments);
        
        let end = Date.now();
        console.log("Sequential API calls took:", end - start, "ms");
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Sequential API calls error:", error.message);
        throw error;
    }
}

// Parallel API calls
async function parallelApiCalls(userId) {
    try {
        console.log("Starting parallel API calls");
        let start = Date.now();
        
        let [user, posts, comments] = await Promise.all([
            fetchUserData(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId)
        ]);
        
        console.log("User data:", user);
        console.log("User posts:", posts);
        console.log("User comments:", comments);
        
        let end = Date.now();
        console.log("Parallel API calls took:", end - start, "ms");
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Parallel API calls error:", error.message);
        throw error;
    }
}

// Test both approaches
sequentialApiCalls(1).then((result) => {
    console.log("Sequential API calls completed:", result);
});

parallelApiCalls(1).then((result) => {
    console.log("Parallel API calls completed:", result);
});

// 12. Best Practices
console.log("\n📚 12. Best Practices");
console.log("--------------------");

console.log("Best practices for async/await:");
console.log("1. Always use try/catch for error handling");
console.log("2. Use Promise.all() for parallel operations");
console.log("3. Don't forget await keyword");
console.log("4. Use meaningful variable names");
console.log("5. Handle errors appropriately");
console.log("6. Consider performance implications");
console.log("7. Use async/await for cleaner code");

// Example of good async/await usage
async function goodAsyncExample() {
    try {
        console.log("Good async/await example");
        
        // Parallel operations
        let [data1, data2] = await Promise.all([
            new Promise((resolve) => setTimeout(() => resolve("Data 1"), 500)),
            new Promise((resolve) => setTimeout(() => resolve("Data 2"), 300))
        ]);
        
        console.log("Data 1:", data1);
        console.log("Data 2:", data2);
        
        // Sequential operation
        let processedData = await new Promise((resolve) => {
            setTimeout(() => resolve("Processed data"), 200);
        });
        
        console.log("Processed data:", processedData);
        
        return { data1, data2, processedData };
        
    } catch (error) {
        console.log("Error in good async example:", error.message);
        throw error;
    }
}

goodAsyncExample().then((result) => {
    console.log("Good async example completed:", result);
});

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- async functions always return Promises");
console.log("- await can only be used inside async functions");
console.log("- Use try/catch for error handling");
console.log("- Use Promise.all() for parallel operations");
console.log("- async/await makes code more readable");
console.log("- Always handle errors appropriately");
console.log("- Consider performance when choosing sequential vs parallel");

console.log("\n📝 Practice Exercises:");
console.log("1. Convert Promise chains to async/await");
console.log("2. Handle errors with try/catch");
console.log("3. Use Promise.all() for parallel operations");
console.log("4. Create async functions in different contexts");
console.log("5. Build real-world async applications");
