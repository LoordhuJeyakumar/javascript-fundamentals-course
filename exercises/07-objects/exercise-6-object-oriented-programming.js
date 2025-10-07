// Exercise 6: Object-Oriented Programming
// Complete the TODO sections below

console.log("💪 Exercise 6: Object-Oriented Programming");
console.log("=======================================");

// Exercise 1: Encapsulation Principles
console.log("\n1. Encapsulation Principles:");
// TODO: Create encapsulated object using closures
function createBankAccount(accountNumber, initialBalance = 0) {
    // Private variables
    let balance = initialBalance;
    let transactions = [];
    
    // TODO: Return public methods
    return {
        getAccountNumber() {
            // Your code here
            // Hint: return accountNumber;
        },
        
        getBalance() {
            // Your code here
            // Hint: return balance;
        },
        
        deposit(amount) {
            // Your code here
            // Hint: if (typeof amount !== 'number' || amount <= 0) { throw new Error("Amount must be a positive number"); } balance += amount; transactions.push({ type: 'deposit', amount: amount, timestamp: new Date().toISOString(), balance: balance }); return `Deposited $${amount}. New balance: $${balance}`;
        },
        
        withdraw(amount) {
            // Your code here
            // Hint: if (typeof amount !== 'number' || amount <= 0) { throw new Error("Amount must be a positive number"); } if (amount > balance) { throw new Error("Insufficient funds"); } balance -= amount; transactions.push({ type: 'withdrawal', amount: amount, timestamp: new Date().toISOString(), balance: balance }); return `Withdrew $${amount}. New balance: $${balance}`;
        },
        
        getTransactions() {
            // Your code here
            // Hint: return [...transactions];
        }
    };
}

// TODO: Create bank account
let account = null; // Your code here
// Hint: createBankAccount("123456789", 1000)

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

// Exercise 2: Inheritance Patterns
console.log("\n2. Inheritance Patterns:");
// TODO: Create parent class
class Animal {
    constructor(name, species) {
        // Your code here
        // Hint: this.name = name; this.species = species; this.isAlive = true;
    }
    
    eat(food) {
        return `${this.name} is eating ${food}`;
    }
    
    makeSound() {
        return `${this.name} makes a sound`;
    }
}

// TODO: Create child class
class Dog extends Animal {
    constructor(name, breed) {
        // Your code here
        // Hint: super(name, "dog"); this.breed = breed; this.tricks = [];
    }
    
    // TODO: Override parent method
    makeSound() {
        // Your code here
        // Hint: return `${this.name} barks: Woof! Woof!`;
    }
    
    // TODO: Add new method
    learnTrick(trick) {
        // Your code here
        // Hint: this.tricks.push(trick); return `${this.name} learned to ${trick}`;
    }
}

// TODO: Create instance
let dog = null; // Your code here
// Hint: new Dog("Buddy", "Golden Retriever")

console.log("Inheritance example:");
console.log("Dog info:", dog);
console.log("Dog sound:", dog.makeSound());
console.log("Dog eat:", dog.eat("kibble"));
console.log("Dog learn trick:", dog.learnTrick("sit"));

// Exercise 3: Polymorphism Concepts
console.log("\n3. Polymorphism Concepts:");
// TODO: Create different animal types
let animals = [
    new Dog("Rex", "German Shepherd"),
    new Animal("Generic", "unknown")
];

console.log("Polymorphism example:");
animals.forEach(animal => {
    console.log(`Animal: ${animal.name}`);
    console.log(`Sound: ${animal.makeSound()}`);
    console.log(`Eating: ${animal.eat("food")}`);
    console.log("---");
});

// Exercise 4: Design Patterns
console.log("\n4. Design Patterns:");
// TODO: Create Singleton pattern
class DatabaseConnection {
    constructor() {
        // Your code here
        // Hint: if (DatabaseConnection.instance) { return DatabaseConnection.instance; } this.connectionString = "localhost:5432/mydb"; this.isConnected = false; DatabaseConnection.instance = this;
    }
    
    connect() {
        // Your code here
        // Hint: if (!this.isConnected) { this.isConnected = true; console.log("Connected to database"); } return this;
    }
    
    query(sql) {
        // Your code here
        // Hint: if (!this.isConnected) { throw new Error("Not connected to database"); } console.log(`Executing query: ${sql}`); return { rows: [], affected: 0 };
    }
}

// TODO: Test singleton
let db1 = null; // Your code here
// Hint: new DatabaseConnection()

let db2 = null; // Your code here
// Hint: new DatabaseConnection()

console.log("Singleton pattern:");
console.log("Same instance?", db1 === db2);

db1.connect();
db1.query("SELECT * FROM users");

// TODO: Create Factory pattern
class VehicleFactory {
    static createVehicle(type, ...args) {
        // Your code here
        // Hint: switch (type) { case 'car': return new Car(...args); case 'motorcycle': return new Motorcycle(...args); default: throw new Error(`Unknown vehicle type: ${type}`); }
    }
}

