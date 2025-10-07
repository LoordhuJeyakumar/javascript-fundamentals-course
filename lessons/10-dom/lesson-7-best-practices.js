// Lesson 7: Best Practices
// DOM manipulation best practices and guidelines

console.log("🎓 Lesson 7: Best Practices");
console.log("==========================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. DOM Manipulation Best Practices
console.log("\n📚 1. DOM Manipulation Best Practices");
console.log("-----------------------------------");

console.log("Key principles for effective DOM manipulation:");
console.log("- Minimize DOM access and manipulation");
console.log("- Use efficient selection methods");
console.log("- Batch DOM updates when possible");
console.log("- Handle errors gracefully");
console.log("- Write maintainable and readable code");

// 📚 2. Performance Best Practices
console.log("\n📚 2. Performance Best Practices");
console.log("-----------------------------");

class PerformanceBestPractices {
    constructor() {
        this.elements = new Map();
        this.cache = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'performance-element',
            tagName: 'DIV',
            className: 'performance-box',
            style: { width: '100px', height: '100px' }
        };
        
        this.elements.set('element', element);
    }
    
    // Cache frequently accessed elements
    cacheElement(selector, element) {
        this.cache.set(selector, element);
        console.log(`Cached element: ${selector}`);
    }
    
    getCachedElement(selector) {
        const cached = this.cache.get(selector);
        if (cached) {
            console.log(`Retrieved cached element: ${selector}`);
            return cached;
        }
        console.log(`Element not cached: ${selector}`);
        return null;
    }
    
    // Batch DOM updates
    batchUpdates(updates) {
        console.log('Starting batch DOM updates');
        
        // Disable layout recalculation
        const startTime = performance.now();
        
        updates.forEach(update => {
            update();
        });
        
        // Force layout recalculation
        const endTime = performance.now();
        console.log(`Batch updates completed in ${(endTime - startTime).toFixed(2)}ms`);
    }
    
    // Use DocumentFragment for multiple insertions
    useDocumentFragment(elements) {
        console.log('Using DocumentFragment for efficient DOM manipulation');
        
        const fragment = {
            children: [],
            appendChild: (child) => {
                fragment.children.push(child);
                console.log(`Added ${child.tagName} to fragment`);
            }
        };
        
        elements.forEach(element => {
            fragment.appendChild(element);
        });
        
        console.log(`Fragment contains ${fragment.children.length} elements`);
        return fragment;
    }
    
    // Debounce expensive operations
    debounce(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }
    
    // Throttle frequent operations
    throttle(fn, limit) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

const performanceBestPractices = new PerformanceBestPractices();

// Test performance optimizations
const element = performanceBestPractices.elements.get('element');
performanceBestPractices.cacheElement('#performance-element', element);
performanceBestPractices.getCachedElement('#performance-element');

performanceBestPractices.batchUpdates([
    () => console.log('Update 1'),
    () => console.log('Update 2'),
    () => console.log('Update 3')
]);

performanceBestPractices.useDocumentFragment([
    { tagName: 'DIV', id: 'div1' },
    { tagName: 'SPAN', id: 'span1' },
    { tagName: 'P', id: 'p1' }
]);

// 📚 3. Code Organization Best Practices
console.log("\n📚 3. Code Organization Best Practices");
console.log("-----------------------------------");

class CodeOrganization {
    constructor() {
        this.modules = new Map();
        this.setupMockModules();
    }
    
    setupMockModules() {
        // DOM utility module
        const domUtils = {
            name: 'DOMUtils',
            methods: {
                selectElement: (selector) => {
                    console.log(`Selecting element: ${selector}`);
                    return { id: 'selected-element', tagName: 'DIV' };
                },
                createElement: (tagName, options = {}) => {
                    console.log(`Creating element: ${tagName}`);
                    return { tagName: tagName.toUpperCase(), ...options };
                },
                addClass: (element, className) => {
                    console.log(`Adding class ${className} to ${element.tagName}`);
                },
                removeClass: (element, className) => {
                    console.log(`Removing class ${className} from ${element.tagName}`);
                }
            }
        };
        
        // Event handling module
        const eventHandler = {
            name: 'EventHandler',
            methods: {
                addEventListener: (element, event, handler) => {
                    console.log(`Adding ${event} listener to ${element.tagName}`);
                },
                removeEventListener: (element, event, handler) => {
                    console.log(`Removing ${event} listener from ${element.tagName}`);
                },
                delegate: (parent, selector, event, handler) => {
                    console.log(`Delegating ${event} from ${parent.tagName} to ${selector}`);
                }
            }
        };
        
        // Animation module
        const animationModule = {
            name: 'AnimationModule',
            methods: {
                fadeIn: (element, duration = 300) => {
                    console.log(`Fading in ${element.tagName} over ${duration}ms`);
                },
                fadeOut: (element, duration = 300) => {
                    console.log(`Fading out ${element.tagName} over ${duration}ms`);
                },
                slideDown: (element, duration = 300) => {
                    console.log(`Sliding down ${element.tagName} over ${duration}ms`);
                }
            }
        };
        
        this.modules.set('domUtils', domUtils);
        this.modules.set('eventHandler', eventHandler);
        this.modules.set('animationModule', animationModule);
    }
    
    // Use modules for organization
    useModule(moduleName, methodName, ...args) {
        const module = this.modules.get(moduleName);
        if (module && module.methods[methodName]) {
            console.log(`Using ${module.name}.${methodName}`);
            return module.methods[methodName](...args);
        }
        console.log(`Module ${moduleName} or method ${methodName} not found`);
    }
    
    // Create namespaced functions
    createNamespace(namespace) {
        const ns = {
            [namespace]: {
                select: (selector) => this.useModule('domUtils', 'selectElement', selector),
                create: (tagName, options) => this.useModule('domUtils', 'createElement', tagName, options),
                addClass: (element, className) => this.useModule('domUtils', 'addClass', element, className),
                removeClass: (element, className) => this.useModule('domUtils', 'removeClass', element, className)
            }
        };
        
        console.log(`Created namespace: ${namespace}`);
        return ns[namespace];
    }
}

const codeOrganization = new CodeOrganization();

// Test code organization
codeOrganization.useModule('domUtils', 'selectElement', '#my-element');
codeOrganization.useModule('eventHandler', 'addEventListener', element, 'click', () => {});
codeOrganization.useModule('animationModule', 'fadeIn', element, 500);

const DOM = codeOrganization.createNamespace('DOM');
DOM.select('#my-element');
DOM.create('div', { id: 'new-element' });

// 📚 4. Error Handling Best Practices
console.log("\n📚 4. Error Handling Best Practices");
console.log("----------------------------------");

class ErrorHandlingBestPractices {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'error-element',
            tagName: 'DIV',
            className: 'error-box',
            style: { width: '100px', height: '100px' }
        };
        
        this.elements.set('element', element);
    }
    
    // Safe element selection
    safeSelectElement(selector) {
        try {
            console.log(`Attempting to select element: ${selector}`);
            // Simulate selection
            const element = { id: 'selected-element', tagName: 'DIV' };
            console.log(`Successfully selected element: ${element.id}`);
            return element;
        } catch (error) {
            console.error(`Error selecting element ${selector}:`, error.message);
            return null;
        }
    }
    
    // Safe style manipulation
    safeSetStyle(element, property, value) {
        try {
            if (!element) {
                throw new Error('Element is null or undefined');
            }
            
            if (!element.style) {
                element.style = {};
            }
            
            element.style[property] = value;
            console.log(`Successfully set style ${property}: ${value}`);
        } catch (error) {
            console.error(`Error setting style ${property}:`, error.message);
        }
    }
    
    // Safe event listener addition
    safeAddEventListener(element, event, handler) {
        try {
            if (!element) {
                throw new Error('Element is null or undefined');
            }
            
            if (typeof handler !== 'function') {
                throw new Error('Handler must be a function');
            }
            
            console.log(`Successfully added ${event} listener to ${element.tagName}`);
        } catch (error) {
            console.error(`Error adding event listener:`, error.message);
        }
    }
    
    // Validate element before manipulation
    validateElement(element, operation) {
        if (!element) {
            throw new Error(`Element is required for ${operation}`);
        }
        
        if (!element.tagName) {
            throw new Error(`Invalid element for ${operation}`);
        }
        
        console.log(`Element validated for ${operation}`);
        return true;
    }
    
    // Handle DOM errors gracefully
    handleDOMError(error, context) {
        console.error(`DOM Error in ${context}:`, error.message);
        
        // Log error details
        const errorDetails = {
            message: error.message,
            context: context,
            timestamp: new Date().toISOString(),
            stack: error.stack
        };
        
        console.log('Error details:', errorDetails);
        
        // In a real application, you might send this to an error reporting service
        return errorDetails;
    }
}

