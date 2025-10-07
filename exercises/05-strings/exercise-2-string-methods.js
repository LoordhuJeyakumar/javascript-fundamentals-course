// Exercise 2: String Methods
// Complete the following exercises to practice string methods

console.log("📝 Exercise 2: String Methods");
console.log("============================");

// Exercise 2.1: Case Conversion Methods
console.log("\n🔧 Exercise 2.1: Case Conversion Methods");
console.log("---------------------------------------");

let text = "Hello World JavaScript";
console.log("Original text:", text);

// TODO: Complete the following case conversions
// 1. Convert to uppercase
let upperCase = text.toUpperCase();
console.log("Uppercase:", upperCase);

// 2. Convert to lowercase
let lowerCase = text.toLowerCase();
console.log("Lowercase:", lowerCase);

// 3. Convert to locale uppercase
let localeUpper = text.toLocaleUpperCase();
console.log("Locale uppercase:", localeUpper);

// 4. Convert to locale lowercase
let localeLower = text.toLocaleLowerCase();
console.log("Locale lowercase:", localeLower);

// Exercise 2.2: Trimming Methods
console.log("\n🔧 Exercise 2.2: Trimming Methods");
console.log("--------------------------------");

let messyText = "   Hello World   ";
console.log("Messy text:", `"${messyText}"`);

// TODO: Complete the following trimming operations
// 1. Trim whitespace from both ends
let trimmedWhitespace = messyText.trim();
console.log("Trimmed:", `"${trimmedWhitespace}"`);

// 2. Trim whitespace from start
let trimmedStartWhitespace = messyText.trimStart();
console.log("Trimmed start:", `"${trimmedStart}"`);

// 3. Trim whitespace from end
let trimmedEnd = messyText.trimEnd();
console.log("Trimmed end:", `"${trimmedEnd}"`);

// Exercise 2.3: Padding Methods
console.log("\n🔧 Exercise 2.3: Padding Methods");
console.log("------------------------------");

let number = "42";
console.log("Original number:", number);

// TODO: Complete the following padding operations
// 1. Pad start with zeros to 5 characters
let paddedStart = number.padStart(5, "0");
console.log("Padded start:", paddedStart);

// 2. Pad start with spaces to 8 characters
let paddedStart2 = number.padStart(8, " ");
console.log("Padded start (spaces):", `"${paddedStart2}"`);

// 3. Pad end with zeros to 5 characters
let paddedEnd = number.padEnd(5, "0");
console.log("Padded end:", paddedEnd);

// 4. Pad end with spaces to 8 characters
let paddedEnd2 = number.padEnd(8, " ");
console.log("Padded end (spaces):", `"${paddedEnd2}"`);

// Exercise 2.4: Character Access Methods
console.log("\n🔧 Exercise 2.4: Character Access Methods");
console.log("---------------------------------------");

let word = "JavaScript";
console.log("Word:", word);

// TODO: Complete the following character access operations
// 1. Get character at index 0
let charAt0 = word.charAt(0);
console.log("Character at 0:", charAt0);

// 2. Get character at index 4
let charAt4 = word.charAt(4);
console.log("Character at 4:", charAt4);

// 3. Get character at index 10 (out of bounds)
let charAt10 = word.charAt(10);
console.log("Character at 10:", charAt10);

// 4. Get character code at index 0
let charCodeAt0 = word.charCodeAt(0);
console.log("Character code at 0:", charCodeAt0);

// 5. Get character code at index 1
let charCodeAt1 = word.charCodeAt(1);
console.log("Character code at 1:", charCodeAt1);

// 6. Create character from codes
let charFromCode = String.fromCharCode(74, 97, 118, 97);
console.log("Character from codes:", charFromCode);

// Exercise 2.5: String Comparison Methods
console.log("\n🔧 Exercise 2.5: String Comparison Methods");
console.log("------------------------------------------");

let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

// TODO: Complete the following comparisons
// 1. Compare str1 and str2
let comparison1 = str1 === str2;
console.log(`"${str1}" === "${str2}":`, comparison1);

// 2. Compare str1 and str3
let comparison2 = str1 === str3;
console.log(`"${str1}" === "${str3}":`, comparison2);

