// Lesson 4: Random Numbers
// This file teaches random number generation and applications

console.log("🔢 Welcome to Numbers Lesson 4: Random Numbers!");
console.log("==============================================");

// 1. Basic Random Number Generation
console.log("\n📚 1. Basic Random Number Generation");
console.log("----------------------------------");

console.log("Math.random() generates numbers between 0 and 1:");
for (let i = 0; i < 5; i++) {
    console.log(`Random ${i + 1}:`, Math.random());
}

// 2. Random Numbers in Different Ranges
console.log("\n📚 2. Random Numbers in Different Ranges");
console.log("--------------------------------------");

// Random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random float between min and max
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("Random integers between 1 and 10:");
for (let i = 0; i < 5; i++) {
    console.log(`Random int ${i + 1}:`, randomInt(1, 10));
}

console.log("Random floats between 0 and 100:");
for (let i = 0; i < 5; i++) {
    console.log(`Random float ${i + 1}:`, randomFloat(0, 100).toFixed(2));
}

// 3. Random Number Distributions
console.log("\n📚 3. Random Number Distributions");
console.log("--------------------------------");

// Uniform distribution
function uniformDistribution(min, max, count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.random() * (max - min) + min);
    }
    return numbers;
}

// Normal distribution (Box-Muller transform)
function normalDistribution(mean, stdDev, count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let u1 = Math.random();
        let u2 = Math.random();
        let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        numbers.push(z0 * stdDev + mean);
    }
    return numbers;
}

// Exponential distribution
function exponentialDistribution(lambda, count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let u = Math.random();
        numbers.push(-Math.log(1 - u) / lambda);
    }
    return numbers;
}

console.log("Random number distributions:");
console.log("Uniform distribution (0-10):", uniformDistribution(0, 10, 5));
console.log("Normal distribution (mean=5, std=2):", normalDistribution(5, 2, 5));
console.log("Exponential distribution (λ=1):", exponentialDistribution(1, 5));

// 4. Seeded Random Numbers
console.log("\n📚 4. Seeded Random Numbers");
console.log("-------------------------");

// Simple Linear Congruential Generator
class SeededRandom {
    constructor(seed) {
        this.seed = seed;
        this.a = 1664525;
        this.c = 1013904223;
        this.m = Math.pow(2, 32);
    }
    
    next() {
        this.seed = (this.a * this.seed + this.c) % this.m;
        return this.seed / this.m;
    }
    
    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
    
    nextFloat(min, max) {
        return this.next() * (max - min) + min;
    }
}

// Test seeded random
let seededRng = new SeededRandom(12345);
console.log("Seeded random numbers (seed=12345):");
for (let i = 0; i < 5; i++) {
    console.log(`Seeded ${i + 1}:`, seededRng.next().toFixed(4));
}

// Same seed should produce same sequence
let seededRng2 = new SeededRandom(12345);
console.log("Same seed produces same sequence:");
for (let i = 0; i < 3; i++) {
    console.log(`RNG1: ${seededRng.next().toFixed(4)}, RNG2: ${seededRng2.next().toFixed(4)}`);
}

// 5. Random Array Operations
console.log("\n📚 5. Random Array Operations");
console.log("----------------------------");

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Pick random element from array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Pick multiple random elements
function randomSample(array, count) {
    let shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Random array operations:");
console.log("Original array:", testArray);
console.log("Shuffled array:", shuffleArray(testArray));
console.log("Random choice:", randomChoice(testArray));
console.log("Random sample (3):", randomSample(testArray, 3));

// 6. Random String Generation
console.log("\n📚 6. Random String Generation");
console.log("-----------------------------");

// Generate random string
function generateRandomString(length, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
}

// Generate random password
function generatePassword(length = 12, includeSymbols = true) {
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (includeSymbols) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    return generateRandomString(length, charset);
}

// Generate random color
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log("Random string generation:");
console.log("Random string (10 chars):", generateRandomString(10));
console.log("Random password:", generatePassword());
console.log("Random color:", generateRandomColor());

// 7. Game Development Examples
console.log("\n📚 7. Game Development Examples");
console.log("-----------------------------");

// Dice rolling
function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

// Card dealing
class CardDeck {
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.cards = [];
        this.initializeDeck();
    }
    
    initializeDeck() {
        this.cards = [];
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.cards.push({ suit, rank });
            }
        }
    }
    
    shuffle() {
        this.cards = shuffleArray(this.cards);
    }
    
    deal(count = 1) {
        return this.cards.splice(0, count);
    }
    
    reset() {
        this.initializeDeck();
    }
}

// Test game examples
console.log("Game development examples:");
console.log("Dice rolls:");
for (let i = 0; i < 5; i++) {
    console.log(`Roll ${i + 1}:`, rollDice());
}

console.log("Card dealing:");
let deck = new CardDeck();
deck.shuffle();
console.log("Dealt cards:", deck.deal(5));

// 8. Random Data Generation
console.log("\n📚 8. Random Data Generation");
console.log("----------------------------");

