// Exercise 3: Async/Await
// Complete the TODO sections below

console.log("💪 Exercise 3: Async/Await");
console.log("=========================");

// Exercise 1: Basic Async Function
console.log("\n1. Basic async function:");
// TODO: Create an async function that returns "Hello from async function!"
async function basicAsyncFunction() {
    // Your code here
    // Hint: return "Hello from async function!"
    return null;
}

// TODO: Call the async function and handle the result
basicAsyncFunction().then((result) => {
    console.log("Async function result:", result);
});

// Exercise 2: Async Function with Promise
console.log("\n2. Async function with Promise:");
// TODO: Create an async function that returns a Promise
async function asyncWithPromise() {
    // Your code here
    // Hint: return new Promise((resolve) => { setTimeout(() => resolve("Async with Promise result"), 1000); })
    return null;
}

// TODO: Call the async function and handle the result
asyncWithPromise().then((result) => {
    console.log("Async with Promise result:", result);
});

// Exercise 3: Using Await
console.log("\n3. Using await:");
// TODO: Create an async function that uses await
async function awaitExample() {
    console.log("Before await");
    
    // TODO: Use await with a Promise
    let result = null; // Your code here
    // Hint: await new Promise((resolve) => { setTimeout(() => resolve("Await result"), 1000); })
    
    console.log("After await:", result);
    return result;
}

// TODO: Call the await example function
awaitExample().then((result) => {
    console.log("Await example completed:", result);
});

// Exercise 4: Await with Different Promise Types
console.log("\n4. Await with different Promise types:");
// TODO: Create an async function that awaits resolved Promise
async function awaitResolvedPromise() {
    // TODO: Await Promise.resolve("Resolved immediately")
    let result = null; // Your code here
    console.log("Await resolved Promise:", result);
    return result;
}

// TODO: Create an async function that awaits rejected Promise
async function awaitRejectedPromise() {
    try {
        // TODO: Await Promise.reject(new Error("Rejected immediately"))
        let result = null; // Your code here
        console.log("This won't run");
    } catch (error) {
        console.log("Caught rejected Promise:", error.message);
    }
}

awaitResolvedPromise();
awaitRejectedPromise();

// Exercise 5: Error Handling with Try/Catch
console.log("\n5. Error handling with try/catch:");
// TODO: Create an async function with try/catch
async function errorHandlingExample() {
    try {
        console.log("Starting error handling example");
        
        // TODO: Await a successful Promise
        let successResult = null; // Your code here
        // Hint: await new Promise((resolve) => { setTimeout(() => resolve("Success!"), 500); })
        console.log("Success result:", successResult);
        
        // TODO: Await a failing Promise
        let errorResult = null; // Your code here
        // Hint: await new Promise((resolve, reject) => { setTimeout(() => reject(new Error("Something went wrong!")), 300); })
        console.log("This won't run");
        
    } catch (error) {
        console.log("Caught error:", error.message);
    } finally {
        console.log("Finally block executed");
    }
}

errorHandlingExample();

// Exercise 6: Sequential vs Parallel Execution
console.log("\n6. Sequential vs parallel execution:");
// TODO: Create an async function for sequential execution
async function sequentialExecution() {
    console.log("Starting sequential execution");
    let start = Date.now();
    
    // TODO: Await operations sequentially
    let result1 = null; // Your code here
    // Hint: await new Promise((resolve) => { setTimeout(() => resolve("Result 1"), 1000); })
    console.log("Got result 1:", result1);
    
    let result2 = null; // Your code here
    // Hint: await new Promise((resolve) => { setTimeout(() => resolve("Result 2"), 1000); })
    console.log("Got result 2:", result2);
    
    let result3 = null; // Your code here
    // Hint: await new Promise((resolve) => { setTimeout(() => resolve("Result 3"), 1000); })
    console.log("Got result 3:", result3);
    
    let end = Date.now();
    console.log("Sequential execution took:", end - start, "ms");
    
    return [result1, result2, result3];
}

