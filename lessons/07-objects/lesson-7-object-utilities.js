// TEACHING NOTES: Module 7 — Object Utilities
// Analogy: "Toolbox of small gadgets" — each utility is a small gadget that helps inspect, copy, or protect objects.
// Demo: Show `Object.keys()`, `Object.freeze()`, shallow vs deep clone, and explain practical pitfalls with dates and functions.
// Hands-on: Use `deepCloneObject()` to clone a nested object and show that modifying clone doesn't alter original.
// Lesson 7: Object Utilities and Advanced Topics
// Understanding object serialization, cloning, comparison, and performance optimization

console.log("📚 Lesson 7: Object Utilities and Advanced Topics");
console.log("===============================================");

// 📚 1. Object Serialization (JSON)
console.log("\n📚 1. Object Serialization (JSON)");
console.log("--------------------------------");

// Basic JSON serialization
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    hobbies: ["reading", "coding", "gaming"],
    isActive: true,
    birthDate: new Date("1990-01-01")
};

// Serialize to JSON
let jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

// Parse JSON back to object
let parsedPerson = JSON.parse(jsonString);
console.log("Parsed person:", parsedPerson);

// JSON with custom replacer function
let customJson = JSON.stringify(person, (key, value) => {
    if (key === 'email') {
        return value.replace('@', '[at]'); // Mask email
    }
    if (key === 'age') {
        return value > 18 ? 'adult' : 'minor'; // Categorize age
    }
    return value;
});

console.log("Custom JSON:", customJson);

// JSON with space for formatting
let formattedJson = JSON.stringify(person, null, 4);
console.log("Formatted JSON:");
console.log(formattedJson);

// JSON with specific properties
let selectedJson = JSON.stringify(person, ['name', 'age', 'email']);
console.log("Selected properties JSON:", selectedJson);

// 📚 2. Object Cloning and Copying
console.log("\n📚 2. Object Cloning and Copying");
console.log("-------------------------------");

// Shallow cloning
let original = { a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] };
let shallowClone = { ...original };

console.log("Shallow cloning:");
console.log("Original:", original);
console.log("Shallow clone:", shallowClone);
console.log("Same nested object?", original.b === shallowClone.b); // true
console.log("Same array?", original.e === shallowClone.e); // true

// Deep cloning using JSON
let deepClone = JSON.parse(JSON.stringify(original));
console.log("Deep cloning with JSON:");
console.log("Deep clone:", deepClone);
console.log("Same nested object?", original.b === deepClone.b); // false
console.log("Same array?", original.e === deepClone.e); // false

// Deep cloning function
function deepCloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepCloneObject(item));
    }
    
    if (typeof obj === 'object') {
        let cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepCloneObject(obj[key]);
            }
        }
        return cloned;
    }
}

// Test deep cloning function
let complexObject = {
    name: "Test",
    date: new Date(),
    array: [1, 2, { nested: true }],
    nested: {
        deep: {
            value: 42
        }
    }
};

let clonedComplex = deepCloneObject(complexObject);
console.log("Deep cloning function:");
console.log("Original:", complexObject);
console.log("Cloned:", clonedComplex);
console.log("Same date?", complexObject.date === clonedComplex.date); // false
console.log("Same nested?", complexObject.nested === clonedComplex.nested); // false

// Object.assign for shallow cloning
let assignClone = Object.assign({}, original);
console.log("Object.assign clone:", assignClone);
console.log("Same nested object?", original.b === assignClone.b); // true

// 📚 3. Object Comparison
console.log("\n📚 3. Object Comparison");
console.log("----------------------");

// Shallow comparison
function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

// Deep comparison
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    
    if (obj1 == null || obj2 == null) {
        return false;
    }
    
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    
    if (typeof obj1 !== 'object') {
        return obj1 === obj2;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}

// Test object comparison
let obj1 = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
let obj2 = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
let obj3 = { a: 1, b: { c: 2 }, d: [1, 2, 3] };

console.log("Object comparison:");
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("shallowEqual(obj1, obj2):", shallowEqual(obj1, obj2)); // false (nested objects)
console.log("deepEqual(obj1, obj2):", deepEqual(obj1, obj2)); // true

