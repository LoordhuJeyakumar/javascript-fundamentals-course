/* 
==========================================
COMPLETE PROMISE STUDY GUIDE FOR BEGINNERS
==========================================

This comprehensive guide covers everything about Promises in JavaScript
with real-world examples, practical scenarios, and step-by-step explanations.

Table of Contents:
1. What are Promises? (Real-world analogy)
2. Promise States and Lifecycle
3. Basic Promise Syntax
4. Real-world Examples
5. Error Handling with try/catch
6. Async/Await (Modern Promise syntax)
7. Practical Scenarios
8. Common Patterns and Best Practices
9. Saturday Study Materials
10. Practice Exercises

*/

console.log("🚀 Welcome to the Complete Promise Learning Guide!");

/* 
==========================================
1. WHAT ARE PROMISES? (Real-world Analogy)
==========================================

Think of a Promise like ordering food at a restaurant:

1. You place an order (create a Promise)
2. The restaurant promises to deliver your food (Promise is pending)
3. Either:
   - Your food arrives successfully (Promise is fulfilled/resolved)
   - Something goes wrong - kitchen fire, no ingredients (Promise is rejected)

The Promise represents the "eventual result" of your order, not the food itself.
*/

console.log("\n📚 SECTION 1: Understanding Promises with Real-world Analogy");

// Real-world example: Ordering pizza
function orderPizza(pizzaType, deliveryTime) {
    return new Promise((resolve, reject) => {
        console.log(`🍕 Ordering ${pizzaType} pizza...`);
        
        // Simulate pizza preparation time
        setTimeout(() => {
            // 90% chance of success, 10% chance of failure
            const success = Math.random() > 0.1;
            
            if (success) {
                const pizza = {
                    type: pizzaType,
                    size: "Large",
                    price: 15.99,
                    deliveryTime: deliveryTime,
                    status: "Ready for delivery"
                };
                console.log(`✅ ${pizzaType} pizza is ready!`);
                resolve(pizza); // Promise fulfilled
            } else {
                const error = "Sorry, we're out of ingredients for that pizza!";
                console.log(`❌ ${error}`);
                reject(error); // Promise rejected
            }
        }, deliveryTime);
    });
}

// Using the pizza order Promise
orderPizza("Margherita", 2000)
    .then(pizza => {
        console.log("🎉 Pizza received:", pizza);
        console.log(`💰 Total cost: $${pizza.price}`);
    })
    .catch(error => {
        console.log("😞 Order failed:", error);
    });

/* 
==========================================
2. PROMISE STATES AND LIFECYCLE
==========================================

A Promise has three states:
- PENDING: Initial state, neither fulfilled nor rejected
- FULFILLED: Operation completed successfully
- REJECTED: Operation failed

Once a Promise is fulfilled or rejected, it cannot change state.
*/

console.log("\n📚 SECTION 2: Promise States and Lifecycle");

// Example showing all three states
function demonstratePromiseStates() {
    console.log("Creating a new Promise...");
    
    const myPromise = new Promise((resolve, reject) => {
        console.log("Promise is in PENDING state");
        
        // Simulate some work
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                console.log("Promise moves to FULFILLED state");
                resolve("Operation completed successfully!");
            } else {
                console.log("Promise moves to REJECTED state");
                reject("Operation failed!");
            }
        }, 1000);
    });
    
    return myPromise;
}

// Handle the Promise
demonstratePromiseStates()
    .then(result => {
        console.log("✅ Result:", result);
    })
    .catch(error => {
        console.log("❌ Error:", error);
    });

/* 
==========================================
3. BASIC PROMISE SYNTAX
==========================================

Creating and using Promises step by step
*/

console.log("\n📚 SECTION 3: Basic Promise Syntax");

