// Lesson 1: String Basics
// This file teaches fundamental string concepts

console.log("📝 Welcome to Strings Lesson 1: String Basics!");
console.log("=============================================");

// 1. String Creation and Initialization
console.log("\n📚 1. String Creation and Initialization");
console.log("---------------------------------------");

// String literals
let greeting = "Hello, World!";
let name = 'John Doe';
let message = `Welcome to JavaScript!`;

console.log("String literals:");
console.log("Greeting:", greeting);
console.log("Name:", name);
console.log("Message:", message);

// String constructor
let str1 = new String("Hello");
let str2 = new String("World");
console.log("String constructor:", str1, str2);

// Empty string
let emptyString = "";
let emptyString2 = '';
console.log("Empty strings:", emptyString, emptyString2);

// 2. String Properties
console.log("\n📚 2. String Properties");
console.log("---------------------");

let text = "JavaScript Programming";
console.log("Text:", text);
console.log("Length:", text.length);
console.log("Type:", typeof text);

// Accessing characters
console.log("First character:", text[0]);
console.log("Last character:", text[text.length - 1]);
console.log("Character at index 4:", text[4]);

// 3. String Concatenation
console.log("\n📚 3. String Concatenation");
console.log("------------------------");

let firstName = "John";
let lastName = "Doe";
let age = 25;

// Using + operator
let fullName = firstName + " " + lastName;
console.log("Full name (+):", fullName);

// Using += operator
let introduction = "Hello, I am ";
introduction += firstName;
introduction += " and I am ";
introduction += age;
introduction += " years old.";
console.log("Introduction (+=):", introduction);

// Using concat method
let greeting2 = "Hello".concat(" ", "World", "!");
console.log("Concat method:", greeting2);

// 4. String Immutability
console.log("\n📚 4. String Immutability");
console.log("-----------------------");

let original = "Hello";
console.log("Original string:", original);

// Strings are immutable - you can't change them directly
 original[0] = 'h'; // This won't work
 console.log("After trying to change:", original);

// To "change" a string, you create a new one
let modified = original.replace("H", "h");
console.log("Modified string:", modified);
console.log("Original unchanged:", original);

// 5. String Comparison
console.log("\n📚 5. String Comparison");
console.log("---------------------");

let str1_comp = "apple";
let str2_comp = "banana";
let str3_comp = "apple";

console.log("String comparison:");
console.log(`"${str1_comp}" === "${str2_comp}":`, str1_comp === str2_comp);
console.log(`"${str1_comp}" === "${str3_comp}":`, str1_comp === str3_comp);
console.log(`"${str1_comp}" < "${str2_comp}":`, str1_comp < str2_comp);
console.log(`"${str1_comp}" > "${str2_comp}":`, str1_comp > str2_comp);

// Case-sensitive comparison
let upperCase = "HELLO";
let lowerCase = "hello";
console.log(`"${upperCase}" === "${lowerCase}":`, upperCase === lowerCase);

// 6. String Length and Character Access
console.log("\n📚 6. String Length and Character Access");
console.log("--------------------------------------");

let sentence = "The quick brown fox";
console.log("Sentence:", sentence);
console.log("Length:", sentence.length);

// Access characters by index
for (let i = 0; i < sentence.length; i++) {
    console.log(`Character at index ${i}: "${sentence[i]}"`);
}

// Access last character
console.log("Last character:", sentence[sentence.length - 1]);

// 7. String Iteration
console.log("\n📚 7. String Iteration");
console.log("--------------------");

let word = "JavaScript";
console.log("Word:", word);

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < word.length; i++) {
    console.log(`Index ${i}: ${word[i]}`);
}

// Using for...of loop
console.log("Using for...of loop:");
for (let char of word) {
    console.log("Character:", char);
}

// 8. String Methods Overview
console.log("\n📚 8. String Methods Overview");
console.log("----------------------------");

let sampleText = "  Hello World  ";
console.log("Sample text:", `"${sampleText}"`);

// Length
console.log("Length:", sampleText.length);

// Case conversion
console.log("toUpperCase():", sampleText.toUpperCase());
console.log("toLowerCase():", sampleText.toLowerCase());

// Trimming
console.log("trim():", `"${sampleText.trim()}"`);

// 9. Practical Example: User Input Processing
console.log("\n📚 9. Practical Example: User Input Processing");
console.log("---------------------------------------------");

// Simulate user input
let userInput = "  john.doe@email.com  ";
console.log("Raw user input:", `"${userInput}"`);

// Clean and process input
let cleanedInput = userInput.trim().toLowerCase();
console.log("Cleaned input:", `"${cleanedInput}"`);

// Validate input
if (cleanedInput.length > 0) {
    console.log("Input is valid");
} else {
    console.log("Input is empty");
}

// 10. Practical Example: Text Analysis
console.log("\n📚 10. Practical Example: Text Analysis");
console.log("--------------------------------------");

let article = "JavaScript is a programming language. It is used for web development.";
console.log("Article:", article);

// Basic analysis
let wordCount = article.split(" ").length;
let charCount = article.length;
let sentenceCount = article.split(".").length - 1;

console.log("Text analysis:");
console.log("- Word count:", wordCount);
console.log("- Character count:", charCount);
console.log("- Sentence count:", sentenceCount);

// 11. String Templates and Interpolation
console.log("\n📚 11. String Templates and Interpolation");
console.log("---------------------------------------");

let userName = "Alice";
let userAge = 30;
let userCity = "New York";

// Old way (concatenation)
let oldWay = "Hello, my name is " + userName + ", I am " + userAge + " years old, and I live in " + userCity + ".";
console.log("Old way:", oldWay);

// New way (template literals)
let newWay = `Hello, my name is ${userName}, I am ${userAge} years old, and I live in ${userCity}.`;
console.log("New way:", newWay);

// Multi-line strings
let multiLine = `This is a
multi-line
string in JavaScript.`;
console.log("Multi-line string:");
console.log(multiLine);

// 12. String Escape Sequences
console.log("\n📚 12. String Escape Sequences");
console.log("-----------------------------");

console.log("Escape sequences:");
console.log("New line: Hello\\nWorld");
console.log("Tab: Hello\\tWorld");
console.log("Quote: He said \"Hello\"");
console.log("Backslash: C:\\\\Users\\\\John");
console.log("Single quote: It\\'s a beautiful day");

// Using escape sequences
let escapedString = "He said \"Hello\" and walked away.";
console.log("Escaped string:", escapedString);

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Strings are sequences of characters");
console.log("- Strings are immutable (cannot be changed directly)");
console.log("- Use length property to get string size");
console.log("- Access characters using index notation [0], [1], etc.");
console.log("- Use + operator or concat() for concatenation");
console.log("- Use template literals for complex string formatting");
console.log("- Strings can be compared using ===, <, > operators");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a string and access its characters");
console.log("2. Concatenate multiple strings together");
console.log("3. Use template literals to format a message");
console.log("4. Count the number of characters in a string");
console.log("5. Create a multi-line string using template literals");
