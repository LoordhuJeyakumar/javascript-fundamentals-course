// Lesson 3: Event Handling
// Handling events and user interactions

console.log("🎓 Lesson 3: Event Handling");
console.log("==========================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM events

// 📚 1. Understanding Events
console.log("\n📚 1. Understanding Events");
console.log("-----------------------");

console.log("Events are actions that happen in the browser:");
console.log("- User interactions (clicks, keyboard input, mouse movements)");
console.log("- Browser events (page load, resize, scroll)");
console.log("- Custom events (programmatically triggered)");

// 📚 2. Event Types
console.log("\n📚 2. Event Types");
console.log("---------------");

console.log("Common event types:");
console.log("- Mouse events: click, dblclick, mousedown, mouseup, mousemove");
console.log("- Keyboard events: keydown, keyup, keypress");
console.log("- Form events: submit, change, input, focus, blur");
console.log("- Window events: load, unload, resize, scroll");
console.log("- Touch events: touchstart, touchend, touchmove");

// 📚 3. Event Listeners
console.log("\n📚 3. Event Listeners");
console.log("--------------------");

class EventSimulator {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const button = {
            id: 'test-button',
            tagName: 'BUTTON',
            className: 'btn',
            textContent: 'Click Me',
            disabled: false
        };
        
        const input = {
            id: 'test-input',
            tagName: 'INPUT',
            className: 'form-control',
            type: 'text',
            value: '',
            placeholder: 'Enter text'
        };
        
        const div = {
            id: 'test-div',
            tagName: 'DIV',
            className: 'container',
            textContent: 'Hover over me'
        };
        
        this.elements.set('button', button);
        this.elements.set('input', input);
        this.elements.set('div', div);
    }
    
    addEventListener(element, eventType, handler, options = {}) {
        const elementId = element.id;
        if (!this.eventListeners.has(elementId)) {
            this.eventListeners.set(elementId, new Map());
        }
        
        const elementListeners = this.eventListeners.get(elementId);
        if (!elementListeners.has(eventType)) {
            elementListeners.set(eventType, []);
        }
        
        const listeners = elementListeners.get(eventType);
        listeners.push({ handler, options });
        
        console.log(`Added ${eventType} listener to ${element.tagName}`);
    }
    
    removeEventListener(element, eventType, handler) {
        const elementId = element.id;
        const elementListeners = this.eventListeners.get(elementId);
        
        if (elementListeners && elementListeners.has(eventType)) {
            const listeners = elementListeners.get(eventType);
            const index = listeners.findIndex(l => l.handler === handler);
            if (index > -1) {
                listeners.splice(index, 1);
                console.log(`Removed ${eventType} listener from ${element.tagName}`);
            }
        }
    }
    
    dispatchEvent(element, eventType, eventData = {}) {
        const elementId = element.id;
        const elementListeners = this.eventListeners.get(elementId);
        
        if (elementListeners && elementListeners.has(eventType)) {
            const listeners = elementListeners.get(eventType);
            const event = {
                type: eventType,
                target: element,
                currentTarget: element,
                preventDefault: () => console.log('preventDefault() called'),
                stopPropagation: () => console.log('stopPropagation() called'),
                stopImmediatePropagation: () => console.log('stopImmediatePropagation() called'),
                ...eventData
            };
            
            console.log(`Dispatching ${eventType} event to ${element.tagName}`);
            listeners.forEach(({ handler }) => {
                handler(event);
            });
        }
    }
}

const eventSimulator = new EventSimulator();

// Get mock elements
const button = eventSimulator.elements.get('button');
const input = eventSimulator.elements.get('input');
const div = eventSimulator.elements.get('div');

// 📚 4. Basic Event Handling
console.log("\n📚 4. Basic Event Handling");
console.log("-------------------------");

// Click event handler
function handleClick(event) {
    console.log(`Button clicked! Event type: ${event.type}`);
    console.log(`Target element: ${event.target.tagName}`);
}

// Add click listener
eventSimulator.addEventListener(button, 'click', handleClick);

// Simulate click
eventSimulator.dispatchEvent(button, 'click');

// Input event handler
function handleInput(event) {
    console.log(`Input changed! Value: ${event.target.value}`);
}

// Add input listener
eventSimulator.addEventListener(input, 'input', handleInput);

// Simulate input
eventSimulator.dispatchEvent(input, 'input', { target: { ...input, value: 'Hello World' } });

