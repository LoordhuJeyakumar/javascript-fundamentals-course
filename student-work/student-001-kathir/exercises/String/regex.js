console.log("Exercise 6: Regular Expressions");
// Exercise 1: Basic pattern matching
console.log("\n1. Basic Pattern Matching:");

function findPattern(str, pattern, flags = 'g') {
    const regex = new RegExp(pattern, flags);
    return str.match(regex) || [];
}
let text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Text:", text);
console.log("Find 'fox':", findPattern(text, 'fox'));
console.log("Find 'the' (case insensitive):", findPattern(text, 'the', 'gi'));
console.log("Find words starting with 'q':", findPattern(text, '\\bq\\w+', 'gi'));

// Exercise 2: Character classes and quantifiers
console.log("\n2. Character Classes and Quantifiers:");

function analyzeText(str) {
    return {
        digits: (str.match(/\d/g) || []).length,
        letters: (str.match(/[a-zA-Z]/g) || []).length,
        spaces: (str.match(/\s/g) || []).length,
        punctuation: (str.match(/[.,!?;:]/g) || []).length,
        wordsStartingWithA: str.match(/\b[aA]\w*/g) || [],
        longWords: str.match(/\b\w{6,}\b/g) || []
    };
}
let sampleText = "Hello World! There are 123 apples and 45 oranges.";
console.log("Sample text:", sampleText);
console.log("Analysis:", analyzeText(sampleText));

// Exercise 3: Word boundaries and anchors
console.log("\n3. Word Boundaries and Anchors:");

function findWords(str, pattern) {
    const regex = new RegExp(pattern, 'gi');
    return str.match(regex) || [];
}
let wordText = "The cat in the hat sat on the mat. The cat was happy.";
console.log("Word text:", wordText);
console.log("Words starting with 'th':", findWords(wordText, '\\bth\\w*'));
console.log("Words ending with 'at':", findWords(wordText, '\\b\\w*at\\b'));
console.log("Words with exactly 3 letters:", findWords(wordText, '\\b\\w{3}\\b'));

// Exercise 4: Groups and Capturing
console.log("\n4. Groups and Capturing:");

function extractGroups(str, pattern) {
    const regex = new RegExp(pattern, 'g');
    const results = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        results.push({
            fullMatch: match[0],
            groups: match.slice(1)
        });
    }
    return results;
}
let dateText = "Today is 2023-12-25 and tomorrow is 2023-12-26";
let emailText = "Contact john@example.com or jane@company.org";
console.log("Date text:", dateText);
console.log("Date groups:", extractGroups(dateText, '(\\d{4})-(\\d{2})-(\\d{2})'));
console.log("Email text:", emailText);
console.log("Email groups:", extractGroups(emailText, '(\\w+)@([\\w.]+)'));

// Exercise 5: Lookahead and Lookbehind
console.log("\n5. Lookahead and Lookbehind:");

function findWithContext(str, pattern) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
}
let contextText = "The quick brown fox jumps over the lazy dog";
console.log("Context text:", contextText);
console.log("Words before 'fox':", findWithContext(contextText, '\\w+(?=\\s+fox)'));
console.log("Words after 'quick':", findWithContext(contextText, '(?<=quick\\s)\\w+'));
console.log("Words not followed by 'e':", findWithContext(contextText, '\\b\\w+(?!e)\\b'));

// Exercise 6: Replacement and Substitution
console.log("\n6. Replacement and Substitution:");

function replacePattern(str, pattern, replacement) {
    const regex = new RegExp(pattern, 'g');
    return str.replace(regex, replacement);
}
let replaceText = "The cat in the hat sat on the mat";
console.log("Original:", replaceText);
console.log("Replace 'cat' with 'dog':", replacePattern(replaceText, 'cat', 'dog'));
console.log("Capitalize first letter of each word:", replacePattern(replaceText, '\\b\\w', (match) => match.toUpperCase()));
console.log("Add quotes around words:", replacePattern(replaceText, '\\b\\w+\\b', '"$&"'));

// Exercise 7: Validation Patterns
console.log("\n7. Validation Patterns:");

function validatePattern(str, type) {
    const patterns = {
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        phone: /^(\(\d{3}\)\s?|\d{3}[-. ]?)\d{3}[-. ]?\d{4}$/,
        url: /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i,
        zipcode: /^\d{5}(-\d{4})?$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    };

    const regex = patterns[type];
    if (!regex) return { valid: false, error: "Unknown validation type" };

    const valid = regex.test(str);
    return {
        valid,
        input: str,
        type,
        message: valid ? "Valid input" : `Invalid ${type} format`
    };
}
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

// Exercise 8: Advanced Regex Techniques
console.log("\n8. Advanced Regex Techniques:");

function advancedRegex(str, operation) {
    switch (operation) {
        case "repeated":
            return str.match(/\b(\w+)\b(?=.*\b\1\b)/gi) || [];
        case "camelCase":
            return str.replace(/([a-z])([A-Z])/g, '$1 $2');
        case "palindromes":
            const words = str.match(/\b\w+\b/g) || [];
            return words.filter(w => w.toLowerCase() === w.toLowerCase().split('').reverse().join(''));
        case "numbersWithUnits":
            return str.match(/\b\d+(\.\d+)?\s?[a-zA-Z]+\b/g) || [];
        default:
            return [];
    }
}
let advancedText = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Advanced text:", advancedText);
console.log("Extract repeated words:", advancedRegex(advancedText, "repeated"));
console.log("Transform camelCase:", advancedRegex("helloWorldHowAreYou", "camelCase"));
console.log("Find palindromes:", advancedRegex("racecar level hello world", "palindromes"));
console.log("Extract numbers with units:", advancedRegex("I have 5 apples and 3.5 kg of flour", "numbersWithUnits"));