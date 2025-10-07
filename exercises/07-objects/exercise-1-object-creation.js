// Exercise 1: Object Creation and Manipulation
// Complete the TODO sections below

console.log("💪 Exercise 1: Object Creation and Manipulation");
console.log("=============================================");

// Exercise 1: Object Literal Creation
console.log("\n1. Object Literal Creation:");
// TODO: Create an object literal for a person
let person = null; // Your code here
// Hint: { name: "John Doe", age: 30, email: "john@example.com" }

console.log("Person object:", person);

// Exercise 2: Object with Methods
console.log("\n2. Object with Methods:");
// TODO: Create an object with methods
let calculator = {
    result: 0,
    
    // TODO: Add a method to add numbers
    add: null, // Your code here
    // Hint: function(a, b) { this.result = a + b; return this.result; }
    
    // TODO: Add a method to subtract numbers
    subtract: null, // Your code here
    // Hint: function(a, b) { this.result = a - b; return this.result; }
    
    // TODO: Add a method to clear the result
    clear: null // Your code here
    // Hint: function() { this.result = 0; return "Cleared"; }
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

// TODO: Access properties using dot notation
let userName = null; // Your code here
// Hint: user.name

let userAge = null; // Your code here
// Hint: user.age

// TODO: Access properties using bracket notation
let userEmail = null; // Your code here
// Hint: user['email']

let userCity = null; // Your code here
// Hint: user['city']

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

// TODO: Modify the price
// Your code here
// Hint: product.price = 899.99

// TODO: Modify the inStock status
// Your code here
// Hint: product.inStock = false

// TODO: Add a new property for category
// Your code here
// Hint: product.category = "Electronics"

console.log("Modified product:", product);

// Exercise 5: Object Enumeration
console.log("\n5. Object Enumeration:");
let student = {
    id: 1,
    name: "Bob",
    grade: "A",
    subjects: ["Math", "Science", "English"]
};

// TODO: Use Object.keys() to get property names
let keys = null; // Your code here
// Hint: Object.keys(student)

// TODO: Use Object.values() to get property values
let values = null; // Your code here
// Hint: Object.values(student)

// TODO: Use Object.entries() to get key-value pairs
let entries = null; // Your code here
// Hint: Object.entries(student)

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

// TODO: Access nested properties
let companyName = null; // Your code here
// Hint: company.name

let companyCity = null; // Your code here
// Hint: company.address.city

let firstEmployee = null; // Your code here
// Hint: company.employees[0]

console.log("Nested property access:");
console.log("Company name:", companyName);
console.log("Company city:", companyCity);
console.log("First employee:", firstEmployee);

// Exercise 7: Object with Computed Property Names
console.log("\n7. Object with Computed Property Names:");
let dynamicKey = "dynamicProperty";
let anotherKey = "anotherProperty";

// TODO: Create object with computed property names
let dynamicObject = null; // Your code here
// Hint: { [dynamicKey]: "value1", [anotherKey]: "value2" }

console.log("Dynamic object:", dynamicObject);

// Exercise 8: Object Property Checking
console.log("\n8. Object Property Checking:");
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

// TODO: Check if properties exist using 'in' operator
let hasApiUrl = null; // Your code here
// Hint: 'apiUrl' in config

let hasPort = null; // Your code here
// Hint: 'port' in config

// TODO: Check if properties exist using hasOwnProperty()
let hasTimeout = null; // Your code here
// Hint: config.hasOwnProperty('timeout')

let hasDatabase = null; // Your code here
// Hint: config.hasOwnProperty('database')

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

// TODO: Call the deposit method
let depositResult = null; // Your code here
// Hint: bankAccount.deposit(500)

// TODO: Call the withdraw method
let withdrawResult = null; // Your code here
// Hint: bankAccount.withdraw(200)

// TODO: Call the getBalance method
let balanceResult = null; // Your code here
// Hint: bankAccount.getBalance()

console.log("Bank account operations:");
console.log(depositResult);
console.log(withdrawResult);
console.log(balanceResult);

// Exercise 10: Object Creation with Factory Function
console.log("\n10. Object Creation with Factory Function:");
// TODO: Create a factory function for creating user objects
function createUser(name, email, age) {
    // Your code here
    // Hint: return { name, email, age, ... }
}

// TODO: Create user objects using the factory function
let user1 = null; // Your code here
// Hint: createUser("Alice", "alice@example.com", 25)

let user2 = null; // Your code here
// Hint: createUser("Bob", "bob@example.com", 30)

console.log("Factory function results:");
console.log("User 1:", user1);
console.log("User 2:", user2);

console.log("\n🎉 Exercise 1 Complete!");
console.log("=====================");
console.log("Great job! You've practiced object creation and manipulation.");
console.log("Key concepts practiced:");
console.log("- Object literal syntax");
console.log("- Object methods and properties");
console.log("- Property access (dot and bracket notation)");
console.log("- Property modification and addition");
console.log("- Object enumeration methods");
console.log("- Nested object access");
console.log("- Computed property names");
console.log("- Property existence checking");
console.log("- Method invocation");
console.log("- Factory functions");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: Object Methods and Properties");
console.log("4. Ask questions if you need help");
