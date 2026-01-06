# 🎯 DOM Practice Exercises - Beginner Friendly

## 🌟 Exercise 1: Hello World DOM (Super Easy!)

### **Goal:** Change text when button is clicked

### **HTML Setup:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Exercise 1</title>
</head>
<body>
    <h1 id="greeting">Hello!</h1>
    <button id="change-btn">Change Text</button>
    
    <script src="exercise1.js"></script>
</body>
</html>
```

### **JavaScript Solution:**
```javascript
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 1: Find the elements
    let greeting = document.getElementById('greeting');
    let button = document.getElementById('change-btn');
    
    // Step 2: Listen for button click
    button.addEventListener('click', function() {
        // Step 3: Change the text
        greeting.textContent = 'Hello World!';
        greeting.style.color = 'blue';
    });
});
```

### **What You Learned:**
- Finding elements by ID
- Adding event listeners
- Changing text content
- Changing styles

---

## 🌟 Exercise 2: Color Changer (Easy!)

### **Goal:** Change background color with buttons

### **HTML Setup:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Exercise 2</title>
    <style>
        #color-box {
            width: 200px;
            height: 200px;
            border: 2px solid black;
            margin: 20px;
        }
    </style>
</head>
<body>
    <div id="color-box"></div>
    <button id="red-btn">Red</button>
    <button id="green-btn">Green</button>
    <button id="blue-btn">Blue</button>
    <button id="reset-btn">Reset</button>
    
    <script src="exercise2.js"></script>
</body>
</html>
```

### **JavaScript Solution:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the color box
    let colorBox = document.getElementById('color-box');
    
    // Find all buttons
    let redBtn = document.getElementById('red-btn');
    let greenBtn = document.getElementById('green-btn');
    let blueBtn = document.getElementById('blue-btn');
    let resetBtn = document.getElementById('reset-btn');
    
    // Add event listeners
    redBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'red';
    });
    
    greenBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'green';
    });
    
    blueBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'blue';
    });
    
    resetBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'white';
    });
});
```

### **What You Learned:**
- Multiple event listeners
- Changing background colors
- Working with multiple elements

---

## 🌟 Exercise 3: Dynamic List (Medium!)

### **Goal:** Add and remove items from a list

### **HTML Setup:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Exercise 3</title>
    <style>
        .item {
            padding: 10px;
            margin: 5px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .item:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <h2>My Shopping List</h2>
    <input type="text" id="item-input" placeholder="Enter item">
    <button id="add-btn">Add Item</button>
    <ul id="shopping-list"></ul>
    
    <script src="exercise3.js"></script>
</body>
</html>
```

### **JavaScript Solution:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // Find elements
    let input = document.getElementById('item-input');
    let addBtn = document.getElementById('add-btn');
    let list = document.getElementById('shopping-list');
    
    // Add item function
    function addItem() {
        let itemText = input.value.trim();
        
        if (itemText === '') {
            alert('Please enter an item!');
            return;
        }
        
        // Create new list item
        let li = document.createElement('li');
        li.textContent = itemText;
        li.className = 'item';
        
        // Add click to remove
        li.addEventListener('click', function() {
            this.remove();
        });
        
        // Add to list
        list.appendChild(li);
        
        // Clear input
        input.value = '';
    }
    
    // Add button click
    addBtn.addEventListener('click', addItem);
    
    // Add item when Enter is pressed
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
```

### **What You Learned:**
- Creating new elements
- Adding elements to the page
- Removing elements
- Form input handling
- Keyboard events

---

## 🌟 Exercise 4: Counter App (Medium!)

### **Goal:** Create a counter that goes up and down

### **HTML Setup:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Exercise 4</title>
    <style>
        #counter {
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h2>Counter App</h2>
    <div id="counter">0</div>
    <button id="increment">+</button>
    <button id="decrement">-</button>
    <button id="reset">Reset</button>
    
    <script src="exercise4.js"></script>
</body>
</html>
```

