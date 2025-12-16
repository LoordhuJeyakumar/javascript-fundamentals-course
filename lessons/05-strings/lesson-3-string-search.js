// Lesson 3: String Search and Manipulation
// This file teaches string searching and manipulation techniques

console.log("📝 Welcome to Strings Lesson 3: String Search and Manipulation!");
console.log("=============================================================");

// 1. Finding Substrings
console.log("\n📚 1. Finding Substrings");
console.log("------------------------");

let text = "JavaScript is a powerful programming language. JavaScript is widely used.";
console.log("Text:", text);

// indexOf() - find first occurrence
let firstIndex = text.indexOf("JavaScript");
console.log("indexOf('JavaScript'):", firstIndex);

// lastIndexOf() - find last occurrence
let lastIndex = text.lastIndexOf("JavaScript");
console.log("lastIndexOf('JavaScript'):", lastIndex);

// indexOf() with start position
let secondIndex = text.indexOf("JavaScript", firstIndex + 1);
console.log("indexOf('JavaScript', start):", secondIndex);

// indexOf() - not found
let notFound = text.indexOf("Python");
console.log("indexOf('Python'):", notFound);

// 2. Checking String Content
console.log("\n📚 2. Checking String Content");
console.log("----------------------------");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Sentence:", sentence);

// includes() - check if string contains substring
let hasFox = sentence.includes("fox");
let hasCat = sentence.includes("cat");
console.log("includes('fox'):", hasFox);
console.log("includes('cat'):", hasCat);

// startsWith() - check if string starts with substring
let startsWithThe = sentence.startsWith("The");
let startsWithQuick = sentence.startsWith("quick");
console.log("startsWith('The'):", startsWithThe);
console.log("startsWith('quick'):", startsWithQuick);

// endsWith() - check if string ends with substring
let endsWithDog = sentence.endsWith("dog");
let endsWithCat = sentence.endsWith("cat");
console.log("endsWith('dog'):", endsWithDog);
console.log("endsWith('cat'):", endsWithCat);

// 3. String Replacement
console.log("\n📚 3. String Replacement");
console.log("-----------------------");

let originalText = "Hello World Hello World Hello World";
console.log("Original text:", originalText);

// replace() - replace first occurrence
let replacedFirst = originalText.replace("World", "JavaScript");
console.log("replace('World', 'JavaScript'):", replacedFirst);

// replaceAll() - replace all occurrences
let replacedAll = originalText.replaceAll("World", "JavaScript");
console.log("replaceAll('World', 'JavaScript'):", replacedAll);

// replace() with regular expression
let replacedRegex = originalText.replace(/World/g, "JavaScript");
console.log("replace(/World/g, 'JavaScript'):", replacedRegex);

// 4. Advanced String Replacement
console.log("\n📚 4. Advanced String Replacement");
console.log("--------------------------------");

let data = "User: john, Age: 25, City: New York";
console.log("Data:", data);

// Replace with function

/* 
This section demonstrates how to use the replace() method with a function as the replacement argument.
/(\w+):\s*(\w+)/g
    1. (\w+): Matches a sequence of word characters (letters, digits, or underscores) followed by a colon. This captures the key (e.g., "User", "Age", "City").
    2. \s*: Matches any whitespace characters (spaces, tabs) that may appear after the colon.
    3. (\w+): Matches another sequence of word characters, capturing the value associated with the key (e.g., "john", "25", "NewYork").
    4. g: The global flag ensures that all occurrences in the string are matched, not just the first one.


*/
let formattedData = data.replace(/(\w+):\s*(\w+)/g, (match, key, value) => {
    return `${key.toUpperCase()}: ${value.toUpperCase()}`;
});
console.log("Formatted data:", formattedData);

// Replace multiple patterns
let text2 = "Hello 123 World 456";
let cleanedText = text2.replace(/\d+/g, "NUMBER");// replaces all occurrences of the specified substring with the specified replacement = /\d+/g is a regular expression that matches all occurrences of one or more digits
console.log("Replace numbers:", cleanedText);

