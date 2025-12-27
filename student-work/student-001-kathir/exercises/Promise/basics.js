// Exercise 1: Create Basic Promises
console.log("\n1. Create basic Promises:");

// TODO: Create a Promise that resolves with "Hello World"
let helloPromise = new Promise((resolve) => {
    resolve("Hello World");
});

// TODO: Create a Promise that rejects with an error "Something went wrong"
let errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"));
});

// TODO: Create a Promise that resolves after 1 second with "Delayed result"
let delayedPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Delayed result"), 1000);
});

console.log("Hello Promise:", helloPromise);
console.log("Error Promise:", errorPromise);
console.log("Delayed Promise:", delayedPromise);

// Exercise 2: Handle Promise Results
console.log("\n2. Handle Promise results:");
helloPromise.then((result) => console.log("Hello Promise result:", result));
errorPromise.catch((error) => console.log("Error Promise error:", error.message));
delayedPromise.then((result) => console.log("Delayed Promise result:", result));

// Exercise 3: Promise States
console.log("\n3. Check Promise states:");

// TODO: Create a Promise that is always pending
let pendingPromise = new Promise(() => {});

// TODO: Create a Promise that resolves immediately
let resolvedPromise = Promise.resolve("Resolved instantly");

// TODO: Create a Promise that rejects immediately
let rejectedPromise = Promise.reject(new Error("Rejected instantly"));

console.log("Pending Promise:", pendingPromise);
console.log("Resolved Promise:", resolvedPromise);
console.log("Rejected Promise:", rejectedPromise);

// Exercise 4: Promises with different data types:
console.log("\n4. Promises with different data types:");

// TODO: Create a Promise that resolves with a number
let numberPromise = Promise.resolve(42);

// TODO: Create a Promise that resolves with an object
let objectPromise = Promise.resolve({ name: "John", age: 30 });

// TODO: Create a Promise that resolves with an array
let arrayPromise = Promise.resolve([1, 2, 3, 4, 5]);

// TODO: Create a Promise that resolves with a boolean
let booleanPromise = Promise.resolve(true);

numberPromise.then((result) => console.log("Number Promise result:", result, typeof result));
objectPromise.then((result) => console.log("Object Promise result:", result, typeof result));
arrayPromise.then((result) => console.log("Array Promise result:", result, typeof result));
booleanPromise.then((result) => console.log("Boolean Promise result:", result, typeof result));

// Exercise 5: Promise Chaining
console.log("\n5. Promise chaining:");

// TODO: Create a Promise that resolves with 5
let chainPromise = Promise.resolve(5);

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

// Exercise 6: Promise Error Handling
console.log("\n6. Promise error handling:");

// TODO: Create a Promise that rejects with "Chain error"
let chainErrorPromise = new Promise((resolve, reject) => {
    reject(new Error("Chain error"));
});
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

function conditionalPromise(shouldSucceed) {
    return new Promise((resolve, reject) => {
        if (shouldSucceed) {
            resolve("Success!");
        } else {
            reject(new Error("Failure!"));
        }
    });
}
conditionalPromise(true)
    .then((result) => console.log("Success case:", result))
    .catch((error) => console.log("Success case error:", error.message));

conditionalPromise(false)
    .then((result) => console.log("Failure case:", result))
    .catch((error) => console.log("Failure case error:", error.message));

// Exercise 8: Promise with Timeout
console.log("\n8. Promise with timeout:");

function timeoutPromise(operation, timeoutMs) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Operation timed out")), timeoutMs);
    });
    return Promise.race([operation, timeout]);
}
let slowOperation = new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation completed"), 2000);
});
timeoutPromise(slowOperation, 1000)
    .then((result) => console.log("Timeout test result:", result))
    .catch((error) => console.log("Timeout test error:", error.message));

// Exercise 9: Promise.all()
console.log("\n9. Promise.all():");

let promiseArray = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];
Promise.all(promiseArray)
    .then((results) => console.log("Promise.all() results:", results))
    .catch((error) => console.log("Promise.all() error:", error.message));

// Exercise 10: Promise Calculator
console.log("\n10. Promise calculator:");

class PromiseCalculator {
    constructor() {
        this.history = [];
    }
    add(a, b) {
        return new Promise((resolve) => {
            const result = a + b;
            this.history.push(`Added ${a} + ${b} = ${result}`);
            resolve(result);
        });
    }
    subtract(a, b) {
        return new Promise((resolve) => {
            const result = a - b;
            this.history.push(`Subtracted ${a} - ${b} = ${result}`);
            resolve(result);
        });
    }
    multiply(a, b) {
        return new Promise((resolve) => {
            const result = a * b;
            this.history.push(`Multiplied ${a} * ${b} = ${result}`);
            resolve(result);
        });
    }
    divide(a, b) {
        return new Promise((resolve, reject) => {
            if (b === 0) {
                return reject(new Error("Cannot divide by zero"));
            }
            const result = a / b;
            this.history.push(`Divided ${a} / ${b} = ${result}`);
            resolve(result);
        });
    }
    getHistory() {
        return this.history;
    }
}
let calc = new PromiseCalculator();
console.log("Promise calculator tests:");
calc.add(5, 3).then((result) => console.log("5 + 3 =", result));
calc.subtract(10, 4).then((result) => console.log("10 - 4 =", result));
calc.multiply(6, 7).then((result) => console.log("6 * 7 =", result));
calc.divide(15, 3).then((result) => console.log("15 / 3 =", result));
calc.divide(10, 0)
    .then((result) => console.log("10 / 0 =", result))
    .catch((error) => console.log("10 / 0 error:", error.message));