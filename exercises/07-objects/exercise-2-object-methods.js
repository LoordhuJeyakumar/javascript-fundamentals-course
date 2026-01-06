// Exercise 2: Object Methods and Properties
// Complete the TODO sections below

console.log("💪 Exercise 2: Object Methods and Properties");
console.log("===========================================");

// Exercise 1: Method Definition Patterns
console.log("\n1. Method Definition Patterns:");
let calculator = {
    result: 0,
    
    // TODO: Define method using function expression
    add: null, // Your code here
    // Hint: function(a, b) { this.result = a + b; return this.result; }
    
    // TODO: Define method using arrow function
    subtract: null, // Your code here
    // Hint: (a, b) => { return a - b; }
    
    // TODO: Define method using shorthand syntax
    multiply(a, b) {
        // Your code here
        // Hint: this.result = a * b; return this.result;
    },
    
    // TODO: Define method using computed property names
    ['divide'](a, b) {
        // Your code here
        // Hint: if (b === 0) return "Cannot divide by zero"; return a / b;
    }
};

console.log("Method definition patterns:");
console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 10 - 4:", calculator.subtract(10, 4));
console.log("Multiply 3 * 4:", calculator.multiply(3, 4));
console.log("Divide 15 / 3:", calculator.divide(15, 3));

// Exercise 2: Property Descriptors
console.log("\n2. Property Descriptors:");
let configurableObject = {};

// TODO: Define property with writable: false
Object.defineProperty(configurableObject, 'readOnly', {
    // Your code here
    // Hint: value: "This is read-only", writable: false, enumerable: true, configurable: true
});

// TODO: Define property with enumerable: false
Object.defineProperty(configurableObject, 'hidden', {
    // Your code here
    // Hint: value: "This is hidden", writable: true, enumerable: false, configurable: true
});

// TODO: Define property with configurable: false
Object.defineProperty(configurableObject, 'permanent', {
    // Your code here
    // Hint: value: "This is permanent", writable: true, enumerable: true, configurable: false
});

console.log("Property descriptors:");
console.log("Object:", configurableObject);
console.log("Object.keys():", Object.keys(configurableObject));

// TODO: Try to modify read-only property
// Your code here
// Hint: configurableObject.readOnly = "Try to change";

console.log("Read-only after modification:", configurableObject.readOnly);

// Exercise 3: Getters and Setters
console.log("\n3. Getters and Setters:");
let user = {
    _firstName: "John",
    _lastName: "Doe",
    _age: 30,
    
    // TODO: Add getter for fullName
    get fullName() {
        // Your code here
        // Hint: return `${this._firstName} ${this._lastName}`;
    },
    
    // TODO: Add setter for fullName
    set fullName(value) {
        // Your code here
        // Hint: const parts = value.split(' '); this._firstName = parts[0] || ''; this._lastName = parts[1] || '';
    },
    
    // TODO: Add getter for age
    get age() {
        // Your code here
        // Hint: return this._age;
    },
    
    // TODO: Add setter for age with validation
    set age(value) {
        // Your code here
        // Hint: if (typeof value === 'number' && value >= 0 && value <= 150) { this._age = value; } else { throw new Error("Age must be a number between 0 and 150"); }
    }
};

