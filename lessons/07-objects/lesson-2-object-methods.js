// TEACHING NOTES: Module 7 — Object Methods
// Analogy: "Toolbox" — methods are tools that operate on the stored data (tools in the box).
// Demo: Calculator object; show `this` in regular vs arrow functions and why arrow functions differ.
// Hands-on: Add a `reset()` method to the calculator object to reset `result` and `history`.
// Lesson 2: Object Methods and Properties
// Understanding object methods, property descriptors, and advanced object features

console.log("📚 Lesson 2: Object Methods and Properties");
console.log("=========================================");

// 📚 1. Method Definition and Invocation
console.log("\n📚 1. Method Definition and Invocation");
console.log("-------------------------------------");

// Method definition patterns
let calculator = {
    result: 0,
    
    // Method 1: Function expression
    add: function(a, b) {
        this.result = a + b;
        return this.result;
    },
    
    // Method 2: Arrow function (be careful with 'this')
    subtract: (a, b) => {
        // 'this' doesn't work as expected in arrow functions
        return a - b;
    },
    
    // Method 3: Shorthand method syntax (ES6)
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    },
    
    // Method 4: Computed method names => use of square brackets
    // This is useful for dynamic method names
    // Example: calculator['divide'](a, b)
    ['divide'](a, b) {
        if (b === 0) return "Cannot divide by zero";
        this.result = a / b;
        return this.result;
    }
};

console.log("Calculator methods:");
console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 10 - 4:", calculator.subtract(10, 4));
console.log("Multiply 3 * 4:", calculator.multiply(3, 4));
console.log("Divide 15 / 3:", calculator.divide(15, 3));

// Method invocation patterns
let person = {
    name: "John Doe",
    age: 30,
    
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    
    greetWith: function(greeting) {
        return `${greeting}, I'm ${this.name}`;
    },
    
    introduce: function() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
};

console.log("Person methods:");
console.log("Greet:", person.greet());
console.log("Greet with:", person.greetWith("Hi"));
console.log("Introduce:", person.introduce());

// Method binding and 'this' context
let anotherPerson = {
    name: "Jane Doe",
    age: 25
};

// Borrowing methods
console.log("Method borrowing:");
console.log("Another person greet:", person.greet.call(anotherPerson)); // call the greet method on the person object and pass the anotherPerson object as the this context
console.log("Another person introduce:", person.introduce.apply(anotherPerson)); // apply the introduce method on the person object and pass the anotherPerson object as the this context

// 📚 2. Property Descriptors
console.log("\n📚 2. Property Descriptors");
console.log("-------------------------");

// Creating object with property descriptors
let configurableObject = {};

// Writable property
Object.defineProperty(configurableObject, 'readOnly', {
    value: "This is read-only",
    writable: false,
    enumerable: true,
    configurable: true
});

// Enumerable property
Object.defineProperty(configurableObject, 'hidden', {
    value: "This is hidden",
    writable: true,
    enumerable: false,
    configurable: true
});

// Configurable property
Object.defineProperty(configurableObject, 'permanent', {
    value: "This is permanent",
    writable: true,
    enumerable: true,
    configurable: false
});

console.log("Configurable object:", configurableObject);
console.log("Object.keys():", Object.keys(configurableObject));

// Get property descriptor
let readOnlyDescriptor = Object.getOwnPropertyDescriptor(configurableObject, 'readOnly');
console.log("Read-only property descriptor:", readOnlyDescriptor);

// Try to modify read-only property
configurableObject.readOnly = "Try to change";
console.log("Read-only after modification:", configurableObject.readOnly);

// Try to delete permanent property
delete configurableObject.permanent;
console.log("Permanent property after deletion:", configurableObject.permanent);

// 📚 3. Getters and Setters
console.log("\n📚 3. Getters and Setters");
console.log("------------------------");

