// Exercise 1: Object Literal Creation
console.log("\n1. Object Literal Creation:");

let person = { name: "John Doe", age: 30, email: "john@example.com" };
console.log("Person object:", person);

// Exercise 2: Object with Methods
console.log("\n2. Object with Methods:");

let calculator = {
    result: 0,    
    add: function(a, b) {
        this.result = a + b;
        return this.result;
    },    
    subtract: function(a, b) {
        this.result = a - b;
        return this.result;
    },    
    clear: function() {
        this.result = 0;
        return "Cleared";
    }
};
console.log("Calculator methods:");
console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 10 - 4:", calculator.subtract(10, 4));
console.log("Clear:", calculator.clear());

// Exercise 3: Object Property Access
console.log("\n3. Object Property Access:");

let user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};
let userName = user.name;
let userAge = user.age;
let userEmail = user["email"];
let userCity = user["city"];

console.log("Property access:");
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Email:", userEmail);
console.log("City:", userCity);

// Exercise 4: Object Property Modification
console.log("\n4. Object Property Modification:");

let product = {
    name: "Laptop",
    price: 999.99,
    inStock: true
};
console.log("Original product:", product);
product.price = 899.99;
product.inStock = false;
product.category = "Electronics";

console.log("Modified product:", product);

// Exercise 5: Object Enumeration
console.log("\n5. Object Enumeration:");

let student = {
    id: 1,
    name: "Bob",
    grade: "A",
    subjects: ["Math", "Science", "English"]
};
let keys = Object.keys(student);
let values = Object.values(student);
let entries = Object.entries(student);

console.log("Object enumeration:");
console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// Exercise 6: Object with Nested Properties
console.log("\n6. Object with Nested Properties:");

let company = {
    name: "Tech Corp",
    founded: 2020,
    address: {
        street: "123 Tech St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105"
    },
    employees: [
        { name: "John", position: "Developer" },
        { name: "Jane", position: "Designer" }
    ]
};
let companyName = company.name;
let companyCity = company.address.city;
let firstEmployee = company.employees[0];

console.log("Nested property access:");
console.log("Company name:", companyName);
console.log("Company city:", companyCity);
console.log("First employee:", firstEmployee);

// Exercise 7: Object with Computed Property Names
console.log("\n7. Object with Computed Property Names:");

let dynamicKey = "dynamicProperty";
let anotherKey = "anotherProperty";
let dynamicObject = { [dynamicKey]: "value1", [anotherKey]: "value2" };

console.log("Dynamic object:", dynamicObject);

// Exercise 8: Object Property Checking
console.log("\n8. Object Property Checking:");

let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};
let hasApiUrl = 'apiUrl' in config;
let hasPort = 'port' in config;
let hasTimeout = config.hasOwnProperty('timeout');
let hasDatabase = config.hasOwnProperty('database');

console.log("Property checking:");
console.log("Has apiUrl:", hasApiUrl);
console.log("Has port:", hasPort);
console.log("Has timeout:", hasTimeout);
console.log("Has database:", hasDatabase);

// Exercise 9: Object Method Invocation
console.log("\n9. Object Method Invocation:");

let bankAccount = {
    balance: 1000,    
    deposit: function(amount) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
    },    
    withdraw: function(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.balance}`;
    },    
    getBalance: function() {
        return `Current balance: $${this.balance}`;
    }
};
let depositResult = bankAccount.deposit(500);
let withdrawResult = bankAccount.withdraw(200);
let balanceResult = bankAccount.getBalance();

console.log("Bank account operations:");
console.log(depositResult);
console.log(withdrawResult);
console.log(balanceResult);

// Exercise 10: Object Creation with Factory Function
console.log("\n10. Object Creation with Factory Function:");

function createUser(name, email, age) {
    return {
        name,
        email,
        age,
        getInfo() {
            return `${name} (${age}) - ${email}`;
        }
    };
}
let user1 = createUser("Alice", "alice@example.com", 25);
let user2 = createUser("Bob", "bob@example.com", 30);

console.log("Factory function results:");
console.log("User 1:", user1);
console.log("User 2:", user2);