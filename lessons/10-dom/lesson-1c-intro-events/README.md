# Lesson 1C: Introduction to Events

## 🎯 **Learning Objectives**
- Understand what DOM events are
- Add event listeners to elements
- Handle basic click events
- Remove event listeners properly

## ⏱️ **Duration**: 30 minutes

## 📚 **Prerequisites**
- Completion of Lesson 1A: DOM Selection
- Completion of Lesson 1B: DOM Manipulation
- Understanding of functions in JavaScript

## 🎪 **Key Concepts**

### 1. What Are Events?
Events are actions that happen in the browser:
- **User actions**: click, hover, type, scroll
- **Browser actions**: page load, resize
- **Custom actions**: your code can create events

### 2. Adding Event Listeners
```javascript
// Basic event listener
element.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Using arrow function
element.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Named function
function handleClick() {
    console.log('Button clicked!');
}
element.addEventListener('click', handleClick);
```

### 3. Common Event Types
```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);

// Keyboard events
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);

// Form events
element.addEventListener('submit', handler);
element.addEventListener('change', handler);
```

### 4. Event Object
```javascript
element.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Mouse position:', event.clientX, event.clientY);
});
```

## 🛠️ **Hands-on Practice**

### Exercise 1: Click Counter
```javascript
let clickCount = 0;
const button = document.getElementById('click-button');
const counter = document.getElementById('counter');

button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = `Clicks: ${clickCount}`;
});
```

### Exercise 2: Color Changer
```javascript
const colorButton = document.getElementById('color-button');
const colorBox = document.getElementById('color-box');

const colors = ['red', 'blue', 'green', 'yellow'];
let currentColor = 0;

colorButton.addEventListener('click', function() {
    currentColor = (currentColor + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentColor];
});
```

## ⚠️ **Common Mistakes**

### 1. Adding Listeners Before Elements Exist
```javascript
// ❌ Wrong - element doesn't exist yet
const button = document.getElementById('my-button');
button.addEventListener('click', handler); // Error!

// ✅ Correct - wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('my-button');
    button.addEventListener('click', handler);
});
```

### 2. Not Removing Event Listeners
```javascript
// ❌ Can cause memory leaks
element.addEventListener('click', handler);

// ✅ Remove when no longer needed
element.removeEventListener('click', handler);
```

## 🧪 **Quick Quiz**

1. What happens if you add an event listener to a non-existent element?
2. How do you prevent memory leaks with event listeners?
3. What information does the event object contain?

## 📝 **Next Steps**
- Complete event exercises
- Move to Lesson 2: DOM Traversal
- Practice with more complex event handling

## 🔗 **Resources**
- [MDN: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

