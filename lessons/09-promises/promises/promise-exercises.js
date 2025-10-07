/* 
==========================================
PROMISE PRACTICE EXERCISES
==========================================

This file contains hands-on exercises to practice Promises.
Complete each exercise to master Promise concepts.

Instructions:
1. Read each exercise carefully
2. Implement the solution
3. Test your code
4. Check the expected output
5. Move to the next exercise

Difficulty levels:
🟢 Beginner
🟡 Intermediate  
🔴 Advanced
*/

console.log("🏋️ Welcome to Promise Practice Exercises!");
console.log("Complete each exercise to master Promises!\n");

/* 
==========================================
EXERCISE 1: BASIC PROMISE CREATION
==========================================
Difficulty: 🟢 Beginner

Task: Create a Promise that simulates downloading a file.
The Promise should:
- Take a filename and size as parameters
- Simulate download progress
- Resolve with file info when complete
- Reject if file size is invalid

Expected output:
📥 Starting download: document.pdf (5MB)
📊 Download progress: 10%
📊 Download progress: 20%
...
📊 Download progress: 100%
✅ Download completed: { filename: 'document.pdf', size: 5, downloadedAt: '...' }
*/

console.log("📝 Exercise 1: Basic Promise Creation");
console.log("Create a file download Promise\n");

// TODO: Implement downloadFile function
function downloadFile(filename, size) {
    // Your implementation here
}

// Test your implementation
downloadFile("document.pdf", 5)
    .then(result => {
        console.log("✅ Download completed:", result);
    })
    .catch(error => {
        console.log("❌ Download failed:", error);
    });

/* 
==========================================
EXERCISE 2: PROMISE CHAINING
==========================================
Difficulty: 🟢 Beginner

Task: Create a chain of operations that:
1. Fetches user data
2. Gets user's posts
3. Gets comments for the first post
4. Calculates total engagement

Expected output:
👤 Fetching user data for ID: 123
✅ User data retrieved: { id: 123, name: 'John Doe', email: 'john@example.com' }
📝 Fetching posts for user: 123
✅ Posts retrieved: 3 posts found
💬 Fetching comments for post: 1
✅ Comments retrieved: 5 comments found
📊 Total engagement: 8
*/

console.log("\n📝 Exercise 2: Promise Chaining");
console.log("Create a chain of user data operations\n");

// TODO: Implement the chain
async function processUserEngagement(userId) {
    // Your implementation here
}

// Test your implementation
processUserEngagement(123)
    .then(result => {
        console.log("📊 Total engagement:", result);
    })
    .catch(error => {
        console.log("❌ Error processing engagement:", error);
    });

/* 
==========================================
EXERCISE 3: ERROR HANDLING
==========================================
Difficulty: 🟡 Intermediate

Task: Create a robust data fetching function that:
- Fetches data from multiple sources
- Handles different types of errors
- Provides fallback data when possible
- Uses try/catch for error handling

Expected output:
🔄 Fetching data from multiple sources...
✅ Source 1: Data loaded successfully
❌ Source 2: Network timeout
✅ Source 3: Data loaded successfully
📊 Results: 2/3 sources successful
🔄 Using fallback data for failed sources
✅ All data processed successfully
*/

console.log("\n📝 Exercise 3: Error Handling");
console.log("Create robust error handling\n");

// TODO: Implement robust data fetching
async function fetchDataWithFallback() {
    // Your implementation here
}

// Test your implementation
fetchDataWithFallback()
    .then(result => {
        console.log("✅ Final result:", result);
    })
    .catch(error => {
        console.log("❌ Unexpected error:", error);
    });

/* 
==========================================
EXERCISE 4: PARALLEL PROCESSING
==========================================
Difficulty: 🟡 Intermediate

Task: Create a function that loads multiple resources in parallel:
- Use Promise.all() for parallel execution
- Handle partial failures with Promise.allSettled()
- Implement a timeout mechanism
- Show performance comparison

Expected output:
🔄 Loading resources in parallel...
⏱️ Sequential time: 3000ms
⏱️ Parallel time: 1000ms
✅ Parallel execution is 3x faster!
📊 Results: 4/5 resources loaded successfully
*/

console.log("\n📝 Exercise 4: Parallel Processing");
console.log("Implement parallel resource loading\n");

// TODO: Implement parallel processing
async function loadResourcesParallel() {
    // Your implementation here
}

// Test your implementation
loadResourcesParallel()
    .then(result => {
        console.log("✅ Parallel loading completed:", result);
    })
    .catch(error => {
        console.log("❌ Parallel loading failed:", error);
    });

