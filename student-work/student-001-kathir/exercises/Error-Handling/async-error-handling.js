// Exercise 1: Handle errors in async functions
console.log("\n1. Handle Errors in Async Functions:");

async function asyncOperation(shouldFail = false) {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    reject(new Error("Async operation failed"));
                } else {
                    resolve("Async operation succeeded");
                }
            }, 300);
        });

        return "Operation success!";
    } catch (error) {
        throw error;
    }
}
console.log("Testing async operation with success:");
asyncOperation(false)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));

console.log("Testing async operation with failure:");
asyncOperation(true)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));

// Exercise 2: Handle errors in Promise chains
console.log("\n2. Handle Errors in Promise Chains:");

async function promiseChain(operations) {
    const results = [];

    for (const op of operations) {
        try {
            const result = await op();
            results.push({ status: "fulfilled", value: result });
        } catch (err) {
            results.push({ status: "rejected", reason: err.message });
        }
    }

    return results;
}
let operations = [
    () => Promise.resolve("Operation 1 success"),
    () => Promise.reject(new Error("Operation 2 failed")),
    () => Promise.resolve("Operation 3 success"),
    () => Promise.reject(new Error("Operation 4 failed"))
];
console.log("Testing promise chain:");
promiseChain(operations)
    .then(results => console.log("Chain results:", results));

// Exercise 3: Handle errors in parallel async operations
console.log("\n3. Handle Errors in Parallel Async Operations:");

function parallelAsyncOperations(operations) {
    return Promise.allSettled(operations.map(op => op()))
        .then(results => ({
            successes: results.filter(r => r.status === "fulfilled").map(r => r.value),
            errors: results.filter(r => r.status === "rejected").map(r => r.reason.message)
        }));
}
let parallelOps = [
    () => new Promise(resolve => setTimeout(() => resolve("Parallel 1"), 100)),
    () => new Promise((resolve, reject) => setTimeout(() => reject(new Error("Parallel 2 failed")), 200)),
    () => new Promise(resolve => setTimeout(() => resolve("Parallel 3"), 150)),
    () => new Promise((resolve, reject) => setTimeout(() => reject(new Error("Parallel 4 failed")), 50))
];
console.log("Testing parallel async operations:");
parallelAsyncOperations(parallelOps)
    .then(results => console.log("Parallel results:", results));

// Exercise 4: Handle errors in async generators
console.log("\n4. Handle Errors in Async Generators:");

async function* asyncGenerator(values) {
    for (const val of values) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));

            if (val === "error") {
                throw new Error("Generator encountered an error");
            }

            yield val;

        } catch (err) {
            console.error("Generator handled error:", err.message);
            throw err;
        }
    }
}
let values = ["value1", "error", "value2", "value3"];
console.log("Testing async generator:");

(async () => {
    try {
        for await (const value of asyncGenerator(values)) {
            console.log("Generated value:", value);
        }
    } catch (error) {
        console.log("Generator error:", error.message);
    }
})();

// Exercise 5: Handle errors in async iterators
console.log("\n5. Handle Errors in Async Iterators:");

function createAsyncIterator(operations) {
    let index = 0;

    return {
        async *[Symbol.asyncIterator]() {
            while (index < operations.length) {
                const op = operations[index++];
                try {
                    const value = await op();
                    yield { value };
                } catch (error) {
                    yield { error };
                }
            }
        }
    };
}

let iteratorOps = [
    () => Promise.resolve("Iterator 1"),
    () => Promise.reject(new Error("Iterator 2 failed")),
    () => Promise.resolve("Iterator 3"),
    () => Promise.reject(new Error("Iterator 4 failed"))
];
console.log("Testing async iterator:");
(async () => {
    const iterator = createAsyncIterator(iteratorOps);

    for await (const result of iterator) {
        if (result.error) {
            console.log("Iterator error:", result.error.message);
        } else {
            console.log("Iterator value:", result.value);
        }
    }
})();

// Exercise 6: Handle errors in async event handlers
console.log("\n6. Handle Errors in Async Event Handlers:");

function createAsyncEventHandler(eventName, asyncHandler) {
    return async (event) => {
        try {
            return await asyncHandler(event);
        } catch (err) {
            console.error(`Error in event '${eventName}':`, err.message);
            return "Recovered from error";
        }
    };
}
let asyncHandler = async (event) => {
    console.log("Handling event:", event.type);
    if (event.type === "error") {
        throw new Error("Event handler error");
    }
    return "Event handled successfully";
};
let errorHandler = createAsyncEventHandler("test", asyncHandler);

errorHandler({ type: "success" })
    .then(result => console.log("Handler result:", result));

errorHandler({ type: "error" })
    .then(result => console.log("Handler result:", result));

// Exercise 7: Handle errors in async middleware
console.log("\n7. Handle Errors in Async Middleware:");

function createAsyncMiddleware(asyncMiddleware) {
    return async (req, res, next) => {
        try {
            await asyncMiddleware(req, res, next);
        } catch (err) {
            console.error("Middleware error:", err.message);
            req.error = err.message;
            next();
        }
    };
}
let asyncMiddleware = async (req, res, next) => {
    console.log("Processing request:", req.path);
    if (req.path === "/error") {
        throw new Error("Middleware error");
    }
    req.processed = true;
    next();
};

let errorHandlingMiddleware = createAsyncMiddleware(asyncMiddleware);

let req1 = { path: "/success" };
let req2 = { path: "/error" };

errorHandlingMiddleware(req1, {}, () => console.log("Request 1 processed:", req1));
errorHandlingMiddleware(req2, {}, () => console.log("Request 2 processed:", req2));

// Exercise 8: Handle errors in async data processing
console.log("\n8. Handle Errors in Async Data Processing:");

function processAsyncData(data, asyncProcessor) {
    return Promise.allSettled(data.map(item => asyncProcessor(item)))
        .then(results => {
            return {
                successes: results
                    .filter(r => r.status === "fulfilled")
                    .map(r => r.value),
                errors: results
                    .filter(r => r.status === "rejected")
                    .map(r => r.reason.message)
            };
        });
}
let testData = [
    { id: 1, value: "valid" },
    { id: 2, value: "error" },
    { id: 3, value: "valid" },
    { id: 4, value: "error" }
];
let asyncProcessor = async (item) => {
    if (item.value === "error") {
        throw new Error(`Processing error for item ${item.id}`);
    }
    return { ...item, processed: true };
};
console.log("Testing async data processing:");
processAsyncData(testData, asyncProcessor)
    .then(results => console.log("Processing results:", results));