// Lesson 6: Real-World Applications
// This file teaches real-world Promise applications

console.log("⚡ Welcome to Promises Lesson 6: Real-World Applications!");
console.log("=======================================================");

// 1. API Data Fetching
console.log("\n📚 1. API Data Fetching");
console.log("----------------------");

// Simulate API calls
async function fetchUserData(userId) {
    console.log(`Fetching user data for ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`,
                    role: 'user'
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 500);
    });
}

async function fetchUserPosts(userId) {
    console.log(`Fetching posts for user ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "First Post", content: "Hello World!" },
                    { id: 2, title: "Second Post", content: "Learning Promises" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 300);
    });
}

async function fetchUserComments(userId) {
    console.log(`Fetching comments for user ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 200);
    });
}

// Fetch all user data
async function fetchAllUserData(userId) {
    try {
        console.log("Starting to fetch all user data");
        let start = Date.now();
        
        // Parallel execution for better performance
        let [user, posts, comments] = await Promise.all([
            fetchUserData(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId)
        ]);
        
        let end = Date.now();
        console.log(`All user data fetched in ${end - start}ms`);
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Error fetching user data:", error.message);
        throw error;
    }
}

// Test API data fetching
fetchAllUserData(1).then((data) => {
    console.log("User data:", data);
});

// 2. File Operations
console.log("\n📚 2. File Operations");
console.log("-------------------");

// Simulate file operations
async function readFile(filename) {
    console.log(`Reading file: ${filename}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename.endsWith('.txt')) {
                resolve(`Content of ${filename}`);
            } else {
                reject(new Error(`Cannot read file: ${filename}`));
            }
        }, Math.random() * 500 + 200);
    });
}

async function writeFile(filename, content) {
    console.log(`Writing file: ${filename}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename.length > 0) {
                resolve(`File ${filename} written successfully`);
            } else {
                reject(new Error("Invalid filename"));
            }
        }, Math.random() * 500 + 300);
    });
}

