// TEACHING NOTES: Module 7 — OOP Overview
// Analogy: "Blueprints and Houses" — classes are blueprints; objects are built houses from that blueprint.
// Demo: Show a `HouseBlueprint` class and build multiple houses with different paint colors; show encapsulation and method use.
// Hands-on: Build a `BankAccount` class with `deposit`, `withdraw`, and a private balance (use closure or symbol).
// Lesson 6: A Beginner-Friendly Guide to Object-Oriented Programming (OOP)
// Welcome! This guide will help you understand OOP using simple analogies and real-world examples.

console.log("📚 Lesson 6: A Beginner-Friendly Guide to Object-Oriented Programming (OOP)");
console.log("========================================================================");

// What is OOP?
// Think of it as a way to organize your code. Instead of having loose data and functions,
// we group them together into "objects". It helps in modeling real-world things.

// 🌟 Analogy: The Blueprint and the Houses 🌟
// Imagine you have a blueprint for a house. The blueprint is not a house itself, but it contains all the plans for creating a house.
// In OOP:
// - The Blueprint is called a CLASS.
// - The actual Houses you build from the blueprint are called OBJECTS (or instances).
// You can build many houses from one blueprint, and each can have its own unique details (like paint color or address).

console.log("\n--- 🏛️ Let's start with a CLASS (Our Blueprint) ---");

// This 'HouseBlueprint' class defines what every house will have.
class HouseBlueprint {
    // The 'constructor' is a special method that runs when you create a new house (object).
    // It sets up the initial properties.
    constructor(address, paintColor) {
        console.log(`Constructing a new house at ${address}...`);
        this.address = address;         // Each house has an address.
        this.paintColor = paintColor;   // Each house has a paint color.
        this.isDoorOpen = false;        // By default, the door is closed.
    }

    // These are METHODS (actions the house can perform).
    openDoor() {
        this.isDoorOpen = true;
        console.log(`The door of the house at ${this.address} is now open.`);
    }

    closeDoor() {
        this.isDoorOpen = false;
        console.log(`The door of the house at ${this.address} is now closed.`);
    }

    // This method describes the house.
    describe() {
        return `This is a ${this.paintColor} house at ${this.address}.`;
    }
}

console.log("Blueprint created: HouseBlueprint");

console.log("\n--- 🏡 Now, let's build some OBJECTS (Actual Houses) from our blueprint ---");

// We use the 'new' keyword to create objects from our class.
const myHouse = new HouseBlueprint("123 Main St", "blue");
const neighborsHouse = new HouseBlueprint("125 Main St", "white");

// Now we have two separate house objects. They share the same blueprint but have different data.
console.log(myHouse.describe());       // Output: This is a blue house at 123 Main St.
console.log(neighborsHouse.describe()); // Output: This is a white house at 125 Main St.

// We can also call their methods.
myHouse.openDoor(); // Output: The door of the house at 123 Main St is now open.
console.log("Is my house door open?", myHouse.isDoorOpen); // Output: true

neighborsHouse.closeDoor(); // The door is already closed, but the method runs anyway.
console.log("Is my neighbor's house door open?", neighborsHouse.isDoorOpen); // Output: false

console.log("\nGreat! You now understand the basics of Classes and Objects.");
console.log("Now, let's explore the Four Pillars of OOP.");

// ===================================================================================
// 🏛️ PILLAR 1: ENCAPSULATION (Keeping Things Bundled and Tidy)
// ===================================================================================
console.log("\n--- 🏛️ PILLAR 1: ENCAPSULATION ---");
// Encapsulation means bundling the data (properties) and the methods that operate on that data
// into a single unit (our 'HouseBlueprint' class is a perfect example!).
// It also means hiding the internal complexity.

// 🌟 Analogy: A Car's Dashboard 🌟
// You use a steering wheel, pedals, and a gear stick to drive a car. You don't need to know
// how the engine, transmission, or electronics work. The complex details are hidden (encapsulated)
// from you. You just use the simple, public interface.

// In our HouseBlueprint, the `address` and `paintColor` are bundled with the `openDoor` and `describe` methods.
// We don't let people from outside directly mess with the house's internal state without using the methods we provide.
// For example, to open the door, you should call `myHouse.openDoor()`, not try to change `isDoorOpen` directly.
// This keeps our object's state predictable and safe.

console.log("Encapsulation bundles data (like 'paintColor') and methods (like 'describe') together in our HouseBlueprint.");

