// Exercise 3: Control Flow
// Complete the TODO sections below

console.log("💪 Exercise 3: Control Flow");
console.log("==========================");

// Exercise 1: Basic If-Else Statements
console.log("\n1. Basic If-Else Statements:");
let age = 20;
let hasLicense = true;

// TODO: Create an if-else statement for age check
if (null) { // Your code here
    // Hint: age >= 18
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// TODO: Create an if-else statement for license check
if (null) { // Your code here
    // Hint: hasLicense
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

// Exercise 2: If-Else-If Statements
console.log("\n2. If-Else-If Statements:");
let score = 85;

// TODO: Create an if-else-if statement for grade calculation
if (null) { // Your code here
    // Hint: score >= 90
    console.log("Grade: A");
} else if (null) { // Your code here
    // Hint: score >= 80
    console.log("Grade: B");
} else if (null) { // Your code here
    // Hint: score >= 70
    console.log("Grade: C");
} else if (null) { // Your code here
    // Hint: score >= 60
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Exercise 3: Nested If Statements
console.log("\n3. Nested If Statements:");
let temperature = 25;
let isRaining = false;

// TODO: Create nested if statements for weather conditions
if (null) { // Your code here
    // Hint: temperature > 20
    if (null) { // Your code here
        // Hint: isRaining
        console.log("It's warm and raining - bring an umbrella");
    } else {
        console.log("It's warm and sunny - perfect weather!");
    }
} else {
    if (null) { // Your code here
        // Hint: isRaining
        console.log("It's cold and raining - stay indoors");
    } else {
        console.log("It's cold but dry - wear a jacket");
    }
}

// Exercise 4: Switch Statements
console.log("\n4. Switch Statements:");
let dayOfWeek = "Monday";

// TODO: Create a switch statement for day of week
switch (null) { // Your code here
    // Hint: dayOfWeek
    case null: // Your code here
        // Hint: "Monday"
        console.log("Start of the work week");
        break;
    case null: // Your code here
        // Hint: "Wednesday"
        console.log("Midweek");
        break;
    case null: // Your code here
        // Hint: "Friday"
        console.log("TGIF!");
        break;
    case null: // Your code here
        // Hint: "Saturday"
    case null: // Your code here
        // Hint: "Sunday"
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}

// Exercise 5: Switch with Multiple Cases
console.log("\n5. Switch with Multiple Cases:");
let month = "December";

// TODO: Create a switch statement for seasons
switch (null) { // Your code here
    // Hint: month
    case null: // Your code here
        // Hint: "December"
    case null: // Your code here
        // Hint: "January"
    case null: // Your code here
        // Hint: "February"
        console.log("Winter");
        break;
    case null: // Your code here
        // Hint: "March"
    case null: // Your code here
        // Hint: "April"
    case null: // Your code here
        // Hint: "May"
        console.log("Spring");
        break;
    case null: // Your code here
        // Hint: "June"
    case null: // Your code here
        // Hint: "July"
    case null: // Your code here
        // Hint: "August"
        console.log("Summer");
        break;
    case null: // Your code here
        // Hint: "September"
    case null: // Your code here
        // Hint: "October"
    case null: // Your code here
        // Hint: "November"
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

// Exercise 6: Switch with Fall-Through
console.log("\n6. Switch with Fall-Through:");
let number = 3;

// TODO: Create a switch statement with fall-through
switch (null) { // Your code here
    // Hint: number
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        // TODO: Add fall-through to case 4
        // Hint: Remove break statement
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Other number");
}

// Exercise 7: Ternary Operator
console.log("\n7. Ternary Operator:");
let isLoggedIn = true;
let userRole = "admin";

// TODO: Use ternary operator for login status
let loginMessage = null; // Your code here
// Hint: isLoggedIn ? "Welcome back!" : "Please log in"

// TODO: Use ternary operator for role check
let roleMessage = null; // Your code here
// Hint: userRole === "admin" ? "Admin access granted" : "Regular user access"

// TODO: Use nested ternary operator
let accessLevel = null; // Your code here
// Hint: userRole === "admin" ? "full" : userRole === "moderator" ? "limited" : "basic"

console.log("Ternary operator results:");
console.log("Login message:", loginMessage);
console.log("Role message:", roleMessage);
console.log("Access level:", accessLevel);

// Exercise 8: Logical Operators in Conditions
console.log("\n8. Logical Operators in Conditions:");
let hasAccount = true;
let isVerified = false;
let hasPermission = true;

// TODO: Use logical AND in condition
if (null) { // Your code here
    // Hint: hasAccount && isVerified
    console.log("Account is verified");
} else {
    console.log("Account needs verification");
}

// TODO: Use logical OR in condition
if (null) { // Your code here
    // Hint: isVerified || hasPermission
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// TODO: Use logical NOT in condition
if (null) { // Your code here
    // Hint: !isVerified
    console.log("Account not verified");
} else {
    console.log("Account is verified");
}

// Exercise 9: Complex Conditions
console.log("\n9. Complex Conditions:");
let userAge = 25;
let hasParentalConsent = true;
let isWeekend = false;

// TODO: Create complex condition for movie access
if (null) { // Your code here
    // Hint: userAge >= 18 || (userAge >= 13 && hasParentalConsent)
    console.log("You can watch the movie");
} else {
    console.log("You cannot watch this movie");
}

// TODO: Create complex condition for activity access
if (null) { // Your code here
    // Hint: userAge >= 16 && (isWeekend || hasParentalConsent)
    console.log("You can participate in the activity");
} else {
    console.log("You cannot participate in this activity");
}

// Exercise 10: Control Flow Best Practices
console.log("\n10. Control Flow Best Practices:");
let userInput = "hello";

// TODO: Use early return pattern
function checkUserInput(input) {
    if (null) { // Your code here
        // Hint: !input
        return "No input provided";
    }
    
    if (null) { // Your code here
        // Hint: input.length < 3
        return "Input too short";
    }
    
    return "Input is valid";
}

// TODO: Use guard clauses
function processUser(user) {
    if (null) { // Your code here
        // Hint: !user
        return "No user provided";
    }
    
    if (null) { // Your code here
        // Hint: !user.name
        return "User name is required";
    }
    
    if (null) { // Your code here
        // Hint: !user.email
        return "User email is required";
    }
    
    return "User processed successfully";
}

console.log("Best practices results:");
console.log("Input check:", checkUserInput(userInput));
console.log("User processing:", processUser({ name: "John", email: "john@example.com" }));

// Exercise 11: Switch vs If-Else
console.log("\n11. Switch vs If-Else:");
let operation = "add";
let num1 = 10;
let num2 = 5;

// TODO: Use switch statement for calculator
function calculateWithSwitch(op, a, b) {
    switch (null) { // Your code here
        // Hint: op
        case null: // Your code here
            // Hint: "add"
            return a + b;
        case null: // Your code here
            // Hint: "subtract"
            return a - b;
        case null: // Your code here
            // Hint: "multiply"
            return a * b;
        case null: // Your code here
            // Hint: "divide"
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

// TODO: Use if-else for calculator
function calculateWithIfElse(op, a, b) {
    if (null) { // Your code here
        // Hint: op === "add"
        return a + b;
    } else if (null) { // Your code here
        // Hint: op === "subtract"
        return a - b;
    } else if (null) { // Your code here
        // Hint: op === "multiply"
        return a * b;
    } else if (null) { // Your code here
        // Hint: op === "divide"
        return b !== 0 ? a / b : "Cannot divide by zero";
    } else {
        return "Invalid operation";
    }
}

console.log("Switch vs If-Else results:");
console.log("Switch result:", calculateWithSwitch(operation, num1, num2));
console.log("If-Else result:", calculateWithIfElse(operation, num1, num2));

// Exercise 12: Error Handling with Control Flow
console.log("\n12. Error Handling with Control Flow:");
let userData = { age: 25, name: "John" };

// TODO: Create error handling with control flow
function validateUserData(data) {
    if (null) { // Your code here
        // Hint: !data
        return { valid: false, error: "No data provided" };
    }
    
    if (null) { // Your code here
        // Hint: !data.name
        return { valid: false, error: "Name is required" };
    }
    
    if (null) { // Your code here
        // Hint: !data.age
        return { valid: false, error: "Age is required" };
    }
    
    if (null) { // Your code here
        // Hint: data.age < 0
        return { valid: false, error: "Age cannot be negative" };
    }
    
    if (null) { // Your code here
        // Hint: data.age > 150
        return { valid: false, error: "Age cannot be greater than 150" };
    }
    
    return { valid: true, error: null };
}

let validationResult = validateUserData(userData);
if (null) { // Your code here
    // Hint: validationResult.valid
    console.log("User data is valid");
} else {
    console.log("Validation error:", validationResult.error);
}

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced control flow.");
console.log("Key concepts practiced:");
console.log("- If-else statements and conditions");
console.log("- If-else-if statements for multiple conditions");
console.log("- Nested if statements");
console.log("- Switch statements with cases");
console.log("- Switch with multiple cases and fall-through");
console.log("- Ternary operator for simple conditions");
console.log("- Logical operators in conditions");
console.log("- Complex conditions with multiple operators");
console.log("- Best practices for control flow");
console.log("- Error handling with control flow");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: Type Conversion");
console.log("4. Ask questions if you need help");
