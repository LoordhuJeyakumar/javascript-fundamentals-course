# Assignment 2: Advanced Text Processing System

## 📋 Assignment Overview

**Objective**: Build a comprehensive text processing system that demonstrates advanced string manipulation, validation, and optimization techniques.

**Difficulty**: Intermediate to Advanced  
**Estimated Time**: 4-6 hours  
**Points**: 25 points

## 🎯 Learning Objectives

By completing this assignment, you will:
- Master advanced string manipulation techniques
- Implement efficient text processing algorithms
- Apply string validation and sanitization
- Use regular expressions for complex pattern matching
- Optimize string operations for performance
- Handle edge cases and error conditions

## 📝 Requirements

### Core Features (Required)

1. **Text Analyzer**
   - Analyze text for various metrics (word count, character count, readability score)
   - Detect language patterns and text characteristics
   - Generate text statistics and insights

2. **Text Validator**
   - Validate different types of text input (emails, URLs, phone numbers)
   - Sanitize HTML content and remove dangerous elements
   - Validate and format different data types

3. **Text Processor**
   - Implement text transformation functions
   - Handle different text encodings and formats
   - Process large text files efficiently

4. **Text Optimizer**
   - Implement string optimization techniques
   - Use caching and memoization for repeated operations
   - Optimize memory usage for large text processing

### Advanced Features (Bonus)

5. **Text Compressor**
   - Implement basic text compression algorithms
   - Handle different compression strategies
   - Provide compression ratio analysis

6. **Text Search Engine**
   - Implement efficient text search algorithms
   - Support multiple search patterns and filters
   - Provide search result ranking

## 🛠️ Implementation Guidelines

### File Structure
```
text-processing-system/
├── index.js                 # Main application entry point
├── src/
│   ├── analyzer.js         # Text analysis functions
│   ├── validator.js         # Text validation functions
│   ├── processor.js         # Text processing functions
│   ├── optimizer.js         # Text optimization functions
│   └── utils.js            # Utility functions
├── tests/
│   ├── analyzer.test.js    # Analyzer tests
│   ├── validator.test.js    # Validator tests
│   ├── processor.test.js   # Processor tests
│   └── optimizer.test.js   # Optimizer tests
└── README.md               # Project documentation
```

### Core Classes and Functions

#### TextAnalyzer Class
```javascript
class TextAnalyzer {
    constructor(text) {
        this.text = text;
        this.cache = new Map();
    }
    
    // Required methods
    getWordCount()
    getCharacterCount()
    getReadabilityScore()
    getLanguagePatterns()
    getTextStatistics()
    
    // Bonus methods
    getSentimentAnalysis()
    getTopicAnalysis()
    getComplexityScore()
}
```

#### TextValidator Class
```javascript
class TextValidator {
    // Required methods
    validateEmail(email)
    validateURL(url)
    validatePhoneNumber(phone)
    sanitizeHTML(html)
    validateAndFormat(input, type)
    
    // Bonus methods
    validateCreditCard(cardNumber)
    validatePostalCode(code, country)
    validatePassword(password)
}
```

#### TextProcessor Class
```javascript
class TextProcessor {
    // Required methods
    transformText(text, transformation)
    processEncoding(text, encoding)
    processLargeFile(filePath)
    
    // Bonus methods
    compressText(text)
    decompressText(compressedText)
    searchText(text, query)
}
```

#### TextOptimizer Class
```javascript
class TextOptimizer {
    // Required methods
    optimizeConcatenation(strings)
    optimizeMemory(text)
    optimizeSearch(text, terms)
    
    // Bonus methods
    implementCaching(processor)
    optimizePerformance(operation)
    benchmarkOperations(operations)
}
```

## 📊 Testing Requirements

### Test Cases

1. **Analyzer Tests**
   - Test word count accuracy
   - Test character count with different encodings
   - Test readability score calculation
   - Test language pattern detection

2. **Validator Tests**
   - Test email validation with various formats
   - Test URL validation with different protocols
   - Test phone number validation with different formats
   - Test HTML sanitization with dangerous content

3. **Processor Tests**
   - Test text transformation functions
   - Test encoding conversion
   - Test large file processing
   - Test error handling

4. **Optimizer Tests**
   - Test concatenation optimization
   - Test memory optimization
   - Test search optimization
   - Test performance improvements

### Sample Test Data

