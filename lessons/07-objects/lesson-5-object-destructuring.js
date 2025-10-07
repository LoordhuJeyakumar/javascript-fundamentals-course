// Lesson 5: Object Destructuring and Spread
// Understanding object destructuring, spread operator, and rest parameters

console.log("📚 Lesson 5: Object Destructuring and Spread");
console.log("===========================================");

// 📚 1. Object Destructuring Syntax
console.log("\n📚 1. Object Destructuring Syntax");
console.log("--------------------------------");

// Basic object destructuring
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    city: "New York",
    country: "USA"
};

// Destructure properties
let { name, age, email } = person;
console.log("Destructured properties:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);

// Destructure with different variable names
let { name: fullName, age: userAge, email: userEmail } = person;
console.log("Destructured with different names:");
console.log("Full name:", fullName);
console.log("User age:", userAge);
console.log("User email:", userEmail);

// Destructure with default values
let { name: userName, age: userAge2, phone = "No phone" } = person;
console.log("Destructured with defaults:");
console.log("User name:", userName);
console.log("User age:", userAge2);
console.log("Phone:", phone);

// 📚 2. Nested Object Destructuring
console.log("\n📚 2. Nested Object Destructuring");
console.log("--------------------------------");

// Object with nested properties
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
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: true
    }
};

// Destructure nested properties
let { 
    id, 
    personalInfo: { firstName, lastName, age: userAge3 },
    contact: { email: userEmail2, phone: userPhone },
    contact: { address: { street, city, zipCode } }
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

// Destructure with nested defaults
let { 
    personalInfo: { firstName: fName = "Unknown", middleName = "N/A" },
    contact: { email: email2 = "no-email@example.com" }
} = user;

console.log("Nested destructuring with defaults:");
console.log("First name:", fName);
console.log("Middle name:", middleName);
console.log("Email:", email2);

// 📚 3. Rest Parameters with Objects
console.log("\n📚 3. Rest Parameters with Objects");
console.log("---------------------------------");

// Destructure with rest operator
let { name: personName, age: personAge, ...rest } = person;
console.log("Destructuring with rest:");
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Rest:", rest);

// Function with object destructuring and rest
function processUser({ name, age, ...otherInfo }) {
    console.log(`Processing user: ${name}, age ${age}`);
    console.log("Other info:", otherInfo);
    return { name, age, processed: true };
}

let result = processUser(person);
console.log("Processed user:", result);

// Function with nested destructuring
function processUserDetailed({ 
    personalInfo: { firstName, lastName }, 
    contact: { email }, 
    ...rest 
}) {
    console.log(`Processing: ${firstName} ${lastName} (${email})`);
    console.log("Additional info:", rest);
    return { firstName, lastName, email, processed: true };
}

let detailedResult = processUserDetailed(user);
console.log("Detailed processed user:", detailedResult);

// 📚 4. Spread Operator with Objects
console.log("\n📚 4. Spread Operator with Objects");
console.log("---------------------------------");

// Basic spread operator
let originalObject = { a: 1, b: 2, c: 3 };
let spreadObject = { ...originalObject };
console.log("Original object:", originalObject);
console.log("Spread object:", spreadObject);
console.log("Are they equal?", originalObject === spreadObject); // false - different objects

// Spread with additional properties
let extendedObject = { ...originalObject, d: 4, e: 5 };
console.log("Extended object:", extendedObject);

// Spread with property override
let overriddenObject = { ...originalObject, b: 20, c: 30 };
console.log("Overridden object:", overriddenObject);

// Spread with multiple objects
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let object3 = { e: 5, f: 6 };

let mergedObject = { ...object1, ...object2, ...object3 };
console.log("Merged objects:", mergedObject);

// Spread with property conflicts (later objects override earlier ones)
let conflictObject1 = { a: 1, b: 2, c: 3 };
let conflictObject2 = { b: 20, c: 30, d: 4 };

let conflictMerged = { ...conflictObject1, ...conflictObject2 };
console.log("Conflict merged:", conflictMerged);

// 📚 5. Advanced Destructuring Patterns
console.log("\n📚 5. Advanced Destructuring Patterns");
console.log("-----------------------------------");

// Destructuring in function parameters
function createUser({ name, age, email, ...additionalInfo }) {
    return {
        id: Date.now(),
        name,
        age,
        email,
        ...additionalInfo,
        createdAt: new Date().toISOString()
    };
}

let newUser = createUser({
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    city: "Los Angeles",
    country: "USA"
});

console.log("Created user:", newUser);

// Destructuring with computed property names
let key = "dynamicKey";
let objectWithComputed = {
    [key]: "dynamic value",
    staticKey: "static value"
};

let { [key]: dynamicValue, staticKey } = objectWithComputed;
console.log("Computed destructuring:");
console.log("Dynamic value:", dynamicValue);
console.log("Static key:", staticKey);

// Destructuring with array-like objects
let arrayLikeObject = {
    0: "first",
    1: "second",
    2: "third",
    length: 3
};

let { 0: first, 1: second, 2: third } = arrayLikeObject;
console.log("Array-like destructuring:");
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// 📚 6. Practical Examples
console.log("\n📚 6. Practical Examples");
console.log("----------------------");

// API response handling
let apiResponse = {
    status: "success",
    data: {
        users: [
            { id: 1, name: "John", email: "john@example.com" },
            { id: 2, name: "Jane", email: "jane@example.com" }
        ],
        pagination: {
            page: 1,
            limit: 10,
            total: 2
        }
    },
    message: "Users retrieved successfully"
};

// Destructure API response
let { 
    status, 
    data: { users, pagination }, 
    message 
} = apiResponse;

console.log("API response destructuring:");
console.log("Status:", status);
console.log("Users:", users);
console.log("Pagination:", pagination);
console.log("Message:", message);

// Configuration object handling
let config = {
    database: {
        host: "localhost",
        port: 5432,
        name: "myapp",
        credentials: {
            username: "admin",
            password: "secret"
        }
    },
    server: {
        port: 3000,
        host: "0.0.0.0"
    },
    features: {
        logging: true,
        caching: false,
        analytics: true
    }
};

// Destructure configuration
let { 
    database: { 
        host: dbHost, 
        port: dbPort, 
        name: dbName,
        credentials: { username: dbUser, password: dbPass }
    },
    server: { port: serverPort, host: serverHost },
    features: { logging, caching, analytics }
} = config;

console.log("Configuration destructuring:");
console.log("Database host:", dbHost);
console.log("Database port:", dbPort);
console.log("Database name:", dbName);
console.log("Database user:", dbUser);
console.log("Server port:", serverPort);
console.log("Server host:", serverHost);
console.log("Logging enabled:", logging);
console.log("Caching enabled:", caching);
console.log("Analytics enabled:", analytics);

// 📚 7. Object Cloning and Merging
console.log("\n📚 7. Object Cloning and Merging");
console.log("-------------------------------");

// Shallow cloning
let original = { a: 1, b: { c: 2, d: 3 } };
let shallowClone = { ...original };

console.log("Shallow cloning:");
console.log("Original:", original);
console.log("Shallow clone:", shallowClone);
console.log("Same nested object?", original.b === shallowClone.b); // true

// Deep cloning (simple approach)
let deepClone = JSON.parse(JSON.stringify(original));
console.log("Deep cloning:");
console.log("Deep clone:", deepClone);
console.log("Same nested object?", original.b === deepClone.b); // false

// Object merging
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

// 📚 8. Destructuring in Loops and Iteration
console.log("\n📚 8. Destructuring in Loops and Iteration");
console.log("----------------------------------------");

// Array of objects
let usersArray = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 35, city: "Chicago" }
];

