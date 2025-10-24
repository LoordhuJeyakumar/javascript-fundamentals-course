# Lesson 1B: Basic DOM Manipulation

## 🎯 **Learning Objectives**
- Create new DOM elements programmatically
- Modify element content and properties
- Add and remove CSS classes
- Set element attributes

## ⏱️ **Duration**: 30 minutes

## 📚 **Prerequisites**
- Completion of Lesson 1A: DOM Selection
- Understanding of basic element selection

## 🔧 **Key Concepts**

### 1. Element Creation
```javascript
// Create new elements
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const newButton = document.createElement('button');
```

### 2. Content Modification
```javascript
// Text content (safe - no HTML)
element.textContent = 'New text content';

// HTML content (powerful but dangerous)
element.innerHTML = '<strong>Bold text</strong>';

// Get content
const text = element.textContent;
const html = element.innerHTML;
```

### 3. Class Management
```javascript
// Add class
element.classList.add('new-class');

// Remove class
element.classList.remove('old-class');

// Toggle class
element.classList.toggle('active');

// Check if class exists
const hasClass = element.classList.contains('my-class');
```

### 4. Attribute Management
```javascript
// Set attribute
element.setAttribute('id', 'new-id');
element.setAttribute('data-value', '123');

// Get attribute
const id = element.getAttribute('id');

// Remove attribute
element.removeAttribute('data-value');
```

## 🛠️ **Hands-on Practice**

### Exercise 1: Create Dynamic List
```javascript
function addListItem(text) {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('list-item');
    
    // Add to existing list
    const list = document.getElementById('my-list');
    list.appendChild(li);
}
```

### Exercise 2: Toggle Element Visibility
```javascript
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden');
    }
}
```

## ⚠️ **Common Mistakes**

### 1. innerHTML Security Risk
```javascript
// ❌ Dangerous - can execute malicious code
element.innerHTML = userInput; // If userInput = "<script>alert('hack')</script>"

// ✅ Safe - treats as text
element.textContent = userInput;
```

### 2. Forgetting to Append Elements
```javascript
// ❌ Wrong - element exists but isn't visible
const newDiv = document.createElement('div');

// ✅ Correct - add to DOM
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
```

## 🧪 **Quick Quiz**

1. What's the difference between `textContent` and `innerHTML`?
2. How do you safely add user input to the DOM?
3. What happens if you create an element but don't append it?

## 📝 **Next Steps**
- Complete manipulation exercises
- Move to Lesson 1C: Introduction to Events
- Practice creating interactive elements

## 🔗 **Resources**
- [MDN: Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [MDN: Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

