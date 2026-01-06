console.log("Exercise 3: String Search and Extraction");
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

function extractWords(str) {
    let spaced = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    let clean = spaced.replace(/[^\w\s']/g, " ");
    let words = clean.split(/\s+/).filter(Boolean);
    return words;
}
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

// Exercise 6: Extract email addresses
console.log("\n6. Extract Email Addresses:");

function extractEmails(str) {
    const matches = str.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g);
    return matches || [];
}
let emailText = "Contact us at john@example.com or jane@company.org. Also try admin@site.net";
let noEmailText = "This text has no email addresses";
let multipleEmails = "Send to: user1@test.com, user2@test.com, user3@test.com";
console.log("Email text:", emailText);
console.log("Emails found:", extractEmails(emailText));
console.log("No email text:", noEmailText);
console.log("Emails found:", extractEmails(noEmailText));
console.log("Multiple emails:", multipleEmails);
console.log("Emails found:", extractEmails(multipleEmails));

// Exercise 7: Extract phone numbers
console.log("\n7. Extract Phone Numbers:");

function extractPhoneNumbers(str) {
    const matches = str.match(/\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}/g);
    return matches || [];
}
let phoneText = "Call us at (555) 123-4567 or 555-987-6543. Also try 555.111.2222";
let noPhoneText = "This text has no phone numbers";
let multiplePhones = "Phone 1: (111) 222-3333, Phone 2: 444-555-6666";
console.log("Phone text:", phoneText);
console.log("Phone numbers found:", extractPhoneNumbers(phoneText));
console.log("No phone text:", noPhoneText);
console.log("Phone numbers found:", extractPhoneNumbers(noPhoneText));
console.log("Multiple phones:", multiplePhones);
console.log("Phone numbers found:", extractPhoneNumbers(multiplePhones));

// Exercise 8: Extract URLs
console.log("\n8. Extract URLs:");

function extractUrls(str) {
    const matches = str.match(/\b((https?:\/\/|ftp:\/\/|www\.)[^\s]+)/g);
    return matches || [];
}
let urlText = "Visit https://www.example.com or http://test.org. Also try www.google.com";
let noUrlText = "This text has no URLs";
let multipleUrls = "Site 1: https://site1.com, Site 2: http://site2.org, Site 3: www.site3.net";
console.log("URL text:", urlText);
console.log("URLs found:", extractUrls(urlText));
console.log("No URL text:", noUrlText);
console.log("URLs found:", extractUrls(noUrlText));
console.log("Multiple URLs:", multipleUrls);
console.log("URLs found:", extractUrls(multipleUrls));