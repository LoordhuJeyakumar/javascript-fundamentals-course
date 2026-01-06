// Exercise 4: ES6 Classes
// Complete the TODO sections below

console.log("💪 Exercise 4: ES6 Classes");
console.log("========================");

// Exercise 1: Basic Class Syntax
console.log("\n1. Basic Class Syntax:");
// TODO: Create a basic class
class Person {
    constructor(firstName, lastName, age) {
        // Your code here
        // Hint: this.firstName = firstName; this.lastName = lastName; this.age = age;
    }
    
    // TODO: Add instance method
    getFullName() {
        // Your code here
        // Hint: return `${this.firstName} ${this.lastName}`;
    }
    
    // TODO: Add instance method
    introduce() {
        // Your code here
        // Hint: return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
    }
}

// TODO: Create instance
let person1 = null; // Your code here
// Hint: new Person("John", "Doe", 30)

console.log("Person instance:");
console.log("Person1:", person1);
console.log("getFullName:", person1.getFullName());
console.log("introduce:", person1.introduce());

// Exercise 2: Constructor Methods
console.log("\n2. Constructor Methods:");
// TODO: Create class with constructor
class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        // Your code here
        // Hint: this.accountNumber = accountNumber; this.balance = initialBalance; this.transactions = []; this.createdAt = new Date().toISOString();
    }
    
    // TODO: Add deposit method
    deposit(amount) {
        // Your code here
        // Hint: if (typeof amount !== 'number' || amount <= 0) { throw new Error("Amount must be a positive number"); } this.balance += amount; this.transactions.push({ type: 'deposit', amount: amount, timestamp: new Date().toISOString(), balance: this.balance }); return `Deposited $${amount}. New balance: $${this.balance}`;
    }
    
    // TODO: Add withdraw method
    withdraw(amount) {
        // Your code here
        // Hint: if (typeof amount !== 'number' || amount <= 0) { throw new Error("Amount must be a positive number"); } if (amount > this.balance) { throw new Error("Insufficient funds"); } this.balance -= amount; this.transactions.push({ type: 'withdrawal', amount: amount, timestamp: new Date().toISOString(), balance: this.balance }); return `Withdrew $${amount}. New balance: $${this.balance}`;
    }
    
    // TODO: Add getBalance method
    getBalance() {
        // Your code here
        // Hint: return this.balance;
    }
}

// TODO: Create bank account
let account = null; // Your code here
// Hint: new BankAccount("123456789", 1000)

console.log("Bank account operations:");
console.log("Initial balance:", account.getBalance());

