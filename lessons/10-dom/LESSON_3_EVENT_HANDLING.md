# 🎓 Lesson 3: Event Handling - Complete Teaching Package

## 📋 Lesson Overview

**Duration:** 2-3 hours  
**Level:** Intermediate  
**Prerequisites:** DOM Basics, Element Creation & Modification

### **Learning Objectives**
By the end of this lesson, students will be able to:
- ✅ Understand what events are and how they work
- ✅ Add event listeners to elements
- ✅ Handle different types of events
- ✅ Use event objects and their properties
- ✅ Implement event delegation
- ✅ Build interactive applications

---

## 🎯 Teaching Plan

### **Part 1: Introduction (15 minutes)**

#### **What are Events?**
**Analogy:** Events are like doorbells - when someone presses the doorbell (event), it triggers a response (function)

#### **Types of Events:**
- **User Events:** Click, hover, keyboard input
- **Browser Events:** Page load, resize, scroll
- **Form Events:** Submit, change, input
- **Custom Events:** Programmatically triggered

#### **Real-World Examples:**
- Clicking buttons
- Hovering over images
- Typing in search boxes
- Submitting forms

---

### **Part 2: Understanding Events (20 minutes)**

#### **Event Flow**
```
👆 User Action (Click, Type, etc.)
   ↓
📡 Browser Detects Event
   ↓
🔍 Browser Finds Event Listener
   ↓
⚡ JavaScript Function Runs
   ↓
🎨 Page Updates
```

#### **Event Properties**
```javascript
// Event object contains information about the event
function handleClick(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Mouse position:', event.clientX, event.clientY);
}
```

#### **Live Coding Demo:**
Show how events work with a simple click example

---

### **Part 3: Adding Event Listeners (25 minutes)**

#### **The addEventListener() Method**
```javascript
// Basic event listener
element.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Named function
function handleClick() {
    console.log('Button clicked!');
}
element.addEventListener('click', handleClick);
```

#### **Common Event Types**
```javascript
// Mouse events
element.addEventListener('click', handleClick);
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);

// Keyboard events
element.addEventListener('keydown', handleKeyDown);
element.addEventListener('keyup', handleKeyUp);

// Form events
element.addEventListener('submit', handleSubmit);
element.addEventListener('change', handleChange);
element.addEventListener('input', handleInput);
```

#### **Live Coding Demo:**
Show different event types with examples

---

### **Part 4: Event Objects (20 minutes)**

#### **The Event Object**
```javascript
function handleEvent(event) {
    // Event type
    console.log('Event type:', event.type);
    
    // Target element
    console.log('Target:', event.target);
    
    // Mouse position
    console.log('X:', event.clientX, 'Y:', event.clientY);
    
    // Keyboard information
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
    
    // Form data
    console.log('Form value:', event.target.value);
}
```

#### **Preventing Default Behavior**
```javascript
// Prevent form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form manually
});

// Prevent link navigation
link.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle click manually
});
```

#### **Live Coding Demo:**
Show event object properties and preventDefault

---

### **Part 5: Event Delegation (25 minutes)**

#### **What is Event Delegation?**
**Analogy:** Instead of putting a doorbell on every door, put one doorbell at the front gate that handles all visitors

#### **Why Use Event Delegation?**
- Works with dynamically added elements
- Better performance
- Cleaner code
- Handles multiple elements efficiently

#### **How Event Delegation Works**
```javascript
// Instead of adding listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Use event delegation
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        handleClick(event);
    }
});
```

#### **Live Coding Demo:**
Show event delegation with dynamic content

---

### **Part 6: Practice Exercises (40 minutes)**

#### **Exercise 1: Interactive Color Changer**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Color Changer</title>
</head>
<body>
    <h2>Color Changer</h2>
    <div id="color-box">Click a button to change my color!</div>
    <button class="color-btn" data-color="red">Red</button>
    <button class="color-btn" data-color="green">Green</button>
    <button class="color-btn" data-color="blue">Blue</button>
