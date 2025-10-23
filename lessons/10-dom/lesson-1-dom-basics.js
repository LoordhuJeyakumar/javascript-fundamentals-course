// Lesson 1: DOM Basics
// Understanding the DOM structure and basic manipulation

console.log("🎓 Lesson 1: DOM Basics");
console.log("======================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. Understanding the DOM Structure
console.log("\n📚 1. Understanding the DOM Structure");
console.log("-----------------------------------");

// In a browser, the DOM represents the HTML document as a tree structure
console.log("DOM Tree Structure:");
console.log("- Document (root)");
console.log("  - HTML element");
console.log("    - HEAD element");
console.log("      - TITLE element");
console.log("      - META elements");
console.log("    - BODY element");
console.log("      - DIV elements");
console.log("      - P elements");
console.log("      - Other elements...");

// 📚 2. Element Selection Methods
console.log("\n📚 2. Element Selection Methods");
console.log("------------------------------");

// Simulate DOM selection methods
class DOMSimulator {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        // Mock HTML structure
        this.elements.set('header', {
            id: 'header',
            tagName: 'HEADER',
            className: 'main-header',
            textContent: 'Welcome to our website',
            children: []
        });
        
        this.elements.set('main-content', {
            id: 'main-content',
            tagName: 'MAIN',
            className: 'content',
            textContent: 'This is the main content area',
            children: []
        });
        
        this.elements.set('footer', {
            id: 'footer',
            tagName: 'FOOTER',
            className: 'site-footer',
            textContent: '© 2024 Our Website',
            children: []
        });
    }
    
    // Simulate getElementById
    getElementById(id) {
        const element = this.elements.get(id);
        if (element) {
            console.log(`Found element with ID '${id}':`, element);
            return element;
        }
        console.log(`No element found with ID '${id}'`);
        return null;
    }
    
    // Simulate querySelector
    querySelector(selector) {
        console.log(`Searching for selector '${selector}'`);
        
        if (selector.startsWith('#')) {
            const id = selector.substring(1);
            return this.getElementById(id);
        } else if (selector.startsWith('.')) {
            const className = selector.substring(1);
            for (let [id, element] of this.elements) {
                if (element.className === className) {
                    console.log(`Found element with class '${className}':`, element);
                    return element;
                }
            }
            console.log(`No element found with class '${className}'`);
            return null;
        } else {
            for (let [id, element] of this.elements) {
                if (element.tagName.toLowerCase() === selector.toLowerCase()) {
                    console.log(`Found element with tag '${selector}':`, element);
                    return element;
                }
            }
            console.log(`No element found with tag '${selector}'`);
            return null;
        }
    }
    
    // Simulate querySelectorAll
    querySelectorAll(selector) {
        console.log(`Searching for all elements matching '${selector}'`);
        const results = [];
        
        for (let [id, element] of this.elements) {
            if (selector.startsWith('#')) {
                const id = selector.substring(1);
                if (element.id === id) {
                    results.push(element);
                }
            } else if (selector.startsWith('.')) {
                const className = selector.substring(1);
                if (element.className === className) {
                    results.push(element);
                }
            } else {
                if (element.tagName.toLowerCase() === selector.toLowerCase()) {
                    results.push(element);
                }
            }
        }
        
        console.log(`Found ${results.length} elements:`, results);
        return results;
    }
}

// Create DOM simulator
let dom = new DOMSimulator();

console.log("Element selection examples:");
dom.getElementById('header');
dom.getElementById('non-existent');
dom.querySelector('#main-content');
dom.querySelector('.site-footer');
dom.querySelector('header');
dom.querySelectorAll('.content');

// 📚 3. Element Properties and Methods
console.log("\n📚 3. Element Properties and Methods");
console.log("----------------------------------");

// Simulate element properties and methods
class Element {
    constructor(tagName, id = '', className = '', textContent = '') {
        this.tagName = tagName.toUpperCase();
        this.id = id;
        this.className = className;
        this.textContent = textContent;
        this.innerHTML = textContent;
        this.attributes = new Map();
        this.children = [];
        this.parentElement = null;
        // Minimal classList wrapper to mimic browser Element.classList
        this.classList = {
            contains: (c) => this.hasClass(c),
            add: (c) => this.addClass(c),
            remove: (c) => this.removeClass(c)
        };
        // Minimal dataset support
        this.dataset = {};
    }
    
