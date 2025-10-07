// Lesson 4: ES6 Classes
// Understanding ES6 class syntax, constructors, methods, and inheritance

console.log("📚 Lesson 4: ES6 Classes");
console.log("=======================");

// 📚 1. Class Syntax and Structure
console.log("\n📚 1. Class Syntax and Structure");
console.log("-------------------------------");

// Basic class declaration
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    // Instance method
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    // Instance method
    getAge() {
        return this.age;
    }
    
    // Instance method
    introduce() {
        return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old`;
    }
}

// Create instance
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Jane", "Smith", 25);

console.log("Person instances:");
console.log("Person1:", person1);
console.log("Person2:", person2);

console.log("Person1 methods:");
console.log("getFullName:", person1.getFullName());
console.log("getAge:", person1.getAge());
console.log("introduce:", person1.introduce());

// Class expression
let Animal = class {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    makeSound() {
        return `${this.name} makes a sound`;
    }
};

let dog = new Animal("Buddy", "dog");
console.log("Animal instance:", dog);
console.log("Animal sound:", dog.makeSound());

// 📚 2. Constructor Methods
console.log("\n📚 2. Constructor Methods");
console.log("------------------------");

class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactions = [];
        this.createdAt = new Date().toISOString();
    }
    
    // Instance method
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
    
    // Instance method
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
    
    // Instance method
    getBalance() {
        return this.balance;
    }
    
    // Instance method
    getStatement() {
        return {
            accountNumber: this.accountNumber,
            currentBalance: this.balance,
            transactionCount: this.transactions.length,
            transactions: [...this.transactions]
        };
    }
}

// Create bank account
let account = new BankAccount("123456789", 1000);

console.log("Bank account operations:");
console.log("Initial balance:", account.getBalance());

try {
    console.log(account.deposit(500));
    console.log(account.withdraw(200));
    console.log("Current balance:", account.getBalance());
    console.log("Statement:", account.getStatement());
} catch (error) {
    console.log("Error:", error.message);
}

// 📚 3. Instance and Static Methods
console.log("\n📚 3. Instance and Static Methods");
console.log("--------------------------------");

class MathUtils {
    // Static method
    static add(a, b) {
        return a + b;
    }
    
    // Static method
    static multiply(a, b) {
        return a * b;
    }
    
    // Static method
    static isEven(number) {
        return number % 2 === 0;
    }
    
    // Static method
    static factorial(n) {
        if (n < 0) return -1;
        if (n === 0 || n === 1) return 1;
        return n * MathUtils.factorial(n - 1);
    }
    
    // Instance method
    constructor(value) {
        this.value = value;
    }
    
    // Instance method
    double() {
        return this.value * 2;
    }
    
    // Instance method
    square() {
        return this.value * this.value;
    }
    
    // Instance method
    isPrime() {
        if (this.value < 2) return false;
        for (let i = 2; i <= Math.sqrt(this.value); i++) {
            if (this.value % i === 0) return false;
        }
        return true;
    }
}

console.log("Static methods:");
console.log("MathUtils.add(5, 3):", MathUtils.add(5, 3));
console.log("MathUtils.multiply(4, 6):", MathUtils.multiply(4, 6));
console.log("MathUtils.isEven(8):", MathUtils.isEven(8));
console.log("MathUtils.factorial(5):", MathUtils.factorial(5));

console.log("Instance methods:");
let mathInstance = new MathUtils(7);
console.log("mathInstance.double():", mathInstance.double());
console.log("mathInstance.square():", mathInstance.square());
console.log("mathInstance.isPrime():", mathInstance.isPrime());

// 📚 4. Class Inheritance
console.log("\n📚 4. Class Inheritance");
console.log("----------------------");

// Parent class
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
    
    getStatus() {
        return this.isRunning ? "Running" : "Stopped";
    }
}

// Child class
class Car extends Vehicle {
    constructor(brand, model, year, doors, fuelType) {
        super(brand, model, year); // Call parent constructor
        this.doors = doors;
        this.fuelType = fuelType;
        this.type = "car";
    }
    
    // Override parent method
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} car is starting with ${this.fuelType} fuel`;
    }
    
    // New method specific to Car
    honk() {
        return `${this.brand} ${this.model} goes Beep! Beep!`;
    }
    
    // New method specific to Car
    getCarInfo() {
        return `${this.getInfo()} - ${this.doors} doors, ${this.fuelType} fuel`;
    }
}

