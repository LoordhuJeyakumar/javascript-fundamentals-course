// Exercise 6: Real-World Applications
// Practice with real-world Promise applications and patterns

console.log("💪 Exercise 6: Real-World Applications");
console.log("===================================");

// Exercise 1: API Client with Promise
console.log("\n1. API Client with Promise:");
// TODO: Create a function called createAPIClient that:
// - Takes base URL and options as parameters
// - Returns an object with HTTP methods (GET, POST, PUT, DELETE)
// - Uses Promises for all HTTP requests
// - Handles errors and timeouts appropriately
// Hint: Use fetch() or XMLHttpRequest with Promises

function createAPIClient(baseURL, options = {}) {
    // Your code here
}

// Test your function
let apiClient = createAPIClient("https://jsonplaceholder.typicode.com", {
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

console.log("Testing API client...");
apiClient.get("/posts/1")
    .then(response => console.log("GET response:", response))
    .catch(error => console.log("GET error:", error.message));

// Exercise 2: File Upload with Progress
console.log("\n2. File Upload with Progress:");
// TODO: Create a function called uploadFileWithProgress that:
// - Takes file, uploadURL, and progress callback as parameters
// - Returns a Promise that resolves when upload completes
// - Calls progress callback with upload progress
// - Handles upload errors and cancellation
// Hint: Use XMLHttpRequest with upload progress events

function uploadFileWithProgress(file, uploadURL, onProgress) {
    // Your code here
}

// Test your function
let mockFile = {
    name: "test.txt",
    size: 1024,
    type: "text/plain"
};

console.log("Testing file upload...");
uploadFileWithProgress(mockFile, "https://httpbin.org/post", (progress) => {
    console.log(`Upload progress: ${progress}%`);
})
    .then(result => console.log("Upload complete:", result))
    .catch(error => console.log("Upload error:", error.message));

// Exercise 3: Database Operations with Promise
console.log("\n3. Database Operations with Promise:");
// TODO: Create a function called createDatabaseClient that:
// - Takes database connection options as parameters
// - Returns an object with CRUD operations (create, read, update, delete)
// - Uses Promises for all database operations
// - Handles connection errors and timeouts
// Hint: Simulate database operations with Promises

function createDatabaseClient(options = {}) {
    // Your code here
}

// Test your function
let dbClient = createDatabaseClient({
    host: "localhost",
    port: 5432,
    database: "testdb"
});

console.log("Testing database operations...");
dbClient.create("users", { name: "John", email: "john@example.com" })
    .then(result => console.log("Create result:", result))
    .catch(error => console.log("Create error:", error.message));

dbClient.read("users", { id: 1 })
    .then(result => console.log("Read result:", result))
    .catch(error => console.log("Read error:", error.message));

// Exercise 4: Image Loading with Promise
console.log("\n4. Image Loading with Promise:");
// TODO: Create a function called loadImageWithPromise that:
// - Takes image URL as parameter
// - Returns a Promise that resolves when image loads
// - Handles load errors and timeouts
// - Returns image element or error
// Hint: Use Image constructor with Promise wrapper

function loadImageWithPromise(imageURL) {
    // Your code here
}

// Test your function
let imageURL = "https://via.placeholder.com/300x200";
console.log("Testing image loading...");
loadImageWithPromise(imageURL)
    .then(image => console.log("Image loaded:", image.src))
    .catch(error => console.log("Image load error:", error.message));

// Exercise 5: WebSocket with Promise
console.log("\n5. WebSocket with Promise:");
// TODO: Create a function called createWebSocketClient that:
// - Takes WebSocket URL and options as parameters
// - Returns an object with Promise-based methods
// - Handles connection, sending, and receiving messages
// - Manages connection state and errors
// Hint: Wrap WebSocket events in Promises

function createWebSocketClient(url, options = {}) {
    // Your code here
}

// Test your function
let wsClient = createWebSocketClient("wss://echo.websocket.org", {
    reconnect: true,
    maxReconnectAttempts: 3
});

console.log("Testing WebSocket client...");
wsClient.connect()
    .then(() => {
        console.log("WebSocket connected");
        return wsClient.send("Hello WebSocket!");
    })
    .then(() => console.log("Message sent"))
    .catch(error => console.log("WebSocket error:", error.message));

// Exercise 6: Batch Processing with Promise
console.log("\n6. Batch Processing with Promise:");
// TODO: Create a function called processBatchWithPromise that:
// - Takes an array of items and processing function as parameters
// - Processes items in batches with concurrency control
// - Returns a Promise with all results
// - Handles errors and partial failures
// Hint: Use Promise.all() with batch processing

function processBatchWithPromise(items, processFunction, batchSize = 5) {
    // Your code here
}

// Test your function
let items = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, data: `Item ${i + 1}` }));
let processItem = (item) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...item, processed: true, timestamp: Date.now() });
        }, Math.random() * 1000);
    });
};

console.log("Testing batch processing...");
processBatchWithPromise(items, processItem, 3)
    .then(results => console.log("Batch processing complete:", results.length, "items processed"))
    .catch(error => console.log("Batch processing error:", error.message));

// Exercise 7: Promise-based Form Validation
console.log("\n7. Promise-based Form Validation:");
// TODO: Create a function called validateFormWithPromise that:
// - Takes form data and validation rules as parameters
// - Returns a Promise that resolves with validation results
// - Validates fields asynchronously
// - Handles multiple validation errors
// Hint: Use Promise.allSettled() for parallel validation

function validateFormWithPromise(formData, validationRules) {
    // Your code here
}

// Test your function
let formData = {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    confirmPassword: "password123"
};

let validationRules = {
    name: (value) => value.length >= 2 ? null : "Name must be at least 2 characters",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Invalid email format",
    password: (value) => value.length >= 8 ? null : "Password must be at least 8 characters",
    confirmPassword: (value) => value === formData.password ? null : "Passwords do not match"
};

console.log("Testing form validation...");
validateFormWithPromise(formData, validationRules)
    .then(result => console.log("Validation result:", result))
    .catch(error => console.log("Validation error:", error.message));

// Exercise 8: Promise-based State Management
console.log("\n8. Promise-based State Management:");
// TODO: Create a function called createStateManager that:
// - Takes initial state as parameter
// - Returns an object with state management methods
// - Uses Promises for state updates
// - Handles state transitions and validation
// Hint: Use Promises to handle asynchronous state updates

function createStateManager(initialState = {}) {
    // Your code here
}

// Test your function
let stateManager = createStateManager({
    user: null,
    loading: false,
    error: null
});

console.log("Testing state management...");
stateManager.setState({ loading: true })
    .then(() => console.log("State updated: loading = true"))
    .then(() => stateManager.setState({ user: { name: "John" }, loading: false }))
    .then(() => console.log("State updated: user set, loading = false"))
    .then(() => stateManager.getState())
    .then(state => console.log("Current state:", state))
    .catch(error => console.log("State management error:", error.message));

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced real-world Promise applications.");
console.log("Key concepts practiced:");
console.log("- API clients with Promise");
console.log("- File upload with progress");
console.log("- Database operations with Promise");
console.log("- Image loading with Promise");
console.log("- WebSocket with Promise");
console.log("- Batch processing with Promise");
console.log("- Promise-based form validation");
console.log("- Promise-based state management");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Promises assignments");
console.log("4. Ask questions if you need help");
