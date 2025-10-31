# Lesson 1: Introduction to JavaScript

Welcome to the world of JavaScript! Let's start with the absolute basics.

---

### What is JavaScript?

Imagine a website is like a house.
- **HTML (HyperText Markup Language)** is the *structure* of the house: the walls, the roof, the doors.
- **CSS (Cascading Style Sheets)** is the *decoration*: the paint color, the furniture, the style.
- **JavaScript (JS)** is the *interactivity*: the light switches, the garage door opener, the plumbing that makes things happen.

JavaScript is a programming language that allows you to make web pages interactive and dynamic. It can change HTML and CSS, react to user actions (like clicks), and much more.

---

### What can you do with JavaScript?

JavaScript is one of the most popular and versatile programming languages in the world. You can use it for:

- **Web Development (Frontend):** Creating interactive user interfaces in the browser (this is our main focus).
- **Web Development (Backend):** Building servers and APIs with environments like Node.js.
- **Mobile App Development:** Using frameworks like React Native.
- **Game Development:** Creating browser-based games.
- And much more!

---

### Your First JavaScript Code

You don't need any special tools to run JavaScript. It's built right into your web browser.

Let's see two common ways to write JavaScript:

**1. The Browser Console**

This is like a playground for testing small snippets of code.

- In your browser (like Chrome or Firefox), right-click anywhere on a page and select "Inspect".
- Go to the "Console" tab.
- Type the following code and press Enter:

```javascript
console.log("Hello, World!");
```

`console.log()` is a way to print information to the console. It's one of the most useful tools for debugging your code.

**2. The `<script>` Tag in an HTML file**

For more permanent code, you'll write it in files.

- Create a file named `index.html`.
- Put this code inside it:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First JS Page</title>
</head>
<body>
  <h1>Welcome!</h1>
  <script>
    // This is a JavaScript comment
    alert("Hello from inside the HTML!");
  </script>
</body>
</html>
```

- Open this `index.html` file in your browser. You should see a pop-up box (an `alert`).

---

### Next Steps

In the next lesson, we will dive into the fundamental building blocks of JavaScript: variables and data types.
