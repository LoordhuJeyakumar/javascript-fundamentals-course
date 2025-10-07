// Lesson 6: Production Error Handling
// Error handling strategies for production environments

console.log("🎓 Lesson 6: Production Error Handling");
console.log("=====================================");

// 📚 1. Production Error Handling Principles
console.log("\n📚 1. Production Error Handling Principles");
console.log("----------------------------------------");

console.log("Production error handling principles:");
console.log("1. Never expose sensitive information to users");
console.log("2. Always log errors for debugging");
console.log("3. Provide user-friendly error messages");
console.log("4. Implement graceful degradation");
console.log("5. Monitor error rates and patterns");
console.log("6. Have recovery strategies in place");
console.log("7. Test error scenarios thoroughly");

// 📚 2. User-Friendly Error Messages
console.log("\n📚 2. User-Friendly Error Messages");
console.log("---------------------------------");

// Error message mapping
const ERROR_MESSAGES = {
    // Network errors
    'NETWORK_ERROR': 'Unable to connect to the server. Please check your internet connection.',
    'TIMEOUT_ERROR': 'The request is taking too long. Please try again.',
    'SERVER_ERROR': 'The server is temporarily unavailable. Please try again later.',
    
    // Authentication errors
    'AUTH_REQUIRED': 'Please log in to continue.',
    'AUTH_EXPIRED': 'Your session has expired. Please log in again.',
    'AUTH_INVALID': 'Invalid credentials. Please check your username and password.',
    
    // Validation errors
    'VALIDATION_ERROR': 'Please check your input and try again.',
    'REQUIRED_FIELD': 'This field is required.',
    'INVALID_FORMAT': 'Please enter a valid format.',
    
    // Business logic errors
    'INSUFFICIENT_FUNDS': 'You don\'t have enough funds for this transaction.',
    'ITEM_UNAVAILABLE': 'This item is currently unavailable.',
    'QUOTA_EXCEEDED': 'You have exceeded your quota limit.',
    
    // Generic fallback
    'UNKNOWN_ERROR': 'Something went wrong. Please try again or contact support.'
};

// Error message formatter
class ErrorMessageFormatter {
    constructor() {
        this.messages = ERROR_MESSAGES;
    }
    
    getUserMessage(error, context = {}) {
        // Try to get specific error message
        let message = this.messages[error.code] || this.messages[error.name];
        
        // If no specific message, use generic fallback
        if (!message) {
            message = this.messages.UNKNOWN_ERROR;
        }
        
        // Add context if available
        if (context.retryable) {
            message += ' You can try again in a few moments.';
        }
        
        if (context.contactSupport) {
            message += ' If the problem persists, please contact support.';
        }
        
        return message;
    }
    
    getTechnicalMessage(error) {
        return {
            code: error.code || error.name,
            message: error.message,
            timestamp: new Date().toISOString(),
            stack: error.stack
        };
    }
}

const errorFormatter = new ErrorMessageFormatter();

// Example: Handle different error types
function handleUserError(error, context = {}) {
    const userMessage = errorFormatter.getUserMessage(error, context);
    const technicalMessage = errorFormatter.getTechnicalMessage(error);
    
    // Show user-friendly message
    console.log("User message:", userMessage);
    
    // Log technical details (in production, this would go to a logging service)
    console.log("Technical details:", technicalMessage);
    
    return { userMessage, technicalMessage };
}

// Test error handling
try {
    throw { code: 'NETWORK_ERROR', message: 'Connection failed' };
} catch (error) {
    handleUserError(error, { retryable: true });
}

// 📚 3. Error Recovery Strategies
console.log("\n📚 3. Error Recovery Strategies");
console.log("-------------------------------");

// Recovery strategy manager
class ErrorRecoveryManager {
    constructor() {
        this.strategies = new Map();
        this.setupDefaultStrategies();
    }
    
    setupDefaultStrategies() {
        // Network error recovery
        this.strategies.set('NETWORK_ERROR', {
            maxRetries: 3,
            retryDelay: 1000,
            backoffMultiplier: 2,
            fallback: () => this.showOfflineMode()
        });
        
        // Authentication error recovery
        this.strategies.set('AUTH_EXPIRED', {
            maxRetries: 1,
            retryDelay: 0,
            fallback: () => this.redirectToLogin()
        });
        
        // Server error recovery
        this.strategies.set('SERVER_ERROR', {
            maxRetries: 2,
            retryDelay: 5000,
            fallback: () => this.showMaintenanceMode()
        });
    }
    
    async recover(error, context = {}) {
        const strategy = this.strategies.get(error.code || error.name);
        
        if (!strategy) {
            console.log("No recovery strategy found for error:", error.code || error.name);
            return false;
        }
        
        console.log(`Attempting recovery for ${error.code || error.name}`);
        
        // Try retry strategy
        if (strategy.maxRetries > 0) {
            for (let attempt = 1; attempt <= strategy.maxRetries; attempt++) {
                try {
                    console.log(`Retry attempt ${attempt}/${strategy.maxRetries}`);
                    await this.delay(strategy.retryDelay * Math.pow(strategy.backoffMultiplier, attempt - 1));
                    
                    // In a real app, this would retry the original operation
                    const success = await this.retryOperation(context);
                    if (success) {
                        console.log("Recovery successful");
                        return true;
                    }
                } catch (retryError) {
                    console.log(`Retry attempt ${attempt} failed:`, retryError.message);
                }
            }
        }
        
        // If retries failed, use fallback
        if (strategy.fallback) {
            console.log("Using fallback strategy");
            strategy.fallback();
        }
        
        return false;
    }
    
