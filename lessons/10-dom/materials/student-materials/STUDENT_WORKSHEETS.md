# 📝 Student Worksheets - DOM Learning Series

## 🎯 How to Use These Worksheets

These worksheets are designed to help you practice DOM concepts step by step. Each worksheet includes:
- **Clear instructions**
- **Code templates**
- **Practice exercises**
- **Self-assessment questions**

**Instructions:**
1. Read each section carefully
2. Complete the exercises in order
3. Test your code in a browser
4. Check your answers with the provided solutions
5. Ask questions if you get stuck

---

## 📚 Worksheet 1: DOM Basics

### **Part A: Understanding the DOM**

**Question 1:** What is the DOM?
- A) A programming language
- B) A way to represent HTML documents as objects
- C) A CSS framework
- D) A JavaScript library

**Answer:** B) A way to represent HTML documents as objects

**Question 2:** Which of the following is NOT a DOM method?
- A) getElementById()
- B) querySelector()
- C) createElement()
- D) getElementsByTagName()

**Answer:** C) createElement() (This is for creating elements, not selecting them)

### **Part B: Element Selection Practice**

**Exercise 1:** Complete the code to find elements

```html
<!DOCTYPE html>
<html>
<head>
    <title>Practice</title>
</head>
<body>
    <h1 id="title">Welcome!</h1>
    <p class="intro">This is a paragraph.</p>
    <button id="btn">Click me</button>
    <div class="container">
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </div>
</body>
</html>
```

```javascript
// Find the title element by ID
let title = document.getElementById('title');

// Find all paragraphs by class
let introParagraphs = document.getElementsByClassName('intro');

// Find the button by ID
let button = document.getElementById('btn');

// Find all paragraphs by tag
let allParagraphs = document.getElementsByTagName('p');

// Find the first paragraph using querySelector
let firstParagraph = document.querySelector('p');

// Find all paragraphs using querySelectorAll
let allParagraphsModern = document.querySelectorAll('p');
```

**Exercise 2:** Change element content

```javascript
// Change the title text
title.textContent = 'Hello World!';

// Change the button text
button.textContent = 'Click Me!';

// Change the first paragraph to HTML
firstParagraph.innerHTML = '<strong>This is bold text!</strong>';
```

### **Part C: Self-Assessment**

**Check your understanding:**
1. Can you find elements using different methods? ✅/❌
2. Can you change text content? ✅/❌
3. Can you change HTML content? ✅/❌
4. Do you understand the difference between textContent and innerHTML? ✅/❌

---

## 📚 Worksheet 2: Element Creation & Modification

### **Part A: Creating Elements**

**Exercise 1:** Create a new paragraph element

```javascript
// Create a new paragraph
let newParagraph = document.createElement('p');

// Set the text content
newParagraph.textContent = 'I am a new paragraph!';

// Set an ID
newParagraph.id = 'new-paragraph';

// Set a class
newParagraph.className = 'highlight';

// Add to the page
document.body.appendChild(newParagraph);
```

**Exercise 2:** Create a button with styling

```javascript
// Create a new button
let newButton = document.createElement('button');

// Set the text
newButton.textContent = 'Click Me!';

// Set styling
newButton.style.backgroundColor = 'blue';
newButton.style.color = 'white';
newButton.style.padding = '10px';
newButton.style.border = 'none';
newButton.style.borderRadius = '5px';

// Add to the page
document.body.appendChild(newButton);
```

### **Part B: Working with Classes**

**Exercise 3:** Use classList methods

```javascript
// Add a class
newParagraph.classList.add('important');

// Remove a class
newParagraph.classList.remove('highlight');

// Toggle a class
newParagraph.classList.toggle('active');

// Check if has a class
if (newParagraph.classList.contains('important')) {
    console.log('Paragraph has important class');
}
```

### **Part C: Self-Assessment**

**Check your understanding:**
1. Can you create new elements? ✅/❌
2. Can you add elements to the page? ✅/❌
3. Can you work with CSS classes? ✅/❌
4. Can you style elements dynamically? ✅/❌

---

## 📚 Worksheet 3: Event Handling

### **Part A: Basic Event Listeners**

**Exercise 1:** Add a click event to a button

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Practice</title>
</head>
<body>
    <button id="click-btn">Click Me!</button>
    <div id="output">Click the button to see a message</div>
</body>
</html>
```

```javascript
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Find elements
    let button = document.getElementById('click-btn');
    let output = document.getElementById('output');
    
    // Add click event
    button.addEventListener('click', function() {
        output.textContent = 'Button was clicked!';
        output.style.color = 'green';
    });
});
```

**Exercise 2:** Handle different event types

```javascript
// Mouse events
button.addEventListener('mouseover', function() {
    console.log('Mouse over button');
});

button.addEventListener('mouseout', function() {
    console.log('Mouse left button');
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});
```

### **Part B: Event Delegation**

**Exercise 3:** Use event delegation for dynamic content

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Delegation</title>
</head>
<body>
    <button id="add-btn">Add Item</button>
    <ul id="item-list">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
    </ul>
</body>
</html>
```

```javascript
// Add new items
let addButton = document.getElementById('add-btn');
let itemList = document.getElementById('item-list');
let itemCount = 2;

addButton.addEventListener('click', function() {
    itemCount++;
    let newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    newItem.className = 'item';
    itemList.appendChild(newItem);
});

// Use event delegation to handle clicks on all items
itemList.addEventListener('click', function(event) {
    if (event.target.classList.contains('item')) {
        event.target.style.textDecoration = 'line-through';
        event.target.style.color = 'gray';
    }
});
```