// Another child class
class Motorcycle extends Vehicle {
    constructor(brand, model, year, engineSize) {
        super(brand, model, year);
        this.engineSize = engineSize;
        this.type = "motorcycle";
    }
    
    // Override parent method
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} motorcycle is starting with ${this.engineSize}cc engine`;
    }
    
    // New method specific to Motorcycle
    rev() {
        return `${this.brand} ${this.model} goes Vroom! Vroom!`;
    }
    
    // New method specific to Motorcycle
    getMotorcycleInfo() {
        return `${this.getInfo()} - ${this.engineSize}cc engine`;
    }
}

// Create instances
let car = new Car("Toyota", "Camry", 2023, 4, "gasoline");
let motorcycle = new Motorcycle("Honda", "CBR", 2023, 600);

console.log("Vehicle inheritance:");
console.log("Car:", car.getCarInfo());
console.log("Car start:", car.start());
console.log("Car honk:", car.honk());
console.log("Car status:", car.getStatus());

console.log("Motorcycle:", motorcycle.getMotorcycleInfo());
console.log("Motorcycle start:", motorcycle.start());
console.log("Motorcycle rev:", motorcycle.rev());
console.log("Motorcycle status:", motorcycle.getStatus());

// Check inheritance
console.log("Inheritance checks:");
console.log("car instanceof Car:", car instanceof Car);
console.log("car instanceof Vehicle:", car instanceof Vehicle);
console.log("car instanceof Object:", car instanceof Object);

// 📚 5. Getters and Setters in Classes
console.log("\n📚 5. Getters and Setters in Classes");
console.log("----------------------------------");

class User {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._age = 0;
        this._isActive = true;
    }
    
    // Getter
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    
    // Setter
    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0] || '';
        this._lastName = parts[1] || '';
    }
    
    // Getter
    get email() {
        return this._email;
    }
    
    // Setter with validation
    set email(value) {
        if (typeof value === 'string' && value.includes('@')) {
            this._email = value;
        } else {
            throw new Error("Invalid email format");
        }
    }
    
    // Getter
    get age() {
        return this._age;
    }
    
    // Setter with validation
    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 150) {
            this._age = value;
        } else {
            throw new Error("Age must be a number between 0 and 150");
        }
    }
    
    // Getter
    get isActive() {
        return this._isActive;
    }
    
    // Setter
    set isActive(value) {
        this._isActive = Boolean(value);
    }
    
    // Getter
    get userInfo() {
        return {
            name: this.fullName,
            email: this.email,
            age: this.age,
            isActive: this.isActive
        };
    }
    
    // Instance method
    activate() {
        this.isActive = true;
        return "User activated";
    }
    
    // Instance method
    deactivate() {
        this.isActive = false;
        return "User deactivated";
    }
}

// Create user
let user = new User("John", "Doe", "john@example.com");

console.log("User with getters and setters:");
console.log("Full name:", user.fullName);
console.log("Email:", user.email);
console.log("Age:", user.age);
console.log("Is active:", user.isActive);

// Test setters
user.fullName = "Jane Smith";
user.age = 25;
user.email = "jane@example.com";

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Email:", user.email);
console.log("Age:", user.age);
console.log("User info:", user.userInfo);

// Test validation
try {
    user.age = -5;
} catch (error) {
    console.log("Age validation error:", error.message);
}

try {
    user.email = "invalid-email";
} catch (error) {
    console.log("Email validation error:", error.message);
}

// 📚 6. Private Fields and Methods (ES2022)
console.log("\n📚 6. Private Fields and Methods (ES2022)");
console.log("---------------------------------------");

class BankAccountPrivate {
    // Private fields
    #accountNumber;
    #balance;
    #transactions;
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#transactions = [];
    }
    
    // Public method
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        
        this.#balance += amount;
        this.#transactions.push({
            type: 'deposit',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this.#balance
        });
        
        return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    
    // Public method
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        
        this.#balance -= amount;
        this.#transactions.push({
            type: 'withdrawal',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this.#balance
        });
        
        return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    
    // Public method
    getBalance() {
        return this.#balance;
    }
    
    // Public method
    getAccountNumber() {
        return this.#accountNumber;
    }
    
    // Public method
    getStatement() {
        return {
            accountNumber: this.#accountNumber,
            currentBalance: this.#balance,
            transactionCount: this.#transactions.length,
            transactions: [...this.#transactions]
        };
    }
    
    // Private method
    #validateAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }
}

// Create private bank account
let privateAccount = new BankAccountPrivate("987654321", 2000);

console.log("Private bank account:");
console.log("Account number:", privateAccount.getAccountNumber());
console.log("Initial balance:", privateAccount.getBalance());

try {
    console.log(privateAccount.deposit(500));
    console.log(privateAccount.withdraw(200));
    console.log("Current balance:", privateAccount.getBalance());
    console.log("Statement:", privateAccount.getStatement());
} catch (error) {
    console.log("Error:", error.message);
}

// 📚 7. Class Composition and Mixins
console.log("\n📚 7. Class Composition and Mixins");
console.log("--------------------------------");

// Mixin for logging
let LoggingMixin = {
    log(message) {
        console.log(`[${this.constructor.name}] ${message}`);
    },
    
    logError(error) {
        console.error(`[${this.constructor.name}] Error: ${error.message}`);
    }
};

// Mixin for validation
let ValidationMixin = {
    validateEmail(email) {
        return typeof email === 'string' && email.includes('@');
    },
    
    validateAge(age) {
        return typeof age === 'number' && age >= 0 && age <= 150;
    }
};

// Class with mixins
class UserWithMixins {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    
    // Mix in logging
    log(message) {
        LoggingMixin.log.call(this, message);
    }
    
    logError(error) {
        LoggingMixin.logError.call(this, error);
    }
    
    // Mix in validation
    validateEmail(email) {
        return ValidationMixin.validateEmail.call(this, email);
    }
    
    validateAge(age) {
        return ValidationMixin.validateAge.call(this, age);
    }
    
    // Instance method
    updateEmail(newEmail) {
        if (this.validateEmail(newEmail)) {
            this.email = newEmail;
            this.log(`Email updated to ${newEmail}`);
        } else {
            this.logError(new Error("Invalid email format"));
        }
    }
    
    // Instance method
    updateAge(newAge) {
        if (this.validateAge(newAge)) {
            this.age = newAge;
            this.log(`Age updated to ${newAge}`);
        } else {
            this.logError(new Error("Invalid age"));
        }
    }
}

// Create user with mixins
let userWithMixins = new UserWithMixins("John Doe", "john@example.com", 30);

console.log("User with mixins:");
console.log("Initial user:", userWithMixins);

userWithMixins.updateEmail("john.doe@example.com");
userWithMixins.updateAge(31);
userWithMixins.updateEmail("invalid-email");
userWithMixins.updateAge(-5);

// 📚 8. Class Best Practices
console.log("\n📚 8. Class Best Practices");
console.log("-------------------------");

// Use meaningful class names
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.isAvailable = true;
        this.createdAt = new Date().toISOString();
    }
    
    // Use descriptive method names
    updatePrice(newPrice) {
        if (typeof newPrice !== 'number' || newPrice < 0) {
            throw new Error("Price must be a positive number");
        }
        this.price = newPrice;
        return `Price updated to $${newPrice}`;
    }
    
    // Use descriptive method names
    markAsUnavailable() {
        this.isAvailable = false;
        return `${this.name} is now unavailable`;
    }
    
    // Use descriptive method names
    getProductInfo() {
        return {
            name: this.name,
            price: this.price,
            category: this.category,
            isAvailable: this.isAvailable,
            createdAt: this.createdAt
        };
    }
    
    // Use descriptive method names
    calculateDiscount(percentage) {
        if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
            throw new Error("Discount percentage must be between 0 and 100");
        }
        return this.price * (1 - percentage / 100);
    }
}

// Create product
let product = new Product("Laptop", 999.99, "Electronics");

console.log("Product operations:");
console.log("Initial product:", product.getProductInfo());

try {
    console.log(product.updatePrice(899.99));
    console.log("Discounted price (10%):", product.calculateDiscount(10));
    console.log("Discounted price (20%):", product.calculateDiscount(20));
    console.log(product.markAsUnavailable());
    console.log("Updated product:", product.getProductInfo());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Classes provide a clean syntax for object-oriented programming");
console.log("- Use constructors to initialize object properties");
console.log("- Static methods belong to the class, not instances");
console.log("- Use inheritance with 'extends' for code reusability");
console.log("- Getters and setters provide controlled access to properties");
console.log("- Private fields and methods provide encapsulation");
console.log("- Use mixins for code composition");
console.log("- Follow naming conventions and best practices");

console.log("\n📝 Practice Exercises:");
console.log("1. Create classes with constructors and methods");
console.log("2. Practice inheritance with extends");
console.log("3. Use static methods and instance methods");
console.log("4. Implement getters and setters");
console.log("5. Practice class composition and mixins");
