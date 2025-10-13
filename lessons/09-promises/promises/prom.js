// 11. Practical Example: API Calls
console.log("\n📚 11. Practical Example: API Calls");
console.log("----------------------------------");

// Simulate API calls
async function fetchUserData(userId) {
    console.log(`Fetching user data for ID: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
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
                    { id: 1, title: "Post 1", content: "Content 1" },
                    { id: 2, title: "Post 2", content: "Content 2" }
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
                    { id: 1, text: "Comment 1" },
                    { id: 2, text: "Comment 2" }
                ]);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, Math.random() * 1000 + 200);
    });
}

// Sequential API calls
async function sequentialApiCalls(userId) {
    try {
        console.log("Starting sequential API calls");
        let start = Date.now();
        
        let user = await fetchUserData(userId);
        console.log("User data:", user);
        
        let posts = await fetchUserPosts(userId);
        console.log("User posts:", posts);
        
        let comments = await fetchUserComments(userId);
        console.log("User comments:", comments);
        
        let end = Date.now();
        console.log("Sequential API calls took:", end - start, "ms");
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Sequential API calls error:", error.message);
        throw error;
    }
}

// Parallel API calls
async function parallelApiCalls(userId) {
    try {
        console.log("Starting parallel API calls");
        let start = Date.now();
        
        let [user, posts, comments] = await Promise.all([
            fetchUserData(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId)
        ]);
        
        console.log("User data:", user);
        console.log("User posts:", posts);
        console.log("User comments:", comments);
        
        let end = Date.now();
        console.log("Parallel API calls took:", end - start, "ms");
        
        return { user, posts, comments };
    } catch (error) {
        console.log("Parallel API calls error:", error.message);
        throw error;
    }
}

// Test both approaches
//sequentialApiCalls(1).then((result) => {
//    console.log("Sequential API calls completed:", result);

parallelApiCalls(1).then((result) => {
    console.log("Parallel API calls completed:", result);
});