// Method 1: Creating a Promise with new Promise()
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user data for ID: ${userId}`);
        
        // Simulate API call
        setTimeout(() => {
            if (userId > 0) {
                const userData = {
                    id: userId,
                    name: "John Doe",
                    email: "john@example.com",
                    role: "Developer"
                };
                resolve(userData);
            } else {
                reject("Invalid user ID");
            }
        }, 1500);
    });
}

// Method 2: Using Promise.resolve() for immediate resolution
function createResolvedPromise() {
    return Promise.resolve("This Promise is immediately resolved!");
}

// Method 3: Using Promise.reject() for immediate rejection
function createRejectedPromise() {
    return Promise.reject("This Promise is immediately rejected!");
}

// Using the Promises
console.log("Testing basic Promise syntax:");

fetchUserData(123)
    .then(user => {
        console.log("User data:", user);
        return createResolvedPromise();
    })
    .then(result => {
        console.log("Resolved Promise result:", result);
        return createRejectedPromise();
    })
    .catch(error => {
        console.log("Caught error:", error);
    });

/* 
==========================================
4. REAL-WORLD EXAMPLES
==========================================

Practical examples you'll encounter in real applications
*/

console.log("\n📚 SECTION 4: Real-world Examples");

// Example 1: API Calls (Most common use case)
function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        console.log(`🌤️ Fetching weather for ${city}...`);
        
        // Simulate API call delay
        setTimeout(() => {
            const weatherData = {
                city: city,
                temperature: Math.floor(Math.random() * 30) + 10,
                condition: ["Sunny", "Cloudy", "Rainy", "Snowy"][Math.floor(Math.random() * 4)],
                humidity: Math.floor(Math.random() * 100),
                timestamp: new Date().toISOString()
            };
            
            // Simulate network issues 20% of the time
            if (Math.random() > 0.2) {
                resolve(weatherData);
            } else {
                reject("Network error: Unable to fetch weather data");
            }
        }, 2000);
    });
}

// Example 2: File Operations
function readFile(filename) {
    return new Promise((resolve, reject) => {
        console.log(`📁 Reading file: ${filename}`);
        
        setTimeout(() => {
            if (filename.endsWith('.txt')) {
                const content = `Content of ${filename}:\nThis is a sample file content.`;
                resolve(content);
            } else {
                reject(`Error: Cannot read file ${filename}. Only .txt files are supported.`);
            }
        }, 1000);
    });
}

// Example 3: Database Operations
function saveUserToDatabase(userData) {
    return new Promise((resolve, reject) => {
        console.log(`💾 Saving user to database:`, userData.name);
        
        setTimeout(() => {
            // Simulate database validation
            if (userData.email && userData.name) {
                const savedUser = {
                    ...userData,
                    id: Math.floor(Math.random() * 1000),
                    createdAt: new Date().toISOString()
                };
                resolve(savedUser);
            } else {
                reject("Validation error: Email and name are required");
            }
        }, 1500);
    });
}

// Using the real-world examples
console.log("Testing real-world examples:");

// Chain multiple operations
fetchWeatherData("New York")
    .then(weather => {
        console.log("Weather data:", weather);
        return readFile("weather-report.txt");
    })
    .then(fileContent => {
        console.log("File content:", fileContent);
        return saveUserToDatabase({
            name: "Weather Reporter",
            email: "reporter@weather.com"
        });
    })
    .then(savedUser => {
        console.log("User saved:", savedUser);
    })
    .catch(error => {
        console.log("Error in chain:", error);
    });

/* 
==========================================
5. ERROR HANDLING WITH TRY/CATCH
==========================================

Modern way to handle Promises with async/await and try/catch
*/

console.log("\n📚 SECTION 5: Error Handling with try/catch");

// Example 1: Basic async/await with try/catch
async function handleUserLogin(username, password) {
    try {
        console.log(`🔐 Attempting login for user: ${username}`);
        
        // Simulate authentication
        const isValidUser = await validateUser(username, password);
        const userProfile = await getUserProfile(username);
        const userPreferences = await getUserPreferences(username);
        
        console.log("✅ Login successful!");
        return {
            user: userProfile,
            preferences: userPreferences,
            loginTime: new Date().toISOString()
        };
        
    } catch (error) {
        console.log("❌ Login failed:", error);
        throw error; // Re-throw to let caller handle
    }
}

// Helper functions for the login example
function validateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "password123") {
                resolve(true);
            } else {
                reject("Invalid username or password");
            }
        }, 1000);
    });
}

function getUserProfile(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin") {
                resolve({
                    username: "admin",
                    fullName: "Administrator",
                    role: "Admin",
                    lastLogin: "2024-01-15"
                });
            } else {
                reject("User profile not found");
            }
        }, 800);
    });
}

function getUserPreferences(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "en",
                notifications: true
            });
        }, 600);
    });
}

// Example 2: Multiple error handling strategies
async function processOrder(orderData) {
    try {
        console.log("🛒 Processing order:", orderData.orderId);
        
        // Step 1: Validate order
        const validatedOrder = await validateOrder(orderData);
        console.log("✅ Order validated");
        
        // Step 2: Check inventory
        const inventoryCheck = await checkInventory(validatedOrder.items);
        console.log("✅ Inventory checked");
        
        // Step 3: Process payment
        const paymentResult = await processPayment(validatedOrder.payment);
        console.log("✅ Payment processed");
        
        // Step 4: Send confirmation
        const confirmation = await sendConfirmation(validatedOrder.customerEmail);
        console.log("✅ Confirmation sent");
        
        return {
            orderId: validatedOrder.orderId,
            status: "completed",
            paymentId: paymentResult.paymentId,
            confirmationId: confirmation.confirmationId
        };
        
    } catch (error) {
        console.log("❌ Order processing failed:", error.message);
        
        // Handle different types of errors
        if (error.type === "validation") {
            console.log("🔧 Validation error - please check your order details");
        } else if (error.type === "inventory") {
            console.log("📦 Inventory error - some items are out of stock");
        } else if (error.type === "payment") {
            console.log("💳 Payment error - please check your payment method");
        } else {
            console.log("🚨 Unexpected error - please try again later");
        }
        
        throw error;
    }
}

// Helper functions for order processing
function validateOrder(orderData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!orderData.orderId || !orderData.items || orderData.items.length === 0) {
                const error = new Error("Invalid order data");
                error.type = "validation";
                reject(error);
            } else {
                resolve(orderData);
            }
        }, 500);
    });
}

function checkInventory(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const outOfStock = items.filter(item => Math.random() > 0.7);
            if (outOfStock.length > 0) {
                const error = new Error(`Items out of stock: ${outOfStock.map(item => item.name).join(", ")}`);
                error.type = "inventory";
                reject(error);
            } else {
                resolve({ available: true, items: items });
            }
        }, 800);
    });
}

function processPayment(paymentData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% success rate
                resolve({
                    paymentId: `PAY_${Math.floor(Math.random() * 10000)}`,
                    amount: paymentData.amount,
                    status: "completed"
                });
            } else {
                const error = new Error("Payment processing failed");
                error.type = "payment";
                reject(error);
            }
        }, 1200);
    });
}

function sendConfirmation(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                confirmationId: `CONF_${Math.floor(Math.random() * 10000)}`,
                email: email,
                sent: true
            });
        }, 400);
    });
}

// Test the async/await examples
console.log("Testing async/await with try/catch:");

// Test login
handleUserLogin("admin", "password123")
    .then(result => {
        console.log("Login result:", result);
    })
    .catch(error => {
        console.log("Login error:", error);
    });

// Test order processing
processOrder({
    orderId: "ORD-001",
    items: [
        { name: "Laptop", quantity: 1, price: 999 },
        { name: "Mouse", quantity: 2, price: 25 }
    ],
    payment: { amount: 1049, method: "credit_card" },
    customerEmail: "customer@example.com"
})
.then(result => {
    console.log("Order processing result:", result);
})
.catch(error => {
    console.log("Order processing error:", error);
});

/* 
==========================================
6. ASYNC/AWAIT (Modern Promise Syntax)
==========================================

The modern, cleaner way to work with Promises
*/

console.log("\n📚 SECTION 6: Async/Await (Modern Promise Syntax)");

// Example 1: Converting Promise chains to async/await
async function fetchUserPosts(userId) {
    try {
        console.log(`📝 Fetching posts for user ${userId}`);
        
        // Instead of .then() chains, we use await
        const user = await getUserById(userId);
        console.log("User found:", user.name);
        
        const posts = await getPostsByUserId(userId);
        console.log(`Found ${posts.length} posts`);
        
        const comments = await getCommentsForPosts(posts.map(post => post.id));
        console.log(`Found ${comments.length} comments`);
        
        return {
            user: user,
            posts: posts,
            comments: comments,
            totalEngagement: posts.length + comments.length
        };
        
    } catch (error) {
        console.log("Error fetching user posts:", error);
        throw error;
    }
}

// Helper functions
function getUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id: id,
                    name: "John Doe",
                    email: "john@example.com"
                });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

function getPostsByUserId(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "My First Post", content: "Hello World!" },
                { id: 2, title: "Learning JavaScript", content: "Promises are awesome!" },
                { id: 3, title: "Async/Await", content: "Much cleaner than callbacks!" }
            ]);
        }, 800);
    });
}

function getCommentsForPosts(postIds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, comment: "Great post!" },
                { postId: 2, comment: "Thanks for sharing!" },
                { postId: 3, comment: "Very helpful!" }
            ]);
        }, 600);
    });
}

// Example 2: Parallel execution with Promise.all()
async function fetchDashboardData() {
    try {
        console.log("📊 Fetching dashboard data...");
        
        // Execute multiple Promises in parallel
        const [users, orders, products, analytics] = await Promise.all([
            fetchUsers(),
            fetchOrders(),
            fetchProducts(),
            fetchAnalytics()
        ]);
        
        console.log("✅ All dashboard data fetched successfully");
        
        return {
            userCount: users.length,
            orderCount: orders.length,
            productCount: products.length,
            totalRevenue: analytics.revenue,
            lastUpdated: new Date().toISOString()
        };
        
    } catch (error) {
        console.log("❌ Error fetching dashboard data:", error);
        throw error;
    }
}

// Helper functions for dashboard
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Charlie" }
            ]);
        }, 1000);
    });
}

function fetchOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, amount: 100 },
                { id: 2, amount: 200 },
                { id: 3, amount: 150 }
            ]);
        }, 1200);
    });
}

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Product A" },
                { id: 2, name: "Product B" }
            ]);
        }, 800);
    });
}

function fetchAnalytics() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                revenue: 450,
                views: 1000,
                conversions: 50
            });
        }, 1500);
    });
}

// Test async/await examples
console.log("Testing async/await examples:");

fetchUserPosts(1)
    .then(result => {
        console.log("User posts result:", result);
    })
    .catch(error => {
        console.log("User posts error:", error);
    });

fetchDashboardData()
    .then(result => {
        console.log("Dashboard data:", result);
    })
    .catch(error => {
        console.log("Dashboard error:", error);
    });

/* 
==========================================
7. PRACTICAL SCENARIOS
==========================================

Real-world scenarios you'll encounter in web development
*/

console.log("\n📚 SECTION 7: Practical Scenarios");

// Scenario 1: E-commerce Product Loading
async function loadProductPage(productId) {
    try {
        console.log(`🛍️ Loading product page for ID: ${productId}`);
        
        // Load product details, reviews, and recommendations in parallel
        const [product, reviews, recommendations, similarProducts] = await Promise.all([
            getProductDetails(productId),
            getProductReviews(productId),
            getRecommendations(productId),
            getSimilarProducts(productId)
        ]);
        
        return {
            product: product,
            reviews: reviews,
            recommendations: recommendations,
            similarProducts: similarProducts,
            loadedAt: new Date().toISOString()
        };
        
    } catch (error) {
        console.log("Error loading product page:", error);
        // Return a fallback or show error page
        return {
            error: true,
            message: "Unable to load product details",
            fallback: true
        };
    }
}

// Scenario 2: User Registration with Validation
async function registerUser(userData) {
    try {
        console.log("👤 Registering new user:", userData.email);
        
        // Step 1: Validate input
        await validateUserInput(userData);
        
        // Step 2: Check if user already exists
        const existingUser = await checkUserExists(userData.email);
        if (existingUser) {
            throw new Error("User already exists with this email");
        }
        
        // Step 3: Hash password
        const hashedPassword = await hashPassword(userData.password);
        
        // Step 4: Save to database
        const newUser = await saveUserToDatabase({
            ...userData,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        });
        
        // Step 5: Send welcome email (don't wait for it)
        sendWelcomeEmail(newUser.email).catch(err => 
            console.log("Failed to send welcome email:", err)
        );
        
        // Step 6: Create user session
        const session = await createUserSession(newUser.id);
        
        return {
            user: newUser,
            session: session,
            success: true
        };
        
    } catch (error) {
        console.log("Registration failed:", error.message);
        throw error;
    }
}

// Helper functions for practical scenarios
function getProductDetails(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id: id,
                    name: "Amazing Product",
                    price: 99.99,
                    description: "This is an amazing product!",
                    inStock: true
                });
            } else {
                reject("Product not found");
            }
        }, 1000);
    });
}

function getProductReviews(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, rating: 5, comment: "Great product!" },
                { id: 2, rating: 4, comment: "Good value for money" }
            ]);
        }, 800);
    });
}

function getRecommendations(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 2, name: "Related Product 1" },
                { id: 3, name: "Related Product 2" }
            ]);
        }, 600);
    });
}

function getSimilarProducts(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 4, name: "Similar Product 1" },
                { id: 5, name: "Similar Product 2" }
            ]);
        }, 700);
    });
}

function validateUserInput(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userData.email || !userData.password || !userData.name) {
                reject(new Error("Missing required fields"));
            } else if (userData.password.length < 6) {
                reject(new Error("Password must be at least 6 characters"));
            } else {
                resolve(true);
            }
        }, 300);
    });
}

function checkUserExists(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate checking database
            resolve(email === "existing@example.com");
        }, 500);
    });
}

function hashPassword(password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`hashed_${password}_${Date.now()}`);
        }, 400);
    });
}

function saveUserToDatabase(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...userData,
                id: Math.floor(Math.random() * 1000)
            });
        }, 800);
    });
}

function sendWelcomeEmail(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`📧 Welcome email sent to ${email}`);
            resolve(true);
        }, 1000);
    });
}

function createUserSession(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                sessionId: `session_${userId}_${Date.now()}`,
                userId: userId,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            });
        }, 300);
    });
}

// Test practical scenarios
console.log("Testing practical scenarios:");

loadProductPage(123)
    .then(result => {
        console.log("Product page loaded:", result);
    })
    .catch(error => {
        console.log("Product page error:", error);
    });

registerUser({
    name: "Jane Doe",
    email: "jane@example.com",
    password: "securepassword123"
})
.then(result => {
    console.log("Registration successful:", result);
})
.catch(error => {
    console.log("Registration failed:", error);
});

/* 
==========================================
8. COMMON PATTERNS AND BEST PRACTICES
==========================================

Industry-standard patterns for working with Promises
*/

console.log("\n📚 SECTION 8: Common Patterns and Best Practices");

// Pattern 1: Promise.all() for parallel execution
async function loadMultipleResources() {
    try {
        console.log("🔄 Loading multiple resources in parallel...");
        
        const startTime = Date.now();
        
        const [users, posts, comments, settings] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments(),
            fetchSettings()
        ]);
        
        const endTime = Date.now();
        console.log(`✅ All resources loaded in ${endTime - startTime}ms`);
        
        return { users, posts, comments, settings };
        
    } catch (error) {
        console.log("❌ Failed to load resources:", error);
        throw error;
    }
}

// Pattern 2: Promise.allSettled() for handling partial failures
async function loadWithPartialFailures() {
    console.log("🔄 Loading resources with partial failure handling...");
    
    const results = await Promise.allSettled([
        fetchUsers(),
        fetchPosts(),
        fetchComments(),
        fetchSettings()
    ]);
    
    const successful = results.filter(result => result.status === 'fulfilled');
    const failed = results.filter(result => result.status === 'rejected');
    
    console.log(`✅ ${successful.length} resources loaded successfully`);
    console.log(`❌ ${failed.length} resources failed to load`);
    
    return {
        successful: successful.map(result => result.value),
        failed: failed.map(result => result.reason)
    };
}

// Pattern 3: Promise.race() for timeouts
async function fetchWithTimeout(url, timeoutMs = 5000) {
    console.log(`⏱️ Fetching ${url} with ${timeoutMs}ms timeout...`);
    
    const fetchPromise = fetchData(url);
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
    });
    
    try {
        const result = await Promise.race([fetchPromise, timeoutPromise]);
        console.log("✅ Data fetched successfully");
        return result;
    } catch (error) {
        console.log("❌ Request failed or timed out:", error.message);
        throw error;
    }
}

// Pattern 4: Retry mechanism
async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`🔄 Attempt ${attempt}/${maxRetries} for ${url}`);
            const result = await fetchData(url);
            console.log(`✅ Success on attempt ${attempt}`);
            return result;
        } catch (error) {
            lastError = error;
            console.log(`❌ Attempt ${attempt} failed:`, error.message);
            
            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
                console.log(`⏳ Waiting ${delay}ms before retry...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw new Error(`Failed after ${maxRetries} attempts. Last error: ${lastError.message}`);
}

