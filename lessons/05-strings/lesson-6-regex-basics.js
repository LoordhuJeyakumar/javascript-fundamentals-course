// Lesson 6: Regular Expressions Basics
// This file teaches regular expressions for string pattern matching

console.log("📝 Welcome to Strings Lesson 6: Regular Expressions Basics!");
console.log("=========================================================");

/* 
Regular expressions are patterns that are used to match and manipulate strings.
They are a powerful tool for string pattern matching, searching, and manipulation.
Regular expressions are a sequence of characters that form a search pattern.
*/

// 1. Basic Regular Expression Syntax
console.log("\n📚 1. Basic Regular Expression Syntax");
console.log("------------------------------------");

let text = "The quick brown fox jumps over the lazy dog";
console.log("Text:", text);

// Literal pattern

/* 
 syntax: /pattern/modifiers
 pattern: the pattern to match
 modifiers: optional modifiers
 modifiers: 
 i: case insensitive search
 g: global search (find all matches)

*/
let foxRegex = /fox/; // This is a literal pattern = > /fox/ is a regular expression that matches the string "fox".
console.log("foxRegex.test(text):", foxRegex.test(text));

// Case insensitive
let quickRegex = /QUICK/i; // This is a case insensitive pattern = > /QUICK/i is a regular expression that matches the string "QUICK" in a case insensitive manner.
console.log("quickRegex.test('QUICK'):", quickRegex.test('QUICK'));
console.log("quickRegex.test('QUICK'):", quickRegex.test(text));

// Global search
let theRegex = /the/gi; // This is a global search pattern = > /the/gi is a regular expression that matches the string "the" in a global manner.

let matches = text.match(theRegex);
console.log("theRegex matches:", matches);

// 2. Character Classes
console.log("\n📚 2. Character Classes");
console.log("--------------------");

let sampleText = "Hello World 123!";
console.log("Sample text:", sampleText);

// Digit character class
/* 
syntax: \d
description: matches any digit (0-9)
example: /\d/ matches "123"
*/
let digitRegex = /\d/; // This is a digit character class = > /\d/ is a regular expression that matches any digit.
console.log("Contains digits:", digitRegex.test(sampleText));

// Non-digit character class

/* 
syntax: \D
description: matches any non-digit (0-9)
example: /\D/ matches "Hello"
*/
let nonDigitRegex = /\D/; // This is a non-digit character class = > /\D/ is a regular expression that matches any non-digit.
console.log("Contains non-digits:", nonDigitRegex.test(sampleText));

// Word character class
/* 
syntax: \w
description: matches any word character (a-z, A-Z, 0-9, _)
example: /\w/ matches "Hello"
*/
let wordRegex = /\w/; // This is a word character class = > /\w/ is a regular expression that matches any word character.
console.log("Contains word characters:", wordRegex.test(sampleText));

// Non-word character class
/* 
syntax: \W
description: matches any non-word character (a-z, A-Z, 0-9, _)
example: /\W/ matches "123"
*/
let nonWordRegex = /\W/; // This is a non-word character class = > /\W/ is a regular expression that matches any non-word character.
console.log("Contains non-word characters:", nonWordRegex.test(sampleText));

// Whitespace character class
/* 
syntax: \s
description: matches any whitespace character (space, tab, newline, etc.)
example: /\s/ matches " "
*/
let whitespaceRegex = /\s/; // This is a whitespace character class = > /\s/ is a regular expression that matches any whitespace character.
console.log("Contains whitespace:", whitespaceRegex.test(sampleText));

// 3. Quantifiers
console.log("\n📚 3. Quantifiers");
console.log("----------------");

let numbers = "123 4567 89 0";
console.log("Numbers:", numbers);

// Zero or more
// syntax: *
// description: matches zero or more of the preceding element
// example: /\d*/ matches "123", "4567", "89", "0"

let zeroOrMoreRegex = /\d*/g; // This is a zero or more quantifier = > /\d*/g is a regular expression that matches any digit zero or more times.
let zeroOrMoreMatches = numbers.match(zeroOrMoreRegex);
console.log("Zero or more digits:", zeroOrMoreMatches);

