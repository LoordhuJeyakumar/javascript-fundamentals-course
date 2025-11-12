//Find average of numbers:
let scores = [85, 92, 78, 96, 88];
let total = 0;
let count = 0;
for(let score of scores){
    total += score;
    count++;
}
let average = total / count;
console.log(`Average:${average}`);