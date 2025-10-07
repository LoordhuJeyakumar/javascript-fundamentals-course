// Exercise 1: String Basics
// Complete the following exercises to practice string fundamentals

console.log("📝 Exercise 1: String Basics");
console.log("===========================");

// Exercise 1.1: String Creation
console.log("\n🔧 Exercise 1.1: String Creation");
console.log("-------------------------------");

// TODO: Create a string using each method below
// 1. String literal with double quotes
let string1 = "Hello World";

// 2. String literal with single quotes
let string2 = 'JavaScript Programming';

// 3. String literal with template literals
let string3 = `Template Literal`;

// 4. String constructor
let string4 = new String("Constructor String");

// 5. Empty string
let string5 = "";

console.log("String 1:", string1);
console.log("String 2:", string2);
console.log("String 3:", string3);
console.log("String 4:", string4);
console.log("String 5:", string5);

// Exercise 1.2: String Properties
console.log("\n🔧 Exercise 1.2: String Properties");
console.log("---------------------------------");

let text = "JavaScript Programming";
console.log("Text:", text);

// TODO: Complete the following
// 1. Get the length of the string
let length = text.length;
console.log("Length:", length);

// 2. Get the type of the string
let type = typeof text;
console.log("Type:", type);

// 3. Access the first character
let firstChar = text[0];
console.log("First character:", firstChar);

// 4. Access the last character
let lastChar = text[text.length - 1];
console.log("Last character:", lastChar);

// 5. Access the character at index 4
let charAtIndex4 = text[4];
console.log("Character at index 4:", charAtIndex4);

// Exercise 1.3: String Concatenation
console.log("\n🔧 Exercise 1.3: String Concatenation");
console.log("------------------------------------");

let firstName = "John";
let lastName = "Doe";
let age = 25;

// TODO: Complete the following concatenation methods
// 1. Using + operator
let fullName1 = firstName + " " + lastName;
console.log("Full name (+):", fullName1);

// 2. Using += operator
let fullName2 = firstName;
fullName2 += " " + lastName;
console.log("Full name (+=):", fullName2);

// 3. Using concat method
let fullName3 = firstName.concat(" ", lastName);
console.log("Full name (concat):", fullName3);

// 4. Create a complete introduction
let introduction = `Hello, I am ${firstName} ${lastName} and I am ${age} years old.`;
console.log("Introduction:", introduction);

// Exercise 1.4: String Comparison
console.log("\n🔧 Exercise 1.4: String Comparison");
console.log("---------------------------------");

let str1 = "apple";
let str2 = "banana";
let str3 = "apple";

// TODO: Complete the following comparisons
// 1. Compare str1 and str2
let comparison1 = str1 === str2;
console.log(`"${str1}" === "${str2}":`, comparison1);

// 2. Compare str1 and str3
let comparison2 = str1 === str3;
console.log(`"${str1}" === "${str3}":`, comparison2);

// 3. Check if str1 is less than str2
let lessThan = str1 < str2;
console.log(`"${str1}" < "${str2}":`, lessThan);

// 4. Check if str1 is greater than str2
let greaterThan = str1 > str2;
console.log(`"${str1}" > "${str2}":`, greaterThan);

// Exercise 1.5: String Iteration
console.log("\n🔧 Exercise 1.5: String Iteration");
console.log("--------------------------------");

let word = "JavaScript";
console.log("Word:", word);

// TODO: Complete the following iteration methods
// 1. Using for loop
console.log("Using for loop:");
for (let i = 0; i < word.length; i++) {
    console.log(`Index ${i}: ${word[i]}`);
}

// 2. Using for...of loop
console.log("Using for...of loop:");
for (let char of word) {
    console.log("Character:", char);
}

// Exercise 1.6: String Methods Overview
console.log("\n🔧 Exercise 1.6: String Methods Overview");
console.log("--------------------------------------");

