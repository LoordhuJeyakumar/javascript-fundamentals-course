# Assignment 3: Student Grade Management System

## 🎯 **Goal**
Design and implement a comprehensive Student Grade Management System using JavaScript basics. This project will require you to integrate various concepts including variables, data types, operators, control flow, type conversion, and best practices to build a robust application.

## 📝 **Requirements**

### **1. Data Structure**
- Create an array named `students` to store student objects
- Each student object should have the following properties:
  - `id` (unique number)
  - `firstName` (string)
  - `lastName` (string)
  - `email` (string)
  - `grades` (array of numbers)
  - `attendance` (number, percentage)
  - `isActive` (boolean)

### **2. Core Functions**

#### **a. Student Management**
- `addStudent(id, firstName, lastName, email)`:
  - Adds a new student to the `students` array
  - Validates that `id` is unique
  - Validates email format
  - Initializes grades as empty array and attendance as 100

#### **b. Grade Management**
- `addGrade(studentId, grade)`:
  - Adds a grade to a specific student's grades array
  - Validates that the grade is between 0 and 100
  - Validates that the student exists

#### **c. Grade Calculations**
- `calculateAverage(studentId)`:
  - Calculates the average grade for a specific student
  - Returns the average or error message if student not found

#### **d. Student Information**
- `getStudentInfo(studentId)`:
  - Returns complete student information including grades and average
  - Returns error message if student not found

### **3. Advanced Functions**

#### **a. Grade Analysis**
- `getGradeDistribution()`:
  - Returns an object with grade distribution (A, B, C, D, F)
  - Based on standard grading scale (90-100: A, 80-89: B, etc.)

#### **b. Student Statistics**
- `getClassStatistics()`:
  - Returns overall class statistics (average, highest, lowest grades)
  - Includes total number of students

#### **c. Attendance Management**
- `updateAttendance(studentId, attendance)`:
  - Updates student attendance percentage
  - Validates attendance is between 0 and 100

#### **d. Student Search**
- `searchStudents(query)`:
  - Searches students by name or email
  - Returns array of matching students

### **4. Reporting Functions**

#### **a. Grade Report**
- `generateGradeReport(studentId)`:
  - Generates a detailed grade report for a specific student
  - Includes all grades, average, and letter grade

#### **b. Class Report**
- `generateClassReport()`:
  - Generates a comprehensive class report
  - Includes all students, their grades, and statistics

#### **c. Honor Roll**
- `getHonorRoll(threshold)`:
  - Returns students with average grade above threshold
  - Default threshold is 90

### **5. Data Validation**

#### **a. Input Validation**
- Validate all inputs (names, emails, grades, attendance)
- Handle edge cases and invalid data
- Provide meaningful error messages

#### **b. Data Integrity**
- Ensure data consistency
- Handle missing or corrupted data
- Implement data recovery mechanisms

### **6. User Interface**

#### **a. Menu System**
- `displayMenu()`:
  - Shows available operations
  - Provides usage examples
  - Displays current statistics

#### **b. Interactive Commands**
- Implement command-based interface
- Handle user input validation
- Provide help and error messages

## 💡 **Hints**
- Use `const` for values that don't change, `let` for values that do
- Use template literals for string formatting
- Use `Array.prototype.find()` to search for students
- Use `Array.prototype.filter()` for filtering operations
- Use `Array.prototype.reduce()` for calculations
- Use `try-catch` blocks for error handling
- Use `console.log()` and `console.table()` for output

## 🚀 **Example Usage (Expected Output)**

```javascript
// Add students
addStudent(1, "John", "Doe", "john.doe@example.com");
addStudent(2, "Jane", "Smith", "jane.smith@example.com");
addStudent(3, "Bob", "Johnson", "bob.johnson@example.com");

// Add grades
addGrade(1, 85);
addGrade(1, 92);
addGrade(1, 78);
addGrade(2, 95);
addGrade(2, 88);
addGrade(2, 91);
addGrade(3, 72);
addGrade(3, 68);
addGrade(3, 75);

// Update attendance
updateAttendance(1, 95);
updateAttendance(2, 98);
updateAttendance(3, 87);

// Display student information
console.log("Student 1 Info:", getStudentInfo(1));
// Expected: Complete student information with grades and average

// Calculate averages
console.log("Student 1 Average:", calculateAverage(1));
// Expected: 85 (example)

// Generate grade report
console.log("Grade Report for Student 1:");
generateGradeReport(1);
// Expected: Detailed grade report

// Get class statistics
console.log("Class Statistics:", getClassStatistics());
// Expected: Overall class statistics

// Get grade distribution
console.log("Grade Distribution:", getGradeDistribution());
// Expected: { A: 1, B: 1, C: 1, D: 0, F: 0 }

// Search students
console.log("Search Results:", searchStudents("John"));
// Expected: Array containing John Doe

// Get honor roll
console.log("Honor Roll:", getHonorRoll(90));
// Expected: Array of students with average > 90

// Generate class report
console.log("Class Report:");
generateClassReport();
// Expected: Comprehensive class report
```

## 🌟 **Bonus Challenges (Optional)**
- Implement grade weighting (assignments, tests, projects)
- Add grade trends and progress tracking
- Implement grade export/import functionality
- Add grade curve calculations
- Implement student performance predictions
- Add grade history and audit trail

## 提交 (Submission)
- Create a new JavaScript file (e.g., `grade-management.js`) in your `student-work` folder
- Implement all the required functions and demonstrate their usage as shown in the example
- Add comprehensive error handling and input validation
- Include debugging statements throughout your code
- Add comments to explain your code

Good luck! 📊