async function deleteFile(filename) {
    console.log(`Deleting file: ${filename}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename.endsWith('.tmp')) {
                resolve(`File ${filename} deleted successfully`);
            } else {
                reject(new Error(`Cannot delete file: ${filename}`));
            }
        }, Math.random() * 500 + 100);
    });
}

// File operations pipeline
async function fileOperationsPipeline() {
    try {
        console.log("Starting file operations pipeline");
        
        // Read multiple files
        let files = ['file1.txt', 'file2.txt', 'file3.txt'];
        let contents = await Promise.all(files.map(file => readFile(file)));
        console.log("Files read:", contents);
        
        // Process content
        let processedContent = contents.join('\n');
        console.log("Content processed");
        
        // Write processed content
        let writeResult = await writeFile('processed.txt', processedContent);
        console.log("Write result:", writeResult);
        
        // Clean up temporary files
        let tempFiles = ['temp1.tmp', 'temp2.tmp'];
        let deleteResults = await Promise.all(tempFiles.map(file => deleteFile(file)));
        console.log("Delete results:", deleteResults);
        
        console.log("File operations pipeline completed");
        
    } catch (error) {
        console.log("File operations pipeline error:", error.message);
    }
}

fileOperationsPipeline();

// 3. Database Operations
console.log("\n📚 3. Database Operations");
console.log("------------------------");

// Simulate database operations
class Database {
    constructor() {
        this.data = new Map();
    }
    
    async insert(table, record) {
        console.log(`Inserting into ${table}:`, record);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (record.id && record.name) {
                    let key = `${table}_${record.id}`;
                    this.data.set(key, record);
                    resolve({ id: record.id, created: true });
                } else {
                    reject(new Error("Invalid record data"));
                }
            }, Math.random() * 500 + 200);
        });
    }
    
    async findById(table, id) {
        console.log(`Finding ${table} with ID: ${id}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let key = `${table}_${id}`;
                if (this.data.has(key)) {
                    resolve(this.data.get(key));
                } else {
                    reject(new Error(`Record not found: ${table}_${id}`));
                }
            }, Math.random() * 300 + 100);
        });
    }
    
    async update(table, id, updates) {
        console.log(`Updating ${table} with ID: ${id}`, updates);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let key = `${table}_${id}`;
                if (this.data.has(key)) {
                    let record = this.data.get(key);
                    let updatedRecord = { ...record, ...updates };
                    this.data.set(key, updatedRecord);
                    resolve(updatedRecord);
                } else {
                    reject(new Error(`Record not found: ${table}_${id}`));
                }
            }, Math.random() * 400 + 150);
        });
    }
    
    async delete(table, id) {
        console.log(`Deleting ${table} with ID: ${id}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let key = `${table}_${id}`;
                if (this.data.has(key)) {
                    this.data.delete(key);
                    resolve({ id, deleted: true });
                } else {
                    reject(new Error(`Record not found: ${table}_${id}`));
                }
            }, Math.random() * 300 + 100);
        });
    }
}

// Database operations example
async function databaseOperations() {
    let db = new Database();
    
    try {
        console.log("Starting database operations");
        
        // Insert multiple records
        let users = [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Smith", email: "jane@example.com" },
            { id: 3, name: "Bob Johnson", email: "bob@example.com" }
        ];
        
        let insertResults = await Promise.all(
            users.map(user => db.insert('users', user))
        );
        console.log("Insert results:", insertResults);
        
        // Find user by ID
        let user = await db.findById('users', 1);
        console.log("Found user:", user);
        
        // Update user
        let updatedUser = await db.update('users', 1, { email: "john.doe@example.com" });
        console.log("Updated user:", updatedUser);
        
        // Find all users
        let allUsers = await Promise.all([
            db.findById('users', 1),
            db.findById('users', 2),
            db.findById('users', 3)
        ]);
        console.log("All users:", allUsers);
        
        // Delete user
        let deleteResult = await db.delete('users', 3);
        console.log("Delete result:", deleteResult);
        
        console.log("Database operations completed");
        
    } catch (error) {
        console.log("Database operations error:", error.message);
    }
}

databaseOperations();

// 4. User Interface Updates
console.log("\n📚 4. User Interface Updates");
console.log("----------------------------");

// Simulate UI updates
class UI {
    constructor() {
        this.elements = new Map();
    }
    
    async showLoading(elementId) {
        console.log(`Showing loading for ${elementId}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.elements.set(elementId, 'loading');
                resolve(`Loading shown for ${elementId}`);
            }, 100);
        });
    }
    
    async hideLoading(elementId) {
        console.log(`Hiding loading for ${elementId}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.elements.set(elementId, 'hidden');
                resolve(`Loading hidden for ${elementId}`);
            }, 100);
        });
    }
    
    async updateContent(elementId, content) {
        console.log(`Updating content for ${elementId}:`, content);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.elements.set(elementId, content);
                resolve(`Content updated for ${elementId}`);
            }, 200);
        });
    }
    
    async showError(elementId, error) {
        console.log(`Showing error for ${elementId}:`, error);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.elements.set(elementId, `Error: ${error}`);
                resolve(`Error shown for ${elementId}`);
            }, 100);
        });
    }
}

// UI update example
async function uiUpdateExample() {
    let ui = new UI();
    
    try {
        console.log("Starting UI update example");
        
        // Show loading
        await ui.showLoading('user-profile');
        await ui.showLoading('user-posts');
        
        // Fetch data
        let [user, posts] = await Promise.all([
            fetchUserData(1),
            fetchUserPosts(1)
        ]);
        
        // Update UI
        await Promise.all([
            ui.hideLoading('user-profile'),
            ui.hideLoading('user-posts'),
            ui.updateContent('user-profile', user),
            ui.updateContent('user-posts', posts)
        ]);
        
        console.log("UI update completed");
        
    } catch (error) {
        console.log("UI update error:", error.message);
        
        // Show error in UI
        await ui.showError('user-profile', error.message);
        await ui.showError('user-posts', error.message);
    }
}

uiUpdateExample();

// 5. WebSocket Connections
console.log("\n📚 5. WebSocket Connections");
console.log("--------------------------");

// Simulate WebSocket connection
class WebSocketConnection {
    constructor(url) {
        this.url = url;
        this.connected = false;
        this.messageQueue = [];
    }
    
    async connect() {
        console.log(`Connecting to WebSocket: ${this.url}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    this.connected = true;
                    console.log("WebSocket connected");
                    resolve("Connected");
                } else {
                    reject(new Error("WebSocket connection failed"));
                }
            }, Math.random() * 1000 + 500);
        });
    }
    
    async send(message) {
        if (!this.connected) {
            throw new Error("WebSocket not connected");
        }
        
        console.log(`Sending message: ${message}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.05) {
                    resolve(`Message sent: ${message}`);
                } else {
                    reject(new Error("Message send failed"));
                }
            }, Math.random() * 200 + 100);
        });
    }
    
    async disconnect() {
        console.log("Disconnecting WebSocket");
        return new Promise((resolve) => {
            setTimeout(() => {
                this.connected = false;
                resolve("Disconnected");
            }, 200);
        });
    }
}

// WebSocket example
async function webSocketExample() {
    let ws = new WebSocketConnection("ws://example.com/chat");
    
    try {
        // Connect
        await ws.connect();
        
        // Send messages
        let messages = ["Hello", "How are you?", "Goodbye"];
        let sendResults = await Promise.all(
            messages.map(msg => ws.send(msg))
        );
        console.log("Send results:", sendResults);
        
        // Disconnect
        await ws.disconnect();
        console.log("WebSocket example completed");
        
    } catch (error) {
        console.log("WebSocket example error:", error.message);
    }
}

webSocketExample();

// 6. Real-World Application: Data Dashboard
console.log("\n📚 6. Real-World Application: Data Dashboard");
console.log("------------------------------------------");

class DataDashboard {
    constructor() {
        this.ui = new UI();
        this.db = new Database();
        this.ws = new WebSocketConnection("ws://dashboard.example.com");
    }
    
    async initialize() {
        try {
            console.log("Initializing data dashboard");
            
            // Show loading states
            await Promise.all([
                this.ui.showLoading('users'),
                this.ui.showLoading('posts'),
                this.ui.showLoading('comments'),
                this.ui.showLoading('stats')
            ]);
            
            // Connect to WebSocket
            await this.ws.connect();
            
            // Fetch all data in parallel
            let [users, posts, comments, stats] = await Promise.all([
                this.fetchUsers(),
                this.fetchPosts(),
                this.fetchComments(),
                this.fetchStats()
            ]);
            
            // Update UI
            await Promise.all([
                this.ui.hideLoading('users'),
                this.ui.hideLoading('posts'),
                this.ui.hideLoading('comments'),
                this.ui.hideLoading('stats'),
                this.ui.updateContent('users', users),
                this.ui.updateContent('posts', posts),
                this.ui.updateContent('comments', comments),
                this.ui.updateContent('stats', stats)
            ]);
            
            // Send initialization complete message
            await this.ws.send("Dashboard initialized");
            
            console.log("Data dashboard initialized successfully");
            
        } catch (error) {
            console.log("Dashboard initialization error:", error.message);
            
            // Show errors in UI
            await Promise.all([
                this.ui.showError('users', error.message),
                this.ui.showError('posts', error.message),
                this.ui.showError('comments', error.message),
                this.ui.showError('stats', error.message)
            ]);
        }
    }
    
    async fetchUsers() {
        console.log("Fetching users");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: "John Doe", email: "john@example.com" },
                    { id: 2, name: "Jane Smith", email: "jane@example.com" }
                ]);
            }, Math.random() * 1000 + 500);
        });
    }
    
    async fetchPosts() {
        console.log("Fetching posts");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "Post 1", content: "Content 1" },
                    { id: 2, title: "Post 2", content: "Content 2" }
                ]);
            }, Math.random() * 1000 + 300);
        });
    }
    
    async fetchComments() {
        console.log("Fetching comments");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, text: "Comment 1" },
                    { id: 2, text: "Comment 2" }
                ]);
            }, Math.random() * 1000 + 200);
        });
    }
    
    async fetchStats() {
        console.log("Fetching stats");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    totalUsers: 100,
                    totalPosts: 50,
                    totalComments: 200
                });
            }, Math.random() * 1000 + 400);
        });
    }
}

// Test data dashboard
let dashboard = new DataDashboard();
dashboard.initialize();

// 7. Error Handling in Real-World Applications
console.log("\n📚 7. Error Handling in Real-World Applications");
console.log("----------------------------------------------");

// Robust error handling
async function robustDataFetching() {
    let retries = 3;
    let delay = 1000;
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt} of ${retries}`);
            
            let [users, posts, comments] = await Promise.allSettled([
                fetchUserData(1),
                fetchUserPosts(1),
                fetchUserComments(1)
            ]);
            
            // Process results
            let results = { users: null, posts: null, comments: null };
            
            if (users.status === 'fulfilled') {
                results.users = users.value;
            } else {
                console.log("Users fetch failed:", users.reason.message);
            }
            
            if (posts.status === 'fulfilled') {
                results.posts = posts.value;
            } else {
                console.log("Posts fetch failed:", posts.reason.message);
            }
            
            if (comments.status === 'fulfilled') {
                results.comments = comments.value;
            } else {
                console.log("Comments fetch failed:", comments.reason.message);
            }
            
            console.log("Data fetch completed:", results);
            return results;
            
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error.message);
            
            if (attempt === retries) {
                throw new Error(`Data fetching failed after ${retries} attempts`);
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
    }
}