// 📚 5. Event Object Properties
console.log("\n📚 5. Event Object Properties");
console.log("--------------------------");

function logEventDetails(event) {
    console.log("Event Details:");
    console.log(`- Type: ${event.type}`);
    console.log(`- Target: ${event.target.tagName}`);
    console.log(`- Current Target: ${event.currentTarget.tagName}`);
    console.log(`- Timestamp: ${event.timeStamp || Date.now()}`);
    console.log(`- Bubbles: ${event.bubbles || true}`);
    console.log(`- Cancelable: ${event.cancelable || true}`);
}

// Add detailed event listener
eventSimulator.addEventListener(button, 'click', logEventDetails);

// Simulate click with detailed event
eventSimulator.dispatchEvent(button, 'click', {
    timeStamp: Date.now(),
    bubbles: true,
    cancelable: true
});

// 📚 6. Event Propagation
console.log("\n📚 6. Event Propagation");
console.log("--------------------");

class EventPropagation {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.setupNestedElements();
    }
    
    setupNestedElements() {
        const grandparent = { id: 'grandparent', tagName: 'DIV', className: 'grandparent' };
        const parent = { id: 'parent', tagName: 'DIV', className: 'parent' };
        const child = { id: 'child', tagName: 'BUTTON', className: 'child' };
        
        this.elements.set('grandparent', grandparent);
        this.elements.set('parent', parent);
        this.elements.set('child', child);
    }
    
    addEventListener(element, eventType, handler, useCapture = false) {
        const elementId = element.id;
        if (!this.eventListeners.has(elementId)) {
            this.eventListeners.set(elementId, new Map());
        }
        
        const elementListeners = this.eventListeners.get(elementId);
        if (!elementListeners.has(eventType)) {
            elementListeners.set(eventType, { capture: [], bubble: [] });
        }
        
        const listeners = elementListeners.get(eventType);
        if (useCapture) {
            listeners.capture.push(handler);
        } else {
            listeners.bubble.push(handler);
        }
        
        console.log(`Added ${eventType} listener to ${element.tagName} (capture: ${useCapture})`);
    }
    
    dispatchEvent(element, eventType, eventData = {}) {
        const event = {
            type: eventType,
            target: element,
            currentTarget: element,
            bubbles: true,
            cancelable: true,
            eventPhase: 0, // 0: NONE, 1: CAPTURING, 2: AT_TARGET, 3: BUBBLING
            stopPropagation: () => {
                console.log('Event propagation stopped');
                event.propagationStopped = true;
            },
            preventDefault: () => {
                console.log('Default action prevented');
                event.defaultPrevented = true;
            },
            ...eventData
        };
        
        console.log(`\nDispatching ${eventType} event to ${element.tagName}`);
        
        // Simulate event propagation
        const elements = ['grandparent', 'parent', 'child'];
        const targetIndex = elements.indexOf(element.id);
        
        // Capturing phase
        console.log("Capturing phase:");
        for (let i = 0; i < targetIndex; i++) {
            if (event.propagationStopped) break;
            event.eventPhase = 1;
            event.currentTarget = this.elements.get(elements[i]);
            this.triggerListeners(elements[i], eventType, event, 'capture');
        }
        
        // Target phase
        if (!event.propagationStopped) {
            console.log("Target phase:");
            event.eventPhase = 2;
            event.currentTarget = element;
            this.triggerListeners(element.id, eventType, event, 'capture');
            this.triggerListeners(element.id, eventType, event, 'bubble');
        }
        
        // Bubbling phase
        if (!event.propagationStopped) {
            console.log("Bubbling phase:");
            for (let i = targetIndex - 1; i >= 0; i--) {
                if (event.propagationStopped) break;
                event.eventPhase = 3;
                event.currentTarget = this.elements.get(elements[i]);
                this.triggerListeners(elements[i], eventType, event, 'bubble');
            }
        }
    }
    
    triggerListeners(elementId, eventType, event, phase) {
        const elementListeners = this.eventListeners.get(elementId);
        if (elementListeners && elementListeners.has(eventType)) {
            const listeners = elementListeners.get(eventType);
            const phaseListeners = listeners[phase];
            phaseListeners.forEach(handler => {
                console.log(`  - ${phase} listener on ${event.currentTarget.tagName}`);
                handler(event);
            });
        }
    }
}

const eventPropagation = new EventPropagation();

