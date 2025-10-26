// Exercise 1: String Basics
console.log(" Exercise 1: String Basics");
// Exercise 1.1: String Creation
console.log("\n Exercise 1.1: String Creation");
let string1 = "Hello World";
let string2 = 'JavaScript Programming';
let string3 = `Template Literal`;
let string4 = new String("Constructor String");
let string5 = "";
console.log("String 1:", string1);
console.log("String 2:", string2);
console.log("String 3:", string3);
console.log("String 4:", string4);
console.log("String 5:", string5);

// Exercise 1.2: String Properties
console.log("\n Exercise 1.2: String Properties");
let text = "JavaScript Programming";
console.log("Text:", text);
let length = text.length;
let type = typeof text;
let firstChar = text[0];
let lastChar = text[text.length - 1];
let charAtIndex4 = text[4];
console.log("Length:", length);
console.log("Type:", type);
console.log("First character:", firstChar);
console.log("Last character:", lastChar);
console.log("Character at index 4:", charAtIndex4);

// Exercise 1.3: String Concatenation
console.log("\n Exercise 1.3: String Concatenation");
let firstName = "John";
let lastName = "Doe";
let age = 25;
let fullName1 = firstName + " " + lastName;
let fullName2 = firstName;
fullName2 += " " + lastName;
let fullName3 = firstName.concat(" ", lastName);
let introduction = `Hello, I am ${firstName} ${lastName} and I am ${age} years old.`;
console.log("Full name (+):", fullName1);
console.log("Full name (+=):", fullName2);
console.log("Full name (concat):", fullName3);
console.log("Introduction:", introduction);

// Exercise 1.4: String Comparison
console.log("\n Exercise 1.4: String Comparison");
let str1 = "apple";
let str2 = "banana";
let str3 = "apple";
let comparison1 = str1 === str2;
let comparison2 = str1 === str3;
let lessThan = str1 < str2;
let greaterThan = str1 > str2;
console.log(`"${str1}" === "${str2}":`, comparison1);
console.log(`"${str1}" === "${str3}":`, comparison2);
console.log(`"${str1}" < "${str2}":`, lessThan);
console.log(`"${str1}" > "${str2}":`, greaterThan);

// Exercise 1.5: String Iteration
console.log("\n Exercise 1.5: String Iteration");
let word = "JavaScript";
console.log("Word:", word);
console.log("Using for loop:");
for (let i = 0; i < word.length; i++) {
  console.log(`Index ${i}: ${word[i]}`);
}
console.log("Using for...of loop:");
for (let char of word) {
  console.log("Character:", char);
}

// Exercise 1.6: String Methods Overview
console.log("\n Exercise 1.6: String Methods Overview");
console.log("--------------------------------------");
let sampleText = "  Hello World  ";
console.log("Sample text:", `"${sampleText}"`);
let textLength = sampleText.length;
let upperCase = sampleText.toUpperCase();
let lowerCase = sampleText.toLowerCase();
let trimmed = sampleText.trim();
console.log("Length:", textLength);
console.log("Uppercase:", upperCase);
console.log("Lowercase:", lowerCase);
console.log("Trimmed:", `"${trimmed}"`);

// Exercise 1.7: Practical Example - User Input Processing
console.log("\n Exercise 1.7: Practical Example - User Input Processing");
let userInput = "  john.doe@email.com  ";
console.log("Raw user input:", `"${userInput}"`);
let cleanedInput = userInput.trim();
let normalizedInput = cleanedInput.toLowerCase();
let isValid = normalizedInput.length > 0;
console.log("Cleaned input:", `"${cleanedInput}"`);
console.log("Normalized input:", normalizedInput);
console.log("Is valid:", isValid);

// Exercise 1.8: Practical Example - Text Analysis
console.log("\n Exercise 1.8: Practical Example - Text Analysis");
let article = "JavaScript is a programming language. It is used for web development.";
console.log("Article:", article);
let wordCount = article.split(" ").length;
let charCount = article.length;
let sentenceCount = article.split(".").length - 1;
let words = article.split(" ");
let longestWord = words.reduce((longest, current) => 
  current.length > longest.length ? current : longest
);
console.log("Word count:", wordCount);
console.log("Character count:", charCount);
console.log("Sentence count:", sentenceCount);
console.log("Longest word:", longestWord);

// Exercise 1.9: String Templates and Interpolation
console.log("\n Exercise 1.9: String Templates and Interpolation");
let userName = "Alice";
let userAge = 30;
let userCity = "New York";
let greeting = `Hello, my name is ${userName}, I am ${userAge} years old, and I live in ${userCity}.`;
let multiLine = `This is a
multi-line
string in JavaScript.`;
let calculation = `The sum of 10 and 20 is ${10 + 20}`;
console.log("Greeting:", greeting);
console.log("Multi-line string:");
console.log(multiLine);
console.log("Calculation:", calculation);

// Exercise 1.10: String Escape Sequences
console.log("\n Exercise 1.10: String Escape Sequences");
let newLine = "Hello\nWorld";
let tab = "Hello\tWorld";
let quote = "He said \"Hello\"";
let backslash = "C:\\Users\\John";
let singleQuote = "It's a beautiful day";
console.log("New line:", newLine);
console.log("Tab:", tab);
console.log("Quote:", quote);
console.log("Backslash:", backslash);
console.log("Single quote:", singleQuote);