# Assignment 1: Personal Information Manager

## 🎯 **Goal**
Build a command-line Personal Information Manager using JavaScript basics. This assignment will test your understanding of variables, data types, operators, control flow, type conversion, and debugging techniques.

## 📝 **Requirements**

### **1. Data Structure**
- Create variables to store personal information:
  - `firstName` (string)
  - `lastName` (string)
  - `age` (number)
  - `email` (string)
  - `phoneNumber` (string)
  - `isStudent` (boolean)
  - `hobbies` (array of strings)
  - `address` (object with street, city, state, zipCode)

### **2. Core Functions**

#### **a. Display Personal Information**
- `displayPersonalInfo()`:
  - Prints all personal information in a formatted way
  - Uses template literals for string formatting
  - Includes proper labels for each field

#### **b. Calculate Age in Days**
- `calculateAgeInDays()`:
  - Calculates and returns the age in days
  - Uses the current date and birth year
  - Handles leap years correctly

#### **c. Validate Email Format**
- `validateEmail(email)`:
  - Checks if the email format is valid
  - Returns `true` if valid, `false` if invalid
  - Uses a simple regex pattern

#### **d. Format Phone Number**
- `formatPhoneNumber(phoneNumber)`:
  - Formats phone number as (XXX) XXX-XXXX
  - Handles different input formats
  - Returns formatted string

#### **e. Check Student Status**
- `checkStudentStatus()`:
  - Returns a message based on student status
  - If student: "Currently enrolled as a student"
  - If not student: "Not currently a student"

### **3. Advanced Functions**

#### **a. Generate Username**
- `generateUsername()`:
  - Creates a username from first and last name
  - Converts to lowercase
  - Adds a random number (1-999)
  - Returns formatted username

#### **b. Calculate Hobby Score**
- `calculateHobbyScore()`:
  - Assigns points based on number of hobbies
  - 1-2 hobbies: 10 points
  - 3-4 hobbies: 20 points
  - 5+ hobbies: 30 points
  - Returns the score

#### **c. Format Address**
- `formatAddress()`:
  - Formats the address object into a readable string
  - Returns formatted address string

#### **d. Personal Summary**
- `generatePersonalSummary()`:
  - Creates a comprehensive summary
  - Includes all key information
  - Uses proper formatting and spacing

### **4. Input Validation**
- Add validation for all user inputs
- Handle edge cases (empty strings, invalid numbers, etc.)
- Provide meaningful error messages

### **5. Debugging Features**
- Add console.log statements for debugging
- Use console.table() for displaying objects
- Include error handling with try-catch blocks

## 💡 **Hints**
- Use `const` for values that don't change, `let` for values that do
- Use template literals for string formatting
- Use `Date` object for age calculations
- Use regex for email validation
- Use `Math.random()` for random number generation
- Use `console.log()` and `console.table()` for debugging

## 🚀 **Example Usage (Expected Output)**

```javascript
// Initialize personal information
const firstName = "John";
const lastName = "Doe";
const age = 25;
const email = "john.doe@example.com";
const phoneNumber = "1234567890";
const isStudent = true;
const hobbies = ["reading", "coding", "gaming", "hiking"];
const address = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001"
};

// Display personal information
displayPersonalInfo();
// Expected: Formatted display of all personal information

// Calculate age in days
let ageInDays = calculateAgeInDays();
console.log(`Age in days: ${ageInDays}`);
// Expected: Age in days: 9125 (example)

// Validate email
let isValidEmail = validateEmail(email);
console.log(`Valid email: ${isValidEmail}`);
// Expected: Valid email: true

// Format phone number
let formattedPhone = formatPhoneNumber(phoneNumber);
console.log(`Formatted phone: ${formattedPhone}`);
// Expected: Formatted phone: (123) 456-7890

// Check student status
let studentStatus = checkStudentStatus();
console.log(studentStatus);
// Expected: Currently enrolled as a student

// Generate username
let username = generateUsername();
console.log(`Username: ${username}`);
// Expected: Username: johndoe123 (example)

// Calculate hobby score
let hobbyScore = calculateHobbyScore();
console.log(`Hobby score: ${hobbyScore}`);
// Expected: Hobby score: 20

// Format address
let formattedAddress = formatAddress();
console.log(`Address: ${formattedAddress}`);
// Expected: Address: 123 Main St, New York, NY 10001

// Generate personal summary
let summary = generatePersonalSummary();
console.log(summary);
// Expected: Comprehensive personal summary
```

## 🌟 **Bonus Challenges (Optional)**
- Add a function to update personal information
- Implement a function to add new hobbies
- Create a function to calculate age in different units (months, weeks, hours)
- Add input validation for all functions
- Implement a function to export personal information to a formatted string

## 提交 (Submission)
- Create a new JavaScript file (e.g., `personal-info-manager.js`) in your `student-work` folder
- Implement all the required functions and demonstrate their usage as shown in the example
- Add comments to explain your code
- Include debugging statements throughout your code

Good luck! 👤