    async retryOperation(context) {
        // Simulate retry operation
        const success = Math.random() > 0.5;
        console.log(`Retry operation ${success ? 'succeeded' : 'failed'}`);
        return success;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    showOfflineMode() {
        console.log("Showing offline mode to user");
    }
    
    redirectToLogin() {
        console.log("Redirecting to login page");
    }
    
    showMaintenanceMode() {
        console.log("Showing maintenance mode message");
    }
}

const recoveryManager = new ErrorRecoveryManager();

// Test recovery strategies
async function testRecovery() {
    const networkError = { code: 'NETWORK_ERROR', message: 'Connection failed' };
    await recoveryManager.recover(networkError, { operation: 'fetchData' });
}

testRecovery();

// 📚 4. Error Monitoring and Alerting
console.log("\n📚 4. Error Monitoring and Alerting");
console.log("----------------------------------");

// Error monitoring service
class ErrorMonitoringService {
    constructor(config = {}) {
        this.config = {
            maxErrors: config.maxErrors || 1000,
            alertThreshold: config.alertThreshold || 10,
            timeWindow: config.timeWindow || 60000, // 1 minute
            ...config
        };
        this.errors = [];
        this.alerts = [];
        this.setupMonitoring();
    }
    
    setupMonitoring() {
        // Monitor error rates
        setInterval(() => {
            this.checkErrorRates();
        }, this.config.timeWindow);
    }
    
    reportError(error, context = {}) {
        const errorReport = {
            id: this.generateId(),
            timestamp: new Date().toISOString(),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            },
            context: context,
            severity: this.calculateSeverity(error, context)
        };
        
        this.errors.push(errorReport);
        
        // Keep only recent errors
        if (this.errors.length > this.config.maxErrors) {
            this.errors.shift();
        }
        
        // Check for immediate alert conditions
        this.checkImmediateAlerts(errorReport);
        
        console.log("Error reported:", errorReport);
    }
    
    calculateSeverity(error, context) {
        // Critical errors
        if (error.name === 'TypeError' && error.message.includes('Cannot read property')) {
            return 'critical';
        }
        
        // High severity errors
        if (error.name === 'ReferenceError' || error.name === 'SyntaxError') {
            return 'high';
        }
        
        // Medium severity errors
        if (error.name === 'NetworkError' || error.name === 'TimeoutError') {
            return 'medium';
        }
        
        // Low severity errors
        return 'low';
    }
    
    checkErrorRates() {
        const now = Date.now();
        const timeWindow = this.config.timeWindow;
        const recentErrors = this.errors.filter(error => 
            now - new Date(error.timestamp).getTime() < timeWindow
        );
        
        if (recentErrors.length >= this.config.alertThreshold) {
            this.triggerAlert('HIGH_ERROR_RATE', {
                errorCount: recentErrors.length,
                timeWindow: timeWindow,
                errors: recentErrors
            });
        }
    }
    
    checkImmediateAlerts(errorReport) {
        // Alert on critical errors
        if (errorReport.severity === 'critical') {
            this.triggerAlert('CRITICAL_ERROR', errorReport);
        }
        
        // Alert on repeated errors
        const similarErrors = this.errors.filter(error => 
            error.error.name === errorReport.error.name &&
            error.error.message === errorReport.error.message
        );
        
        if (similarErrors.length >= 5) {
            this.triggerAlert('REPEATED_ERROR', {
                error: errorReport.error,
                count: similarErrors.length
            });
        }
    }
    
    triggerAlert(type, data) {
        const alert = {
            id: this.generateId(),
            type: type,
            timestamp: new Date().toISOString(),
            data: data
        };
        
        this.alerts.push(alert);
        console.log(`🚨 ALERT: ${type}`, alert);
        
        // In production, this would send to monitoring service
        this.sendAlert(alert);
    }
    
    sendAlert(alert) {
        // In production, this would send to services like:
        // - Slack
        // - PagerDuty
        // - Email
        // - SMS
        console.log("Sending alert to monitoring service:", alert);
    }
    
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    getErrorSummary() {
        const summary = {
            totalErrors: this.errors.length,
            errorsBySeverity: {},
            errorsByName: {},
            recentErrors: this.errors.slice(-10)
        };
        
        this.errors.forEach(error => {
            summary.errorsBySeverity[error.severity] = 
                (summary.errorsBySeverity[error.severity] || 0) + 1;
            summary.errorsByName[error.error.name] = 
                (summary.errorsByName[error.error.name] || 0) + 1;
        });
        
        return summary;
    }
}

const errorMonitor = new ErrorMonitoringService({
    maxErrors: 100,
    alertThreshold: 5,
    timeWindow: 30000
});

