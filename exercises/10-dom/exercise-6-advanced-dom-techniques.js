// Exercise 6: Advanced DOM Techniques
// Practice with advanced DOM manipulation and optimization techniques

console.log("💪 Exercise 6: Advanced DOM Techniques");
console.log("====================================");

// Exercise 1: DOM performance optimization
console.log("\n1. DOM Performance Optimization:");
// Create a function called setupDOMPerformanceOptimization that:
// - Implements DOM performance best practices
// - Uses DocumentFragment for batch DOM operations
// - Minimizes reflows and repaints
// - Optimizes DOM querying and manipulation
// Hint: Use DocumentFragment, batch operations, and performance monitoring

function setupDOMPerformanceOptimization() {
    // Create a demo container
    const container = document.createElement('div');
    container.id = 'performance-demo';
    container.style.padding = '20px';
    container.style.border = '2px solid #9C27B0';
    container.style.borderRadius = '8px';
    container.style.margin = '20px 0';
    container.style.backgroundColor = '#f3e5f5';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'DOM Performance Optimization Demo';
    title.style.color = '#9C27B0';
    title.style.marginBottom = '15px';
    container.appendChild(title);
    
    // Performance comparison buttons
    const slowBtn = document.createElement('button');
    slowBtn.textContent = 'Slow Method (Individual DOM Updates)';
    slowBtn.style.padding = '8px 16px';
    slowBtn.style.marginRight = '10px';
    slowBtn.style.backgroundColor = '#f44336';
    slowBtn.style.color = 'white';
    slowBtn.style.border = 'none';
    slowBtn.style.borderRadius = '4px';
    slowBtn.style.cursor = 'pointer';
    
    const fastBtn = document.createElement('button');
    fastBtn.textContent = 'Fast Method (DocumentFragment)';
    fastBtn.style.padding = '8px 16px';
    fastBtn.style.marginRight = '10px';
    fastBtn.style.backgroundColor = '#4CAF50';
    fastBtn.style.color = 'white';
    fastBtn.style.border = 'none';
    fastBtn.style.borderRadius = '4px';
    fastBtn.style.cursor = 'pointer';
    
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear Results';
    clearBtn.style.padding = '8px 16px';
    clearBtn.style.backgroundColor = '#FF9800';
    clearBtn.style.color = 'white';
    clearBtn.style.border = 'none';
    clearBtn.style.borderRadius = '4px';
    clearBtn.style.cursor = 'pointer';
    
    // Results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    resultsContainer.style.marginTop = '15px';
    resultsContainer.style.padding = '10px';
    resultsContainer.style.backgroundColor = '#f5f5f5';
    resultsContainer.style.borderRadius = '4px';
    resultsContainer.style.minHeight = '100px';
    
    // Slow method - individual DOM updates
    slowBtn.addEventListener('click', function() {
        const startTime = performance.now();
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Create elements one by one (slow)
        for (let i = 0; i < 1000; i++) {
            const div = document.createElement('div');
            div.textContent = `Item ${i}`;
            div.style.padding = '2px';
            div.style.borderBottom = '1px solid #ddd';
            resultsContainer.appendChild(div);
        }
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(`Slow method took: ${duration.toFixed(2)}ms`);
        
        // Show performance info
        const perfInfo = document.createElement('div');
        perfInfo.textContent = `Slow method: ${duration.toFixed(2)}ms`;
        perfInfo.style.color = '#f44336';
        perfInfo.style.fontWeight = 'bold';
        perfInfo.style.marginTop = '10px';
        container.appendChild(perfInfo);
    });
    
    // Fast method - DocumentFragment
    fastBtn.addEventListener('click', function() {
        const startTime = performance.now();
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Create DocumentFragment
        const fragment = document.createDocumentFragment();
        
        // Create all elements in memory first
        for (let i = 0; i < 1000; i++) {
            const div = document.createElement('div');
            div.textContent = `Item ${i}`;
            div.style.padding = '2px';
            div.style.borderBottom = '1px solid #ddd';
            fragment.appendChild(div);
        }
        
        // Single DOM update
        resultsContainer.appendChild(fragment);
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(`Fast method took: ${duration.toFixed(2)}ms`);
        
        // Show performance info
        const perfInfo = document.createElement('div');
        perfInfo.textContent = `Fast method: ${duration.toFixed(2)}ms`;
        perfInfo.style.color = '#4CAF50';
        perfInfo.style.fontWeight = 'bold';
        perfInfo.style.marginTop = '10px';
        container.appendChild(perfInfo);
    });
    
    // Clear results
    clearBtn.addEventListener('click', function() {
        resultsContainer.innerHTML = '';
        // Remove performance info
        const perfInfos = container.querySelectorAll('div[style*="fontWeight"]');
        perfInfos.forEach(info => info.remove());
    });
    
    // Add controls
    const controls = document.createElement('div');
    controls.style.marginBottom = '15px';
    controls.appendChild(slowBtn);
    controls.appendChild(fastBtn);
    controls.appendChild(clearBtn);
    container.appendChild(controls);
    
    container.appendChild(resultsContainer);
    document.body.appendChild(container);
    
    console.log('DOM performance optimization setup complete');
}