    // Get attribute value
    getAttribute(name) {
        return this.attributes.get(name) || null;
    }
    
    // Set attribute value
    setAttribute(name, value) {
        this.attributes.set(name, value);
        console.log(`Set attribute '${name}' to '${value}'`);
    }
    
    // Remove attribute
    removeAttribute(name) {
        this.attributes.delete(name);
        console.log(`Removed attribute '${name}'`);
    }
    
    // Check if element has attribute
    hasAttribute(name) {
        return this.attributes.has(name);
    }
    
    // Add class
    addClass(className) {
        if (!this.className.includes(className)) {
            this.className += (this.className ? ' ' : '') + className;
            console.log(`Added class '${className}'`);
        }
    }
    
    // Remove class
    removeClass(className) {
        this.className = this.className.replace(new RegExp(`\\b${className}\\b`, 'g'), '').trim();
        console.log(`Removed class '${className}'`);
    }
    
    // Toggle class
    toggleClass(className) {
        if (this.className.includes(className)) {
            this.removeClass(className);
        } else {
            this.addClass(className);
        }
    }
    
    // Check if element has class
    hasClass(className) {
        return this.className.includes(className);
    }
    
    // Append child element
    appendChild(child) {
        child.parentElement = this;
        this.children.push(child);
        console.log(`Appended child element: ${child.tagName}`);
    }
    
    // Remove child element
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            child.parentElement = null;
            console.log(`Removed child element: ${child.tagName}`);
        }
    }
    
    // Get element info
    getInfo() {
        return {
            tagName: this.tagName,
            id: this.id,
            className: this.className,
            textContent: this.textContent,
            attributes: Object.fromEntries(this.attributes),
            childrenCount: this.children.length,
            parentElement: this.parentElement ? this.parentElement.tagName : null
        };
    }
}

// Create sample elements
let header = new Element('header', 'main-header', 'site-header', 'Welcome to our site');
let main = new Element('main', 'content', 'main-content', 'This is the main content');
let footer = new Element('footer', 'site-footer', 'footer', '© 2024 Our Website');

console.log("Element properties and methods:");
console.log("Header info:", header.getInfo());

// Set attributes
header.setAttribute('role', 'banner');
header.setAttribute('aria-label', 'Main site header');
main.setAttribute('role', 'main');
footer.setAttribute('role', 'contentinfo');

// Class manipulation
header.addClass('sticky');
header.addClass('dark-theme');
header.toggleClass('dark-theme');
console.log("Header has 'sticky' class:", header.hasClass('sticky'));
console.log("Header has 'dark-theme' class:", header.hasClass('dark-theme'));

// 📚 4. DOM Traversal Techniques
console.log("\n📚 4. DOM Traversal Techniques");
console.log("-----------------------------");

// Create a more complex DOM structure
let body = new Element('body', 'page-body', 'body', '');
let container = new Element('div', 'container', 'container', '');
let nav = new Element('nav', 'navigation', 'nav', '');
let navList = new Element('ul', 'nav-list', 'nav-list', '');
let navItem1 = new Element('li', 'nav-item-1', 'nav-item', 'Home');
let navItem2 = new Element('li', 'nav-item-2', 'nav-item', 'About');
let navItem3 = new Element('li', 'nav-item-3', 'nav-item', 'Contact');

// Build the hierarchy
body.appendChild(container);
container.appendChild(header);
container.appendChild(main);
container.appendChild(footer);
container.appendChild(nav);
nav.appendChild(navList);
navList.appendChild(navItem1);
navList.appendChild(navItem2);
navList.appendChild(navItem3);

console.log("DOM traversal examples:");

// Parent traversal
console.log("Nav item 1 parent:", navItem1.parentElement ? navItem1.parentElement.tagName : 'None');
console.log("Nav list parent:", navList.parentElement ? navList.parentElement.tagName : 'None');

