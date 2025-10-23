# Testing Advanced DOM APIs

## Overview
This test suite verifies the implementation of Advanced DOM API features, focusing on:
- MutationObserver functionality
- IntersectionObserver implementation
- ResizeObserver behavior
- Shadow DOM and Custom Elements
- Performance optimization

## Running Tests
1. Install dependencies:
```bash
npm install
```

2. Run the test suite:
```bash
npm test
```

## Test Structure

### 1. Content Observer Tests
- Addition/removal of elements
- Attribute modifications
- Text content changes
- History tracking

### 2. Smart Gallery Tests
- Lazy loading implementation
- Error handling
- Animation triggers
- Performance metrics

### 3. Responsive Components Tests
- Size-based adaptations
- Performance optimization
- Layout calculations
- Event handling

### 4. Shadow DOM Tests
- Component encapsulation
- Style isolation
- Event propagation
- Lifecycle methods

### 5. Performance Tests
- Large dataset handling
- Observer optimization
- Memory usage
- Rendering performance

## Writing New Tests
1. Create a new test file in the `tests` directory
2. Import required utilities
3. Follow the existing test structure
4. Add meaningful assertions
5. Include performance benchmarks

## Best Practices
- Test edge cases
- Verify error handling
- Check performance metrics
- Test browser compatibility
- Include cleanup code

## Automated Testing
This test suite is integrated with the course's auto-grading system.
Students' submissions are automatically evaluated against these tests.