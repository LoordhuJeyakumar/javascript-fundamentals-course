# Assignment 2: Data Analysis Tool

## 📝 Assignment Overview
Create a comprehensive data analysis tool using JavaScript arrays. This project will help you master advanced array methods, data processing, and statistical calculations.

## 🎯 Learning Objectives
- Master advanced array methods (map, filter, reduce, sort)
- Implement statistical calculations
- Process and analyze large datasets
- Create data visualization insights
- Apply real-world data analysis patterns

## 📋 Requirements

### Core Features (Required)
1. **Data Import and Management**
   - Load data from arrays or objects
   - Validate data structure and types
   - Handle missing or invalid data
   - Clean and normalize data

2. **Basic Statistics**
   - Calculate mean, median, mode
   - Find minimum and maximum values
   - Calculate range and standard deviation
   - Count data points and categories

3. **Data Filtering and Grouping**
   - Filter data by criteria
   - Group data by categories
   - Sort data by different fields
   - Remove duplicates

4. **Data Transformation**
   - Convert data formats
   - Calculate derived values
   - Create summary reports
   - Generate data insights

### Advanced Features (Choose 2-3)
1. **Advanced Statistics**
   - Calculate percentiles
   - Find outliers
   - Calculate correlation
   - Perform trend analysis

2. **Data Visualization**
   - Create text-based charts
   - Generate data summaries
   - Show distribution patterns
   - Display comparison tables

3. **Data Export**
   - Export to different formats
   - Generate reports
   - Save analysis results
   - Create data snapshots

4. **Real-time Analysis**
   - Process streaming data
   - Update statistics dynamically
   - Monitor data changes
   - Alert on anomalies

## 🛠️ Technical Requirements

### Code Structure
```javascript
class DataAnalyzer {
    constructor() {
        this.data = [];
        this.originalData = [];
        this.statistics = {};
        this.filters = [];
        this.groups = {};
    }
    
    // Data management
    loadData(data) { }
    validateData() { }
    cleanData() { }
    normalizeData() { }
    
    // Basic statistics
    calculateMean(field) { }
    calculateMedian(field) { }
    calculateMode(field) { }
    calculateMinMax(field) { }
    calculateRange(field) { }
    calculateStandardDeviation(field) { }
    
    // Data processing
    filterData(criteria) { }
    groupBy(field) { }
    sortBy(field, order = 'asc') { }
    removeDuplicates() { }
    
    // Data transformation
    transformData(transformations) { }
    calculateDerivedValues() { }
    createSummary() { }
    generateInsights() { }
    
    // Analysis methods
    findOutliers(field) { }
    calculatePercentiles(field, percentiles) { }
    analyzeTrends(field) { }
    compareGroups(group1, group2, field) { }
}
```

### Data Structure Example
```javascript
// Sample dataset structure
const salesData = [
    {
        id: 1,
        product: "Laptop",
        category: "Electronics",
        price: 999.99,
        quantity: 5,
        date: "2024-01-15",
        region: "North"
    },
    {
        id: 2,
        product: "Mouse",
        category: "Electronics",
        price: 29.99,
        quantity: 10,
        date: "2024-01-16",
        region: "South"
    }
    // ... more data
];
```

## 📊 Grading Rubric

### Functionality (40 points)
- **Data Management (10 points)**
  - Load and validate data
  - Clean and normalize data
  - Handle errors gracefully

- **Basic Statistics (15 points)**
  - Calculate all basic statistics
  - Handle different data types
  - Provide accurate results

- **Data Processing (10 points)**
  - Filter and group data
  - Sort and transform data
  - Remove duplicates

- **Analysis Features (5 points)**
  - Generate insights
  - Create summaries
  - Provide useful information

### Code Quality (30 points)
- **Structure and Organization (10 points)**
  - Clean, readable code
  - Logical method organization
  - Proper class structure

- **Error Handling (10 points)**
  - Input validation
  - Graceful error handling
  - User-friendly error messages

- **Performance (10 points)**
  - Efficient array operations
  - Appropriate use of methods
  - Optimized for large datasets

### Documentation (20 points)
- **Code Comments (10 points)**
  - Clear, helpful comments
  - Explain complex calculations
  - Document method purposes

- **User Interface (10 points)**
  - Clear output formatting
  - Readable reports
  - Helpful data insights

### Testing (10 points)
- **Test Cases (10 points)**
  - Test with various datasets
  - Edge case testing
  - Statistical accuracy testing

## 🎯 Example Usage

