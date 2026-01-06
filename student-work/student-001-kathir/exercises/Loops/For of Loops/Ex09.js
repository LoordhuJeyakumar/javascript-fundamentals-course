// Print object properties using for...in:
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
