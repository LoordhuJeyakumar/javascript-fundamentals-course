# Assignment 1: Text Processing Tool

## 📝 Assignment Overview
Create a comprehensive text processing tool that demonstrates mastery of JavaScript string manipulation techniques.

## 🎯 Learning Objectives
- Apply string methods in real-world scenarios
- Implement text validation and sanitization
- Create user-friendly text processing functions
- Practice error handling and input validation
- Demonstrate understanding of string optimization

## 📋 Requirements

### Core Features (Required)
1. **Text Input and Validation**
   - Accept text input from user
   - Validate input (not empty, reasonable length)
   - Handle different input types (single line, multi-line)

2. **Text Cleaning and Sanitization**
   - Remove extra whitespace
   - Normalize line endings
   - Remove special characters (optional)
   - Convert to consistent case

3. **Text Analysis**
   - Word count
   - Character count (with and without spaces)
   - Sentence count
   - Paragraph count
   - Most common words
   - Longest and shortest words

4. **Text Transformation**
   - Convert to uppercase/lowercase
   - Convert to title case
   - Reverse text
   - Remove duplicates
   - Sort words alphabetically

5. **Text Search and Replace**
   - Find and highlight text
   - Replace text (single and multiple occurrences)
   - Case-sensitive and case-insensitive search
   - Regular expression support

### Advanced Features (Choose 2-3)
1. **Text Formatting**
   - Format as HTML
   - Format as Markdown
   - Create bullet points
   - Numbered lists

2. **Text Validation**
   - Email validation
   - Phone number validation
   - URL validation
   - Password strength checking

3. **Text Statistics**
   - Reading time estimation
   - Flesch reading ease score
   - Keyword density analysis
   - Text complexity metrics

4. **Text Export**
   - Export to different formats
   - Save processed text
   - Generate reports

## 🛠️ Technical Requirements

### Code Structure
```javascript
class TextProcessor {
    constructor() {
        this.text = "";
        this.originalText = "";
    }
    
    // Core methods
    setText(text) { }
    validateInput() { }
    cleanText() { }
    analyzeText() { }
    transformText(operation) { }
    searchAndReplace(search, replace, options) { }
    
    // Utility methods
    getWordCount() { }
    getCharacterCount() { }
    getSentenceCount() { }
    getMostCommonWords() { }
    getLongestWord() { }
    getShortestWord() { }
}
```

### Error Handling
- Validate all inputs
- Handle edge cases gracefully
- Provide meaningful error messages
- Use try-catch blocks appropriately

### Performance Considerations
- Use efficient string methods
- Avoid unnecessary string operations
- Implement caching where appropriate
- Optimize for large text inputs

## 📊 Grading Rubric

### Functionality (40 points)
- **Core Features (25 points)**
  - Text input and validation (5 points)
  - Text cleaning and sanitization (5 points)
  - Text analysis (5 points)
  - Text transformation (5 points)
  - Text search and replace (5 points)

- **Advanced Features (15 points)**
  - Choose 2-3 advanced features (5 points each)
  - Implement them correctly
  - Demonstrate practical use

### Code Quality (30 points)
- **Structure and Organization (10 points)**
  - Clean, readable code
  - Logical function organization
  - Appropriate use of classes and methods

- **Error Handling (10 points)**
  - Comprehensive input validation
  - Graceful error handling
  - Meaningful error messages

- **Performance (10 points)**
  - Efficient string operations
  - Appropriate use of methods
  - Optimization considerations

### Documentation (20 points)
- **Code Comments (10 points)**
  - Clear, helpful comments
  - Explain complex logic
  - Document function purposes

- **User Interface (10 points)**
  - Clear instructions
  - User-friendly output
  - Helpful feedback

### Testing (10 points)
- **Test Cases (10 points)**
  - Test with various inputs
  - Edge case testing
  - Error condition testing

## 🎯 Example Usage

```javascript
// Create text processor instance
const processor = new TextProcessor();

// Set text
processor.setText("Hello World! This is a test.");

// Analyze text
const analysis = processor.analyzeText();
console.log("Word count:", analysis.wordCount);
console.log("Character count:", analysis.characterCount);

// Transform text
const upperCase = processor.transformText('uppercase');
console.log("Uppercase:", upperCase);

// Search and replace
const replaced = processor.searchAndReplace("World", "JavaScript");
console.log("Replaced:", replaced);

// Get statistics
const stats = processor.getStatistics();
console.log("Statistics:", stats);
```

## 📝 Submission Requirements

### Files to Submit
1. **`text-processor.js`** - Main implementation
2. **`test-cases.js`** - Test cases and examples
3. **`README.md`** - Documentation and usage instructions
4. **`demo.html`** - Simple web interface (optional)

### Code Requirements
- All code must be well-commented
- Use modern JavaScript features
- Follow consistent coding style
- Include error handling
- Provide clear output

### Documentation Requirements
- Explain how to use the tool
- Provide examples
- Document all methods
- Include troubleshooting guide

## 🚀 Bonus Points

### Extra Credit (Up to 20 points)
1. **Web Interface (10 points)**
   - Create a simple HTML interface
   - Real-time text processing
   - Visual feedback

2. **Advanced Features (10 points)**
   - Implement additional advanced features
   - Creative functionality
   - Unique text processing capabilities

## 📅 Timeline

- **Week 1**: Plan and design the tool
- **Week 2**: Implement core features
- **Week 3**: Add advanced features and testing
- **Week 4**: Final testing and documentation

## 🤝 Collaboration

- Work individually or in pairs
- Use version control (Git)
- Regular progress updates
- Peer code review

## 📚 Resources

### Helpful Resources
- MDN String documentation
- Regular expression guides
- Text processing examples
- Performance optimization tips

### Getting Help
- Ask questions during office hours
- Use online resources
- Collaborate with classmates
- Review lesson materials

## 🎉 Success Criteria

### Minimum Requirements
- All core features implemented
- Code runs without errors
- Basic documentation provided
- At least 2 advanced features

### Excellent Work
- All features implemented correctly
- Clean, efficient code
- Comprehensive documentation
- Creative and useful features
- Excellent user experience

## 📝 Final Notes

This assignment is designed to help you master JavaScript string manipulation while building a practical tool. Focus on:

1. **Understanding the concepts** - Don't just copy code
2. **Writing clean code** - Make it readable and maintainable
3. **Testing thoroughly** - Ensure your code works correctly
4. **Documenting well** - Help others understand your code
5. **Being creative** - Add your own unique features

Good luck, and have fun building your text processing tool! 🚀
