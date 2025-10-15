//Count object properties:
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    mileage: 25000
};
let propertyCount = 0;
for (let key in car) {
    propertyCount++;
}
console.log(`Number of properties: ${propertyCount}`);