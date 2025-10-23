# Advanced DOM Events

## Learning Objectives
- Master event propagation (bubbling and capturing)
- Understand and implement event delegation
- Handle different types of events (mouse, keyboard, form, custom)
- Create and dispatch custom events
- Implement efficient event handling patterns
- Debug event-related issues

## Prerequisites
- Completion of Lesson 1: DOM Basics
- Completion of Lesson 2: DOM Traversal
- Understanding of basic event handling
- Familiarity with DOM manipulation

## Key Concepts

### 1. Event Flow
- Capturing Phase
- Target Phase
- Bubbling Phase
- stopPropagation() vs stopImmediatePropagation()
- preventDefault()

### 2. Event Delegation
- Efficient handling of multiple elements
- Dynamic element handling
- Event target vs currentTarget
- Matching descendants
- Performance benefits

### 3. Event Types
#### Mouse Events
- click, dblclick
- mousedown, mouseup
- mouseover, mouseout
- mousemove
- contextmenu

#### Keyboard Events
- keydown, keyup, keypress
- Key combinations
- Modifier keys (Ctrl, Alt, Shift)

#### Form Events
- submit, reset
- change, input
- focus, blur
- invalid

#### Document/Window Events
- load, DOMContentLoaded
- resize, scroll
- beforeunload

### 4. Custom Events
- Creating custom events
- Dispatching events
- Event data
- Event handling

## Hands-on Examples
1. Event Propagation Visualizer
2. Drag and Drop Implementation
3. Form Validation System
4. Custom Event Communication
5. Infinite Scroll Implementation

## Exercises

### Exercise 1: Event Delegation Manager
Build a dynamic list manager that:
- Handles items added dynamically
- Implements different actions per element type
- Uses efficient event delegation
- Provides visual feedback

### Exercise 2: Interactive Form System
Create a form system with:
- Real-time validation
- Custom error messages
- Field dependencies
- Submit handling

### Exercise 3: Custom Event Framework
Develop a pub/sub system using:
- Custom events
- Event data passing
- Multiple subscribers
- Error handling

## Best Practices
- Use event delegation for dynamic content
- Clean up event listeners
- Throttle/debounce when needed
- Prefer passive event listeners
- Handle browser differences

## Common Pitfalls
- Memory leaks from listeners
- Event delegation mistakes
- Propagation issues
- Performance problems
- Browser inconsistencies

## Additional Resources
- [MDN: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/events)
- [W3Schools: JavaScript Events](https://www.w3schools.com/js/js_events.asp)

## Next Steps
- Complete all exercises
- Experiment in the console
- Build your own event system
- Combine with previous lessons