// Test with different objects
let obj4 = { a: 1, b: { c: 3 }, d: [1, 2, 3] };
console.log("deepEqual(obj1, obj4):", deepEqual(obj1, obj4)); // false

// 📚 4. Object Property Utilities
console.log("\n📚 4. Object Property Utilities");
console.log("------------------------------");

// Get all property names (including inherited)
function getAllPropertyNames(obj) {
    let props = [];
    let current = obj;
    
    while (current) {
        props = props.concat(Object.getOwnPropertyNames(current));
        current = Object.getPrototypeOf(current);
    }
    
    return [...new Set(props)]; // Remove duplicates
}

// Get own property names
let testObj = { a: 1, b: 2 };
let inheritedObj = Object.create(testObj);
inheritedObj.c = 3;

console.log("Property utilities:");
console.log("Object.keys(inheritedObj):", Object.keys(inheritedObj));
console.log("Object.getOwnPropertyNames(inheritedObj):", Object.getOwnPropertyNames(inheritedObj));
console.log("getAllPropertyNames(inheritedObj):", getAllPropertyNames(inheritedObj));

// Check if property exists
console.log("Property existence checks:");
console.log("'a' in inheritedObj:", 'a' in inheritedObj);
console.log("'c' in inheritedObj:", 'c' in inheritedObj);
console.log("inheritedObj.hasOwnProperty('a'):", inheritedObj.hasOwnProperty('a'));
console.log("inheritedObj.hasOwnProperty('c'):", inheritedObj.hasOwnProperty('c'));

// Get property descriptor
let descriptor = Object.getOwnPropertyDescriptor(inheritedObj, 'c');
console.log("Property descriptor for 'c':", descriptor);

// 📚 5. Object Transformation
console.log("\n📚 5. Object Transformation");
console.log("--------------------------");

// Transform object properties
function transformObject(obj, transformer) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = transformer(obj[key], key);
        }
    }
    return result;
}

// Test transformation
let numbers = { a: 1, b: 2, c: 3 };
let doubled = transformObject(numbers, (value) => value * 2);
console.log("Transformed object (doubled):", doubled);

let strings = { name: "john", city: "new york" };
let capitalized = transformObject(strings, (value) => 
    value.charAt(0).toUpperCase() + value.slice(1)
);
console.log("Transformed object (capitalized):", capitalized);

// Filter object properties
function filterObject(obj, predicate) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

// Test filtering
let mixed = { a: 1, b: "hello", c: 3, d: "world" };
let numbersOnly = filterObject(mixed, (value) => typeof value === 'number');
let stringsOnly = filterObject(mixed, (value) => typeof value === 'string');

console.log("Filtered objects:");
console.log("Numbers only:", numbersOnly);
console.log("Strings only:", stringsOnly);

// Map object keys
function mapKeys(obj, mapper) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[mapper(key)] = obj[key];
        }
    }
    return result;
}

// Test key mapping
let keyMapped = mapKeys(numbers, (key) => key.toUpperCase());
console.log("Key mapped object:", keyMapped);

// 📚 6. Object Performance Optimization
console.log("\n📚 6. Object Performance Optimization");
console.log("------------------------------------");

// Use Object.freeze for immutable objects
let immutableObj = { a: 1, b: 2, c: 3 };
Object.freeze(immutableObj);

console.log("Immutable object:");
console.log("Frozen:", Object.isFrozen(immutableObj));
console.log("Trying to modify:", immutableObj.a = 10); // Won't work
console.log("Value after modification attempt:", immutableObj.a); // Still 1

// Use Object.seal for controlled modification
let sealedObj = { a: 1, b: 2, c: 3 };
Object.seal(sealedObj);

console.log("Sealed object:");
console.log("Sealed:", Object.isSealed(sealedObj));
sealedObj.a = 10; // This will work
sealedObj.d = 4; // This won't work
console.log("After modification:", sealedObj);

// Use Object.preventExtensions to prevent new properties
let nonExtensibleObj = { a: 1, b: 2 };
Object.preventExtensions(nonExtensibleObj);

console.log("Non-extensible object:");
console.log("Extensible:", Object.isExtensible(nonExtensibleObj));
nonExtensibleObj.a = 10; // This will work
nonExtensibleObj.c = 3; // This won't work
console.log("After modification:", nonExtensibleObj);

