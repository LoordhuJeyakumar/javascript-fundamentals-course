// Exercise 1. Basic Error Logger
console.log("\n1. Create Basic Error Logger:");

class ErrorLogger {
    constructor(level = "info", destination = "console") {
        this.levels = ["error", "warn", "info", "debug"];
        this.level = level;
        this.destination = destination;
        this.logs = [];
    }

    shouldLog(level) {
        return this.levels.indexOf(level) <= this.levels.indexOf(this.level);
    }

    formatMessage(level, message) {
        return {
            timestamp: new Date().toISOString(),
            level,
            message
        };
    }

    logMessage(level, message) {
        if (!this.shouldLog(level)) return;

        const log = this.formatMessage(level, message);
        this.logs.push(log);

        if (this.destination === "console") {
            console[level](`[${log.timestamp}] [${level.toUpperCase()}] ${message}`);
        }
    }

    error(msg) { this.logMessage("error", msg); }
    warn(msg) { this.logMessage("warn", msg); }
    info(msg) { this.logMessage("info", msg); }
    debug(msg) { this.logMessage("debug", msg); }
}
let logger = new ErrorLogger("info", "console");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.info("This is an info message");
logger.debug("This debug message will NOT show");

// Exercise 2. Contextual Logger
console.log("\n2. Create Error Logger with Context:");

class ContextualLogger extends ErrorLogger {
    constructor(level, destination) {
        super(level, destination);
        this.context = {};
    }

    addContext(key, value) {
        this.context[key] = value;
    }

    removeContext(key) {
        delete this.context[key];
    }

    formatMessage(level, message) {
        return {
            ...super.formatMessage(level, message),
            context: { ...this.context }
        };
    }
}
let contextualLogger = new ContextualLogger("info", "console");
contextualLogger.addContext("userId", "12345");
contextualLogger.addContext("sessionId", "abc123");
contextualLogger.error("User authentication failed");
contextualLogger.removeContext("sessionId");
contextualLogger.warn("Session expired");

// Exercise 3. Filtered Logger
console.log("\n3. Create Error Logger with Filtering:");

class FilteredLogger extends ContextualLogger {
    constructor(level, destination) {
        super(level, destination);
        this.filters = {};
    }

    addFilter(name, filterFn) {
        this.filters[name] = filterFn;
    }

    removeFilter(name) {
        delete this.filters[name];
    }

    logMessage(level, message) {
        for (let key in this.filters) {
            if (!this.filters[key](level, message, this.context)) {
                return;
            }
        }
        super.logMessage(level, message);
    }
}
let filteredLogger = new FilteredLogger("debug", "console");
filteredLogger.addFilter("level", (level) => level !== "debug");
filteredLogger.addFilter("message", (_, message) => !message.includes("sensitive"));

filteredLogger.error("This error will be logged");
filteredLogger.debug("This debug message will be filtered");
filteredLogger.error("This sensitive error will be filtered");

// Exercise 4. Persistent Logger
console.log("\n4. Create Error Logger with Persistence:");

class PersistentLogger extends FilteredLogger {
    constructor(level, destination, maxLogs = 100) {
        super(level, destination);
        this.storage = [];
        this.maxLogs = maxLogs;
    }

    logMessage(level, message) {
        super.logMessage(level, message);
        const log = this.formatMessage(level, message);
        this.storage.push(log);

        if (this.storage.length > this.maxLogs) {
            this.storage.shift();
        }
    }

    getLogs() {
        return this.storage;
    }

    getLogCount() {
        return this.storage.length;
    }

    clearLogs() {
        this.storage = [];
    }
}
let persistentLogger = new PersistentLogger("info", "console");
persistentLogger.error("Persistent error 1");
persistentLogger.warn("Persistent warning 1");
persistentLogger.error("Persistent error 2");
console.log("Stored logs:", persistentLogger.getLogs());
console.log("Log count:", persistentLogger.getLogCount());

// Exercise 5. Error Monitor
console.log("\n5. Create Error Monitor:");

class ErrorMonitor {
    constructor() {
        this.errors = [];
    }

    recordError(type, message) {
        this.errors.push({ type, message, time: Date.now() });
    }