// Helper functions for patterns
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, name: "User 1" }]), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1200);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, text: "Comment 1" }]), 800);
    });
}

function fetchSettings() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ theme: "dark" }), 600);
    });
}

function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) { // 70% success rate
                resolve({ url: url, data: "Sample data" });
            } else {
                reject(new Error("Network error"));
            }
        }, 2000);
    });
}

// Test patterns
console.log("Testing common patterns:");

loadMultipleResources()
    .then(result => {
        console.log("Multiple resources loaded:", result);
    })
    .catch(error => {
        console.log("Error loading resources:", error);
    });

loadWithPartialFailures()
    .then(result => {
        console.log("Partial failure handling result:", result);
    });

fetchWithTimeout("https://api.example.com/data", 3000)
    .then(result => {
        console.log("Timeout fetch result:", result);
    })
    .catch(error => {
        console.log("Timeout fetch error:", error);
    });

fetchWithRetry("https://api.example.com/data", 3)
    .then(result => {
        console.log("Retry fetch result:", result);
    })
    .catch(error => {
        console.log("Retry fetch error:", error);
    });

/* 
==========================================
9. SATURDAY STUDY MATERIALS
==========================================

Comprehensive study plan for mastering Promises
*/

console.log("\n📚 SECTION 9: Saturday Study Materials");

