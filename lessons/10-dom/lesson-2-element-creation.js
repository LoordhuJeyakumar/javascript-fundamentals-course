// Lesson 2: Element Creation and Modification
// Creating new elements and modifying existing ones

console.log("🎓 Lesson 2: Element Creation and Modification");
console.log("=============================================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. Creating New Elements
console.log("\n📚 1. Creating New Elements");
console.log("-------------------------");

// Simulate DOM element creation
class DOMElementCreator {
    constructor() {
        this.elements = new Map();
        this.elementCounter = 0;
    }
    
    createElement(tagName, options = {}) {
        const id = options.id || `element-${++this.elementCounter}`;
        const element = {
            id: id,
            tagName: tagName.toUpperCase(),
            className: options.className || '',
            textContent: options.textContent || '',
            innerHTML: options.innerHTML || '',
            attributes: options.attributes || {},
            children: [],
            parent: null,
            style: options.style || {}
        };
        
        this.elements.set(id, element);
        console.log(`Created ${tagName} element with id: ${id}`);
        return element;
    }
    
    createTextNode(text) {
        const textNode = {
            type: 'TEXT_NODE',
            textContent: text,
            parent: null
        };
        console.log(`Created text node: "${text}"`);
        return textNode;
    }
    
    createComment(comment) {
        const commentNode = {
            type: 'COMMENT_NODE',
            textContent: comment,
            parent: null
        };
        console.log(`Created comment node: "${comment}"`);
        return commentNode;
    }
}

const domCreator = new DOMElementCreator();

// Create different types of elements
const divElement = domCreator.createElement('div', {
    id: 'main-container',
    className: 'container',
    textContent: 'Hello World'
});

const paragraphElement = domCreator.createElement('p', {
    id: 'description',
    className: 'text',
    textContent: 'This is a paragraph element'
});

const buttonElement = domCreator.createElement('button', {
    id: 'submit-btn',
    className: 'btn btn-primary',
    textContent: 'Click Me'
});

const inputElement = domCreator.createElement('input', {
    id: 'username',
    className: 'form-control',
    attributes: {
        type: 'text',
        placeholder: 'Enter username'
    }
});

// Create text and comment nodes
const textNode = domCreator.createTextNode('This is a text node');
const commentNode = domCreator.createComment('This is a comment');

// 📚 2. Modifying Element Properties
console.log("\n📚 2. Modifying Element Properties");
console.log("---------------------------------");

class ElementModifier {
    constructor() {
        this.elements = new Map();
    }
    
    setTextContent(element, text) {
        element.textContent = text;
        console.log(`Set text content for ${element.tagName}: "${text}"`);
    }
    
    setInnerHTML(element, html) {
        element.innerHTML = html;
        console.log(`Set inner HTML for ${element.tagName}: "${html}"`);
    }
    
    setAttribute(element, name, value) {
        element.attributes[name] = value;
        console.log(`Set attribute ${name}="${value}" for ${element.tagName}`);
    }
    
    getAttribute(element, name) {
        const value = element.attributes[name];
        console.log(`Get attribute ${name} for ${element.tagName}: "${value}"`);
        return value;
    }
    
    removeAttribute(element, name) {
        delete element.attributes[name];
        console.log(`Removed attribute ${name} from ${element.tagName}`);
    }
    
    setClassName(element, className) {
        element.className = className;
        console.log(`Set class name for ${element.tagName}: "${className}"`);
    }
    
    addClass(element, className) {
        const classes = element.className.split(' ').filter(c => c);
        if (!classes.includes(className)) {
            classes.push(className);
            element.className = classes.join(' ');
            console.log(`Added class "${className}" to ${element.tagName}`);
        }
    }
    
    removeClass(element, className) {
        const classes = element.className.split(' ').filter(c => c);
        const filteredClasses = classes.filter(c => c !== className);
        element.className = filteredClasses.join(' ');
        console.log(`Removed class "${className}" from ${element.tagName}`);
    }
    
    toggleClass(element, className) {
        const classes = element.className.split(' ').filter(c => c);
        if (classes.includes(className)) {
            this.removeClass(element, className);
        } else {
            this.addClass(element, className);
        }
    }
    
    hasClass(element, className) {
        const classes = element.className.split(' ').filter(c => c);
        const hasClass = classes.includes(className);
        console.log(`${element.tagName} has class "${className}": ${hasClass}`);
        return hasClass;
    }
}

const elementModifier = new ElementModifier();

// Modify element properties
elementModifier.setTextContent(divElement, 'Modified content');
elementModifier.setInnerHTML(paragraphElement, '<strong>Bold text</strong>');
elementModifier.setAttribute(inputElement, 'value', 'john_doe');
elementModifier.setAttribute(buttonElement, 'disabled', 'true');

// Work with classes
elementModifier.addClass(divElement, 'highlighted');
elementModifier.addClass(buttonElement, 'active');
elementModifier.toggleClass(paragraphElement, 'hidden');
elementModifier.hasClass(divElement, 'highlighted');

// 📚 3. Adding and Removing Elements
console.log("\n📚 3. Adding and Removing Elements");
console.log("---------------------------------");

class ElementManager {
    constructor() {
        this.elements = new Map();
        this.parentChildRelations = new Map();
    }
    
    appendChild(parent, child) {
        if (!parent.children) {
            parent.children = [];
        }
        parent.children.push(child);
        child.parent = parent;
        this.parentChildRelations.set(child.id, parent.id);
        console.log(`Appended ${child.tagName} to ${parent.tagName}`);
    }
    
    prependChild(parent, child) {
        if (!parent.children) {
            parent.children = [];
        }
        parent.children.unshift(child);
        child.parent = parent;
        this.parentChildRelations.set(child.id, parent.id);
        console.log(`Prepended ${child.tagName} to ${parent.tagName}`);
    }
    
    insertBefore(newChild, referenceChild) {
        const parent = referenceChild.parent;
        if (parent && parent.children) {
            const index = parent.children.indexOf(referenceChild);
            parent.children.splice(index, 0, newChild);
            newChild.parent = parent;
            this.parentChildRelations.set(newChild.id, parent.id);
            console.log(`Inserted ${newChild.tagName} before ${referenceChild.tagName}`);
        }
    }
    
    insertAfter(newChild, referenceChild) {
        const parent = referenceChild.parent;
        if (parent && parent.children) {
            const index = parent.children.indexOf(referenceChild);
            parent.children.splice(index + 1, 0, newChild);
            newChild.parent = parent;
            this.parentChildRelations.set(newChild.id, parent.id);
            console.log(`Inserted ${newChild.tagName} after ${referenceChild.tagName}`);
        }
    }
    
    removeChild(parent, child) {
        if (parent.children) {
            const index = parent.children.indexOf(child);
            if (index > -1) {
                parent.children.splice(index, 1);
                child.parent = null;
                this.parentChildRelations.delete(child.id);
                console.log(`Removed ${child.tagName} from ${parent.tagName}`);
            }
        }
    }
    
    replaceChild(parent, newChild, oldChild) {
        if (parent.children) {
            const index = parent.children.indexOf(oldChild);
            if (index > -1) {
                parent.children[index] = newChild;
                oldChild.parent = null;
                newChild.parent = parent;
                this.parentChildRelations.delete(oldChild.id);
                this.parentChildRelations.set(newChild.id, parent.id);
                console.log(`Replaced ${oldChild.tagName} with ${newChild.tagName} in ${parent.tagName}`);
            }
        }
    }
    
    cloneNode(node, deep = false) {
        const cloned = {
            id: `${node.id}-clone`,
            tagName: node.tagName,
            className: node.className,
            textContent: node.textContent,
            innerHTML: node.innerHTML,
            attributes: { ...node.attributes },
            children: deep ? [...node.children] : [],
            parent: null,
            style: { ...node.style }
        };
        console.log(`Cloned ${node.tagName} (deep: ${deep})`);
        return cloned;
    }
}

const elementManager = new ElementManager();

// Create a parent container
const container = domCreator.createElement('div', {
    id: 'container',
    className: 'parent-container'
});

// Create child elements
const child1 = domCreator.createElement('span', { id: 'child1', textContent: 'Child 1' });
const child2 = domCreator.createElement('span', { id: 'child2', textContent: 'Child 2' });
const child3 = domCreator.createElement('span', { id: 'child3', textContent: 'Child 3' });

// Add children to container
elementManager.appendChild(container, child1);
elementManager.appendChild(container, child2);
elementManager.appendChild(container, child3);

// Insert new child
const newChild = domCreator.createElement('span', { id: 'new-child', textContent: 'New Child' });
elementManager.insertBefore(newChild, child2);

// Remove a child
elementManager.removeChild(container, child3);

// Clone a node
const clonedChild = elementManager.cloneNode(child1, true);

// 📚 4. Working with Attributes and Classes
console.log("\n📚 4. Working with Attributes and Classes");
console.log("--------------------------------------");

class AttributeManager {
    constructor() {
        this.elements = new Map();
    }
    
    setAttribute(element, name, value) {
        if (!element.attributes) {
            element.attributes = {};
        }
        element.attributes[name] = value;
        console.log(`Set attribute ${name}="${value}" on ${element.tagName}`);
    }
    
    getAttribute(element, name) {
        const value = element.attributes ? element.attributes[name] : null;
        console.log(`Get attribute ${name} from ${element.tagName}: "${value}"`);
        return value;
    }
    
    hasAttribute(element, name) {
        const hasAttr = element.attributes && element.attributes.hasOwnProperty(name);
        console.log(`${element.tagName} has attribute ${name}: ${hasAttr}`);
        return hasAttr;
    }
    
    removeAttribute(element, name) {
        if (element.attributes && element.attributes.hasOwnProperty(name)) {
            delete element.attributes[name];
            console.log(`Removed attribute ${name} from ${element.tagName}`);
        }
    }
    
    getAttributes(element) {
        const attrs = element.attributes || {};
        console.log(`All attributes of ${element.tagName}:`, attrs);
        return attrs;
    }
    
    setDataAttribute(element, name, value) {
        const dataName = `data-${name}`;
        this.setAttribute(element, dataName, value);
    }
    
    getDataAttribute(element, name) {
        const dataName = `data-${name}`;
        return this.getAttribute(element, dataName);
    }
}

const attributeManager = new AttributeManager();

// Create an element with various attributes
const linkElement = domCreator.createElement('a', {
    id: 'external-link',
    className: 'link external',
    attributes: {
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer'
    }
});

// Work with attributes
attributeManager.setAttribute(linkElement, 'title', 'External Link');
attributeManager.getAttribute(linkElement, 'href');
attributeManager.hasAttribute(linkElement, 'target');
attributeManager.setDataAttribute(linkElement, 'tracking', 'true');
attributeManager.getDataAttribute(linkElement, 'tracking');

// 📚 5. Element Styling
console.log("\n📚 5. Element Styling");
console.log("------------------");

class StyleManager {
    constructor() {
        this.elements = new Map();
    }
    
    setStyle(element, property, value) {
        if (!element.style) {
            element.style = {};
        }
        element.style[property] = value;
        console.log(`Set style ${property}: ${value} on ${element.tagName}`);
    }
    
    getStyle(element, property) {
        const value = element.style ? element.style[property] : '';
        console.log(`Get style ${property} from ${element.tagName}: "${value}"`);
        return value;
    }
    
    setStyles(element, styles) {
        if (!element.style) {
            element.style = {};
        }
        Object.assign(element.style, styles);
        console.log(`Set multiple styles on ${element.tagName}:`, styles);
    }
    
    removeStyle(element, property) {
        if (element.style && element.style.hasOwnProperty(property)) {
            delete element.style[property];
            console.log(`Removed style ${property} from ${element.tagName}`);
        }
    }
    
    getComputedStyle(element) {
        const styles = element.style || {};
        console.log(`Computed styles for ${element.tagName}:`, styles);
        return styles;
    }
}

const styleManager = new StyleManager();

// Create a styled element
const styledDiv = domCreator.createElement('div', {
    id: 'styled-div',
    className: 'custom-div'
});

// Apply styles
styleManager.setStyle(styledDiv, 'backgroundColor', 'lightblue');
styleManager.setStyle(styledDiv, 'padding', '20px');
styleManager.setStyle(styledDiv, 'border', '2px solid #333');
styleManager.setStyle(styledDiv, 'borderRadius', '10px');

// Set multiple styles at once
styleManager.setStyles(styledDiv, {
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'darkblue'
});

// Get computed styles
styleManager.getComputedStyle(styledDiv);

// 📚 6. Element Traversal
console.log("\n📚 6. Element Traversal");
console.log("--------------------");

class ElementTraverser {
    constructor() {
        this.elements = new Map();
    }
    
    getParent(element) {
        const parent = element.parent;
        console.log(`Parent of ${element.tagName}:`, parent ? parent.tagName : 'null');
        return parent;
    }
    
    getChildren(element) {
        const children = element.children || [];
        console.log(`Children of ${element.tagName}:`, children.map(c => c.tagName));
        return children;
    }
    
    getFirstChild(element) {
        const children = element.children || [];
        const firstChild = children[0] || null;
        console.log(`First child of ${element.tagName}:`, firstChild ? firstChild.tagName : 'null');
        return firstChild;
    }
    
    getLastChild(element) {
        const children = element.children || [];
        const lastChild = children[children.length - 1] || null;
        console.log(`Last child of ${element.tagName}:`, lastChild ? lastChild.tagName : 'null');
        return lastChild;
    }
    
    getNextSibling(element) {
        const parent = element.parent;
        if (parent && parent.children) {
            const index = parent.children.indexOf(element);
            const nextSibling = parent.children[index + 1] || null;
            console.log(`Next sibling of ${element.tagName}:`, nextSibling ? nextSibling.tagName : 'null');
            return nextSibling;
        }
        return null;
    }
    
    getPreviousSibling(element) {
        const parent = element.parent;
        if (parent && parent.children) {
            const index = parent.children.indexOf(element);
            const prevSibling = parent.children[index - 1] || null;
            console.log(`Previous sibling of ${element.tagName}:`, prevSibling ? prevSibling.tagName : 'null');
            return prevSibling;
        }
        return null;
    }
    
    findAncestor(element, tagName) {
        let current = element.parent;
        while (current) {
            if (current.tagName === tagName.toUpperCase()) {
                console.log(`Found ancestor ${tagName} for ${element.tagName}`);
                return current;
            }
            current = current.parent;
        }
        console.log(`No ancestor ${tagName} found for ${element.tagName}`);
        return null;
    }
}

const elementTraverser = new ElementTraverser();

// Create a nested structure
const grandparent = domCreator.createElement('div', { id: 'grandparent' });
const parent = domCreator.createElement('div', { id: 'parent' });
const child = domCreator.createElement('span', { id: 'child' });

elementManager.appendChild(grandparent, parent);
elementManager.appendChild(parent, child);

// Test traversal
elementTraverser.getParent(child);
elementTraverser.getChildren(parent);
elementTraverser.getFirstChild(grandparent);
elementTraverser.getLastChild(grandparent);
elementTraverser.findAncestor(child, 'div');

// 📚 7. Element Querying
console.log("\n📚 7. Element Querying");
console.log("--------------------");

class ElementQuery {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        // Create a mock DOM structure
        const html = domCreator.createElement('html', { id: 'html' });
        const body = domCreator.createElement('body', { id: 'body' });
        const header = domCreator.createElement('header', { id: 'header', className: 'main-header' });
        const main = domCreator.createElement('main', { id: 'main', className: 'content' });
        const footer = domCreator.createElement('footer', { id: 'footer', className: 'main-footer' });
        
        // Add some content to main
        const article = domCreator.createElement('article', { id: 'article', className: 'post' });
        const h1 = domCreator.createElement('h1', { id: 'title', className: 'post-title' });
        const p1 = domCreator.createElement('p', { id: 'intro', className: 'post-intro' });
        const p2 = domCreator.createElement('p', { id: 'content', className: 'post-content' });
        
        // Build the structure
        elementManager.appendChild(html, body);
        elementManager.appendChild(body, header);
        elementManager.appendChild(body, main);
        elementManager.appendChild(body, footer);
        elementManager.appendChild(main, article);
        elementManager.appendChild(article, h1);
        elementManager.appendChild(article, p1);
        elementManager.appendChild(article, p2);
        
        // Store elements
        this.elements.set('html', html);
        this.elements.set('body', body);
        this.elements.set('header', header);
        this.elements.set('main', main);
        this.elements.set('footer', footer);
        this.elements.set('article', article);
        this.elements.set('title', h1);
        this.elements.set('intro', p1);
        this.elements.set('content', p2);
    }
    
    getElementById(id) {
        const element = this.elements.get(id);
        console.log(`getElementById('${id}'):`, element ? element.tagName : 'null');
        return element;
    }
    
    getElementsByClassName(className) {
        const elements = Array.from(this.elements.values()).filter(el => 
            el.className && el.className.includes(className)
        );
        console.log(`getElementsByClassName('${className}'):`, elements.map(el => el.tagName));
        return elements;
    }
    
    getElementsByTagName(tagName) {
        const elements = Array.from(this.elements.values()).filter(el => 
            el.tagName === tagName.toUpperCase()
        );
        console.log(`getElementsByTagName('${tagName}'):`, elements.map(el => el.tagName));
        return elements;
    }
    
    querySelector(selector) {
        // Simple selector implementation
        if (selector.startsWith('#')) {
            return this.getElementById(selector.substring(1));
        } else if (selector.startsWith('.')) {
            const elements = this.getElementsByClassName(selector.substring(1));
            return elements[0] || null;
        } else {
            const elements = this.getElementsByTagName(selector);
            return elements[0] || null;
        }
    }
    
    querySelectorAll(selector) {
        // Simple selector implementation
        if (selector.startsWith('#')) {
            const element = this.getElementById(selector.substring(1));
            return element ? [element] : [];
        } else if (selector.startsWith('.')) {
            return this.getElementsByClassName(selector.substring(1));
        } else {
            return this.getElementsByTagName(selector);
        }
    }
}

const elementQuery = new ElementQuery();

// Test querying methods
elementQuery.getElementById('main');
elementQuery.getElementsByClassName('post');
elementQuery.getElementsByTagName('div');
elementQuery.querySelector('#title');
elementQuery.querySelector('.post-title');
elementQuery.querySelectorAll('p');

// 📚 8. Best Practices Summary
console.log("\n📚 8. Best Practices Summary");
console.log("---------------------------");

console.log("1. Always check if elements exist before manipulating them");
console.log("2. Use semantic HTML elements when possible");
console.log("3. Minimize DOM manipulations for better performance");
console.log("4. Use document fragments for multiple element creation");
console.log("5. Cache frequently accessed elements");
console.log("6. Use data attributes for custom data storage");
console.log("7. Prefer class manipulation over direct style changes");
console.log("8. Use event delegation for dynamic content");
console.log("9. Clean up event listeners when removing elements");
console.log("10. Test your DOM manipulation across different browsers");

console.log("\n🎉 Lesson 2 Complete: Element Creation and Modification");
console.log("You now understand how to create and modify DOM elements!");
