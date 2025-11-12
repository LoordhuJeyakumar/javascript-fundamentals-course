// Ex 1: Use forEach to print all elements with their index:
console.log("\n1. Print elements with index using forEach:");
let fruits = ["apple", "banana", "orange", "grape"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Ex 2: Use map to double all numbers in an array:
console.log("\n2. Double numbers using map:");
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Ex 3: Use filter to find all even numbers
console.log("\n3. Find even numbers using filter:");
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers2.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Ex 4: Use reduce to find the sum of an array:
console.log("\n4. Find sum using reduce:");
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Ex 5: Use forEach to count how many words are longer than 5 characters:
console.log("\n5. Count words longer than 5 characters:");
let words = ["apple", "banana", "kiwi", "strawberry", "grape"];
let longWordsCount = 0;
words.forEach(word => {
    if (word.length > 5) longWordsCount++;
});
console.log(`Words longer than 5 characters: ${longWordsCount}`);

// Ex 6: Use map to convert all strings to uppercase:
console.log("\n6. Convert strings to uppercase using map:");
let colors = ["red", "green", "blue", "yellow"];
let uppercaseColors = colors.map(color => color.toUpperCase());
console.log("Uppercase colors:", uppercaseColors);

// Ex 7: Use filter to find all numbers greater than 50:
console.log("\n7. Find numbers greater than 50 using filter:");
let scores = [45, 67, 23, 89, 56, 78, 34, 91];
let highScores = scores.filter(score => score > 50);
console.log("Scores greater than 50:", highScores);

// Ex 8: Use reduce to find the maximum number in an array:
console.log("\n8. Find maximum number using reduce:");
let numbers4 = [3, 7, 2, 9, 1, 5];
let maxNumber = numbers4.reduce((max, num) => (num > max ? num : max));
console.log("Maximum number:", maxNumber);

// Ex 9: Use forEach to create a sentence from an array of words:
console.log("\n9. Create sentence using forEach:");
let sentenceWords = ["Hello", "world", "from", "JavaScript"];
let sentence = "";
sentenceWords.forEach(word => {
    sentence += word + " ";
});
sentence = sentence.trim();
console.log(`Sentence: ${sentence}`);

// Ex 10: Use map to create an array of objects with name and length:
console.log("\n10. Create objects with name and length using map:");
let names = ["Alice", "Bob", "Charlie", "Diana"];
let nameObjects = names.map(name => ({ name: name, length: name.length }));
console.log("Name objects:", nameObjects);

// Ex 11: Use filter to find all words that contain the letter 'e':
console.log("\n11. Find words containing 'e' using filter:");
let words2 = ["apple", "banana", "cherry", "date", "elderberry"];
let wordsWithE = words2.filter(word => word.includes("e"));
console.log("Words containing 'e':", wordsWithE);

// Ex 12: Use reduce to concatenate all strings with a separator:
console.log("\n12. Concatenate strings with separator using reduce:");
let words3 = ["Hello", "beautiful", "world"];
let concatenated = words3.reduce((result, word) => result + " " + word);
console.log("Concatenated:", concatenated);

// Ex 13: Use forEach to find the average length of words:
console.log("\n13. Find average word length using forEach:");
let words4 = ["cat", "elephant", "dog", "butterfly", "bird"];
let totalLength = 0;
let wordCount = 0;
words4.forEach(word => {
    totalLength += word.length;
    wordCount++;
});
let averageLength = totalLength / wordCount;
console.log(`Average word length: ${averageLength}`);

// Ex 14: Use map to create an array of squared numbers:
console.log("\n14. Create squared numbers using map:");
let numbers5 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers5.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

// Ex 15: Use filter to find all positive numbers:
console.log("\n15. Find positive numbers using filter:");
let numbers6 = [-5, 3, -2, 8, -1, 4];
let positiveNumbers = numbers6.filter(num => num > 0);
console.log("Positive numbers:", positiveNumbers);

// Ex 16: Use reduce to find the product of all numbers:
console.log("\n16. Find product of all numbers using reduce:");
let numbers7 = [2, 3, 4, 5];
let product = numbers7.reduce((prod, num) => prod * num, 1);
console.log("Product:", product);