const studyPlan = {
    week1: {
        day: "Saturday 1",
        topics: [
            "Understanding what Promises are",
            "Promise states (pending, fulfilled, rejected)",
            "Basic Promise syntax with new Promise()",
            "Using .then() and .catch()"
        ],
        exercises: [
            "Create a simple Promise that resolves after 2 seconds",
            "Create a Promise that rejects with an error message",
            "Chain multiple .then() calls together",
            "Handle errors with .catch()"
        ],
        practiceTime: "2-3 hours"
    },
    week2: {
        day: "Saturday 2",
        topics: [
            "Promise.resolve() and Promise.reject()",
            "Promise.all() for parallel execution",
            "Promise.race() for timeouts",
            "Error handling strategies"
        ],
        exercises: [
            "Use Promise.all() to fetch multiple API endpoints",
            "Implement a timeout using Promise.race()",
            "Handle different types of errors appropriately",
            "Create a retry mechanism for failed requests"
        ],
        practiceTime: "3-4 hours"
    },
    week3: {
        day: "Saturday 3",
        topics: [
            "Introduction to async/await",
            "Converting Promise chains to async/await",
            "Error handling with try/catch",
            "Parallel vs sequential execution"
        ],
        exercises: [
            "Convert existing Promise chains to async/await",
            "Implement proper error handling with try/catch",
            "Use async/await with Promise.all()",
            "Create a function that handles both success and error cases"
        ],
        practiceTime: "4-5 hours"
    },
    week4: {
        day: "Saturday 4",
        topics: [
            "Advanced Promise patterns",
            "Promise.allSettled() for partial failures",
            "Custom Promise utilities",
            "Real-world project integration"
        ],
        exercises: [
            "Build a complete user registration flow",
            "Create a data loading system with fallbacks",
            "Implement a caching mechanism with Promises",
            "Build a small project using all Promise concepts"
        ],
        practiceTime: "5-6 hours"
    }
};

