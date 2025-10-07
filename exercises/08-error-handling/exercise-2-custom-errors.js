// Exercise 2: Custom Error Classes
// Practice with creating and using custom error classes

console.log("💪 Exercise 2: Custom Error Classes");
console.log("=================================");

// Exercise 1: Create basic custom error class
console.log("\n1. Create Basic Custom Error Class:");
// TODO: Create a class called ValidationError that:
// - Extends the built-in Error class
// - Takes a message and field parameter
// - Sets the name property to "ValidationError"
// - Includes the field in the error message
// Hint: Use extends Error and call super()

class ValidationError {
    // Your code here
}

// Test your class
try {
    throw new ValidationError("Invalid email format", "email");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error field:", error.field);
}

// Exercise 2: Create error class with additional properties
console.log("\n2. Create Error Class with Additional Properties:");
// TODO: Create a class called NetworkError that:
// - Extends Error
// - Takes message, statusCode, and url parameters
// - Sets the name to "NetworkError"
// - Includes statusCode and url in the error message
// Hint: Add custom properties and format the message

class NetworkError {
    // Your code here
}

// Test your class
try {
    throw new NetworkError("Request failed", 404, "https://api.example.com/users");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Status code:", error.statusCode);
    console.log("URL:", error.url);
}

// Exercise 3: Create error class with error codes
console.log("\n3. Create Error Class with Error Codes:");
// TODO: Create a class called DatabaseError that:
// - Extends Error
// - Takes message, code, and operation parameters
// - Sets the name to "DatabaseError"
// - Includes error code and operation in the message
// Hint: Use error codes like "CONNECTION_FAILED", "QUERY_ERROR", etc.

class DatabaseError {
    // Your code here
}

// Test your class
try {
    throw new DatabaseError("Connection timeout", "CONNECTION_FAILED", "SELECT");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error code:", error.code);
    console.log("Operation:", error.operation);
}

// Exercise 4: Create error class with stack trace customization
console.log("\n4. Create Error Class with Stack Trace Customization:");
// TODO: Create a class called BusinessLogicError that:
// - Extends Error
// - Takes message, context, and severity parameters
// - Sets the name to "BusinessLogicError"
// - Captures stack trace properly
// - Includes context and severity in the message
// Hint: Use Error.captureStackTrace() if available

class BusinessLogicError {
    // Your code here
}

// Test your class
try {
    throw new BusinessLogicError("Insufficient funds", { accountId: 123, balance: 50 }, "HIGH");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Context:", error.context);
    console.log("Severity:", error.severity);
    console.log("Stack trace available:", !!error.stack);
}

// Exercise 5: Create error class with serialization
console.log("\n5. Create Error Class with Serialization:");
// TODO: Create a class called APIError that:
// - Extends Error
// - Takes message, statusCode, response, and timestamp parameters
// - Sets the name to "APIError"
// - Includes a toJSON method for serialization
// - Includes a fromJSON static method for deserialization
// Hint: Implement toJSON() and static fromJSON() methods

class APIError {
    // Your code here
}

// Test your class
try {
    const apiError = new APIError("Rate limit exceeded", 429, { limit: 100, remaining: 0 });
    console.log("Original error:", apiError.message);
    
    // Serialize
    const serialized = JSON.stringify(apiError);
    console.log("Serialized:", serialized);
    
    // Deserialize
    const deserialized = APIError.fromJSON(serialized);
    console.log("Deserialized error:", deserialized.message);
    console.log("Deserialized status:", deserialized.statusCode);
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 6: Create error class hierarchy
console.log("\n6. Create Error Class Hierarchy:");
// TODO: Create a base class called ApplicationError and subclasses:
// - ApplicationError (base class)
// - ValidationError extends ApplicationError
// - NetworkError extends ApplicationError
// - DatabaseError extends ApplicationError
// - Each should have appropriate properties and methods
// Hint: Create a proper inheritance hierarchy

class ApplicationError {
    // Your code here
}

class ValidationError extends ApplicationError {
    // Your code here
}

class NetworkError extends ApplicationError {
    // Your code here
}

class DatabaseError extends ApplicationError {
    // Your code here
}

// Test the hierarchy
try {
    throw new ValidationError("Invalid input", "username");
} catch (error) {
    console.log("ValidationError - Name:", error.name);
    console.log("ValidationError - Message:", error.message);
    console.log("Is ApplicationError:", error instanceof ApplicationError);
}

try {
    throw new NetworkError("Connection failed", 500, "https://api.example.com");
} catch (error) {
    console.log("NetworkError - Name:", error.name);
    console.log("NetworkError - Message:", error.message);
    console.log("Is ApplicationError:", error instanceof ApplicationError);
}

// Exercise 7: Create error class with error recovery
console.log("\n7. Create Error Class with Error Recovery:");
// TODO: Create a class called RecoverableError that:
// - Extends Error
// - Takes message, recoveryAction, and retryCount parameters
// - Sets the name to "RecoverableError"
// - Includes a recover() method that executes the recovery action
// - Includes a canRetry() method that checks if retry is possible
// Hint: Implement recovery logic and retry mechanisms

class RecoverableError {
    // Your code here
}

// Test your class
try {
    const recoverableError = new RecoverableError(
        "Temporary network issue",
        () => console.log("Retrying connection..."),
        3
    );
    
    console.log("Can retry:", recoverableError.canRetry());
    console.log("Recovery action:", typeof recoverableError.recoveryAction);
    
    // Simulate recovery
    recoverableError.recover();
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 8: Create error class with error aggregation
console.log("\n8. Create Error Class with Error Aggregation:");
// TODO: Create a class called AggregateError that:
// - Extends Error
// - Takes message and errors array parameters
// - Sets the name to "AggregateError"
// - Includes methods to add errors, get error count, and get all errors
// - Formats the message to include error count
// Hint: Implement error collection and aggregation methods

class AggregateError {
    // Your code here
}

// Test your class
try {
    const aggregateError = new AggregateError("Multiple validation errors");
    
    aggregateError.addError(new ValidationError("Invalid email", "email"));
    aggregateError.addError(new ValidationError("Password too short", "password"));
    aggregateError.addError(new ValidationError("Username required", "username"));
    
    console.log("Error count:", aggregateError.getErrorCount());
    console.log("All errors:", aggregateError.getAllErrors().length);
    console.log("Message:", aggregateError.message);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Great job! You've practiced custom error classes.");
console.log("Key concepts practiced:");
console.log("- Creating custom error classes");
console.log("- Extending built-in Error class");
console.log("- Adding custom properties to errors");
console.log("- Implementing error serialization");
console.log("- Creating error class hierarchies");
console.log("- Implementing error recovery mechanisms");
console.log("- Creating error aggregation systems");
console.log("- Customizing error messages and stack traces");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: Async Error Handling");
console.log("4. Ask questions if you need help");
