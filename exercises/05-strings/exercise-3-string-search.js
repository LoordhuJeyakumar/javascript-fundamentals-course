// Exercise 3: String Search and Extraction
// Practice with string searching and content extraction

console.log("💪 Exercise 3: String Search and Extraction");
console.log("==========================================");

// Exercise 1: Find all occurrences of a substring
console.log("\n1. Find All Occurrences:");
// TODO: Create a function called findAllOccurrences that:
// - Takes a string and a substring as parameters
// - Returns an array of all positions where the substring appears
// - Handle case sensitivity
// - Return empty array if no occurrences found
// Hint: Use indexOf in a loop

function findAllOccurrences(str, substring) {
    // Your code here
}

// Test your function
let text = "The quick brown fox jumps over the lazy dog. The fox is quick.";
console.log("Text:", text);
console.log("All occurrences of 'fox':", findAllOccurrences(text, "fox"));
console.log("All occurrences of 'the':", findAllOccurrences(text, "the"));
console.log("All occurrences of 'cat':", findAllOccurrences(text, "cat"));

// Exercise 2: Extract text between delimiters
console.log("\n2. Extract Text Between Delimiters:");
// TODO: Create a function called extractBetween that:
// - Takes a string and two delimiter strings as parameters
// - Returns an array of all text found between the delimiters
// - Handle multiple occurrences
// - Return empty array if no matches found
// Hint: Use indexOf and substring methods

function extractBetween(str, startDelimiter, endDelimiter) {
    // Your code here
}

// Test your function
let htmlText = "<div>Hello</div><span>World</span><p>JavaScript</p>";
let jsonText = '{"name": "John", "age": 30, "city": "New York"}';
console.log("HTML text:", htmlText);
console.log("Content between <div> and </div>:", extractBetween(htmlText, "<div>", "</div>"));
console.log("Content between <span> and </span>:", extractBetween(htmlText, "<span>", "</span>"));
console.log("JSON text:", jsonText);
console.log("Content between quotes:", extractBetween(jsonText, '"', '"'));

// Exercise 3: Find and replace multiple occurrences
console.log("\n3. Find and Replace Multiple:");
// TODO: Create a function called replaceAll that:
// - Takes a string, search string, and replacement string as parameters
// - Replaces all occurrences of the search string with the replacement
// - Handle case sensitivity
// - Return the modified string
// Hint: Use a loop with indexOf and replace

function replaceAll(str, search, replacement) {
    // Your code here
}

// Test your function
let sentence = "The cat in the hat sat on the mat. The cat was happy.";
console.log("Original:", sentence);
console.log("Replace 'cat' with 'dog':", replaceAll(sentence, "cat", "dog"));
console.log("Replace 'the' with 'a':", replaceAll(sentence, "the", "a"));

// Exercise 4: Extract words from a string
console.log("\n4. Extract Words:");
// TODO: Create a function called extractWords that:
// - Takes a string as parameter
// - Returns an array of all words in the string
// - Remove punctuation and extra spaces
// - Handle different word separators
// Hint: Use split and filter methods

function extractWords(str) {
    // Your code here
}

// Test your function
let paragraph = "Hello, world! How are you today? I'm fine, thank you.";
let camelCase = "helloWorldHowAreYou";
let withNumbers = "There are 5 apples and 3 oranges.";
console.log("Paragraph:", paragraph);
console.log("Words:", extractWords(paragraph));
console.log("Camel case:", camelCase);
console.log("Words:", extractWords(camelCase));
console.log("With numbers:", withNumbers);
console.log("Words:", extractWords(withNumbers));

// Exercise 5: Find the longest word in a string
console.log("\n5. Find Longest Word:");
// TODO: Create a function called findLongestWord that:
// - Takes a string as parameter
// - Returns the longest word in the string
// - Handle ties by returning the first occurrence
// - Remove punctuation from words
// Hint: Use extractWords function and find method

