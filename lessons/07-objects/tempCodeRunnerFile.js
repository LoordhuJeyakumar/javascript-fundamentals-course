class User {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._age = 0;
        this._isActive = true;
    }
    
    // Getter
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    
    // Setter
    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0] || '';
        this._lastName = parts[1] || '';
    }
    
    // Getter
    // get email() {
    //     return this._email;
    // }
    
    // Setter with validation
    set email(value) {
        if (typeof value === 'string' && value.includes('@')) {
            this._email = value;
        } else {
            throw new Error("Invalid email format");
        }
    }
    
    // Getter
    get age() {
        return this._age;
    }
    
    // Setter with validation
    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 150) {
            this._age = value;
        } else {
            throw new Error("Age must be a number between 0 and 150");
        }
    }
    
    // Getter
    get isActive() {
        return this._isActive;
    }
    
    // Setter
    set isActive(value) {
        this._isActive = Boolean(value);
    }
    
    // Getter
    get userInfo() {
        return {
            name: this.fullName,
            email: this.email,
            age: this.age,
            isActive: this.isActive
        };
    }
    
    // Instance method
    activate() {
        this.isActive = true;
        return "User activated";
    }
    
    // Instance method
    deactivate() {
        this.isActive = false;
        return "User deactivated";
    }
}

// Create user
let user = new User("John", "Doe", "john@example.com");

console.log("User with getters and setters:");
console.log("Full name:", user.fullName);
console.log("Email:", user._email);
console.log("Age:", user._age);
console.log("Is active:", user._isActive);

// Test setters
user.fullName = "Jane Smith";
user.age = 25;
user.email = "jane@example.com";

console.log("After modification:");
console.log("Full name:", user.fullName);
console.log("Email:", user.email);
console.log("Age:", user.age);
console.log("User info:", user.userInfo);

// Test validation
try {
    user.age = -5;
} catch (error) {
    console.log("Age validation error:", error.message);
}

try {
    user.email = "invalid-email";
} catch (error) {
    console.log("Email validation error:", error.message);
}