const errorHandlingBestPractices = new ErrorHandlingBestPractices();

// Test error handling
const errorElement = errorHandlingBestPractices.elements.get('element');

errorHandlingBestPractices.safeSelectElement('#existing-element');
errorHandlingBestPractices.safeSelectElement('#non-existing-element');

errorHandlingBestPractices.safeSetStyle(errorElement, 'backgroundColor', 'red');
errorHandlingBestPractices.safeSetStyle(null, 'backgroundColor', 'red'); // This will error

errorHandlingBestPractices.safeAddEventListener(errorElement, 'click', () => {});
errorHandlingBestPractices.safeAddEventListener(null, 'click', () => {}); // This will error

try {
    errorHandlingBestPractices.validateElement(errorElement, 'style manipulation');
    errorHandlingBestPractices.validateElement(null, 'style manipulation');
} catch (error) {
    errorHandlingBestPractices.handleDOMError(error, 'element validation');
}

// 📚 5. Accessibility Best Practices
console.log("\n📚 5. Accessibility Best Practices");
console.log("--------------------------------");

class AccessibilityBestPractices {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const button = {
            id: 'accessible-button',
            tagName: 'BUTTON',
            className: 'btn',
            textContent: 'Click Me',
            attributes: {},
            style: {}
        };
        