class Car {
    constructor(brand, model, year) {
        // Your code here
        // Hint: this.brand = brand; this.model = model; this.year = year; this.type = 'car';
    }
    
    start() {
        return `${this.brand} ${this.model} car is starting`;
    }
}

class Motorcycle {
    constructor(brand, model, year) {
        // Your code here
        // Hint: this.brand = brand; this.model = model; this.year = year; this.type = 'motorcycle';
    }
    
    start() {
        return `${this.brand} ${this.model} motorcycle is starting`;
    }
}

// TODO: Test factory
let vehicle1 = null; // Your code here
// Hint: VehicleFactory.createVehicle('car', 'Toyota', 'Camry', 2023)

let vehicle2 = null; // Your code here
// Hint: VehicleFactory.createVehicle('motorcycle', 'Honda', 'CBR', 2023)

console.log("Factory pattern:");
console.log(vehicle1.start());
console.log(vehicle2.start());

// Exercise 5: Composition over Inheritance
console.log("\n5. Composition over Inheritance:");
// TODO: Create component classes
class Engine {
    constructor(type) {
        // Your code here
        // Hint: this.type = type; this.isRunning = false;
    }
    
    start() {
        // Your code here
        // Hint: this.isRunning = true; return `${this.type} engine started`;
    }
}

class Wheels {
    constructor(count) {
        // Your code here
        // Hint: this.count = count; this.isSpinning = false;
    }
    
    spin() {
        // Your code here
        // Hint: this.isSpinning = true; return `${this.count} wheels are spinning`;
    }
}

// TODO: Create composed vehicle
class VehicleComposed {
    constructor(brand, model, engine, wheels) {
        // Your code here
        // Hint: this.brand = brand; this.model = model; this.engine = engine; this.wheels = wheels;
    }
    
    start() {
        // Your code here
        // Hint: return `${this.brand} ${this.model}: ${this.engine.start()}, ${this.wheels.spin()}`;
    }
}

// TODO: Create composed vehicle
let carEngine = null; // Your code here
// Hint: new Engine("V6")

let carWheels = null; // Your code here
// Hint: new Wheels(4)

let composedCar = null; // Your code here
// Hint: new VehicleComposed("Toyota", "Camry", carEngine, carWheels)

console.log("Composition example:");
console.log(composedCar.start());

// Exercise 6: Mixins
console.log("\n6. Mixins:");
// TODO: Create mixins
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
console.log(bird.chirp());
console.log(bird.fly());

// Exercise 7: Object Serialization and Cloning
console.log("\n7. Object Serialization and Cloning:");
// TODO: Create deep cloning function
function deepClone(obj) {
    // Your code here
    // Hint: if (obj === null || typeof obj !== 'object') { return obj; } if (obj instanceof Date) { return new Date(obj.getTime()); } if (obj instanceof Array) { return obj.map(item => deepClone(item)); } if (typeof obj === 'object') { let cloned = {}; for (let key in obj) { if (obj.hasOwnProperty(key)) { cloned[key] = deepClone(obj[key]); } } return cloned; }
}

// TODO: Test deep cloning
let originalObject = {
    name: "Test",
    date: new Date(),
    array: [1, 2, { nested: true }],
    nested: {
        deep: {
            value: 42
        }
    }
};

let clonedObject = null; // Your code here
// Hint: deepClone(originalObject)

console.log("Deep cloning:");
console.log("Original:", originalObject);
console.log("Cloned:", clonedObject);
console.log("Same date?", originalObject.date === clonedObject.date);
console.log("Same nested?", originalObject.nested === clonedObject.nested);

// Exercise 8: Object Performance and Optimization
console.log("\n8. Object Performance and Optimization:");
// TODO: Create optimized object
class OptimizedObject {
    constructor() {
        // Your code here
        // Hint: this._cache = new Map(); this._data = {};
    }
    
    set(key, value) {
        // Your code here
        // Hint: this._data[key] = value; this._cache.set(key, value);
    }
    
    get(key) {
        // Your code here
        // Hint: if (this._cache.has(key)) { return this._cache.get(key); } return this._data[key];
    }
}

let optimized = null; // Your code here
// Hint: new OptimizedObject()

optimized.set("name", "John");
optimized.set("age", 30);

console.log("Optimized object:");
console.log("Get name:", optimized.get("name"));
console.log("Get age:", optimized.get("age"));

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced object-oriented programming.");
console.log("Key concepts practiced:");
console.log("- Encapsulation using closures");
console.log("- Inheritance with classes");
console.log("- Polymorphism with different object types");
console.log("- Design patterns (Singleton, Factory)");
console.log("- Composition over inheritance");
console.log("- Mixins for code reuse");
console.log("- Object serialization and cloning");
console.log("- Performance optimization");
console.log("- Object-oriented principles");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Practice building real-world applications");
console.log("4. Ask questions if you need help");