try {
    console.log(account.deposit(500));
    console.log(account.withdraw(200));
    console.log("Current balance:", account.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 3: Static Methods
console.log("\n3. Static Methods:");
// TODO: Create class with static methods
class MathUtils {
    // TODO: Add static method
    static add(a, b) {
        // Your code here
        // Hint: return a + b;
    }
    
    // TODO: Add static method
    static multiply(a, b) {
        // Your code here
        // Hint: return a * b;
    }
    
    // TODO: Add static method
    static isEven(number) {
        // Your code here
        // Hint: return number % 2 === 0;
    }
    
    // TODO: Add constructor for instance methods
    constructor(value) {
        // Your code here
        // Hint: this.value = value;
    }
    
    // TODO: Add instance method
    double() {
        // Your code here
        // Hint: return this.value * 2;
    }
}

console.log("Static methods:");
console.log("MathUtils.add(5, 3):", MathUtils.add(5, 3));
console.log("MathUtils.multiply(4, 6):", MathUtils.multiply(4, 6));
console.log("MathUtils.isEven(8):", MathUtils.isEven(8));

console.log("Instance methods:");
let mathInstance = null; // Your code here
// Hint: new MathUtils(7)

console.log("mathInstance.double():", mathInstance.double());

// Exercise 4: Class Inheritance
console.log("\n4. Class Inheritance:");
// TODO: Create parent class
class Vehicle {
    constructor(brand, model, year) {
        // Your code here
        // Hint: this.brand = brand; this.model = model; this.year = year; this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} is starting`;
    }
    
    stop() {
        this.isRunning = false;
        return `${this.brand} ${this.model} is stopping`;
    }
    
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// TODO: Create child class
class Car extends Vehicle {
    constructor(brand, model, year, doors, fuelType) {
        // Your code here
        // Hint: super(brand, model, year); this.doors = doors; this.fuelType = fuelType; this.type = "car";
    }
    
    // TODO: Override parent method
    start() {
        // Your code here
        // Hint: this.isRunning = true; return `${this.brand} ${this.model} car is starting with ${this.fuelType} fuel`;
    }
    
    // TODO: Add new method
    honk() {
        // Your code here
        // Hint: return `${this.brand} ${this.model} goes Beep! Beep!`;
    }
}

// TODO: Create instance
let car = null; // Your code here
// Hint: new Car("Toyota", "Camry", 2023, 4, "gasoline")

console.log("Class inheritance:");
console.log("Car info:", car.getInfo());
console.log("Car start:", car.start());
console.log("Car honk:", car.honk());

// Exercise 5: Getters and Setters in Classes
console.log("\n5. Getters and Setters in Classes:");
// TODO: Create class with getters and setters
class User {
    constructor(firstName, lastName, email) {
        // Your code here
        // Hint: this._firstName = firstName; this._lastName = lastName; this._email = email; this._age = 0; this._isActive = true;
    }
    
    // TODO: Add getter
    get fullName() {
        // Your code here
        // Hint: return `${this._firstName} ${this._lastName}`;
    }
    
    // TODO: Add setter
    set fullName(value) {
        // Your code here
        // Hint: const parts = value.split(' '); this._firstName = parts[0] || ''; this._lastName = parts[1] || '';
    }
    
    // TODO: Add getter
    get age() {
        // Your code here
        // Hint: return this._age;
    }
    
    // TODO: Add setter with validation
    set age(value) {
        // Your code here
        // Hint: if (typeof value === 'number' && value >= 0 && value <= 150) { this._age = value; } else { throw new Error("Age must be a number between 0 and 150"); }
    }
}

// TODO: Create user
let user = null; // Your code here
// Hint: new User("John", "Doe", "john@example.com")

console.log("Getters and setters:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// TODO: Test setters
user.fullName = "Jane Smith";
user.age = 25;

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// Exercise 6: Private Fields and Methods
console.log("\n6. Private Fields and Methods:");
// TODO: Create class with private fields
class BankAccountPrivate {
    // TODO: Add private fields
    // Hint: #accountNumber; #balance; #transactions;
    
    constructor(accountNumber, initialBalance = 0) {
        // Your code here
        // Hint: this.#accountNumber = accountNumber; this.#balance = initialBalance; this.#transactions = [];
    }
    
    // TODO: Add public method
    deposit(amount) {
        // Your code here
        // Hint: if (typeof amount !== 'number' || amount <= 0) { throw new Error("Amount must be a positive number"); } this.#balance += amount; this.#transactions.push({ type: 'deposit', amount: amount, timestamp: new Date().toISOString(), balance: this.#balance }); return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    
    // TODO: Add public method
    getBalance() {
        // Your code here
        // Hint: return this.#balance;
    }
}

// TODO: Create private bank account
let privateAccount = null; // Your code here
// Hint: new BankAccountPrivate("987654321", 2000)

console.log("Private bank account:");
console.log("Initial balance:", privateAccount.getBalance());

try {
    console.log(privateAccount.deposit(500));
    console.log("Current balance:", privateAccount.getBalance());
} catch (error) {
    console.log("Error:", error.message);
}

// Exercise 7: Class Composition and Mixins
console.log("\n7. Class Composition and Mixins:");
// TODO: Create mixins
let LoggingMixin = {
    log(message) {
        console.log(`[${this.constructor.name}] ${message}`);
    }
};

let ValidationMixin = {
    validateEmail(email) {
        return typeof email === 'string' && email.includes('@');
    }
};

// TODO: Create class with mixins
class UserWithMixins {
    constructor(name, email) {
        // Your code here
        // Hint: this.name = name; this.email = email;
    }
    
    // TODO: Mix in logging
    log(message) {
        // Your code here
        // Hint: LoggingMixin.log.call(this, message);
    }
    
    // TODO: Mix in validation
    validateEmail(email) {
        // Your code here
        // Hint: return ValidationMixin.validateEmail.call(this, email);
    }
    
    // TODO: Add method that uses mixins
    updateEmail(newEmail) {
        // Your code here
        // Hint: if (this.validateEmail(newEmail)) { this.email = newEmail; this.log(`Email updated to ${newEmail}`); } else { this.log("Invalid email format"); }
    }
}

// TODO: Create user with mixins
let userWithMixins = null; // Your code here
// Hint: new UserWithMixins("John Doe", "john@example.com")

console.log("User with mixins:");
userWithMixins.updateEmail("john.doe@example.com");
userWithMixins.updateEmail("invalid-email");

// Exercise 8: Class Best Practices
console.log("\n8. Class Best Practices:");
// TODO: Create class with meaningful names and methods
class Product {
    constructor(name, price, category) {
        // Your code here
        // Hint: this.name = name; this.price = price; this.category = category; this.isAvailable = true; this.createdAt = new Date().toISOString();
    }
    
    // TODO: Add method with descriptive name
    updatePrice(newPrice) {
        // Your code here
        // Hint: if (typeof newPrice !== 'number' || newPrice < 0) { throw new Error("Price must be a positive number"); } this.price = newPrice; return `Price updated to $${newPrice}`;
    }
    
    // TODO: Add method with descriptive name
    getProductInfo() {
        // Your code here
        // Hint: return { name: this.name, price: this.price, category: this.category, isAvailable: this.isAvailable, createdAt: this.createdAt };
    }
}

// TODO: Create product
let product = null; // Your code here
// Hint: new Product("Laptop", 999.99, "Electronics")

console.log("Product operations:");
console.log("Initial product:", product.getProductInfo());

try {
    console.log(product.updatePrice(899.99));
    console.log("Updated product:", product.getProductInfo());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced ES6 classes.");
console.log("Key concepts practiced:");
console.log("- Basic class syntax and constructors");
console.log("- Instance methods and static methods");
console.log("- Class inheritance with extends");
console.log("- Getters and setters in classes");
console.log("- Private fields and methods");
console.log("- Class composition and mixins");
console.log("- Class best practices");
console.log("- Method overriding and super calls");
console.log("- Error handling in classes");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Object Destructuring and Spread");
console.log("4. Ask questions if you need help");
