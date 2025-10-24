// Exercise 1: DOM Basics
// Practice basic DOM manipulation

console.log("💪 Exercise 1: DOM Basics");
console.log("========================");

// Exercise 1: Element Selection
console.log("\n1. Element Selection:");
// Select an element by ID
let elementById = document.getElementById('demo-box'); // Select the demo box
console.log("Element by ID:", elementById);

// Select elements by class name
let elementsByClass = document.getElementsByClassName('highlight'); // Select all highlighted elements
console.log("Elements by class:", elementsByClass);

// Select elements by tag name
let elementsByTag = document.getElementsByTagName('li'); // Select all list items
console.log("Elements by tag:", elementsByTag);

// Use querySelector to select an element
let querySelectorElement = document.querySelector('.demo-box'); // Select first element with class 'demo-box'
console.log("Query selector element:", querySelectorElement);

// Use querySelectorAll to select multiple elements
let querySelectorAllElements = document.querySelectorAll('p'); // Select all paragraphs
console.log("Query selector all elements:", querySelectorAllElements);

// Exercise 2: Element Properties
console.log("\n2. Element Properties:");
// Get the text content of an element
let textContent = elementById ? elementById.textContent : 'No element found'; // Get text content safely
console.log("Text content:", textContent);

// Get the HTML content of an element
let htmlContent = elementById ? elementById.innerHTML : 'No element found'; // Get HTML content safely
console.log("HTML content:", htmlContent);

// Get the tag name of an element
let tagName = elementById ? elementById.tagName : 'No element found'; // Get tag name safely
console.log("Tag name:", tagName);

// Get the class name of an element
let className = elementById ? elementById.className : 'No element found'; // Get class name safely
console.log("Class name:", className);

// Get the ID of an element
let elementId = elementById ? elementById.id : 'No element found'; // Get ID safely
console.log("Element ID:", elementId);

// Exercise 3: Element Modification
console.log("\n3. Element Modification:");
// Set the text content of an element
if (elementById) {
    elementById.textContent = 'Text content changed!'; // Set new text content
    console.log("Text content updated");
}

// Set the HTML content of an element
if (elementById) {
    elementById.innerHTML = '<strong>HTML content changed!</strong>'; // Set new HTML content
    console.log("HTML content updated");
}

// Set the class name of an element
if (elementById) {
    elementById.className = 'new-class'; // Set new class name
    console.log("Class name updated");
}

// Set the ID of an element
if (elementById) {
    elementById.id = 'new-id'; // Set new ID
    console.log("ID updated");
}

// Set an attribute of an element
if (elementById) {
    elementById.setAttribute('data-value', '123'); // Set custom attribute
    console.log("Attribute set");
}

console.log("Element modification completed");

// Exercise 4: Element Creation
console.log("\n4. Element Creation:");
// Create a new div element
let newDiv = document.createElement('div'); // Create new div element
newDiv.textContent = 'New div created!';
newDiv.className = 'created-div';

// Create a new paragraph element
let newParagraph = document.createElement('p'); // Create new paragraph element
newParagraph.textContent = 'New paragraph created!';
newParagraph.id = 'new-paragraph';

// Create a new button element
let newButton = document.createElement('button'); // Create new button element
newButton.textContent = 'Click me!';
newButton.className = 'created-button';

// Set properties of the new elements
newDiv.style.backgroundColor = 'lightblue';
newParagraph.style.color = 'green';
newButton.style.padding = '10px';

console.log("New div:", newDiv);
console.log("New paragraph:", newParagraph);
console.log("New button:", newButton);

// Exercise 5: Element Manipulation
console.log("\n5. Element Manipulation:");
// Add a class to an element
if (newDiv) {
    newDiv.classList.add('manipulated'); // Add new class
    console.log("Class added to div");
}

// Remove a class from an element
if (newDiv) {
    newDiv.classList.remove('created-div'); // Remove existing class
    console.log("Class removed from div");
}

// Toggle a class on an element
if (newButton) {
    newButton.classList.toggle('active'); // Toggle class
    console.log("Class toggled on button");
}

// Check if an element has a class
let hasClass = newDiv ? newDiv.classList.contains('manipulated') : false; // Check if class exists
console.log("Has class:", hasClass);

// Exercise 6: Element Styling
console.log("\n6. Element Styling:");
// Set the background color of an element
if (newDiv) {
    newDiv.style.backgroundColor = 'yellow'; // Set background color
    console.log("Background color set");
}

