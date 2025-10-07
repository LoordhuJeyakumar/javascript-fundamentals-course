# Assignment 1: Library Management System

## 🎯 **Goal**
Build a comprehensive Library Management System using JavaScript objects and object-oriented programming principles. This assignment will test your understanding of objects, classes, inheritance, and real-world application design.

## 📝 **Requirements**

### **1. Core Classes**

#### **a. LibraryItem Class (Base Class)**
- Properties: `title`, `author`, `year`, `isAvailable`, `borrowedBy`, `borrowDate`
- Methods: `borrow(borrower)`, `return()`, `getInfo()`

#### **b. Book Class (Inherits from LibraryItem)**
- Additional properties: `isbn`, `pages`, `genre`
- Override `getInfo()` to include book-specific details

#### **c. DVD Class (Inherits from LibraryItem)**
- Additional properties: `director`, `duration`, `rating`
- Override `getInfo()` to include DVD-specific details

#### **d. Magazine Class (Inherits from LibraryItem)**
- Additional properties: `issueNumber`, `publisher`, `category`
- Override `getInfo()` to include magazine-specific details

### **2. Library Class**

#### **a. Properties**
- `name` (string): Library name
- `items` (array): Collection of library items
- `members` (array): Library members
- `borrowedItems` (array): Currently borrowed items

#### **b. Methods**
- `addItem(item)`: Add new item to library
- `removeItem(itemId)`: Remove item from library
- `searchItems(query)`: Search items by title, author, or genre
- `borrowItem(itemId, memberId)`: Borrow an item
- `returnItem(itemId)`: Return an item
- `getAvailableItems()`: Get all available items
- `getBorrowedItems()`: Get all borrowed items
- `getItemById(id)`: Find item by ID
- `getMemberById(id)`: Find member by ID
- `generateReport()`: Generate library report

### **3. Member Class**

#### **a. Properties**
- `id`, `name`, `email`, `phone`, `membershipType`, `joinDate`
- `borrowedItems` (array): Items currently borrowed by member
- `borrowHistory` (array): History of all borrowed items

#### **b. Methods**
- `borrowItem(item)`: Borrow an item
- `returnItem(item)`: Return an item
- `getBorrowedItems()`: Get currently borrowed items
- `getBorrowHistory()`: Get borrowing history
- `getMemberInfo()`: Get member information

### **4. Advanced Features**

#### **a. Item Management**
- Generate unique IDs for items
- Track item availability
- Handle item reservations
- Calculate overdue items

#### **b. Member Management**
- Different membership types (Basic, Premium, VIP)
- Borrowing limits based on membership type
- Track member borrowing history

#### **c. Reporting System**
- Library statistics (total items, borrowed items, available items)
- Member statistics (most active members, popular items)
- Overdue items report
- Item availability report

## 💡 **Hints**
- Use inheritance to create different item types
- Implement proper error handling for invalid operations
- Use arrays to store collections of items and members
- Generate unique IDs using timestamps or counters
- Use object methods to encapsulate behavior
- Implement proper validation for all inputs

## 🚀 **Example Usage (Expected Output)**

```javascript
// Create library
let library = new Library("Central Library");

// Create items
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "978-0-7432-7356-5", 180, "Fiction");
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "978-0-06-112008-4", 281, "Fiction");
let dvd1 = new DVD("The Matrix", "The Wachowskis", 1999, 136, "R");
let magazine1 = new Magazine("National Geographic", "Various", 2023, "Jan-2023", "National Geographic Society", "Science");

// Add items to library
library.addItem(book1);
library.addItem(book2);
library.addItem(dvd1);
library.addItem(magazine1);

// Create members
let member1 = new Member("John Doe", "john@example.com", "123-456-7890", "Premium");
let member2 = new Member("Jane Smith", "jane@example.com", "987-654-3210", "Basic");

// Add members to library
library.addMember(member1);
library.addMember(member2);

// Borrow items
library.borrowItem(book1.id, member1.id);
library.borrowItem(dvd1.id, member2.id);

// Search items
let searchResults = library.searchItems("Gatsby");
console.log("Search results:", searchResults);

// Generate report
let report = library.generateReport();
console.log("Library report:", report);

// Member operations
let memberBorrowedItems = member1.getBorrowedItems();
console.log("Member borrowed items:", memberBorrowedItems);

let memberHistory = member1.getBorrowHistory();
console.log("Member history:", memberHistory);
```

## 🌟 **Bonus Challenges (Optional)**
- Implement item reservations system
- Add fine calculation for overdue items
- Create a web interface for the library system
- Implement item categories and subcategories
- Add item rating and review system
- Create automated email notifications for overdue items
- Implement item recommendation system based on borrowing history

## 提交 (Submission)
- Create a new JavaScript file (e.g., `library-management.js`) in your `student-work` folder
- Implement all the required classes and methods
- Demonstrate the system with example usage as shown above
- Add comments to explain your code
- Include error handling and validation

Good luck! 📚
