// Exercise 1: Variables and Data Types
// Complete the TODO sections below

console.log("💪 Exercise 1: Variables and Data Types");
console.log("=====================================");

// Exercise 1: Variable Declaration
console.log("\n1. Variable Declaration:");
// TODO: Declare a variable using let
let myVariable = null; // Your code here
// Hint: let variableName = value;

// TODO: Declare a constant using const
const myConstant = null; // Your code here
// Hint: const constantName = value;

// TODO: Declare a variable using var (not recommended, but for learning)
var myOldVariable = null; // Your code here
// Hint: var variableName = value;

console.log("myVariable:", myVariable);
console.log("myConstant:", myConstant);
console.log("myOldVariable:", myOldVariable);

// Exercise 2: Variable Assignment
console.log("\n2. Variable Assignment:");
// TODO: Assign a string value to a variable
let stringVar = null; // Your code here
// Hint: let stringVar = "Hello World";

// TODO: Assign a number value to a variable
let numberVar = null; // Your code here
// Hint: let numberVar = 42;

// TODO: Assign a boolean value to a variable
let booleanVar = null; // Your code here
// Hint: let booleanVar = true;

// TODO: Assign an object to a variable
let objectVar = null; // Your code here
// Hint: let objectVar = { name: "John", age: 30 };

// TODO: Assign an array to a variable
let arrayVar = null; // Your code here
// Hint: let arrayVar = [1, 2, 3, 4, 5];

console.log("stringVar:", stringVar, typeof stringVar);
console.log("numberVar:", numberVar, typeof numberVar);
console.log("booleanVar:", booleanVar, typeof booleanVar);
console.log("objectVar:", objectVar, typeof objectVar);
console.log("arrayVar:", arrayVar, typeof arrayVar);

// Exercise 3: Variable Reassignment
console.log("\n3. Variable Reassignment:");
// TODO: Declare a variable and then reassign it
let reassignableVar = null; // Your code here
// Hint: let reassignableVar = "Initial value";

// TODO: Reassign the variable to a different value
reassignableVar = null; // Your code here
// Hint: reassignableVar = "New value";

console.log("reassignableVar:", reassignableVar);

// Exercise 4: Variable Scoping
console.log("\n4. Variable Scoping:");
// TODO: Create a function that demonstrates variable scoping
function demonstrateScoping() {
    // TODO: Declare a variable inside the function
    let functionVar = null; // Your code here
    // Hint: let functionVar = "I'm inside the function";
    
    console.log("Inside function - functionVar:", functionVar);
    
    // TODO: Create a block scope with if statement
    if (true) {
        // TODO: Declare a variable inside the block
        let blockVar = null; // Your code here
        // Hint: let blockVar = "I'm inside the block";
        
        console.log("Inside block - blockVar:", blockVar);
        console.log("Inside block - functionVar:", functionVar);
    }
    
    // TODO: Try to access blockVar outside the block (this will cause an error)
    // console.log("Outside block - blockVar:", blockVar); // This will cause an error
}

demonstrateScoping();

// Exercise 5: Data Types
console.log("\n5. Data Types:");
// TODO: Create variables of different primitive types
let stringType = null; // Your code here
let numberType = null; // Your code here
let booleanType = null; // Your code here
let nullType = null; // Your code here
let undefinedType = null; // Your code here

// TODO: Create variables of different reference types
let objectType = null; // Your code here
let arrayType = null; // Your code here
let functionType = null; // Your code here

console.log("Primitive types:");
console.log("stringType:", stringType, typeof stringType);
console.log("numberType:", numberType, typeof numberType);
console.log("booleanType:", booleanType, typeof booleanType);
console.log("nullType:", nullType, typeof nullType);
console.log("undefinedType:", undefinedType, typeof undefinedType);

console.log("Reference types:");
console.log("objectType:", objectType, typeof objectType);
console.log("arrayType:", arrayType, typeof arrayType);
console.log("functionType:", functionType, typeof functionType);

// Exercise 6: Type Checking
console.log("\n6. Type Checking:");
// TODO: Use typeof operator to check types
let checkString = "Hello";
let checkNumber = 42;
let checkBoolean = true;
let checkObject = {};
let checkArray = [];

console.log("Type checking with typeof:");
console.log("typeof checkString:", null); // Your code here
// Hint: typeof checkString

console.log("typeof checkNumber:", null); // Your code here
// Hint: typeof checkNumber

console.log("typeof checkBoolean:", null); // Your code here
// Hint: typeof checkBoolean

console.log("typeof checkObject:", null); // Your code here
// Hint: typeof checkObject

console.log("typeof checkArray:", null); // Your code here
// Hint: typeof checkArray

// Exercise 7: Variable Naming Conventions
console.log("\n7. Variable Naming Conventions:");
// TODO: Create variables following naming conventions
let userName = null; // Your code here
let userAge = null; // Your code here
let isLoggedIn = null; // Your code here
let userEmail = null; // Your code here

// TODO: Create constants following naming conventions
const MAX_RETRY_ATTEMPTS = null; // Your code here
const API_BASE_URL = null; // Your code here
const DEFAULT_TIMEOUT = null; // Your code here

