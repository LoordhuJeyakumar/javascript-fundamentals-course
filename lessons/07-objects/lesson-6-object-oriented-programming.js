// Lesson 6: Object-Oriented Programming
// Understanding OOP principles, design patterns, and advanced object concepts

console.log("📚 Lesson 6: Object-Oriented Programming");
console.log("======================================");

// 📚 1. Encapsulation Principles
console.log("\n📚 1. Encapsulation Principles");
console.log("-----------------------------");

// Encapsulation using closures
function createBankAccount(accountNumber, initialBalance = 0) {
    // Private variables
    let balance = initialBalance;
    let transactions = [];
    
    // Public methods
    return {
        getAccountNumber() {
            return accountNumber;
        },
        
        getBalance() {
            return balance;
        },
        
        deposit(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                throw new Error("Amount must be a positive number");
            }
            balance += amount;
            transactions.push({
                type: 'deposit',
                amount: amount,
                timestamp: new Date().toISOString(),
                balance: balance
            });
            return `Deposited $${amount}. New balance: $${balance}`;
        },
        
        withdraw(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                throw new Error("Amount must be a positive number");
            }
            if (amount > balance) {
                throw new Error("Insufficient funds");
            }
            balance -= amount;
            transactions.push({
                type: 'withdrawal',
                amount: amount,
                timestamp: new Date().toISOString(),
                balance: balance
            });
            return `Withdrew $${amount}. New balance: $${balance}`;
        },
        
        getTransactions() {
            return [...transactions]; // Return copy to prevent external modification
        },
        
        getStatement() {
            return {
                accountNumber: accountNumber,
                currentBalance: balance,
                transactionCount: transactions.length,
                transactions: [...transactions]
            };
        }
    };
}

// Create bank account
let account = createBankAccount("123456789", 1000);

console.log("Encapsulated bank account:");
console.log("Account number:", account.getAccountNumber());
console.log("Initial balance:", account.getBalance());

try {
    console.log(account.deposit(500));
    console.log(account.withdraw(200));
    console.log("Current balance:", account.getBalance());
    console.log("Transactions:", account.getTransactions());
} catch (error) {
    console.log("Error:", error.message);
}

// Try to access private variables (won't work)
console.log("Private balance access:", account.balance); // undefined
console.log("Private transactions access:", account.transactions); // undefined

// 📚 2. Inheritance Patterns
console.log("\n📚 2. Inheritance Patterns");
console.log("-------------------------");

// Base class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.isAlive = true;
    }
    
    eat(food) {
        return `${this.name} is eating ${food}`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
    
    makeSound() {
        return `${this.name} makes a sound`;
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog");
        this.breed = breed;
        this.tricks = [];
    }
    
    // Override parent method
    makeSound() {
        return `${this.name} barks: Woof! Woof!`;
    }
    
    // New method specific to Dog
    learnTrick(trick) {
        this.tricks.push(trick);
        return `${this.name} learned to ${trick}`;
    }
    
    // New method specific to Dog
    performTrick(trick) {
        if (this.tricks.includes(trick)) {
            return `${this.name} performs ${trick}`;
        }
        return `${this.name} doesn't know how to ${trick}`;
    }
    
    // Override getInfo to include breed
    getInfo() {
        return `${this.name} is a ${this.breed} ${this.species}`;
    }
}

// Another derived class
class Cat extends Animal {
    constructor(name, breed) {
        super(name, "cat");
        this.breed = breed;
        this.lives = 9;
    }
    
    // Override parent method
    makeSound() {
        return `${this.name} meows: Meow! Meow!`;
    }
    
    // New method specific to Cat
    purr() {
        return `${this.name} purrs contentedly`;
    }
    
    // New method specific to Cat
    climb() {
        return `${this.name} climbs up high`;
    }
    
    // Override getInfo to include breed
    getInfo() {
        return `${this.name} is a ${this.breed} ${this.species} with ${this.lives} lives`;
    }
}

// Create instances
let dog = new Dog("Buddy", "Golden Retriever");
let cat = new Cat("Whiskers", "Persian");

console.log("Inheritance examples:");
console.log("Dog info:", dog.getInfo());
console.log("Dog sound:", dog.makeSound());
console.log("Dog eat:", dog.eat("kibble"));
console.log("Dog learn trick:", dog.learnTrick("sit"));
console.log("Dog perform trick:", dog.performTrick("sit"));

console.log("Cat info:", cat.getInfo());
console.log("Cat sound:", cat.makeSound());
console.log("Cat eat:", cat.eat("fish"));
console.log("Cat purr:", cat.purr());
console.log("Cat climb:", cat.climb());

// 📚 3. Polymorphism Concepts
console.log("\n📚 3. Polymorphism Concepts");
console.log("---------------------------");

// Polymorphism with different animal types
let animals = [
    new Dog("Rex", "German Shepherd"),
    new Cat("Fluffy", "Maine Coon"),
    new Animal("Generic", "unknown")
];

