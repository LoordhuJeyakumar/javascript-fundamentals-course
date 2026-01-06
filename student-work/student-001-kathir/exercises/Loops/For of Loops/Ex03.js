//Find longest word using for...of:
let words = ["apple", "banana", "cherry", "dragonfruit"];
let longestWord = "";
for(let word of words){
    if(word.length > longestWord.length){
        longestWord = word;
    }
}
console.log(`Longest words is:${longestWord}`);