// Child traversal
console.log("Container children count:", container.children.length);
console.log("Nav list children count:", navList.children.length);

// Sibling traversal (simulate)
function getNextSibling(element) {
    if (!element.parentElement) return null;
    const siblings = element.parentElement.children;
    const index = siblings.indexOf(element);
    return index < siblings.length - 1 ? siblings[index + 1] : null;
}

function getPreviousSibling(element) {
    if (!element.parentElement) return null;
    const siblings = element.parentElement.children;
    const index = siblings.indexOf(element);
    return index > 0 ? siblings[index - 1] : null;
}

console.log("Nav item 1 next sibling:", getNextSibling(navItem1) ? getNextSibling(navItem1).tagName : 'None');
console.log("Nav item 2 previous sibling:", getPreviousSibling(navItem2) ? getPreviousSibling(navItem2).tagName : 'None');

// 📚 5. Node Types and Relationships
console.log("\n📚 5. Node Types and Relationships");
console.log("----------------------------------");

// Simulate different node types
class Node {
    constructor(nodeType, nodeName, nodeValue = '') {
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.nodeValue = nodeValue;
        this.parentNode = null;
        this.childNodes = [];
    }
    
    // Node type constants
    static get ELEMENT_NODE() { return 1; }
    static get TEXT_NODE() { return 3; }
    static get COMMENT_NODE() { return 8; }
    static get DOCUMENT_NODE() { return 9; }
    
    // Add child node
    appendChild(child) {
        child.parentNode = this;
        this.childNodes.push(child);
    }
    
    // Get node info
    getInfo() {
        return {
            nodeType: this.nodeType,
            nodeName: this.nodeName,
            nodeValue: this.nodeValue,
            parentNode: this.parentNode ? this.parentNode.nodeName : null,
            childNodesCount: this.childNodes.length
        };
    }
}

// Create different node types
let documentNode = new Node(Node.DOCUMENT_NODE, '#document');
let htmlElement = new Node(Node.ELEMENT_NODE, 'HTML');
let headElement = new Node(Node.ELEMENT_NODE, 'HEAD');
let titleElement = new Node(Node.ELEMENT_NODE, 'TITLE');
let titleText = new Node(Node.TEXT_NODE, '#text', 'My Web Page');
let bodyElement = new Node(Node.ELEMENT_NODE, 'BODY');
let comment = new Node(Node.COMMENT_NODE, '#comment', 'This is a comment');

// Build the hierarchy
documentNode.appendChild(htmlElement);
htmlElement.appendChild(headElement);
htmlElement.appendChild(bodyElement);
headElement.appendChild(titleElement);
titleElement.appendChild(titleText);
bodyElement.appendChild(comment);

console.log("Node types and relationships:");
console.log("Document node:", documentNode.getInfo());
console.log("HTML element:", htmlElement.getInfo());
console.log("Title text node:", titleText.getInfo());
console.log("Comment node:", comment.getInfo());

// 📚 6. Practical Example: DOM Inspector
console.log("\n📚 6. Practical Example: DOM Inspector");
console.log("------------------------------------");

class DOMInspector {
    constructor() {
        this.elements = [];
    }
    
    // Add element to inspector
    addElement(element) {
        this.elements.push(element);
    }
    
    // Get all elements
    getAllElements() {
        return this.elements;
    }
    
    // Get elements by tag name
    getElementsByTagName(tagName) {
        return this.elements.filter(el => el.tagName.toLowerCase() === tagName.toLowerCase());
    }
    
    // Get elements by class name
    getElementsByClassName(className) {
        return this.elements.filter(el => el.hasClass(className));
    }
    
    // Get element by ID
    getElementById(id) {
        return this.elements.find(el => el.id === id);
    }
    
    // Get all text content
    getAllTextContent() {
        return this.elements.map(el => el.textContent).join(' ');
    }
    
    // Get element hierarchy
    getElementHierarchy(element) {
        const hierarchy = [];
        let current = element;
        
        while (current) {
            hierarchy.unshift(current.tagName);
            current = current.parentElement;
        }
        
        return hierarchy.join(' > ');
    }
    
