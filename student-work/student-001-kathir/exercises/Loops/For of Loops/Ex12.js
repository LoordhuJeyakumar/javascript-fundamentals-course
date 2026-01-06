//Create object with uppercase values:
let originalObject = {
    greeting: "hello",
    message: "world",
    status: "active"
};
let uppercaseObject = {};
for (let key in originalObject) {
    uppercaseObject[key] = originalObject[key].toUpperCase();
}
console.log("Original:", originalObject);
console.log("Uppercase:", uppercaseObject);