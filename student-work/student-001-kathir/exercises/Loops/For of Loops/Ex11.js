//Find longest property value:
let animal = {
    name: "Elephant",
    species: "African Elephant",
    habitat: "Savanna",
    diet: "Herbivore"
};
let longestValue = "";
let longestKey = "";
for (let key in animal) {
    if (animal[key].length > longestValue.length) {
        longestValue = animal[key];
        longestKey = key;
    }
}
console.log(`Longest property: ${longestKey} = ${longestValue}`);