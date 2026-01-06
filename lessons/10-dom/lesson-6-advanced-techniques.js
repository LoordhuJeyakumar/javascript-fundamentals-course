// Lesson 6: Advanced DOM Techniques
// Advanced DOM manipulation and modern web APIs

console.log("🎓 Lesson 6: Advanced DOM Techniques");
console.log("==================================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. Shadow DOM
console.log("\n📚 1. Shadow DOM");
console.log("---------------");

console.log("Shadow DOM provides:");
console.log("- Encapsulated DOM and CSS");
console.log("- Component isolation");
console.log("- Scoped styling");
console.log("- Better component architecture");

class ShadowDOMSimulator {
    constructor() {
        this.elements = new Map();
        this.shadowRoots = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const hostElement = {
            id: 'shadow-host',
            tagName: 'DIV',
            className: 'shadow-host',
            shadowRoot: null
        };
        
        this.elements.set('host', hostElement);
    }
    
    attachShadow(element, options = {}) {
        const shadowRoot = {
            mode: options.mode || 'open',
            host: element,
            children: [],
            style: {},
            isConnected: true
        };
        
        element.shadowRoot = shadowRoot;
        this.shadowRoots.set(element.id, shadowRoot);
        
        console.log(`Attached shadow DOM to ${element.tagName} (mode: ${shadowRoot.mode})`);
        return shadowRoot;
    }
    
    createShadowElement(shadowRoot, tagName, options = {}) {
        const element = {
            id: options.id || `shadow-${Date.now()}`,
            tagName: tagName.toUpperCase(),
            className: options.className || '',
            textContent: options.textContent || '',
            style: options.style || {},
            shadowRoot: shadowRoot,
            parent: shadowRoot
        };
        
        shadowRoot.children.push(element);
        console.log(`Created shadow element: ${tagName}`);
        return element;
    }
    
    addShadowStyle(shadowRoot, css) {
        if (!shadowRoot.style) {
            shadowRoot.style = {};
        }
        shadowRoot.style.css = css;
        console.log(`Added shadow CSS: ${css}`);
    }
    
    getShadowRoot(element) {
        return element.shadowRoot;
    }
    
    isShadowRoot(element) {
        return element.shadowRoot !== null;
    }
}

const shadowDOMSimulator = new ShadowDOMSimulator();

// Create shadow DOM
const hostElement = shadowDOMSimulator.elements.get('host');
const shadowRoot = shadowDOMSimulator.attachShadow(hostElement, { mode: 'open' });

// Create shadow elements
const shadowDiv = shadowDOMSimulator.createShadowElement(shadowRoot, 'div', {
    className: 'shadow-content',
    textContent: 'This is inside shadow DOM'
});

const shadowButton = shadowDOMSimulator.createShadowElement(shadowRoot, 'button', {
    className: 'shadow-button',
    textContent: 'Shadow Button'
});

// Add shadow styles
shadowDOMSimulator.addShadowStyle(shadowRoot, `
    .shadow-content {
        background-color: lightblue;
        padding: 20px;
        border-radius: 10px;
    }
    .shadow-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
`);

// 📚 2. Web Components
console.log("\n📚 2. Web Components");
console.log("-------------------");

class WebComponentSimulator {
    constructor() {
        this.components = new Map();
        this.customElements = new Map();
        this.setupMockComponents();
    }
    
    setupMockComponents() {
        // Define a custom element
        const customElement = {
            name: 'my-button',
            tagName: 'MY-BUTTON',
            className: 'MyButton',
            template: `
                <div class="my-button">
                    <button class="btn">
                        <slot></slot>
                    </button>
                </div>
            `,
            styles: `
                .my-button .btn {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .my-button .btn:hover {
                    background-color: #0056b3;
                }
            `,
            attributes: {},
            methods: {},
            lifecycle: {
                connectedCallback: null,
                disconnectedCallback: null,
                adoptedCallback: null,
                attributeChangedCallback: null
            }
        };
        
        this.components.set('my-button', customElement);
    }
    
    defineCustomElement(name, definition) {
        const customElement = {
            name: name,
            tagName: name.toUpperCase(),
            className: this.toPascalCase(name),
            template: definition.template || '',
            styles: definition.styles || '',
            attributes: definition.attributes || {},
            methods: definition.methods || {},
            lifecycle: definition.lifecycle || {}
        };
        
        this.customElements.set(name, customElement);
        console.log(`Defined custom element: ${name}`);
        return customElement;
    }
    
    toPascalCase(str) {
        return str.replace(/(?:^|[-_])(\w)/g, (_, c) => c.toUpperCase());
    }
    
    createCustomElement(name, options = {}) {
        const definition = this.customElements.get(name);
        if (!definition) {
            console.log(`Custom element "${name}" not defined`);
            return null;
        }
        
        const element = {
            id: options.id || `${name}-${Date.now()}`,
            tagName: definition.tagName,
            className: definition.className,
            template: definition.template,
            styles: definition.styles,
            attributes: { ...definition.attributes, ...options.attributes },
            methods: { ...definition.methods },
            lifecycle: { ...definition.lifecycle },
            children: options.children || [],
            textContent: options.textContent || ''
        };
        
        console.log(`Created custom element instance: ${name}`);
        return element;
    }
    
    setAttribute(element, name, value) {
        element.attributes[name] = value;
        console.log(`Set attribute ${name}="${value}" on ${element.tagName}`);
        
        // Trigger attribute changed callback
        if (element.lifecycle.attributeChangedCallback) {
            element.lifecycle.attributeChangedCallback(name, null, value);
        }
    }
    
    getAttribute(element, name) {
        return element.attributes[name];
    }
    
    connectedCallback(element) {
        if (element.lifecycle.connectedCallback) {
            element.lifecycle.connectedCallback();
        }
        console.log(`Connected callback triggered for ${element.tagName}`);
    }
    
    disconnectedCallback(element) {
        if (element.lifecycle.disconnectedCallback) {
            element.lifecycle.disconnectedCallback();
        }
        console.log(`Disconnected callback triggered for ${element.tagName}`);
    }
}

const webComponentSimulator = new WebComponentSimulator();

// Define a custom element
webComponentSimulator.defineCustomElement('my-counter', {
    template: `
        <div class="counter">
            <button class="decrement">-</button>
            <span class="count">0</span>
            <button class="increment">+</button>
        </div>
    `,
    styles: `
        .counter {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .counter button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }
        .counter .count {
            font-weight: bold;
            min-width: 30px;
            text-align: center;
        }
    `,
    attributes: {
        value: '0',
        min: '0',
        max: '100'
    },
    methods: {
        increment() {
            const currentValue = parseInt(this.attributes.value);
            const maxValue = parseInt(this.attributes.max);
            if (currentValue < maxValue) {
                this.setAttribute('value', (currentValue + 1).toString());
            }
        },
        decrement() {
            const currentValue = parseInt(this.attributes.value);
            const minValue = parseInt(this.attributes.min);
            if (currentValue > minValue) {
                this.setAttribute('value', (currentValue - 1).toString());
            }
        }
    },
    lifecycle: {
        connectedCallback() {
            console.log('Counter component connected to DOM');
        },
        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'value') {
                console.log(`Counter value changed from ${oldValue} to ${newValue}`);
            }
        }
    }
});