// Generate random user data
function generateRandomUser() {
    let firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    let lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    let domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    
    return {
        firstName: randomChoice(firstNames),
        lastName: randomChoice(lastNames),
        email: `${randomChoice(firstNames).toLowerCase()}.${randomChoice(lastNames).toLowerCase()}@${randomChoice(domains)}`,
        age: randomInt(18, 65),
        salary: randomInt(30000, 100000),
        department: randomChoice(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'])
    };
}

// Generate random product data
function generateRandomProduct() {
    let categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'];
    let brands = ['BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE'];
    
    return {
        id: randomInt(1000, 9999),
        name: `Product ${randomInt(1, 1000)}`,
        category: randomChoice(categories),
        brand: randomChoice(brands),
        price: randomFloat(10, 1000).toFixed(2),
        stock: randomInt(0, 100),
        rating: randomFloat(1, 5).toFixed(1)
    };
}

console.log("Random data generation:");
console.log("Random user:", generateRandomUser());
console.log("Random product:", generateRandomProduct());

// 9. Random Number Testing and Validation
console.log("\n📚 9. Random Number Testing and Validation");
console.log("----------------------------------------");

// Test randomness quality
function testRandomness(count = 1000) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.random());
    }
    
    // Calculate statistics
    let sum = numbers.reduce((a, b) => a + b, 0);
    let mean = sum / count;
    let variance = numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / count;
    let stdDev = Math.sqrt(variance);
    
    // Count numbers in different ranges
    let ranges = {
        '0.0-0.2': 0,
        '0.2-0.4': 0,
        '0.4-0.6': 0,
        '0.6-0.8': 0,
        '0.8-1.0': 0
    };
    
    numbers.forEach(num => {
        if (num < 0.2) ranges['0.0-0.2']++;
        else if (num < 0.4) ranges['0.2-0.4']++;
        else if (num < 0.6) ranges['0.4-0.6']++;
        else if (num < 0.8) ranges['0.6-0.8']++;
        else ranges['0.8-1.0']++;
    });
    
    return {
        count,
        mean: mean.toFixed(4),
        variance: variance.toFixed(4),
        stdDev: stdDev.toFixed(4),
        distribution: ranges
    };
}

let randomnessTest = testRandomness(1000);
console.log("Randomness test results:");
console.log("Count:", randomnessTest.count);
console.log("Mean:", randomnessTest.mean);
console.log("Variance:", randomnessTest.variance);
console.log("Standard deviation:", randomnessTest.stdDev);
console.log("Distribution:");
Object.entries(randomnessTest.distribution).forEach(([range, count]) => {
    console.log(`  ${range}: ${count} (${(count/1000*100).toFixed(1)}%)`);
});

// 10. Practical Example: Random Number Generator Class
console.log("\n📚 10. Practical Example: Random Number Generator Class");
console.log("-----------------------------------------------------");

class RandomNumberGenerator {
    constructor(seed = null) {
        this.seed = seed || Date.now();
        this.isSeeded = seed !== null;
        this.a = 1664525;
        this.c = 1013904223;
        this.m = Math.pow(2, 32);
    }
    
    // Generate next random number
    next() {
        if (this.isSeeded) {
            this.seed = (this.a * this.seed + this.c) % this.m;
            return this.seed / this.m;
        } else {
            return Math.random();
        }
    }
    
    // Generate random integer
    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
    
    // Generate random float
    nextFloat(min, max) {
        return this.next() * (max - min) + min;
    }
    
    // Generate random boolean
    nextBoolean() {
        return this.next() < 0.5;
    }
    
    // Generate random choice from array
    nextChoice(array) {
        return array[Math.floor(this.next() * array.length)];
    }
    
    // Generate random sample from array
    nextSample(array, count) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(this.next() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
    }
    
    // Generate random string
    nextString(length, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(this.next() * charset.length));
        }
        return result;
    }
    
    // Generate random color
    nextColor() {
        let r = Math.floor(this.next() * 256);
        let g = Math.floor(this.next() * 256);
        let b = Math.floor(this.next() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    // Reset seed
    resetSeed(newSeed) {
        this.seed = newSeed;
        this.isSeeded = true;
    }
}

// Test random number generator
let rng = new RandomNumberGenerator(12345);
console.log("Random Number Generator examples:");
console.log("Random float:", rng.nextFloat(0, 100).toFixed(2));
console.log("Random int:", rng.nextInt(1, 10));
console.log("Random boolean:", rng.nextBoolean());
console.log("Random choice:", rng.nextChoice(['red', 'green', 'blue']));
console.log("Random string:", rng.nextString(8));
console.log("Random color:", rng.nextColor());

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Math.random() generates numbers between 0 and 1");
console.log("- Use Math.floor() and scaling to get integers in ranges");
console.log("- Seeded random numbers are reproducible");
console.log("- Different distributions serve different purposes");
console.log("- Random numbers are useful for games, simulations, and testing");
console.log("- Always validate randomness quality for critical applications");
console.log("- Consider using cryptographic random numbers for security");

console.log("\n📝 Practice Exercises:");
console.log("1. Generate random numbers in different ranges");
console.log("2. Create a dice rolling game");
console.log("3. Implement a card shuffling algorithm");
console.log("4. Generate random test data");
console.log("5. Build a random password generator");