// 3. Use localeCompare for str1 and str2
let localeCompare1 = str1.localeCompare(str2);
console.log(`"${str1}".localeCompare("${str2}"):`, localeCompare1);

// 4. Use localeCompare for str2 and str1
let localeCompare2 = str2.localeCompare(str1);
console.log(`"${str2}".localeCompare("${str1}"):`, localeCompare2);

// 5. Use localeCompare for str1 and str1
let localeCompare3 = str1.localeCompare(str1);
console.log(`"${str1}".localeCompare("${str1}"):`, localeCompare3);

// Exercise 2.6: String Search Methods
console.log("\n🔧 Exercise 2.6: String Search Methods");
console.log("-------------------------------------");

let text2 = "Hello World Hello JavaScript";
console.log("Text:", text2);

// TODO: Complete the following search operations
// 1. Find first occurrence of "Hello"
let indexOfHello = text2.indexOf("Hello");
console.log("indexOf('Hello'):", indexOfHello);

// 2. Find first occurrence of "World"
let indexOfWorld = text2.indexOf("World");
console.log("indexOf('World'):", indexOfWorld);

// 3. Find first occurrence of "Python" (not found)
let indexOfPython = text2.indexOf("Python");
console.log("indexOf('Python'):", indexOfPython);

// 4. Find last occurrence of "Hello"
let lastIndexOfHello = text2.lastIndexOf("Hello");
console.log("lastIndexOf('Hello'):", lastIndexOfHello);

// 5. Check if text includes "Hello"
let includesHello = text2.includes("Hello");
console.log("includes('Hello'):", includesHello);

// 6. Check if text includes "Python"
let includesPython = text2.includes("Python");
console.log("includes('Python'):", includesPython);

// Exercise 2.7: String Position Methods
console.log("\n🔧 Exercise 2.7: String Position Methods");
console.log("---------------------------------------");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Sentence:", sentence);

// TODO: Complete the following position checks
// 1. Check if sentence starts with "The"
let startsWithThe = sentence.startsWith("The");
console.log("startsWith('The'):", startsWithThe);

// 2. Check if sentence starts with "quick"
let startsWithQuick = sentence.startsWith("quick");
console.log("startsWith('quick'):", startsWithQuick);

// 3. Check if sentence ends with "dog"
let endsWithDog = sentence.endsWith("dog");
console.log("endsWith('dog'):", endsWithDog);

// 4. Check if sentence ends with "cat"
let endsWithCat = sentence.endsWith("cat");
console.log("endsWith('cat'):", endsWithCat);

// Exercise 2.8: String Replacement Methods
console.log("\n🔧 Exercise 2.8: String Replacement Methods");
console.log("------------------------------------------");

let originalText = "Hello World Hello World Hello World";
console.log("Original text:", originalText);

// TODO: Complete the following replacement operations
// 1. Replace first occurrence of "World" with "JavaScript"
let replacedFirst = originalText.replace("World", "JavaScript");
console.log("replace('World', 'JavaScript'):", replacedFirst);

// 2. Replace all occurrences of "World" with "JavaScript"
let replacedAll = originalText.replaceAll("World", "JavaScript");
console.log("replaceAll('World', 'JavaScript'):", replacedAll);

// 3. Replace all occurrences using regex
let replacedRegex = originalText.replace(/World/g, "JavaScript");
console.log("replace(/World/g, 'JavaScript'):", replacedRegex);

// Exercise 2.9: String Splitting and Joining
console.log("\n🔧 Exercise 2.9: String Splitting and Joining");
console.log("--------------------------------------------");

let csvData = "apple,banana,orange,grape,kiwi";
console.log("CSV data:", csvData);

// TODO: Complete the following splitting and joining operations
// 1. Split by comma
let fruits = csvData.split(",");
console.log("Split by comma:", fruits);

// 2. Split by space
let wordsSplitBySpace = "Hello World JavaScript Programming".split(" ");
console.log("Split by space:", wordsSplitBySpace);

// 3. Split by character
let chars = "Hello".split("");
console.log("Split by character:", chars);

// 4. Split with limit
let limitedSplit = csvData.split(",", 3);
console.log("Split with limit 3:", limitedSplit);