// Create custom element instance
const counter = webComponentSimulator.createCustomElement('my-counter', {
    attributes: { value: '5', min: '0', max: '10' }
});

// Test custom element
webComponentSimulator.connectedCallback(counter);
webComponentSimulator.setAttribute(counter, 'value', '7');
counter.methods.increment();
counter.methods.decrement();

// 📚 3. Intersection Observer
console.log("\n📚 3. Intersection Observer");
console.log("-------------------------");

class IntersectionObserverSimulator {
    constructor() {
        this.observers = new Map();
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const container = {
            id: 'scroll-container',
            tagName: 'DIV',
            className: 'scroll-container',
            style: { height: '300px', overflow: 'auto' }
        };
        
        const element1 = {
            id: 'observed-1',
            tagName: 'DIV',
            className: 'observed-element',
            style: { height: '100px', backgroundColor: 'red' },
            textContent: 'Element 1'
        };
        
        const element2 = {
            id: 'observed-2',
            tagName: 'DIV',
            className: 'observed-element',
            style: { height: '100px', backgroundColor: 'blue' },
            textContent: 'Element 2'
        };
        
        const element3 = {
            id: 'observed-3',
            tagName: 'DIV',
            className: 'observed-element',
            style: { height: '100px', backgroundColor: 'green' },
            textContent: 'Element 3'
        };
        
        this.elements.set('container', container);
        this.elements.set('element1', element1);
        this.elements.set('element2', element2);
        this.elements.set('element3', element3);
    }
    