// Performance comparison
console.time("Object property access");
for (let i = 0; i < 1000000; i++) {
    let obj = { a: 1, b: 2, c: 3 };
    let value = obj.a;
}
console.timeEnd("Object property access");

console.time("Object property access with freeze");
for (let i = 0; i < 1000000; i++) {
    let obj = { a: 1, b: 2, c: 3 };
    Object.freeze(obj);
    let value = obj.a;
}
console.timeEnd("Object property access with freeze");

// 📚 7. Object Caching and Memoization
console.log("\n📚 7. Object Caching and Memoization");
console.log("----------------------------------");

// Memoization with object cache
function memoize(fn) {
    let cache = {};
    
    return function(...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Cache hit for:", key);
            return cache[key];
        }
        
        console.log("Cache miss for:", key);
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Test memoization
let expensiveFunction = memoize(function(n) {
    console.log("Computing factorial for:", n);
    if (n <= 1) return 1;
    return n * expensiveFunction(n - 1);
});

console.log("Memoization test:");
console.log("First call:", expensiveFunction(5));
console.log("Second call:", expensiveFunction(5));
console.log("Third call:", expensiveFunction(3));

// Object pooling for performance
/* 
Object Pooling Class




 */
class ObjectPool {
    constructor(createFn, resetFn) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.pool = [];
    }
    
    get() {
        if (this.pool.length > 0) {
            return this.pool.pop();
        }
        return this.createFn();
    }
    
    release(obj) {
        this.resetFn(obj);
        this.pool.push(obj);
    }
}

// Test object pooling
let pool = new ObjectPool(
    () => ({ x: 0, y: 0, active: false }),
    (obj) => { obj.x = 0; obj.y = 0; obj.active = false; }
);

let object1 = pool.get();
let object2 = pool.get();
console.log("Object pool test:");
console.log("Pooled objects:", object1, object2);

pool.release(object1);
pool.release(object2);
console.log(object1)
console.log("Objects released back to pool");

// 📚 8. Object Debugging and Inspection
console.log("\n📚 8. Object Debugging and Inspection");
console.log("-----------------------------------");

// Object inspection utility
function inspectObject(obj, depth = 2) {
    let result = {};
    
    function inspect(value, currentDepth) {
        if (currentDepth <= 0) {
            return "[Max depth reached]";
        }
        
        if (value === null) return "null";
        if (typeof value !== 'object') return value;
        
        if (Array.isArray(value)) {
            return value.map(item => inspect(item, currentDepth - 1));
        }
        
        let inspected = {};
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                inspected[key] = inspect(value[key], currentDepth - 1);
            }
        }
        return inspected;
    }
    
    return inspect(obj, depth);
}

// Test object inspection
let complexObj = {
    name: "Test",
    nested: {
        deep: {
            value: 42,
            array: [1, 2, { inner: true }]
        }
    },
    func: function() { return "test"; },
    date: new Date()
};

console.log("Object inspection:");
console.log("Inspected object:", inspectObject(complexObj, 3));

// Object property enumeration = >
function enumerateProperties(obj) {
    let ownProps = Object.getOwnPropertyNames(obj);
    let inheritedProps = [];
    
    let current = Object.getPrototypeOf(obj);
    while (current && current !== Object.prototype) {
        inheritedProps = inheritedProps.concat(Object.getOwnPropertyNames(current));
        current = Object.getPrototypeOf(current);
    }
    
    return {
        own: ownProps,
        inherited: [...new Set(inheritedProps)],
        all: [...new Set([...ownProps, ...inheritedProps])]
    };
}

console.log("Property enumeration:");
console.log(enumerateProperties(complexObj));

console.log("\n🎉 Lesson 7 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- JSON serialization converts objects to strings and back");
console.log("- Deep cloning creates independent copies of objects");
console.log("- Object comparison requires careful consideration of depth");
console.log("- Property utilities help inspect and manipulate objects");
console.log("- Object transformation enables data processing");
console.log("- Performance optimization is crucial for large-scale applications");
console.log("- Caching and memoization improve performance");
console.log("- Object debugging tools help understand object structure");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice JSON serialization and parsing");
console.log("2. Implement deep cloning functions");
console.log("3. Create object comparison utilities");
console.log("4. Practice object transformation");
console.log("5. Optimize object performance");
