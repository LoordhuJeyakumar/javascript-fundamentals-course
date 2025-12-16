// TEACHING NOTES: Module 7 — Object Basics
// Analogy: "Contact card" — properties are fields (name, phone), methods are actions (message/send).
// Live demo: Build a `person` contact card, show dot vs bracket access, modify fields live.
// Hands-on: Create a `book` object with a `readPage()` method that advances `currentPage`.
// Lesson 1: Object Basics
// Understanding JavaScript objects, properties, and methods

console.log("📚 Lesson 1: Object Basics");
console.log("=========================");

// 📚 1. Object Creation and Initialization
console.log("\n📚 1. Object Creation and Initialization");
console.log("---------------------------------------");

// Object literal syntax
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isActive: true
};

console.log("Object literal:", person);

// Object with different data types
let mixedObject = {
    string: "Hello",
    number: 42,
    boolean: true,
    array: [1, 2, 3],
    nestedObject: {
        key: "value"
    },
    functionName: function() {
        return "I'm a function";
    }
};

console.log("Mixed object:", mixedObject);

// Empty object
let emptyObject = {};
console.log("Empty object:", emptyObject);

// Object with computed property names
let key = "dynamicKey";
let dynamicObject = {
    [key]: "dynamic value",
    [`${key}2`]: "another dynamic value"
};

console.log("Dynamic object:", dynamicObject);

// 📚 2. Object Properties and Methods
console.log("\n📚 2. Object Properties and Methods");
console.log("----------------------------------");

console.log("this keyword:", this);

// Object with methods
let calculator = {
    // Properties
    result: 0,
    history: [],
    
    // Methods
    add: function(a, b) {
        this.result = a + b;
        this.history.push(`${a} + ${b} = ${this.result}`);
        return this.result;
    },
    
    subtract: function(a, b) {
        this.result = a - b;
        this.history.push(`${a} - ${b} = ${this.result}`);
        return this.result;
    },
    
    multiply: function(a, b) {
        this.result = a * b;
        this.history.push(`${a} * ${b} = ${this.result}`);
        return this.result;
    },
    
    divide: function(a, b) {
        if (b === 0) {
            this.history.push(`Error: Division by zero`);
            return "Error: Division by zero";
        }
        this.result = a / b;
        this.history.push(`${a} / ${b} = ${this.result}`);
        return this.result;
    },
    
    clear: function() {
        this.result = 0;
        this.history = [];
        return "Calculator cleared";
    },
    
    getHistory: function() {
        return this.history;
    }
};

console.log("Calculator object:", calculator);

// Test calculator methods
console.log("Calculator operations:");
console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 10 - 4:", calculator.subtract(10, 4));
console.log("Multiply 3 * 4:", calculator.multiply(3, 4));
console.log("Divide 15 / 3:", calculator.divide(15, 3));
console.log("History:", calculator.getHistory());

// 📚 3. Object Access Patterns
console.log("\n📚 3. Object Access Patterns");
console.log("----------------------------");

// Dot notation
console.log("Dot notation access:");
console.log("person.name:", person.name);
console.log("person.age:", person.age);
console.log("person.email:", person.email);

// Bracket notation
console.log("Bracket notation access:");
console.log("person['name']:", person['name']);
console.log("person['age']:", person['age']);
console.log("person['email']:", person['email']);

// Dynamic property access
let propertyName = "age";
console.log("Dynamic access:");
console.log(`person[propertyName]:`, person[propertyName]);

// Property modification
console.log("Property modification:");
person.age = 31;
person['email'] = "john.doe@example.com";
person.isActive = false;

console.log("Modified person:", person);

// Adding new properties
person.phone = "123-456-7890";
person.address = {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
};

console.log("Person with new properties:", person);

// 📚 4. Object Enumeration - List all the properties of an object
console.log("\n📚 4. Object Enumeration");
console.log("----------------------");

// Object.keys() - returns array of property names
let keys = Object.keys(person);
console.log("Object keys:", keys);

// Object.values() - returns array of property values
let values = Object.values(person);
console.log("Object values:", values);

// Object.entries() - returns array of [key, value] pairs
let entries = Object.entries(person);
console.log("Object entries:", entries);