    createIntersectionObserver(callback, options = {}) {
        const observer = {
            id: `observer-${Date.now()}`,
            callback: callback,
            options: {
                root: options.root || null,
                rootMargin: options.rootMargin || '0px',
                threshold: options.threshold || 0,
                ...options
            },
            observedElements: new Set(),
            isActive: true
        };
        
        this.observers.set(observer.id, observer);
        console.log(`Created IntersectionObserver with options:`, observer.options);
        return observer;
    }
    
    observe(observer, element) {
        observer.observedElements.add(element);
        console.log(`Started observing element: ${element.id}`);
    }
    
    unobserve(observer, element) {
        observer.observedElements.delete(element);
        console.log(`Stopped observing element: ${element.id}`);
    }
    
    disconnect(observer) {
        observer.observedElements.clear();
        observer.isActive = false;
        console.log(`Disconnected observer: ${observer.id}`);
    }
    
    simulateIntersection(observer, element, isIntersecting, intersectionRatio = 1) {
        if (!observer.isActive) return;
        
        const entry = {
            target: element,
            isIntersecting: isIntersecting,
            intersectionRatio: intersectionRatio,
            intersectionRect: isIntersecting ? { width: 100, height: 100 } : { width: 0, height: 0 },
            boundingClientRect: { width: 100, height: 100 },
            rootBounds: { width: 300, height: 300 },
            time: Date.now()
        };
        
        console.log(`Intersection change: ${element.id} isIntersecting=${isIntersecting}`);
        observer.callback([entry], observer);
    }
}

const intersectionObserverSimulator = new IntersectionObserverSimulator();