        const input = {
            id: 'accessible-input',
            tagName: 'INPUT',
            type: 'text',
            className: 'form-control',
            attributes: {},
            style: {}
        };
        
        this.elements.set('button', button);
        this.elements.set('input', input);
    }
    
    // Ensure proper ARIA attributes
    setAriaAttributes(element, attributes) {
        if (!element.attributes) {
            element.attributes = {};
        }
        
        Object.entries(attributes).forEach(([key, value]) => {
            element.attributes[key] = value;
            console.log(`Set ARIA attribute ${key}="${value}" on ${element.tagName}`);
        });
    }
    
    // Ensure proper focus management
    setFocusable(element, focusable = true) {
        if (focusable) {
            element.attributes.tabindex = '0';
            console.log(`Made ${element.tagName} focusable`);
        } else {
            element.attributes.tabindex = '-1';
            console.log(`Made ${element.tagName} not focusable`);
        }
    }
    
    // Ensure proper keyboard navigation
    addKeyboardSupport(element, keyHandlers) {
        console.log(`Adding keyboard support to ${element.tagName}`);
        
        Object.entries(keyHandlers).forEach(([key, handler]) => {
            console.log(`Added ${key} key handler`);
        });
    }
    
    // Ensure proper color contrast
    checkColorContrast(foreground, background) {
        // Simple contrast check (in real implementation, you'd use proper contrast calculation)
        const contrast = Math.abs(foreground - background);
        const isAccessible = contrast > 128; // Simplified check
        
        console.log(`Color contrast check: ${isAccessible ? 'PASS' : 'FAIL'}`);
        return isAccessible;
    }
    
    // Ensure proper semantic HTML
    useSemanticElement(tagName, options = {}) {
        const semanticElements = {
            'button': { role: 'button', tabindex: '0' },
            'link': { role: 'link', tabindex: '0' },
            'heading': { role: 'heading', tabindex: '-1' },
            'list': { role: 'list', tabindex: '-1' },
            'listitem': { role: 'listitem', tabindex: '0' }
        };
        
        const element = {
            tagName: tagName.toUpperCase(),
            attributes: { ...semanticElements[tagName], ...options.attributes },
            ...options
        };
        
        console.log(`Created semantic ${tagName} element`);
        return element;
    }
}

const accessibilityBestPractices = new AccessibilityBestPractices();

// Test accessibility features
const button = accessibilityBestPractices.elements.get('button');
const input = accessibilityBestPractices.elements.get('input');

accessibilityBestPractices.setAriaAttributes(button, {
    'aria-label': 'Submit form',
    'aria-describedby': 'button-help'
});

accessibilityBestPractices.setFocusable(button, true);
accessibilityBestPractices.setFocusable(input, true);

accessibilityBestPractices.addKeyboardSupport(button, {
    'Enter': () => console.log('Enter key pressed'),
    'Space': () => console.log('Space key pressed')
});

accessibilityBestPractices.checkColorContrast(255, 0); // High contrast
accessibilityBestPractices.checkColorContrast(128, 127); // Low contrast

accessibilityBestPractices.useSemanticElement('button', {
    textContent: 'Semantic Button',
    attributes: { 'aria-label': 'Semantic button' }
});

// 📚 6. Testing Best Practices
console.log("\n📚 6. Testing Best Practices");
console.log("--------------------------");

class TestingBestPractices {
    constructor() {
        this.elements = new Map();
        this.testResults = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'test-element',
            tagName: 'DIV',
            className: 'test-box',
            style: { width: '100px', height: '100px' },
            attributes: {}
        };
        
