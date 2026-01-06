# Advanced DOM APIs Exercises

## Exercise 1: Content Observer
Create a MutationObserver that tracks changes in a blog post and maintains a change history.

### Requirements:
- Create an observer for content changes
- Track added/removed paragraphs
- Monitor attribute changes
- Maintain a history of changes
- Implement undo/redo functionality

### Starter Code:
```html
<!-- content-observer.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Content Observer</title>
</head>
<body>
    <div id="blog-post">
        <h1>My Blog Post</h1>
        <p>Initial content...</p>
    </div>
    <div id="controls">
        <!-- Add your controls here -->
    </div>
    <div id="history">
        <!-- Show change history here -->
    </div>
</body>
</html>
```

## Exercise 2: Smart Image Gallery
Build an image gallery that uses IntersectionObserver for lazy loading and animations.

### Requirements:
- Implement lazy loading for images
- Add fade-in animations when images enter viewport
- Show loading indicators
- Handle errors gracefully
- Optimize performance

### Starter Code:
```html
<!-- smart-gallery.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Smart Gallery</title>
    <style>
        .gallery {
            display: grid;
            gap: 1rem;
        }
        .image-container {
            min-height: 200px;
        }
    </style>
</head>
<body>
    <div class="gallery">
        <!-- Add your image containers here -->
    </div>
</body>
</html>
```

## Exercise 3: Responsive Component Library
Create a library of components that use ResizeObserver for responsive behaviors.

### Requirements:
- Create at least 3 different components
- Implement size-based layout changes
- Add responsive animations
- Optimize performance
- Handle edge cases

### Starter Code:
```html
<!-- responsive-components.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Components</title>
</head>
<body>
    <div class="component-showcase">
        <!-- Add your components here -->
    </div>
</body>
</html>
```

## Exercise 4: Shadow DOM Components
Build a set of reusable components using Shadow DOM and custom elements.

### Requirements:
- Create at least 2 custom elements
- Use Shadow DOM for encapsulation
- Implement proper lifecycle methods
- Add event handling
- Style components properly

### Starter Code:
```html
<!-- shadow-components.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Shadow DOM Components</title>
</head>
<body>
    <!-- Use your custom elements here -->
</body>
</html>
```

## Bonus Challenge: Advanced DOM Performance
Optimize a complex DOM application using all available tools.

### Requirements:
- Use appropriate observers
- Implement virtual scrolling
- Optimize animations
- Measure and improve performance
- Handle large datasets efficiently

## Submission Guidelines
1. Create a separate folder for each exercise
2. Include a README.md with:
   - Setup instructions
   - Implementation notes
   - Performance considerations
3. Add comments explaining key concepts
4. Include tests for core functionality
5. Document any browser compatibility notes