    getStatistics() {
        return this.errors.reduce((stats, e) => {
            stats[e.type] = (stats[e.type] || 0) + 1;
            return stats;
        }, {});
    }

    getErrorRate() {
        return this.errors.length / Math.max(1, (Date.now() - this.errors[0]?.time || 1));
    }

    getMostCommonError() {
        const stats = this.getStatistics();
        return Object.entries(stats).sort((a, b) => b[1] - a[1])[0];
    }
}
let errorMonitor = new ErrorMonitor();
errorMonitor.recordError("TypeError", "x undefined");
errorMonitor.recordError("ReferenceError", "y undefined");
errorMonitor.recordError("TypeError", "z undefined");
errorMonitor.recordError("SyntaxError", "Unexpected token");
errorMonitor.recordError("TypeError", "a undefined");

console.log("Error statistics:", errorMonitor.getStatistics());
console.log("Error rate:", errorMonitor.getErrorRate());
console.log("Most common error:", errorMonitor.getMostCommonError());

// Exercise 6. Error Alert System
console.log("\n6. Create Error Alert System:");

class ErrorAlertSystem {
    constructor() {
        this.alerts = [];
        this.history = [];
        this.errorCount = 0;
    }

    addAlert(name, conditionFn, channel) {
        this.alerts.push({ name, conditionFn, channel, active: false });
    }

    recordError() {
        this.errorCount++;
        const stats = {
            errorRate: this.errorCount / 10,
            criticalErrors: this.errorCount > 10 ? 1 : 0
        };

        this.alerts.forEach(alert => {
            if (alert.conditionFn(stats) && !alert.active) {
                alert.active = true;
                this.history.push({ alert: alert.name, channel: alert.channel, time: new Date() });
            }
        });
    }

    getAlertHistory() {
        return this.history;
    }

    getActiveAlerts() {
        return this.alerts.filter(a => a.active);
    }
}
let alertSystem = new ErrorAlertSystem();
alertSystem.addAlert("highErrorRate", s => s.errorRate > 0.1, "email");
alertSystem.addAlert("criticalError", s => s.criticalErrors > 0, "sms");

for (let i = 0; i < 15; i++) alertSystem.recordError();

console.log("Alert history:", alertSystem.getAlertHistory());
console.log("Active alerts:", alertSystem.getActiveAlerts());

// Exercise 7. Error Reporting System
console.log("\n7. Create Error Reporting System:");

class ErrorReportingSystem {
    constructor() {
        this.errors = [];
    }

    recordError(type, message, meta) {
        this.errors.push({ type, message, meta });
    }

    generateReport() {
        return this.errors;
    }

    analyzeErrors() {
        return this.errors.reduce((acc, e) => {
            acc[e.type] = (acc[e.type] || 0) + 1;
            return acc;
        }, {});
    }
}
let reportingSystem = new ErrorReportingSystem();
reportingSystem.recordError("TypeError", "x undefined", { line: 10 });
reportingSystem.recordError("ReferenceError", "y undefined", { line: 25 });
reportingSystem.recordError("TypeError", "z undefined", { line: 15 });

console.log("Error report:", reportingSystem.generateReport());
console.log("Error analysis:", reportingSystem.analyzeErrors());

// Exercise 8. Comprehensive Error Management System
console.log("\n8. Create Comprehensive Error Management System:");

class ErrorManagementSystem {
    constructor(config) {
        this.logger = new PersistentLogger(config.logLevel || "info", "console");
        this.monitor = config.enableMonitoring ? new ErrorMonitor() : null;
        this.reporting = config.enableReporting ? new ErrorReportingSystem() : null;
    }

    log(level, message) {
        this.logger[level](message);
    }

    recordError(type, message, meta) {
        this.monitor?.recordError(type, message);
        this.reporting?.recordError(type, message, meta);
        this.logger.error(message);
    }

    getStatus() {
        return {
            logs: this.logger.getLogCount(),
            monitoring: !!this.monitor,
            reporting: !!this.reporting
        };
    }

    getErrorSummary() {
        return this.monitor?.getStatistics();
    }

    getRecentLogs(count = 5) {
        return this.logger.getLogs().slice(-count);
    }
}
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