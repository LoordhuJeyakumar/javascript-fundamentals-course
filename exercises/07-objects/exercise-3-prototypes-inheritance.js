// Exercise 3: Prototypes and Inheritance
// Complete the TODO sections below

console.log("💪 Exercise 3: Prototypes and Inheritance");
console.log("=======================================");

// Exercise 1: Prototype Chain Understanding
console.log("\n1. Prototype Chain Understanding:");
let simpleObject = {};

// TODO: Get the prototype of simpleObject
let prototype = null; // Your code here
// Hint: Object.getPrototypeOf(simpleObject)

console.log("Simple object prototype:", prototype);
console.log("Is Object.prototype:", prototype === Object.prototype);

// TODO: Check if simpleObject has toString method
let hasToString = null; // Your code here
// Hint: 'toString' in simpleObject

console.log("Has toString method:", hasToString);

// Exercise 2: Creating Objects with Custom Prototypes
console.log("\n2. Creating Objects with Custom Prototypes:");
let animalPrototype = {
    type: "animal",
    makeSound: function() {
        return `${this.name} makes a sound`;
    },
    move: function() {
        return `${this.name} moves`;
    }
};

// TODO: Create object with custom prototype
let dog = null; // Your code here
// Hint: Object.create(animalPrototype)

dog.name = "Buddy";
dog.breed = "Golden Retriever";

console.log("Dog object:", dog);
console.log("Dog prototype:", Object.getPrototypeOf(dog));
console.log("Dog prototype is animalPrototype:", Object.getPrototypeOf(dog) === animalPrototype);

// TODO: Call prototype methods
let sound = null; // Your code here
// Hint: dog.makeSound()

let move = null; // Your code here
// Hint: dog.move()

console.log("Dog sound:", sound);
console.log("Dog move:", move);

// Exercise 3: Constructor Functions
console.log("\n3. Constructor Functions:");
// TODO: Create constructor function
function Person(firstName, lastName, age) {
    // Your code here
    // Hint: this.firstName = firstName; this.lastName = lastName; this.age = age;
}

// TODO: Add methods to prototype
Person.prototype.getFullName = function() {
    // Your code here
    // Hint: return `${this.firstName} ${this.lastName}`;
};

Person.prototype.introduce = function() {
    // Your code here
    // Hint: return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
};

// TODO: Create instances
let person1 = null; // Your code here
// Hint: new Person("John", "Doe", 30)

let person2 = null; // Your code here
// Hint: new Person("Jane", "Smith", 25)

console.log("Person instances:");
console.log("Person1:", person1);
console.log("Person2:", person2);

console.log("Person1 methods:");
console.log("getFullName:", person1.getFullName());
console.log("introduce:", person1.introduce());

// Exercise 4: Object Inheritance Patterns
console.log("\n4. Object Inheritance Patterns:");
// TODO: Create parent constructor
function Animal(name, species) {
    // Your code here
    // Hint: this.name = name; this.species = species; this.isAlive = true;
}

Animal.prototype.eat = function(food) {
    return `${this.name} is eating ${food}`;
};

Animal.prototype.makeSound = function() {
    return `${this.name} makes a sound`;
};

// TODO: Create child constructor
function Dog(name, breed) {
    // Your code here
    // Hint: Animal.call(this, name, "dog"); this.breed = breed;
}

// TODO: Set up inheritance
// Your code here
// Hint: Dog.prototype = Object.create(Animal.prototype); Dog.prototype.constructor = Dog;

// TODO: Add child-specific methods
Dog.prototype.bark = function() {
    // Your code here
    // Hint: return `${this.name} barks: Woof! Woof!`;
};

// TODO: Override parent method
Dog.prototype.makeSound = function() {
    // Your code here
    // Hint: return `${this.name} barks: Woof! Woof!`;
};

// TODO: Create instance
let myDog = null; // Your code here
// Hint: new Dog("Buddy", "Golden Retriever")

console.log("Dog inheritance:");
console.log("Dog object:", myDog);
console.log("Dog sound:", myDog.makeSound());
console.log("Dog eat:", myDog.eat("kibble"));
console.log("Dog bark:", myDog.bark());

// Exercise 5: Prototype Manipulation
console.log("\n5. Prototype Manipulation:");
let basePrototype = {
    baseMethod: function() {
        return "Base method called";
    }
};

let intermediatePrototype = Object.create(basePrototype);
intermediatePrototype.intermediateMethod = function() {
    return "Intermediate method called";
};

// TODO: Create object with multiple prototype levels
let finalObject = null; // Your code here
// Hint: Object.create(intermediatePrototype)

finalObject.finalMethod = function() {
    return "Final method called";
};

console.log("Prototype chain:");
console.log("Final object:", finalObject);

// TODO: Call methods from different levels
let baseResult = null; // Your code here
// Hint: finalObject.baseMethod()

let intermediateResult = null; // Your code here
// Hint: finalObject.intermediateMethod()

let finalResult = null; // Your code here
// Hint: finalObject.finalMethod()