// for...in loop
console.log("for...in loop:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.hasOwnProperty() - check if property exists in the object itself, not in the prototype chain
console.log("Property checks:");
console.log("person.hasOwnProperty('name'):", person.hasOwnProperty('name'));
console.log("person.hasOwnProperty('phone'):", person.hasOwnProperty('phone'));
console.log("person.hasOwnProperty('salary'):", person.hasOwnProperty('salary'));

// 'in' operator
console.log("'in' operator:");
console.log("'name' in person:", 'name' in person);
console.log("'phone' in person:", 'phone' in person);
console.log("'salary' in person:", 'salary' in person);

// 📚 5. Object Property Descriptors - Control the behavior of a property (writable, enumerable, configurable)
console.log("\n📚 5. Object Property Descriptors");
console.log("--------------------------------");

// Get property descriptor
let nameDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log("Name property descriptor:", nameDescriptor);

// Create object with property descriptors
let configurableObject = {};
Object.defineProperty(configurableObject, 'readOnly', {
    value: "This is read-only",
    writable: false,
    enumerable: true,
    configurable: false
});


Object.defineProperty(configurableObject, 'hidden', {
    value: "This is hidden",
    writable: true,
    enumerable: false,
    configurable: true
});

console.log("Configurable object:", configurableObject);
console.log("Object.keys(configurableObject):", Object.keys(configurableObject));

// Try to modify read-only property
configurableObject.readOnly = "Try to change";
console.log("readOnly after modification attempt:", configurableObject.readOnly);

// 📚 6. Object Methods
console.log("\n📚 6. Object Methods");
console.log("------------------");

// Object.assign() - copy properties from one object to another
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
let assigned = Object.assign(target, source);
console.log("Object.assign result:", assigned);
console.log("Target object:", target);

// Object.create() - create object with specified prototype object and properties
let prototypeObject = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

let newPerson = Object.create(prototypeObject);
newPerson.name = "Jane Doe";
newPerson.age = 25;

console.log("Object.create result:", newPerson);
console.log("Greet method:", newPerson.greet());

// Object.freeze() - make object immutable (no properties can be added, modified, or deleted)
let freezeObject = { value: 42 };
Object.freeze(freezeObject);
freezeObject.value = 100; // This won't work
console.log("Frozen object value:", freezeObject.value);

// Object.seal() - prevent adding/removing properties (no properties can be added or deleted, but properties can be modified)
let sealObject = { value: 42 };
Object.seal(sealObject);
sealObject.value = 100; // This will work
sealObject.newProp = "new"; // This won't work
console.log("Sealed object:", sealObject);

// 📚 7. Practical Example: User Profile
console.log("\n📚 7. Practical Example: User Profile");
console.log("-----------------------------------");

let userProfile = {
    // Basic information
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    
    // Profile settings
    settings: {
        theme: "dark",
        language: "en",
        notifications: true,
        privacy: "public"
    },
    
    // Activity tracking
    stats: {
        posts: 0,
        followers: 0,
        following: 0,
        lastLogin: null
    },
    
    // Methods
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    updateSettings: function(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        return this.settings;
    },
    
    updateStats: function(statType, value) {
        if (this.stats.hasOwnProperty(statType)) {
            this.stats[statType] = value;
            return this.stats;
        }
        return "Invalid stat type";
    },
    
    login: function() {
        this.stats.lastLogin = new Date().toISOString();
        return `Welcome back, ${this.getFullName()}!`;
    },
    
    getProfileSummary: function() {
        return {
            name: this.getFullName(),
            username: this.username,
            email: this.email,
            stats: this.stats,
            settings: this.settings
        };
    }
};

console.log("User profile:", userProfile);

// Test user profile methods
console.log("Profile methods:");
console.log("Full name:", userProfile.getFullName());
console.log("Login:", userProfile.login());
console.log("Update settings:", userProfile.updateSettings({ theme: "light" }));
console.log("Update stats:", userProfile.updateStats("posts", 5));
console.log("Profile summary:", userProfile.getProfileSummary());

// 📚 8. Object Best Practices
console.log("\n📚 8. Object Best Practices");
console.log("-------------------------");

// Use const for object references
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

// Use meaningful property names
const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    isActive: true,
    createdAt: new Date()
};

// Use methods for object behavior
const bankAccount = {
    balance: 0,
    accountNumber: "123456789",
    
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid deposit amount";
    },
    
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid withdrawal amount or insufficient funds";
    },
    
    getBalance: function() {
        return `Current balance: $${this.balance}`;
    }
};

console.log("Bank account operations:");
console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.getBalance());

console.log("\n🎉 Lesson 1 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Objects are collections of key-value pairs");
console.log("- Use dot notation or bracket notation to access properties");
console.log("- Objects can contain any data type including functions");
console.log("- Use Object.keys(), Object.values(), Object.entries() for enumeration");
console.log("- Property descriptors control property behavior");
console.log("- Use methods to define object behavior");
console.log("- Follow best practices for object design");

console.log("\n📝 Practice Exercises:");
console.log("1. Create objects with different property types");
console.log("2. Practice accessing and modifying properties");
console.log("3. Use object enumeration methods");
console.log("4. Create objects with methods");
console.log("5. Experiment with property descriptors");
