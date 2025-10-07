// Exercise 6: Regular Expressions
// Practice with regular expressions and pattern matching

console.log("💪 Exercise 6: Regular Expressions");
console.log("=================================");

// Exercise 1: Basic pattern matching
console.log("\n1. Basic Pattern Matching:");
// TODO: Create a function called findPattern that:
// - Takes a string and a pattern as parameters
// - Returns an array of all matches
// - Support basic regex patterns
// - Handle case sensitivity
// Hint: Use RegExp constructor and match method

function findPattern(str, pattern, flags = 'g') {
    // Your code here
}

// Test your function
let text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Text:", text);
console.log("Find 'fox':", findPattern(text, 'fox'));
console.log("Find 'the' (case insensitive):", findPattern(text, 'the', 'gi'));
console.log("Find words starting with 'q':", findPattern(text, '\\bq\\w+', 'gi'));

// Exercise 2: Character classes and quantifiers
console.log("\n2. Character Classes and Quantifiers:");
// TODO: Create a function called analyzeText that:
// - Takes a string as parameter
// - Returns an object with various text analysis
// - Count: digits, letters, spaces, punctuation
// - Find: words with specific patterns
// Hint: Use character classes [0-9], [a-zA-Z], [^a-zA-Z0-9\\s]

function analyzeText(str) {
    // Your code here
}

// Test your function
let sampleText = "Hello World! There are 123 apples and 45 oranges.";
console.log("Sample text:", sampleText);
console.log("Analysis:", analyzeText(sampleText));

// Exercise 3: Word boundaries and anchors
console.log("\n3. Word Boundaries and Anchors:");
// TODO: Create a function called findWords that:
// - Takes a string and a word pattern as parameters
// - Returns an array of matching words
// - Use word boundaries to find complete words
// - Support different word patterns
// Hint: Use \\b for word boundaries, ^ for start, $ for end

function findWords(str, pattern) {
    // Your code here
}

// Test your function
let wordText = "The cat in the hat sat on the mat. The cat was happy.";
console.log("Word text:", wordText);
console.log("Words starting with 'th':", findWords(wordText, 'th\\w*'));
console.log("Words ending with 'at':", findWords(wordText, '\\w*at'));
console.log("Words with exactly 3 letters:", findWords(wordText, '\\b\\w{3}\\b'));

// Exercise 4: Groups and capturing
console.log("\n4. Groups and Capturing:");
// TODO: Create a function called extractGroups that:
// - Takes a string and a pattern with groups as parameters
// - Returns an array of objects with group information
// - Extract different parts of the match
// - Handle named groups
// Hint: Use parentheses for groups, (?:) for non-capturing groups

function extractGroups(str, pattern) {
    // Your code here
}

// Test your function
let dateText = "Today is 2023-12-25 and tomorrow is 2023-12-26";
let emailText = "Contact john@example.com or jane@company.org";
console.log("Date text:", dateText);
console.log("Date groups:", extractGroups(dateText, '(\\d{4})-(\\d{2})-(\\d{2})'));
console.log("Email text:", emailText);
console.log("Email groups:", extractGroups(emailText, '(\\w+)@([\\w.]+)'));

// Exercise 5: Lookahead and lookbehind
console.log("\n5. Lookahead and Lookbehind:");
// TODO: Create a function called findWithContext that:
// - Takes a string and a pattern as parameters
// - Returns matches with their context
// - Use positive/negative lookahead and lookbehind
// - Find patterns with specific context
// Hint: Use (?=) for positive lookahead, (?!) for negative lookahead

function findWithContext(str, pattern) {
    // Your code here
}

// Test your function
let contextText = "The quick brown fox jumps over the lazy dog";
console.log("Context text:", contextText);
console.log("Words before 'fox':", findWithContext(contextText, '\\w+(?=\\s+fox)'));
console.log("Words after 'quick':", findWithContext(contextText, '(?<=quick\\s)\\w+'));
console.log("Words not followed by 'e':", findWithContext(contextText, '\\w+(?!e)'));

// Exercise 6: Replacement and substitution
console.log("\n6. Replacement and Substitution:");
// TODO: Create a function called replacePattern that:
// - Takes a string, pattern, and replacement as parameters
// - Returns the string with replacements
// - Support different replacement patterns
// - Handle capture groups in replacements
// Hint: Use replace method with function replacement

function replacePattern(str, pattern, replacement) {
    // Your code here
}

// Test your function
let replaceText = "The cat in the hat sat on the mat";
console.log("Original:", replaceText);
console.log("Replace 'cat' with 'dog':", replacePattern(replaceText, 'cat', 'dog'));
console.log("Capitalize first letter of each word:", replacePattern(replaceText, '\\b\\w', (match) => match.toUpperCase()));
console.log("Add quotes around words:", replacePattern(replaceText, '\\b\\w+\\b', '"$&"'));

// Exercise 7: Validation patterns
console.log("\n7. Validation Patterns:");
// TODO: Create a function called validatePattern that:
// - Takes a string and validation type as parameters
// - Returns validation result with details
// - Support different validation types
// - Provide detailed error information
// Hint: Use different regex patterns for different validations

function validatePattern(str, type) {
    // Your code here
}

// Test your function
let validationTests = [
    { input: "user@example.com", type: "email" },
    { input: "(555) 123-4567", type: "phone" },
    { input: "https://example.com", type: "url" },
    { input: "12345", type: "zipcode" },
    { input: "Password123!", type: "password" },
    { input: "invalid.email", type: "email" },
    { input: "123-456-789", type: "phone" }
];

validationTests.forEach(({ input, type }) => {
    console.log(`${input} (${type}):`, validatePattern(input, type));
});

// Exercise 8: Advanced regex techniques
console.log("\n8. Advanced Regex Techniques:");
// TODO: Create a function called advancedRegex that:
// - Takes a string and operation type as parameters
// - Performs advanced regex operations
// - Support: extraction, transformation, analysis
// - Handle complex patterns
// Hint: Use advanced regex features like backreferences, conditional patterns

function advancedRegex(str, operation) {
    // Your code here
}

// Test your function
let advancedText = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Advanced text:", advancedText);
console.log("Extract repeated words:", advancedRegex(advancedText, "repeated"));
console.log("Transform camelCase:", advancedRegex("helloWorldHowAreYou", "camelCase"));
console.log("Find palindromes:", advancedRegex("racecar level hello world", "palindromes"));
console.log("Extract numbers with units:", advancedRegex("I have 5 apples and 3.5 kg of flour", "numbersWithUnits"));

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced regular expressions.");
console.log("Key concepts practiced:");
console.log("- Basic pattern matching");
console.log("- Character classes and quantifiers");
console.log("- Word boundaries and anchors");
console.log("- Groups and capturing");
console.log("- Lookahead and lookbehind");
console.log("- Replacement and substitution");
console.log("- Validation patterns");
console.log("- Advanced regex techniques");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 7: String Optimization");
console.log("4. Ask questions if you need help");
