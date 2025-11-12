// Exercise 1: Encapsulation Principles
console.log("\n1. Encapsulation Principles:");

function createBankAccount(accountNumber, initialBalance = 0) {
    let balance = initialBalance;
    let transactions = [];
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
            return [...transactions];
        }
    };
}
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

// Exercise 2: Inheritance Patterns
console.log("\n2. Inheritance Patterns:");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.isAlive = true;
    }
    eat(food) {
        return `${this.name} is eating ${food}`;
    }
    makeSound() {
        return `${this.name} makes a sound`;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog");
        this.breed = breed;
        this.tricks = [];
    }
    makeSound() {
        return `${this.name} barks: Woof! Woof!`;
    }
    learnTrick(trick) {
        this.tricks.push(trick);
        return `${this.name} learned to ${trick}`;
    }
}
let dog = new Dog("Buddy", "Golden Retriever");

console.log("Inheritance example:");
console.log("Dog info:", dog);
console.log("Dog sound:", dog.makeSound());
console.log("Dog eat:", dog.eat("kibble"));
console.log("Dog learn trick:", dog.learnTrick("sit"));

// Exercise 3: Polymorphism Concepts
console.log("\n3. Polymorphism Concepts:");

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
    query(sql) {
        if (!this.isConnected) {
            throw new Error("Not connected to database");
        }
        console.log(`Executing query: ${sql}`);
        return { rows: [], affected: 0 };
    }
}
let db1 = new DatabaseConnection();
let db2 = new DatabaseConnection();

console.log("Singleton pattern:");
console.log("Same instance?", db1 === db2);

db1.connect();
db1.query("SELECT * FROM users");
class VehicleFactory {
    static createVehicle(type, ...args) {
        switch (type) {
            case 'car':
                return new Car(...args);
            case 'motorcycle':
                return new Motorcycle(...args);
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
let vehicle1 = VehicleFactory.createVehicle('car', 'Toyota', 'Camry', 2023);
let vehicle2 = VehicleFactory.createVehicle('motorcycle', 'Honda', 'CBR', 2023);

console.log("Factory pattern:");
console.log(vehicle1.start());
console.log(vehicle2.start());

// Exercise 5: Composition over Inheritance
console.log("\n5. Composition over Inheritance:");

class Engine {
    constructor(type) {
        this.type = type;
        this.isRunning = false;
    }
    start() {
        this.isRunning = true;
        return `${this.type} engine started`;
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
}
let carEngine = new Engine("V6");
let carWheels = new Wheels(4);
let composedCar = new VehicleComposed("Toyota", "Camry", carEngine, carWheels);

console.log("Composition example:");
console.log(composedCar.start());

// Exercise 6: Mixins
console.log("\n6. Mixins:");

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
console.log(bird.chirp());
console.log(bird.fly());

// Exercise 7: Object Serialization and Cloning
console.log("\n7. Object Serialization and Cloning:");

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
let clonedObject = deepClone(originalObject);

console.log("Deep cloning:");
console.log("Original:", originalObject);
console.log("Cloned:", clonedObject);
console.log("Same date?", originalObject.date === clonedObject.date);
console.log("Same nested?", originalObject.nested === clonedObject.nested);

// Exercise 8: Object Performance and Optimization
console.log("\n8. Object Performance and Optimization:");

class OptimizedObject {
    constructor() {
        this._cache = new Map();
        this._data = {};
    }
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
}
let optimized = new OptimizedObject();

optimized.set("name", "John");
optimized.set("age", 30);

console.log("Optimized object:");
console.log("Get name:", optimized.get("name"));
console.log("Get age:", optimized.get("age"));