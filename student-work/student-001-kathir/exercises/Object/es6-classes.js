// Exercise 1: Basic Class Syntax
console.log("\n1. Basic Class Syntax:");

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    introduce() {
        return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
    }
}
let person1 = new Person("John", "Doe", 30);
console.log("Person instance:");
console.log("Person1:", person1);
console.log("getFullName:", person1.getFullName());
console.log("introduce:", person1.introduce());

// Exercise 2: Constructor Methods
console.log("\n2. Constructor Methods:");

class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
        this.createdAt = new Date().toISOString();
    }
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        this.balance += amount;
        this.transactions.push({
            type: 'deposit',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this.balance
        });
        return `Deposited $${amount}. New balance: $${this.balance}`;
    }
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        this.transactions.push({
            type: 'withdrawal',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this.balance
        });
        return `Withdrew $${amount}. New balance: $${this.balance}`;
    }
    getBalance() {
        return this.balance;
    }
}
let account = new BankAccount("123456789", 1000);
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

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static isEven(number) {
        return number % 2 === 0;
    }
    constructor(value) {
        this.value = value;
    }
    double() {
        return this.value * 2;
    }
}
console.log("Static methods:");
console.log("MathUtils.add(5, 3):", MathUtils.add(5, 3));
console.log("MathUtils.multiply(4, 6):", MathUtils.multiply(4, 6));
console.log("MathUtils.isEven(8):", MathUtils.isEven(8));
console.log("Instance methods:");
let mathInstance = new MathUtils(7);
console.log("mathInstance.double():", mathInstance.double());

// Exercise 4: Class Inheritance
console.log("\n4. Class Inheritance:");

class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
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
class Car extends Vehicle {
    constructor(brand, model, year, doors, fuelType) {
        super(brand, model, year);
        this.doors = doors;
        this.fuelType = fuelType;
        this.type = "car";
    }
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} car is starting with ${this.fuelType} fuel`;
    }
    honk() {
        return `${this.brand} ${this.model} goes Beep! Beep!`;
    }
}
let car = new Car("Toyota", "Camry", 2023, 4, "gasoline");
console.log("Class inheritance:");
console.log("Car info:", car.getInfo());
console.log("Car start:", car.start());
console.log("Car honk:", car.honk());

// Exercise 5: Getters and Setters in Classes
console.log("\n5. Getters and Setters in Classes:");

class User {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._age = 0;
        this._isActive = true;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0] || '';
        this._lastName = parts[1] || '';
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 150) {
            this._age = value;
        } else {
            throw new Error("Age must be a number between 0 and 150");
        }
    }
}
let user = new User("John", "Doe", "john@example.com");
console.log("Getters and setters:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

user.fullName = "Jane Smith";
user.age = 25;

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// Exercise 6: Private Fields and Methods
console.log("\n6. Private Fields and Methods:");
class BankAccountPrivate {
    accountNumber;
    balance;
    transactions;
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
    }
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        this.balance += amount;
        this.transactions.push({
            type: 'deposit',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this.balance
        });
        return `Deposited $${amount}. New balance: $${this.balance}`;
    }
    getBalance() {
        return this.balance;
    }
}
let privateAccount = new BankAccountPrivate("987654321", 2000);
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
class UserWithMixins {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    log(message) {
        LoggingMixin.log.call(this, message);
    }
    validateEmail(email) {
        return ValidationMixin.validateEmail.call(this, email);
    }
    updateEmail(newEmail) {
        if (this.validateEmail(newEmail)) {
            this.email = newEmail;
            this.log(`Email updated to ${newEmail}`);
        } else {
            this.log("Invalid email format");
        }
    }
}
let userWithMixins = new UserWithMixins("John Doe", "john@example.com");
console.log("User with mixins:");
userWithMixins.updateEmail("john.doe@example.com");
userWithMixins.updateEmail("invalid-email");

// Exercise 8: Class Best Practices
console.log("\n8. Class Best Practices:");

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.isAvailable = true;
        this.createdAt = new Date().toISOString();
    }
    updatePrice(newPrice) {
        if (typeof newPrice !== 'number' || newPrice < 0) {
            throw new Error("Price must be a positive number");
        }
        this.price = newPrice;
        return `Price updated to $${newPrice}`;
    }
    getProductInfo() {
        return {
            name: this.name,
            price: this.price,
            category: this.category,
            isAvailable: this.isAvailable,
            createdAt: this.createdAt
        };
    }
}
let product = new Product("Laptop", 999.99, "Electronics");
console.log("Product operations:");
console.log("Initial product:", product.getProductInfo());
try {
    console.log(product.updatePrice(899.99));
    console.log("Updated product:", product.getProductInfo());
} catch (error) {
    console.log("Error:", error.message);
}