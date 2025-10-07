// Exercise 5: String Validation
// Practice with string validation and sanitization

console.log("💪 Exercise 5: String Validation");
console.log("===============================");

// Exercise 1: Validate email addresses
console.log("\n1. Validate Email Addresses:");
// TODO: Create a function called validateEmail that:
// - Takes an email string as parameter
// - Returns true if valid, false if invalid
// - Check for proper email format: user@domain.com
// - Handle common email validation rules
// Hint: Use regular expressions for pattern matching

function validateEmail(email) {
    // Your code here
}

// Test your function
let emails = [
    "user@example.com",
    "test.email@domain.co.uk",
    "invalid.email",
    "@domain.com",
    "user@",
    "user@domain",
    "user.name@domain.com"
];

emails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});

// Exercise 2: Validate phone numbers
console.log("\n2. Validate Phone Numbers:");
// TODO: Create a function called validatePhoneNumber that:
// - Takes a phone string as parameter
// - Returns true if valid, false if invalid
// - Support formats: (123) 456-7890, 123-456-7890, 123.456.7890
// - Handle different phone number lengths
// Hint: Use regular expressions and length validation

function validatePhoneNumber(phone) {
    // Your code here
}

// Test your function
let phones = [
    "(555) 123-4567",
    "555-123-4567",
    "555.123.4567",
    "5551234567",
    "123-456-789",
    "123-456-78901",
    "abc-def-ghij"
];

phones.forEach(phone => {
    console.log(`${phone}: ${validatePhoneNumber(phone)}`);
});

// Exercise 3: Validate passwords
console.log("\n3. Validate Passwords:");
// TODO: Create a function called validatePassword that:
// - Takes a password string as parameter
// - Returns an object with validation results
// - Check for: length (8+), uppercase, lowercase, number, special character
// - Return detailed validation information
// Hint: Use regular expressions for different character types

function validatePassword(password) {
    // Your code here
}

// Test your function
let passwords = [
    "Password123!",
    "weak",
    "NoNumbers!",
    "nouppercase123!",
    "NOLOWERCASE123!",
    "NoSpecial123",
    "Perfect123!"
];

passwords.forEach(password => {
    console.log(`${password}:`, validatePassword(password));
});

// Exercise 4: Validate URLs
console.log("\n4. Validate URLs:");
// TODO: Create a function called validateURL that:
// - Takes a URL string as parameter
// - Returns true if valid, false if invalid
// - Support protocols: http, https, ftp
// - Check for proper URL structure
// Hint: Use regular expressions for URL pattern matching

function validateURL(url) {
    // Your code here
}

// Test your function
let urls = [
    "https://www.example.com",
    "http://example.com",
    "ftp://files.example.com",
    "www.example.com",
    "example.com",
    "not-a-url",
    "https://",
    "https://example.com/path?query=value"
];

urls.forEach(url => {
    console.log(`${url}: ${validateURL(url)}`);
});

// Exercise 5: Validate credit card numbers
console.log("\n5. Validate Credit Card Numbers:");
// TODO: Create a function called validateCreditCard that:
// - Takes a credit card number string as parameter
// - Returns true if valid, false if invalid
// - Use Luhn algorithm for validation
// - Handle different card types: Visa, MasterCard, American Express
// Hint: Implement Luhn algorithm and check card type patterns

function validateCreditCard(cardNumber) {
    // Your code here
}

// Test your function
let cardNumbers = [
    "4111111111111111", // Visa
    "5555555555554444", // MasterCard
    "378282246310005",  // American Express
    "1234567890123456", // Invalid
    "4111111111111112", // Invalid Luhn
    "378282246310006"   // Invalid Luhn
];

cardNumbers.forEach(card => {
    console.log(`${card}: ${validateCreditCard(card)}`);
});

// Exercise 6: Sanitize HTML content
console.log("\n6. Sanitize HTML Content:");
// TODO: Create a function called sanitizeHTML that:
// - Takes an HTML string as parameter
// - Returns a sanitized string
// - Remove or escape dangerous HTML tags and attributes
// - Allow safe HTML tags only
// Hint: Use regular expressions to remove/escape dangerous content

function sanitizeHTML(html) {
    // Your code here
}

// Test your function
let htmlContent = [
    "<p>Safe paragraph</p>",
    "<script>alert('dangerous')</script>",
    "<img src='image.jpg' onerror='alert(1)'>",
    "<a href='javascript:alert(1)'>Link</a>",
    "<div>Safe content</div>",
    "<iframe src='malicious.com'></iframe>"
];

htmlContent.forEach(html => {
    console.log(`Original: ${html}`);
    console.log(`Sanitized: ${sanitizeHTML(html)}`);
    console.log("---");
});

// Exercise 7: Validate and format postal codes
console.log("\n7. Validate Postal Codes:");
// TODO: Create a function called validatePostalCode that:
// - Takes a postal code string and country code as parameters
// - Returns true if valid, false if invalid
// - Support formats: US (12345), UK (SW1A 1AA), Canada (K1A 0A6)
// - Handle different postal code patterns
// Hint: Use regular expressions for different country formats

function validatePostalCode(postalCode, country = 'US') {
    // Your code here
}

// Test your function
let postalCodes = [
    { code: "12345", country: "US" },
    { code: "SW1A 1AA", country: "UK" },
    { code: "K1A 0A6", country: "CA" },
    { code: "1234", country: "US" },
    { code: "SW1A", country: "UK" },
    { code: "K1A", country: "CA" }
];

postalCodes.forEach(({ code, country }) => {
    console.log(`${code} (${country}): ${validatePostalCode(code, country)}`);
});

// Exercise 8: Validate and sanitize user input
console.log("\n8. Validate and Sanitize User Input:");
// TODO: Create a function called validateAndSanitizeInput that:
// - Takes input string and input type as parameters
// - Returns sanitized and validated input
// - Support types: 'text', 'email', 'phone', 'url', 'html'
// - Handle validation and sanitization based on type
// Hint: Use the previous validation functions and add sanitization

function validateAndSanitizeInput(input, type = 'text') {
    // Your code here
}

// Test your function
let inputs = [
    { input: "  Hello World  ", type: "text" },
    { input: "user@example.com", type: "email" },
    { input: "(555) 123-4567", type: "phone" },
    { input: "https://example.com", type: "url" },
    { input: "<p>Safe HTML</p>", type: "html" },
    { input: "invalid.email", type: "email" },
    { input: "not-a-url", type: "url" }
];

inputs.forEach(({ input, type }) => {
    console.log(`Input: "${input}" (${type}):`, validateAndSanitizeInput(input, type));
});

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced string validation.");
console.log("Key concepts practiced:");
console.log("- Email address validation");
console.log("- Phone number validation");
console.log("- Password strength validation");
console.log("- URL validation");
console.log("- Credit card validation");
console.log("- HTML sanitization");
console.log("- Postal code validation");
console.log("- Input validation and sanitization");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Regular Expressions");
console.log("4. Ask questions if you need help");