        this.elements.set('element', element);
    }
    
    // Test element selection
    testElementSelection(selector, expectedTagName) {
        console.log(`Testing element selection: ${selector}`);
        
        try {
            // Simulate selection
            const element = { id: 'selected-element', tagName: expectedTagName };
            
            if (element.tagName === expectedTagName) {
                console.log(`✓ Element selection test passed`);
                this.testResults.set('elementSelection', { passed: true, message: 'Element selection works correctly' });
                return true;
            } else {
                console.log(`✗ Element selection test failed`);
                this.testResults.set('elementSelection', { passed: false, message: 'Element selection failed' });
                return false;
            }
        } catch (error) {
            console.log(`✗ Element selection test error: ${error.message}`);
            this.testResults.set('elementSelection', { passed: false, message: error.message });
            return false;
        }
    }
    
    // Test style manipulation
    testStyleManipulation(element, property, value) {
        console.log(`Testing style manipulation: ${property} = ${value}`);
        
        try {
            if (!element.style) {
                element.style = {};
            }
            
            element.style[property] = value;
            const actualValue = element.style[property];
            
            if (actualValue === value) {
                console.log(`✓ Style manipulation test passed`);
                this.testResults.set('styleManipulation', { passed: true, message: 'Style manipulation works correctly' });
                return true;
            } else {
                console.log(`✗ Style manipulation test failed`);
                this.testResults.set('styleManipulation', { passed: false, message: 'Style manipulation failed' });
                return false;
            }
        } catch (error) {
            console.log(`✗ Style manipulation test error: ${error.message}`);
            this.testResults.set('styleManipulation', { passed: false, message: error.message });
            return false;
        }
    }
    
    // Test event handling
    testEventHandling(element, eventType) {
        console.log(`Testing event handling: ${eventType}`);
        
        try {
            let eventTriggered = false;
            
            // Simulate event listener
            const handler = () => {
                eventTriggered = true;
                console.log(`Event ${eventType} triggered`);
            };
            
            // Simulate event dispatch
            handler();
            
            if (eventTriggered) {
                console.log(`✓ Event handling test passed`);
                this.testResults.set('eventHandling', { passed: true, message: 'Event handling works correctly' });
                return true;
            } else {
                console.log(`✗ Event handling test failed`);
                this.testResults.set('eventHandling', { passed: false, message: 'Event handling failed' });
                return false;
            }
        } catch (error) {
            console.log(`✗ Event handling test error: ${error.message}`);
            this.testResults.set('eventHandling', { passed: false, message: error.message });
            return false;
        }
    }
    
    // Test accessibility
    testAccessibility(element) {
        console.log(`Testing accessibility for ${element.tagName}`);
        
        try {
            const hasAriaLabel = element.attributes && element.attributes['aria-label'];
            const hasTabIndex = element.attributes && element.attributes.tabindex !== undefined;
            const hasRole = element.attributes && element.attributes.role;
            
            const accessibilityScore = [hasAriaLabel, hasTabIndex, hasRole].filter(Boolean).length;
            
            if (accessibilityScore >= 2) {
                console.log(`✓ Accessibility test passed (score: ${accessibilityScore}/3)`);
                this.testResults.set('accessibility', { passed: true, message: `Accessibility score: ${accessibilityScore}/3` });
                return true;
            } else {
                console.log(`✗ Accessibility test failed (score: ${accessibilityScore}/3)`);
                this.testResults.set('accessibility', { passed: false, message: `Accessibility score: ${accessibilityScore}/3` });
                return false;
            }
        } catch (error) {
            console.log(`✗ Accessibility test error: ${error.message}`);
            this.testResults.set('accessibility', { passed: false, message: error.message });
            return false;
        }
    }
    
    // Get test results
    getTestResults() {
        const results = Object.fromEntries(this.testResults);
        console.log('Test Results:', results);
        return results;
    }
    
    // Run all tests
    runAllTests() {
        console.log('Running all DOM tests...');
        
        const element = this.elements.get('element');
        
        this.testElementSelection('#test-element', 'DIV');
        this.testStyleManipulation(element, 'backgroundColor', 'red');
        this.testEventHandling(element, 'click');
        this.testAccessibility(element);
        
        return this.getTestResults();
    }
}

const testingBestPractices = new TestingBestPractices();

// Test accessibility features
const testElement = testingBestPractices.elements.get('element');
testElement.attributes = {
    'aria-label': 'Test element',
    'tabindex': '0',
    'role': 'button'
};

