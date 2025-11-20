// Exercise 1: Create Basic Custom Error Class
console.log("\n1. Create Basic Custom Error Class:");

class ValidationError1 extends Error {
    constructor(message, field) {
        super(`${message} (Field: ${field})`);
        this.name = "ValidationError";
        this.field = field;
    }
}
try {
    throw new ValidationError1("Invalid email format", "email");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error field:", error.field);
}


// Exercise 2: Error Class with Additional Properties
console.log("\n2. Create Error Class with Additional Properties:");

class NetworkError1 extends Error {
    constructor(message, statusCode, url) {
        super(`${message} (Status: ${statusCode}, URL: ${url})`);
        this.name = "NetworkError";
        this.statusCode = statusCode;
        this.url = url;
    }
}
try {
    throw new NetworkError1("Request failed", 404, "https://api.example.com/users");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Status code:", error.statusCode);
    console.log("URL:", error.url);
}

// Exercise 3: Error Class with Error Codes
console.log("\n3. Create Error Class with Error Codes:");

class DatabaseError1 extends Error {
    constructor(message, code, operation) {
        super(`${message} (Code: ${code}, Operation: ${operation})`);
        this.name = "DatabaseError";
        this.code = code;
        this.operation = operation;
    }
}
try {
    throw new DatabaseError1("Connection timeout", "CONNECTION_FAILED", "SELECT");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error code:", error.code);
    console.log("Operation:", error.operation);
}

// Exercise 4: Custom Stack Trace
console.log("\n4. Create Error Class with Stack Trace Customization:");

class BusinessLogicError extends Error {
    constructor(message, context, severity) {
        super(`${message} (Severity: ${severity})`);
        this.name = "BusinessLogicError";
        this.context = context;
        this.severity = severity;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BusinessLogicError);
        }
    }
}
try {
    throw new BusinessLogicError("Insufficient funds", { accountId: 123, balance: 50 }, "HIGH");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Context:", error.context);
    console.log("Severity:", error.severity);
    console.log("Stack trace available:", !!error.stack);
}

// Exercise 5: Error with Serialization
console.log("\n5. Create Error Class with Serialization:");

class APIError extends Error {
    constructor(message, statusCode, response, timestamp = Date.now()) {
        super(`${message} (Status: ${statusCode})`);
        this.name = "APIError";
        this.statusCode = statusCode;
        this.response = response;
        this.timestamp = timestamp;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
            response: this.response,
            timestamp: this.timestamp
        };
    }
    static fromJSON(jsonString) {
        const obj = JSON.parse(jsonString);
        return new APIError(obj.message, obj.statusCode, obj.response, obj.timestamp);
    }
}
try {
    const apiError = new APIError("Rate limit exceeded", 429, { limit: 100, remaining: 0 });
    console.log("Original error:", apiError.message);

    const serialized = JSON.stringify(apiError);
    console.log("Serialized:", serialized);

    const deserialized = APIError.fromJSON(serialized);
    console.log("Deserialized error:", deserialized.message);
    console.log("Deserialized status:", deserialized.statusCode);
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 6: Error Class Hierarchy
console.log("\n6. Create Error Class Hierarchy:");

class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class ValidationError2 extends ApplicationError {
    constructor(message, field) {
        super(`${message} (Field: ${field})`);
        this.field = field;
    }
}
class NetworkError2 extends ApplicationError {
    constructor(message, statusCode, url) {
        super(`${message} (Status: ${statusCode}, URL: ${url})`);
        this.statusCode = statusCode;
        this.url = url;
    }
}
class DatabaseError2 extends ApplicationError {
    constructor(message, code, operation) {
        super(`${message} (Code: ${code}, Operation: ${operation})`);
        this.code = code;
        this.operation = operation;
    }
}
try {
    throw new ValidationError2("Invalid input", "username");
} catch (error) {
    console.log("ValidationError - Name:", error.name);
    console.log("ValidationError - Message:", error.message);
    console.log("Is ApplicationError:", error instanceof ApplicationError);
}
try {
    throw new NetworkError2("Connection failed", 500, "https://api.example.com");
} catch (error) {
    console.log("NetworkError - Name:", error.name);
    console.log("NetworkError - Message:", error.message);
    console.log("Is ApplicationError:", error instanceof ApplicationError);
}

// Exercise 7: Error with Recovery
console.log("\n7. Create Error Class with Error Recovery:");

class RecoverableError extends Error {
    constructor(message, recoveryAction, retryCount) {
        super(message);
        this.name = "RecoverableError";
        this.recoveryAction = recoveryAction;
        this.retryCount = retryCount;
    }
    canRetry() {
        return this.retryCount > 0;
    }
    recover() {
        if (!this.canRetry()) {
            console.log("No retries left.");
            return;
        }
        this.retryCount--;
        this.recoveryAction();
    }
}
try {
    const recoverableError = new RecoverableError(
        "Temporary network issue",
        () => console.log("Retrying connection..."),
        3
    );
    console.log("Can retry:", recoverableError.canRetry());
    recoverableError.recover();
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 8: Error Aggregation
console.log("\n8. Create Error Class with Error Aggregation:");

class AggregateError2 extends Error {
    constructor(message, errors = []) {
        super(`${message} (${errors.length} errors)`);
        this.name = "AggregateError";
        this.errors = errors;
    }
    addError(error) {
        this.errors.push(error);
        this.message = `${this.message.split("(")[0]}(${this.errors.length} errors)`;
    }
    getErrorCount() {
        return this.errors.length;
    }
    getAllErrors() {
        return this.errors;
    }
}
try {
    const aggregateError = new AggregateError2("Multiple validation errors");

    aggregateError.addError(new ValidationError1("Invalid email", "email"));
    aggregateError.addError(new ValidationError1("Password too short", "password"));
    aggregateError.addError(new ValidationError1("Username required", "username"));

    console.log("Error count:", aggregateError.getErrorCount());
    console.log("All errors:", aggregateError.getAllErrors().length);
    console.log("Message:", aggregateError.message);
} catch (error) {
    console.log("Error:", error.message);
}