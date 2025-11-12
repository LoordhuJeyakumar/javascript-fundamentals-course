//Create a for loop that finds the largest number in an array:
let numbers = [3, 7, 2, 9, 1, 5];
let largest = numbers[0];
for(let i = 0;numbers.length > i;i++){
    if(numbers[i]  > largest){
        largest = numbers[i];
    }
}
console.log(`The largest number is : ${largest}`);