console.log("📅 4-Week Saturday Study Plan:");
Object.values(studyPlan).forEach(week => {
    console.log(`\n${week.day}:`);
    console.log(`⏰ Time: ${week.practiceTime}`);
    console.log("📖 Topics:");
    week.topics.forEach(topic => console.log(`  • ${topic}`));
    console.log("💪 Exercises:");
    week.exercises.forEach(exercise => console.log(`  • ${exercise}`));
});

/* 
==========================================
10. PRACTICE EXERCISES
==========================================

Hands-on exercises to reinforce learning
*/

console.log("\n📚 SECTION 10: Practice Exercises");

// Exercise 1: Basic Promise Creation
console.log("\n🏋️ Exercise 1: Basic Promise Creation");
console.log("Create a Promise that simulates downloading a file");

function downloadFile(filename, size) {
    return new Promise((resolve, reject) => {
        console.log(`📥 Starting download: ${filename} (${size}MB)`);
        
        if (size <= 0) {
            reject(new Error("Invalid file size"));
            return;
        }
        
        const downloadTime = size * 100; // 100ms per MB
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += 10;
            console.log(`📊 Download progress: ${progress}%`);
            
            if (progress >= 100) {
                clearInterval(interval);
                resolve({
                    filename: filename,
                    size: size,
                    downloadedAt: new Date().toISOString()
                });
            }
        }, downloadTime / 10);
    });
}

