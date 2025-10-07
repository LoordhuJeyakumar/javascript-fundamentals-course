# Assignment 2: Bank Account System

## 🎯 **Goal**
Design and implement a comprehensive Bank Account System using JavaScript classes and object-oriented programming principles. This system will handle multiple account types, transactions, and banking operations.

## 📝 **Requirements**

### **1. Base Account Class**

#### **a. Properties**
- `accountNumber` (string): Unique account identifier
- `accountHolder` (string): Name of account holder
- `balance` (number): Current account balance
- `transactions` (array): Transaction history
- `createdAt` (Date): Account creation date
- `isActive` (boolean): Account status

#### **b. Methods**
- `deposit(amount)`: Deposit money into account
- `withdraw(amount)`: Withdraw money from account
- `getBalance()`: Get current balance
- `getTransactionHistory()`: Get transaction history
- `transfer(amount, targetAccount)`: Transfer money to another account
- `closeAccount()`: Close the account
- `getAccountInfo()`: Get account information

### **2. Specialized Account Classes**

#### **a. SavingsAccount (Extends Account)**
- Additional properties: `interestRate`, `minimumBalance`
- Override `withdraw()` to enforce minimum balance
- Add `calculateInterest()` method
- Add `applyInterest()` method

#### **b. CheckingAccount (Extends Account)**
- Additional properties: `overdraftLimit`, `monthlyFee`
- Override `withdraw()` to allow overdraft up to limit
- Add `chargeMonthlyFee()` method
- Add `getOverdraftStatus()` method

#### **c. BusinessAccount (Extends Account)**
- Additional properties: `businessName`, `taxId`, `monthlyFee`
- Override `transfer()` to allow higher transfer limits
- Add `getBusinessInfo()` method
- Add `chargeMonthlyFee()` method

### **3. Transaction Class**

#### **a. Properties**
- `id`, `type`, `amount`, `timestamp`, `description`, `accountId`
- `status` (pending, completed, failed)
- `reference` (optional reference number)

#### **b. Methods**
- `process()`: Process the transaction
- `getTransactionInfo()`: Get transaction details
- `isValid()`: Validate transaction

### **4. Bank Class**

#### **a. Properties**
- `name` (string): Bank name
- `accounts` (array): All bank accounts
- `transactions` (array): All bank transactions
- `nextAccountNumber` (number): Next available account number

#### **b. Methods**
- `createAccount(accountType, accountHolder, initialBalance)`: Create new account
- `getAccount(accountNumber)`: Get account by number
- `getAllAccounts()`: Get all accounts
- `processTransaction(transaction)`: Process a transaction
- `getBankReport()`: Generate bank report
- `getAccountReport(accountNumber)`: Generate account report

### **5. Advanced Features**

#### **a. Transaction Processing**
- Validate transactions before processing
- Handle transaction failures gracefully
- Maintain transaction audit trail
- Support different transaction types (deposit, withdrawal, transfer, fee)

#### **b. Account Management**
- Generate unique account numbers
- Handle account closures
- Track account status
- Support account reactivation

#### **c. Reporting System**
- Bank-wide statistics
- Account-specific reports
- Transaction summaries
- Financial health indicators

## 💡 **Hints**
- Use inheritance to create different account types
- Implement proper error handling for invalid operations
- Use unique identifiers for accounts and transactions
- Validate all inputs before processing
- Use arrays to store collections of accounts and transactions
- Implement proper encapsulation for sensitive data

## 🚀 **Example Usage (Expected Output)**

```javascript
// Create bank
let bank = new Bank("First National Bank");

// Create accounts
let savingsAccount = bank.createAccount("savings", "John Doe", 1000);
let checkingAccount = bank.createAccount("checking", "Jane Smith", 500);
let businessAccount = bank.createAccount("business", "ABC Corp", 10000);

// Deposit money
savingsAccount.deposit(500);
checkingAccount.deposit(200);

// Withdraw money
savingsAccount.withdraw(100);
checkingAccount.withdraw(50);

// Transfer money
savingsAccount.transfer(200, checkingAccount);

// Get account information
console.log("Savings account:", savingsAccount.getAccountInfo());
console.log("Checking account:", checkingAccount.getAccountInfo());

// Get transaction history
console.log("Savings transactions:", savingsAccount.getTransactionHistory());
console.log("Checking transactions:", checkingAccount.getTransactionHistory());

// Calculate interest for savings account
savingsAccount.applyInterest();
console.log("Savings balance after interest:", savingsAccount.getBalance());

// Get bank report
let bankReport = bank.getBankReport();
console.log("Bank report:", bankReport);

// Get account report
let accountReport = bank.getAccountReport(savingsAccount.accountNumber);
console.log("Account report:", accountReport);
```

## 🌟 **Bonus Challenges (Optional)**
- Implement loan accounts with payment schedules
- Add credit card accounts with spending limits
- Create investment accounts with portfolio tracking
- Implement online banking features
- Add fraud detection and security measures
- Create mobile banking app interface
- Implement interest rate calculations
- Add account statement generation

## 提交 (Submission)
- Create a new JavaScript file (e.g., `bank-account-system.js`) in your `student-work` folder
- Implement all the required classes and methods
- Demonstrate the system with example usage as shown above
- Add comments to explain your code
- Include comprehensive error handling and validation

Good luck! 🏦