// Run all tests
const testResults = testingBestPractices.runAllTests();

// 📚 7. Security Best Practices
console.log("\n📚 7. Security Best Practices");
console.log("---------------------------");

class SecurityBestPractices {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'security-element',
            tagName: 'DIV',
            className: 'security-box',
            innerHTML: '',
            attributes: {}
        };
        
        this.elements.set('element', element);
    }
    
    // Sanitize HTML content
    sanitizeHTML(html) {
        console.log(`Sanitizing HTML: ${html}`);
        
        // Simple HTML sanitization (in real implementation, use a proper sanitization library)
        const sanitized = html
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/javascript:/gi, '');
        
        console.log(`Sanitized HTML: ${sanitized}`);
        return sanitized;
    }
    
    // Safe innerHTML setting
    safeSetInnerHTML(element, html) {
        try {
            const sanitized = this.sanitizeHTML(html);
            element.innerHTML = sanitized;
            console.log(`Safely set innerHTML for ${element.tagName}`);
        } catch (error) {
            console.error(`Error setting innerHTML: ${error.message}`);
        }
    }
    
    // Validate user input
    validateInput(input, type = 'text') {
        console.log(`Validating input: ${input} (type: ${type})`);
        
        const validators = {
            text: (value) => /^[a-zA-Z0-9\s]+$/.test(value),
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            number: (value) => !isNaN(parseFloat(value)) && isFinite(value),
            url: (value) => {
                try {
                    new URL(value);
                    return true;
                } catch {
                    return false;
                }
            }
        };
        
        const validator = validators[type] || validators.text;
        const isValid = validator(input);
        
        console.log(`Input validation result: ${isValid ? 'VALID' : 'INVALID'}`);
        return isValid;
    }
    
    // Prevent XSS attacks
    preventXSS(element, content) {
        console.log(`Preventing XSS for content: ${content}`);
        
        // Escape HTML characters
        const escaped = content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
        
        console.log(`Escaped content: ${escaped}`);
        return escaped;
    }
    
    // Secure attribute setting
    secureSetAttribute(element, name, value) {
        console.log(`Securely setting attribute ${name}="${value}"`);
        
        // Check for dangerous attributes
        const dangerousAttributes = ['onclick', 'onload', 'onerror', 'onmouseover'];
        const dangerousValues = ['javascript:', 'data:', 'vbscript:'];
        
        if (dangerousAttributes.includes(name.toLowerCase())) {
            console.warn(`Dangerous attribute detected: ${name}`);
            return false;
        }
        
        if (dangerousValues.some(dangerous => value.toLowerCase().includes(dangerous))) {
            console.warn(`Dangerous value detected: ${value}`);
            return false;
        }
        
        element.attributes[name] = value;
        console.log(`Attribute set securely: ${name}="${value}"`);
        return true;
    }
}

const securityBestPractices = new SecurityBestPractices();

// Test security features
const securityElement = securityBestPractices.elements.get('element');

securityBestPractices.sanitizeHTML('<div>Safe content</div><script>alert("xss")</script>');
securityBestPractices.safeSetInnerHTML(securityElement, '<p>Safe paragraph</p><script>alert("xss")</script>');

securityBestPractices.validateInput('user@example.com', 'email');
securityBestPractices.validateInput('<script>alert("xss")</script>', 'text');

securityBestPractices.preventXSS(securityElement, '<script>alert("xss")</script>');

securityBestPractices.secureSetAttribute(securityElement, 'class', 'safe-class');
securityBestPractices.secureSetAttribute(securityElement, 'onclick', 'alert("xss")'); // This will be blocked

// 📚 8. Best Practices Summary
console.log("\n📚 8. Best Practices Summary");
console.log("---------------------------");

console.log("1. Minimize DOM access and manipulation for better performance");
console.log("2. Use efficient selection methods and cache frequently accessed elements");
console.log("3. Batch DOM updates to minimize reflows and repaints");
console.log("4. Implement proper error handling for all DOM operations");
console.log("5. Write maintainable and readable code with proper organization");
console.log("6. Ensure accessibility compliance with ARIA attributes and keyboard navigation");
console.log("7. Test DOM manipulation across different browsers and devices");
console.log("8. Implement security measures to prevent XSS and other attacks");
console.log("9. Use modern DOM APIs and best practices for better code quality");
console.log("10. Document your DOM manipulation code for future maintenance");

console.log("\n🎉 Lesson 7 Complete: Best Practices");
console.log("You now understand DOM manipulation best practices and guidelines!");
