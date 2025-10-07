/* 
==========================================
1. WHAT ARE PROMISES? (Real-world Analogy)
==========================================

Think of a Promise like ordering food at a restaurant:

1. You place an order (create a Promise)
2. The restaurant promises to deliver your food (Promise is pending)
3. Either:
   - Your food arrives successfully (Promise is fulfilled/resolved)
   - Something goes wrong - kitchen fire, no ingredients (Promise is rejected)

The Promise represents the "eventual result" of your order, not the food itself.
*/

console.log("\n📚 SECTION 1: Understanding Promises with Real-world Analogy");

// Real-world example: Ordering pizza
function orderPizza(pizzaType, deliveryTime) {
    return new Promise((pizzaSuccess, pizzaFailure) => {
        console.log(`🍕 Ordering ${pizzaType} pizza...`);
        
        // Simulate pizza preparation time
        setTimeout(() => {
            // 90% chance of success, 10% chance of failure
            const success = Math.random() > 0.1;
            
            if (success) {
                const pizza = {
                    type: pizzaType,
                    size: "Large",
                    price: 15.99,
                    deliveryTime: deliveryTime,
                    status: "Ready for delivery"
                };
                console.log(`✅ ${pizzaType} pizza is ready!`);
                pizzaSuccess(pizza); // Promise fulfilled
            } else {
                const error = "Sorry, we're out of ingredients for that pizza!";
                console.log(`❌ ${error}`);
                pizzaFailure(error); // Promise rejected
            }
        }, deliveryTime);
    });
}

// Using the pizza order Promise
orderPizza("Margherita", 2000)
    .then(pizza => {
        console.log("🎉 Pizza received:", pizza);
        console.log(`💰 Total cost: $${pizza.price}`);
    })
    .catch(error => {
        console.log("😞 Order failed:", error);
    });