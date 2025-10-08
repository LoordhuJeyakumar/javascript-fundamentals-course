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