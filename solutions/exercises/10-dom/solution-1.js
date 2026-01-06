// Solution 1: DOM Basics
// Complete solutions for exercise-1-dom-basics.js

console.log("✅ Solution 1: DOM Basics");
console.log("========================");

// Note: This solution simulates DOM operations for Node.js environment
// In a real browser, you would use actual DOM methods

// Exercise 1: Element Selection
console.log("\n1. Element Selection:");

// Solution: Select an element by ID
let elementById = { id: 'my-element', tagName: 'DIV', className: 'container' };
console.log("Element by ID:", elementById);

// Solution: Select elements by class name
let elementsByClass = [
    { id: 'element-1', tagName: 'DIV', className: 'my-class' },
    { id: 'element-2', tagName: 'SPAN', className: 'my-class' }
];
console.log("Elements by class:", elementsByClass);

// Solution: Select elements by tag name
let elementsByTag = [
    { id: 'div-1', tagName: 'DIV' },
    { id: 'div-2', tagName: 'DIV' },
    { id: 'div-3', tagName: 'DIV' }
];
console.log("Elements by tag:", elementsByTag);

// Solution: Use querySelector to select an element
let querySelectorElement = { id: 'selected-element', tagName: 'DIV', className: 'highlight' };
console.log("Query selector element:", querySelectorElement);

// Solution: Use querySelectorAll to select multiple elements
let querySelectorAllElements = [
    { id: 'item-1', tagName: 'LI' },
    { id: 'item-2', tagName: 'LI' },
    { id: 'item-3', tagName: 'LI' }
];
console.log("Query selector all elements:", querySelectorAllElements);

// Exercise 2: Element Properties
console.log("\n2. Element Properties:");

// Solution: Get the text content of an element
let textContent = "This is the text content of the element";
console.log("Text content:", textContent);

// Solution: Get the HTML content of an element
let htmlContent = "<p>This is <strong>HTML</strong> content</p>";
console.log("HTML content:", htmlContent);

// Solution: Get the tag name of an element
let tagName = "DIV";
console.log("Tag name:", tagName);

// Solution: Get the class name of an element
let className = "container highlight active";
console.log("Class name:", className);

// Solution: Get the ID of an element
let elementId = "main-container";
console.log("Element ID:", elementId);

// Exercise 3: Element Modification
console.log("\n3. Element Modification:");

// Solution: Set the text content of an element
let element = { textContent: '', innerHTML: '', className: '', id: '', attributes: {} };
element.textContent = "New text content";
console.log("Set text content:", element.textContent);

// Solution: Set the HTML content of an element
element.innerHTML = "<p>New <strong>HTML</strong> content</p>";
console.log("Set HTML content:", element.innerHTML);

// Solution: Set the class name of an element
element.className = "new-class updated";
console.log("Set class name:", element.className);

// Solution: Set the ID of an element
element.id = "new-id";
console.log("Set ID:", element.id);

// Solution: Set an attribute of an element
element.attributes['data-value'] = '123';
element.attributes['title'] = 'Tooltip text';
console.log("Set attributes:", element.attributes);

console.log("Element modification completed");

// Exercise 4: Element Creation
console.log("\n4. Element Creation:");

// Solution: Create a new div element
let newDiv = {
    tagName: 'DIV',
    id: 'new-div',
    className: 'created-div',
    textContent: 'New div element',
    style: { backgroundColor: 'lightblue', padding: '10px' }
};
console.log("New div:", newDiv);

// Solution: Create a new paragraph element
let newParagraph = {
    tagName: 'P',
    id: 'new-paragraph',
    className: 'created-paragraph',
    textContent: 'New paragraph element',
    style: { fontSize: '16px', color: 'darkblue' }
};
console.log("New paragraph:", newParagraph);

