// Lesson 6: Regular Expressions Basics
// This file teaches regular expressions for string pattern matching

console.log("📝 Welcome to Strings Lesson 6: Regular Expressions Basics!");
console.log("=========================================================");

// 1. Basic Regular Expression Syntax
console.log("\n📚 1. Basic Regular Expression Syntax");
console.log("------------------------------------");

let text = "The quick brown fox jumps over the lazy dog";
console.log("Text:", text);

// Literal pattern
let foxRegex = /fox/;
console.log("foxRegex.test(text):", foxRegex.test(text));

// Case insensitive
let quickRegex = /quick/i;
console.log("quickRegex.test('QUICK'):", quickRegex.test('QUICK'));

// Global search
let theRegex = /the/gi;
let matches = text.match(theRegex);
console.log("theRegex matches:", matches);

// 2. Character Classes
console.log("\n📚 2. Character Classes");
console.log("--------------------");

let sampleText = "Hello World 123!";
console.log("Sample text:", sampleText);

// Digit character class
let digitRegex = /\d/;
console.log("Contains digits:", digitRegex.test(sampleText));

// Non-digit character class
let nonDigitRegex = /\D/;
console.log("Contains non-digits:", nonDigitRegex.test(sampleText));

// Word character class
let wordRegex = /\w/;
console.log("Contains word characters:", wordRegex.test(sampleText));

// Non-word character class
let nonWordRegex = /\W/;
console.log("Contains non-word characters:", nonWordRegex.test(sampleText));

// Whitespace character class
let whitespaceRegex = /\s/;
console.log("Contains whitespace:", whitespaceRegex.test(sampleText));

// 3. Quantifiers
console.log("\n📚 3. Quantifiers");
console.log("----------------");

let numbers = "123 4567 89 0";
console.log("Numbers:", numbers);

// Zero or more
let zeroOrMoreRegex = /\d*/g;
let zeroOrMoreMatches = numbers.match(zeroOrMoreRegex);
console.log("Zero or more digits:", zeroOrMoreMatches);

// One or more
let oneOrMoreRegex = /\d+/g;
let oneOrMoreMatches = numbers.match(oneOrMoreRegex);
console.log("One or more digits:", oneOrMoreMatches);

// Zero or one
let zeroOrOneRegex = /\d?/g;
let zeroOrOneMatches = numbers.match(zeroOrOneRegex);
console.log("Zero or one digit:", zeroOrOneMatches);

// Exact count
let exactCountRegex = /\d{3}/g;
let exactCountMatches = numbers.match(exactCountRegex);
console.log("Exactly 3 digits:", exactCountMatches);

// Range count
let rangeCountRegex = /\d{2,4}/g;
let rangeCountMatches = numbers.match(rangeCountRegex);
console.log("2-4 digits:", rangeCountMatches);

// 4. Anchors and Boundaries
console.log("\n📚 4. Anchors and Boundaries");
console.log("---------------------------");

let sentencesArray = [
    "Hello World",
    "World Hello",
    "Hello",
    "World",
    "Hello World Hello"
];

// Start anchor
let startRegex = /^Hello/;
console.log("Starts with 'Hello':");
sentencesArray.forEach(sentence => {
    console.log(`"${sentence}": ${startRegex.test(sentence)}`);
});

// End anchor
let endRegex = /World$/;
console.log("Ends with 'World':");
sentences.forEach(sentence => {
    console.log(`"${sentence}": ${endRegex.test(sentence)}`);
});

// Word boundary
let wordBoundaryRegex = /\bHello\b/;
console.log("Contains word 'Hello':");
sentences.forEach(sentence => {
    console.log(`"${sentence}": ${wordBoundaryRegex.test(sentence)}`);
});

// 5. Groups and Capturing
console.log("\n📚 5. Groups and Capturing");
console.log("-------------------------");

let emailText = "Contact us at support@example.com or sales@company.org";
console.log("Email text:", emailText);

// Capture groups
let emailRegex = /(\w+)@(\w+\.\w+)/g;
let emailMatches = emailText.matchAll(emailRegex);

console.log("Email matches:");
for (let match of emailMatches) {
    console.log(`Full match: ${match[0]}`);
    console.log(`Username: ${match[1]}`);
    console.log(`Domain: ${match[2]}`);
}

// 6. Alternation and Character Sets
console.log("\n📚 6. Alternation and Character Sets");
console.log("-----------------------------------");

let colorText = "I like red, blue, and green colors";
console.log("Color text:", colorText);

// Alternation
let colorRegex = /red|blue|green/g;
let colorMatches = colorText.match(colorRegex);
console.log("Color matches:", colorMatches);

// Character sets
let vowelRegex = /[aeiou]/gi;
let vowelMatches = colorText.match(vowelRegex);
console.log("Vowel matches:", vowelMatches);

// Negated character sets
let consonantRegex = /[^aeiou\s]/gi;
let consonantMatches = colorText.match(consonantRegex);
console.log("Consonant matches:", consonantMatches);

// 7. Common Patterns
console.log("\n📚 7. Common Patterns");
console.log("-------------------");

// Email pattern
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emails = [
    "user@example.com",
    "test.email@domain.co.uk",
    "invalid-email",
    "@domain.com",
    "user@"
];

console.log("Email validation:");
emails.forEach(email => {
    console.log(`"${email}": ${emailPattern.test(email)}`);
});

// Phone pattern
let phonePattern = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
let phones = [
    "(555) 123-4567",
    "(555)123-4567",
    "555-123-4567",
    "123-456-7890"
];

console.log("Phone validation:");
phones.forEach(phone => {
    console.log(`"${phone}": ${phonePattern.test(phone)}`);
});