/* 
==========================================
EXERCISE 5: RETRY MECHANISM
==========================================
Difficulty: 🟡 Intermediate

Task: Implement a retry mechanism that:
- Retries failed operations up to 3 times
- Uses exponential backoff (1s, 2s, 4s)
- Handles different error types
- Provides detailed retry information

Expected output:
🔄 Attempt 1/3: Fetching data...
❌ Attempt 1 failed: Network error
⏳ Waiting 1000ms before retry...
🔄 Attempt 2/3: Fetching data...
❌ Attempt 2 failed: Network error
⏳ Waiting 2000ms before retry...
🔄 Attempt 3/3: Fetching data...
✅ Success on attempt 3!
*/

console.log("\n📝 Exercise 5: Retry Mechanism");
console.log("Implement retry with exponential backoff\n");

// TODO: Implement retry mechanism
async function fetchWithRetry(url, maxRetries = 3) {
    // Your implementation here
}

// Test your implementation
fetchWithRetry("https://api.example.com/data", 3)
    .then(result => {
        console.log("✅ Data fetched successfully:", result);
    })
    .catch(error => {
        console.log("❌ All retry attempts failed:", error);
    });

/* 
==========================================
EXERCISE 6: TIMEOUT HANDLING
==========================================
Difficulty: 🟡 Intermediate

Task: Create a timeout mechanism that:
- Fetches data with a timeout limit
- Uses Promise.race() for timeout handling
- Provides different timeout messages
- Handles cleanup operations

Expected output:
⏱️ Fetching data with 3 second timeout...
🔄 Data fetch in progress...
⏰ Request timed out after 3000ms
🧹 Cleaning up resources...
*/

console.log("\n📝 Exercise 6: Timeout Handling");
console.log("Implement timeout mechanism\n");

// TODO: Implement timeout handling
async function fetchWithTimeout(url, timeoutMs = 3000) {
    // Your implementation here
}

// Test your implementation
fetchWithTimeout("https://slow-api.example.com/data", 2000)
    .then(result => {
        console.log("✅ Data fetched:", result);
    })
    .catch(error => {
        console.log("❌ Request failed:", error);
    });

/* 
==========================================
EXERCISE 7: CACHING WITH PROMISES
==========================================
Difficulty: 🔴 Advanced

Task: Implement a caching system that:
- Caches API responses
- Handles cache expiration
- Manages cache size limits
- Provides cache statistics

Expected output:
🔄 Fetching data for key: user_123
💾 Data not in cache, fetching from API...
✅ Data fetched and cached
🔄 Fetching data for key: user_123
💾 Data found in cache!
📊 Cache stats: { hits: 1, misses: 1, size: 1 }
*/

console.log("\n📝 Exercise 7: Caching with Promises");
console.log("Implement a Promise-based caching system\n");

// TODO: Implement caching system
class PromiseCache {
    constructor(maxSize = 100, ttl = 300000) { // 5 minutes default TTL
        // Your implementation here
    }
    
    async get(key) {
        // Your implementation here
    }
    
    set(key, value) {
        // Your implementation here
    }
    
    getStats() {
        // Your implementation here
    }
}

// Test your implementation
const cache = new PromiseCache(10, 5000); // 5 second TTL

async function testCache() {
    // Test cache miss
    const data1 = await cache.get("user_123");
    console.log("First fetch:", data1);
    
    // Test cache hit
    const data2 = await cache.get("user_123");
    console.log("Second fetch:", data2);
    
    // Show cache stats
    console.log("Cache stats:", cache.getStats());
}

testCache();

/* 
==========================================
EXERCISE 8: BATCH PROCESSING
==========================================
Difficulty: 🔴 Advanced

Task: Create a batch processing system that:
- Processes items in batches
- Handles batch failures gracefully
- Implements progress tracking
- Provides batch statistics

Expected output:
🔄 Processing 100 items in batches of 10...
📦 Batch 1/10: Processing items 1-10
✅ Batch 1 completed: 10/10 successful
📦 Batch 2/10: Processing items 11-20
❌ Batch 2 failed: 8/10 successful
📦 Batch 3/10: Processing items 21-30
...
📊 Final results: 95/100 items processed successfully
*/

console.log("\n📝 Exercise 8: Batch Processing");
console.log("Implement batch processing system\n");

// TODO: Implement batch processing
async function processBatch(items, batchSize = 10, maxConcurrency = 3) {
    // Your implementation here
}

// Test your implementation
const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, data: `Item ${i + 1}` }));

processBatch(items, 10, 3)
    .then(result => {
        console.log("✅ Batch processing completed:", result);
    })
    .catch(error => {
        console.log("❌ Batch processing failed:", error);
    });

/* 
==========================================
EXERCISE 9: REAL-WORLD E-COMMERCE SCENARIO
==========================================
Difficulty: 🔴 Advanced

Task: Build a complete e-commerce order processing system:
- User authentication
- Product validation
- Inventory checking
- Payment processing
- Order confirmation
- Email notifications

Expected output:
🔐 Authenticating user...
✅ User authenticated: john@example.com
🛒 Validating order...
✅ Order validated: 3 items
📦 Checking inventory...
✅ Inventory available: All items in stock
💳 Processing payment...
✅ Payment successful: $299.97
📧 Sending confirmation email...
✅ Order confirmed: ORD-12345
*/