console.log("Getters and setters:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// TODO: Test setters
user.fullName = "Jane Smith";
user.age = 25;

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// Exercise 4: Object Property Configuration
console.log("\n4. Object Property Configuration:");
let advancedObject = {};

// TODO: Define multiple properties at once
Object.defineProperties(advancedObject, {
    // TODO: Add read-only property
    id: {
        // Your code here
        // Hint: value: 1, writable: false, enumerable: true, configurable: false
    },
    
    // TODO: Add hidden property
    internalState: {
        // Your code here
        // Hint: value: "private", writable: true, enumerable: false, configurable: true
    },
    
    // TODO: Add computed property
    timestamp: {
        // Your code here
        // Hint: get: function() { return new Date().toISOString(); }, enumerable: true, configurable: true
    }
});

console.log("Advanced object configuration:");
console.log("Object:", advancedObject);
console.log("Object.keys():", Object.keys(advancedObject));

// Exercise 5: Object Methods and Utilities
console.log("\n5. Object Methods and Utilities:");
let target = { a: 1, b: 2 };
let source1 = { b: 3, c: 4 };
let source2 = { d: 5, e: 6 };

// TODO: Use Object.assign() to copy properties
let assigned = null; // Your code here
// Hint: Object.assign(target, source1, source2)

console.log("Object.assign result:", assigned);
console.log("Target object:", target);

// TODO: Use Object.create() to create object with prototype
let prototypeObject = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

let newObject = null; // Your code here
// Hint: Object.create(prototypeObject)

newObject.name = "Alice";
console.log("Object.create result:", newObject);
console.log("Greet method:", newObject.greet());

// Exercise 6: Object Freezing and Sealing
console.log("\n6. Object Freezing and Sealing:");
let freezeObject = { value: 42, nested: { a: 1 } };

// TODO: Freeze the object
// Your code here
// Hint: Object.freeze(freezeObject)

console.log("Frozen object:", freezeObject);
console.log("Is frozen:", Object.isFrozen(freezeObject));

// TODO: Try to modify frozen object
// Your code here
// Hint: freezeObject.value = 100;

console.log("Value after modification attempt:", freezeObject.value);

// TODO: Seal another object
let sealObject = { value: 42 };
// Your code here
// Hint: Object.seal(sealObject)

sealObject.value = 100; // This should work
sealObject.newProp = "new"; // This shouldn't work

console.log("Sealed object:", sealObject);
console.log("Is sealed:", Object.isSealed(sealObject));

// Exercise 7: Method Chaining
console.log("\n7. Method Chaining:");
let calculator2 = {
    result: 0,
    
    // TODO: Add method that returns this for chaining
    add: function(value) {
        // Your code here
        // Hint: this.result += value; return this;
    },
    
    // TODO: Add method that returns this for chaining
    subtract: function(value) {
        // Your code here
        // Hint: this.result -= value; return this;
    },
    
    // TODO: Add method that returns this for chaining
    multiply: function(value) {
        // Your code here
        // Hint: this.result *= value; return this;
    },
    
    // TODO: Add method that returns the result
    getResult: function() {
        // Your code here
        // Hint: return this.result;
    }
};

// TODO: Use method chaining
let result = null; // Your code here
// Hint: calculator2.add(10).multiply(2).subtract(5).getResult()

console.log("Method chaining result:", result);

// Exercise 8: Object Method Best Practices
console.log("\n8. Object Method Best Practices:");
let dataProcessor = {
    data: [],
    
    // TODO: Add method with descriptive name
    addItem: function(item) {
        // Your code here
        // Hint: this.data.push(item); return this;
    },
    
    // TODO: Add method with descriptive name
    removeItem: function(index) {
        // Your code here
        // Hint: if (index >= 0 && index < this.data.length) { this.data.splice(index, 1); return true; } return false;
    },
    
    // TODO: Add method with descriptive name
    getItemCount: function() {
        // Your code here
        // Hint: return this.data.length;
    },
    
    // TODO: Add method with descriptive name
    clearAll: function() {
        // Your code here
        // Hint: this.data = []; return this;
    }
};

// TODO: Test the data processor
dataProcessor.addItem("item1").addItem("item2").addItem("item3");

console.log("Data processor methods:");
console.log("Item count:", dataProcessor.getItemCount());
console.log("Data:", dataProcessor.data);

// TODO: Remove an item
let removed = null; // Your code here
// Hint: dataProcessor.removeItem(1)

console.log("Removed item:", removed);
console.log("Data after removal:", dataProcessor.data);

console.log("\n🎉 Exercise 2 Complete!");
console.log("=====================");
console.log("Great job! You've practiced object methods and properties.");
console.log("Key concepts practiced:");
console.log("- Method definition patterns");
console.log("- Property descriptors");
console.log("- Getters and setters");
console.log("- Object property configuration");
console.log("- Object utility methods");
console.log("- Object freezing and sealing");
console.log("- Method chaining");
console.log("- Best practices for object methods");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 3: Prototypes and Inheritance");
console.log("4. Ask questions if you need help");