// Create intersection observer
const observer = intersectionObserverSimulator.createIntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Element ${entry.target.id} entered viewport`);
                entry.target.style.backgroundColor = 'yellow';
            } else {
                console.log(`Element ${entry.target.id} left viewport`);
                entry.target.style.backgroundColor = 'gray';
            }
        });
    },
    { threshold: 0.5 }
);

// Observe elements
const element1 = intersectionObserverSimulator.elements.get('element1');
const element2 = intersectionObserverSimulator.elements.get('element2');
const element3 = intersectionObserverSimulator.elements.get('element3');

intersectionObserverSimulator.observe(observer, element1);
intersectionObserverSimulator.observe(observer, element2);
intersectionObserverSimulator.observe(observer, element3);

// Simulate intersection changes
intersectionObserverSimulator.simulateIntersection(observer, element1, true, 0.8);
intersectionObserverSimulator.simulateIntersection(observer, element2, false, 0);
intersectionObserverSimulator.simulateIntersection(observer, element3, true, 0.6);

// 📚 4. Mutation Observer
console.log("\n📚 4. Mutation Observer");
console.log("--------------------");

class MutationObserverSimulator {
    constructor() {
        this.observers = new Map();
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const container = {
            id: 'mutation-container',
            tagName: 'DIV',
            className: 'container',
            children: [],
            attributes: {}
        };
        
        this.elements.set('container', container);
    }
    
    createMutationObserver(callback) {
        const observer = {
            id: `mutation-observer-${Date.now()}`,
            callback: callback,
            isActive: true
        };
        
        this.observers.set(observer.id, observer);
        console.log(`Created MutationObserver: ${observer.id}`);
        return observer;
    }
    
    observe(observer, element, options = {}) {
        const config = {
            childList: options.childList || false,
            attributes: options.attributes || false,
            characterData: options.characterData || false,
            subtree: options.subtree || false,
            attributeOldValue: options.attributeOldValue || false,
            characterDataOldValue: options.characterDataOldValue || false,
            attributeFilter: options.attributeFilter || null
        };
        
        element._mutationObserver = { observer, config };
        console.log(`Started observing mutations on ${element.id}:`, config);
    }
    
    disconnect(observer) {
        observer.isActive = false;
        console.log(`Disconnected MutationObserver: ${observer.id}`);
    }
    
    simulateChildListChange(element, addedNodes = [], removedNodes = []) {
        const mutationObserver = element._mutationObserver;
        if (!mutationObserver || !mutationObserver.config.childList) return;
        
        const mutation = {
            type: 'childList',
            target: element,
            addedNodes: addedNodes,
            removedNodes: removedNodes,
            previousSibling: null,
            nextSibling: null
        };
        
        console.log(`Child list mutation on ${element.id}:`, {
            added: addedNodes.map(n => n.id),
            removed: removedNodes.map(n => n.id)
        });
        
        mutationObserver.observer.callback([mutation], mutationObserver.observer);
    }
    
    simulateAttributeChange(element, attributeName, oldValue, newValue) {
        const mutationObserver = element._mutationObserver;
        if (!mutationObserver || !mutationObserver.config.attributes) return;
        
        const mutation = {
            type: 'attributes',
            target: element,
            attributeName: attributeName,
            oldValue: oldValue,
            newValue: newValue
        };
        
        console.log(`Attribute mutation on ${element.id}: ${attributeName}="${oldValue}" -> "${newValue}"`);
        
        mutationObserver.observer.callback([mutation], mutationObserver.observer);
    }
}

const mutationObserverSimulator = new MutationObserverSimulator();

// Create mutation observer
const mutationObserver = mutationObserverSimulator.createMutationObserver(
    (mutations) => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                console.log(`Child list changed: added ${mutation.addedNodes.length}, removed ${mutation.removedNodes.length}`);
            } else if (mutation.type === 'attributes') {
                console.log(`Attribute changed: ${mutation.attributeName}`);
            }
        });
    }
);

// Observe mutations
const container = mutationObserverSimulator.elements.get('container');
mutationObserverSimulator.observe(mutationObserver, container, {
    childList: true,
    attributes: true,
    subtree: true
});

// Simulate mutations
const newElement = { id: 'new-element', tagName: 'DIV', textContent: 'New Element' };
mutationObserverSimulator.simulateChildListChange(container, [newElement], []);

container.attributes['data-status'] = 'active';
mutationObserverSimulator.simulateAttributeChange(container, 'data-status', null, 'active');

// 📚 5. Resize Observer
console.log("\n📚 5. Resize Observer");
console.log("-------------------");

class ResizeObserverSimulator {
    constructor() {
        this.observers = new Map();
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'resize-element',
            tagName: 'DIV',
            className: 'resize-box',
            style: { width: '100px', height: '100px', backgroundColor: 'red' }
        };
        
        this.elements.set('element', element);
    }
    
    createResizeObserver(callback) {
        const observer = {
            id: `resize-observer-${Date.now()}`,
            callback: callback,
            isActive: true
        };
        
        this.observers.set(observer.id, observer);
        console.log(`Created ResizeObserver: ${observer.id}`);
        return observer;
    }
    
    observe(observer, element) {
        element._resizeObserver = observer;
        console.log(`Started observing resize on ${element.id}`);
    }
    
    unobserve(observer, element) {
        delete element._resizeObserver;
        console.log(`Stopped observing resize on ${element.id}`);
    }
    
    disconnect(observer) {
        observer.isActive = false;
        console.log(`Disconnected ResizeObserver: ${observer.id}`);
    }
    
    simulateResize(element, newWidth, newHeight) {
        const resizeObserver = element._resizeObserver;
        if (!resizeObserver || !resizeObserver.isActive) return;
        
        const oldWidth = element.style.width;
        const oldHeight = element.style.height;
        
        element.style.width = `${newWidth}px`;
        element.style.height = `${newHeight}px`;
        
        const entry = {
            target: element,
            contentRect: {
                width: newWidth,
                height: newHeight,
                top: 0,
                left: 0,
                bottom: newHeight,
                right: newWidth
            },
            borderBoxSize: [{
                inlineSize: newWidth,
                blockSize: newHeight
            }],
            contentBoxSize: [{
                inlineSize: newWidth,
                blockSize: newHeight
            }]
        };
        
        console.log(`Resize detected: ${element.id} ${oldWidth}x${oldHeight} -> ${newWidth}x${newHeight}`);
        resizeObserver.callback([entry], resizeObserver);
    }
}

const resizeObserverSimulator = new ResizeObserverSimulator();

// Create resize observer
const resizeObserver = resizeObserverSimulator.createResizeObserver(
    (entries) => {
        entries.forEach(entry => {
            const { width, height } = entry.contentRect;
            console.log(`Element ${entry.target.id} resized to ${width}x${height}`);
        });
    }
);

// Observe resize
const resizeElement = resizeObserverSimulator.elements.get('element');
resizeObserverSimulator.observe(resizeObserver, resizeElement);

// Simulate resize
resizeObserverSimulator.simulateResize(resizeElement, 200, 150);
resizeObserverSimulator.simulateResize(resizeElement, 300, 200);

// 📚 6. Performance Optimization
console.log("\n📚 6. Performance Optimization");
console.log("-----------------------------");

class PerformanceOptimizer {
    constructor() {
        this.elements = new Map();
        this.measurements = new Map();
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
    
    measurePerformance(name, fn) {
        const startTime = performance.now();
        const result = fn();
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        this.measurements.set(name, {
            duration: duration,
            timestamp: Date.now()
        });
        
        console.log(`Performance measurement "${name}": ${duration.toFixed(2)}ms`);
        return result;
    }
    
    batchDOMUpdates(updates) {
        return this.measurePerformance('batchDOMUpdates', () => {
            // Disable layout recalculation
            console.log('Starting batch DOM updates');
            
            updates.forEach(update => {
                update();
            });
            
            // Force layout recalculation
            console.log('Completed batch DOM updates');
        });
    }
    
    useDocumentFragment(elements) {
        return this.measurePerformance('documentFragment', () => {
            console.log('Using DocumentFragment for efficient DOM manipulation');
            // Simulate fragment operations
            elements.forEach(element => {
                console.log(`Added ${element.tagName} to fragment`);
            });
        });
    }
    
    debounceFunction(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }
    
    throttleFunction(fn, limit) {
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

const performanceOptimizer = new PerformanceOptimizer();

// Test performance optimizations
performanceOptimizer.batchDOMUpdates([
    () => console.log('Update 1'),
    () => console.log('Update 2'),
    () => console.log('Update 3')
]);

performanceOptimizer.useDocumentFragment([
    { tagName: 'DIV', id: 'div1' },
    { tagName: 'SPAN', id: 'span1' },
    { tagName: 'P', id: 'p1' }
]);

// Test debounced function
const debouncedFunction = performanceOptimizer.debounceFunction(
    (value) => console.log(`Debounced call with value: ${value}`),
    300
);

debouncedFunction('test1');
debouncedFunction('test2');
debouncedFunction('test3');

// Test throttled function
const throttledFunction = performanceOptimizer.throttleFunction(
    (value) => console.log(`Throttled call with value: ${value}`),
    100
);

throttledFunction('test1');
throttledFunction('test2');
throttledFunction('test3');

// 📚 7. Modern DOM APIs
console.log("\n📚 7. Modern DOM APIs");
console.log("--------------------");

class ModernDOMAPIs {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'modern-element',
            tagName: 'DIV',
            className: 'modern-box',
            style: { width: '100px', height: '100px' },
            dataset: {},
            classList: ['modern-box']
        };
        
        this.elements.set('element', element);
    }
    
    // Dataset API
    setDataAttribute(element, name, value) {
        element.dataset[name] = value;
        console.log(`Set data attribute: data-${name}="${value}"`);
    }
    
    getDataAttribute(element, name) {
        const value = element.dataset[name];
        console.log(`Get data attribute: data-${name}="${value}"`);
        return value;
    }
    
    // ClassList API
    addClass(element, className) {
        if (!element.classList.includes(className)) {
            element.classList.push(className);
            console.log(`Added class: ${className}`);
        }
    }
    
    removeClass(element, className) {
        const index = element.classList.indexOf(className);
        if (index > -1) {
            element.classList.splice(index, 1);
            console.log(`Removed class: ${className}`);
        }
    }
    
    toggleClass(element, className) {
        if (element.classList.includes(className)) {
            this.removeClass(element, className);
        } else {
            this.addClass(element, className);
        }
    }
    
    // Query API
    querySelector(selector) {
        console.log(`Query selector: ${selector}`);
        // Simulate query result
        return { id: 'query-result', tagName: 'DIV' };
    }
    
    querySelectorAll(selector) {
        console.log(`Query selector all: ${selector}`);
        // Simulate query results
        return [
            { id: 'query-result-1', tagName: 'DIV' },
            { id: 'query-result-2', tagName: 'SPAN' }
        ];
    }
    
    // Closest API
    closest(element, selector) {
        console.log(`Closest: ${selector}`);
        // Simulate closest result
        return { id: 'closest-result', tagName: 'DIV' };
    }
    
    // Matches API
    matches(element, selector) {
        const result = element.tagName.toLowerCase() === selector.toLowerCase();
        console.log(`Matches ${selector}: ${result}`);
        return result;
    }
}

const modernDOMAPIs = new ModernDOMAPIs();

// Get mock element
const modernElement = modernDOMAPIs.elements.get('element');

// Test modern APIs
modernDOMAPIs.setDataAttribute(modernElement, 'userId', '123');
modernDOMAPIs.getDataAttribute(modernElement, 'userId');

modernDOMAPIs.addClass(modernElement, 'active');
modernDOMAPIs.toggleClass(modernElement, 'hidden');
modernDOMAPIs.removeClass(modernElement, 'active');

modernDOMAPIs.querySelector('.modern-box');
modernDOMAPIs.querySelectorAll('.modern-box');
modernDOMAPIs.closest(modernElement, 'div');
modernDOMAPIs.matches(modernElement, 'div');

// 📚 8. Best Practices Summary
console.log("\n📚 8. Best Practices Summary");
console.log("---------------------------");

console.log("1. Use Shadow DOM for component encapsulation");
console.log("2. Implement Web Components for reusable UI elements");
console.log("3. Use Intersection Observer for lazy loading and animations");
console.log("4. Monitor DOM mutations with Mutation Observer");
console.log("5. Track element resize with Resize Observer");
console.log("6. Optimize performance with batching and debouncing");
console.log("7. Use modern DOM APIs for better code readability");
console.log("8. Implement proper error handling for observers");
console.log("9. Clean up observers when components are destroyed");
console.log("10. Test advanced features across different browsers");

console.log("\n🎉 Lesson 6 Complete: Advanced DOM Techniques");
console.log("You now understand advanced DOM manipulation and modern web APIs!");
