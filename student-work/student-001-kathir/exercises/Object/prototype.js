// Exercise 1: Prototype Chain Understanding
console.log("\n1. Prototype Chain Understanding:");

let simpleObject = {};
let prototype = Object.getPrototypeOf(simpleObject);

console.log("Simple object prototype:", prototype);
console.log("Is Object.prototype:", prototype === Object.prototype);

let hasToString = 'toString' in simpleObject;

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
let dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.breed = "Golden Retriever";

console.log("Dog object:", dog);
console.log("Dog prototype:", Object.getPrototypeOf(dog));
console.log("Dog prototype is animalPrototype:", Object.getPrototypeOf(dog) === animalPrototype);

let sound = dog.makeSound();
let move = dog.move();

console.log("Dog sound:", sound);
console.log("Dog move:", move);

// Exercise 3: Constructor Functions
console.log("\n3. Constructor Functions:");

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
};
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Jane", "Smith", 25);

console.log("Person instances:");
console.log("Person1:", person1);
console.log("Person2:", person2);
console.log("Person1 methods:");
console.log("getFullName:", person1.getFullName());
console.log("introduce:", person1.introduce());

// Exercise 4: Object Inheritance Patterns
console.log("\n4. Object Inheritance Patterns:");

function Animal(name, species) {
    this.name = name;
    this.species = species;
    this.isAlive = true;
}
Animal.prototype.eat = function(food) {
    return `${this.name} is eating ${food}`;
};
Animal.prototype.makeSound = function() {
    return `${this.name} makes a sound`;
};
function Dog(name, breed) {
    Animal.call(this, name, "dog");
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return `${this.name} barks: Woof! Woof!`;
};
Dog.prototype.makeSound = function() {
    return `${this.name} barks: Woof! Woof!`;
};
let myDog = new Dog("Buddy", "Golden Retriever");

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
let finalObject = Object.create(intermediatePrototype);

finalObject.finalMethod = function() {
    return "Final method called";
};
console.log("Prototype chain:");
console.log("Final object:", finalObject);

let baseResult = finalObject.baseMethod();
let intermediateResult = finalObject.intermediateMethod();
let finalResult = finalObject.finalMethod();

console.log("Method calls:");
console.log("Base method:", baseResult);
console.log("Intermediate method:", intermediateResult);
console.log("Final method:", finalResult);

// Exercise 6: Object.create() Patterns
console.log("\n6. Object.create() Patterns:");

let vehiclePrototype = {
    start: function() {
        return `${this.brand} ${this.model} is starting`;
    },
    stop: function() {
        return `${this.brand} ${this.model} is stopping`;
    }
};
function createVehicle(type, brand, model) {
    let vehicle = Object.create(vehiclePrototype);
    vehicle.type = type;
    vehicle.brand = brand;
    vehicle.model = model;
    return vehicle;
}
let car = createVehicle("car", "Toyota", "Camry");
let motorcycle = createVehicle("motorcycle", "Honda", "CBR");

console.log("Vehicles:");
console.log("Car:", car);
console.log("Motorcycle:", motorcycle);
console.log("Vehicle methods:");
console.log("Car start:", car.start());
console.log("Motorcycle start:", motorcycle.start());

// Exercise 7: Inheritance with Classes
console.log("\n7. Inheritance with Classes:");

class Shape {
    constructor(name) {
        this.name = name;
    }    
    getArea() {
        return 0;
    }    
    describe() {
        return `${this.name} with area ${this.getArea()}`;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);

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
class Bird {
    constructor(name) {
        this.name = name;
    }    
    chirp() {
        return `${this.name} chirps`;
    }
}
Object.assign(Bird.prototype, Flyable);

let bird = new Bird("Tweety");

console.log("Mixin example:");
console.log("Bird chirp:", bird.chirp());
console.log("Bird fly:", bird.fly());

// Exercise 9: Prototype Best Practices
console.log("\n9. Prototype Best Practices:");

let shapePrototype = {
    getArea: function() {
        return 0;
    },
    describe: function() {
        return `A ${this.color} ${this.type}`;
    }
};
function createShape(type, color) {
    let shape = Object.create(shapePrototype);
    shape.type = type;
    shape.color = color;
    return shape;
}
function createCircle(radius, color) {
    let circle = createShape("circle", color);
    circle.radius = radius;
    circle.getArea = function() {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}
let circle2 = createCircle(5, "red");

console.log("Prototype best practices:");
console.log("Circle:", circle2.describe());
console.log("Circle area:", circle2.getArea());

// Exercise 10: Inheritance Chain Inspection
console.log("\n10. Inheritance Chain Inspection:");

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

let child = new Child();

console.log("Inheritance chain inspection:");
console.log("Child object:", child);
console.log("Child prototype:", Object.getPrototypeOf(child));
console.log("Parent prototype:", Object.getPrototypeOf(Object.getPrototypeOf(child)));
console.log("Grandparent prototype:", Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))));