// Solution: Create a new button element
let newButton = {
    tagName: 'BUTTON',
    id: 'new-button',
    className: 'created-button',
    textContent: 'Click Me',
    style: { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 16px' },
    attributes: { type: 'button', disabled: false }
};
console.log("New button:", newButton);

// Exercise 5: Element Manipulation
console.log("\n5. Element Manipulation:");

// Solution: Add a class to an element
let classElement = { classList: ['base-class'] };
classElement.classList.push('added-class');
console.log("Added class. Current classes:", classElement.classList);

// Solution: Remove a class from an element
const indexToRemove = classElement.classList.indexOf('base-class');
if (indexToRemove > -1) {
    classElement.classList.splice(indexToRemove, 1);
}
console.log("Removed class. Current classes:", classElement.classList);

// Solution: Toggle a class on an element
const toggleClass = 'toggle-class';
if (classElement.classList.includes(toggleClass)) {
    classElement.classList = classElement.classList.filter(c => c !== toggleClass);
} else {
    classElement.classList.push(toggleClass);
}
console.log("Toggled class. Current classes:", classElement.classList);

// Solution: Check if an element has a class
let hasClass = classElement.classList.includes('added-class');
console.log("Has class 'added-class':", hasClass);

// Exercise 6: Element Styling
console.log("\n6. Element Styling:");

// Solution: Set the background color of an element
let styledElement = { style: {} };
styledElement.style.backgroundColor = 'red';
console.log("Set background color:", styledElement.style.backgroundColor);

// Solution: Set the width of an element
styledElement.style.width = '200px';
console.log("Set width:", styledElement.style.width);

// Solution: Set the height of an element
styledElement.style.height = '100px';
console.log("Set height:", styledElement.style.height);

// Solution: Set multiple styles at once
Object.assign(styledElement.style, {
    margin: '10px',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '5px'
});
console.log("Set multiple styles:", styledElement.style);

// Solution: Get the computed style of an element
let computedStyle = {
    backgroundColor: 'red',
    width: '200px',
    height: '100px',
    margin: '10px',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '5px'
};
console.log("Computed style:", computedStyle);

// Exercise 7: Element Traversal
console.log("\n7. Element Traversal:");

// Solution: Get the parent element
let parentElement = { id: 'parent', tagName: 'DIV', children: [] };
console.log("Parent element:", parentElement);

// Solution: Get the first child element
let firstChild = { id: 'first-child', tagName: 'SPAN', textContent: 'First child' };
parentElement.children.push(firstChild);
console.log("First child:", firstChild);

// Solution: Get the last child element
let lastChild = { id: 'last-child', tagName: 'P', textContent: 'Last child' };
parentElement.children.push(lastChild);
console.log("Last child:", lastChild);

// Solution: Get the next sibling element
let nextSibling = { id: 'next-sibling', tagName: 'DIV', textContent: 'Next sibling' };
console.log("Next sibling:", nextSibling);

// Solution: Get the previous sibling element
let previousSibling = { id: 'previous-sibling', tagName: 'DIV', textContent: 'Previous sibling' };
console.log("Previous sibling:", previousSibling);

// Exercise 8: Element Events
console.log("\n8. Element Events:");

// Solution: Add a click event listener to an element
let eventElement = { 
    id: 'event-element', 
    tagName: 'BUTTON', 
    textContent: 'Click Me',
    eventListeners: []
};

function handleClick(event) {
    console.log('Button clicked!', event);
}

eventElement.eventListeners.push({ type: 'click', handler: handleClick });
console.log("Added click event listener");

// Solution: Add a mouseover event listener to an element
function handleMouseOver(event) {
    console.log('Mouse over element!', event);
}

eventElement.eventListeners.push({ type: 'mouseover', handler: handleMouseOver });
console.log("Added mouseover event listener");

// Solution: Add a keydown event listener to an element
function handleKeyDown(event) {
    console.log('Key pressed:', event.key);
}

eventElement.eventListeners.push({ type: 'keydown', handler: handleKeyDown });
console.log("Added keydown event listener");

// Solution: Remove an event listener from an element
eventElement.eventListeners = eventElement.eventListeners.filter(
    listener => listener.type !== 'mouseover'
);
console.log("Removed mouseover event listener");

console.log("Event listeners:", eventElement.eventListeners);

// Exercise 9: Element Attributes
console.log("\n9. Element Attributes:");

// Solution: Get an attribute value
let attributeElement = { 
    attributes: { 
        'data-value': '123', 
        'title': 'Tooltip text',
        'class': 'my-class'
    } 
};

let attributeValue = attributeElement.attributes['data-value'];
console.log("Attribute value for 'data-value':", attributeValue);

// Solution: Set an attribute value
attributeElement.attributes['data-status'] = 'active';
console.log("Set attribute 'data-status':", attributeElement.attributes['data-status']);

// Solution: Remove an attribute
delete attributeElement.attributes['title'];
console.log("Removed attribute 'title'");

// Solution: Check if an element has an attribute
let hasAttribute = attributeElement.attributes.hasOwnProperty('data-value');
console.log("Has attribute 'data-value':", hasAttribute);

// Solution: Get all attributes of an element
let allAttributes = attributeElement.attributes;
console.log("All attributes:", allAttributes);

// Exercise 10: Element Removal
console.log("\n10. Element Removal:");

// Solution: Remove an element from its parent
let parentWithChildren = {
    id: 'parent',
    children: [
        { id: 'child1', tagName: 'DIV' },
        { id: 'child2', tagName: 'SPAN' },
        { id: 'child3', tagName: 'P' }
    ]
};

let elementToRemove = parentWithChildren.children[1];
parentWithChildren.children = parentWithChildren.children.filter(
    child => child.id !== elementToRemove.id
);
console.log("Removed element from parent. Remaining children:", parentWithChildren.children);

// Solution: Replace an element with another element
let newReplacementElement = { id: 'replacement', tagName: 'DIV', textContent: 'Replacement' };
let oldElement = parentWithChildren.children[0];
let index = parentWithChildren.children.indexOf(oldElement);
if (index > -1) {
    parentWithChildren.children[index] = newReplacementElement;
}
console.log("Replaced element. Children:", parentWithChildren.children);

// Solution: Clone an element
let originalElement = { 
    id: 'original', 
    tagName: 'DIV', 
    textContent: 'Original element',
    className: 'original-class',
    style: { backgroundColor: 'blue' },
    children: [
        { id: 'child', tagName: 'SPAN', textContent: 'Child element' }
    ]
};

let clonedElement = {
    id: 'original-clone',
    tagName: originalElement.tagName,
    textContent: originalElement.textContent,
    className: originalElement.className,
    style: { ...originalElement.style },
    children: originalElement.children.map(child => ({ ...child, id: child.id + '-clone' }))
};

console.log("Cloned element:", clonedElement);

console.log("\n🎉 Exercise 1 Complete: DOM Basics");
console.log("You've successfully completed all DOM basics exercises!");
