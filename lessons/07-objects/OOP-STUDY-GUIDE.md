# OOP Quick Study Guide

Core ideas:

- Classes: Blueprints for creating similar objects; define properties and methods.
- Instances: Objects created from classes; each instance has its own state.
- Encapsulation: Group data and related behavior together; hide internal details.
- Inheritance: Reuse behavior by extending prototypes or classes.
- Polymorphism: Different objects respond to the same method in their own way.

Quick reference:

- Create an object literal: `const o = { a: 1 }`
- Create a class: `class C { constructor(x) { this.x = x } }`
- Inherit (class): `class D extends C {}`
- Prototype create: `const child = Object.create(parentProto)`
- Destructure: `const { a, b } = obj`

Study tips:

- Build small concrete examples: contact manager, bank account, simple game object.
- Trace `this` in methods vs arrow functions using console logs.
- Practice converting a prototype-based object to an ES6 class.