// 5. String Splitting
console.log("\n📚 5. String Splitting");
console.log("--------------------");

let csvData = "apple,banana,orange,grape,kiwi";
console.log("CSV data:", csvData);

// Split by comma
let fruits = csvData.split(",");
console.log("Split by comma:", fruits);

// Split by space
let words = "Hello World JavaScript Programming".split(" ");
console.log("Split by space:", words);

// Split by character
let chars = "Hello".split("");
console.log("Split by character:", chars);

// Split with limit
let limitedSplit = csvData.split(",", 3);
console.log("Split with limit 3:", limitedSplit);

// 6. String Joining
console.log("\n📚 6. String Joining");
console.log("-------------------");

let fruitArray = ["apple", "banana", "orange"];
console.log("Fruit array:", fruitArray);

// Join with different separators
let joinedComma = fruitArray.join(",");
let joinedSpace = fruitArray.join(" ");
let joinedDash = fruitArray.join("-");
let joinedNoSep = fruitArray.join("");

console.log("Joined with comma:", joinedComma);
console.log("Joined with space:", joinedSpace);
console.log("Joined with dash:", joinedDash);
console.log("Joined with no separator:", joinedNoSep);

// 7. String Substring Extraction
console.log("\n📚 7. String Substring Extraction");
console.log("---------------------------------");

let fullText = "JavaScript Programming Language";
console.log("Full text:", fullText);

// substring() - extract substring
let sub1 = fullText.substring(0, 10);
let sub2 = fullText.substring(11);
let sub3 = fullText.substring(11, 22);
console.log("substring(0, 10):", sub1);
console.log("substring(11):", sub2);
console.log("substring(11, 22):", sub3);

// slice() - extract substring (supports negative indices)
let slice1 = fullText.slice(0, 10);
let slice2 = fullText.slice(-8); // Last 8 characters
let slice3 = fullText.slice(11, -9); // From index 11 to 9 from end
console.log("slice(0, 10):", slice1);
console.log("slice(-8):", slice2);
console.log("slice(11, -9):", slice3);

// 8. String Case Manipulation
console.log("\n📚 8. String Case Manipulation");
console.log("-----------------------------");

let mixedCase = "hELLo WoRLd jAVaScRiPt";
console.log("Mixed case:", mixedCase);

// Convert to different cases
let upperCase = mixedCase.toUpperCase();
let lowerCase = mixedCase.toLowerCase();
let titleCase = mixedCase.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();// returns a new string with the first character converted to uppercase and the rest of the string converted to lowercase
});

console.log("Uppercase:", upperCase);
console.log("Lowercase:", lowerCase);
console.log("Title case:", titleCase);

// 9. String Trimming and Cleaning
console.log("\n📚 9. String Trimming and Cleaning");
console.log("---------------------------------");

let messyText = "   Hello World   \n\t  ";
console.log("Messy text:", `"${messyText}"`);

// Basic trimming
let trimmed = messyText.trim();
console.log("trim():", `"${trimmed}"`);

// Trim start and end separately
let trimmedStart = messyText.trimStart();
let trimmedEnd = messyText.trimEnd();
console.log("trimStart():", `"${trimmedStart}"`);
console.log("trimEnd():", `"${trimmedEnd}"`);

// Remove all whitespace
let noWhitespace = messyText.replace(/\s/g, "");
console.log("No whitespace:", `"${noWhitespace}"`);

// 10. String Validation and Checking
console.log("\n📚 10. String Validation and Checking");
console.log("------------------------------------");

function validateString(str) {
    return {
        isEmpty: str.length === 0,
        isWhitespace: str.trim().length === 0,
        hasNumbers: /\d/.test(str),
        hasLetters: /[a-zA-Z]/.test(str),
        hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(str),
        isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
        isPhone: /^\d{3}-\d{3}-\d{4}$/.test(str),
        isURL: /^https?:\/\/.+/.test(str)
    };
}

