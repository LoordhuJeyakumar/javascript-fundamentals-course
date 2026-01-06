# Lesson 1A: DOM Element Selection

## 🎯 **Learning Objectives**
- Master all DOM element selection methods
- Understand when to use each selection method
- Handle missing elements gracefully
- Compare selection performance

## ⏱️ **Duration**: 30 minutes

## 📚 **Prerequisites**
- Basic HTML knowledge
- Basic JavaScript knowledge
- VS Code with Live Server extension

## 🔍 **Key Concepts**

### 1. Selection Methods Overview
```javascript
// By ID (returns single element)
document.getElementById('myId')

// By Class Name (returns HTMLCollection)
document.getElementsByClassName('myClass')

// By Tag Name (returns HTMLCollection)
document.getElementsByTagName('div')

// CSS Selectors (modern approach)
document.querySelector('#myId')           // Single element
document.querySelectorAll('.myClass')     // NodeList
```

### 2. When to Use Each Method
- **getElementById**: When you need ONE specific element
- **getElementsByClassName**: When you need ALL elements with a class
- **querySelector**: When you need ONE element with complex selectors
- **querySelectorAll**: When you need MULTIPLE elements with complex selectors

### 3. Return Types
- **Element**: Single DOM element
- **HTMLCollection**: Live collection (updates automatically)
- **NodeList**: Static collection (snapshot at time of query)

## 🛠️ **Hands-on Practice**

### Exercise 1: Basic Selection
```html
<div id="container">
    <h1 class="title">My Title</h1>
    <p class="content">Content here</p>
    <button class="btn">Click me</button>
</div>
```

```javascript
// Practice selecting each element using different methods
const container = document.getElementById('container');
const title = document.querySelector('.title');
const content = document.querySelectorAll('.content');
const button = document.getElementsByTagName('button')[0];
```

### Exercise 2: Complex Selectors
```javascript
// Select first paragraph inside container
const firstP = document.querySelector('#container p:first-child');

// Select all buttons with class 'primary'
const primaryButtons = document.querySelectorAll('button.primary');

// Select element with multiple classes
const specialDiv = document.querySelector('.class1.class2');
```

## ⚠️ **Common Mistakes**

### 1. Forgetting Element Might Not Exist
```javascript
// ❌ Wrong - can cause errors
const element = document.getElementById('nonExistent');
element.style.color = 'red'; // Error!

// ✅ Correct - check first
const element = document.getElementById('nonExistent');
if (element) {
    element.style.color = 'red';
}
```

### 2. Confusing Collections with Elements
```javascript
// ❌ Wrong - trying to style a collection
const elements = document.getElementsByClassName('myClass');
elements.style.color = 'red'; // Error!

// ✅ Correct - style each element
const elements = document.getElementsByClassName('myClass');
for (let element of elements) {
    element.style.color = 'red';
}
```

## 🧪 **Quick Quiz**

1. What's the difference between `querySelector` and `querySelectorAll`?
2. When should you use `getElementById` vs `querySelector`?
3. How do you handle a situation where an element might not exist?

## 📝 **Next Steps**
- Complete the selection exercises
- Move to Lesson 1B: Basic DOM Manipulation
- Practice selecting elements in different HTML structures

## 🔗 **Resources**
- [MDN: Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

