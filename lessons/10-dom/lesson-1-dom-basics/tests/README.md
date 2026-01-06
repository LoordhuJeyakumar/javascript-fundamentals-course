# Testing DOM Basics

## Overview
This test suite verifies the implementation of fundamental DOM operations:
- Element Selection
- DOM Manipulation
- Event Handling
- DOM Navigation
- Form Validation

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

### 1. Element Selection Tests
- ID selection
- Class selection
- Tag selection
- Complex selectors
- Multiple elements

### 2. DOM Manipulation Tests
- Element creation
- Content modification
- Attribute handling
- Element removal
- Dynamic styling

### 3. Event Handling Tests
- Click events
- Form events
- Event delegation
- Event prevention
- Cleanup

### 4. DOM Navigation Tests
- Parent/child navigation
- Sibling traversal
- Ancestor finding
- Tree walking
- Relationship validation

### 5. Form Validation Tests
- Input validation
- Error handling
- Form submission
- Real-time feedback
- State management

## Writing New Tests
1. Create a new test file in the `tests` directory
2. Import required utilities
3. Follow the existing test structure
4. Add meaningful assertions
5. Include performance checks

## Best Practices
- Reset DOM between tests
- Test edge cases
- Verify error handling
- Check performance
- Clean up after tests

## Automated Testing
This test suite is integrated with the course's auto-grading system.
Student submissions are automatically evaluated against these tests.