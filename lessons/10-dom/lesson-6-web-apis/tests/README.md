# Testing Web APIs

## Overview
This test suite verifies the implementation of various Web APIs, focusing on:
- Storage APIs
- Media APIs
- Geolocation
- WebSocket
- Network Information

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

### 1. Storage API Tests
- Data persistence
- Quota management
- Offline capabilities
- Sync functionality

### 2. Media API Tests
- Device permissions
- Recording states
- Media handling
- Format support

### 3. Geolocation Tests
- Position accuracy
- Movement tracking
- Distance calculations
- Error handling

### 4. WebSocket Tests
- Connection management
- Message handling
- Reconnection logic
- Error scenarios

### 5. Network Tests
- Connection detection
- Content adaptation
- Offline mode
- Performance metrics

## Writing New Tests
1. Create a new test file in the `tests` directory
2. Import required utilities
3. Follow the existing test structure
4. Add meaningful assertions
5. Include performance checks

## Best Practices
- Mock external services
- Test permissions handling
- Verify error cases
- Check performance metrics
- Include cleanup code

## Automated Testing
This test suite is integrated with the course's auto-grading system.
Student submissions are automatically evaluated against these tests.