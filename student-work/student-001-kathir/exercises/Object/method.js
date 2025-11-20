// Exercise 1: Method Definition Patterns
console.log("\n1. Method Definition Patterns:");

let calculator = {
    result: 0,

    add: function(a, b) {
        this.result = a + b;
        return this.result;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    },
    ['divide'](a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
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
Object.defineProperty(configurableObject, 'readOnly', {
    value: "This is read-only",
    writable: false,
    enumerable: true,
    configurable: true
});
Object.defineProperty(configurableObject, 'hidden', {
    value: "This is hidden",
    writable: true,
    enumerable: false,
    configurable: true
});
Object.defineProperty(configurableObject, 'permanent', {
    value: "This is permanent",
    writable: true,
    enumerable: true,
    configurable: false
});

console.log("Property descriptors:");
console.log("Object:", configurableObject);
console.log("Object.keys():", Object.keys(configurableObject));

configurableObject.readOnly = "Try to change";

console.log("Read-only after modification:", configurableObject.readOnly);

// Exercise 3: Getters and Setters
console.log("\n3. Getters and Setters:");

let user = {
    _firstName: "John",
    _lastName: "Doe",
    _age: 30,

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0] || '';
        this._lastName = parts[1] || '';
    },
    get age() {
        return this._age;
    },    
    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 150) {
            this._age = value;
        } else {
            throw new Error("Age must be a number between 0 and 150");
        }
    }
};
console.log("Getters and setters:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

user.fullName = "Jane Smith";
user.age = 25;

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Age:", user.age);

// Exercise 4: Object Property Configuration
console.log("\n4. Object Property Configuration:");

let advancedObject = {};
Object.defineProperties(advancedObject, {
    id: {
        value: 1,
        writable: false,
        enumerable: true,
        configurable: false
    },
    internalState: {
        value: "private",
        writable: true,
        enumerable: false,
        configurable: true
    },
    timestamp: {
        get: function() {
            return new Date().toISOString();
        },
        enumerable: true,
        configurable: true
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
let assigned = Object.assign(target, source1, source2);

console.log("Object.assign result:", assigned);
console.log("Target object:", target);

let prototypeObject = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
let newObject = Object.create(prototypeObject);
newObject.name = "Alice";
console.log("Object.create result:", newObject);
console.log("Greet method:", newObject.greet());

// Exercise 6: Object Freezing and Sealing
console.log("\n6. Object Freezing and Sealing:");

let freezeObject = { value: 42, nested: { a: 1 } };
Object.freeze(freezeObject);
console.log("Frozen object:", freezeObject);
console.log("Is frozen:", Object.isFrozen(freezeObject));
freezeObject.value = 100;
console.log("Value after modification attempt:", freezeObject.value);
let sealObject = { value: 42 };
Object.seal(sealObject);
sealObject.value = 100;
sealObject.newProp = "new";

console.log("Sealed object:", sealObject);
console.log("Is sealed:", Object.isSealed(sealObject));

// Exercise 7: Method Chaining
console.log("\n7. Method Chaining:");

let calculator2 = {
    result: 0,
    add: function(value) {
        this.result += value;
        return this;
    },
    subtract: function(value) {
        this.result -= value;
        return this;
    },
    multiply: function(value) {
        this.result *= value;
        return this;
    },
    getResult: function() {
        return this.result;
    }
};
let result = calculator2.add(10).multiply(2).subtract(5).getResult();

console.log("Method chaining result:", result);

// Exercise 8: Object Method Best Practices
console.log("\n8. Object Method Best Practices:");

let dataProcessor = {
    data: [],
    addItem: function(item) {
        this.data.push(item);
        return this;
    },    
    removeItem: function(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
            return true;
        }
        return false;
    },    
    getItemCount: function() {
        return this.data.length;
    },    
    clearAll: function() {
        this.data = [];
        return this;
    }
};
dataProcessor.addItem("item1").addItem("item2").addItem("item3");

console.log("Data processor methods:");
console.log("Item count:", dataProcessor.getItemCount());
console.log("Data:", dataProcessor.data);

let removed = dataProcessor.removeItem(1);

console.log("Removed item:", removed);
console.log("Data after removal:", dataProcessor.data);