//Find first even number:
let numbers2 = [1, 3, 5, 8, 9, 12];
let firstEven = null;
for(let number of numbers2){
    if(number % 2 === 0){
        firstEven = number;
        break;
    }
}
console.log(`First even number: ${firstEven}`);