    // Print DOM structure
    printDOMStructure() {
        console.log("DOM Structure:");
        this.elements.forEach((element, index) => {
            console.log(`${index + 1}. ${element.tagName} (ID: ${element.id}, Class: ${element.className})`);
            console.log(`   Text: "${element.textContent}"`);
            console.log(`   Hierarchy: ${this.getElementHierarchy(element)}`);
            console.log(`   Children: ${element.children.length}`);
            console.log("");
        });
    }
}

// Create DOM inspector and add elements
let inspector = new DOMInspector();
inspector.addElement(header);
inspector.addElement(main);
inspector.addElement(footer);
inspector.addElement(nav);
inspector.addElement(navList);
inspector.addElement(navItem1);
inspector.addElement(navItem2);
inspector.addElement(navItem3);

console.log("DOM Inspector examples:");
console.log("All elements count:", inspector.getAllElements().length);
console.log("Header elements:", inspector.getElementsByTagName('header').length);
console.log("Elements with 'nav-item' class:", inspector.getElementsByClassName('nav-item').length);
console.log("Element with ID 'main-header':", inspector.getElementById('main-header') ? 'Found' : 'Not found');
console.log("All text content:", inspector.getAllTextContent());

inspector.printDOMStructure();

// 📚 7. Common DOM Patterns
console.log("\n📚 7. Common DOM Patterns");
console.log("------------------------");

// Pattern 1: Safe element selection
function safeGetElementById(id) {
    try {
        const element = document.getElementById ? document.getElementById(id) : null;
        if (!element) {
            console.log(`Element with ID '${id}' not found`);
            return null;
        }
        return element;
    } catch (error) {
        console.log(`Error selecting element with ID '${id}':`, error.message);
        return null;
    }
}

// Pattern 2: Element existence check
function elementExists(selector) {
    try {
        const element = document.querySelector ? document.querySelector(selector) : null;
        return element !== null;
    } catch (error) {
        console.log(`Error checking element existence:`, error.message);
        return false;
    }
}

// Pattern 3: Batch element operations
function batchElementOperation(elements, operation) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    
    elements.forEach((element, index) => {
        try {
            operation(element, index);
        } catch (error) {
            console.log(`Error processing element ${index}:`, error.message);
        }
    });
}

// Pattern 4: DOM ready check
function domReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

console.log("Common DOM patterns:");
console.log("- Safe element selection");
console.log("- Element existence checking");
console.log("- Batch element operations");
console.log("- DOM ready state handling");

// 📚 8. Browser Compatibility
console.log("\n📚 8. Browser Compatibility");
console.log("--------------------------");

// Check for modern DOM methods
function checkDOMSupport() {
    // Avoid referencing `document` directly in non-browser environments (Node)
    const hasDocument = typeof document !== 'undefined' && document;
    const support = {
        querySelector: hasDocument ? typeof document.querySelector === 'function' : false,
        querySelectorAll: hasDocument ? typeof document.querySelectorAll === 'function' : false,
        addEventListener: hasDocument ? typeof document.addEventListener === 'function' : false,
        classList: hasDocument ? typeof document.createElement('div').classList === 'object' : false,
        dataset: hasDocument ? typeof document.createElement('div').dataset === 'object' : false
    };
    
    console.log("DOM method support:");
    Object.entries(support).forEach(([method, supported]) => {
        console.log(`${method}: ${supported ? 'Supported' : 'Not supported'}`);
    });
    
    return support;
}

// Check support (simulated)
console.log("Browser compatibility check:");
checkDOMSupport();

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- The DOM represents HTML as a tree structure");
console.log("- Use appropriate selection methods for different needs");
console.log("- Elements have properties, methods, and relationships");
console.log("- DOM traversal follows parent-child-sibling patterns");
console.log("- Different node types serve different purposes");
console.log("- Always check for element existence before manipulation");
console.log("- Use safe patterns for cross-browser compatibility");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice element selection with different methods");
console.log("2. Experiment with element properties and methods");
console.log("3. Try DOM traversal techniques");
console.log("4. Build simple DOM inspection tools");
console.log("5. Practice common DOM patterns");