// Exercise 2: Promise Chaining
console.log("\n🏋️ Exercise 2: Promise Chaining");
console.log("Chain multiple operations together");

async function processUserData(userId) {
    try {
        console.log(`👤 Processing user data for ID: ${userId}`);
        
        // Step 1: Get user info
        const user = await getUserInfo(userId);
        console.log("✅ User info retrieved");
        
        // Step 2: Get user's orders
        const orders = await getUserOrders(userId);
        console.log("✅ User orders retrieved");
        
        // Step 3: Calculate total spent
        const totalSpent = orders.reduce((sum, order) => sum + order.amount, 0);
        console.log(`💰 Total spent: $${totalSpent}`);
        
        // Step 4: Update user profile
        const updatedUser = await updateUserProfile(userId, { totalSpent });
        console.log("✅ User profile updated");
        
        return {
            user: updatedUser,
            orders: orders,
            totalSpent: totalSpent
        };
        
    } catch (error) {
        console.log("❌ Error processing user data:", error);
        throw error;
    }
}

// Exercise 3: Error Handling
console.log("\n🏋️ Exercise 3: Error Handling");
console.log("Implement comprehensive error handling");

async function robustDataFetching() {
    const endpoints = [
        "https://api.example.com/users",
        "https://api.example.com/posts",
        "https://api.example.com/comments"
    ];
    
    try {
        console.log("🔄 Fetching data from multiple endpoints...");
        
        const results = await Promise.allSettled(
            endpoints.map(endpoint => fetchData(endpoint))
        );
        
        const successful = results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value);
            
        const failed = results
            .filter(result => result.status === 'rejected')
            .map(result => result.reason);
        
        console.log(`✅ Successfully fetched ${successful.length} endpoints`);
        console.log(`❌ Failed to fetch ${failed.length} endpoints`);
        
        if (failed.length > 0) {
            console.log("Failed endpoints:", failed.map(error => error.message));
        }
        
        return {
            successful: successful,
            failed: failed,
            successRate: (successful.length / endpoints.length) * 100
        };
        
    } catch (error) {
        console.log("❌ Unexpected error in data fetching:", error);
        throw error;
    }
}