// Test your function
setupDOMPerformanceOptimization();

// Exercise 2: DOM memory management
console.log("\n2. DOM Memory Management:");
// TODO: Create a function called setupDOMMemoryManagement that:
// - Prevents DOM memory leaks
// - Properly removes event listeners and references
// - Manages DOM element lifecycle
// - Implements memory cleanup strategies
// Hint: Use proper cleanup patterns and memory management

function setupDOMMemoryManagement() {
    // Your code here
}

// Test your function
setupDOMMemoryManagement();

// Exercise 3: DOM mutation observation
console.log("\n3. DOM Mutation Observation:");
// TODO: Create a function called setupDOMMutationObservation that:
// - Uses MutationObserver to watch DOM changes
// - Handles DOM mutations and updates
// - Manages observer lifecycle and cleanup
// - Provides mutation event handling
// Hint: Use MutationObserver API and mutation handling

function setupDOMMutationObservation() {
    // Your code here
}

// Test your function
setupDOMMutationObservation();

// Exercise 4: DOM intersection observation
console.log("\n4. DOM Intersection Observation:");
// TODO: Create a function called setupDOMIntersectionObservation that:
// - Uses IntersectionObserver for element visibility
// - Implements lazy loading and infinite scrolling
// - Manages intersection thresholds and callbacks
// - Provides visibility-based functionality
// Hint: Use IntersectionObserver API and visibility detection

function setupDOMIntersectionObservation() {
    // Your code here
}

// Test your function
setupDOMIntersectionObservation();

// Exercise 5: DOM virtual scrolling
console.log("\n5. DOM Virtual Scrolling:");
// TODO: Create a function called setupDOMVirtualScrolling that:
// - Implements virtual scrolling for large lists
// - Renders only visible elements
// - Manages scroll position and content updates
// - Optimizes performance for large datasets
// Hint: Use scroll events and dynamic content rendering

function setupDOMVirtualScrolling() {
    // Your code here
}

// Test your function
setupDOMVirtualScrolling();

// Exercise 6: DOM shadow DOM
console.log("\n6. DOM Shadow DOM:");
// TODO: Create a function called setupDOMShadowDOM that:
// - Creates and manages Shadow DOM
// - Implements component encapsulation
// - Manages shadow DOM styling and content
// - Provides shadow DOM event handling
// Hint: Use Shadow DOM API and component patterns

function setupDOMShadowDOM() {
    // Your code here
}

// Test your function
setupDOMShadowDOM();

// Exercise 7: DOM custom elements
console.log("\n7. DOM Custom Elements:");
// TODO: Create a function called setupDOMCustomElements that:
// - Creates and registers custom elements
// - Implements custom element lifecycle
// - Manages custom element properties and methods
// - Provides custom element event handling
// Hint: Use Custom Elements API and lifecycle methods

function setupDOMCustomElements() {
    // Your code here
}

// Test your function
setupDOMCustomElements();

// Exercise 8: DOM web components
console.log("\n8. DOM Web Components:");
// TODO: Create a function called setupDOMWebComponents that:
// - Implements complete web components
// - Combines custom elements with shadow DOM
// - Manages component communication and events
// - Provides reusable component patterns
// Hint: Use Web Components API and component architecture

function setupDOMWebComponents() {
    // Your code here
}

// Test your function
setupDOMWebComponents();

// Exercise 9: DOM accessibility
console.log("\n9. DOM Accessibility:");
// TODO: Create a function called setupDOMAccessibility that:
// - Implements proper DOM accessibility
// - Manages ARIA attributes and roles
// - Provides keyboard navigation and focus management
// - Ensures screen reader compatibility
// Hint: Use ARIA attributes and accessibility best practices

function setupDOMAccessibility() {
    // Your code here
}

// Test your function
setupDOMAccessibility();

// Exercise 10: DOM testing and debugging
console.log("\n10. DOM Testing and Debugging:");
// TODO: Create a function called setupDOMTestingDebugging that:
// - Provides DOM testing utilities
// - Implements DOM debugging tools
// - Monitors DOM performance and issues
// - Provides DOM validation and testing
// Hint: Use testing utilities and debugging tools

function setupDOMTestingDebugging() {
    // Your code here
}

// Test your function
setupDOMTestingDebugging();

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced advanced DOM techniques.");
console.log("Key concepts practiced:");
console.log("- DOM performance optimization and best practices");
console.log("- DOM memory management and leak prevention");
console.log("- DOM mutation observation and change detection");
console.log("- DOM intersection observation and visibility");
console.log("- DOM virtual scrolling and performance");
console.log("- DOM shadow DOM and encapsulation");
console.log("- DOM custom elements and lifecycle");
console.log("- DOM web components and architecture");
console.log("- DOM accessibility and ARIA support");
console.log("- DOM testing and debugging tools");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Practice with real-world DOM scenarios");
console.log("4. Ask questions if you need help");

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced advanced DOM techniques.");
console.log("Key concepts practiced:");
console.log("- DOM performance optimization");
console.log("- Memory management and leak prevention");
console.log("- DOM mutation observation");
console.log("- Advanced DOM patterns and techniques");
console.log("- Production-ready DOM code");
