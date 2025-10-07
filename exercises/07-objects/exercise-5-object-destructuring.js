// Exercise 5: Object Destructuring and Spread
// Complete the TODO sections below

console.log("💪 Exercise 5: Object Destructuring and Spread");
console.log("=============================================");

// Exercise 1: Basic Object Destructuring
console.log("\n1. Basic Object Destructuring:");
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    city: "New York",
    country: "USA"
};

// TODO: Destructure properties
let { name, age, email } = null; // Your code here
// Hint: person

console.log("Destructured properties:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);

// TODO: Destructure with different variable names
let { name: fullName, age: userAge, email: userEmail } = null; // Your code here
// Hint: person

console.log("Destructured with different names:");
console.log("Full name:", fullName);
console.log("User age:", userAge);
console.log("User email:", userEmail);

// TODO: Destructure with default values
let { name: userName, age: userAge2, phone = "No phone" } = null; // Your code here
// Hint: person

console.log("Destructured with defaults:");
console.log("User name:", userName);
console.log("User age:", userAge2);
console.log("Phone:", phone);

// Exercise 2: Nested Object Destructuring
console.log("\n2. Nested Object Destructuring:");
let user = {
    id: 1,
    personalInfo: {
        firstName: "John",
        lastName: "Doe",
        age: 30
    },
    contact: {
        email: "john@example.com",
        phone: "123-456-7890",
        address: {
            street: "123 Main St",
            city: "New York",
            zipCode: "10001"
        }
    }
};

// TODO: Destructure nested properties
let { 
    id, 
    personalInfo: { firstName, lastName, age: userAge3 },
    contact: { email: userEmail2, phone: userPhone },
    contact: { address: { street, city, zipCode } }
} = null; // Your code here
// Hint: user

console.log("Nested destructuring:");
console.log("ID:", id);
console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Age:", userAge3);
console.log("Email:", userEmail2);
console.log("Phone:", userPhone);
console.log("Street:", street);
console.log("City:", city);
console.log("Zip code:", zipCode);

// Exercise 3: Rest Parameters with Objects
console.log("\n3. Rest Parameters with Objects:");
// TODO: Destructure with rest operator
let { name: personName, age: personAge, ...rest } = null; // Your code here
// Hint: person

console.log("Destructuring with rest:");
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Rest:", rest);

// TODO: Create function with object destructuring and rest
function processUser({ name, age, ...otherInfo }) {
    // Your code here
    // Hint: console.log(`Processing user: ${name}, age ${age}`); console.log("Other info:", otherInfo); return { name, age, processed: true };
}

let result = null; // Your code here
// Hint: processUser(person)

console.log("Processed user:", result);

// Exercise 4: Spread Operator with Objects
console.log("\n4. Spread Operator with Objects:");
let originalObject = { a: 1, b: 2, c: 3 };

// TODO: Use spread operator to clone object
let spreadObject = null; // Your code here
// Hint: { ...originalObject }

console.log("Spread operator cloning:");
console.log("Original object:", originalObject);
console.log("Spread object:", spreadObject);
console.log("Are they equal?", originalObject === spreadObject);

// TODO: Use spread operator with additional properties
let extendedObject = null; // Your code here
// Hint: { ...originalObject, d: 4, e: 5 }

console.log("Extended object:", extendedObject);

// TODO: Use spread operator with property override
let overriddenObject = null; // Your code here
// Hint: { ...originalObject, b: 20, c: 30 }

console.log("Overridden object:", overriddenObject);

// TODO: Use spread operator with multiple objects
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let object3 = { e: 5, f: 6 };

let mergedObject = null; // Your code here
// Hint: { ...object1, ...object2, ...object3 }

console.log("Merged objects:", mergedObject);

// Exercise 5: Advanced Destructuring Patterns
console.log("\n5. Advanced Destructuring Patterns:");
// TODO: Create function with destructuring in parameters
function createUser({ name, age, email, ...additionalInfo }) {
    // Your code here
    // Hint: return { id: Date.now(), name, age, email, ...additionalInfo, createdAt: new Date().toISOString() };
}

let newUser = null; // Your code here
// Hint: createUser({ name: "Jane Smith", age: 25, email: "jane@example.com", city: "Los Angeles", country: "USA" })

console.log("Created user:", newUser);

// TODO: Destructure with computed property names
let key = "dynamicKey";
let objectWithComputed = {
    [key]: "dynamic value",
    staticKey: "static value"
};

let { [key]: dynamicValue, staticKey } = null; // Your code here
// Hint: objectWithComputed

console.log("Computed destructuring:");
console.log("Dynamic value:", dynamicValue);
console.log("Static key:", staticKey);

// Exercise 6: Object Cloning and Merging
console.log("\n6. Object Cloning and Merging:");
let original = { a: 1, b: { c: 2, d: 3 } };

// TODO: Shallow cloning
let shallowClone = null; // Your code here
// Hint: { ...original }

console.log("Shallow cloning:");
console.log("Original:", original);
console.log("Shallow clone:", shallowClone);
console.log("Same nested object?", original.b === shallowClone.b);

// TODO: Deep cloning using JSON
let deepClone = null; // Your code here
// Hint: JSON.parse(JSON.stringify(original))

console.log("Deep cloning with JSON:");
console.log("Deep clone:", deepClone);
console.log("Same nested object?", original.b === deepClone.b);

// TODO: Object merging
let defaultSettings = {
    theme: "light",
    language: "en",
    notifications: true,
    fontSize: 14
};

let userSettings = {
    theme: "dark",
    fontSize: 16,
    newFeature: true
};

let mergedSettings = null; // Your code here
// Hint: { ...defaultSettings, ...userSettings }

console.log("Settings merging:");
console.log("Default settings:", defaultSettings);
console.log("User settings:", userSettings);
console.log("Merged settings:", mergedSettings);

// Exercise 7: Destructuring in Loops and Iteration
console.log("\n7. Destructuring in Loops and Iteration:");
let users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 35, city: "Chicago" }
];