console.log("Polymorphism example:");
animals.forEach(animal => {
    console.log(`Animal: ${animal.getInfo()}`);
    console.log(`Sound: ${animal.makeSound()}`);
    console.log(`Eating: ${animal.eat("food")}`);
    console.log("---");
});

// Polymorphism with different shapes
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return 0; // Override in subclasses
    }
    
    getPerimeter() {
        return 0; // Override in subclasses
    }
    
    describe() {
        return `${this.name} with area ${this.getArea()} and perimeter ${this.getPerimeter()}`;
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
    
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2) {
        super("Triangle");
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }
    
    getArea() {
        return 0.5 * this.base * this.height;
    }
    
    getPerimeter() {
        return this.base + this.side1 + this.side2;
    }
}

// Create shapes
let shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5, 5)
];

console.log("Shape polymorphism:");
shapes.forEach(shape => {
    console.log(shape.describe());
});

// 📚 4. Design Patterns with Objects
console.log("\n📚 4. Design Patterns with Objects");
console.log("---------------------------------");

// Singleton Pattern
class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        
        this.connectionString = "localhost:5432/mydb";
        this.isConnected = false;
        DatabaseConnection.instance = this;
    }
    
    connect() {
        if (!this.isConnected) {
            this.isConnected = true;
            console.log("Connected to database");
        }
        return this;
    }
    
    disconnect() {
        if (this.isConnected) {
            this.isConnected = false;
            console.log("Disconnected from database");
        }
        return this;
    }
    
    query(sql) {
        if (!this.isConnected) {
            throw new Error("Not connected to database");
        }
        console.log(`Executing query: ${sql}`);
        return { rows: [], affected: 0 };
    }
}

// Test singleton
let db1 = new DatabaseConnection();
let db2 = new DatabaseConnection();
console.log("Singleton pattern:");
console.log("Same instance?", db1 === db2); // true

db1.connect();
db1.query("SELECT * FROM users");
db2.query("SELECT * FROM products"); // Works because it's the same instance

// Factory Pattern
class VehicleFactory {
    static createVehicle(type, ...args) {
        switch (type) {
            case 'car':
                return new Car(...args);
            case 'motorcycle':
                return new Motorcycle(...args);
            case 'truck':
                return new Truck(...args);
            default:
                throw new Error(`Unknown vehicle type: ${type}`);
        }
    }
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.type = 'car';
    }
    
    start() {
        return `${this.brand} ${this.model} car is starting`;
    }
}

class Motorcycle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.type = 'motorcycle';
    }
    
    start() {
        return `${this.brand} ${this.model} motorcycle is starting`;
    }
}

class Truck {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.type = 'truck';
    }
    
    start() {
        return `${this.brand} ${this.model} truck is starting`;
    }
}

// Test factory pattern
console.log("Factory pattern:");
let vehicle1 = VehicleFactory.createVehicle('car', 'Toyota', 'Camry', 2023);
let vehicle2 = VehicleFactory.createVehicle('motorcycle', 'Honda', 'CBR', 2023);
let vehicle3 = VehicleFactory.createVehicle('truck', 'Ford', 'F-150', 2023);

console.log(vehicle1.start());
console.log(vehicle2.start());
console.log(vehicle3.start());

// Observer Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Test observer pattern
let eventEmitter = new EventEmitter();

eventEmitter.on('userLogin', (user) => {
    console.log(`User ${user.name} logged in`);
});

eventEmitter.on('userLogin', (user) => {
    console.log(`Sending welcome email to ${user.email}`);
});

eventEmitter.on('userLogout', (user) => {
    console.log(`User ${user.name} logged out`);
});

console.log("Observer pattern:");
eventEmitter.emit('userLogin', { name: 'John', email: 'john@example.com' });
eventEmitter.emit('userLogout', { name: 'John', email: 'john@example.com' });

// 📚 5. Composition over Inheritance
console.log("\n📚 5. Composition over Inheritance");
console.log("---------------------------------");

// Composition example
class Engine {
    constructor(type) {
        this.type = type;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        return `${this.type} engine started`;
    }
    
    stop() {
        this.isRunning = false;
        return `${this.type} engine stopped`;
    }
}

class Wheels {
    constructor(count) {
        this.count = count;
        this.isSpinning = false;
    }
    
    spin() {
        this.isSpinning = true;
        return `${this.count} wheels are spinning`;
    }
    
    stop() {
        this.isSpinning = false;
        return `${this.count} wheels stopped`;
    }
}

class VehicleComposed {
    constructor(brand, model, engine, wheels) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.wheels = wheels;
    }
    
    start() {
        return `${this.brand} ${this.model}: ${this.engine.start()}, ${this.wheels.spin()}`;
    }
    
    stop() {
        return `${this.brand} ${this.model}: ${this.engine.stop()}, ${this.wheels.stop()}`;
    }
    
    getInfo() {
        return `${this.brand} ${this.model} with ${this.engine.type} engine and ${this.wheels.count} wheels`;
    }
}