### **JavaScript Solution:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // Find elements
    let counter = document.getElementById('counter');
    let incrementBtn = document.getElementById('increment');
    let decrementBtn = document.getElementById('decrement');
    let resetBtn = document.getElementById('reset');
    
    // Counter variable
    let count = 0;
    
    // Update display
    function updateDisplay() {
        counter.textContent = count;
        
        // Change color based on value
        if (count > 0) {
            counter.style.color = 'green';
        } else if (count < 0) {
            counter.style.color = 'red';
        } else {
            counter.style.color = 'black';
        }
    }
    
    // Increment
    incrementBtn.addEventListener('click', function() {
        count++;
        updateDisplay();
    });
    
    // Decrement
    decrementBtn.addEventListener('click', function() {
        count--;
        updateDisplay();
    });
    
    // Reset
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });
    
    // Initial display
    updateDisplay();
});
```

### **What You Learned:**
- Variables in DOM manipulation
- Conditional styling
- Function organization
- State management

---

## 🌟 Exercise 5: Image Gallery (Advanced!)

### **Goal:** Create a simple image gallery with navigation

### **HTML Setup:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Exercise 5</title>
    <style>
        #gallery {
            text-align: center;
            margin: 20px;
        }
        #main-image {
            max-width: 500px;
            max-height: 400px;
            border: 2px solid #ccc;
            margin: 20px 0;
        }
        .thumbnails {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        .thumbnail {
            width: 80px;
            height: 80px;
            border: 2px solid #ccc;
            cursor: pointer;
            object-fit: cover;
        }
        .thumbnail:hover {
            border-color: #007bff;
        }
        .thumbnail.active {
            border-color: #007bff;
            border-width: 3px;
        }
    </style>
</head>
<body>
    <div id="gallery">
        <h2>My Photo Gallery</h2>
        <img id="main-image" src="https://via.placeholder.com/500x400/007bff/ffffff?text=Image+1" alt="Main Image">
        <div class="thumbnails">
            <img class="thumbnail active" src="https://via.placeholder.com/80x80/007bff/ffffff?text=1" alt="Thumbnail 1">
            <img class="thumbnail" src="https://via.placeholder.com/80x80/28a745/ffffff?text=2" alt="Thumbnail 2">
            <img class="thumbnail" src="https://via.placeholder.com/80x80/dc3545/ffffff?text=3" alt="Thumbnail 3">
            <img class="thumbnail" src="https://via.placeholder.com/80x80/ffc107/000000?text=4" alt="Thumbnail 4">
        </div>
    </div>
    
    <script src="exercise5.js"></script>
</body>
</html>
```

### **JavaScript Solution:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // Find elements
    let mainImage = document.getElementById('main-image');
    let thumbnails = document.querySelectorAll('.thumbnail');
    
    // Image data
    let images = [
        'https://via.placeholder.com/500x400/007bff/ffffff?text=Image+1',
        'https://via.placeholder.com/500x400/28a745/ffffff?text=Image+2',
        'https://via.placeholder.com/500x400/dc3545/ffffff?text=Image+3',
        'https://via.placeholder.com/500x400/ffc107/000000?text=Image+4'
    ];
    
    // Change main image
    function changeMainImage(index) {
        mainImage.src = images[index];
        
        // Update active thumbnail
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
    
    // Add click listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            changeMainImage(index);
        });
    });
});
```

### **What You Learned:**
- Working with multiple elements
- Class manipulation
- Image handling
- Gallery patterns

---

## 🎯 Practice Tips

### **Start Small**
- Begin with Exercise 1
- Make sure you understand each step
- Don't move on until you're comfortable

### **Experiment**
- Try changing colors, text, or behavior
- Add your own features
- Break things and fix them!

### **Common Issues**
- **Element not found:** Check your ID/class names
- **Nothing happens:** Check browser console for errors
- **Styling issues:** Make sure CSS is correct

### **Next Steps**
- Try combining exercises
- Build your own projects
- Explore more advanced topics

---

## 🎉 Congratulations!

You've learned the fundamentals of DOM manipulation! These exercises cover:
- Element selection
- Event handling
- Content manipulation
- Dynamic content creation
- Styling and classes

**Keep practicing and building! 🚀**
