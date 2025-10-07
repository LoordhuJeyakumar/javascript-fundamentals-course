# Assignment 3: Employee Management System

## 🎯 **Goal**
Design and implement a comprehensive Employee Management System using JavaScript classes, inheritance, and object-oriented programming principles. This system will handle different types of employees, departments, and payroll calculations.

## 📝 **Requirements**

### **1. Base Employee Class**

#### **a. Properties**
- `id` (string): Unique employee identifier
- `firstName` (string): Employee's first name
- `lastName` (string): Employee's last name
- `email` (string): Employee's email address
- `phone` (string): Employee's phone number
- `hireDate` (Date): Date of hire
- `department` (string): Employee's department
- `isActive` (boolean): Employment status

#### **b. Methods**
- `getFullName()`: Get employee's full name
- `getEmail()`: Get employee's email
- `getPhone()`: Get employee's phone number
- `getHireDate()`: Get hire date
- `getDepartment()`: Get department
- `isEmployed()`: Check if employee is active
- `getEmployeeInfo()`: Get complete employee information
- `calculateSalary()`: Calculate salary (to be overridden)

### **2. Specialized Employee Classes**

#### **a. FullTimeEmployee (Extends Employee)**
- Additional properties: `annualSalary`, `benefits`, `vacationDays`
- Override `calculateSalary()` to return annual salary
- Add `getMonthlySalary()` method
- Add `useVacationDays(days)` method
- Add `getBenefits()` method

#### **b. PartTimeEmployee (Extends Employee)**
- Additional properties: `hourlyRate`, `hoursWorked`, `overtimeRate`
- Override `calculateSalary()` to return hourly rate * hours worked
- Add `addHours(hours)` method
- Add `getOvertimePay()` method
- Add `getWeeklyPay()` method

#### **c. Contractor (Extends Employee)**
- Additional properties: `contractRate`, `contractDuration`, `projectName`
- Override `calculateSalary()` to return contract rate
- Add `getContractInfo()` method
- Add `extendContract(months)` method
- Add `getProjectStatus()` method

#### **d. Manager (Extends FullTimeEmployee)**
- Additional properties: `teamSize`, `managementBonus`, `directReports`
- Override `calculateSalary()` to include management bonus
- Add `addDirectReport(employee)` method
- Add `removeDirectReport(employeeId)` method
- Add `getTeamInfo()` method

### **3. Department Class**

#### **a. Properties**
- `id` (string): Department identifier
- `name` (string): Department name
- `manager` (Manager): Department manager
- `employees` (array): Department employees
- `budget` (number): Department budget
- `location` (string): Department location

#### **b. Methods**
- `addEmployee(employee)`: Add employee to department
- `removeEmployee(employeeId)`: Remove employee from department
- `getEmployeeCount()`: Get number of employees
- `getTotalSalary()`: Calculate total department salary
- `getDepartmentInfo()`: Get department information
- `setManager(manager)`: Set department manager
- `getBudgetStatus()`: Get budget status

### **4. Payroll Class**

#### **a. Properties**
- `employees` (array): All employees
- `payPeriod` (string): Pay period (weekly, bi-weekly, monthly)
- `taxRate` (number): Tax rate percentage
- `benefitsRate` (number): Benefits rate percentage

#### **b. Methods**
- `addEmployee(employee)`: Add employee to payroll
- `removeEmployee(employeeId)`: Remove employee from payroll
- `calculatePayroll()`: Calculate total payroll
- `calculateTaxes(employee)`: Calculate taxes for employee
- `calculateBenefits(employee)`: Calculate benefits for employee
- `generatePayrollReport()`: Generate payroll report
- `processPayroll()`: Process payroll for all employees

### **5. Advanced Features**

#### **a. Employee Management**
- Generate unique employee IDs
- Track employee status changes
- Handle employee promotions
- Manage employee transfers between departments

#### **b. Payroll Processing**
- Calculate different pay types (salary, hourly, contract)
- Handle overtime calculations
- Apply taxes and benefits
- Generate pay stubs

#### **c. Reporting System**
- Department reports
- Payroll summaries
- Employee statistics
- Budget analysis

## 💡 **Hints**
- Use inheritance to create different employee types
- Implement proper error handling for invalid operations
- Use unique identifiers for employees and departments
- Validate all inputs before processing
- Use arrays to store collections of employees
- Implement proper encapsulation for sensitive data

## 🚀 **Example Usage (Expected Output)**

```javascript
// Create departments
let itDepartment = new Department("IT", "Information Technology", 500000, "Building A");
let hrDepartment = new Department("HR", "Human Resources", 300000, "Building B");

// Create employees
let manager1 = new Manager("M001", "John", "Smith", "john.smith@company.com", "123-456-7890", new Date("2020-01-15"), "IT", 100000, 5000, 20);
let fullTime1 = new FullTimeEmployee("E001", "Jane", "Doe", "jane.doe@company.com", "987-654-3210", new Date("2021-03-01"), "IT", 75000, ["Health", "Dental"], 15);
let partTime1 = new PartTimeEmployee("E002", "Bob", "Johnson", "bob.johnson@company.com", "555-123-4567", new Date("2022-06-01"), "IT", 25, 20, 1.5);
let contractor1 = new Contractor("C001", "Alice", "Brown", "alice.brown@company.com", "555-987-6543", new Date("2023-01-01"), "IT", 50, 6, "Website Redesign");

// Add employees to departments
itDepartment.addEmployee(manager1);
itDepartment.addEmployee(fullTime1);
itDepartment.addEmployee(partTime1);
itDepartment.addEmployee(contractor1);

// Set department manager
itDepartment.setManager(manager1);

// Add direct reports to manager
manager1.addDirectReport(fullTime1);
manager1.addDirectReport(partTime1);

// Create payroll system
let payroll = new Payroll("monthly", 0.25, 0.15);

// Add employees to payroll
payroll.addEmployee(manager1);
payroll.addEmployee(fullTime1);
payroll.addEmployee(partTime1);
payroll.addEmployee(contractor1);

// Add hours for part-time employee
partTime1.addHours(25);

// Calculate payroll
let totalPayroll = payroll.calculatePayroll();
console.log("Total payroll:", totalPayroll);

// Generate reports
let departmentReport = itDepartment.getDepartmentInfo();
console.log("Department report:", departmentReport);

let payrollReport = payroll.generatePayrollReport();
console.log("Payroll report:", payrollReport);

// Employee operations
console.log("Manager team info:", manager1.getTeamInfo());
console.log("Part-time employee weekly pay:", partTime1.getWeeklyPay());
console.log("Contractor project status:", contractor1.getProjectStatus());
```

## 🌟 **Bonus Challenges (Optional)**
- Implement employee performance tracking
- Add time tracking and attendance system
- Create employee training and certification tracking
- Implement employee benefits management
- Add employee feedback and review system
- Create organizational chart visualization
- Implement employee scheduling system
- Add employee exit interview system

## 提交 (Submission)
- Create a new JavaScript file (e.g., `employee-management.js`) in your `student-work` folder
- Implement all the required classes and methods
- Demonstrate the system with example usage as shown above
- Add comments to explain your code
- Include comprehensive error handling and validation

Good luck! 👥
