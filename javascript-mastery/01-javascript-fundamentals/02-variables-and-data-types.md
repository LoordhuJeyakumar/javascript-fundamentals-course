# Lesson 2: Variables and Data Types

In our last lesson, we printed "Hello, World!". Now, let's learn how to store and manage information.

---

### What is a Variable?

A variable is like a labeled box where you can store information. You give the box a name (the variable name), and you can put things inside it (the value).

In JavaScript, we have three ways to declare a variable (create a box): `let`, `const`, and `var`.

- **`let`**: Use this when you expect the value inside the box *might change*.
- **`const`**: Use this for "constants", when you know the value will *never change*. This is good practice for reliability.
- **`var`**: This is the old way of declaring variables. You will see it in older code, but for modern JavaScript, you should prefer `let` and `const`.

**Example:**

```javascript
// We create a box named 'message' and put "Hello!" inside it.
let message = "Hello!";
console.log(message); // Prints "Hello!"

// We can change the value.
message = "Goodbye!";
console.log(message); // Prints "Goodbye!"

// We create a box for a value that won't change.
const birthYear = 1990;
console.log(birthYear); // Prints 1990

// If you try to change a const, you'll get an error!
// birthYear = 1991; // This would cause an error.
```

---

### Data Types: The Kind of Information

Data types are the different kinds of information we can store in our variables. JavaScript has several primary data types.

**1. String**
- **Analogy:** A piece of text, like a sentence or a word.
- **Details:** Always wrapped in quotes (`"` or `'`).
- **Example:** `let name = "Alice";`

**2. Number**
- **Analogy:** Any kind of number, including decimals.
- **Details:** No quotes needed.
- **Example:** `let age = 30;` or `let price = 19.99;`

**3. Boolean**
- **Analogy:** A simple switch that is either on or off.
- **Details:** Can only be `true` or `false`.
- **Example:** `let isLoggedIn = true;`

**4. Null**
- **Analogy:** An empty box, but it's *intentionally* empty.
- **Details:** Represents the intentional absence of any value.
- **Example:** `let user = null; // We explicitly say there is no user.`

**5. Undefined**
- **Analogy:** A box that has been created, but we haven't put anything in it yet.
- **Details:** A variable that has been declared but not assigned a value is `undefined`.
- **Example:** `let city; console.log(city); // Prints undefined`

**6. Object**
- **Analogy:** A filing cabinet for related information.
- **Details:** A collection of key-value pairs. This is a very important type that we will explore deeply in a later module.
- **Example:**
  ```javascript
  let person = {
    firstName: "John",
    lastName: "Doe"
  };
  ```

**7. Symbol & BigInt**
- These are more advanced and specialized data types. We will touch on them later if needed, but for now, just know they exist.

---

### Checking the Type of a Variable

You can use the `typeof` operator to see what data type a variable holds.

```javascript
let message = "Hello";
let year = 2025;
let isHappy = true;

console.log(typeof message); // Prints "string"
console.log(typeof year);    // Prints "number"
console.log(typeof isHappy);  // Prints "boolean"
```

---

### Next Steps

Now that you know how to store information, we'll look at how to work with it in the next lesson: **Operators**.