robustDataFetching().then((results) => {
    console.log("Robust data fetching completed:", results);
}).catch((error) => {
    console.log("Robust data fetching failed:", error.message);
});

// 8. Performance Optimization
console.log("\n📚 8. Performance Optimization");
console.log("-----------------------------");

// Optimized data fetching
async function optimizedDataFetching() {
    console.log("Starting optimized data fetching");
    let start = Date.now();
    
    try {
        // Use Promise.all for parallel execution
        let [users, posts, comments] = await Promise.all([
            fetchUserData(1),
            fetchUserPosts(1),
            fetchUserComments(1)
        ]);
        
        let end = Date.now();
        console.log(`Optimized data fetching completed in ${end - start}ms`);
        
        return { users, posts, comments };
        
    } catch (error) {
        console.log("Optimized data fetching error:", error.message);
        throw error;
    }
}

optimizedDataFetching().then((results) => {
    console.log("Optimized results:", results);
});

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use Promises for API calls and data fetching");
console.log("- Implement proper error handling for real-world scenarios");
console.log("- Use Promise.all() for parallel operations");
console.log("- Handle UI updates with Promises");
console.log("- Implement retry mechanisms for reliability");
console.log("- Use Promise.allSettled() for mixed success/failure scenarios");
console.log("- Consider performance implications of async operations");
console.log("- Build robust applications with proper error handling");

console.log("\n📝 Practice Exercises:");
console.log("1. Build a data fetching application");
console.log("2. Implement file operations with Promises");
console.log("3. Create a database operations wrapper");
console.log("4. Build a real-time UI update system");
console.log("5. Implement error handling and retry mechanisms");