console.log("Naming conventions:");
console.log("userName:", userName);
console.log("userAge:", userAge);
console.log("isLoggedIn:", isLoggedIn);
console.log("userEmail:", userEmail);
console.log("MAX_RETRY_ATTEMPTS:", MAX_RETRY_ATTEMPTS);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("DEFAULT_TIMEOUT:", DEFAULT_TIMEOUT);

// Exercise 8: Variable Hoisting
console.log("\n8. Variable Hoisting:");
// TODO: Demonstrate hoisting behavior
console.log("Before declaration - hoistedVar:", hoistedVar); // This will be undefined
var hoistedVar = "I'm hoisted";

// TODO: Demonstrate let hoisting (Temporal Dead Zone)
// console.log("Before declaration - hoistedLet:", hoistedLet); // This will cause an error
let hoistedLet = "I'm hoisted but not initialized";

console.log("After declaration - hoistedVar:", hoistedVar);
console.log("After declaration - hoistedLet:", hoistedLet);

// Exercise 9: Variable Destructuring
console.log("\n9. Variable Destructuring:");
// TODO: Use destructuring assignment with arrays
let numbers = [1, 2, 3, 4, 5];
let [first, second, third] = null; // Your code here
// Hint: [first, second, third] = numbers;

console.log("Array destructuring:");
console.log("first:", first);
console.log("second:", second);
console.log("third:", third);

// TODO: Use destructuring assignment with objects
let person = { name: "John", age: 30, city: "New York" };
let { name, age, city } = null; // Your code here
// Hint: { name, age, city } = person;

console.log("Object destructuring:");
console.log("name:", name);
console.log("age:", age);
console.log("city:", city);

// Exercise 10: Variable Best Practices
console.log("\n10. Variable Best Practices:");
// TODO: Create a function that demonstrates best practices
function demonstrateBestPractices() {
    // TODO: Use const by default
    const constantValue = null; // Your code here
    // Hint: const constantValue = "I'm constant";
    
    // TODO: Use let when reassignment is needed
    let changeableValue = null; // Your code here
    // Hint: let changeableValue = "Initial value";
    
    // TODO: Use descriptive variable names
    let userFirstName = null; // Your code here
    let userLastName = null; // Your code here
    let userFullName = null; // Your code here
    
    // TODO: Initialize variables when declaring them
    let initializedVar = null; // Your code here
    // Hint: let initializedVar = "I'm initialized";
    
    // TODO: Group related variables together
    let userData = {
        firstName: userFirstName,
        lastName: userLastName,
        fullName: userFullName
    };
    
    console.log("Best practices example:");
    console.log("constantValue:", constantValue);
    console.log("changeableValue:", changeableValue);
    console.log("userData:", userData);
    console.log("initializedVar:", initializedVar);
}

demonstrateBestPractices();

// Exercise 11: Variable Memory Management
console.log("\n11. Variable Memory Management:");
// TODO: Create a function that demonstrates memory management
function demonstrateMemoryManagement() {
    // TODO: Create variables that will be garbage collected
    let localVar1 = "I'm local";
    let localVar2 = "I'm also local";
    
    // TODO: Create a closure that keeps variables in memory
    function createClosure() {
        let closureVar = "I'm in closure";
        return function() {
            return closureVar;
        };
    }
    
    let closureFunction = createClosure();
    
    console.log("Memory management example:");
    console.log("localVar1:", localVar1);
    console.log("localVar2:", localVar2);
    console.log("closureFunction():", closureFunction());
}

demonstrateMemoryManagement();

// Exercise 12: Variable Debugging
console.log("\n12. Variable Debugging:");
// TODO: Create a function that demonstrates debugging variables
function demonstrateVariableDebugging() {
    let debugVar1 = "Debug me";
    let debugVar2 = 42;
    let debugVar3 = true;
    
    console.log("Variable debugging:");
    console.log("debugVar1:", debugVar1, typeof debugVar1);
    console.log("debugVar2:", debugVar2, typeof debugVar2);
    console.log("debugVar3:", debugVar3, typeof debugVar3);
    
    // TODO: Use console.log to inspect variable values
    console.log("debugVar1 length:", null); // Your code here
    // Hint: debugVar1.length
    
    console.log("debugVar2 squared:", null); // Your code here
    // Hint: debugVar2 * debugVar2
    
    console.log("debugVar3 negated:", null); // Your code here
    // Hint: !debugVar3
}

demonstrateVariableDebugging();

console.log("\n🎉 Exercise 1 Complete!");
console.log("=====================");
console.log("Great job! You've practiced variables and data types.");
console.log("Key concepts practiced:");
console.log("- Variable declaration with let, const, var");
console.log("- Variable assignment and reassignment");
console.log("- Variable scoping and hoisting");
console.log("- Data types and type checking");
console.log("- Variable naming conventions");
console.log("- Destructuring assignment");
console.log("- Best practices for variables");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 2: Operators and Expressions");
console.log("4. Ask questions if you need help");
