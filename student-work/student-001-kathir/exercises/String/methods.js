console.log(" Exercise 2: String Methods");
// Exercise 2.1: Case Conversion Methods
console.log("\n Exercise 2.1: Case Conversion Methods");
let text = "Hello World JavaScript";
console.log("Original text:", text);

let upperCase = text.toUpperCase();
console.log("Uppercase:", upperCase);

let lowerCase = text.toLowerCase();
console.log("Lowercase:", lowerCase);

let localeUpper = text.toLocaleUpperCase();
console.log("Locale uppercase:", localeUpper);

let localeLower = text.toLocaleLowerCase();
console.log("Locale lowercase:", localeLower);

// Exercise 2.2: Trimming Methods
console.log("\n Exercise 2.2: Trimming Methods");
let messyText = "   Hello World   ";
console.log("Messy text:", `"${messyText}"`);

let trimmedWhitespace = messyText.trim();
console.log("Trimmed:", `"${trimmedWhitespace}"`);

let trimmedStartWhitespace = messyText.trimStart();
console.log("Trimmed start:", `"${trimmedStartWhitespace}"`);

let trimmedEnd = messyText.trimEnd();
console.log("Trimmed end:", `"${trimmedEnd}"`);

// Exercise 2.3: Padding Methods
console.log("\n Exercise 2.3: Padding Methods");
let number = "42";
console.log("Original number:", number);

let paddedStart = number.padStart(5, "0");
console.log("Padded start:", paddedStart);

let paddedStart2 = number.padStart(8, " ");
console.log("Padded start (spaces):", `"${paddedStart2}"`);

let paddedEnd = number.padEnd(5, "0");
console.log("Padded end:", paddedEnd);

let paddedEnd2 = number.padEnd(8, " ");
console.log("Padded end (spaces):", `"${paddedEnd2}"`);

// Exercise 2.4: Character Access Methods
console.log("\n Exercise 2.4: Character Access Methods");
let word = "JavaScript";
console.log("Word:", word);

let charAt0 = word.charAt(0);
console.log("Character at 0:", charAt0);

let charAt4 = word.charAt(4);
console.log("Character at 4:", charAt4);

let charAt10 = word.charAt(10);
console.log("Character at 10:", charAt10);

let charCodeAt0 = word.charCodeAt(0);
console.log("Character code at 0:", charCodeAt0);

let charCodeAt1 = word.charCodeAt(1);
console.log("Character code at 1:", charCodeAt1);

let charFromCode = String.fromCharCode(74, 97, 118, 97);
console.log("Character from codes:", charFromCode);

// Exercise 2.5: String Comparison Methods
console.log("\n Exercise 2.5: String Comparison Methods");
let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

let comparison1 = str1 === str2;
console.log(`"${str1}" === "${str2}":`, comparison1);

let comparison2 = str1 === str3;
console.log(`"${str1}" === "${str3}":`, comparison2);

let localeCompare1 = str1.localeCompare(str2);
console.log(`"${str1}".localeCompare("${str2}"):`, localeCompare1);

let localeCompare2 = str2.localeCompare(str1);
console.log(`"${str2}".localeCompare("${str1}"):`, localeCompare2);

let localeCompare3 = str1.localeCompare(str1);
console.log(`"${str1}".localeCompare("${str1}"):`, localeCompare3);

// Exercise 2.6: String Search Methods
console.log("\n Exercise 2.6: String Search Methods");
let text2 = "Hello World Hello JavaScript";
console.log("Text:", text2);

let indexOfHello = text2.indexOf("Hello");
console.log("indexOf('Hello'):", indexOfHello);

let indexOfWorld = text2.indexOf("World");
console.log("indexOf('World'):", indexOfWorld);

let indexOfPython = text2.indexOf("Python");
console.log("indexOf('Python'):", indexOfPython);

let lastIndexOfHello = text2.lastIndexOf("Hello");
console.log("lastIndexOf('Hello'):", lastIndexOfHello);

