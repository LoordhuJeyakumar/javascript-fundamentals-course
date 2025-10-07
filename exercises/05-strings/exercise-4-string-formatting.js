// Exercise 4: String Formatting
// Practice with advanced string formatting techniques

console.log("💪 Exercise 4: String Formatting");
console.log("===============================");

// Exercise 1: Create a function to format currency
console.log("\n1. Format Currency:");
// TODO: Create a function called formatCurrency that:
// - Takes a number and currency code as parameters
// - Returns a formatted currency string
// - Support different currency formats
// - Handle decimal places and thousands separators
// Hint: Use toLocaleString or manual formatting

function formatCurrency(amount, currency = 'USD') {
    // Your code here
}

// Test your function
console.log("USD 1234.56:", formatCurrency(1234.56, 'USD'));
console.log("EUR 987.65:", formatCurrency(987.65, 'EUR'));
console.log("JPY 1000:", formatCurrency(1000, 'JPY'));
console.log("GBP 500.25:", formatCurrency(500.25, 'GBP'));

// Exercise 2: Create a function to format percentages
console.log("\n2. Format Percentages:");
// TODO: Create a function called formatPercentage that:
// - Takes a number and decimal places as parameters
// - Returns a formatted percentage string
// - Handle different decimal place requirements
// - Add the % symbol
// Hint: Use toFixed and string concatenation

function formatPercentage(value, decimalPlaces = 2) {
    // Your code here
}

// Test your function
console.log("0.1234 (2 decimals):", formatPercentage(0.1234, 2));
console.log("0.5678 (1 decimal):", formatPercentage(0.5678, 1));
console.log("0.9999 (0 decimals):", formatPercentage(0.9999, 0));
console.log("1.5 (2 decimals):", formatPercentage(1.5, 2));

// Exercise 3: Create a function to format phone numbers
console.log("\n3. Format Phone Numbers:");
// TODO: Create a function called formatPhoneNumber that:
// - Takes a string of digits as parameter
// - Returns a formatted phone number string
// - Support different formats: (123) 456-7890, 123-456-7890
// - Handle different input lengths
// Hint: Use string manipulation and regular expressions

function formatPhoneNumber(digits, format = 'US') {
    // Your code here
}

// Test your function
console.log("1234567890 (US):", formatPhoneNumber("1234567890", 'US'));
console.log("1234567890 (dash):", formatPhoneNumber("1234567890", 'dash'));
console.log("1234567890 (dots):", formatPhoneNumber("1234567890", 'dots'));
console.log("1234567890 (space):", formatPhoneNumber("1234567890", 'space'));

// Exercise 4: Create a function to format dates
console.log("\n4. Format Dates:");
// TODO: Create a function called formatDate that:
// - Takes a Date object and format string as parameters
// - Returns a formatted date string
// - Support formats: 'MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'Month DD, YYYY'
// - Handle different date formats
// Hint: Use Date methods and string manipulation

function formatDate(date, format = 'MM/DD/YYYY') {
    // Your code here
}

// Test your function
let testDate = new Date('2023-12-25');
console.log("MM/DD/YYYY:", formatDate(testDate, 'MM/DD/YYYY'));
console.log("DD/MM/YYYY:", formatDate(testDate, 'DD/MM/YYYY'));
console.log("YYYY-MM-DD:", formatDate(testDate, 'YYYY-MM-DD'));
console.log("Month DD, YYYY:", formatDate(testDate, 'Month DD, YYYY'));

// Exercise 5: Create a function to format file sizes
console.log("\n5. Format File Sizes:");
// TODO: Create a function called formatFileSize that:
// - Takes a number (bytes) as parameter
// - Returns a formatted file size string
// - Support units: B, KB, MB, GB, TB
// - Use appropriate decimal places
// Hint: Use Math.log2 and unit conversion

function formatFileSize(bytes) {
    // Your code here
}

// Test your function
console.log("1024 bytes:", formatFileSize(1024));
console.log("1048576 bytes:", formatFileSize(1048576));
console.log("1073741824 bytes:", formatFileSize(1073741824));
console.log("1099511627776 bytes:", formatFileSize(1099511627776));

// Exercise 6: Create a function to format names
console.log("\n6. Format Names:");
// TODO: Create a function called formatName that:
// - Takes a name string and format type as parameters
// - Returns a formatted name string
// - Support formats: 'first last', 'last, first', 'F. Last', 'First L.'
// - Handle different name formats
// Hint: Use string splitting and manipulation

function formatName(name, format = 'first last') {
    // Your code here
}

// Test your function
let fullName = "John Doe";
let threeNames = "John Michael Doe";
console.log("First Last:", formatName(fullName, 'first last'));
console.log("Last, First:", formatName(fullName, 'last, first'));
console.log("F. Last:", formatName(fullName, 'F. Last'));
console.log("First L.:", formatName(fullName, 'First L.'));
console.log("Three names:", formatName(threeNames, 'first last'));

// Exercise 7: Create a function to format addresses
console.log("\n7. Format Addresses:");
// TODO: Create a function called formatAddress that:
// - Takes an address object as parameter
// - Returns a formatted address string
// - Support different address formats
// - Handle missing fields gracefully
// Hint: Use object destructuring and conditional formatting

function formatAddress(address, format = 'US') {
    // Your code here
}

// Test your function
let usAddress = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA"
};

let intlAddress = {
    street: "456 High Street",
    city: "London",
    postalCode: "SW1A 1AA",
    country: "UK"
};

console.log("US format:", formatAddress(usAddress, 'US'));
console.log("International format:", formatAddress(intlAddress, 'international'));
console.log("Single line format:", formatAddress(usAddress, 'single'));

// Exercise 8: Create a function to format text with padding
console.log("\n8. Format Text with Padding:");
// TODO: Create a function called formatWithPadding that:
// - Takes a string, width, and alignment as parameters
// - Returns a padded string
// - Support alignments: 'left', 'right', 'center'
// - Use different padding characters
// Hint: Use padStart, padEnd, and manual padding

function formatWithPadding(str, width, alignment = 'left', paddingChar = ' ') {
    // Your code here
}

// Test your function
let text = "Hello";
console.log("Left aligned (width 10):", formatWithPadding(text, 10, 'left'));
console.log("Right aligned (width 10):", formatWithPadding(text, 10, 'right'));
console.log("Center aligned (width 10):", formatWithPadding(text, 10, 'center'));
console.log("With dots (width 15):", formatWithPadding(text, 15, 'center', '.'));

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced string formatting.");
console.log("Key concepts practiced:");
console.log("- Currency formatting");
console.log("- Percentage formatting");
console.log("- Phone number formatting");
console.log("- Date formatting");
console.log("- File size formatting");
console.log("- Name formatting");
console.log("- Address formatting");
console.log("- Text padding and alignment");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: String Validation");
console.log("4. Ask questions if you need help");