// Object with getters and setters
let user = {
    /* The above code appears to be defining private properties in JavaScript. The properties
    `_firstName`, `_lastName`, and `_age` are prefixed with an underscore to indicate that they are
    intended to be private within the scope of the object or class they belong to. This is a common
    convention in JavaScript to denote that these properties should not be accessed or modified
    directly from outside the object or class. */
    /* Private properties = prefix with _ */
    _firstName: "John",
    _lastName: "Doe",
    _age: 30,
    
    // Getter for full name
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    
    // Setter for full name
    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0] || '';
        this._lastName = parts[1] || '';
    },
    
    // Getter for age
    get age() {
        return this._age;
    },
    
    // Setter for age with validation
    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 150) {
            this._age = value;
        } else {
            throw new Error("Age must be a number between 0 and 150");
        }
    },
    
    // Getter for user info
    get info() {
        return {
            name: this.fullName,
            age: this.age,
            isAdult: this.age >= 18
        };
    }
};



console.log("User with getters and setters:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);
console.log("Info:", user.info);

// Test setters
user.fullName = "Jane Smith";
user._firstName = "Test"; // Direct access to private property (not recommended)
user._lastName = "Test";
user.age = 25;

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);
console.log("Info:", user.info);

// Try invalid age
try {
    user.age = -5;
} catch (error) {
    console.log("Error setting age:", error.message);
}

// 📚 4. Object Property Configuration
console.log("\n📚 4. Object Property Configuration");
console.log("----------------------------------");

// Define multiple properties at once
let advancedObject = {};

Object.defineProperties(advancedObject, {
    // Read-only property
    id: {
        value: 1,
        writable: false,
        enumerable: true,
        configurable: false
    },
    
    // Hidden property
    internalState: {
        value: "private",
        writable: true,
        enumerable: false,
        configurable: true
    },
    
    // Computed property
    timestamp: {
        get: function() {
            return new Date().toISOString();
        },
        enumerable: true,
        configurable: true
    },
    
    // Validated property
    _score: {
        value: 0,
        writable: true,
        enumerable: false,
        configurable: true
    },
    
    score: {
        get: function() {
            return this._score;
        },
        set: function(value) {
            if (typeof value === 'number' && value >= 0 && value <= 100) {
                this._score = value;
            } else {
                throw new Error("Score must be a number between 0 and 100");
            }
        },
        enumerable: true,
        configurable: true
    }
});

console.log("Advanced object:", advancedObject);
console.log("Object.keys():", Object.keys(advancedObject));
console.log("Score:", advancedObject.score);

// Test score setter
advancedObject.score = 85;
console.log("Score after setting:", advancedObject.score);

// 📚 5. Object Methods and Utilities
console.log("\n📚 5. Object Methods and Utilities");
console.log("--------------------------------");

// Object.assign() - copy properties
let target = { a: 1, b: 2 };
let source1 = { b: 3, c: 4 };
let source2 = { d: 5, e: 6 };

let assigned = Object.assign(target, source1, source2);
console.log("Object.assign result:", assigned);
console.log("Target object:", target);

// Object.create() - create with prototype
let animalPrototype = {
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
console.log("Dog sound:", dog.makeSound());
console.log("Dog move:", dog.move());

// Object.freeze() - make immutable
let freezeObject = { value: 42, nested: { a: 1 } };
Object.freeze(freezeObject);
Object.freeze(freezeObject.nested); // Freeze nested object as well
freezeObject.value = 100; 
freezeObject.nested.a = 2; 
console.log("Frozen object:", freezeObject);

// Object.seal() - prevent adding/removing properties
let sealObject = { value: 42 };
Object.seal(sealObject);
sealObject.value = 100; // Will work
sealObject.newProp = "new"; // Won't work
console.log("Sealed object:", sealObject);

// Object.preventExtensions() - prevent adding properties
let preventExtObject = { value: 42 };
Object.preventExtensions(preventExtObject);
preventExtObject.value = 100; // Will work
preventExtObject.newProp = "new"; // Won't work
console.log("Prevent extensions object:", preventExtObject);

// 📚 6. Practical Example: Bank Account
console.log("\n📚 6. Practical Example: Bank Account");
console.log("-----------------------------------");

let bankAccount = {
    _accountNumber: "123456789",
    _balance: 0,
    _transactions: [],
    
    // Getters
    get accountNumber() {
        return this._accountNumber;
    },
    
    get balance() {
        return this._balance;
    },
    
    get transactions() {
        return [...this._transactions]; // Return copy
    },
    
    // Methods
    deposit: function(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        
        this._balance += amount;
        this._transactions.push({
            type: 'deposit',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this._balance
        });
        
        return `Deposited $${amount}. New balance: $${this._balance}`;
    },
    
    withdraw: function(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        
        if (amount > this._balance) {
            throw new Error("Insufficient funds");
        }
        
        this._balance -= amount;
        this._transactions.push({
            type: 'withdrawal',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this._balance
        });
        
        return `Withdrew $${amount}. New balance: $${this._balance}`;
    },
    
    getStatement: function() {
        return {
            accountNumber: this.accountNumber,
            currentBalance: this.balance,
            transactionCount: this._transactions.length,
            transactions: this.transactions
        };
    },
    
    transfer: function(amount, targetAccount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("Amount must be a positive number");
        }
        
        if (amount > this._balance) {
            throw new Error("Insufficient funds for transfer");
        }
        
        this._balance -= amount;
        targetAccount._balance += amount;
        
        this._transactions.push({
            type: 'transfer_out',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: this._balance
        });
        
        targetAccount._transactions.push({
            type: 'transfer_in',
            amount: amount,
            timestamp: new Date().toISOString(),
            balance: targetAccount._balance
        });
        
        return `Transferred $${amount} to account ${targetAccount.accountNumber}`;
    }
};

