# DOM Basics Exercises

## Exercise 1: Element Selection Master
Practice different ways of selecting DOM elements.

### Requirements:
- Use all major selector methods
- Handle multiple elements
- Work with complex selectors
- Compare selection performance
- Handle missing elements

### Starter Code:
```html
<!-- selector-practice.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Element Selection Practice</title>
</head>
<body>
    <div id="container">
        <div class="item">Item 1</div>
        <div class="item special">Item 2</div>
        <div class="item">Item 3</div>
        <article>
            <h2>Title</h2>
            <p>Paragraph 1</p>
            <p class="special">Paragraph 2</p>
        </article>
    </div>
    <div id="results"></div>
</body>
</html>
```

## Exercise 2: Dynamic Content Manager
Create, modify, and remove DOM elements dynamically.

### Requirements:
- Create elements programmatically
- Modify element content
- Handle attributes
- Implement add/remove functionality
- Style elements dynamically

### Starter Code:
```html
<!-- content-manager.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Content Manager</title>
</head>
<body>
    <div id="app">
        <div id="controls">
            <input type="text" id="content-input">
            <button id="add">Add</button>
        </div>
        <div id="content-list"></div>
    </div>
</body>
</html>
```

## Exercise 3: Event Master
Master DOM event handling with various event types.

### Requirements:
- Handle multiple event types
- Use event delegation
- Prevent default behaviors
- Handle event bubbling
- Clean up event listeners

### Starter Code:
```html
<!-- event-master.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Event Handler Practice</title>
</head>
<body>
    <div id="event-container">
        <button id="btn1">Click Me</button>
        <div id="hover-area">Hover Area</div>
        <form id="test-form">
            <input type="text" id="test-input">
            <button type="submit">Submit</button>
        </form>
    </div>
    <div id="event-log"></div>
</body>
</html>
```

## Exercise 4: DOM Navigation
Practice traversing the DOM tree in all directions.

### Requirements:
- Navigate parent/child relationships
- Work with siblings
- Find specific ancestors
- Handle nested structures
- Validate relationships

### Starter Code:
```html
<!-- dom-navigation.html -->
<!DOCTYPE html>
<html>
<head>
    <title>DOM Navigation</title>
</head>
<body>
    <div id="family-tree">
        <div id="parent">
            <div id="first-child" class="child">
                First Child
                <div class="grandchild">Grandchild 1</div>
            </div>
            <div id="second-child" class="child">
                Second Child
                <div class="grandchild">Grandchild 2</div>
            </div>
        </div>
    </div>
    <div id="results"></div>
</body>
</html>
```

## Exercise 5: Interactive Form Validator
Build a form with real-time validation using DOM manipulation.

### Requirements:
- Validate input in real-time
- Show error messages
- Style valid/invalid fields
- Handle form submission
- Clear form functionality

### Starter Code:
```html
<!-- form-validator.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Form Validator</title>
</head>
<body>
    <form id="registration-form">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username">
            <div class="error"></div>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email">
            <div class="error"></div>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password">
            <div class="error"></div>
        </div>
        <button type="submit">Register</button>
    </form>
</body>
</html>
```

## Bonus Challenge: Mini DOM Library
Create a small utility library for DOM manipulation.

### Requirements:
- Implement selector function
- Add element creation helpers
- Create event binding utilities
- Add attribute helpers
- Include traversal methods

## Submission Guidelines
1. Create a separate folder for each exercise
2. Include a README.md with:
   - Setup instructions
   - Implementation notes
   - Browser compatibility
3. Add comments explaining concepts
4. Include tests for functionality
5. Document any limitations