</body>
</html>
```

**Task:** Use event delegation to handle color changes

#### **Exercise 2: Dynamic Todo List**
**Task:** Add, remove, and mark todos as complete

#### **Exercise 3: Form Validation**
**Task:** Validate form inputs in real-time

---

### **Part 7: Advanced Event Handling (20 minutes)**

#### **Event Bubbling and Capturing**
```javascript
// Event bubbling (default)
element.addEventListener('click', function(event) {
    console.log('Element clicked');
}, false);

// Event capturing
element.addEventListener('click', function(event) {
    console.log('Element clicked');
}, true);
```

#### **Stopping Event Propagation**
```javascript
element.addEventListener('click', function(event) {
    event.stopPropagation();
    // Event won't bubble up
});
```

#### **Live Coding Demo:**
Show event bubbling and capturing

---

### **Part 8: Common Patterns (15 minutes)**

#### **Pattern 1: Toggle Functionality**
```javascript
function toggleElement(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
```

#### **Pattern 2: Form Handling**
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    // Process form data
});
```

#### **Pattern 3: Keyboard Shortcuts**
```javascript
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        // Save functionality
    }
});
```

---

### **Part 9: Review & Assessment (15 minutes)**

#### **Quick Quiz:**
1. What is an event listener?
2. How do you prevent default behavior?
3. What is event delegation?
4. What's the difference between event bubbling and capturing?

#### **Exit Ticket:**
Students write one thing they learned and one question they have

---

## 📝 Student Materials

### **Handout: Event Handling Reference**
```javascript
// Adding Event Listeners
element.addEventListener('event', function)     // Add listener
element.removeEventListener('event', function)   // Remove listener

// Common Event Types
'click'          // Mouse click
'mouseover'      // Mouse hover
'mouseout'       // Mouse leave
'keydown'        // Key pressed
'keyup'          // Key released
'submit'         // Form submitted
'change'         // Form field changed
'input'          // Form field input
'load'           // Page loaded
'resize'         // Window resized

// Event Object Properties
event.type       // Event type
event.target     // Target element
event.clientX    // Mouse X position
event.clientY    // Mouse Y position
event.key        // Key pressed
event.keyCode    // Key code
event.preventDefault()  // Prevent default
event.stopPropagation() // Stop bubbling

// Event Delegation
parent.addEventListener('event', function(event) {
    if (event.target.matches('selector')) {
        // Handle event
    }
});
```

### **Practice Worksheet:**
1. Add event listeners to different elements
2. Handle different event types
3. Use event objects and properties
4. Implement event delegation

---

## 🎯 Assessment

### **Formative Assessment:**
- Code-along checkpoints
- Quick questions during explanation
- Pair programming exercises
- Exit tickets

### **Summative Assessment:**
- Build an interactive color changer
- Create a dynamic todo list
- Implement form validation
- Explain event handling concepts

---

## 🚀 Next Steps

### **Homework:**
- Complete practice exercises
- Build an interactive application
- Read next lesson preview

### **Next Lesson:**
Forms & User Input

---

## 🆘 Teacher Notes

### **Common Student Questions:**
1. **"When should I use event delegation?"**
   - Answer: When you have many elements or dynamic content

2. **"What's the difference between preventDefault and stopPropagation?"**
   - Answer: preventDefault stops default behavior, stopPropagation stops event bubbling

3. **"How do I know which event to use?"**
   - Answer: Think about what user action you want to respond to

### **Teaching Tips:**
- Show the difference between event types
- Demonstrate event delegation with dynamic content
- Let students experiment with different events
- Connect to real-world applications

### **Troubleshooting:**
- Common mistake: forgetting to prevent default form submission
- Show how to debug event issues
- Demonstrate proper event handling
- Provide extra help for struggling students

---

**This lesson unlocks the power of interactive web development! 🌟**
