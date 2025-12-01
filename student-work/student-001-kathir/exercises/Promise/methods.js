// Exercise 1: .then() Method
console.log("\n1. .then() method:");

let thenPromise = Promise.resolve(10);

thenPromise
    .then((value) => {
        console.log("Original value:", value);
        return value * 2;
    })
    .then((value) => {
        console.log("Doubled value:", value);
    });

// Exercise 2: .catch() Method
console.log("\n2. .catch() method:");

let catchPromise = Promise.reject(new Error("Something went wrong"));

catchPromise.catch((error) => {
    console.log("Caught error:", error.message);
});

// Exercise 3: .finally() Method
console.log("\n3. .finally() method:");

let finallyPromise = Promise.resolve("Success");

finallyPromise
    .then((result) => {
        console.log("Success result:", result);
    })
    .finally(() => {
        console.log("Finally executed");
    });

// Exercise 4: Promise Chaining
console.log("\n4. Promise chaining:");
let chainPromise = Promise.resolve(5);

chainPromise
    .then((value) => {
        console.log("Step 1:", value);
        return value + 5;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value * 2;
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value - 3;
    })
    .then((value) => {
        console.log("Final result:", value);
    });

// Exercise 5: Error Handling in Chains
console.log("\n5. Error handling in chains:");

let errorChainPromise = Promise.resolve(10);

errorChainPromise
    .then((value) => {
        console.log("Step 1:", value);
        if (value > 5) throw new Error("Value too large");
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 5;
    })
    .catch((error) => {
        console.log("Error caught:", error.message);
        return 0;
    })
    .then((value) => {
        console.log("After error handling:", value);
    });

// Exercise 6: Promise with Different Return Types
console.log("\n6. Promise with different return types:");

let typePromise = Promise.resolve("Hello");

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

// Exercise 7: Promise with Async Operations
console.log("\n7. Promise with async operations:");

function simulateAsyncOperation(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} completed`), delay);
    });
}
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

// Exercise 8: Promise Rejection Handling
console.log("\n8. Promise rejection handling:");

let rejectPromise = Promise.reject(new Error("Operation failed"));

rejectPromise
    .catch((error) => {
        console.log("Rejection handled:", error.message);
    });
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

function conditionalPromise(condition) {
    return new Promise((resolve, reject) => {
        if (condition) resolve("Condition was true!");
        else reject(new Error("Condition was false"));
    });
}
conditionalPromise(true)
    .then((result) => console.log("True condition result:", result))
    .catch((error) => console.log("True condition error:", error.message));

conditionalPromise(false)
    .then((result) => console.log("False condition result:", result))
    .catch((error) => console.log("False condition error:", error.message));

// Exercise 10: Promise Calculator with Methods
console.log("\n10. Promise calculator with methods:");

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
            if (b === 0) return reject(new Error("Cannot divide by zero"));
            const result = a / b;
            this.history.push(`Divided ${a} / ${b} = ${result}`);
            resolve(result);
        });
    }
    getHistory() {
        return this.history;
    }
    clearHistory() {
        this.history = [];
    }
}
let calc = new PromiseCalculator();

calc.add(5, 3).then((result) => console.log("5 + 3 =", result));
calc.subtract(10, 4).then((result) => console.log("10 - 4 =", result));
calc.multiply(6, 7).then((result) => console.log("6 * 7 =", result));
calc.divide(15, 3).then((result) => console.log("15 / 3 =", result));
calc.divide(10, 0).catch((error) => console.log("10 / 0 error:", error.message));

// Exercise 11: Promise Method Chaining
console.log("\n11. Promise method chaining:");

let arrayPromise = Promise.resolve([1, 2, 3, 4, 5]);

arrayPromise
    .then((numbers) => {
        console.log("Original array:", numbers);
        return numbers.filter((n) => n % 2 === 0);
    })
    .then((evenNumbers) => {
        console.log("Even numbers:", evenNumbers);
        return evenNumbers.map((n) => n * n);
    })
    .then((squaredNumbers) => {
        console.log("Squared numbers:", squaredNumbers);
        return squaredNumbers.reduce((sum, n) => sum + n, 0);
    })
    .then((sum) => {
        console.log("Sum of squared even numbers:", sum);
    });

// Exercise 12: Promise Error Recovery
console.log("\n12. Promise error recovery:");

function riskyOperation(success) {
    return new Promise((resolve, reject) => {
        if (success) resolve("Operation succeeded!");
        else reject(new Error("Operation failed"));
    });
}
riskyOperation(false)
    .catch((error) => {
        console.log("Error occurred:", error.message);
        return "Error recovered";
    })
    .then((result) => {
        console.log("After error recovery:", result);
    });