// Set the width of an element
if (newDiv) {
    newDiv.style.width = '200px'; // Set width
    console.log("Width set");
}

// Set the height of an element
if (newDiv) {
    newDiv.style.height = '100px'; // Set height
    console.log("Height set");
}

// Set multiple styles at once
if (newParagraph) {
    Object.assign(newParagraph.style, {
        color: 'red',
        fontSize: '18px',
        fontWeight: 'bold'
    }); // Set multiple styles
    console.log("Multiple styles set");
}

// Get the computed style of an element
let computedStyle = newDiv ? window.getComputedStyle(newDiv) : null; // Get computed styles
console.log("Computed style:", computedStyle);

// Exercise 7: Element Traversal
console.log("\n7. Element Traversal:");
// Get the parent element
let parentElement = elementById ? elementById.parentElement : null; // Get parent element
console.log("Parent element:", parentElement);

// Get the first child element
let firstChild = parentElement ? parentElement.firstElementChild : null; // Get first child
console.log("First child:", firstChild);

// Get the last child element
let lastChild = parentElement ? parentElement.lastElementChild : null; // Get last child
console.log("Last child:", lastChild);

// Get the next sibling element
let nextSibling = elementById ? elementById.nextElementSibling : null; // Get next sibling
console.log("Next sibling:", nextSibling);

// Get the previous sibling element
let previousSibling = elementById ? elementById.previousElementSibling : null; // Get previous sibling
console.log("Previous sibling:", previousSibling);

// Exercise 8: Element Events
console.log("\n8. Element Events:");
// Add a click event listener to an element
if (newButton) {
    newButton.addEventListener('click', function() {
        console.log('Button clicked!');
    }); // Add click event listener
    console.log("Click event listener added");
}

// Add a mouseover event listener to an element
if (newDiv) {
    newDiv.addEventListener('mouseover', function() {
        console.log('Mouse over div!');
    }); // Add mouseover event listener
    console.log("Mouseover event listener added");
}

// Add a keydown event listener to an element
if (newButton) {
    newButton.addEventListener('keydown', function(event) {
        console.log('Key pressed:', event.key);
    }); // Add keydown event listener
    console.log("Keydown event listener added");
}

// Remove an event listener from an element
if (newButton) {
    const clickHandler = function() {
        console.log('This will be removed');
    };
    newButton.addEventListener('click', clickHandler);
    newButton.removeEventListener('click', clickHandler); // Remove event listener
    console.log("Event listener removed");
}

console.log("Event listeners added");

// Exercise 9: Element Attributes
console.log("\n9. Element Attributes:");
// Get an attribute value
let attributeValue = newDiv ? newDiv.getAttribute('class') : null; // Get attribute value
console.log("Attribute value:", attributeValue);

// Set an attribute value
if (newDiv) {
    newDiv.setAttribute('title', 'This is a div'); // Set attribute
    console.log("Attribute set");
}

// Remove an attribute
if (newDiv) {
    newDiv.removeAttribute('title'); // Remove attribute
    console.log("Attribute removed");
}

// Check if an element has an attribute
let hasAttribute = newDiv ? newDiv.hasAttribute('class') : false; // Check if attribute exists
console.log("Has attribute:", hasAttribute);

// Get all attributes of an element
let allAttributes = newDiv ? newDiv.attributes : null; // Get all attributes
console.log("All attributes:", allAttributes);

// Exercise 10: Element Removal
console.log("\n10. Element Removal:");
// Remove an element from its parent (if it was added to DOM)
// Note: These elements were created but not added to DOM, so we'll demonstrate the concept
if (newDiv && newDiv.parentElement) {
    newDiv.parentElement.removeChild(newDiv); // Remove element
    console.log("Element removed from parent");
}

// Replace an element with another element (if both exist in DOM)
// Note: This is a demonstration - elements need to be in DOM to replace
if (newParagraph && newDiv && newParagraph.parentElement) {
    newParagraph.parentElement.replaceChild(newDiv, newParagraph); // Replace element
    console.log("Element replaced");
}

// Clone an element
let clonedElement = newDiv ? newDiv.cloneNode(true) : null; // Clone element (deep clone)
console.log("Cloned element:", clonedElement);

console.log("\n🎉 Exercise 1 Complete: DOM Basics");
console.log("You've practiced basic DOM manipulation techniques!");