console.log("\n📝 Exercise 9: E-commerce Order Processing");
console.log("Build complete order processing system\n");

// TODO: Implement e-commerce order processing
async function processOrder(orderData) {
    // Your implementation here
}

// Test your implementation
const orderData = {
    userId: "user_123",
    items: [
        { id: 1, name: "Laptop", price: 999, quantity: 1 },
        { id: 2, name: "Mouse", price: 25, quantity: 2 },
        { id: 3, name: "Keyboard", price: 75, quantity: 1 }
    ],
    payment: {
        method: "credit_card",
        amount: 1124
    },
    shipping: {
        address: "123 Main St, City, State 12345"
    }
};

processOrder(orderData)
    .then(result => {
        console.log("✅ Order processed successfully:", result);
    })
    .catch(error => {
        console.log("❌ Order processing failed:", error);
    });

/* 
==========================================
EXERCISE 10: PROMISE UTILITIES
==========================================
Difficulty: 🔴 Advanced

Task: Create utility functions for common Promise operations:
- Promise.delay() - Create a delay
- Promise.retry() - Retry with backoff
- Promise.timeout() - Add timeout to any Promise
- Promise.sequence() - Run Promises in sequence
- Promise.parallel() - Run Promises in parallel with concurrency limit

Expected output:
⏳ Creating 2 second delay...
✅ Delay completed
🔄 Retrying operation (attempt 1/3)...
❌ Attempt 1 failed, retrying in 1000ms...
🔄 Retrying operation (attempt 2/3)...
✅ Success on attempt 2!
⏱️ Adding timeout to operation...
✅ Operation completed before timeout
*/

console.log("\n📝 Exercise 10: Promise Utilities");
console.log("Create utility functions for Promises\n");

// TODO: Implement Promise utilities
class PromiseUtils {
    static delay(ms) {
        // Your implementation here
    }
    
    static retry(fn, maxRetries = 3, backoffMs = 1000) {
        // Your implementation here
    }
    
    static timeout(promise, ms) {
        // Your implementation here
    }
    
    static sequence(promises) {
        // Your implementation here
    }
    
    static parallel(promises, concurrency = 5) {
        // Your implementation here
    }
}

// Test your implementation
async function testUtilities() {
    console.log("⏳ Testing delay utility...");
    await PromiseUtils.delay(2000);
    console.log("✅ Delay completed");
    
    console.log("🔄 Testing retry utility...");
    const retryFn = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.7) {
                    resolve("Success!");
                } else {
                    reject(new Error("Random failure"));
                }
            }, 500);
        });
    };
    
    try {
        const result = await PromiseUtils.retry(retryFn, 3, 1000);
        console.log("✅ Retry succeeded:", result);
    } catch (error) {
        console.log("❌ Retry failed:", error.message);
    }
}

testUtilities();

/* 
==========================================
SOLUTIONS AND HINTS
==========================================

Exercise 1 Hint:
- Use setTimeout to simulate download progress
- Use setInterval to update progress
- Clear interval when complete
- Validate file size parameter

Exercise 2 Hint:
- Create separate functions for each step
- Use async/await for cleaner code
- Return data from each step
- Handle errors with try/catch

Exercise 3 Hint:
- Use Promise.allSettled() for partial failures
- Implement fallback data sources
- Categorize different error types
- Provide meaningful error messages

Exercise 4 Hint:
- Measure time with Date.now()
- Use Promise.all() for parallel execution
- Compare sequential vs parallel times
- Handle partial failures gracefully

Exercise 5 Hint:
- Use a for loop for retry attempts
- Implement exponential backoff
- Track attempt numbers
- Provide detailed logging

Exercise 6 Hint:
- Use Promise.race() with timeout Promise
- Implement cleanup operations
- Handle timeout vs success cases
- Provide meaningful timeout messages

Exercise 7 Hint:
- Use Map or Object for cache storage
- Implement TTL with timestamps
- Track cache hits and misses
- Implement LRU eviction if needed

Exercise 8 Hint:
- Split items into batches
- Process batches with concurrency limit
- Track progress and statistics
- Handle batch failures gracefully

Exercise 9 Hint:
- Create separate functions for each step
- Use try/catch for error handling
- Implement proper validation
- Chain operations logically

Exercise 10 Hint:
- Create static utility methods
- Use Promise.race() for timeout
- Implement proper error handling
- Provide flexible configuration options
*/

console.log("\n🎉 All exercises loaded! Start with Exercise 1 and work your way up.");
console.log("💡 Remember: Read the hints if you get stuck!");
console.log("📚 Check the solutions section for guidance!");
