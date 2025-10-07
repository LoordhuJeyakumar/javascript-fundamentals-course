// Lesson 4: Error Handling
// This file teaches error handling in Promises and async/await

console.log("⚡ Welcome to Promises Lesson 4: Error Handling!");
console.log("===============================================");

// 1. Promise Error Handling
console.log("\n📚 1. Promise Error Handling");
console.log("---------------------------");

console.log("Error handling in Promises is crucial for robust applications");
console.log("Promises can be rejected, and errors can occur during execution");

// Basic error handling
let errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong!"));
});

errorPromise
    .then((result) => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log("Caught error:", error.message);
    });

// 2. Error Propagation in Chains
console.log("\n📚 2. Error Propagation in Chains");
console.log("--------------------------------");

// Error propagation example
function createErrorChain() {
    return new Promise((resolve) => {
        resolve(10);
    })
    .then((value) => {
        console.log("Step 1:", value);
        if (value > 5) {
            throw new Error("Value too large in step 1");
        }
        return value * 2;
    })
    .then((value) => {
        console.log("Step 2:", value);
        return value + 5;
    })
    .then((value) => {
        console.log("Step 3:", value);
        return value / 2;
    })
    .catch((error) => {
        console.log("Error caught in chain:", error.message);
        return 0; // Default value
    })
    .then((value) => {
        console.log("Final value after error handling:", value);
    });
}

createErrorChain();

// 3. Try/Catch with Async/Await
console.log("\n📚 3. Try/Catch with Async/Await");
console.log("-------------------------------");

// Basic try/catch with async/await
async function basicTryCatch() {
    try {
        console.log("Starting try block");
        
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Async operation failed"));
            }, 500);
        });
        
        console.log("This won't run");
        return result;
        
    } catch (error) {
        console.log("Caught error in try/catch:", error.message);
        return "Error handled";
    } finally {
        console.log("Finally block executed");
    }
}

basicTryCatch().then((result) => {
    console.log("Try/catch result:", result);
});

// 4. Different Types of Errors
console.log("\n📚 4. Different Types of Errors");
console.log("-----------------------------");

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

// Function that can throw different errors
async function simulateDifferentErrors(errorType) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    switch (errorType) {
        case 'validation':
            throw new ValidationError("Invalid input data");
        case 'network':
            throw new NetworkError("Network connection failed");
        case 'database':
            throw new DatabaseError("Database operation failed");
        default:
            throw new Error("Unknown error");
    }
}

// Handle different error types
async function handleDifferentErrors() {
    let errorTypes = ['validation', 'network', 'database', 'unknown'];
    
    for (let errorType of errorTypes) {
        try {
            await simulateDifferentErrors(errorType);
        } catch (error) {
            console.log(`Error type: ${errorType}`);
            console.log(`Error name: ${error.name}`);
            console.log(`Error message: ${error.message}`);
            
            // Handle different error types differently
            if (error instanceof ValidationError) {
                console.log("Handling validation error");
            } else if (error instanceof NetworkError) {
                console.log("Handling network error");
            } else if (error instanceof DatabaseError) {
                console.log("Handling database error");
            } else {
                console.log("Handling unknown error");
            }
            console.log("---");
        }
    }
}

handleDifferentErrors();

// 5. Error Recovery Strategies
console.log("\n📚 5. Error Recovery Strategies");
console.log("------------------------------");