// One or more
// syntax: +
// description: matches one or more of the preceding element
// example: /\d+/ matches "123", "4567", "89", "0"

let oneOrMoreRegex = /\d+/g; // This is a one or more quantifier = > /\d+/g is a regular expression that matches any digit one or more times.
let oneOrMoreMatches = numbers.match(oneOrMoreRegex);
console.log("One or more digits:", oneOrMoreMatches);

// Zero or one
// syntax: ?
// description: matches zero or one of the preceding element
// example: /\d?/ matches "123", "4567", "89", "0"
let zeroOrOneRegex = /\d?/g; // This is a zero or one quantifier = > /\d?/g is a regular expression that matches any digit zero or one times.
let zeroOrOneMatches = numbers.match(zeroOrOneRegex);
console.log("Zero or one digit:", zeroOrOneMatches);

// Exact count
// syntax: {n}
// description: matches exactly n of the preceding element
// example: /\d{3}/ matches "123"
let exactCountRegex = /\d{3}/g; // This is an exact count quantifier = > /\d{3}/g is a regular expression that matches any digit exactly 3 times.
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
// syntax: ^
// description: matches the start of the string
// example: /^Hello/ matches "Hello World"
let startRegex = /^Hello/; // This is a start anchor = > /^Hello/ is a regular expression that matches the string "Hello" at the start of the string.
console.log("Starts with 'Hello':");
sentencesArray.forEach(sentence => {
    console.log(`"${sentence}": ${startRegex.test(sentence)}`);
});

// End anchor
// syntax: $
// description: matches the end of the string
// example: /World$/ matches "Hello World"
let endRegex = /World$/; // This is an end anchor = > /World$/ is a regular expression that matches the string "World" at the end of the string.
console.log("Ends with 'World':");
sentencesArray.forEach(sentence => {
    console.log(`"${sentence}": ${endRegex.test(sentence)}`);
});

// Word boundary
// syntax: \b
// description: matches a word boundary
// example: /\bHello\b matches "Hello"
let wordBoundaryRegex = /\bHello\b/; // This is a word boundary = > /\bHello\b is a regular expression that matches the string "Hello" at the start or end of a word.
console.log("Contains word 'Hello':");
sentencesArray.forEach(sentence => {
    console.log(`"${sentence}": ${wordBoundaryRegex.test(sentence)}`);
});

// 5. Groups and Capturing
console.log("\n📚 5. Groups and Capturing");
console.log("-------------------------");

let emailText = "Contact us at support@example.com or sales@company.org";
console.log("Email text:", emailText);

// Capture groups
// syntax: (pattern)
// description: captures the matched pattern
// example: /(\w+)@(\w+\.\w+)/ matches "support@example.com"

let emailRegex = /(\w+)@(\w+\.\w+)/g; // This is a capture group = > /(\w+)@(\w+\.\w+)/g is a regular expression that matches the string "support@example.com" and captures the username and domain.
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
// syntax: |
// description: matches either the pattern on the left or the pattern on the right
// example: /red|blue|green/ matches "red", "blue", "green"
let colorRegex = /red|blue|green/g; // This is an alternation = > /red|blue|green/g is a regular expression that matches the string "red", "blue", or "green".
let colorMatches = colorText.match(colorRegex);
console.log("Color matches:", colorMatches);

// Character sets
// syntax: [characters]
// description: matches any character in the set
// example: /[aeiou]/ matches "a", "e", "i", "o", "u"
let vowelRegex = /[aeiou]/gi; // This is a character set = > /[aeiou]/gi is a regular expression that matches any vowel.
let vowelMatches = colorText.match(vowelRegex);
console.log("Vowel matches:", vowelMatches);

// Negated character sets
// syntax: [^characters]
// description: matches any character not in the set
// example: /[^aeiou\s]/ matches "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
let consonantRegex = /[^aeiou\s]/gi; // This is a negated character set = > /[^aeiou\s]/gi is a regular expression that matches any consonant.
let consonantMatches = colorText.match(consonantRegex);
console.log("Consonant matches:", consonantMatches);

// 7. Common Patterns
console.log("\n📚 7. Common Patterns");
console.log("-------------------");

// Email pattern
// syntax: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// description: matches an email address
// example: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ matches "user@example.com"
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
