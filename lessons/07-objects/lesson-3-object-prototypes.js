// Lesson 3: Object Prototypes
// Understanding prototype chains, inheritance, and prototype manipulation

console.log("📚 Lesson 3: Object Prototypes");
console.log("=============================");

// 📚 1. Prototype Chain Understanding
console.log("\n📚 1. Prototype Chain Understanding");
console.log("----------------------------------");

// Every object has a prototype
let simpleObject = {};
console.log("Simple object prototype:", Object.getPrototypeOf(simpleObject));
console.log("Is Object.prototype:", Object.getPrototypeOf(simpleObject) === Object.prototype);

// Prototype chain example
let person = {
    name: "John",
    age: 30
};

console.log("Person object:", person);
console.log("Person prototype:", Object.getPrototypeOf(person));
console.log("Person prototype is Object.prototype:", Object.getPrototypeOf(person) === Object.prototype);

// Accessing prototype methods
console.log("Person has toString:", 'toString' in person);
console.log("Person has valueOf:", 'valueOf' in person);
console.log("Person toString:", person.toString());

// 📚 2. Prototype Methods and Properties
console.log("\n📚 2. Prototype Methods and Properties");
console.log("------------------------------------");

// Creating objects with custom prototypes
let animalPrototype = {
    type: "animal",
    makeSound: function() {
        return `${this.name} makes a sound`;
    },
    
    move: function() {
        return `${this.name} moves`;
    },
    
    describe: function() {
        return `${this.name} is a ${this.type}`;
    }
};

// Create object with custom prototype
let dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.breed = "Golden Retriever";

console.log("Dog object:", dog);
console.log("Dog prototype:", Object.getPrototypeOf(dog));
console.log("Dog prototype is animalPrototype:", Object.getPrototypeOf(dog) === animalPrototype);

// Access prototype methods
console.log("Dog methods:");
console.log("makeSound:", dog.makeSound());
console.log("move:", dog.move());
console.log("describe:", dog.describe());

// Check if property is own or inherited
console.log("Property checks:");
console.log("dog.hasOwnProperty('name'):", dog.hasOwnProperty('name'));
console.log("dog.hasOwnProperty('makeSound'):", dog.hasOwnProperty('makeSound'));
console.log("'makeSound' in dog:", 'makeSound' in dog);

// 📚 3. Constructor Functions
console.log("\n📚 3. Constructor Functions");
console.log("-------------------------");

// Constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Add methods to prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

Person.prototype.introduce = function() {
    return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
};

// Create instances
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Jane", "Smith", 25);

console.log("Person instances:");
console.log("Person1:", person1);
console.log("Person2:", person2);

console.log("Person1 methods:");
console.log("getFullName:", person1.getFullName());
console.log("getAge:", person1.getAge());
console.log("introduce:", person1.introduce());

// Check prototype
console.log("Person1 prototype:", Object.getPrototypeOf(person1));
console.log("Person1 prototype is Person.prototype:", Object.getPrototypeOf(person1) === Person.prototype);

// 📚 4. Object Inheritance Patterns
console.log("\n📚 4. Object Inheritance Patterns");
console.log("--------------------------------");

// Parent constructor
function Animal(name, type) {
    this.name = name;
    this.type = type;
}

Animal.prototype.makeSound = function() {
    return `${this.name} makes a sound`;
};

Animal.prototype.move = function() {
    return `${this.name} moves`;
};

// Child constructor
function Dog(name, breed) {
    Animal.call(this, name, "dog"); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child-specific methods
Dog.prototype.bark = function() {
    return `${this.name} barks: Woof! Woof!`;
};

Dog.prototype.fetch = function() {
    return `${this.name} fetches the ball`;
};

// Create instances
let myDog = new Dog("Buddy", "Golden Retriever");

console.log("Dog inheritance:");
console.log("Dog object:", myDog);
console.log("Dog prototype:", Object.getPrototypeOf(myDog));
console.log("Dog prototype prototype:", Object.getPrototypeOf(Object.getPrototypeOf(myDog)));

console.log("Dog methods:");
console.log("makeSound:", myDog.makeSound());
console.log("move:", myDog.move());
console.log("bark:", myDog.bark());
console.log("fetch:", myDog.fetch());

// Check inheritance
console.log("Inheritance checks:");
console.log("myDog instanceof Dog:", myDog instanceof Dog);
console.log("myDog instanceof Animal:", myDog instanceof Animal);
console.log("myDog instanceof Object:", myDog instanceof Object);

// 📚 5. Prototype Manipulation
console.log("\n📚 5. Prototype Manipulation");
console.log("---------------------------");

// Create object with multiple prototype levels
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
console.log("Final object prototype:", Object.getPrototypeOf(finalObject));
console.log("Intermediate prototype:", Object.getPrototypeOf(Object.getPrototypeOf(finalObject)));
console.log("Base prototype:", Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(finalObject))));

// Access methods from different levels
console.log("Method calls:");
console.log("finalMethod:", finalObject.finalMethod());
console.log("intermediateMethod:", finalObject.intermediateMethod());
console.log("baseMethod:", finalObject.baseMethod());

// Modify prototype at runtime
intermediatePrototype.newMethod = function() {
    return "New method added at runtime";
};

console.log("New method:", finalObject.newMethod());

// 📚 6. Object.create() Patterns
console.log("\n📚 6. Object.create() Patterns");
console.log("-----------------------------");

// Factory function with prototype
function createVehicle(type, brand, model) {
    let vehicle = Object.create(vehiclePrototype);
    vehicle.type = type;
    vehicle.brand = brand;
    vehicle.model = model;
    return vehicle;
}