let testStrings = [
    "",
    "   ",
    "hello123",
    "user@email.com",
    "123-456-7890",
    "https://example.com",
    "Hello World!",
    "special@chars#here"
];

testStrings.forEach(str => {
    let validation = validateString(str);
    console.log(`"${str}":`, validation);
});

// 11. Practical Example: Text Processing Pipeline
console.log("\n📚 11. Practical Example: Text Processing Pipeline");
console.log("------------------------------------------------");

let rawText = "  HELLO WORLD 123  ";
console.log("Raw text:", `"${rawText}"`);

// Process text through pipeline
let processedText = rawText
    .trim()                    // Remove whitespace
    .toLowerCase()             // Convert to lowercase
    .replace(/\d+/g, "NUMBER") // Replace numbers
    .replace(/\s+/g, "-")      // Replace spaces with dashes
    .replace(/[^a-z-]/g, "");  // Remove non-alphabetic chars except dashes

console.log("Processed text:", `"${processedText}"`);

// 12. Practical Example: Data Extraction
console.log("\n📚 12. Practical Example: Data Extraction");
console.log("----------------------------------------");

let logEntry = "2024-01-15 10:30:45 [INFO] User john.doe logged in from 192.168.1.100";
console.log("Log entry:", logEntry);

// Extract different parts
let dateMatch = logEntry.match(/\d{4}-\d{2}-\d{2}/);
let timeMatch = logEntry.match(/\d{2}:\d{2}:\d{2}/);
let levelMatch = logEntry.match(/\[(\w+)\]/);
let userMatch = logEntry.match(/User (\w+\.\w+)/);
let ipMatch = logEntry.match(/(\d+\.\d+\.\d+\.\d+)/);

console.log("Extracted data:");
console.log("- Date:", dateMatch ? dateMatch[0] : "Not found");
console.log("- Time:", timeMatch ? timeMatch[0] : "Not found");
console.log("- Level:", levelMatch ? levelMatch[1] : "Not found");
console.log("- User:", userMatch ? userMatch[1] : "Not found");
console.log("- IP:", ipMatch ? ipMatch[1] : "Not found");

// 13. String Search with Regular Expressions
console.log("\n📚 13. String Search with Regular Expressions");
console.log("---------------------------------------------");

let emailText = "Contact us at support@example.com or sales@company.org for more information.";
console.log("Email text:", emailText);

// Find all email addresses
let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
let emails = emailText.match(emailRegex);
console.log("Found emails:", emails);

// Find all phone numbers
let phoneText = "Call us at 123-456-7890 or (555) 123-4567 for support.";
let phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
let phones = phoneText.match(phoneRegex);
console.log("Found phones:", phones);

// 14. Advanced String Manipulation
console.log("\n📚 14. Advanced String Manipulation");
console.log("-----------------------------------");

let htmlText = "<div>Hello <strong>World</strong> <em>JavaScript</em></div>";
console.log("HTML text:", htmlText);

// Remove HTML tags
let cleanText = htmlText.replace(/<[^>]*>/g, "");
console.log("Clean text:", cleanText);

// Extract text between tags
let strongText = htmlText.match(/<strong>(.*?)<\/strong>/);
let emText = htmlText.match(/<em>(.*?)<\/em>/);
console.log("Strong text:", strongText ? strongText[1] : "Not found");
console.log("Em text:", emText ? emText[1] : "Not found");

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- indexOf() and lastIndexOf() find substring positions");
console.log("- includes(), startsWith(), endsWith() check content");
console.log("- replace() and replaceAll() replace text");
console.log("- split() converts strings to arrays");
console.log("- join() converts arrays to strings");
console.log("- substring() and slice() extract parts");
console.log("- Regular expressions enable advanced pattern matching");
console.log("- Method chaining allows complex text processing");

console.log("\n📝 Practice Exercises:");
console.log("1. Find all occurrences of a word in a text");
console.log("2. Replace multiple patterns in a string");
console.log("3. Split a CSV string and process each field");
console.log("4. Extract specific information from formatted text");
console.log("5. Clean and validate user input");