// TODO: Destructuring in for...of loop
console.log("Destructuring in loops:");
for (let { id, name, age, city } of null) { // Your code here
    // Hint: users
    console.log(`User ${id}: ${name}, age ${age}, from ${city}`);
}

// TODO: Destructuring in map
let userSummaries = null; // Your code here
// Hint: users.map(({ name, age, city }) => ({ summary: `${name} (${age}) from ${city}`, name, age }))

console.log("User summaries:", userSummaries);

// TODO: Destructuring in filter
let youngUsers = null; // Your code here
// Hint: users.filter(({ age }) => age < 30)

console.log("Young users:", youngUsers);

// TODO: Destructuring in reduce
let totalAge = null; // Your code here
// Hint: users.reduce((sum, { age }) => sum + age, 0)

console.log("Total age:", totalAge);

// Exercise 8: Best Practices and Common Patterns
console.log("\n8. Best Practices and Common Patterns:");
// TODO: Use destructuring for function parameters
function updateUser({ id, name, email, ...updates }) {
    // Your code here
    // Hint: console.log(`Updating user ${id}: ${name} (${email})`); return { id, name, email, ...updates, updatedAt: new Date().toISOString() };
}

let updatedUser = null; // Your code here
// Hint: updateUser({ id: 1, name: "John Doe", email: "john@example.com", age: 31, city: "New York" })

console.log("Updated user:", updatedUser);

// TODO: Use spread for object updates
function updateObjectProperty(obj, key, value) {
    // Your code here
    // Hint: return { ...obj, [key]: value };
}

let updatedObject = null; // Your code here
// Hint: updateObjectProperty(originalObject, 'b', 20)

console.log("Updated object property:", updatedObject);

// TODO: Use destructuring for default values
function createConfig({
    host = "localhost",
    port = 3000,
    timeout = 5000,
    retries = 3,
    ...otherOptions
} = {}) {
    // Your code here
    // Hint: return { host, port, timeout, retries, ...otherOptions };
}

let defaultConfig = null; // Your code here
// Hint: createConfig()

let customConfig = null; // Your code here
// Hint: createConfig({ host: "example.com", port: 8080, newOption: true })

console.log("Default config:", defaultConfig);
console.log("Custom config:", customConfig);

// TODO: Use spread for immutable updates
function addUser(users, newUser) {
    // Your code here
    // Hint: return [...users, { ...newUser, id: Date.now() }];
}

let newUsers = null; // Your code here
// Hint: addUser(users, { name: "Alice", age: 28, city: "Boston" })

console.log("Added user:", newUsers);

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced object destructuring and spread.");
console.log("Key concepts practiced:");
console.log("- Basic object destructuring");
console.log("- Nested object destructuring");
console.log("- Rest parameters with objects");
console.log("- Spread operator with objects");
console.log("- Advanced destructuring patterns");
console.log("- Object cloning and merging");
console.log("- Destructuring in loops and iteration");
console.log("- Best practices and common patterns");
console.log("- Function parameters with destructuring");
console.log("- Immutable updates with spread");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Object-Oriented Programming");
console.log("4. Ask questions if you need help");
