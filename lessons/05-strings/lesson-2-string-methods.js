// Lesson 2: String Methods
// This file teaches string methods and properties

console.log("📝 Welcome to Strings Lesson 2: String Methods!");
console.log("==============================================");

// 1. Case Conversion Methods
console.log("\n📚 1. Case Conversion Methods");
console.log("----------------------------");

let text = "Hello World JavaScript";
console.log("Original text:", text);

// toUpperCase()
let upperCase = text.toUpperCase();
console.log("toUpperCase():", upperCase);

// toLowerCase()
let lowerCase = text.toLowerCase();
console.log("toLowerCase():", lowerCase);

// toLocaleUpperCase() and toLocaleLowerCase() = works with the local language
let localeUpper = text.toLocaleUpperCase();
let localeLower = text.toLocaleLowerCase();
console.log("toLocaleUpperCase():", localeUpper);
console.log("toLocaleLowerCase():", localeLower);

// 2. Trimming Methods
console.log("\n📚 2. Trimming Methods");
console.log("--------------------");

let messyText = "   Hello World   ";
console.log("Messy text:", `"${messyText}"`);

// trim() - removes whitespace from both ends
let trimmed = messyText.trim();
console.log("trim():", `"${trimmed}"`);

// trimStart() or trimLeft() - removes whitespace from start
let trimmedStart = messyText.trimStart();
console.log("trimStart():", `"${trimmedStart}"`);

// trimEnd() or trimRight() - removes whitespace from end
let trimmedEnd = messyText.trimEnd();
console.log("trimEnd():", `"${trimmedEnd}"`);

// 3. Padding Methods
console.log("\n📚 3. Padding Methods"); // padding is adding whitespace to the beginning or end of a string
console.log("-------------------");

let number = "42";
console.log("Original number:", number);

// padStart() - pad at the beginning
let paddedStart = number.padStart(5, "0");
console.log("padStart(5, '0'):", paddedStart);

let paddedStart2 = number.padStart(8, " ");
console.log("padStart(8, ' '):", `"${paddedStart2}"`);

// padEnd() - pad at the end
let paddedEnd = number.padEnd(5, "0");
console.log("padEnd(5, '0'):", paddedEnd);

let paddedEnd2 = number.padEnd(8, " ");
console.log("padEnd(8, ' '):", `"${paddedEnd2}"`);

// 4. Character Access Methods
console.log("\n📚 4. Character Access Methods");
console.log("----------------------------");

let word = "JavaScript";
console.log("Word:", word);

// charAt() - get character at index = returns the character at the specified index
console.log("charAt(0):", word.charAt(0));
console.log("charAt(4):", word.charAt(4));
console.log("charAt(10):", word.charAt(10)); // Returns empty string

// charCodeAt() - get character code = returns the ASCII code of the character at the specified index
console.log("charCodeAt(0):", word.charCodeAt(0)); // 'J' = 74 = ASCII code
console.log("charCodeAt(1):", word.charCodeAt(1)); // 'a' = 97

// fromCharCode() - create character from code = returns the character from the specified ASCII code
let charFromCode = String.fromCharCode(74, 97, 118, 97);
console.log("fromCharCode(74, 97, 118, 97):", charFromCode);

// 5. String Comparison Methods
console.log("\n📚 5. String Comparison Methods");
console.log("-------------------------------");

let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

console.log("String comparison:");
console.log(`"${str1}" === "${str2}":`, str1 === str2);
console.log(`"${str1}" === "${str3}":`, str1 === str3);

// localeCompare() - compare strings according to locale = compares two strings and returns a number indicating which string comes first in the sort order
let comparison1 = str1.localeCompare(str2);
let comparison2 = str2.localeCompare(str1);
let comparison3 = str1.localeCompare(str1);

console.log(`"${str1}".localeCompare("${str2}"):`, comparison1); // -1 (str1 < str2) = str1 comes before str2
console.log(`"${str2}".localeCompare("${str1}"):`, comparison2); // 1 (str2 > str1) = str2 comes after str1
console.log(`"${str1}".localeCompare("${str1}"):`, comparison3); // 0 (equal) = str1 is equal to str1

// 6. String Search Methods
console.log("\n📚 6. String Search Methods");
console.log("--------------------------");

let text2 = "Hello World Hello JavaScript";
console.log("Text:", text2);

// indexOf() - find first occurrence
let index1 = text2.indexOf("Hello");// returns the index of the first occurrence of the specified substring
let index2 = text2.indexOf("World");// returns the index of the first occurrence of the specified substring
let index3 = text2.indexOf("Python"); // Not found = returns -1 if the substring is not found

console.log("indexOf('Hello'):", index1); // returns the index of the first occurrence of the specified substring
console.log("indexOf('World'):", index2); // returns the index of the first occurrence of the specified substring
console.log("indexOf('Python'):", index3); // returns -1 if the substring is not found

// lastIndexOf() - find last occurrence
let lastIndex = text2.lastIndexOf("Hello");
console.log("lastIndexOf('Hello'):", lastIndex);

// includes() - check if string contains substring
let hasHello = text2.includes("Hello");
let hasPython = text2.includes("Python");
console.log("includes('Hello'):", hasHello);
console.log("includes('Python'):", hasPython);

// 7. String Position Methods
console.log("\n📚 7. String Position Methods");
console.log("----------------------------");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Sentence:", sentence);

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