// 5. Join fruits with " | "
let joinedFruits = fruits.join(" | ");
console.log("Joined fruits:", joinedFruits);

// 6. Join words with "-"
let joinedWords = wordsSplitBySpace.join("-");
console.log("Joined words:", joinedWords);

// Exercise 2.10: String Substring Methods
console.log("\n🔧 Exercise 2.10: String Substring Methods");
console.log("------------------------------------------");

let fullText = "JavaScript Programming Language";
console.log("Full text:", fullText);

// TODO: Complete the following substring operations
// 1. Extract substring from index 0 to 10
let sub1 = fullText.substring(0, 10);
console.log("substring(0, 10):", sub1);

// 2. Extract substring from index 11 to end
let sub2 = fullText.substring(11);
console.log("substring(11):", sub2);

// 3. Extract substring from index 11 to 22
let sub3 = fullText.substring(11, 22);
console.log("substring(11, 22):", sub3);

// 4. Extract substring using slice from index 0 to 10
let slice1 = fullText.slice(0, 10);
console.log("slice(0, 10):", slice1);

// 5. Extract substring using slice from index -8 (last 8 characters)
let slice2 = fullText.slice(-8);
console.log("slice(-8):", slice2);

// 6. Extract substring using slice from index 11 to -9
let slice3 = fullText.slice(11, -9);
console.log("slice(11, -9):", slice3);

// Exercise 2.11: Practical Example - Text Processing
console.log("\n🔧 Exercise 2.11: Practical Example - Text Processing");
console.log("--------------------------------------------------");

let userInput = "  JOHN.DOE@EMAIL.COM  ";
console.log("Raw user input:", `"${userInput}"`);

// TODO: Complete the text processing
// 1. Trim whitespace
let trimmed = userInput.trim();
console.log("Trimmed:", `"${trimmed}"`);

// 2. Convert to lowercase
let lowerCaseConverted = trimmed.toLowerCase();
console.log("Lowercase:", lowerCaseConverted);

// 3. Replace dot with @
let replaced = lowerCaseConverted.replace(".", "@");
console.log("Replaced:", replaced);

// 4. Check if it contains @
let containsAt = replaced.includes("@");
console.log("Contains @:", containsAt);

// 5. Check if length is greater than 5
let isLongEnough = replaced.length > 5;
console.log("Length > 5:", isLongEnough);

// 6. Determine if it's a valid email format
let isValidEmail = containsAt && isLongEnough;
console.log("Is valid email:", isValidEmail);

// Exercise 2.12: Practical Example - Text Analysis
console.log("\n🔧 Exercise 2.12: Practical Example - Text Analysis");
console.log("------------------------------------------------");

let article = "JavaScript is a programming language. It is used for web development. JavaScript is popular.";
console.log("Article:", article);

// TODO: Complete the text analysis
// 1. Count words
let wordCount = article.split(" ").length;
console.log("Word count:", wordCount);

// 2. Count sentences
let sentenceCount = article.split(".").length - 1;
console.log("Sentence count:", sentenceCount);

// 3. Count characters
let charCount = article.length;
console.log("Character count:", charCount);

// 4. Count characters without spaces
let charCountNoSpaces = article.replace(/\s/g, "").length;
console.log("Character count (no spaces):", charCountNoSpaces);

// 5. Count "JavaScript" mentions
let jsCount = (article.match(/JavaScript/gi) || []).length;
console.log("'JavaScript' mentions:", jsCount);

// 6. Find the longest word
let words = article.split(" ");
let longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
);
console.log("Longest word:", longestWord);

console.log("\n🎉 Exercise 2 Complete!");
console.log("======================");
console.log("Excellent work! You've completed the string methods exercises.");
console.log("Key concepts practiced:");
console.log("- Case conversion methods");
console.log("- Trimming and padding methods");
console.log("- Character access methods");
console.log("- String comparison methods");
console.log("- String search methods");
console.log("- String replacement methods");
console.log("- String splitting and joining");
console.log("- String substring methods");
console.log("- Practical text processing");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: String Search and Manipulation");
console.log("4. Ask questions if you need help");