// Test error monitoring
setTimeout(() => {
    errorMonitor.reportError(new Error("Test error"), { component: "test" });
}, 1000);

// 📚 5. Error Boundaries in Production
console.log("\n📚 5. Error Boundaries in Production");
console.log("-----------------------------------");

// Production error boundary
class ProductionErrorBoundary {
    constructor() {
        this.errorCount = 0;
        this.maxErrors = 5;
        this.resetTime = 300000; // 5 minutes
        this.lastReset = Date.now();
    }
    
    handleError(error, errorInfo) {
        this.errorCount++;
        
        // Reset error count after time window
        if (Date.now() - this.lastReset > this.resetTime) {
            this.errorCount = 1;
            this.lastReset = Date.now();
        }
        
        // Log error
        console.error("Error boundary caught error:", error, errorInfo);
        
        // Report to monitoring service
        errorMonitor.reportError(error, {
            component: errorInfo.componentName,
            errorBoundary: true
        });
        
        // If too many errors, show maintenance mode
        if (this.errorCount >= this.maxErrors) {
            this.showMaintenanceMode();
            return;
        }
        
        // Show user-friendly error message
        this.showErrorUI(error);
    }
    
    showErrorUI(error) {
        const userMessage = errorFormatter.getUserMessage(error, {
            retryable: true,
            contactSupport: true
        });
        
        console.log("Showing error UI to user:", userMessage);
    }
    
    showMaintenanceMode() {
        console.log("Too many errors detected, showing maintenance mode");
    }
    
    reset() {
        this.errorCount = 0;
        this.lastReset = Date.now();
    }
}

const errorBoundary = new ProductionErrorBoundary();

// 📚 6. Security Considerations
console.log("\n📚 6. Security Considerations");
console.log("----------------------------");

// Secure error handling
class SecureErrorHandler {
    constructor() {
        this.sensitivePatterns = [
            /password/i,
            /token/i,
            /secret/i,
            /key/i,
            /credential/i
        ];
    }
    
    sanitizeError(error) {
        const sanitized = {
            name: error.name,
            message: this.sanitizeMessage(error.message),
            stack: this.sanitizeStack(error.stack),
            timestamp: new Date().toISOString()
        };
        
        return sanitized;
    }
    
    sanitizeMessage(message) {
        let sanitized = message;
        
        this.sensitivePatterns.forEach(pattern => {
            sanitized = sanitized.replace(pattern, '[REDACTED]');
        });
        
        return sanitized;
    }
    
    sanitizeStack(stack) {
        if (!stack) return stack;
        
        let sanitized = stack;
        this.sensitivePatterns.forEach(pattern => {
            sanitized = sanitized.replace(pattern, '[REDACTED]');
        });
        
        return sanitized;
    }
    
    isSensitiveError(error) {
        const message = error.message.toLowerCase();
        return this.sensitivePatterns.some(pattern => pattern.test(message));
    }
}

const secureHandler = new SecureErrorHandler();

// Example: Handle sensitive errors
try {
    throw new Error("Database connection failed with password: secret123");
} catch (error) {
    if (secureHandler.isSensitiveError(error)) {
        console.log("Sensitive error detected, sanitizing...");
        const sanitized = secureHandler.sanitizeError(error);
        console.log("Sanitized error:", sanitized);
    } else {
        console.log("Regular error:", error);
    }
}

// 📚 7. Performance Impact of Error Handling
console.log("\n📚 7. Performance Impact of Error Handling");
console.log("----------------------------------------");

// Performance-aware error handling
class PerformanceAwareErrorHandler {
    constructor() {
        this.errorCount = 0;
        this.lastErrorTime = 0;
        this.throttleDelay = 1000; // 1 second
    }
    
    handleError(error, context = {}) {
        const now = Date.now();
        
        // Throttle error handling to prevent performance impact
        if (now - this.lastErrorTime < this.throttleDelay) {
            console.log("Error handling throttled for performance");
            return;
        }
        
        this.lastErrorTime = now;
        this.errorCount++;
        
        // Log error
        console.log("Handling error:", error.message);
        
        // In production, this would be more sophisticated
        // with proper logging and monitoring
    }
    
    getErrorRate() {
        return this.errorCount;
    }
    
    reset() {
        this.errorCount = 0;
        this.lastErrorTime = 0;
    }
}

const perfAwareHandler = new PerformanceAwareErrorHandler();

// 📚 8. Best Practices for Production
console.log("\n📚 8. Best Practices for Production");
console.log("----------------------------------");

console.log("1. Always sanitize error messages before logging");
console.log("2. Implement error rate limiting and throttling");
console.log("3. Use structured logging with consistent format");
console.log("4. Set up proper monitoring and alerting");
console.log("5. Implement graceful degradation strategies");
console.log("6. Test error scenarios in staging environment");
console.log("7. Have rollback strategies for critical errors");
console.log("8. Monitor error trends and patterns");
console.log("9. Implement user-friendly error messages");
console.log("10. Document error handling procedures");

console.log("\n🎉 Lesson 6 Complete: Production Error Handling");
console.log("You now understand error handling strategies for production environments!");