// Helper functions for exercises
function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "John Doe",
                    email: "john@example.com"
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

function getUserOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, amount: 100, date: "2024-01-01" },
                { id: 2, amount: 200, date: "2024-01-02" },
                { id: 3, amount: 150, date: "2024-01-03" }
            ]);
        }, 800);
    });
}

function updateUserProfile(userId, updates) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: userId,
                name: "John Doe",
                email: "john@example.com",
                ...updates,
                updatedAt: new Date().toISOString()
            });
        }, 600);
    });
}

// Run exercises
console.log("\n🚀 Running Practice Exercises:");

// Exercise 1
downloadFile("document.pdf", 5)
    .then(result => {
        console.log("Download completed:", result);
    })
    .catch(error => {
        console.log("Download failed:", error);
    });

// Exercise 2
processUserData(123)
    .then(result => {
        console.log("User data processed:", result);
    })
    .catch(error => {
        console.log("User data processing failed:", error);
    });

// Exercise 3
robustDataFetching()
    .then(result => {
        console.log("Data fetching completed:", result);
    })
    .catch(error => {
        console.log("Data fetching failed:", error);
    });

/* 
==========================================
BONUS: QUICK REFERENCE GUIDE
==========================================

Quick reference for common Promise operations
*/

console.log("\n📚 BONUS: Quick Reference Guide");

