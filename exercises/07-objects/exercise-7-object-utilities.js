// Exercise 7: Object Utilities and Advanced Topics
// Complete the TODO sections below

console.log("💪 Exercise 7: Object Utilities and Advanced Topics");
console.log("==================================================");

// Exercise 1: Object Serialization (JSON)
console.log("\n1. Object Serialization (JSON):");

// TODO 1: Convert object to JSON string
console.log("\n1.1 Convert object to JSON:");
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    hobbies: ["reading", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};

let jsonString = JSON.stringify(person); // Your code here
console.log("JSON string:", jsonString);

// TODO 2: Convert JSON string back to object
console.log("\n1.2 Convert JSON back to object:");
let parsedObject = JSON.parse(jsonString); // Your code here
console.log("Parsed object:", parsedObject);

// TODO 3: Handle circular references
console.log("\n1.3 Handle circular references:");
let circularObj = { name: "test" };
circularObj.self = circularObj; // Create circular reference

try {
    let circularJson = JSON.stringify(circularObj); // This will throw an error
    console.log("Circular JSON:", circularJson);
} catch (error) {
    console.log("Circular reference error:", error.message);
}

// TODO 4: Custom JSON serialization
console.log("\n1.4 Custom JSON serialization:");
let customObj = {
    name: "Jane",
    age: 25,
    birthDate: new Date(),
    toJSON: function() {
        return {
            name: this.name,
            age: this.age,
            birthYear: this.birthDate.getFullYear()
        };
    }
};

let customJson = JSON.stringify(customObj); // Your code here
console.log("Custom JSON:", customJson);

// Exercise 2: Object Cloning and Copying
console.log("\n2. Object Cloning and Copying:");

// TODO 5: Shallow copy using spread operator
console.log("\n2.1 Shallow copy with spread operator:");
let originalObj = {
    name: "Original",
    nested: { value: 42 },
    array: [1, 2, 3]
};

let shallowCopy = { ...originalObj }; // Your code here
console.log("Shallow copy:", shallowCopy);
console.log("Same nested object?", originalObj.nested === shallowCopy.nested);

// TODO 6: Deep copy using JSON methods
console.log("\n2.2 Deep copy with JSON methods:");
let deepCopy = JSON.parse(JSON.stringify(originalObj)); // Your code here
console.log("Deep copy:", deepCopy);
console.log("Different nested object?", originalObj.nested !== deepCopy.nested);

// TODO 7: Deep copy using structuredClone (modern browsers)
console.log("\n2.3 Deep copy with structuredClone:");
if (typeof structuredClone !== 'undefined') {
    let structuredCopy = structuredClone(originalObj); // Your code here
    console.log("Structured copy:", structuredCopy);
    console.log("Different nested object?", originalObj.nested !== structuredCopy.nested);
} else {
    console.log("structuredClone not available in this environment");
}

// TODO 8: Custom deep copy function
console.log("\n2.4 Custom deep copy function:");
function deepCopyCustom(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Your code here
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime()); // Your code here
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepCopyCustom(item)); // Your code here
    }
    
    let copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopyCustom(obj[key]); // Your code here
        }
    }
    return copy;
}

let customDeepCopy = deepCopyCustom(originalObj);
console.log("Custom deep copy:", customDeepCopy);

// Exercise 3: Object Comparison
console.log("\n3. Object Comparison:");

// TODO 9: Shallow object comparison
console.log("\n3.1 Shallow object comparison:");
function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) return true; // Your code here
    
    if (obj1 == null || obj2 == null) return false; // Your code here
    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false; // Your code here
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false; // Your code here
    }
    
    return true;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
let obj3 = { a: 1, b: 3 };

console.log("obj1 === obj2:", shallowEqual(obj1, obj2));
console.log("obj1 === obj3:", shallowEqual(obj1, obj3));

// TODO 10: Deep object comparison
console.log("\n3.2 Deep object comparison:");
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true; // Your code here
    
    if (obj1 == null || obj2 == null) return false; // Your code here
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false; // Your code here
    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false; // Your code here
    
    for (let key of keys1) {
        if (!keys2.includes(key)) return false; // Your code here
        if (!deepEqual(obj1[key], obj2[key])) return false; // Your code here
    }
    
    return true;
}

