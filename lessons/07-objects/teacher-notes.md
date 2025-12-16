## Module 7 Teacher Notes — Realtime analogies, demos, and exercises

Purpose: Make lessons highly practical and easy to teach. Each lesson below includes a short realtime analogy, a 5–10 minute live demo suggestion, a practical exercise, and expected answers or hints.

General flow for each lesson:
- Analogy (1–2 minutes)
- Live demo (5–10 minutes)
- Hands-on exercise (10–15 minutes) — pair up
- Share + recap (3–5 minutes)

Lesson 1 — Object Basics
- Analogy: "An object is a contact card." Each property is a field on the contact card (name, phone), and methods are actions the card can perform (sendMessage).
- Demo: Build a `person` contact card, show dot and bracket access, modify fields live.
- Exercise: Create a `book` object with title, author, pages, and `readPage()` method that increments a `currentPage` property. Show answer: implement `readPage()` that increases `currentPage` and returns progress.

Lesson 2 — Object Methods
- Analogy: "Methods are the tools inside a toolbox." Data are the tools, methods are what the toolbox can do.
- Demo: Show calculator object with methods; illustrate `this` behaving differently with arrow functions vs regular functions.
- Exercise: Add a `reset()` method to the calculator that resets `result` and `history`. Hint: use `this`.

Lesson 3 — Prototypes & Inheritance
- Analogy: "Prototype is a library of shared features" — new toys inherit built-in behaviors from the library.
- Demo: Use `Object.create()` to make an object that inherits a `greet()` method from a prototype. Then show how changing prototype affects instances.
- Exercise: Create `animalPrototype` with method `speak()` and then create `dog` and `cat` objects that inherit and override `speak()`.

Lesson 4 — ES6 Classes
- Analogy: "Class = blueprint, instance = built house." Build blueprint and then create multiple objects from it.
- Demo: Create `Person` class with `constructor`, `introduce()`, and subclass `Student` that extends `Person` and adds `study()`.
- Exercise: Implement `Student` subclass and instantiate two students with different subjects.

Lesson 5 — Object Destructuring
- Analogy: "Unpacking a lunchbox" — pick what you want quickly without digging through everything.
- Demo: Destructure a user object to extract `name` and `email`, show defaults and renaming.
- Exercise: Given an API response object, extract nested properties using nested destructuring with defaults.

Lesson 6 — OOP Principles
- Analogy: "Blueprints and Houses" for classes, "capsules" for encapsulation — hide internals.
- Demo: Show encapsulation by using closures or symbols to create private state; show polymorphism by overriding methods in subclasses.
- Exercise: Implement a `BankAccount` class with `deposit`, `withdraw`, and a private balance (hint: use a symbol or closure).

Lesson 7 — Object Utilities
- Analogy: "Toolbox of small gadgets" — `Object.keys()` is like reading a label list, `Object.freeze()` is like putting a lock.
- Demo: Show shallow vs deep clone and explain pitfalls with nested objects.
- Exercise: Write a small `deepClone` function (or use provided `deepCloneObject`) and demonstrate difference between shallow and deep clones.

Quick assessment rubric (for short exercises):
- 3 points: Solution works, code is readable, uses recommended patterns.
- 2 points: Solution mostly works with minor edge cases or style issues.
- 1 point: Partial solution or approach documented but not implemented.
- 0 points: No submission or incorrect approach.

Tips for classroom engagement:
- Live-edit code and invite students to suggest the next line — keep momentum.
- Encourage students to explain one line of code to their partner.
- Use real-world mini-projects (contact manager, simple blog post model, shopping cart item) across lessons to build continuity.

End of teacher notes.