// TODO: Create an async function for parallel execution
async function parallelExecution() {
    console.log("Starting parallel execution");
    let start = Date.now();
    
    // TODO: Create Promises without awaiting
    let promise1 = null; // Your code here
    // Hint: new Promise((resolve) => { setTimeout(() => resolve("Result 1"), 1000); })
    
    let promise2 = null; // Your code here
    // Hint: new Promise((resolve) => { setTimeout(() => resolve("Result 2"), 1000); })
    
    let promise3 = null; // Your code here
    // Hint: new Promise((resolve) => { setTimeout(() => resolve("Result 3"), 1000); })
    
    // TODO: Await all Promises with Promise.all()
    let results = null; // Your code here
    // Hint: await Promise.all([promise1, promise2, promise3])
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

// Exercise 7: Converting Promises to Async/Await
console.log("\n7. Converting Promises to async/await:");
// TODO: Convert Promise-based code to async/await
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

// TODO: Create async/await equivalent
async function asyncAwaitEquivalent() {
    // Your code here
    // Hint: Convert the Promise chain to async/await
    return null;
}

// Test both approaches
promiseBasedCode().then((result) => {
    console.log("Promise-based final result:", result);
});

asyncAwaitEquivalent().then((result) => {
    console.log("Async/await final result:", result);
});

// Exercise 8: Async Functions in Different Contexts
console.log("\n8. Async functions in different contexts:");
// TODO: Create a class with async methods
class AsyncClass {
    // TODO: Add async method
    async asyncMethod() {
        console.log("Async method called");
        // TODO: Return await new Promise
        return null; // Your code here
    }
    
    // TODO: Add async method with error handling
    async asyncMethodWithError() {
        try {
            // TODO: Return await new Promise that rejects
            return null; // Your code here
        } catch (error) {
            console.log("Method caught error:", error.message);
            return "Error handled";
        }
    }
}

// TODO: Create async arrow function
const asyncArrowFunction = async () => {
    console.log("Async arrow function called");
    // TODO: Return await new Promise
    return null; // Your code here
};

// Test async class
let asyncObj = new AsyncClass();
asyncObj.asyncMethod().then((result) => {
    console.log("Async method result:", result);
});

asyncObj.asyncMethodWithError().then((result) => {
    console.log("Async method with error result:", result);
});

// Test async arrow function
asyncArrowFunction().then((result) => {
    console.log("Async arrow function result:", result);
});

// Exercise 9: Await with Promise.all()
console.log("\n9. Await with Promise.all():");
// TODO: Create an async function that uses Promise.all()
async function awaitPromiseAll() {
    console.log("Starting Promise.all() example");
    
    // TODO: Create array of Promises
    let promises = []; // Your code here
    // Hint: [new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000)), ...]
    
    // TODO: Await Promise.all()
    let results = null; // Your code here
    // Hint: await Promise.all(promises)
    console.log("All results:", results);
    
    return results;
}

awaitPromiseAll().then((results) => {
    console.log("Promise.all() completed:", results);
});

// Exercise 10: Await with Promise.race()
console.log("\n10. Await with Promise.race():");
// TODO: Create an async function that uses Promise.race()
async function awaitPromiseRace() {
    console.log("Starting Promise.race() example");
    
    // TODO: Create array of Promises
    let promises = []; // Your code here
    // Hint: [new Promise((resolve) => setTimeout(() => resolve("Fast result"), 300)), ...]
    
    // TODO: Await Promise.race()
    let result = null; // Your code here
    // Hint: await Promise.race(promises)
    console.log("Race result:", result);
    
    return result;
}

awaitPromiseRace().then((result) => {
    console.log("Promise.race() completed:", result);
});

// Exercise 11: Practical Example: API Calls
console.log("\n11. Practical example: API calls:");
// TODO: Create async functions for API calls
async function fetchUserData(userId) {
    console.log(`Fetching user data for ID: ${userId}`);
    // TODO: Return await new Promise
    return null; // Your code here
}

async function fetchUserPosts(userId) {
    console.log(`Fetching posts for user ID: ${userId}`);
    // TODO: Return await new Promise
    return null; // Your code here
}

async function fetchUserComments(userId) {
    console.log(`Fetching comments for user ID: ${userId}`);
    // TODO: Return await new Promise
    return null; // Your code here
}

// TODO: Create async function for sequential API calls
async function sequentialApiCalls(userId) {
    try {
        console.log("Starting sequential API calls");
        let start = Date.now();
        
        // TODO: Await API calls sequentially
        let user = null; // Your code here
        // Hint: await fetchUserData(userId)
        console.log("User data:", user);
        
        let posts = null; // Your code here
        // Hint: await fetchUserPosts(userId)
        console.log("User posts:", posts);
        
        let comments = null; // Your code here
        // Hint: await fetchUserComments(userId)
        console.log("User comments:", comments);
        
        let end = Date.now();
        console.log("Sequential API calls took:", end - start, "ms");
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Sequential API calls error:", error.message);
        throw error;
    }
}

// TODO: Create async function for parallel API calls
async function parallelApiCalls(userId) {
    try {
        console.log("Starting parallel API calls");
        let start = Date.now();
        
        // TODO: Await Promise.all() with API calls
        let [user, posts, comments] = null; // Your code here
        // Hint: await Promise.all([fetchUserData(userId), fetchUserPosts(userId), fetchUserComments(userId)])
        
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

// Exercise 12: Best Practices
console.log("\n12. Best practices:");
// TODO: Create an async function following best practices
async function goodAsyncExample() {
    try {
        console.log("Good async/await example");
        
        // TODO: Use Promise.all() for parallel operations
        let [data1, data2] = null; // Your code here
        // Hint: await Promise.all([new Promise(...), new Promise(...)])
        
        console.log("Data 1:", data1);
        console.log("Data 2:", data2);
        
        // TODO: Sequential operation
        let processedData = null; // Your code here
        // Hint: await new Promise(...)
        
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

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced async/await.");
console.log("Key concepts practiced:");
console.log("- Async function syntax");
console.log("- Await keyword usage");
console.log("- Error handling with try/catch");
console.log("- Sequential vs parallel execution");
console.log("- Converting Promises to async/await");
console.log("- Async functions in different contexts");
console.log("- Promise.all() and Promise.race() with await");
console.log("- Real-world API call examples");
console.log("- Best practices for async/await");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Promises Assignment");
console.log("4. Ask questions if you need help");
