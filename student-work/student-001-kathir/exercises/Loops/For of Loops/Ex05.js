//Create array with doubled values:
let originalNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
for(let number of originalNumbers){
    doubledNumbers.push(number * 2);
}
console.log(`Original Number:${originalNumbers}`);
console.log(`Double Numbers:${doubledNumbers}`);