// Ex 1: Cache Array Length:
console.log("\n1. Cache Array Length:");

const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
const len = largeArray.length;
for (let i = 0; i < len; i++) {
  const val = largeArray[i];
}

// Ex 2: Use Appropriate Loop Type:
console.log("\n2. Use Appropriate Loop Type:");

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
for (const fruit of fruits) {
  console.log(fruit);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Ex 3: Avoid Unnecessary Calculations:
console.log("\n3. Avoid Unnecessary Calculations:");

let power = 1;
for (let i = 0; i < 10; i++) {
  console.log(power);
  power *= 2;
}

// Ex 4: Use Array Methods When Appropriate:
console.log("\n4. Use Array Methods When Appropriate:");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.map(n => n * 2));
console.log(numbers.reduce((a, b) => a + b, 0));

// Ex 5: Break Early When Possible:
console.log("\n5. Break Early When Possible:");

const searchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
for (let i = 0; i < searchArray.length; i++) {
  if (searchArray[i] === target) {
    console.log("Found:", searchArray[i]);
    break;
  }
}

// Ex 6: Avoid Nested Loops When Possible:
console.log("\n6. Avoid Nested Loops When Possible:");

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const set2 = new Set(array2);
const commonEfficient = array1.filter(n => set2.has(n));
console.log(commonEfficient);

// Ex 7: Use Destructuring in Loops:
console.log("\n7. Use Destructuring in Loops:");

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
for (const { name, age } of people) {
  console.log(`${name} is ${age}`);
}

// Ex 8: Optimize String Concatenation:
console.log("\n8. Optimize String Concatenation:");

const words = ["Hello", "World", "JavaScript", "Optimization"];
console.log(words.join(" "));

// Ex 9: Use const When Possible:
console.log("\n9. Use const When Possible:");

for (const fruit of fruits) {
  console.log(fruit);
}

// Ex 10: Optimize Object Iteration:
console.log("\n10. Optimize Object Iteration:");

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  occupation: "Developer"
};
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
Object.keys(person).forEach(key => console.log(key, person[key]));

// Ex 11: Use Early Return in Functions:
console.log("\n11. Use Early Return in Functions:");

function findFirstEven(numbers) {
  for (const n of numbers) {
    if (n % 2 === 0) {
      console.log("Found:", n);
      return;
    }
  }
}
findFirstEven([1, 3, 5, 2, 4, 6]);

// Ex 12: Optimize Recursive Functions:
console.log("\n12. Optimize Recursive Functions:");
const memo = {};
function fibMemo(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
  return memo[n];
}
console.log(fibMemo(10));

// Ex 13: Use Modern JavaScript Features:
console.log("\n13. Use Modern JavaScript Features:");

const data = [
  { id: 1, value: 10, active: true },
  { id: 2, value: 20, active: false },
  { id: 3, value: 30, active: true },
  { id: 4, value: 40, active: false }
];
const modernTotal = data
  .filter(item => item.active)
  .map(item => item.value * 2)
  .reduce((a, b) => a + b, 0);
console.log(modernTotal);

// Ex 14: Optimize Async Operations:
console.log("\n14. Optimize Async Operations:");

const urls = ["url1", "url2", "url3", "url4", "url5"];
function fetchData(url) {
  return new Promise(res => setTimeout(() => res(`Data from ${url}`), 100));
}
async function parallel() {
  const results = await Promise.all(urls.map(fetchData));
  results.forEach(r => console.log(r));
}
(async () => {
  await parallel();
})();

// Ex 15: Performance Measurement:
console.log("\n15. Performance Measurement:");

function measurePerformance(name, fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name}: ${(end - start).toFixed(2)}ms`);
}
function efficientSum() {
  return (1_000_000 * (1_000_000 - 1)) / 2;
}
measurePerformance("Efficient Sum", efficientSum);