// Destructuring in for...of loop
console.log("Destructuring in loops:");
for (let { id, name, age, city } of usersArray) {
    console.log(`User ${id}: ${name}, age ${age}, from ${city}`);
}

// Destructuring in map
let userSummaries = usersArray.map(({ name, age, city }) => ({
    summary: `${name} (${age}) from ${city}`,
    name,
    age
}));

console.log("User summaries:", userSummaries);

// Destructuring in filter
let youngUsers = usersArray.filter(({ age }) => age < 30);
console.log("Young users:", youngUsers);

// Destructuring in reduce
let totalAge = usersArray.reduce((sum, { age }) => sum + age, 0);
console.log("Total age:", totalAge);

// 📚 9. Best Practices and Common Patterns
console.log("\n📚 9. Best Practices and Common Patterns");
console.log("--------------------------------------");

// Use destructuring for function parameters
function updateUser({ id, name, email, ...updates }) {
    console.log(`Updating user ${id}: ${name} (${email})`);
    return {
        id,
        name,
        email,
        ...updates,
        updatedAt: new Date().toISOString()
    };
}

let updatedUser = updateUser({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 31,
    city: "New York"
});

console.log("Updated user:", updatedUser);

// Use spread for object updates
function updateObjectProperty(obj, key, value) {
    return { ...obj, [key]: value };
}

let updatedObject = updateObjectProperty(originalObject, 'b', 20);
console.log("Updated object property:", updatedObject);

// Use destructuring for default values
function createConfig({
    host = "localhost",
    port = 3000,
    timeout = 5000,
    retries = 3,
    ...otherOptions
} = {}) {
    return {
        host,
        port,
        timeout,
        retries,
        ...otherOptions
    };
}

let defaultConfig = createConfig();
let customConfig = createConfig({ host: "example.com", port: 8080, newOption: true });

console.log("Default config:", defaultConfig);
console.log("Custom config:", customConfig);

// Use spread for immutable updates
function addUser(users, newUser) {
    return [...users, { ...newUser, id: Date.now() }];
}

let newUsers = addUser(usersArray, { name: "Alice", age: 28, city: "Boston" });
console.log("Added user:", newUsers);

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Object destructuring extracts properties into variables");
console.log("- Use different variable names with destructuring");
console.log("- Default values provide fallbacks for missing properties");
console.log("- Spread operator creates new objects with existing properties");
console.log("- Rest operator collects remaining properties");
console.log("- Destructuring works with nested objects and arrays");
console.log("- Use destructuring in function parameters for cleaner code");
console.log("- Spread operator is useful for object cloning and merging");

console.log("\n📝 Practice Exercises:");
console.log("1. Practice basic object destructuring");
console.log("2. Use destructuring with nested objects");
console.log("3. Practice spread operator with objects");
console.log("4. Use destructuring in function parameters");
console.log("5. Practice object cloning and merging");