```javascript
const testData = {
    emails: [
        "user@example.com",
        "invalid.email",
        "test@domain.co.uk",
        "@domain.com"
    ],
    urls: [
        "https://www.example.com",
        "http://test.org",
        "www.google.com",
        "not-a-url"
    ],
    phoneNumbers: [
        "(555) 123-4567",
        "555-123-4567",
        "555.123.4567",
        "123-456-789"
    ],
    htmlContent: [
        "<p>Safe paragraph</p>",
        "<script>alert('dangerous')</script>",
        "<img src='image.jpg' onerror='alert(1)'>"
    ]
};
```

## 🎯 Success Criteria

### Minimum Requirements (15 points)
- [ ] TextAnalyzer class with basic analysis functions
- [ ] TextValidator class with email, URL, and phone validation
- [ ] TextProcessor class with basic transformation functions
- [ ] TextOptimizer class with basic optimization techniques
- [ ] Comprehensive test suite with at least 80% coverage
- [ ] Error handling for invalid inputs
- [ ] Documentation for all public methods

### Advanced Requirements (10 points)
- [ ] TextCompressor with compression algorithms
- [ ] TextSearchEngine with efficient search
- [ ] Performance benchmarking and optimization
- [ ] Memory usage optimization
- [ ] Advanced text analysis features
- [ ] Comprehensive error handling and logging
- [ ] Performance improvements over basic implementation

## 📚 Resources and References

### Documentation
- [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Regular Expressions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Performance Optimization](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

### Useful Libraries
- [Lodash](https://lodash.com/) - Utility functions
- [Moment.js](https://momentjs.com/) - Date/time handling
- [Jest](https://jestjs.io/) - Testing framework

## 🚀 Getting Started

1. **Setup Project Structure**
   ```bash
   mkdir text-processing-system
   cd text-processing-system
   npm init -y
   npm install lodash moment jest
   ```

2. **Create Basic Structure**
   - Set up the file structure as outlined above
   - Create basic class skeletons
   - Implement core methods

3. **Implement Core Features**
   - Start with TextAnalyzer class
   - Implement basic validation functions
   - Add text processing capabilities

4. **Add Optimization**
   - Implement caching mechanisms
   - Optimize string operations
   - Add performance monitoring

5. **Testing and Documentation**
   - Write comprehensive tests
   - Document all functions
   - Test with various input types

## 📝 Submission Requirements

### Code Quality
- Clean, readable code with proper comments
- Consistent coding style and naming conventions
- Proper error handling and validation
- Efficient algorithms and data structures

### Documentation
- README.md with setup and usage instructions
- JSDoc comments for all public methods
- Code examples and usage demonstrations
- Performance analysis and optimization notes

### Testing
- Comprehensive test suite covering all functionality
- Test cases for edge cases and error conditions
- Performance tests for optimization features
- Test coverage report (aim for 80%+)

## 🎓 Learning Outcomes

After completing this assignment, you will have:
- Mastered advanced string manipulation techniques
- Implemented efficient text processing algorithms
- Applied optimization techniques to improve performance
- Built a comprehensive text processing system
- Gained experience with testing and documentation
- Developed problem-solving skills for complex text processing tasks

## 💡 Tips and Hints

1. **Start Simple**: Begin with basic functionality and gradually add complexity
2. **Test Early**: Write tests as you implement features
3. **Optimize Later**: Focus on correctness first, then optimize
4. **Handle Edge Cases**: Consider empty strings, special characters, and large inputs
5. **Use Caching**: Implement caching for expensive operations
6. **Monitor Performance**: Use performance APIs to measure improvements
7. **Document Everything**: Write clear documentation for future maintenance

## 🔍 Evaluation Criteria

| Criteria | Weight | Description |
|----------|--------|-------------|
| Functionality | 40% | Correct implementation of all required features |
| Code Quality | 25% | Clean, readable, and well-structured code |
| Testing | 20% | Comprehensive test coverage and quality |
| Documentation | 10% | Clear documentation and examples |
| Performance | 5% | Optimization and performance improvements |

## 📞 Support and Resources

- **Office Hours**: Available for questions and guidance
- **Discussion Forum**: Share ideas and get help from peers
- **Additional Resources**: Links to relevant documentation and tutorials
- **Code Review**: Submit code for review and feedback

---

**Good luck with your text processing system! Remember to start early, test frequently, and don't hesitate to ask for help when needed.**
