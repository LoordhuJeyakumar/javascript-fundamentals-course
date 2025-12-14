// Exercise 1. Global Error Handler
console.log("\n1. Implement Global Error Handler:");

function setupGlobalErrorHandler(options = {}) {
    const {
        enableLogging = true,
        enableRecovery = false,
        enableReporting = false
    } = options;

    const logError = (error, context) => {
        if (enableLogging) {
            console.error("Global Error:", {
                message: error.message,
                stack: error.stack,
                context,
                time: new Date().toISOString()
            });
        }
        if (enableReporting) {
            console.log("Reporting error to monitoring service...");
        }
    };

    process.on("uncaughtException", (error) => {
        logError(error, "uncaughtException");
        if (!enableRecovery) process.exit(1);
    });

    process.on("unhandledRejection", (reason) => {
        logError(reason instanceof Error ? reason : new Error(String(reason)), "unhandledRejection");
        if (!enableRecovery) process.exit(1);
    });
}
setupGlobalErrorHandler({
    enableLogging: true,
    enableRecovery: true,
    enableReporting: true
});

setTimeout(() => {
    throw new Error("Uncaught exception test");
}, 100);

setTimeout(() => {
    Promise.reject(new Error("Unhandled Promise rejection test"));
}, 200);

// Exercise 2. Async Error Boundary
console.log("\n2. Implement Error Boundary for Async Operations:");

class AsyncErrorBoundary {
    constructor(options = {}) {
        this.enableRecovery = options.enableRecovery ?? false;
        this.enableLogging = options.enableLogging ?? true;
        this.fallbackValue = options.fallbackValue;
    }

    async execute(asyncFn) {
        try {
            return await asyncFn();
        } catch (error) {
            if (this.enableLogging) {
                console.error("Async Boundary Error:", error.message);
            }
            if (this.enableRecovery) {
                return this.fallbackValue;
            }
            throw error;
        }
    }
}
let errorBoundary = new AsyncErrorBoundary({
    enableRecovery: true,
    enableLogging: true,
    fallbackValue: "Fallback result"
});

let asyncOperation = () =>
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Async operation failed")), 100)
    );

errorBoundary.execute(asyncOperation)
    .then(result => console.log("Boundary result:", result))
    .catch(error => console.log("Boundary error:", error.message));

// Exercise 3. Error Handling Middleware
console.log("\n3. Implement Error Handling Middleware:");

function createErrorHandlingMiddleware(options = {}) {
    const {
        enableLogging = true,
        enableRecovery = true,
        fallbackResponse = { error: "Internal Server Error" }
    } = options;

    return (req, res, next) => {
        try {
            next();
        } catch (error) {
            if (enableLogging) {
                console.error("🧱 Middleware Error:", {
                    path: req.path,
                    method: req.method,
                    error: error.message
                });
            }
            if (enableRecovery) {
                res.status = 500;
                res.data = fallbackResponse;
            } else {
                throw error;
            }
        }
    };
}
let errorMiddleware = createErrorHandlingMiddleware({
    enableLogging: true,
    enableRecovery: true,
    fallbackResponse: { error: "Internal server error" }
});

let req = { path: "/test", method: "GET" };
let res = { status: 200, data: null };

errorMiddleware(req, res, () => {
    throw new Error("Route failure");
});
console.log("Response:", res);

// Exercise 4. Data Validation Error Handling
console.log("\n4. Implement Error Handling for Data Validation:");

function validateDataWithErrorHandling(data, schema, options = {}) {
    const { enableRecovery = false, enableLogging = true } = options;

    return new Promise((resolve, reject) => {
        let errors = {};
        let correctedData = { ...data };

        for (let key in schema) {
            const rules = schema[key];
            const value = data[key];

            if (rules.required && (value === undefined || value === null)) {
                errors[key] = "Required field missing";
                continue;
            }

            if (rules.type === "number" && typeof value !== "number") {
                if (enableRecovery && !isNaN(Number(value))) {
                    correctedData[key] = Number(value);
                } else {
                    errors[key] = "Invalid number";
                }
            }

            if (rules.type === "string" && typeof value !== "string") {
                errors[key] = "Invalid string";
            }

            if (rules.pattern && !rules.pattern.test(value)) {
                errors[key] = "Pattern mismatch";
            }
        }

        if (Object.keys(errors).length > 0) {
            if (enableLogging) {
                console.error("📋 Validation Errors:", errors);
            }
            if (enableRecovery) {
                return resolve({ valid: false, correctedData, errors });
            }
            return reject(new Error("Validation failed"));
        }

        resolve({ valid: true, data: correctedData });
    });
}
let testData = {
    name: "John",
    email: "invalid-email",
    age: "not-a-number"
};