// ===================================================================================
// 🏛️ PILLAR 2: INHERITANCE (Reusing and Extending Blueprints)
// ===================================================================================
console.log("\n--- 🏛️ PILLAR 2: INHERITANCE ---");
// Inheritance lets us create a new class (a "child") that reuses and expands upon an existing class (a "parent").

// 🌟 Analogy: Vehicles 🌟
// Think of a general "Vehicle" blueprint. It has properties like `speed` and methods like `move()`.
// Now, you can create more specific blueprints based on it:
// - A 'Car' blueprint inherits everything from 'Vehicle' but adds `numberOfDoors`.
// - A 'Bicycle' blueprint also inherits from 'Vehicle' but adds `numberOfPedals`.
// This avoids repeating the same code.

// Let's create a parent class 'Building'.
class Building {
    constructor(address) {
        this.address = address;
    }

    getAddress() {
        return `Address: ${this.address}`;
    }
}

// Now, let's create a 'House' class that INHERITS from 'Building'.
// We use the 'extends' keyword.
class House extends Building {
    constructor(address, numberOfRooms) {
        // 'super()' calls the constructor of the parent class ('Building').
        // It's important to do this first!
        super(address);
        this.numberOfRooms = numberOfRooms;
    }

    describeHouse() {
        // We can use methods from the parent class AND this class.
        return `${this.getAddress()} | Rooms: ${this.numberOfRooms}`;
    }
}

const myNewHouse = new House("456 Oak Ave", 7);
console.log(myNewHouse.describeHouse()); // It has access to its own methods and the parent's.

// ===================================================================================
// 🏛️ PILLAR 3: POLYMORPHISM (One Action, Many Forms)
// ===================================================================================
console.log("\n--- 🏛️ PILLAR 3: POLYMORPHISM ---");
// Polymorphism means "many forms". It allows different objects to respond to the same
// method call in their own unique way.

// 🌟 Analogy: Animal Sounds 🌟
// If you tell different animals to "make a sound":
// - A Dog will bark.
// - A Cat will meow.
// - A Cow will moo.
// The action is the same ("make a sound"), but the result is different for each animal.

class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    // We OVERRIDE the parent's makeSound method.
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    // We OVERRIDE it here too.
    makeSound() {
        console.log("Meow!");
    }
}

const animals = [new Dog(), new Cat(), new Animal()];

// We can loop through them and call the same method on each one.
animals.forEach(animal => {
    animal.makeSound(); // The correct sound is made for each animal object!
});

// ===================================================================================
// 🏛️ PILLAR 4: ABSTRACTION (Hiding the Complex Stuff)
// ===================================================================================
console.log("\n--- 🏛️ PILLAR 4: ABSTRACTION ---");
// Abstraction means hiding the complex implementation details and showing only the
// essential features of the object. It's about simplifying things for the user.

// 🌟 Analogy: A TV Remote 🌟
// Your TV remote has simple buttons like "Volume Up", "Power On", and "Next Channel".
// When you press "Volume Up", you don't know (or care) about the infrared signals,
// the circuit board, or the speaker's electronics. All that complexity is hidden (abstracted) away.
// You just know that pressing the button will increase the volume.

// In our code, when we call `myHouse.openDoor()`, we are using abstraction.
// We don't need to know that it's changing a variable called `isDoorOpen` from `false` to `true`.
// The internal logic is hidden. We just know the door will be open.
// Abstraction is often a result of good Encapsulation.

console.log("When we call `myHouse.openDoor()`, we are using Abstraction.");
console.log("We don't care HOW it opens the door, just that it does.");

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- OOP helps organize code using Classes (blueprints) and Objects (actual things).");
console.log("- Encapsulation: Bundling data and methods together.");
console.log("- Inheritance: Reusing code by having a child class extend a parent class.");
console.log("- Polymorphism: Allowing different objects to have a unique response to the same method call.");
console.log("- Abstraction: Hiding complexity to make things easier to use.");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a 'Car' class with properties like 'make', 'model', and 'year'.");
console.log("2. Add methods to your 'Car' class like 'startEngine()' and 'drive()'.");
console.log("3. Create a 'Motorcycle' class that inherits from a general 'Vehicle' class.");
console.log("4. Create an array of different 'Shape' objects (like Circle, Square) and have each one implement a 'draw()' method that logs what they are.");