const quickReference = {
    "Creating Promises": {
        "Basic Promise": "new Promise((resolve, reject) => { ... })",
        "Immediate Resolve": "Promise.resolve(value)",
        "Immediate Reject": "Promise.reject(error)"
    },
    "Handling Promises": {
        "Success": ".then(result => { ... })",
        "Error": ".catch(error => { ... })",
        "Finally": ".finally(() => { ... })",
        "Chaining": ".then().then().catch()"
    },
    "Async/Await": {
        "Function Declaration": "async function myFunction() { ... }",
        "Await": "const result = await myPromise;",
        "Error Handling": "try { ... } catch (error) { ... }"
    },
    "Parallel Execution": {
        "All Success": "Promise.all([promise1, promise2, promise3])",
        "Some May Fail": "Promise.allSettled([promise1, promise2, promise3])",
        "First to Complete": "Promise.race([promise1, promise2, promise3])"
    },
    "Common Patterns": {
        "Timeout": "Promise.race([promise, timeoutPromise])",
        "Retry": "for loop with try/catch",
        "Fallback": "try/catch with alternative data source"
    }
};

console.log("📖 Quick Reference:");
Object.entries(quickReference).forEach(([category, patterns]) => {
    console.log(`\n${category}:`);
    Object.entries(patterns).forEach(([pattern, code]) => {
        console.log(`  ${pattern}: ${code}`);
    });
});

console.log("\n🎉 Congratulations! You've completed the Complete Promise Learning Guide!");
console.log("💡 Remember: Practice makes perfect. Try building small projects using these concepts!");
console.log("📚 Next steps: Learn about async iterators, generators, and advanced JavaScript patterns!");

/* 
==========================================
END OF COMPLETE PROMISE GUIDE
==========================================
*/
