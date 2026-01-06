// Exercise 5: Animation and Effects
// Practice with CSS animations, transitions, and JavaScript animations

console.log("💪 Exercise 5: Animation and Effects");
console.log("==================================");

// Exercise 1: CSS transitions
console.log("\n1. CSS Transitions:");
// Create a function called setupCSSTransitions that:
// - Applies CSS transitions to elements
// - Triggers transitions with JavaScript
// - Manages transition timing and easing
// - Handles transition events and callbacks
// Hint: Use CSS transition properties and transition events

function setupCSSTransitions() {
    // Create a demo container
    const container = document.createElement('div');
    container.id = 'transition-demo';
    container.style.padding = '20px';
    container.style.border = '2px solid #FF9800';
    container.style.borderRadius = '8px';
    container.style.margin = '20px 0';
    container.style.backgroundColor = '#fff3e0';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'CSS Transitions Demo';
    title.style.color = '#FF9800';
    title.style.marginBottom = '15px';
    container.appendChild(title);
    
    // Create transition elements
    const transitionBox = document.createElement('div');
    transitionBox.id = 'transition-box';
    transitionBox.style.width = '100px';
    transitionBox.style.height = '100px';
    transitionBox.style.backgroundColor = '#2196F3';
    transitionBox.style.borderRadius = '8px';
    transitionBox.style.margin = '10px';
    transitionBox.style.cursor = 'pointer';
    transitionBox.style.transition = 'all 0.3s ease-in-out';
    
    // Add transition event listeners
    transitionBox.addEventListener('transitionstart', function() {
        console.log('Transition started');
    });
    
    transitionBox.addEventListener('transitionend', function() {
        console.log('Transition ended');
    });
    
    // Add click handler to trigger transitions
    transitionBox.addEventListener('click', function() {
        // Randomize properties
        this.style.width = Math.random() * 200 + 50 + 'px';
        this.style.height = Math.random() * 200 + 50 + 'px';
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
    
    container.appendChild(transitionBox);
    
    // Add control buttons
    const controls = document.createElement('div');
    controls.style.marginTop = '15px';
    
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.padding = '8px 16px';
    resetBtn.style.marginRight = '10px';
    resetBtn.style.backgroundColor = '#4CAF50';
    resetBtn.style.color = 'white';
    resetBtn.style.border = 'none';
    resetBtn.style.borderRadius = '4px';
    resetBtn.style.cursor = 'pointer';
    
    resetBtn.addEventListener('click', function() {
        transitionBox.style.width = '100px';
        transitionBox.style.height = '100px';
        transitionBox.style.backgroundColor = '#2196F3';
        transitionBox.style.transform = 'rotate(0deg)';
    });
    
    controls.appendChild(resetBtn);
    container.appendChild(controls);
    
    // Add to page
    document.body.appendChild(container);
    
    console.log('CSS transitions setup complete');
}

// Test your function
setupCSSTransitions();

// Exercise 2: CSS animations
console.log("\n2. CSS Animations:");
// TODO: Create a function called setupCSSAnimations that:
// - Creates and applies CSS animations
// - Controls animation playback with JavaScript
// - Manages animation states and timing
// - Handles animation events and callbacks
// Hint: Use CSS animation properties and animation events

function setupCSSAnimations() {
    // Your code here
}

// Test your function
setupCSSAnimations();

// Exercise 3: JavaScript animations
console.log("\n3. JavaScript Animations:");
// TODO: Create a function called setupJavaScriptAnimations that:
// - Implements JavaScript-based animations
// - Uses requestAnimationFrame for smooth animations
// - Manages animation timing and easing functions
// - Provides animation control and state management
// Hint: Use requestAnimationFrame and custom easing functions

function setupJavaScriptAnimations() {
    // Your code here
}

// Test your function
setupJavaScriptAnimations();

// Exercise 4: Animation sequencing
console.log("\n4. Animation Sequencing:");
// TODO: Create a function called setupAnimationSequencing that:
// - Sequences multiple animations in order
// - Manages animation delays and timing
// - Provides animation chaining and queuing
// - Handles complex animation workflows
// Hint: Use Promise-based animation sequencing

function setupAnimationSequencing() {
    // Your code here
}

// Test your function
setupAnimationSequencing();

// Exercise 5: Animation easing and timing
console.log("\n5. Animation Easing and Timing:");
// TODO: Create a function called setupAnimationEasing that:
// - Implements various easing functions
// - Applies easing to animations
// - Manages animation timing curves
// - Provides smooth animation transitions
// Hint: Use easing functions like ease-in, ease-out, ease-in-out

function setupAnimationEasing() {
    // Your code here
}

// Test your function
setupAnimationEasing();

// Exercise 6: Animation performance optimization
console.log("\n6. Animation Performance Optimization:");
// TODO: Create a function called setupAnimationPerformance that:
// - Optimizes animations for performance
// - Uses transform and opacity for smooth animations
// - Implements animation throttling and debouncing
// - Monitors animation performance metrics
// Hint: Use transform properties and performance monitoring

function setupAnimationPerformance() {
    // Your code here
}

// Test your function
setupAnimationPerformance();

// Exercise 7: Animation state management
console.log("\n7. Animation State Management:");
// TODO: Create a function called setupAnimationStateManagement that:
// - Manages animation states and transitions
// - Handles animation state persistence
// - Provides animation state synchronization
// - Manages complex animation state machines
// Hint: Use state management patterns for animations

function setupAnimationStateManagement() {
    // Your code here
}

// Test your function
setupAnimationStateManagement();

// Exercise 8: Animation event handling
console.log("\n8. Animation Event Handling:");
// TODO: Create a function called setupAnimationEventHandling that:
// - Handles animation start, end, and iteration events
// - Manages animation event callbacks
// - Provides animation event delegation
// - Handles custom animation events
// Hint: Use animation events and event delegation

function setupAnimationEventHandling() {
    // Your code here
}

// Test your function
setupAnimationEventHandling();

// Exercise 9: Animation accessibility
console.log("\n9. Animation Accessibility:");
// TODO: Create a function called setupAnimationAccessibility that:
// - Implements accessible animations
// - Respects user motion preferences
// - Provides animation controls for users
// - Ensures animations don't cause accessibility issues
// Hint: Use prefers-reduced-motion and accessibility controls

function setupAnimationAccessibility() {
    // Your code here
}

// Test your function
setupAnimationAccessibility();

// Exercise 10: Animation testing and debugging
console.log("\n10. Animation Testing and Debugging:");
// TODO: Create a function called setupAnimationTesting that:
// - Provides animation testing utilities
// - Implements animation debugging tools
// - Monitors animation performance and issues
// - Provides animation validation and testing
// Hint: Use testing utilities and debugging tools

function setupAnimationTesting() {
    // Your code here
}

// Test your function
setupAnimationTesting();

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced animation and effects.");
console.log("Key concepts practiced:");
console.log("- CSS transitions and timing");
console.log("- CSS animations and keyframes");
console.log("- JavaScript animations with requestAnimationFrame");
console.log("- Animation sequencing and chaining");
console.log("- Animation easing and timing functions");
console.log("- Animation performance optimization");
console.log("- Animation state management and persistence");
console.log("- Animation event handling and callbacks");
console.log("- Animation accessibility and user preferences");
console.log("- Animation testing and debugging tools");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 6: Advanced DOM Techniques");
console.log("4. Ask questions if you need help");

console.log("\n🎉 Exercise 5 Complete!");
console.log("=====================");
console.log("Great job! You've practiced animation and effects.");
console.log("Key concepts practiced:");
console.log("- CSS transitions and animations");
console.log("- JavaScript animations with requestAnimationFrame");
console.log("- Animation timing and easing");
console.log("- Animation events and callbacks");
console.log("- Performance optimization for animations");