let deepObj1 = { a: 1, b: { c: 2 } };
let deepObj2 = { a: 1, b: { c: 2 } };
let deepObj3 = { a: 1, b: { c: 3 } };

console.log("deepObj1 === deepObj2:", deepEqual(deepObj1, deepObj2));
console.log("deepObj1 === deepObj3:", deepEqual(deepObj1, deepObj3));

// Exercise 4: Object Utilities
console.log("\n4. Object Utilities:");

// TODO 11: Object property utilities
console.log("\n4.1 Object property utilities:");
let utilityObj = {
    name: "Test",
    age: 30,
    email: "test@example.com",
    active: true
};

let keys = Object.keys(utilityObj); // Your code here
let values = Object.values(utilityObj); // Your code here
let entries = Object.entries(utilityObj); // Your code here

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// TODO 12: Object property manipulation
console.log("\n4.2 Object property manipulation:");
let manipObj = { a: 1, b: 2, c: 3 };

// Freeze object
Object.freeze(manipObj); // Your code here
console.log("Object frozen:", Object.isFrozen(manipObj));

// Seal object
let sealObj = { x: 1, y: 2 };
Object.seal(sealObj); // Your code here
console.log("Object sealed:", Object.isSealed(sealObj));

// Prevent extensions
let preventObj = { p: 1, q: 2 };
Object.preventExtensions(preventObj); // Your code here
console.log("Extensions prevented:", Object.isExtensible(preventObj));

// Exercise 5: Object Performance Optimization
console.log("\n5. Object Performance Optimization:");

// TODO 13: Object property access optimization
console.log("\n5.1 Property access optimization:");
let perfObj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};

// Cache property access
let prop1 = perfObj.prop1; // Your code here
let prop2 = perfObj.prop2; // Your code here

console.log("Cached prop1:", prop1);
console.log("Cached prop2:", prop2);

// TODO 14: Object creation optimization
console.log("\n5.2 Object creation optimization:");
// Inefficient: creating objects in loops
let inefficientObjects = [];
for (let i = 0; i < 1000; i++) {
    inefficientObjects.push({ id: i, value: i * 2 }); // Creates new object each time
}

// Efficient: reuse object structure
let efficientObjects = [];
let template = { id: 0, value: 0 };
for (let i = 0; i < 1000; i++) {
    efficientObjects.push({ ...template, id: i, value: i * 2 }); // Your code here
}

console.log("Inefficient objects created:", inefficientObjects.length);
console.log("Efficient objects created:", efficientObjects.length);

// Exercise 6: Object Patterns and Best Practices
console.log("\n6. Object Patterns and Best Practices:");

// TODO 15: Factory pattern
console.log("\n6.1 Factory pattern:");
function createUser(type, name, email) {
    let user = {
        name: name,
        email: email,
        type: type,
        createdAt: new Date()
    };
    
    if (type === 'admin') {
        user.permissions = ['read', 'write', 'delete']; // Your code here
        user.isAdmin = true; // Your code here
    } else if (type === 'user') {
        user.permissions = ['read']; // Your code here
        user.isAdmin = false; // Your code here
    }
    
    return user;
}

let adminUser = createUser('admin', 'Admin User', 'admin@example.com');
let regularUser = createUser('user', 'Regular User', 'user@example.com');

console.log("Admin user:", adminUser);
console.log("Regular user:", regularUser);

// TODO 16: Builder pattern
console.log("\n6.2 Builder pattern:");
class QueryBuilder {
    constructor() {
        this.query = {
            select: [],
            from: '',
            where: [],
            orderBy: '',
            limit: null
        };
    }
    
    select(fields) {
        this.query.select = fields; // Your code here
        return this;
    }
    
    from(table) {
        this.query.from = table; // Your code here
        return this;
    }
    
    where(condition) {
        this.query.where.push(condition); // Your code here
        return this;
    }
    
    orderBy(field) {
        this.query.orderBy = field; // Your code here
        return this;
    }
    
    limit(count) {
        this.query.limit = count; // Your code here
        return this;
    }
    
    build() {
        return this.query; // Your code here
    }
}

