// Lesson 4: String Formatting and Template Literals
// This file teaches string formatting and modern template syntax

console.log("📝 Welcome to Strings Lesson 4: String Formatting and Template Literals!");
console.log("=====================================================================");

// 1. Template Literals Basics
console.log("\n📚 1. Template Literals Basics");
console.log("-----------------------------");

let name = "Alice";
let age = 30;
let city = "New York";

// Old way - string concatenation
let oldWay = "Hello, my name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
console.log("Old way (concatenation):", oldWay);

// New way - template literals
let newWay = `Hello, my name is ${name}, I am ${age} years old, and I live in ${city}.`;
console.log("New way (template literals):", newWay);

// 2. Multi-line Strings
console.log("\n📚 2. Multi-line Strings");
console.log("----------------------");

// Old way - using \n
let oldMultiLine = "Line 1\nLine 2\nLine 3";
console.log("Old way (\\n):");
console.log(oldMultiLine);

// New way - template literals
let newMultiLine = `Line 1
Line 2
Line 3`;
console.log("New way (template literals):");
console.log(newMultiLine);

// 3. Expression Evaluation in Template Literals
console.log("\n📚 3. Expression Evaluation in Template Literals");
console.log("-----------------------------------------------");

let a = 10;
let b = 20;

// Mathematical expressions
let mathResult = `The sum of ${a} and ${b} is ${a + b}`;
console.log("Math expression:", mathResult);

// Function calls
let currentDate = new Date();
let dateString = `Today is ${currentDate.toDateString()}`;
console.log("Function call:", dateString);

// Conditional expressions
let score = 85;
let grade = `Your score is ${score} and you ${score >= 70 ? 'passed' : 'failed'}`;
console.log("Conditional:", grade);

// 4. Nested Template Literals
console.log("\n📚 4. Nested Template Literals");
console.log("-----------------------------");

let user = {
    name: "John",
    profile: {
        age: 25,
        city: "London",
        country: "UK"
    }
};

let userInfo = `User: ${user.name}
Age: ${user.profile.age}
Location: ${user.profile.city}, ${user.profile.country}`;

console.log("Nested template literal:");
console.log(userInfo);

// 5. Tagged Template Literals
console.log("\n📚 5. Tagged Template Literals");
console.log("-----------------------------");

// Custom tag function
function highlight(strings, ...values) {
    console.log(strings);
    console.log(values);
    
    
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let product = "Laptop";
let price = 999;
let highlighted = highlight`The ${product} costs $${price}`;
console.log("Tagged template:", highlighted);

// 6. String Padding and Alignment
console.log("\n📚 6. String Padding and Alignment");
console.log("---------------------------------");

let numbers = [1, 12, 123, 1234];
console.log("Numbers:", numbers);

// Pad start
numbers.forEach(num => {
    let padded = num.toString().padStart(6, '0');
    console.log(`Pad start: ${padded}`);
});

// Pad end
let labels = ["Name", "Age", "City"];
labels.forEach(label => {
    let padded = label.padEnd(10, '.');
    console.log(`Pad end: ${padded}`);
});

// 7. String Formatting with Numbers
console.log("\n📚 7. String Formatting with Numbers");
console.log("-----------------------------------");

let price2 = 1234.5678;
let percentage = 0.1234;

// Number formatting
let formattedPrice = `Price: $${price2.toFixed(2)}`;
let formattedPercentage = `Percentage: ${(percentage * 100).toFixed(1)}%`;
let formattedNumber = `Number: ${price2.toLocaleString()}`;

console.log("Number formatting:");
console.log(formattedPrice);
console.log(formattedPercentage);
console.log(formattedNumber);

// 8. String Formatting with Dates
console.log("\n📚 8. String Formatting with Dates");
console.log("----------------------------------");

let now = new Date();

// Different date formats
let dateFormats = {
    full: now.toDateString(),
    iso: now.toISOString(),
    local: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    custom: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
};

console.log("Date formatting:");
Object.entries(dateFormats).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// 9. String Templates for HTML
console.log("\n📚 9. String Templates for HTML");
console.log("-------------------------------");

let users = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

// Generate HTML table
let tableHTML = `
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        ${users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
            </tr>
        `).join('')}
    </tbody>
