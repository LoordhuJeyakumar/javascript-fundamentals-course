// Count words starting with 'a':
let fruits = ["apple", "banana", "apricot", "orange", "avocado"];
let countA = 0;
for(let fruit of fruits){
    if(fruit.startsWith('a')){
     countA++;   
    }
}
console.log(`Word starting with 'a':${countA}`);