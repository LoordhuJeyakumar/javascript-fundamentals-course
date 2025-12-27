// Exercise 1: Basic Async Function
console.log("\n1. Basic async function:");

async function basicAsyncFunction() {
    return "Hello from async function!";
}
basicAsyncFunction().then((result) => {
    console.log("Async function result:", result);
});

// Exercise 2: Async Function with Promise
console.log("\n2. Async function with Promise:");

async function asyncWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Async with Promise result"), 1000);
    });
}
asyncWithPromise().then((result) => {
    console.log("Async with Promise result:", result);
});

// Exercise 3: Using Await
console.log("\n3. Using await:");

async function awaitExample() {
    console.log("Before await");
    
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve("Await result"), 1000);
    });
    
    console.log("After await:", result);
    return result;
}
awaitExample().then((result) => {
    console.log("Await example completed:", result);
});

// Exercise 4: Await with Different Promise Types
console.log("\n4. Await with different Promise types:");

async function awaitResolvedPromise() {
    let result = await Promise.resolve("Resolved immediately");
    console.log("Await resolved Promise:", result);
    return result;
}
async function awaitRejectedPromise() {
    try {
        await Promise.reject(new Error("Rejected immediately"));
        console.log("This won't run");
    } catch (error) {
        console.log("Caught rejected Promise:", error.message);
    }
}
awaitResolvedPromise();
awaitRejectedPromise();

// Exercise 5: Error Handling with Try/Catch
console.log("\n5. Error handling with try/catch:");