let sampleText = "  Hello World  ";
console.log("Sample text:", `"${sampleText}"`);

// TODO: Complete the following method calls
// 1. Get the length
let textLength = sampleText.length;
console.log("Length:", textLength);

// 2. Convert to uppercase
let upperCase = sampleText.toUpperCase();
console.log("Uppercase:", upperCase);

// 3. Convert to lowercase
let lowerCase = sampleText.toLowerCase();
console.log("Lowercase:", lowerCase);

// 4. Trim whitespace
let trimmed = sampleText.trim();
console.log("Trimmed:", `"${trimmed}"`);

// Exercise 1.7: Practical Example - User Input Processing
console.log("\n🔧 Exercise 1.7: Practical Example - User Input Processing");
console.log("-------------------------------------------------------");

// TODO: Complete the user input processing
let userInput = "  john.doe@email.com  ";
console.log("Raw user input:", `"${userInput}"`);

// 1. Clean the input (trim whitespace)
let cleanedInput = userInput.trim();
console.log("Cleaned input:", `"${cleanedInput}"`);

// 2. Convert to lowercase
let normalizedInput = cleanedInput.toLowerCase();
console.log("Normalized input:", normalizedInput);

// 3. Validate the input (check if it's not empty)
let isValid = normalizedInput.length > 0;
console.log("Is valid:", isValid);

// Exercise 1.8: Practical Example - Text Analysis
console.log("\n🔧 Exercise 1.8: Practical Example - Text Analysis");
console.log("------------------------------------------------");

let article = "JavaScript is a programming language. It is used for web development.";
console.log("Article:", article);

// TODO: Complete the text analysis
// 1. Count words
let wordCount = article.split(" ").length;
console.log("Word count:", wordCount);

// 2. Count characters
let charCount = article.length;
console.log("Character count:", charCount);

// 3. Count sentences
let sentenceCount = article.split(".").length - 1;
console.log("Sentence count:", sentenceCount);

// 4. Find the longest word
let words = article.split(" ");
let longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
);
console.log("Longest word:", longestWord);

// Exercise 1.9: String Templates and Interpolation
console.log("\n🔧 Exercise 1.9: String Templates and Interpolation");
console.log("-------------------------------------------------");

let userName = "Alice";
let userAge = 30;
let userCity = "New York";

// TODO: Complete the string templates
// 1. Create a greeting using template literals
let greeting = `Hello, my name is ${userName}, I am ${userAge} years old, and I live in ${userCity}.`;
console.log("Greeting:", greeting);

// 2. Create a multi-line string
let multiLine = `This is a
multi-line
string in JavaScript.`;
console.log("Multi-line string:");
console.log(multiLine);

// 3. Create a string with expressions
let calculation = `The sum of 10 and 20 is ${10 + 20}`;
console.log("Calculation:", calculation);

// Exercise 1.10: String Escape Sequences
console.log("\n🔧 Exercise 1.10: String Escape Sequences");
console.log("---------------------------------------");

// TODO: Complete the escape sequences
// 1. New line
let newLine = "Hello\nWorld";
console.log("New line:", newLine);

// 2. Tab
let tab = "Hello\tWorld";
console.log("Tab:", tab);

// 3. Quote
let quote = "He said \"Hello\"";
console.log("Quote:", quote);

// 4. Backslash
let backslash = "C:\\\\Users\\\\John";
console.log("Backslash:", backslash);

// 5. Single quote
let singleQuote = "It's a beautiful day";
console.log("Single quote:", singleQuote);

console.log("\n🎉 Exercise 1 Complete!");
console.log("======================");
console.log("Great job! You've completed the string basics exercises.");
console.log("Key concepts practiced:");
console.log("- String creation and initialization");
console.log("- String properties and length");
console.log("- String concatenation techniques");
console.log("- String comparison and iteration");
console.log("- String methods and templates");
console.log("- Practical string processing");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: String Methods");
console.log("4. Ask questions if you need help");