// 8. String Methods with Regular Expressions
console.log("\n📚 8. String Methods with Regular Expressions");
console.log("--------------------------------------------");

let text2 = "The quick brown fox jumps over the lazy dog";
console.log("Text:", text2);

// match() method
let matchResult = text2.match(/quick|brown|fox/g);
console.log("match() result:", matchResult);

// search() method
let searchResult = text2.search(/fox/);
console.log("search() result:", searchResult);

// replace() method
let replaceResult = text2.replace(/fox/g, "cat");
console.log("replace() result:", replaceResult);

// split() method
let splitResult = text2.split(/\s+/);
console.log("split() result:", splitResult);

// 9. Advanced Regular Expressions
console.log("\n📚 9. Advanced Regular Expressions");
console.log("---------------------------------");

let htmlText = "<div>Hello <strong>World</strong> <em>JavaScript</em></div>";
console.log("HTML text:", htmlText);

// Extract text between tags
let tagRegex = /<(\w+)>(.*?)<\/\1>/g;
let tagMatches = htmlText.matchAll(tagRegex);

console.log("Tag matches:");
for (let match of tagMatches) {
    console.log(`Tag: ${match[1]}, Content: ${match[2]}`);
}

// Remove HTML tags
let cleanText = htmlText.replace(/<[^>]*>/g, "");
console.log("Clean text:", cleanText);

// 10. Practical Example: Data Extraction
console.log("\n📚 10. Practical Example: Data Extraction");
console.log("----------------------------------------");

let logEntry = "2024-01-15 10:30:45 [INFO] User john.doe logged in from 192.168.1.100";
console.log("Log entry:", logEntry);

// Extract different parts using regex
let logRegex = /(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})\s+\[(\w+)\]\s+User\s+(\w+\.\w+)\s+logged in from\s+(\d+\.\d+\.\d+\.\d+)/;
let logMatch = logEntry.match(logRegex);

if (logMatch) {
    console.log("Extracted data:");
    console.log("- Date:", logMatch[1]);
    console.log("- Time:", logMatch[2]);
    console.log("- Level:", logMatch[3]);
    console.log("- User:", logMatch[4]);
    console.log("- IP:", logMatch[5]);
} else {
    console.log("No match found");
}

// 11. Password Strength Validation
console.log("\n📚 11. Password Strength Validation");
console.log("----------------------------------");

function validatePasswordStrength(password) {
    let checks = {
        hasMinLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        hasNoSpaces: !/\s/.test(password),
        hasNoConsecutive: !/(.)\1{2,}/.test(password)
    };
    
    let score = Object.values(checks).filter(Boolean).length;
    let strength = score >= 6 ? 'Strong' : score >= 4 ? 'Medium' : 'Weak';
    
    return { ...checks, score, strength };
}

let passwords = [
    "password",
    "Password123",
    "Password123!",
    "VeryStrongPassword123!",
    "P@ssw0rd!",
    "weak"
];

passwords.forEach(password => {
    let validation = validatePasswordStrength(password);
    console.log(`"${password}": ${validation.strength} (${validation.score}/7)`);
});

// 12. Text Processing with Regular Expressions
console.log("\n📚 12. Text Processing with Regular Expressions");
console.log("----------------------------------------------");

let article = "JavaScript is a programming language. It is used for web development. JavaScript is popular.";
console.log("Article:", article);

// Count word frequency
let wordFrequency = {};
let words = article.toLowerCase().match(/\b\w+\b/g);

words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

console.log("Word frequency:", wordFrequency);

// Find sentences
let sentences = article.match(/[^.!?]+[.!?]+/g);
console.log("Sentences:", sentences);

// Extract capitalized words
let capitalizedWords = article.match(/\b[A-Z][a-z]+\b/g);
console.log("Capitalized words:", capitalizedWords);

// 13. Regular Expression Flags
console.log("\n📚 13. Regular Expression Flags");
console.log("-------------------------------");

let text3 = "Hello World\nHello JavaScript\nHello Programming";
console.log("Text with newlines:", text3);

// Global flag
let globalRegex = /hello/gi;
let globalMatches = text3.match(globalRegex);
console.log("Global matches:", globalMatches);

// Multiline flag
let multilineRegex = /^hello/gi;
let multilineMatches = text3.match(multilineRegex);
console.log("Multiline matches:", multilineMatches);

// 14. Performance Considerations
console.log("\n📚 14. Performance Considerations");
console.log("--------------------------------");

// Compile regex once for better performance
let emailRegexCompiled = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let testEmails = ["user@example.com", "invalid-email", "test@domain.org"];

console.time("Regex test");
for (let i = 0; i < 1000; i++) {
    testEmails.forEach(email => emailRegexCompiled.test(email));
}
console.timeEnd("Regex test");

// Avoid catastrophic backtracking
let badRegex = /(a+)+$/; // This can cause performance issues
let goodRegex = /a+$/;   // This is more efficient

console.log("Bad regex test:", badRegex.test("aaaaaaaaaaaaaaaaaaaa"));
console.log("Good regex test:", goodRegex.test("aaaaaaaaaaaaaaaaaaaa"));

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Regular expressions are powerful pattern matching tools");
console.log("- Character classes match specific types of characters");
console.log("- Quantifiers control how many times patterns match");
console.log("- Anchors and boundaries define where patterns must occur");
console.log("- Groups capture parts of matches for later use");
console.log("- Common patterns exist for email, phone, and other formats");
console.log("- String methods work well with regular expressions");
console.log("- Performance matters when using regex in loops");
console.log("- Practice is essential for mastering regular expressions");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a regex to match email addresses");
console.log("2. Build a regex to validate phone numbers");
console.log("3. Use regex to extract data from formatted text");
console.log("4. Create a password strength validator with regex");
console.log("5. Use regex to clean and format text data");
