//Create a for loop that reverses a string:
let originalString = "java script";
let reversedString = "";
for(let i = originalString.length -1;i >= 0;i--){
    reversedString += originalString[i];
}
console.log(`Original : ${originalString}`);
console.log(`Reversed : ${reversedString}`);