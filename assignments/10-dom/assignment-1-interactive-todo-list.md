# Assignment 1: Interactive Todo List

## 🎯 **Objective**
Create a fully functional interactive todo list application using DOM manipulation techniques. This assignment will test your understanding of element selection, creation, modification, event handling, and dynamic content management.

## 📋 **Requirements**

### **Core Features (Required)**
1. **Add Todo Items**
   - Input field for entering new todo items
   - Add button to create new todos
   - Prevent adding empty todos

2. **Display Todo Items**
   - List all todo items with checkboxes
   - Show todo text
   - Display creation timestamp

3. **Mark as Complete**
   - Checkbox to mark todos as complete/incomplete
   - Visual indication of completed items (strikethrough, different color)
   - Update completion status

4. **Delete Todo Items**
   - Delete button for each todo item
   - Confirm deletion (optional)
   - Remove from DOM

5. **Filter Todos**
   - Show all todos
   - Show only active (incomplete) todos
   - Show only completed todos
   - Filter buttons with active state

### **Advanced Features (Bonus)**
1. **Edit Todo Items**
   - Double-click to edit todo text inline
   - Save changes on Enter key or blur
   - Cancel editing on Escape key

2. **Local Storage**
   - Persist todos between browser sessions
   - Load todos on page load
   - Save todos on changes

3. **Drag and Drop**
   - Reorder todos by dragging
   - Visual feedback during drag
   - Update order in storage

4. **Statistics**
   - Show total number of todos
   - Show number of completed todos
   - Show number of active todos
   - Update statistics in real-time

## 🎨 **Design Requirements**

### **Visual Design**
- Clean, modern interface
- Responsive design (works on mobile and desktop)
- Consistent color scheme
- Proper spacing and typography
- Visual feedback for interactions

### **Accessibility**
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## 🏗️ **Technical Requirements**

### **HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="todo-container">
        <header class="todo-header">
            <h1>My Todo List</h1>
            <div class="todo-input">
                <input type="text" id="todo-input" placeholder="Add a new todo...">
                <button id="add-btn">Add</button>
            </div>
        </header>
        
        <div class="todo-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <div class="todo-stats">
            <span id="total-count">0</span> total,
            <span id="active-count">0</span> active,
            <span id="completed-count">0</span> completed
        </div>
        
        <ul id="todo-list" class="todo-list">
            <!-- Todo items will be dynamically added here -->
        </ul>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### **CSS Styling**
- Use CSS Grid or Flexbox for layout
- Implement hover effects and transitions
- Style form elements consistently
- Create visual hierarchy
- Use CSS variables for colors

### **JavaScript Functionality**
- Use modern ES6+ features
- Implement proper error handling
- Use event delegation for dynamic content
- Organize code into logical functions
- Add comments explaining complex logic

## 📝 **Implementation Guidelines**

### **Step 1: Basic Structure**
1. Create HTML file with basic structure
2. Add CSS for styling and layout
3. Create JavaScript file for functionality

### **Step 2: Core Features**
1. Implement todo item creation
2. Add display functionality
3. Implement completion toggle
4. Add deletion functionality
5. Create filter system

### **Step 3: Event Handling**
1. Add event listeners for all interactions
2. Implement form submission handling
3. Add keyboard shortcuts (Enter to add, Escape to cancel)
4. Handle edge cases (empty input, duplicate todos)

### **Step 4: Advanced Features**
1. Implement local storage
2. Add inline editing
3. Create drag and drop functionality
4. Add statistics display

### **Step 5: Polish**
1. Test all functionality
2. Ensure responsive design
3. Add accessibility features
4. Optimize performance

## 🧪 **Testing Checklist**

### **Functionality Tests**
- [ ] Can add new todo items
- [ ] Can mark todos as complete/incomplete
- [ ] Can delete todo items
- [ ] Can filter todos by status
- [ ] Can edit todo items inline
- [ ] Todos persist between sessions
- [ ] Statistics update correctly
- [ ] Drag and drop works (if implemented)

### **Edge Cases**
- [ ] Empty input handling
- [ ] Duplicate todo handling
- [ ] Very long todo text
- [ ] Special characters in todos
- [ ] Browser refresh behavior
- [ ] Local storage quota exceeded

### **Accessibility Tests**
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Color contrast sufficient

## 📊 **Grading Criteria**

### **Basic Requirements (60 points)**
- **HTML Structure (10 points)**: Proper semantic HTML
- **CSS Styling (15 points)**: Clean, responsive design
- **Core Functionality (25 points)**: Add, complete, delete, filter
- **Event Handling (10 points)**: Proper event listeners and handling

### **Advanced Features (30 points)**
- **Local Storage (10 points)**: Persistence between sessions
- **Inline Editing (10 points)**: Edit todos in place
- **Statistics (5 points)**: Real-time count updates
- **Drag and Drop (5 points)**: Reorder functionality

### **Code Quality (10 points)**
- **Organization (5 points)**: Clean, readable code structure
- **Comments (3 points)**: Clear documentation
- **Error Handling (2 points)**: Proper error management

## 🚀 **Submission Requirements**

### **Files to Submit**
1. `index.html` - Main HTML file
2. `styles.css` - CSS styling
3. `script.js` - JavaScript functionality
4. `README.md` - Project documentation

### **README.md Content**
- Project description
- Features implemented
- Setup instructions
- Usage guide
- Browser compatibility
- Future improvements

### **Code Requirements**
- All code must be your own work
- Use modern JavaScript (ES6+)
- Follow best practices
- Include proper comments
- Handle errors gracefully

## 💡 **Tips and Hints**

### **Getting Started**
1. Start with basic HTML structure
2. Add CSS for visual design
3. Implement core JavaScript functionality
4. Test each feature as you build
5. Add advanced features incrementally

### **Common Challenges**
- **Event Delegation**: Use event delegation for dynamic content
- **Local Storage**: Handle JSON serialization/deserialization
- **Inline Editing**: Manage focus and blur events
- **Drag and Drop**: Use HTML5 drag and drop API
- **Responsive Design**: Test on different screen sizes

### **Performance Tips**
- Debounce input events
- Use document fragments for multiple DOM updates
- Minimize DOM queries
- Cache frequently accessed elements

## 🎯 **Learning Objectives**

By completing this assignment, you will demonstrate:
- Proficiency in DOM manipulation
- Understanding of event handling
- Ability to create interactive user interfaces
- Knowledge of modern JavaScript features
- Skills in responsive web design
- Understanding of accessibility principles

## 📚 **Resources**

### **Documentation**
- [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### **Examples**
- [TodoMVC](https://todomvc.com/) - Reference implementations
- [MDN Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

**Good luck with your assignment! Remember to test thoroughly and implement features incrementally.**