// Create composed vehicle
let carEngine = new Engine("V6");
let carWheels = new Wheels(4);
let composedCar = new VehicleComposed("Toyota", "Camry", carEngine, carWheels);

console.log("Composition example:");
console.log(composedCar.getInfo());
console.log(composedCar.start());
console.log(composedCar.stop());

// 📚 6. Advanced Object Concepts
console.log("\n📚 6. Advanced Object Concepts");
console.log("-----------------------------");

// Mixins
let Flyable = {
    fly() {
        return `${this.name} is flying`;
    },
    
    land() {
        return `${this.name} has landed`;
    }
};

let Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    },
    
    dive() {
        return `${this.name} is diving`;
    }
};

// Mixin function
function mixin(target, ...sources) {
    sources.forEach(source => {
        Object.getOwnPropertyNames(source).forEach(name => {
            if (name !== 'constructor') {
                target.prototype[name] = source[name];
            }
        });
    });
    return target;
}

// Create class with mixins
class Bird {
    constructor(name) {
        this.name = name;
    }
    
    chirp() {
        return `${this.name} chirps`;
    }
}

mixin(Bird, Flyable);

class Duck {
    constructor(name) {
        this.name = name;
    }
    
    quack() {
        return `${this.name} quacks`;
    }
}

mixin(Duck, Flyable, Swimmable);

// Test mixins
let bird = new Bird("Tweety");
let duck = new Duck("Donald");

console.log("Mixin examples:");
console.log(bird.chirp());
console.log(bird.fly());
console.log(bird.land());

console.log(duck.quack());
console.log(duck.fly());
console.log(duck.swim());
console.log(duck.dive());

// 📚 7. Object Serialization and Cloning
console.log("\n📚 7. Object Serialization and Cloning");
console.log("-----------------------------------");

// Deep cloning function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    if (typeof obj === 'object') {
        let cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

// Test deep cloning
let originalObject = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ["reading", "coding", "gaming"],
    birthDate: new Date("1990-01-01")
};

let clonedObject = deepClone(originalObject);

console.log("Deep cloning:");
console.log("Original:", originalObject);
console.log("Cloned:", clonedObject);
console.log("Same object?", originalObject === clonedObject); // false
console.log("Same address?", originalObject.address === clonedObject.address); // false
console.log("Same coordinates?", originalObject.address.coordinates === clonedObject.address.coordinates); // false

// Modify cloned object
clonedObject.name = "Jane";
clonedObject.address.city = "Los Angeles";
clonedObject.hobbies.push("swimming");

console.log("After modification:");
console.log("Original name:", originalObject.name);
console.log("Cloned name:", clonedObject.name);
console.log("Original city:", originalObject.address.city);
console.log("Cloned city:", clonedObject.address.city);
console.log("Original hobbies:", originalObject.hobbies);
console.log("Cloned hobbies:", clonedObject.hobbies);

// 📚 8. Object Performance and Optimization
console.log("\n📚 8. Object Performance and Optimization");
console.log("---------------------------------------");

// Object property access optimization
class OptimizedObject {
    constructor() {
        this._cache = new Map();
        this._data = {};
    }
    
    // Use Map for frequent lookups
    set(key, value) {
        this._data[key] = value;
        this._cache.set(key, value);
    }
    
    get(key) {
        if (this._cache.has(key)) {
            return this._cache.get(key);
        }
        return this._data[key];
    }
    
    // Use Object.freeze for immutable objects
    freeze() {
        Object.freeze(this._data);
        return this;
    }
    
    // Use Object.seal for controlled modification
    seal() {
        Object.seal(this._data);
        return this;
    }
}

let optimized = new OptimizedObject();
optimized.set("name", "John");
optimized.set("age", 30);

console.log("Optimized object:");
console.log("Get name:", optimized.get("name"));
console.log("Get age:", optimized.get("age"));

// Performance comparison
console.time("Object property access");
for (let i = 0; i < 1000000; i++) {
    let obj = { a: 1, b: 2, c: 3 };
    let value = obj.a;
}
console.timeEnd("Object property access");

console.time("Map access");
for (let i = 0; i < 1000000; i++) {
    let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    let value = map.get('a');
}
console.timeEnd("Map access");

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Encapsulation hides internal implementation details");
console.log("- Inheritance allows code reuse through class hierarchies");
console.log("- Polymorphism enables objects of different types to be treated uniformly");
console.log("- Design patterns provide reusable solutions to common problems");
console.log("- Composition is often preferred over inheritance");
console.log("- Mixins provide a way to share functionality across classes");
console.log("- Deep cloning creates independent copies of objects");
console.log("- Performance optimization is important for large-scale applications");

console.log("\n📝 Practice Exercises:");
console.log("1. Implement encapsulation using closures");
console.log("2. Create inheritance hierarchies with classes");
console.log("3. Practice polymorphism with different object types");
console.log("4. Implement design patterns like Singleton and Factory");
console.log("5. Use composition to build complex objects");