let vehiclePrototype = {
    start: function() {
        return `${this.brand} ${this.model} is starting`;
    },
    
    stop: function() {
        return `${this.brand} ${this.model} is stopping`;
    },
    
    getInfo: function() {
        return `${this.brand} ${this.model} (${this.type})`;
    }
};

let car = createVehicle("car", "Toyota", "Camry");
let motorcycle = createVehicle("motorcycle", "Honda", "CBR");

console.log("Vehicles:");
console.log("Car:", car);
console.log("Motorcycle:", motorcycle);

console.log("Vehicle methods:");
console.log("Car start:", car.start());
console.log("Car info:", car.getInfo());
console.log("Motorcycle start:", motorcycle.start());
console.log("Motorcycle info:", motorcycle.getInfo());

// 📚 7. Practical Example: Library System
console.log("\n📚 7. Practical Example: Library System");
console.log("-------------------------------------");

// Base Item constructor
function LibraryItem(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
    this.borrowedBy = null;
    this.borrowDate = null;
}

LibraryItem.prototype.borrow = function(borrower) {
    if (this.isAvailable) {
        this.isAvailable = false;
        this.borrowedBy = borrower;
        this.borrowDate = new Date().toISOString();
        return `${this.title} has been borrowed by ${borrower}`;
    }
    return `${this.title} is not available`;
};

LibraryItem.prototype.return = function() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        this.borrowedBy = null;
        this.borrowDate = null;
        return `${this.title} has been returned`;
    }
    return `${this.title} is already available`;
};

LibraryItem.prototype.getInfo = function() {
    return `${this.title} by ${this.author} (${this.year})`;
};

// Book constructor
function Book(title, author, year, isbn, pages) {
    LibraryItem.call(this, title, author, year);
    this.isbn = isbn;
    this.pages = pages;
    this.type = "book";
}

Book.prototype = Object.create(LibraryItem.prototype);
Book.prototype.constructor = Book;

Book.prototype.getDetails = function() {
    return `${this.getInfo()} - ISBN: ${this.isbn}, Pages: ${this.pages}`;
};

// DVD constructor
function DVD(title, director, year, duration, rating) {
    LibraryItem.call(this, title, director, year);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
    this.type = "dvd";
}

DVD.prototype = Object.create(LibraryItem.prototype);
DVD.prototype.constructor = DVD;

DVD.prototype.getDetails = function() {
    return `${this.getInfo()} - Director: ${this.director}, Duration: ${this.duration}min, Rating: ${this.rating}`;
};

// Create library items
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "978-0-7432-7356-5", 180);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "978-0-06-112008-4", 281);
let dvd1 = new DVD("The Matrix", "The Wachowskis", 1999, 136, "R");

console.log("Library items:");
console.log("Book1:", book1);
console.log("Book2:", book2);
console.log("DVD1:", dvd1);

console.log("Item details:");
console.log("Book1 details:", book1.getDetails());
console.log("Book2 details:", book2.getDetails());
console.log("DVD1 details:", dvd1.getDetails());

console.log("Borrowing operations:");
console.log(book1.borrow("John Doe"));
console.log(book1.borrow("Jane Smith")); // Should fail
console.log(dvd1.borrow("Jane Smith"));

console.log("Return operations:");
console.log(book1.return());
console.log(book1.borrow("Jane Smith")); // Should work now

// 📚 8. Prototype Best Practices
console.log("\n📚 8. Prototype Best Practices");
console.log("-----------------------------");

// Use Object.create() for clean inheritance
function createShape(type, color) {
    let shape = Object.create(shapePrototype);
    shape.type = type;
    shape.color = color;
    return shape;
}

let shapePrototype = {
    getArea: function() {
        return 0; // Override in specific shapes
    },
    
    getPerimeter: function() {
        return 0; // Override in specific shapes
    },
    
    describe: function() {
        return `A ${this.color} ${this.type}`;
    }
};

// Circle shape
function createCircle(radius, color) {
    let circle = createShape("circle", color);
    circle.radius = radius;
    
    // Override methods
    circle.getArea = function() {
        return Math.PI * this.radius * this.radius;
    };
    
    circle.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
    
    return circle;
}

// Rectangle shape
function createRectangle(width, height, color) {
    let rectangle = createShape("rectangle", color);
    rectangle.width = width;
    rectangle.height = height;
    
    // Override methods
    rectangle.getArea = function() {
        return this.width * this.height;
    };
    
    rectangle.getPerimeter = function() {
        return 2 * (this.width + this.height);
    };
    
    return rectangle;
}

// Create shapes
let circle = createCircle(5, "red");
let rectangle = createRectangle(4, 6, "blue");

console.log("Shapes:");
console.log("Circle:", circle.describe());
console.log("Circle area:", circle.getArea());
console.log("Circle perimeter:", circle.getPerimeter());

console.log("Rectangle:", rectangle.describe());
console.log("Rectangle area:", rectangle.getArea());
console.log("Rectangle perimeter:", rectangle.getPerimeter());

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Every object has a prototype chain");
console.log("- Use Object.create() for clean inheritance");
console.log("- Constructor functions create objects with shared prototypes");
console.log("- Prototypes can be modified at runtime");
console.log("- Use hasOwnProperty() to distinguish own vs inherited properties");
console.log("- Follow inheritance patterns for code reusability");

console.log("\n📝 Practice Exercises:");
console.log("1. Create objects with custom prototypes");
console.log("2. Practice constructor functions and inheritance");
console.log("3. Use Object.create() for clean inheritance");
console.log("4. Implement prototype chains");
console.log("5. Practice prototype manipulation");