let schema = {
    name: { type: "string", required: true },
    email: { type: "string", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    age: { type: "number", required: true }
};

validateDataWithErrorHandling(testData, schema, {
    enableRecovery: true,
    enableLogging: true
})
    .then(result => console.log("Validation result:", result))
    .catch(error => console.log("Validation error:", error.message));

// Exercise 5. External API Error Handling
console.log("\n5. Implement Error Handling for External API Calls:");

async function makeAPICallWithErrorHandling(url, options = {}) {
    const {
        retries = 0,
        timeout = 5000,
        enableLogging = true
    } = options;

    for (let attempt = 1; attempt <= retries + 1; attempt++) {
        try {
            const controller = new AbortController();
            setTimeout(() => controller.abort(), timeout);

            const response = await fetch(url, { signal: controller.signal });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (enableLogging) {
                console.error(`API Error (attempt ${attempt}):`, error.message);
            }
            if (attempt > retries) throw error;
        }
    }
}
makeAPICallWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1", {
    retries: 3,
    enableLogging: true
})
    .then(result => console.log("API call result:", result))
    .catch(error => console.log("API call error:", error.message));

// Exercise 6. File Operation Error Handling
console.log("\n6. Implement Error Handling for File Operations:");

const fs = require("fs/promises");

async function performFileOperationWithErrorHandling(operation, filePath, options = {}) {
    const { enableRecovery = false, enableLogging = true, fallbackContent = "" } = options;

    try {
        if (operation === "read") {
            return await fs.readFile(filePath, "utf8");
        }
        throw new Error("Unsupported operation");
    } catch (error) {
        if (enableLogging) {
            console.error("File Error:", error.message);
        }
        if (enableRecovery) {
            return fallbackContent;
        }
        throw error;
    }
}
performFileOperationWithErrorHandling("read", "nonexistent-file.txt", {
    enableRecovery: true,
    enableLogging: true,
    fallbackContent: "Default content"
})
    .then(result => console.log("File operation result:", result))
    .catch(error => console.log("File operation error:", error.message));

// Exercise 7. Database Operation Error Handling (Mock)
console.log("\n7. Implement Error Handling for Database Operations:");

async function performDatabaseOperationWithErrorHandling(operation, query, options = {}) {
    const { enableRecovery = false, enableLogging = true, enableRollback = false } = options;

    try {
        throw new Error("Database connection failed");
    } catch (error) {
        if (enableLogging) {
            console.error("Database Error:", error.message);
        }
        if (enableRollback) {
            console.log("Rolling back transaction...");
        }
        if (enableRecovery) {
            return { rows: [] };
        }
        throw error;
    }
}
performDatabaseOperationWithErrorHandling("SELECT", "SELECT * FROM users", {
    enableRecovery: true,
    enableLogging: true,
    enableRollback: true
})
    .then(result => console.log("Database operation result:", result))
    .catch(error => console.log("Database operation error:", error.message));

// Exercise 8. Comprehensive Production Error Handler
console.log("\n8. Implement Comprehensive Production Error Handling:");

class ProductionErrorHandler {
    constructor(config = {}) {
        this.config = config;
        this.status = "initialized";

        if (config.enableGlobalHandling) {
            setupGlobalErrorHandler(config);
        }
    }

    getStatus() {
        return this.status;
    }

    getConfiguration() {
        return this.config;
    }
}
let productionHandler = new ProductionErrorHandler({
    enableGlobalHandling: true,
    enableMonitoring: true,
    enableReporting: true
});

console.log("Production error handler initialized");
console.log("Handler status:", productionHandler.getStatus());
console.log("Handler configuration:", productionHandler.getConfiguration());