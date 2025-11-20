// Exercise 1: Generate random integers in a range
console.log("\n1. Random Integers in Range:");

function randomInt(min, max) {
    if (min > max) [min, max] = [max, min]; // swap if needed
    if (min === max) return min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random int between 1 and 10:", randomInt(1, 10));
console.log("Random int between 0 and 100:", randomInt(0, 100));
console.log("Random int between -5 and 5:", randomInt(-5, 5));
console.log("Random int between 5 and 5:", randomInt(5, 5));

// Exercise 2: Generate random floating-point numbers
console.log("\n2. Random Floating-Point Numbers:");

function randomFloat(min, max, decimalPlaces = 2) {
    if (min > max) [min, max] = [max, min];
    let value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(decimalPlaces));
}
console.log("Random float between 0 and 1 (2 decimals):", randomFloat(0, 1, 2));
console.log("Random float between 10 and 20 (1 decimal):", randomFloat(10, 20, 1));
console.log("Random float between -1 and 1 (3 decimals):", randomFloat(-1, 1, 3));

// Exercise 3: Generate random boolean values
console.log("\n3. Random Boolean Values:");

function randomBoolean(probability = 0.5) {
    if (probability < 0) probability = 0;
    if (probability > 1) probability = 1;
    return Math.random() < probability;
}
console.log("Random boolean (50% chance):", randomBoolean());
console.log("Random boolean (25% chance):", randomBoolean(0.25));
console.log("Random boolean (75% chance):", randomBoolean(0.75));
console.log("Random boolean (100% chance):", randomBoolean(1));

// Exercise 4: Generate random strings
console.log("\n4. Random Strings:");

function randomString(length, characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length);
        result += characterSet[randomIndex];
    }
    return result;
}
console.log("Random string (10 chars, alphanumeric):", randomString(10));
console.log("Random string (8 chars, numbers only):", randomString(8, "0123456789"));
console.log("Random string (6 chars, letters only):", randomString(6, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"));

// Exercise 5: Generate random colors
console.log("\n5. Random Colors:");

function randomColor(format = 'hex') {
    if (format === 'hex') {
        let hex = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + hex.padStart(6, '0');
    } else if (format === 'rgb') {
        let r = randomInt(0, 255);
        let g = randomInt(0, 255);
        let b = randomInt(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    } else if (format === 'hsl') {
        let h = randomInt(0, 360);
        let s = randomInt(0, 100);
        let l = randomInt(0, 100);
        return `hsl(${h}, ${s}%, ${l}%)`;
    } else {
        return "Invalid format";
    }
}
console.log("Random hex color:", randomColor('hex'));
console.log("Random RGB color:", randomColor('rgb'));
console.log("Random HSL color:", randomColor('hsl'));

// Exercise 6: Generate random arrays
console.log("\n6. Random Arrays:");

function randomArray(length, min = 0, max = 100, unique = false) {
    let result = [];
    if (unique) {
        let set = new Set();
        while (set.size < length) {
            set.add(randomInt(min, max));
            if (set.size > (max - min + 1)) break; // avoid infinite loop
        }
        result = Array.from(set);
    } else {
        for (let i = 0; i < length; i++) {
            result.push(randomInt(min, max));
        }
    }
    return result;
}
console.log("Random array (5 elements, 1-10):", randomArray(5, 1, 10));
console.log("Random array (3 elements, -5 to 5):", randomArray(3, -5, 5));
console.log("Random unique array (5 elements, 1-10):", randomArray(5, 1, 10, true));

// Exercise 7: Generate random passwords
console.log("\n7. Random Passwords:");

function generatePassword(length = 12, options = {}) {
    const {
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
        includeSymbols = true
    } = options;

    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    if (charset.length === 0) charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return randomString(length, charset);
}
let passwordOptions = {
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
};
console.log("Random password (12 chars, all options):", generatePassword(12, passwordOptions));
console.log("Random password (8 chars, letters only):", generatePassword(8, { includeUppercase: true, includeLowercase: true }));

// Exercise 8: Generate random data for testing
console.log("\n8. Random Test Data:");

function generateTestData(schema) {
    let result = {};
    for (let key in schema) {
        let field = schema[key];
        switch (field.type) {
            case 'number':
                result[key] = randomFloat(field.min ?? 0, field.max ?? 100, field.decimals ?? 0);
                break;
            case 'string':
                let base = randomString(field.length ?? 8);
                result[key] = field.suffix ? base + field.suffix : base;
                break;
            case 'boolean':
                result[key] = randomBoolean();
                break;
            case 'array':
                result[key] = randomArray(field.length ?? 5, field.min ?? 0, field.max ?? 10, field.unique ?? false);
                break;
            default:
                result[key] = null;
        }
    }
    return result;
}
let userSchema = {
    id: { type: 'number', min: 1, max: 1000 },
    name: { type: 'string', length: 8 },
    email: { type: 'string', length: 10, suffix: '@example.com' },
    age: { type: 'number', min: 18, max: 65 },
    isActive: { type: 'boolean' }
};
console.log("Random user data:", generateTestData(userSchema));