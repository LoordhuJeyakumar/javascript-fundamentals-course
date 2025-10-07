# Assignment 1: Shopping Cart System

## 📝 Assignment Overview
Create a comprehensive shopping cart system using JavaScript arrays. This project will help you master array manipulation, methods, and real-world data processing.

## 🎯 Learning Objectives
- Master array creation and manipulation
- Use array methods for data processing
- Implement search and filter functionality
- Handle complex data structures
- Apply real-world programming patterns

## 📋 Requirements

### Core Features (Required)
1. **Product Management**
   - Create an array of products with properties (id, name, price, category, stock)
   - Add new products to the catalog
   - Update product information
   - Remove products from catalog

2. **Shopping Cart Operations**
   - Add items to cart
   - Remove items from cart
   - Update item quantities
   - Clear entire cart
   - Calculate total price

3. **Search and Filter**
   - Search products by name
   - Filter products by category
   - Filter products by price range
   - Sort products by name, price, or category

4. **Cart Analysis**
   - Display cart summary
   - Show most expensive item
   - Show cheapest item
   - Calculate average item price
   - Count total items

### Advanced Features (Choose 2-3)
1. **Inventory Management**
   - Check stock availability
   - Update stock when items are added to cart
   - Restore stock when items are removed
   - Show low stock warnings

2. **Discount System**
   - Apply percentage discounts
   - Apply fixed amount discounts
   - Calculate final price with discounts
   - Show savings amount

3. **Wishlist Functionality**
   - Add items to wishlist
   - Move items from wishlist to cart
   - Compare wishlist and cart
   - Save wishlist for later

4. **Order History**
   - Save completed orders
   - Display order history
   - Reorder previous purchases
   - Calculate total spent

## 🛠️ Technical Requirements

### Code Structure
```javascript
class ShoppingCart {
    constructor() {
        this.products = [];
        this.cart = [];
        this.wishlist = [];
        this.orderHistory = [];
    }
    
    // Product management methods
    addProduct(product) { }
    updateProduct(id, updates) { }
    removeProduct(id) { }
    getProduct(id) { }
    
    // Cart operations
    addToCart(productId, quantity = 1) { }
    removeFromCart(productId) { }
    updateQuantity(productId, quantity) { }
    clearCart() { }
    getCartTotal() { }
    
    // Search and filter
    searchProducts(query) { }
    filterByCategory(category) { }
    filterByPriceRange(min, max) { }
    sortProducts(criteria) { }
    
    // Analysis methods
    getCartSummary() { }
    getMostExpensiveItem() { }
    getCheapestItem() { }
    getAveragePrice() { }
    getTotalItems() { }
}
```

### Data Structure Example
```javascript
// Product structure
const product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 10,
    description: "High-performance laptop",
    image: "laptop.jpg"
};

// Cart item structure
const cartItem = {
    productId: 1,
    quantity: 2,
    addedAt: new Date()
};
```

## 📊 Grading Rubric

### Functionality (40 points)
- **Product Management (10 points)**
  - Add, update, remove products
  - Proper data validation
  - Error handling

- **Cart Operations (15 points)**
  - Add, remove, update cart items
  - Calculate totals correctly
  - Handle edge cases

- **Search and Filter (10 points)**
  - Search functionality works
  - Filter by category and price
  - Sort functionality

- **Analysis Features (5 points)**
  - Cart summary display
  - Statistical calculations
  - Data insights

### Code Quality (30 points)
- **Structure and Organization (10 points)**
  - Clean, readable code
  - Logical method organization
  - Proper class structure

- **Error Handling (10 points)**
  - Input validation
  - Graceful error handling
  - User-friendly error messages

- **Performance (10 points)**
  - Efficient array operations
  - Appropriate use of methods
  - No unnecessary iterations

### Documentation (20 points)
- **Code Comments (10 points)**
  - Clear, helpful comments
  - Explain complex logic
  - Document method purposes

- **User Interface (10 points)**
  - Clear output formatting
  - User-friendly messages
  - Helpful feedback

### Testing (10 points)
- **Test Cases (10 points)**
  - Test with various data
  - Edge case testing
  - Error condition testing

## 🎯 Example Usage

```javascript
// Create shopping cart instance
const cart = new ShoppingCart();

// Add some products
cart.addProduct({
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 10
});

cart.addProduct({
    id: 2,
    name: "Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 50
});

// Add items to cart
cart.addToCart(1, 2); // Add 2 laptops
cart.addToCart(2, 1); // Add 1 mouse

// Search and filter
const electronics = cart.filterByCategory("Electronics");
const expensive = cart.filterByPriceRange(100, 1000);

// Get cart summary
const summary = cart.getCartSummary();
console.log(summary);
// Output: { totalItems: 3, totalPrice: 2029.97, itemCount: 2 }

// Calculate total
const total = cart.getCartTotal();
console.log(`Total: $${total.toFixed(2)}`);
```

## 📝 Submission Requirements

### Files to Submit
1. **`shopping-cart.js`** - Main implementation
2. **`test-cases.js`** - Test cases and examples
3. **`README.md`** - Documentation and usage instructions
4. **`demo.html`** - Simple web interface (optional)

### Code Requirements
- All code must be well-commented
- Use modern JavaScript features
- Follow consistent coding style
- Include error handling
- Provide clear output

### Documentation Requirements
- Explain how to use the shopping cart
- Provide examples
- Document all methods
- Include troubleshooting guide

## 🚀 Bonus Points

### Extra Credit (Up to 20 points)
1. **Web Interface (10 points)**
   - Create a simple HTML interface
   - Real-time cart updates
   - Visual product display

2. **Advanced Features (10 points)**
   - Implement additional advanced features
   - Creative functionality
   - Unique shopping cart capabilities

## 📅 Timeline

- **Week 1**: Plan and design the system
- **Week 2**: Implement core features
- **Week 3**: Add advanced features and testing
- **Week 4**: Final testing and documentation

## 🤝 Collaboration

- Work individually or in pairs
- Use version control (Git)
- Regular progress updates
- Peer code review

## 📚 Resources

### Helpful Resources
- MDN Array documentation
- JavaScript array methods guide
- Shopping cart examples
- Data structure patterns

### Getting Help
- Ask questions during office hours
- Use online resources
- Collaborate with classmates
- Review lesson materials

## 🎉 Success Criteria

### Minimum Requirements
- All core features implemented
- Code runs without errors
- Basic documentation provided
- At least 2 advanced features

### Excellent Work
- All features implemented correctly
- Clean, efficient code
- Comprehensive documentation
- Creative and useful features
- Excellent user experience

## 📝 Final Notes

This assignment is designed to help you master JavaScript arrays while building a practical application. Focus on:

1. **Understanding the concepts** - Don't just copy code
2. **Writing clean code** - Make it readable and maintainable
3. **Testing thoroughly** - Ensure your code works correctly
4. **Documenting well** - Help others understand your code
5. **Being creative** - Add your own unique features

Good luck, and have fun building your shopping cart system! 🛒
