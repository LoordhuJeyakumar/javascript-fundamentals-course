//Create a for loop that counts vowels in a string:
let text = "Hello World";
let vowelCount = 0;
for(let i = 0;i < text.length;i++){
    let ch = text[i].toLowerCase();
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
    vowelCount++;
}
}
console.log(`Number of vowels: ${vowelCount}`);