// Exercise 3: Array Methods (forEach, map, filter, reduce)
// Complete the TODO sections below

console.log("💪 Exercise 3: Array Methods");
console.log("============================");

// TODO 1: Use forEach to print all elements with their index
console.log("\n1. Print elements with index using forEach:");
let fruits = ["apple", "banana", "orange", "grape"];
// Your code here
// Hint: Use fruits.forEach((fruit, index) => { ... })

// TODO 2: Use map to double all numbers in an array
console.log("\n2. Double numbers using map:");
let numbers = [1, 2, 3, 4, 5];
// Your code here
// Hint: Use numbers.map(num => num * 2)
console.log("Doubled:", doubled);

// TODO 3: Use filter to find all even numbers
console.log("\n3. Find even numbers using filter:");
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your code here
// Hint: Use numbers2.filter(num => num % 2 === 0)
console.log("Even numbers:", evens);

// TODO 4: Use reduce to find the sum of an array
console.log("\n4. Find sum using reduce:");
let numbers3 = [1, 2, 3, 4, 5];
// Your code here
// Hint: Use numbers3.reduce((sum, num) => sum + num, 0)
console.log("Sum:", sum);

// TODO 5: Use forEach to count how many words are longer than 5 characters
console.log("\n5. Count words longer than 5 characters:");
let words = ["apple", "banana", "kiwi", "strawberry", "grape"];
let longWordsCount = 0;
// Your code here
// Hint: Check if word.length > 5 and increment longWordsCount
console.log(`Words longer than 5 characters: ${longWordsCount}`);

// TODO 6: Use map to convert all strings to uppercase
console.log("\n6. Convert strings to uppercase using map:");
let colors = ["red", "green", "blue", "yellow"];
// Your code here
// Hint: Use colors.map(color => color.toUpperCase())
console.log("Uppercase colors:", uppercaseColors);

// TODO 7: Use filter to find all numbers greater than 50
console.log("\n7. Find numbers greater than 50 using filter:");
let scores = [45, 67, 23, 89, 56, 78, 34, 91];
// Your code here
// Hint: Use scores.filter(score => score > 50)
console.log("Scores greater than 50:", highScores);

// TODO 8: Use reduce to find the maximum number in an array
console.log("\n8. Find maximum number using reduce:");
let numbers4 = [3, 7, 2, 9, 1, 5];
// Your code here
// Hint: Use numbers4.reduce((max, num) => num > max ? num : max)
console.log("Maximum number:", maxNumber);

// TODO 9: Use forEach to create a sentence from an array of words
console.log("\n9. Create sentence using forEach:");
let sentenceWords = ["Hello", "world", "from", "JavaScript"];
let sentence = "";
// Your code here
// Hint: Add each word to sentence with a space
console.log(`Sentence: ${sentence}`);

// TODO 10: Use map to create an array of objects with name and length
console.log("\n10. Create objects with name and length using map:");
let names = ["Alice", "Bob", "Charlie", "Diana"];
// Your code here
// Hint: Use names.map(name => ({ name: name, length: name.length }))
console.log("Name objects:", nameObjects);

// TODO 11: Use filter to find all words that contain the letter 'e'
console.log("\n11. Find words containing 'e' using filter:");
let words2 = ["apple", "banana", "cherry", "date", "elderberry"];
// Your code here
// Hint: Use words2.filter(word => word.includes('e'))
console.log("Words containing 'e':", wordsWithE);

// TODO 12: Use reduce to concatenate all strings with a separator
console.log("\n12. Concatenate strings with separator using reduce:");
let words3 = ["Hello", "beautiful", "world"];
// Your code here
// Hint: Use words3.reduce((result, word) => result + " " + word)
console.log("Concatenated:", concatenated);

// TODO 13: Use forEach to find the average length of words
console.log("\n13. Find average word length using forEach:");
let words4 = ["cat", "elephant", "dog", "butterfly", "bird"];
let totalLength = 0;
let wordCount = 0;
// Your code here
// Hint: Add word.length to totalLength and increment wordCount
let averageLength = totalLength / wordCount;
console.log(`Average word length: ${averageLength}`);

// TODO 14: Use map to create an array of squared numbers
console.log("\n14. Create squared numbers using map:");
let numbers5 = [1, 2, 3, 4, 5];
// Your code here
// Hint: Use numbers5.map(num => num * num)
console.log("Squared numbers:", squaredNumbers);

// TODO 15: Use filter to find all positive numbers
console.log("\n15. Find positive numbers using filter:");
let numbers6 = [-5, 3, -2, 8, -1, 4];
// Your code here
// Hint: Use numbers6.filter(num => num > 0)
console.log("Positive numbers:", positiveNumbers);

// TODO 16: Use reduce to find the product of all numbers
console.log("\n16. Find product of all numbers using reduce:");
let numbers7 = [2, 3, 4, 5];
// Your code here
// Hint: Use numbers7.reduce((product, num) => product * num, 1)
console.log("Product:", product);

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Fantastic work! You've mastered array methods.");
console.log("Key concepts practiced:");
console.log("- forEach for side effects and iteration");
console.log("- map for transforming arrays");
console.log("- filter for selecting elements");
console.log("- reduce for accumulating values");
console.log("- Method chaining and combination");
console.log("- Functional programming concepts");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different data");
console.log("3. Practice combining multiple array methods");
console.log("4. Move on to the next module: Arrays");
console.log("5. Ask questions if you need help");