// 8. String Replacement Methods
console.log("\n📚 8. String Replacement Methods");
console.log("--------------------------------");

let originalText = "Hello World Hello World";
console.log("Original text:", originalText);

// replace() - replace first occurrence
let replaced = originalText.replace("World", "JavaScript");
console.log("replace('World', 'JavaScript'):", replaced);

// replaceAll() - replace all occurrences
let replacedAll = originalText.replaceAll("World", "JavaScript");
console.log("replaceAll('World', 'JavaScript'):", replacedAll);

// 9. String Splitting and Joining
console.log("\n📚 9. String Splitting and Joining");
console.log("---------------------------------");

let csvData = "apple,banana,orange,grape";
console.log("CSV data:", csvData);

// split() - split string into array
let fruits = csvData.split(",");
console.log("split(','):", fruits);

let words = "Hello World JavaScript".split(" ");
console.log("split(' '):", words);

let chars = "Hello".split("");
console.log("split(''):", chars);

// join() - join array elements into string
let joinedFruits = fruits.join(" | ");
console.log("join(' | '):", joinedFruits);

let joinedWords = words.join("-");
console.log("join('-'):", joinedWords);

// 10. String Substring Methods
console.log("\n📚 10. String Substring Methods");
console.log("-------------------------------");

let fullText = "JavaScript Programming";
console.log("Full text:", fullText);

// substring() - extract substring = returns a new string that is a substring of the original string
let sub1 = fullText.substring(0, 10);
let sub2 = fullText.substring(11);
console.log("substring(0, 10):", sub1);
console.log("substring(11):", sub2);

// slice() - extract substring (similar to substring)
let slice1 = fullText.slice(0, 10);
let slice2 = fullText.slice(-11); // From end
console.log("slice(0, 10):", slice1);
console.log("slice(-11):", slice2);

// substr() - extract substring (deprecated, use slice instead)
let substr1 = fullText.substr(0, 10);
console.log("substr(0, 10):", substr1);

// 11. Practical Example: Text Processing
console.log("\n📚 11. Practical Example: Text Processing");
console.log("----------------------------------------");

let userInput = "  JOHN.DOE@EMAIL.COM  ";
console.log("Raw user input:", `"${userInput}"`);

// Process user input
let processedInput = userInput
    .trim()                    // Remove whitespace
    .toLowerCase()             // Convert to lowercase
    .replace(".", "@");        // Replace dot with @

console.log("Processed input:", processedInput);

// Validate processed input
if (processedInput.includes("@") && processedInput.length > 5) {
    console.log("Input appears to be a valid email format");
} else {
    console.log("Input does not appear to be a valid email format");
}

// 12. Practical Example: Text Analysis
console.log("\n📚 12. Practical Example: Text Analysis");
console.log("--------------------------------------");

let article = "JavaScript is a programming language. It is used for web development. JavaScript is popular.";
console.log("Article:", article);

// Analyze text
let wordCount = article.split(" ").length;
let sentenceCount = article.split(".").length - 1;
let charCount = article.length;
let charCountNoSpaces = article.replace(/\s/g, "").length;

// Count specific words
let jsCount = (article.match(/JavaScript/gi) || []).length;

console.log("Text analysis:");
console.log("- Word count:", wordCount);
console.log("- Sentence count:", sentenceCount);
console.log("- Character count:", charCount);
console.log("- Character count (no spaces):", charCountNoSpaces);
console.log("- 'JavaScript' mentions:", jsCount);

// 13. String Method Chaining
console.log("\n📚 13. String Method Chaining");
console.log("-----------------------------");

let messyData = "  HELLO WORLD  ";
console.log("Messy data:", `"${messyData}"`);

// Chain multiple methods
let cleanedData = messyData
    .trim()           // Remove whitespace
    .toLowerCase()    // Convert to lowercase
    .replace(" ", "-") // Replace space with dash
    .padEnd(15, "!"); // Pad to 15 characters

console.log("Cleaned data:", `"${cleanedData}"`);

// 14. String Validation Methods
console.log("\n📚 14. String Validation Methods");
console.log("--------------------------------");

function validateString(str) {
    let result = {
        isEmpty: str.length === 0,
        isWhitespace: str.trim().length === 0,
        hasNumbers: /\d/.test(str),
        hasLetters: /[a-zA-Z]/.test(str),
        isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
        isPhone: /^\d{3}-\d{3}-\d{4}$/.test(str)
    };
    return result;
}

let testStrings = [
    "",
    "   ",
    "hello123",
    "user@email.com",
    "123-456-7890",
    "Hello World"
];

testStrings.forEach(str => {
    let validation = validateString(str);
    console.log(`"${str}":`, validation);
});

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- toUpperCase() and toLowerCase() change case");
console.log("- trim() removes whitespace from ends");
console.log("- padStart() and padEnd() add padding");
console.log("- charAt() and charCodeAt() access characters");
console.log("- indexOf() and lastIndexOf() find positions");
console.log("- includes(), startsWith(), endsWith() check content");
console.log("- replace() and replaceAll() replace text");
console.log("- split() and join() convert between strings and arrays");
console.log("- substring() and slice() extract parts of strings");
console.log("- Method chaining allows multiple operations");

console.log("\n📝 Practice Exercises:");
console.log("1. Convert a string to uppercase and lowercase");
console.log("2. Trim whitespace from a string");
console.log("3. Find the position of a substring in a string");
console.log("4. Replace text in a string");
console.log("5. Split a string into an array and join it back");
