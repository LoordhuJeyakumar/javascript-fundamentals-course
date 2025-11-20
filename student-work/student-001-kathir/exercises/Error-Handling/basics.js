// Exercise 1: Create a function that validates email addresses
console.log("\n1. Email Validation Function:");

function validateEmail(email) {
    if (typeof email !== "string") {
        throw new TypeError("Email must be a string");
    }
    if (!email.includes("@")) {
        throw new Error("Email must contain @");
    }
    if (email.length < 5) {
        throw new Error("Email must be at least 5 characters long");
    }
    return true;
}
try {
    console.log("Testing valid email:", validateEmail("test@example.com"));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Testing invalid email:", validateEmail("invalid-email"));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 2: Create a function that safely divides two numbers
console.log("\n2. Safe Division Function:");

function safeDivide(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both values must be numbers");
        }
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}
console.log("10 / 2 =", safeDivide(10, 2));
console.log("10 / 0 =", safeDivide(10, 0));
console.log("10 / 'a' =", safeDivide(10, 'a'));

// Exercise 3: Create a function that safely accesses array elements
console.log("\n3. Safe Array Access Function:");

function safeArrayAccess(arr, index) {
    try {
        if (!Array.isArray(arr)) throw new Error("First argument must be an array");
        if (index < 0 || index >= arr.length) throw new RangeError("Index out of bounds");
        return arr[index];
    } catch (error) {
        console.log("Error:", error.message);
        return undefined;
    }
}
let testArray = [1, 2, 3, 4, 5];
console.log("Array:", testArray);
console.log("Index 2:", safeArrayAccess(testArray, 2));
console.log("Index 10:", safeArrayAccess(testArray, 10));
console.log("Index -1:", safeArrayAccess(testArray, -1));

// Exercise 4: Safe JSON Parse Function
console.log("\n4. Safe JSON Parse Function:");

function safeJSONParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}
console.log("Valid JSON:", safeJSONParse('{"name": "John", "age": 30}'));
console.log("Invalid JSON:", safeJSONParse('{"name": "John", "age": 30'));
console.log("Empty string:", safeJSONParse(''));

// Exercise 5: User Input Validation Function
console.log("\n5. User Input Validation Function:");

function validateUserInput(user) {
    if (typeof user !== "object" || user === null) {
        throw new TypeError("User must be an object");
    }
    if (typeof user.name !== "string" || user.name.trim() === "") {
        throw new Error("Name must be a non-empty string");
    }
    if (typeof user.email !== "string" || !user.email.includes("@") || user.email.length < 5) {
        throw new Error("Invalid email");
    }
    if (typeof user.age !== "number" || user.age < 0 || user.age > 150) {
        throw new RangeError("Age must be a number between 0 and 150");
    }

    return true;
}
let validUser = { name: "John Doe", email: "john@example.com", age: 30 };
let invalidUser = { name: "", email: "invalid", age: -5 };

try {
    console.log("Valid user:", validateUserInput(validUser));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Invalid user:", validateUserInput(invalidUser));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 6: Multiple Error Types Function
console.log("\n6. Multiple Error Types Function:");

function processData(data) {
    if (data === null || data === undefined) {
        throw new ReferenceError("Data cannot be null or undefined");
    }
    if (typeof data !== "object") {
        throw new TypeError("Data must be an object");
    }
    if (Object.keys(data).length > 10) {
        throw new RangeError("Data has too many properties");
    }
    if (!data.hasOwnProperty("id")) {
        throw new Error("Data must have an 'id' property");
    }
    return data;
}
let validData = { id: 1, name: "Test", value: 100 };
let invalidData1 = "not an object";
let invalidData2 = null;
let invalidData3 = { id: 1, prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5, prop6: 6, prop7: 7, prop8: 8, prop9: 9, prop10: 10, prop11: 11 };
let invalidData4 = { name: "Test" };

try {
    console.log("Valid data:", processData(validData));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Invalid data (not object):", processData(invalidData1));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Invalid data (null):", processData(invalidData2));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Invalid data (too many properties):", processData(invalidData3));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Invalid data (no id):", processData(invalidData4));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 7: Finally Block Function
console.log("\n7. Finally Block Function:");

function processFile(filename) {
    try {
        if (!filename) throw new Error("Filename cannot be empty");
        console.log("Processing file:", filename);
        return "File processed successfully";
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("File processing completed");
    }
}
console.log("Processing valid file:");
processFile("document.txt");

console.log("\nProcessing invalid file:");
processFile("");

// Exercise 8: Nested Error Handling Function
console.log("\n8. Nested Error Handling Function:");

function processUserData(userData) {
    try {
        validateUserInput(userData);
        console.log("Processing user data");
        return "User data processed successfully";
    } catch (error) {
        throw new Error("User data validation failed: " + error.message);
    }
}
let validUserData = { name: "Jane Doe", email: "jane@example.com", age: 25 };
let invalidUserData = { name: "", email: "invalid", age: -5 };

try {
    console.log("Processing valid user data:", processUserData(validUserData));
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Processing invalid user data:", processUserData(invalidUserData));
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 9: Error Logging Function
console.log("\n9. Error Logging Function:");

function logError(error, context = {}) {
    const log = {
        name: error.name,
        message: error.message,
        context,
        timestamp: new Date().toISOString(),
        stack: error.stack
    };
    console.log("Error Logged:", log);
    return log;
}
try {
    throw new Error("Test error for logging");
} catch (error) {
    let errorLog = logError(error, { operation: "test", userId: 123 });
    console.log("Error log:", errorLog);
}

// Exercise 10: Robust Calculator Function
console.log("\n10. Robust Calculator Function:");

function robustCalculator(operation, a, b) {
    const validOps = ["add", "subtract", "multiply", "divide"];

    if (!validOps.includes(operation)) {
        return { success: false, error: "Invalid operation" };
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return { success: false, error: "Operands must be numbers" };
    }
    try {
        if (operation === "divide" && b === 0) {
            throw new Error("Cannot divide by zero");
        }
        let result;
        switch (operation) {
            case "add": result = a + b; break;
            case "subtract": result = a - b; break;
            case "multiply": result = a * b; break;
            case "divide": result = a / b; break;
        }
        return { success: true, result, operation };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
console.log("5 + 3 =", robustCalculator('add', 5, 3));
console.log("10 - 4 =", robustCalculator('subtract', 10, 4));
console.log("6 * 7 =", robustCalculator('multiply', 6, 7));
console.log("15 / 3 =", robustCalculator('divide', 15, 3));
console.log("10 / 0 =", robustCalculator('divide', 10, 0));
console.log("Invalid operation:", robustCalculator('power', 2, 3));
console.log("Invalid operands:", robustCalculator('add', 'a', 'b'));