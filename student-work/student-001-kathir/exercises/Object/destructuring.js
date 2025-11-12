// Exercise 1: Basic Object Destructuring
console.log("\n1. Basic Object Destructuring:");

let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    city: "New York",
    country: "USA"
};
let { name, age, email } = person;

console.log("Destructured properties:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);

let { name: fullName, age: userAge, email: userEmail } = person;

console.log("Destructured with different names:");
console.log("Full name:", fullName);
console.log("User age:", userAge);
console.log("User email:", userEmail);

let { name: userName, age: userAge2, phone = "No phone" } = person;

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
let {
    id,
    personalInfo: { firstName, lastName, age: userAge3 },
    contact: { email: userEmail2, phone: userPhone, address: { street, city, zipCode } }
} = user;
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

let { name: personName, age: personAge, ...rest } = person;

console.log("Destructuring with rest:");
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Rest:", rest);

function processUser({ name, age, ...otherInfo }) {
    console.log(`Processing user: ${name}, age ${age}`);
    console.log("Other info:", otherInfo);
    return { name, age, processed: true };
}
let result = processUser(person);

console.log("Processed user:", result);

// Exercise 4: Spread Operator with Objects
console.log("\n4. Spread Operator with Objects:");

let originalObject = { a: 1, b: 2, c: 3 };
let spreadObject = { ...originalObject };

console.log("Spread operator cloning:");
console.log("Original object:", originalObject);
console.log("Spread object:", spreadObject);
console.log("Are they equal?", originalObject === spreadObject);

let extendedObject = { ...originalObject, d: 4, e: 5 };
console.log("Extended object:", extendedObject);

let overriddenObject = { ...originalObject, b: 20, c: 30 };
console.log("Overridden object:", overriddenObject);

let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let object3 = { e: 5, f: 6 };
let mergedObject = { ...object1, ...object2, ...object3 };
console.log("Merged objects:", mergedObject);

// Exercise 5: Advanced Destructuring Patterns
console.log("\n5. Advanced Destructuring Patterns:");

function createUser({ name, age, email, ...additionalInfo }) {
    return { id: Date.now(), name, age, email, ...additionalInfo, createdAt: new Date().toISOString() };
}
let newUser = createUser({ name: "Jane Smith", age: 25, email: "jane@example.com", city: "Los Angeles", country: "USA" });
console.log("Created user:", newUser);

let key = "dynamicKey";
let objectWithComputed = {
    [key]: "dynamic value",
    staticKey: "static value"
};
let { [key]: dynamicValue, staticKey } = objectWithComputed;

console.log("Computed destructuring:");
console.log("Dynamic value:", dynamicValue);
console.log("Static key:", staticKey);

// Exercise 6: Object Cloning and Merging
console.log("\n6. Object Cloning and Merging:");

let original = { a: 1, b: { c: 2, d: 3 } };
let shallowClone = { ...original };
console.log("Shallow cloning:");
console.log("Original:", original);
console.log("Shallow clone:", shallowClone);
console.log("Same nested object?", original.b === shallowClone.b);

let deepClone = JSON.parse(JSON.stringify(original));
console.log("Deep cloning with JSON:");
console.log("Deep clone:", deepClone);
console.log("Same nested object?", original.b === deepClone.b);

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
let mergedSettings = { ...defaultSettings, ...userSettings };

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
console.log("Destructuring in loops:");
for (let { id, name, age, city } of users) {
    console.log(`User ${id}: ${name}, age ${age}, from ${city}`);
}
let userSummaries = users.map(({ name, age, city }) => ({
    summary: `${name} (${age}) from ${city}`,
    name,
    age
}));
console.log("User summaries:", userSummaries);

let youngUsers = users.filter(({ age }) => age < 30);
console.log("Young users:", youngUsers);

let totalAge = users.reduce((sum, { age }) => sum + age, 0);
console.log("Total age:", totalAge);

// Exercise 8: Best Practices and Common Patterns
console.log("\n8. Best Practices and Common Patterns:");

function updateUser({ id, name, email, ...updates }) {
    console.log(`Updating user ${id}: ${name} (${email})`);
    return { id, name, email, ...updates, updatedAt: new Date().toISOString() };
}
let updatedUser = updateUser({ id: 1, name: "John Doe", email: "john@example.com", age: 31, city: "New York" });
console.log("Updated user:", updatedUser);

function updateObjectProperty(obj, key, value) {
    return { ...obj, [key]: value };
}
let updatedObject = updateObjectProperty(originalObject, 'b', 20);
console.log("Updated object property:", updatedObject);

function createConfig({
    host = "localhost",
    port = 3000,
    timeout = 5000,
    retries = 3,
    ...otherOptions
} = {}) {
    return { host, port, timeout, retries, ...otherOptions };
}
let defaultConfig = createConfig();
let customConfig = createConfig({ host: "example.com", port: 8080, newOption: true });

console.log("Default config:", defaultConfig);
console.log("Custom config:", customConfig);

function addUser(users, newUser) {
    return [...users, { ...newUser, id: Date.now() }];
}
let newUsers = addUser(users, { name: "Alice", age: 28, city: "Boston" });
console.log("Added user:", newUsers);