// Test bank account
console.log("Bank account operations:");
console.log("Initial balance:", bankAccount.balance);

try {
    console.log(bankAccount.deposit(100));
    console.log(bankAccount.withdraw(30));
    console.log("Current balance:", bankAccount.balance);
    console.log("Statement:", bankAccount.getStatement());
} catch (error) {
    console.log("Error:", error.message);
}

// 📚 7. Method Chaining
console.log("\n📚 7. Method Chaining");
console.log("---------------------");

let calculator2 = {
    result: 0,
    
    add: function(value) {
        this.result += value;
        return this; // Return this for chaining
    },
    
    subtract: function(value) {
        this.result -= value;
        return this;
    },
    
    multiply: function(value) {
        this.result *= value;
        return this;
    },
    
    divide: function(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this;
    },
    
    clear: function() {
        this.result = 0;
        return this;
    },
    
    getResult: function() {
        return this.result;
    }
};

console.log("Method chaining:");
let result = calculator2
    .add(10)
    .multiply(2)
    .subtract(5)
    .divide(3)
    .getResult();

console.log("Chained calculation result:", result);

// 📚 8. Object Method Best Practices
console.log("\n📚 8. Object Method Best Practices");
console.log("---------------------------------");

// Use meaningful method names
const dataProcessor = {
    data: [],
    
    // Clear method name
    addItem: function(item) {
        this.data.push(item);
        return this;
    },
    
    // Clear method name
    removeItem: function(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
            return true;
        }
        return false;
    },
    
    // Clear method name
    getItemCount: function() {
        return this.data.length;
    },
    
    // Clear method name
    clearAll: function() {
        this.data = [];
        return this;
    },
    
    // Clear method name
    processData: function(processor) {
        if (typeof processor === 'function') {
            this.data = this.data.map(processor);
        }
        return this;
    }
};

console.log("Data processor:");
dataProcessor
    .addItem("item1")
    .addItem("item2")
    .addItem("item3");

console.log("Item count:", dataProcessor.getItemCount());
console.log("Data:", dataProcessor.data);

dataProcessor.processData(item => item.toUpperCase());
console.log("Processed data:", dataProcessor.data);

console.log("\n🎉 Lesson 2 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Methods can be defined in multiple ways");
console.log("- Property descriptors control property behavior");
console.log("- Getters and setters provide controlled access to properties");
console.log("- Object methods provide useful utilities for object manipulation");
console.log("- Method chaining improves code readability");
console.log("- Use meaningful method names and follow best practices");

console.log("\n📝 Practice Exercises:");
console.log("1. Create objects with different method patterns");
console.log("2. Practice using property descriptors");
console.log("3. Implement getters and setters");
console.log("4. Use object utility methods");
console.log("5. Practice method chaining");