function findLongestWord(str) {
    // Your code here
}

// Test your function
let longText = "The quick brown fox jumps over the lazy dog";
let shortText = "Hi there!";
let tieText = "cat dog bird fish";
console.log("Long text:", longText);
console.log("Longest word:", findLongestWord(longText));
console.log("Short text:", shortText);
console.log("Longest word:", findLongestWord(shortText));
console.log("Tie text:", tieText);
console.log("Longest word:", findLongestWord(tieText));

// Exercise 6: Extract email addresses from text
console.log("\n6. Extract Email Addresses:");
// TODO: Create a function called extractEmails that:
// - Takes a string as parameter
// - Returns an array of all email addresses found
// - Use a simple email pattern: word@word.word
// - Handle multiple emails in the text
// Hint: Use regular expressions or string methods

function extractEmails(str) {
    // Your code here
}

// Test your function
let emailText = "Contact us at john@example.com or jane@company.org. Also try admin@site.net";
let noEmailText = "This text has no email addresses";
let multipleEmails = "Send to: user1@test.com, user2@test.com, user3@test.com";
console.log("Email text:", emailText);
console.log("Emails found:", extractEmails(emailText));
console.log("No email text:", noEmailText);
console.log("Emails found:", extractEmails(noEmailText));
console.log("Multiple emails:", multipleEmails);
console.log("Emails found:", extractEmails(multipleEmails));

// Exercise 7: Extract phone numbers from text
console.log("\n7. Extract Phone Numbers:");
// TODO: Create a function called extractPhoneNumbers that:
// - Takes a string as parameter
// - Returns an array of all phone numbers found
// - Support formats: (123) 456-7890, 123-456-7890, 123.456.7890
// - Handle multiple phone numbers
// Hint: Use regular expressions or string methods

function extractPhoneNumbers(str) {
    // Your code here
}

// Test your function
let phoneText = "Call us at (555) 123-4567 or 555-987-6543. Also try 555.111.2222";
let noPhoneText = "This text has no phone numbers";
let multiplePhones = "Phone 1: (111) 222-3333, Phone 2: 444-555-6666";
console.log("Phone text:", phoneText);
console.log("Phone numbers found:", extractPhoneNumbers(phoneText));
console.log("No phone text:", noPhoneText);
console.log("Phone numbers found:", extractPhoneNumbers(noPhoneText));
console.log("Multiple phones:", multiplePhones);
console.log("Phone numbers found:", extractPhoneNumbers(multiplePhones));

// Exercise 8: Extract URLs from text
console.log("\n8. Extract URLs:");
// TODO: Create a function called extractUrls that:
// - Takes a string as parameter
// - Returns an array of all URLs found
// - Support formats: http://, https://, www., ftp://
// - Handle multiple URLs
// Hint: Use regular expressions or string methods

function extractUrls(str) {
    // Your code here
}

// Test your function
let urlText = "Visit https://www.example.com or http://test.org. Also try www.google.com";
let noUrlText = "This text has no URLs";
let multipleUrls = "Site 1: https://site1.com, Site 2: http://site2.org, Site 3: www.site3.net";
console.log("URL text:", urlText);
console.log("URLs found:", extractUrls(urlText));
console.log("No URL text:", noUrlText);
console.log("URLs found:", extractUrls(noUrlText));
console.log("Multiple URLs:", multipleUrls);
console.log("URLs found:", extractUrls(multipleUrls));

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced string search and extraction.");
console.log("Key concepts practiced:");
console.log("- Finding all occurrences of substrings");
console.log("- Extracting text between delimiters");
console.log("- Replacing multiple occurrences");
console.log("- Extracting words from strings");
console.log("- Finding the longest word");
console.log("- Extracting email addresses");
console.log("- Extracting phone numbers");
console.log("- Extracting URLs");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: String Formatting");
console.log("4. Ask questions if you need help");
