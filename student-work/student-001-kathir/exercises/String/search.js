console.log("💪 Exercise 3: String Search and Extraction");
// Exercise 1: Find all occurrences of a substring
console.log("\n1. Find All Occurrences:");

function findAllOccurrences(str, substring) {
    let positions = [];
    let lowerStr = str.toLowerCase();
    let lowerSub = substring.toLowerCase();
    let index = lowerStr.indexOf(lowerSub);
    while (index !== -1) {
        positions.push(index);
        index = lowerStr.indexOf(lowerSub, index + 1);
    }
    return positions;
}
let text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Text:", text);
console.log("All occurrences of 'fox':", findAllOccurrences(text, "fox"));
console.log("All occurrences of 'the':", findAllOccurrences(text, "the"));
console.log("All occurrences of 'cat':", findAllOccurrences(text, "cat"));

// Exercise 2: Extract text between delimiters
console.log("\n2. Extract Text Between Delimiters:");

function extractBetween(str, startDelimiter, endDelimiter) {
    let results = [];
    let startIndex = str.indexOf(startDelimiter);
    while (startIndex !== -1) {
        let endIndex = str.indexOf(endDelimiter, startIndex + startDelimiter.length);
        if (endIndex === -1) break;
        let content = str.substring(startIndex + startDelimiter.length, endIndex);
        results.push(content);
        startIndex = str.indexOf(startDelimiter, endIndex + endDelimiter.length);
    }
    return results;
}
let htmlText = "<div>Hello</div><span>World</span><p>JavaScript</p>";
let jsonText = '{"name": "John", "age": 30, "city": "New York"}';
console.log("HTML text:", htmlText);
console.log("Content between <div> and </div>:", extractBetween(htmlText, "<div>", "</div>"));
console.log("Content between <span> and </span>:", extractBetween(htmlText, "<span>", "</span>"));
console.log("JSON text:", jsonText);
console.log("Content between quotes:", extractBetween(jsonText, '"', '"'));

// Exercise 3: Find and replace multiple occurrences
console.log("\n3. Find and Replace Multiple:");

function replaceAll(str, search, replacement) {
    let result = str;
    let lowerStr = str.toLowerCase();
    let lowerSearch = search.toLowerCase();

    let index = lowerStr.indexOf(lowerSearch);
    while (index !== -1) {
        result =
            result.substring(0, index) +
            replacement +
            result.substring(index + search.length);
        lowerStr =
            result.toLowerCase();
        index = lowerStr.indexOf(lowerSearch, index + replacement.length);
    }
    return result;
}
let sentence = "The cat in the hat sat on the mat. The cat was happy.";
console.log("Original:", sentence);
console.log("Replace 'cat' with 'dog':", replaceAll(sentence, "cat", "dog"));
console.log("Replace 'the' with 'a':", replaceAll(sentence, "the", "a"));

// Exercise 4: Extract words from a string
console.log("\n4. Extract Words:");

// Exercise 5: Find the longest word in a string
console.log("\n5. Find Longest Word:");

function findLongestWord(str) {
    let words = extractWords(str);
    if (words.length === 0) return "";
    return words.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
}
let longText = "The quick brown fox jumps over the lazy dog";
let shortText = "Hi there!";
let tieText = "cat dog bird fish";
console.log("Long text:", longText);
console.log("Longest word:", findLongestWord(longText));
console.log("Short text:", shortText);
console.log("Longest word:", findLongestWord(shortText));
console.log("Tie text:", tieText);
console.log("Longest word:", findLongestWord(tieText));