//Check if all numbers are positive:
let values = [5, 3, 8, 1, 9];
let allPositive = true;
for(let value of values){
    if(value < 0){
        allPositive = false;
        break;
    }
}
console.log(`All positive: ${allPositive}`);