</table>`;

console.log("HTML table:");
console.log(tableHTML);

// 10. String Templates for SQL Queries
console.log("\n📚 10. String Templates for SQL Queries");
console.log("--------------------------------------");

let tableName = "users";
let columns = ["name", "age", "email"];
let conditions = { age: 25, city: "New York" };

// Generate SELECT query
let selectQuery = `
SELECT ${columns.join(', ')}
FROM ${tableName}
WHERE ${Object.entries(conditions).map(([key, value]) => `${key} = '${value}'`).join(' AND ')}
`;

console.log("SQL query:");
console.log(selectQuery);

// 11. String Templates for Configuration
console.log("\n📚 11. String Templates for Configuration");
console.log("---------------------------------------");

let config = {
    apiUrl: "https://api.example.com",
    version: "v1",
    timeout: 5000,
    retries: 3
};

let configTemplate = `
const config = {
    apiUrl: '${config.apiUrl}',
    version: '${config.version}',
    timeout: ${config.timeout},
    retries: ${config.retries}
};
`;

console.log("Configuration template:");
console.log(configTemplate);

// 12. String Templates for Logging
console.log("\n📚 12. String Templates for Logging");
console.log("----------------------------------");

function logMessage(level, message, data = {}) {
    let timestamp = new Date().toISOString();
    let dataString = Object.keys(data).length > 0 ? ` | Data: ${JSON.stringify(data)}` : '';
    
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${dataString}`;
}

// Usage examples
let infoLog = logMessage('info', 'User logged in', { userId: 123, ip: '192.168.1.1' });
let errorLog = logMessage('error', 'Database connection failed');
let debugLog = logMessage('debug', 'Processing request', { requestId: 'abc123' });

console.log("Log messages:");
console.log(infoLog);
console.log(errorLog);
console.log(debugLog);

// 13. String Templates for Error Messages
console.log("\n📚 13. String Templates for Error Messages");
console.log("----------------------------------------");

function createErrorMessage(error, context = {}) {
    let timestamp = new Date().toISOString();
    let contextString = Object.keys(context).length > 0 ? `\nContext: ${JSON.stringify(context, null, 2)}` : '';
    
    return `Error occurred at ${timestamp}
Error: ${error.message}
Stack: ${error.stack}${contextString}`;
}

// Simulate an error
let error = new Error("File not found");
error.stack = "Error: File not found\n    at main.js:10:5";

let errorMessage = createErrorMessage(error, { filename: "config.json", path: "/app/config/" });
console.log("Error message:");
console.log(errorMessage);

// 14. Advanced String Formatting
console.log("\n📚 14. Advanced String Formatting");
console.log("--------------------------------");

// Currency formatting
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Number formatting
function formatNumber(number, options = {}) {
    return new Intl.NumberFormat('en-US', options).format(number);
}

// Examples
let amounts = [1234.56, 0.1234, 1000000];
let percentages = [0.1234, 0.5678, 0.9999];

console.log("Currency formatting:");
amounts.forEach(amount => {
    console.log(`${amount} -> ${formatCurrency(amount)}`);
});

console.log("Number formatting:");
amounts.forEach(amount => {
    console.log(`${amount} -> ${formatNumber(amount, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log("Percentage formatting:");
percentages.forEach(percent => {
    console.log(`${percent} -> ${formatNumber(percent, { style: 'percent' })}`);
});

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Template literals use backticks (`) instead of quotes");
console.log("- ${} syntax allows expression evaluation");
console.log("- Multi-line strings are natural in template literals");
console.log("- Tagged templates enable custom processing");
console.log("- padStart() and padEnd() help with alignment");
console.log("- Template literals are great for HTML, SQL, and config generation");
console.log("- Internationalization APIs provide advanced formatting");
console.log("- Template literals make code more readable and maintainable");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a multi-line string using template literals");
console.log("2. Format a user profile with template literals");
console.log("3. Generate HTML content using template literals");
console.log("4. Create a logging function with template literals");
console.log("5. Format numbers and dates using template literals");