// Add listeners to demonstrate propagation
eventPropagation.addEventListener(
    eventPropagation.elements.get('grandparent'), 
    'click', 
    (e) => console.log('Grandparent clicked'), 
    false
);

eventPropagation.addEventListener(
    eventPropagation.elements.get('parent'), 
    'click', 
    (e) => console.log('Parent clicked'), 
    false
);

eventPropagation.addEventListener(
    eventPropagation.elements.get('child'), 
    'click', 
    (e) => console.log('Child clicked'), 
    false
);

// Simulate click on child (will bubble up)
eventPropagation.dispatchEvent(eventPropagation.elements.get('child'), 'click');

// 📚 7. Event Delegation
console.log("\n📚 7. Event Delegation");
console.log("--------------------");

class EventDelegation {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.setupDelegationElements();
    }
    
    setupDelegationElements() {
        const list = { id: 'todo-list', tagName: 'UL', className: 'todo-list' };
        const item1 = { id: 'item-1', tagName: 'LI', className: 'todo-item', textContent: 'Task 1' };
        const item2 = { id: 'item-2', tagName: 'LI', className: 'todo-item', textContent: 'Task 2' };
        const item3 = { id: 'item-3', tagName: 'LI', className: 'todo-item', textContent: 'Task 3' };
        
        this.elements.set('list', list);
        this.elements.set('item1', item1);
        this.elements.set('item2', item2);
        this.elements.set('item3', item3);
    }
    
    addEventListener(element, eventType, handler, selector = null) {
        const elementId = element.id;
        if (!this.eventListeners.has(elementId)) {
            this.eventListeners.set(elementId, new Map());
        }
        
        const elementListeners = this.eventListeners.get(elementId);
        if (!elementListeners.has(eventType)) {
            elementListeners.set(eventType, []);
        }
        
        const listeners = elementListeners.get(eventType);
        listeners.push({ handler, selector });
        
        console.log(`Added delegated ${eventType} listener to ${element.tagName}${selector ? ` for ${selector}` : ''}`);
    }
    
    dispatchEvent(element, eventType, eventData = {}) {
        const event = {
            type: eventType,
            target: element,
            currentTarget: element,
            bubbles: true,
            ...eventData
        };
        
        console.log(`\nDispatching ${eventType} event to ${element.tagName}`);
        
        // Find all parent elements that might have delegated listeners
        const parents = ['list']; // In a real DOM, you'd traverse up the tree
        
        parents.forEach(parentId => {
            const parent = this.elements.get(parentId);
            const parentListeners = this.eventListeners.get(parentId);
            
            if (parentListeners && parentListeners.has(eventType)) {
                const listeners = parentListeners.get(eventType);
                listeners.forEach(({ handler, selector }) => {
                    // Check if the selector matches the target
                    if (!selector || this.matchesSelector(element, selector)) {
                        event.currentTarget = parent;
                        console.log(`  - Delegated listener on ${parent.tagName} triggered for ${element.tagName}`);
                        handler(event);
                    }
                });
            }
        });
    }
    
    matchesSelector(element, selector) {
        // Simple selector matching
        if (selector.startsWith('.')) {
            const className = selector.substring(1);
            return element.className && element.className.includes(className);
        } else if (selector.startsWith('#')) {
            const id = selector.substring(1);
            return element.id === id;
        } else {
            return element.tagName.toLowerCase() === selector.toLowerCase();
        }
    }
}

const eventDelegation = new EventDelegation();

// Add delegated listener to the list
eventDelegation.addEventListener(
    eventDelegation.elements.get('list'),
    'click',
    (event) => {
        console.log(`Todo item clicked: ${event.target.textContent}`);
    },
    '.todo-item'
);

// Simulate clicks on individual items
eventDelegation.dispatchEvent(eventDelegation.elements.get('item1'), 'click');
eventDelegation.dispatchEvent(eventDelegation.elements.get('item2'), 'click');

// 📚 8. Custom Events
console.log("\n📚 8. Custom Events");
console.log("-----------------");