### **Part C: Self-Assessment**

**Check your understanding:**
1. Can you add event listeners? ✅/❌
2. Can you handle different event types? ✅/❌
3. Do you understand event delegation? ✅/❌
4. Can you use event objects? ✅/❌

---

## 📚 Worksheet 4: Forms & User Input

### **Part A: Form Handling**

**Exercise 1:** Handle form submission

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Practice</title>
</head>
<body>
    <form id="contact-form">
        <input type="text" id="name" placeholder="Your name" required>
        <input type="email" id="email" placeholder="Your email" required>
        <textarea id="message" placeholder="Your message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
    <div id="form-output"></div>
</body>
</html>
```

```javascript
// Handle form submission
let form = document.getElementById('contact-form');
let output = document.getElementById('form-output');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Display form data
    output.innerHTML = `
        <h3>Form Submitted!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    
    // Clear form
    form.reset();
});
```

### **Part B: Input Validation**

**Exercise 2:** Real-time validation

```javascript
// Get form elements
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');

// Name validation
nameInput.addEventListener('input', function() {
    let name = this.value;
    if (name.length < 2) {
        this.style.borderColor = 'red';
        this.setAttribute('title', 'Name must be at least 2 characters');
    } else {
        this.style.borderColor = 'green';
        this.removeAttribute('title');
    }
});

// Email validation
emailInput.addEventListener('input', function() {
    let email = this.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
        this.style.borderColor = 'green';
        this.removeAttribute('title');
    } else {
        this.style.borderColor = 'red';
        this.setAttribute('title', 'Please enter a valid email');
    }
});
```

### **Part C: Self-Assessment**

**Check your understanding:**
1. Can you handle form submission? ✅/❌
2. Can you validate form inputs? ✅/❌
3. Can you prevent default form behavior? ✅/❌
4. Can you work with form data? ✅/❌

---

## 📚 Worksheet 5: Styling & Animation

### **Part A: Dynamic Styling**

**Exercise 1:** Change styles dynamically

```html
<!DOCTYPE html>
<html>
<head>
    <title>Styling Practice</title>
</head>
<body>
    <div id="style-box">Hover over me!</div>
    <button id="color-btn">Change Color</button>
    <button id="size-btn">Change Size</button>
    <button id="reset-btn">Reset</button>
</body>
</html>
```

```javascript
// Get elements
let styleBox = document.getElementById('style-box');
let colorBtn = document.getElementById('color-btn');
let sizeBtn = document.getElementById('size-btn');
let resetBtn = document.getElementById('reset-btn');

// Change color
colorBtn.addEventListener('click', function() {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    styleBox.style.backgroundColor = randomColor;
});

// Change size
sizeBtn.addEventListener('click', function() {
    let sizes = ['100px', '150px', '200px', '250px'];
    let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    styleBox.style.width = randomSize;
    styleBox.style.height = randomSize;
});

// Reset styles
resetBtn.addEventListener('click', function() {
    styleBox.style.backgroundColor = '';
    styleBox.style.width = '';
    styleBox.style.height = '';
});
```

### **Part B: CSS Classes**

**Exercise 2:** Use CSS classes for styling

```css
/* Add this CSS to your HTML */
.highlight {
    background-color: yellow;
    border: 2px solid orange;
    padding: 10px;
}

.large {
    font-size: 24px;
    font-weight: bold;
}

.centered {
    text-align: center;
    margin: 20px auto;
}
```

```javascript
// Toggle CSS classes
let highlightBtn = document.createElement('button');
highlightBtn.textContent = 'Toggle Highlight';
highlightBtn.addEventListener('click', function() {
    styleBox.classList.toggle('highlight');
});

let largeBtn = document.createElement('button');
largeBtn.textContent = 'Toggle Large';
largeBtn.addEventListener('click', function() {
    styleBox.classList.toggle('large');
});

// Add buttons to page
document.body.appendChild(highlightBtn);
document.body.appendChild(largeBtn);
```

### **Part C: Self-Assessment**

**Check your understanding:**
1. Can you change styles dynamically? ✅/❌
2. Can you work with CSS classes? ✅/❌
3. Can you create animations? ✅/❌
4. Can you handle hover effects? ✅/❌

---

## 🎯 Final Project: Build a Complete Application

### **Project: Interactive Todo List**

**Requirements:**
1. Add new todos
2. Mark todos as complete
3. Delete todos
4. Filter todos (all, active, completed)
5. Clear completed todos
6. Save todos to localStorage

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <style>
        .todo-item {
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
        .filters {
            margin: 20px 0;
        }
        .filters button {
            margin: 0 5px;
            padding: 5px 10px;
        }
        .active {
            background-color: #007bff;
            color: white;
        }
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <input type="text" id="todo-input" placeholder="Add a new todo...">
    <button id="add-btn">Add Todo</button>
    
    <div class="filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="active">Active</button>
        <button class="filter-btn" data-filter="completed">Completed</button>
        <button id="clear-completed">Clear Completed</button>
    </div>
    
    <ul id="todo-list"></ul>
    
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript Template:**
```javascript
// Your code here - implement all the functionality!
```

---

## 🎉 Congratulations!

You've completed all the DOM worksheets! You now have:
- ✅ Understanding of DOM basics
- ✅ Skills in element creation and modification
- ✅ Knowledge of event handling
- ✅ Experience with forms and validation
- ✅ Ability to create dynamic styling
- ✅ A complete project portfolio

**Keep practicing and building amazing web applications! 🌟**