console.log("Method calls:");
console.log("Base method:", baseResult);
console.log("Intermediate method:", intermediateResult);
console.log("Final method:", finalResult);

// Exercise 6: Object.create() Patterns
console.log("\n6. Object.create() Patterns:");
// TODO: Create factory function with prototype
function createVehicle(type, brand, model) {
    // Your code here
    // Hint: let vehicle = Object.create(vehiclePrototype); vehicle.type = type; vehicle.brand = brand; vehicle.model = model; return vehicle;
}

let vehiclePrototype = {
    start: function() {
        return `${this.brand} ${this.model} is starting`;
    },
    stop: function() {
        return `${this.brand} ${this.model} is stopping`;
    }
};

// TODO: Create vehicles
let car = null; // Your code here
// Hint: createVehicle("car", "Toyota", "Camry")

let motorcycle = null; // Your code here
// Hint: createVehicle("motorcycle", "Honda", "CBR")

console.log("Vehicles:");
console.log("Car:", car);
console.log("Motorcycle:", motorcycle);

console.log("Vehicle methods:");
console.log("Car start:", car.start());
console.log("Motorcycle start:", motorcycle.start());

// Exercise 7: Inheritance with Classes
console.log("\n7. Inheritance with Classes:");
// TODO: Create parent class
class Shape {
    constructor(name) {
        // Your code here
        // Hint: this.name = name;
    }
    
    getArea() {
        return 0; // Override in subclasses
    }
    
    describe() {
        return `${this.name} with area ${this.getArea()}`;
    }
}

// TODO: Create child class
class Circle extends Shape {
    constructor(radius) {
        // Your code here
        // Hint: super("Circle"); this.radius = radius;
    }
    
    getArea() {
        // Your code here
        // Hint: return Math.PI * this.radius * this.radius;
    }
}

// TODO: Create instance
let circle = null; // Your code here
// Hint: new Circle(5)

console.log("Class inheritance:");
console.log("Circle:", circle);
console.log("Circle area:", circle.getArea());
console.log("Circle describe:", circle.describe());

// Exercise 8: Mixins and Composition
console.log("\n8. Mixins and Composition:");
let Flyable = {
    fly() {
        return `${this.name} is flying`;
    }
};

let Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    }
};

// TODO: Create class with mixins
class Bird {
    constructor(name) {
        // Your code here
        // Hint: this.name = name;
    }
    
    chirp() {
        return `${this.name} chirps`;
    }
}

// TODO: Mix in Flyable
// Your code here
// Hint: Object.assign(Bird.prototype, Flyable);

// TODO: Create instance
let bird = null; // Your code here
// Hint: new Bird("Tweety")

console.log("Mixin example:");
console.log("Bird chirp:", bird.chirp());
console.log("Bird fly:", bird.fly());

// Exercise 9: Prototype Best Practices
console.log("\n9. Prototype Best Practices:");
// TODO: Create clean inheritance using Object.create()
function createShape(type, color) {
    // Your code here
    // Hint: let shape = Object.create(shapePrototype); shape.type = type; shape.color = color; return shape;
}

let shapePrototype = {
    getArea: function() {
        return 0; // Override in specific shapes
    },
    describe: function() {
        return `A ${this.color} ${this.type}`;
    }
};

// TODO: Create specific shape
function createCircle(radius, color) {
    // Your code here
    // Hint: let circle = createShape("circle", color); circle.radius = radius; circle.getArea = function() { return Math.PI * this.radius * this.radius; }; return circle;
}

// TODO: Create circle
let circle2 = null; // Your code here
// Hint: createCircle(5, "red")

console.log("Prototype best practices:");
console.log("Circle:", circle2.describe());
console.log("Circle area:", circle2.getArea());

// Exercise 10: Inheritance Chain Inspection
console.log("\n10. Inheritance Chain Inspection:");
// TODO: Create inheritance chain
function Grandparent() {
    this.grandparentProp = "grandparent";
}

function Parent() {
    Grandparent.call(this);
    this.parentProp = "parent";
}

Parent.prototype = Object.create(Grandparent.prototype);
Parent.prototype.constructor = Parent;

function Child() {
    Parent.call(this);
    this.childProp = "child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// TODO: Create instance
let child = null; // Your code here
// Hint: new Child()

console.log("Inheritance chain inspection:");
console.log("Child object:", child);
console.log("Child prototype:", Object.getPrototypeOf(child));
console.log("Parent prototype:", Object.getPrototypeOf(Object.getPrototypeOf(child)));
console.log("Grandparent prototype:", Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))));

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced prototypes and inheritance.");
console.log("Key concepts practiced:");
console.log("- Prototype chain understanding");
console.log("- Creating objects with custom prototypes");
console.log("- Constructor functions and inheritance");
console.log("- Object inheritance patterns");
console.log("- Prototype manipulation");
console.log("- Object.create() patterns");
console.log("- Class inheritance");
console.log("- Mixins and composition");
console.log("- Prototype best practices");
console.log("- Inheritance chain inspection");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: ES6 Classes");
console.log("4. Ask questions if you need help");
