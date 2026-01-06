// Exercise 5: Error Monitoring and Logging
// Practice with implementing error monitoring and logging systems

console.log("💪 Exercise 5: Error Monitoring and Logging");
console.log("=========================================");

// Exercise 1: Create basic error logger
console.log("\n1. Create Basic Error Logger:");
// TODO: Create a class called ErrorLogger that:
// - Takes log level and output destination as parameters
// - Has methods for different log levels (error, warn, info, debug)
// - Formats error messages with timestamps
// - Stores logs in memory or outputs to console
// Hint: Use different log levels and timestamp formatting

class ErrorLogger {
    // Your code here
}

// Test your logger
let logger = new ErrorLogger("info", "console");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.info("This is an info message");
logger.debug("This is a debug message");

// Exercise 2: Create error logger with context
console.log("\n2. Create Error Logger with Context:");
// TODO: Create a class called ContextualLogger that:
// - Extends ErrorLogger
// - Adds context information to log messages
// - Supports adding and removing context
// - Formats messages with context data
// Hint: Maintain context state and include it in log messages

class ContextualLogger {
    // Your code here
}

// Test your contextual logger
let contextualLogger = new ContextualLogger("info", "console");
contextualLogger.addContext("userId", "12345");
contextualLogger.addContext("sessionId", "abc123");
contextualLogger.error("User authentication failed");
contextualLogger.removeContext("sessionId");
contextualLogger.warn("Session expired");

// Exercise 3: Create error logger with filtering
console.log("\n3. Create Error Logger with Filtering:");
// TODO: Create a class called FilteredLogger that:
// - Extends ContextualLogger
// - Filters logs based on criteria
// - Supports filtering by level, message content, or context
// - Provides methods to add and remove filters
// Hint: Implement filter functions and apply them before logging

class FilteredLogger {
    // Your code here
}

// Test your filtered logger
let filteredLogger = new FilteredLogger("debug", "console");
filteredLogger.addFilter("level", (level) => level !== "debug");
filteredLogger.addFilter("message", (message) => !message.includes("sensitive"));
filteredLogger.error("This error will be logged");
filteredLogger.debug("This debug message will be filtered");
filteredLogger.error("This sensitive error will be filtered");

// Exercise 4: Create error logger with persistence
console.log("\n4. Create Error Logger with Persistence:");
// TODO: Create a class called PersistentLogger that:
// - Extends FilteredLogger
// - Persists logs to storage (simulate with array)
// - Supports log rotation and cleanup
// - Provides methods to retrieve and clear logs
// Hint: Implement log storage and management methods

class PersistentLogger {
    // Your code here
}

// Test your persistent logger
let persistentLogger = new PersistentLogger("info", "console");
persistentLogger.error("Persistent error 1");
persistentLogger.warn("Persistent warning 1");
persistentLogger.error("Persistent error 2");
console.log("Stored logs:", persistentLogger.getLogs());
console.log("Log count:", persistentLogger.getLogCount());

// Exercise 5: Create error monitor
console.log("\n5. Create Error Monitor:");
// TODO: Create a class called ErrorMonitor that:
// - Monitors error rates and patterns
// - Tracks error statistics
// - Provides alerts for error thresholds
// - Supports error analysis and reporting
// Hint: Implement error tracking and analysis methods

class ErrorMonitor {
    // Your code here
}

// Test your error monitor
let errorMonitor = new ErrorMonitor();
errorMonitor.recordError("TypeError", "Cannot read property 'x' of undefined");
errorMonitor.recordError("ReferenceError", "Variable 'y' is not defined");
errorMonitor.recordError("TypeError", "Cannot read property 'z' of undefined");
errorMonitor.recordError("SyntaxError", "Unexpected token '}'");
errorMonitor.recordError("TypeError", "Cannot read property 'a' of undefined");

console.log("Error statistics:", errorMonitor.getStatistics());
console.log("Error rate:", errorMonitor.getErrorRate());
console.log("Most common error:", errorMonitor.getMostCommonError());

// Exercise 6: Create error alert system
console.log("\n6. Create Error Alert System:");
// TODO: Create a class called ErrorAlertSystem that:
// - Monitors error conditions
// - Sends alerts when thresholds are exceeded
// - Supports different alert types and channels
// - Provides alert history and management
// Hint: Implement alert conditions and notification methods

class ErrorAlertSystem {
    // Your code here
}

// Test your alert system
let alertSystem = new ErrorAlertSystem();
alertSystem.addAlert("highErrorRate", (stats) => stats.errorRate > 0.1, "email");
alertSystem.addAlert("criticalError", (stats) => stats.criticalErrors > 0, "sms");

// Simulate error monitoring
for (let i = 0; i < 15; i++) {
    alertSystem.recordError("Error", "Test error");
}

console.log("Alert history:", alertSystem.getAlertHistory());
console.log("Active alerts:", alertSystem.getActiveAlerts());

// Exercise 7: Create error reporting system
console.log("\n7. Create Error Reporting System:");
// TODO: Create a class called ErrorReportingSystem that:
// - Collects error information
// - Generates error reports
// - Supports different report formats
// - Provides error analysis and insights
// Hint: Implement report generation and analysis methods

class ErrorReportingSystem {
    // Your code here
}

// Test your reporting system
let reportingSystem = new ErrorReportingSystem();
reportingSystem.recordError("TypeError", "Cannot read property 'x' of undefined", { line: 10, file: "app.js" });
reportingSystem.recordError("ReferenceError", "Variable 'y' is not defined", { line: 25, file: "app.js" });
reportingSystem.recordError("TypeError", "Cannot read property 'z' of undefined", { line: 15, file: "app.js" });

console.log("Error report:", reportingSystem.generateReport());
console.log("Error analysis:", reportingSystem.analyzeErrors());

// Exercise 8: Create comprehensive error management system
console.log("\n8. Create Comprehensive Error Management System:");
// TODO: Create a class called ErrorManagementSystem that:
// - Combines logging, monitoring, alerting, and reporting
// - Provides a unified interface for error management
// - Supports configuration and customization
// - Integrates all error management features
// Hint: Combine all previous classes into a comprehensive system

class ErrorManagementSystem {
    // Your code here
}

// Test your comprehensive system
let errorSystem = new ErrorManagementSystem({
    logLevel: "info",
    enableMonitoring: true,
    enableAlerts: true,
    enableReporting: true
});

errorSystem.log("info", "Application started");
errorSystem.recordError("TypeError", "Test error", { context: "test" });
errorSystem.log("error", "Critical error occurred");
errorSystem.recordError("ReferenceError", "Another test error", { context: "test" });

console.log("System status:", errorSystem.getStatus());
console.log("Error summary:", errorSystem.getErrorSummary());
console.log("Recent logs:", errorSystem.getRecentLogs(5));

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced error monitoring and logging.");
console.log("Key concepts practiced:");
console.log("- Creating basic error loggers");
console.log("- Adding context to error logs");
console.log("- Implementing log filtering");
console.log("- Adding log persistence");
console.log("- Creating error monitoring systems");
console.log("- Implementing error alert systems");
console.log("- Creating error reporting systems");
console.log("- Building comprehensive error management");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Production Error Handling");
console.log("4. Ask questions if you need help");