let query = new QueryBuilder()
    .select(['name', 'email'])
    .from('users')
    .where('active = true')
    .orderBy('name')
    .limit(10)
    .build();

console.log("Built query:", query);

// Exercise 7: Object Error Handling
console.log("\n7. Object Error Handling:");

// TODO 17: Safe object property access
console.log("\n7.1 Safe property access:");
function safeGet(obj, path, defaultValue = null) {
    let current = obj;
    let keys = path.split('.');
    
    for (let key of keys) {
        if (current == null || typeof current !== 'object') {
            return defaultValue; // Your code here
        }
        current = current[key]; // Your code here
    }
    
    return current !== undefined ? current : defaultValue; // Your code here
}

let nestedObj = {
    user: {
        profile: {
            name: "John",
            settings: {
                theme: "dark"
            }
        }
    }
};

let userName = safeGet(nestedObj, 'user.profile.name', 'Unknown');
let userTheme = safeGet(nestedObj, 'user.profile.settings.theme', 'light');
let invalidPath = safeGet(nestedObj, 'user.profile.invalid.path', 'default');

console.log("User name:", userName);
console.log("User theme:", userTheme);
console.log("Invalid path:", invalidPath);

// TODO 18: Object validation
console.log("\n7.2 Object validation:");
function validateObject(obj, schema) {
    let errors = [];
    
    for (let field in schema) {
        let rules = schema[field];
        let value = obj[field];
        
        if (rules.required && (value === undefined || value === null)) {
            errors.push(`${field} is required`); // Your code here
        }
        
        if (value !== undefined && rules.type && typeof value !== rules.type) {
            errors.push(`${field} must be of type ${rules.type}`); // Your code here
        }
        
        if (value !== undefined && rules.min && value < rules.min) {
            errors.push(`${field} must be at least ${rules.min}`); // Your code here
        }
        
        if (value !== undefined && rules.max && value > rules.max) {
            errors.push(`${field} must be at most ${rules.max}`); // Your code here
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

let userSchema = {
    name: { required: true, type: 'string' },
    age: { required: true, type: 'number', min: 0, max: 120 },
    email: { required: true, type: 'string' }
};

let validUser = { name: "John", age: 30, email: "john@example.com" };
let invalidUser = { name: "Jane", age: 150, email: 123 };

let validResult = validateObject(validUser, userSchema);
let invalidResult = validateObject(invalidUser, userSchema);

console.log("Valid user:", validResult);
console.log("Invalid user:", invalidResult);

// Exercise 8: Advanced Object Techniques
console.log("\n8. Advanced Object Techniques:");

// TODO 19: Object composition
console.log("\n8.1 Object composition:");
let canFly = {
    fly() {
        console.log(`${this.name} is flying`);
    }
};

let canSwim = {
    swim() {
        console.log(`${this.name} is swimming`);
    }
};

let canWalk = {
    walk() {
        console.log(`${this.name} is walking`);
    }
};

function createAnimal(name, abilities) {
    let animal = { name: name };
    
    abilities.forEach(ability => {
        Object.assign(animal, ability); // Your code here
    });
    
    return animal;
}

let duck = createAnimal("Duck", [canFly, canSwim, canWalk]);
let fish = createAnimal("Fish", [canSwim]);

duck.fly();
duck.swim();
duck.walk();
fish.swim();

// TODO 20: Object memoization
console.log("\n8.2 Object memoization:");
function memoize(fn) {
    let cache = new Map(); // Your code here
    
    return function(...args) {
        let key = JSON.stringify(args); // Your code here
        
        if (cache.has(key)) {
            console.log("Cache hit!");
            return cache.get(key); // Your code here
        }
        
        console.log("Cache miss, computing...");
        let result = fn.apply(this, args); // Your code here
        cache.set(key, result); // Your code here
        
        return result;
    };
}

let expensiveFunction = memoize(function(n) {
    // Simulate expensive computation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
});

let result1 = expensiveFunction(5);
let result2 = expensiveFunction(5); // Should use cache
console.log("Result 1:", result1);
console.log("Result 2:", result2);

console.log("\n🎉 Congratulations! You've completed Exercise 7: Object Utilities and Advanced Topics!");
console.log("You now understand advanced object manipulation and utility techniques!");