async function errorHandlingExample() {
    try {
        console.log("Starting error handling example");
        
        let successResult = await new Promise((resolve) =>
            setTimeout(() => resolve("Success!"), 500)
        );
        console.log("Success result:", successResult);
        
        let errorResult = await new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Something went wrong!")), 300)
        );
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

async function sequentialExecution() {
    console.log("Starting sequential execution");
    let start = Date.now();
    
    let result1 = await new Promise((resolve) =>
        setTimeout(() => resolve("Result 1"), 1000)
    );
    console.log("Got result 1:", result1);
    
    let result2 = await new Promise((resolve) =>
        setTimeout(() => resolve("Result 2"), 1000)
    );
    console.log("Got result 2:", result2);
    
    let result3 = await new Promise((resolve) =>
        setTimeout(() => resolve("Result 3"), 1000)
    );
    console.log("Got result 3:", result3);
    
    let end = Date.now();
    console.log("Sequential execution took:", end - start, "ms");
    
    return [result1, result2, result3];
}
async function parallelExecution() {
    console.log("Starting parallel execution");
    let start = Date.now();
    
    let promise1 = new Promise((resolve) =>
        setTimeout(() => resolve("Result 1"), 1000)
    );
    
    let promise2 = new Promise((resolve) =>
        setTimeout(() => resolve("Result 2"), 1000)
    );
    
    let promise3 = new Promise((resolve) =>
        setTimeout(() => resolve("Result 3"), 1000)
    );
    
    let results = await Promise.all([promise1, promise2, promise3]);
    console.log("Got all results:", results);
    
    let end = Date.now();
    console.log("Parallel execution took:", end - start, "ms");
    
    return results;
}
sequentialExecution().then((results) => {
    console.log("Sequential results:", results);
});
parallelExecution().then((results) => {
    console.log("Parallel results:", results);
});

// Exercise 7: Converting Promises to Async/Await
console.log("\n7. Converting Promises to async/await:");

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
async function asyncAwaitEquivalent() {
    let result = await new Promise((resolve) =>
        setTimeout(() => resolve("Promise result"), 500)
    );
    console.log("Promise result:", result);

    let upper = result.toUpperCase();
    console.log("Uppercase result:", upper);

    let length = upper.length;
    console.log("Length result:", length);

    return length;
}
promiseBasedCode().then((result) => {
    console.log("Promise-based final result:", result);
});
asyncAwaitEquivalent().then((result) => {
    console.log("Async/await final result:", result);
});

// Exercise 8: Async Functions in Different Contexts
console.log("\n8. Async functions in different contexts:");

class AsyncClass {
    async asyncMethod() {
        console.log("Async method called");
        return await new Promise((resolve) =>
            setTimeout(() => resolve("Async method result"), 500)
        );
    }
    async asyncMethodWithError() {
        try {
            return await new Promise((resolve, reject) =>
                setTimeout(() => reject(new Error("Method error")), 500)
            );
        } catch (error) {
            console.log("Method caught error:", error.message);
            return "Error handled";
        }
    }
}
const asyncArrowFunction = async () => {
    console.log("Async arrow function called");
    return await new Promise((resolve) =>
        setTimeout(() => resolve("Arrow function result"), 500)
    );
};
let asyncObj = new AsyncClass();

asyncObj.asyncMethod().then((result) => {
    console.log("Async method result:", result);
});
asyncObj.asyncMethodWithError().then((result) => {
    console.log("Async method with error result:", result);
});
asyncArrowFunction().then((result) => {
    console.log("Async arrow function result:", result);
});

// Exercise 9: Await with Promise.all()
console.log("\n9. Await with Promise.all():");

async function awaitPromiseAll() {
    console.log("Starting Promise.all() example");
    
    let promises = [
        new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Result 2"), 800)),
        new Promise((resolve) => setTimeout(() => resolve("Result 3"), 600)),
    ];
    let results = await Promise.all(promises);
    console.log("All results:", results);
    
    return results;
}
awaitPromiseAll().then((results) => {
    console.log("Promise.all() completed:", results);
});

// Exercise 10: Await with Promise.race()
console.log("\n10. Await with Promise.race():");

async function awaitPromiseRace() {
    console.log("Starting Promise.race() example");
    
    let promises = [
        new Promise((resolve) => setTimeout(() => resolve("Fast result"), 300)),
        new Promise((resolve) => setTimeout(() => resolve("Slow result"), 1000)),
    ];
    let result = await Promise.race(promises);
    console.log("Race result:", result);
    
    return result;
}
awaitPromiseRace().then((result) => {
    console.log("Promise.race() completed:", result);
});

// Exercise 11: Practical Example: API Calls
console.log("\n11. Practical example: API calls:");

async function fetchUserData(userId) {
    console.log(`Fetching user data for ID: ${userId}`);
    return await new Promise((resolve) =>
        setTimeout(() => resolve({ id: userId, name: "John Doe" }), 700)
    );
}
async function fetchUserPosts(userId) {
    console.log(`Fetching posts for user ID: ${userId}`);
    return await new Promise((resolve) =>
        setTimeout(() => resolve(["Post 1", "Post 2"]), 600)
    );
}
async function fetchUserComments(userId) {
    console.log(`Fetching comments for user ID: ${userId}`);
    return await new Promise((resolve) =>
        setTimeout(() => resolve(["Comment A", "Comment B"]), 500)
    );
}
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
async function parallelApiCalls(userId) {
    try {
        console.log("Starting parallel API calls");
        let start = Date.now();
        
        let [user, posts, comments] = await Promise.all([
            fetchUserData(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId),
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
sequentialApiCalls(1).then((result) => {
    console.log("Sequential API calls completed:", result);
});
parallelApiCalls(1).then((result) => {
    console.log("Parallel API calls completed:", result);
});

// Exercise 12: Best Practices
console.log("\n12. Best practices:");

async function goodAsyncExample() {
    try {
        console.log("Good async/await example");
        
        let [data1, data2] = await Promise.all([
            new Promise((resolve) => setTimeout(() => resolve("Data 1"), 500)),
            new Promise((resolve) => setTimeout(() => resolve("Data 2"), 400)),
        ]);        
        console.log("Data 1:", data1);
        console.log("Data 2:", data2);
        
        let processedData = await new Promise((resolve) =>
            setTimeout(() => resolve(data1 + " + processed"), 600)
        );        
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