// Retry mechanism
async function retryOperation(operation, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt} of ${maxRetries}`);
            return await operation();
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error.message);
            
            if (attempt === maxRetries) {
                throw new Error(`Operation failed after ${maxRetries} attempts`);
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Test retry mechanism
let retryOperationTest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                resolve("Operation succeeded!");
            } else {
                reject(new Error("Operation failed"));
            }
        }, 500);
    });
};

retryOperation(retryOperationTest, 3)
    .then((result) => {
        console.log("Retry operation succeeded:", result);
    })
    .catch((error) => {
        console.log("Retry operation failed:", error.message);
    });

// 6. Fallback Values
console.log("\n📚 6. Fallback Values");
console.log("--------------------");

// Fallback value strategy
async function getDataWithFallback() {
    try {
        // Try primary source
        let data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("Primary data");
                } else {
                    reject(new Error("Primary source failed"));
                }
            }, 500);
        });
        
        return data;
    } catch (error) {
        console.log("Primary source failed:", error.message);
        
        try {
            // Try fallback source
            let fallbackData = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.3) {
                        resolve("Fallback data");
                    } else {
                        reject(new Error("Fallback source failed"));
                    }
                }, 300);
            });
            
            return fallbackData;
        } catch (fallbackError) {
            console.log("Fallback source failed:", fallbackError.message);
            
            // Return default value
            return "Default data";
        }
    }
}

getDataWithFallback().then((result) => {
    console.log("Data with fallback:", result);
});

// 7. Error Logging and Monitoring
console.log("\n📚 7. Error Logging and Monitoring");
console.log("---------------------------------");

// Error logging function
function logError(error, context = {}) {
    console.log("Error logged:", {
        message: error.message,
        name: error.name,
        stack: error.stack,
        context: context,
        timestamp: new Date().toISOString()
    });
}

// Error monitoring function
async function monitoredOperation() {
    try {
        console.log("Starting monitored operation");
        
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("Operation succeeded");
                } else {
                    reject(new Error("Operation failed"));
                }
            }, 500);
        });
        
        console.log("Monitored operation succeeded:", result);
        return result;
        
    } catch (error) {
        logError(error, { operation: "monitoredOperation" });
        throw error;
    }
}

monitoredOperation()
    .then((result) => {
        console.log("Monitored operation completed:", result);
    })
    .catch((error) => {
        console.log("Monitored operation failed:", error.message);
    });

// 8. Promise Error Handling Patterns
console.log("\n📚 8. Promise Error Handling Patterns");
console.log("------------------------------------");

// Pattern 1: Error handling at the end
function pattern1() {
    return new Promise((resolve) => {
        resolve(10);
    })
    .then((value) => {
        if (value > 5) {
            throw new Error("Value too large");
        }
        return value * 2;
    })
    .then((value) => {
        return value + 5;
    })
    .catch((error) => {
        console.log("Pattern 1 - Error caught:", error.message);
        return 0;
    });
}

// Pattern 2: Error handling in the middle
function pattern2() {
    return new Promise((resolve) => {
        resolve(10);
    })
    .then((value) => {
        if (value > 5) {
            throw new Error("Value too large");
        }
        return value * 2;
    })
    .catch((error) => {
        console.log("Pattern 2 - Error caught:", error.message);
        return 5; // Continue with different value
    })
    .then((value) => {
        console.log("Pattern 2 - Continuing with:", value);
        return value + 5;
    });
}

// Pattern 3: Multiple error handlers
function pattern3() {
    return new Promise((resolve) => {
        resolve(10);
    })
    .then((value) => {
        if (value > 5) {
            throw new Error("Value too large");
        }
        return value * 2;
    })
    .catch((error) => {
        console.log("Pattern 3 - First catch:", error.message);
        throw new Error("New error from catch");
    })
    .then((value) => {
        console.log("Pattern 3 - This won't run");
        return value + 5;
    })
    .catch((error) => {
        console.log("Pattern 3 - Second catch:", error.message);
        return 0;
    });
}

// Test patterns
pattern1().then((result) => {
    console.log("Pattern 1 result:", result);
});

pattern2().then((result) => {
    console.log("Pattern 2 result:", result);
});

pattern3().then((result) => {
    console.log("Pattern 3 result:", result);
});

// 9. Async/Await Error Handling Patterns
console.log("\n📚 9. Async/Await Error Handling Patterns");
console.log("----------------------------------------");

// Pattern 1: Single try/catch
async function asyncPattern1() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("Success");
                } else {
                    reject(new Error("Random failure"));
                }
            }, 500);
        });
        
        console.log("Async Pattern 1 - Success:", result);
        return result;
        
    } catch (error) {
        console.log("Async Pattern 1 - Error:", error.message);
        return "Error handled";
    }
}

// Pattern 2: Multiple try/catch blocks
async function asyncPattern2() {
    try {
        let result1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("Result 1");
                } else {
                    reject(new Error("First operation failed"));
                }
            }, 300);
        });
        
        console.log("Async Pattern 2 - Result 1:", result1);
        
        try {
            let result2 = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve("Result 2");
                    } else {
                        reject(new Error("Second operation failed"));
                    }
                }, 200);
            });
            
            console.log("Async Pattern 2 - Result 2:", result2);
            return { result1, result2 };
            
        } catch (error) {
            console.log("Async Pattern 2 - Second operation error:", error.message);
            return { result1, result2: "Error handled" };
        }
        
    } catch (error) {
        console.log("Async Pattern 2 - First operation error:", error.message);
        return { result1: "Error handled", result2: "Not attempted" };
    }
}

// Test async patterns
asyncPattern1().then((result) => {
    console.log("Async Pattern 1 final result:", result);
});

asyncPattern2().then((result) => {
    console.log("Async Pattern 2 final result:", result);
});

// 10. Error Boundaries
console.log("\n📚 10. Error Boundaries");
console.log("----------------------");

// Error boundary function
async function errorBoundary(operation, fallback = "Default value") {
    try {
        return await operation();
    } catch (error) {
        console.log("Error boundary caught:", error.message);
        return fallback;
    }
}

// Test error boundary
let failingOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Operation failed"));
        }, 500);
    });
};

errorBoundary(failingOperation, "Fallback value")
    .then((result) => {
        console.log("Error boundary result:", result);
    });

// 11. Practical Example: API Error Handling
console.log("\n📚 11. Practical Example: API Error Handling");
console.log("--------------------------------------------");

// Simulate API with different error types
async function simulateApiCall(endpoint, shouldFail = false, errorType = "network") {
    console.log(`Calling API endpoint: ${endpoint}`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                switch (errorType) {
                    case "network":
                        reject(new NetworkError("Network connection failed"));
                        break;
                    case "validation":
                        reject(new ValidationError("Invalid request data"));
                        break;
                    case "server":
                        reject(new Error("Server error 500"));
                        break;
                    default:
                        reject(new Error("Unknown error"));
                }
            } else {
                resolve({ endpoint, data: "API response data" });
            }
        }, Math.random() * 1000 + 500);
    });
}

// API error handling wrapper
async function handleApiCall(endpoint, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`API call attempt ${attempt} for ${endpoint}`);
            return await simulateApiCall(endpoint);
        } catch (error) {
            console.log(`API call attempt ${attempt} failed:`, error.message);
            
            if (attempt === retries) {
                // Log error and return fallback
                logError(error, { endpoint, attempt });
                return { endpoint, data: "Fallback data", error: true };
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Test API error handling
handleApiCall("/users", 3)
    .then((result) => {
        console.log("API call result:", result);
    });

// 12. Best Practices
console.log("\n📚 12. Best Practices");
console.log("--------------------");

console.log("Best practices for error handling:");
console.log("1. Always handle errors in Promise chains");
console.log("2. Use try/catch with async/await");
console.log("3. Provide meaningful error messages");
console.log("4. Log errors for debugging");
console.log("5. Implement retry mechanisms for transient errors");
console.log("6. Use fallback values when appropriate");
console.log("7. Don't swallow errors silently");
console.log("8. Use custom error types for different scenarios");
console.log("9. Handle errors at the appropriate level");
console.log("10. Test error scenarios");

// Example of good error handling
async function goodErrorHandling() {
    try {
        console.log("Starting good error handling example");
        
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve("Operation succeeded");
                } else {
                    reject(new Error("Operation failed"));
                }
            }, 500);
        });
        
        console.log("Good error handling - Success:", result);
        return result;
        
    } catch (error) {
        console.log("Good error handling - Error:", error.message);
        logError(error, { function: "goodErrorHandling" });
        return "Error handled gracefully";
    } finally {
        console.log("Good error handling - Cleanup completed");
    }
}

goodErrorHandling().then((result) => {
    console.log("Good error handling final result:", result);
});

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Always handle errors in Promise chains");
console.log("- Use try/catch with async/await");
console.log("- Implement retry mechanisms for transient errors");
console.log("- Use fallback values when appropriate");
console.log("- Log errors for debugging and monitoring");
console.log("- Use custom error types for different scenarios");
console.log("- Don't swallow errors silently");
console.log("- Test error scenarios thoroughly");

console.log("\n📝 Practice Exercises:");
console.log("1. Handle different types of errors");
console.log("2. Implement retry mechanisms");
console.log("3. Create error recovery strategies");
console.log("4. Build error logging systems");
console.log("5. Test error scenarios");