class CustomEventManager {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.setupCustomEventElements();
    }
    
    setupCustomEventElements() {
        const button = { id: 'custom-button', tagName: 'BUTTON', className: 'btn' };
        this.elements.set('button', button);
    }
    
    createCustomEvent(eventType, detail = {}) {
        const event = {
            type: eventType,
            detail: detail,
            bubbles: true,
            cancelable: true,
            timeStamp: Date.now(),
            preventDefault: () => console.log('preventDefault() called'),
            stopPropagation: () => console.log('stopPropagation() called')
        };
        
        console.log(`Created custom event: ${eventType}`, detail);
        return event;
    }
    
    addEventListener(element, eventType, handler) {
        const elementId = element.id;
        if (!this.eventListeners.has(elementId)) {
            this.eventListeners.set(elementId, new Map());
        }
        
        const elementListeners = this.eventListeners.get(elementId);
        if (!elementListeners.has(eventType)) {
            elementListeners.set(eventType, []);
        }
        
        const listeners = elementListeners.get(eventType);
        listeners.push(handler);
        
        console.log(`Added custom event listener for ${eventType} on ${element.tagName}`);
    }
    
    dispatchEvent(element, event) {
        const elementId = element.id;
        const elementListeners = this.eventListeners.get(elementId);
        
        if (elementListeners && elementListeners.has(event.type)) {
            const listeners = elementListeners.get(event.type);
            console.log(`Dispatching custom event ${event.type} to ${element.tagName}`);
            listeners.forEach(handler => handler(event));
        }
    }
}

const customEventManager = new CustomEventManager();

// Create custom events
const button = customEventManager.elements.get('button');

// Add custom event listener
customEventManager.addEventListener(button, 'userLogin', (event) => {
    console.log(`User logged in: ${event.detail.username}`);
});

customEventManager.addEventListener(button, 'dataLoaded', (event) => {
    console.log(`Data loaded: ${event.detail.count} items`);
});

// Dispatch custom events
const loginEvent = customEventManager.createCustomEvent('userLogin', {
    username: 'john_doe',
    timestamp: Date.now()
});

const dataEvent = customEventManager.createCustomEvent('dataLoaded', {
    count: 42,
    source: 'API'
});

customEventManager.dispatchEvent(button, loginEvent);
customEventManager.dispatchEvent(button, dataEvent);

// 📚 9. Event Best Practices
console.log("\n📚 9. Event Best Practices");
console.log("------------------------");

console.log("1. Use event delegation for dynamic content");
console.log("2. Remove event listeners when elements are destroyed");
console.log("3. Use passive event listeners for better performance");
console.log("4. Debounce or throttle frequent events (scroll, resize)");
console.log("5. Use specific event types instead of generic ones");
console.log("6. Handle errors in event handlers gracefully");
console.log("7. Use custom events for component communication");
console.log("8. Test event handling across different browsers");
console.log("9. Use event.preventDefault() sparingly");
console.log("10. Consider accessibility when handling events");

// 📚 10. Performance Considerations
console.log("\n📚 10. Performance Considerations");
console.log("-------------------------------");

class PerformanceOptimizedEvents {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.throttleTimers = new Map();
        this.debounceTimers = new Map();
    }
    
    throttle(func, delay) {
        return (...args) => {
            const key = func.toString();
            if (!this.throttleTimers.has(key)) {
                this.throttleTimers.set(key, null);
            }
            
            if (!this.throttleTimers.get(key)) {
                this.throttleTimers.set(key, setTimeout(() => {
                    this.throttleTimers.set(key, null);
                }, delay));
                func.apply(this, args);
            }
        };
    }
    
    debounce(func, delay) {
        return (...args) => {
            const key = func.toString();
            if (this.debounceTimers.has(key)) {
                clearTimeout(this.debounceTimers.get(key));
            }
            
            this.debounceTimers.set(key, setTimeout(() => {
                func.apply(this, args);
            }, delay));
        };
    }
    
    addPassiveEventListener(element, eventType, handler) {
        // Passive listeners don't call preventDefault()
        const passiveHandler = (event) => {
            // Simulate passive behavior
            handler(event);
        };
        
        console.log(`Added passive ${eventType} listener to ${element.tagName}`);
        return passiveHandler;
    }
}

const perfEvents = new PerformanceOptimizedEvents();

// Example of throttled scroll handler
const throttledScrollHandler = perfEvents.throttle((event) => {
    console.log('Throttled scroll event');
}, 100);

// Example of debounced resize handler
const debouncedResizeHandler = perfEvents.debounce((event) => {
    console.log('Debounced resize event');
}, 250);

console.log("\n🎉 Lesson 3 Complete: Event Handling");
console.log("You now understand how to handle events and user interactions!");