```javascript
// Create data analyzer instance
const analyzer = new DataAnalyzer();

// Load sample data
const salesData = [
    { product: "Laptop", price: 999.99, quantity: 5, region: "North" },
    { product: "Mouse", price: 29.99, quantity: 10, region: "South" },
    { product: "Keyboard", price: 79.99, quantity: 8, region: "North" }
];

analyzer.loadData(salesData);

// Calculate basic statistics
const meanPrice = analyzer.calculateMean('price');
const medianPrice = analyzer.calculateMedian('price');
const priceRange = analyzer.calculateRange('price');

console.log(`Mean Price: $${meanPrice.toFixed(2)}`);
console.log(`Median Price: $${medianPrice.toFixed(2)}`);
console.log(`Price Range: $${priceRange.min} - $${priceRange.max}`);

// Filter and group data
const electronics = analyzer.filterData({ category: "Electronics" });
const byRegion = analyzer.groupBy('region');

// Generate insights
const insights = analyzer.generateInsights();
console.log(insights);
```

## 📝 Sample Datasets

### Dataset 1: Sales Data
```javascript
const salesData = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 5, date: "2024-01-15", region: "North", salesperson: "John" },
    { id: 2, product: "Mouse", category: "Electronics", price: 29.99, quantity: 10, date: "2024-01-16", region: "South", salesperson: "Jane" },
    { id: 3, product: "Keyboard", category: "Electronics", price: 79.99, quantity: 8, date: "2024-01-17", region: "North", salesperson: "John" },
    { id: 4, product: "Monitor", category: "Electronics", price: 299.99, quantity: 3, date: "2024-01-18", region: "East", salesperson: "Bob" },
    { id: 5, product: "Headphones", category: "Electronics", price: 149.99, quantity: 12, date: "2024-01-19", region: "West", salesperson: "Alice" }
];
```

### Dataset 2: Student Grades
```javascript
const studentGrades = [
    { id: 1, name: "Alice", subject: "Math", grade: 85, semester: "Fall", year: 2024 },
    { id: 2, name: "Bob", subject: "Math", grade: 92, semester: "Fall", year: 2024 },
    { id: 3, name: "Charlie", subject: "Science", grade: 78, semester: "Fall", year: 2024 },
    { id: 4, name: "Diana", subject: "Science", grade: 88, semester: "Fall", year: 2024 },
    { id: 5, name: "Eve", subject: "English", grade: 95, semester: "Fall", year: 2024 }
];
```

### Dataset 3: Weather Data
```javascript
const weatherData = [
    { date: "2024-01-01", temperature: 32, humidity: 65, precipitation: 0.2, city: "New York" },
    { date: "2024-01-02", temperature: 35, humidity: 70, precipitation: 0.5, city: "New York" },
    { date: "2024-01-03", temperature: 28, humidity: 60, precipitation: 0.1, city: "New York" },
    { date: "2024-01-01", temperature: 75, humidity: 45, precipitation: 0.0, city: "Los Angeles" },
    { date: "2024-01-02", temperature: 78, humidity: 50, precipitation: 0.0, city: "Los Angeles" }
];
```

## 📝 Submission Requirements

### Files to Submit
1. **`data-analyzer.js`** - Main implementation
2. **`test-datasets.js`** - Sample datasets for testing
3. **`analysis-examples.js`** - Example analyses
4. **`README.md`** - Documentation and usage instructions

### Code Requirements
- All code must be well-commented
- Use modern JavaScript features
- Follow consistent coding style
- Include error handling
- Provide clear output

### Documentation Requirements
- Explain how to use the analyzer
- Provide examples with sample data
- Document all methods
- Include statistical formulas used

## 🚀 Bonus Points

### Extra Credit (Up to 20 points)
1. **Data Visualization (10 points)**
   - Create text-based charts
   - Generate visual summaries
   - Show data distributions

2. **Advanced Analysis (10 points)**
   - Implement correlation analysis
   - Create trend predictions
   - Add machine learning concepts

## 📅 Timeline

- **Week 1**: Plan and design the analyzer
- **Week 2**: Implement core statistics
- **Week 3**: Add advanced features and testing
- **Week 4**: Final testing and documentation

## 🤝 Collaboration

- Work individually or in pairs
- Use version control (Git)
- Regular progress updates
- Peer code review

## 📚 Resources

### Helpful Resources
- MDN Array methods documentation
- Statistical analysis guides
- Data processing examples
- JavaScript math functions

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
- Excellent data insights

## 📝 Final Notes

This assignment is designed to help you master advanced array methods while building a practical data analysis tool. Focus on:

1. **Understanding the concepts** - Don't just copy code
2. **Writing clean code** - Make it readable and maintainable
3. **Testing thoroughly** - Ensure your calculations are accurate
4. **Documenting well** - Help others understand your code
5. **Being creative** - Add your own unique analysis features

Good luck, and have fun analyzing data! 📊