let includesHello = text2.includes("Hello");
console.log("includes('Hello'):", includesHello);

let includesPython = text2.includes("Python");
console.log("includes('Python'):", includesPython);

// Exercise 2.7: String Position Methods
console.log("\n Exercise 2.7: String Position Methods");
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Sentence:", sentence);

let startsWithThe = sentence.startsWith("The");
console.log("startsWith('The'):", startsWithThe);

let startsWithQuick = sentence.startsWith("quick");
console.log("startsWith('quick'):", startsWithQuick);

let endsWithDog = sentence.endsWith("dog");
console.log("endsWith('dog'):", endsWithDog);

let endsWithCat = sentence.endsWith("cat");
console.log("endsWith('cat'):", endsWithCat);

// Exercise 2.8: String Replacement Methods
console.log("\n Exercise 2.8: String Replacement Methods");
let originalText = "Hello World Hello World Hello World";
console.log("Original text:", originalText);

let replacedFirst = originalText.replace("World", "JavaScript");
console.log("replace('World', 'JavaScript'):", replacedFirst);

let replacedAll = originalText.replaceAll("World", "JavaScript");
console.log("replaceAll('World', 'JavaScript'):", replacedAll);

// Exercise 2.9: String Splitting and Joining
console.log("\n Exercise 2.9: String Splitting and Joining");
let csvData = "apple,banana,orange,grape,kiwi";
console.log("CSV data:", csvData);

let fruits = csvData.split(",");
console.log("Split by comma:", fruits);

let wordsSplitBySpace = "Hello World JavaScript Programming".split(" ");
console.log("Split by space:", wordsSplitBySpace);

let chars = "Hello".split("");
console.log("Split by character:", chars);

let limitedSplit = csvData.split(",", 3);
console.log("Split with limit 3:", limitedSplit);

let joinedFruits = fruits.join(" | ");
console.log("Joined fruits:", joinedFruits);

let joinedWords = wordsSplitBySpace.join("-");
console.log("Joined words:", joinedWords);

// Exercise 2.10: String Substring Methods
console.log("\n Exercise 2.10: String Substring Methods");
let fullText = "JavaScript Programming Language";
console.log("Full text:", fullText);

let sub1 = fullText.substring(0, 10);
console.log("substring(0, 10):", sub1);

let sub2 = fullText.substring(11);
console.log("substring(11):", sub2);

let sub3 = fullText.substring(11, 22);
console.log("substring(11, 22):", sub3);

let slice1 = fullText.slice(0, 10);
console.log("slice(0, 10):", slice1);

let slice2 = fullText.slice(-8);
console.log("slice(-8):", slice2);

let slice3 = fullText.slice(11, -9);
console.log("slice(11, -9):", slice3);

// Exercise 2.11: Practical Example - Text Processing
console.log("\n Exercise 2.11: Practical Example - Text Processing");
let userInput = "  JOHN.DOE@EMAIL.COM  ";
console.log("Raw user input:", `"${userInput}"`);

let trimmed = userInput.trim();
console.log("Trimmed:", `"${trimmed}"`);

let lowerCaseConverted = trimmed.toLowerCase();
console.log("Lowercase:", lowerCaseConverted);

let containsAt = replaced.includes("@");
console.log("Contains @:", containsAt);

let isLongEnough = replaced.length > 5;
console.log("Length > 5:", isLongEnough);

let isValidEmail = containsAt && isLongEnough;
console.log("Is valid email:", isValidEmail);

// Exercise 2.12: Practical Example - Text Analysis
console.log("\n Exercise 2.12: Practical Example - Text Analysis");
let article = "JavaScript is a programming language. It is used for web development. JavaScript is popular.";
console.log("Article:", article);

let wordCount = article.split(" ").length;
console.log("Word count:", wordCount);

let sentenceCount = article.split(".").length - 1;
console.log("Sentence count:", sentenceCount);

let charCount = article.length;
console.log("Character count:", charCount);

let words = article.split(" ");
let longestWord = words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
);
console.log("Longest word:", longestWord);