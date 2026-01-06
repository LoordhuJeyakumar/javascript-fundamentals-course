// Exercise 4: Dynamic Content
// Practice with dynamic content creation, manipulation, and management

console.log("💪 Exercise 4: Dynamic Content");
console.log("============================");

// Exercise 1: Dynamic content creation
console.log("\n1. Dynamic Content Creation:");
// Create a function called setupDynamicContentCreation that:
// - Creates DOM elements dynamically
// - Adds content to elements using different methods
// - Manages element attributes and properties
// - Demonstrates various content creation patterns
// Hint: Use createElement(), innerHTML, textContent, and setAttribute()

function setupDynamicContentCreation() {
    // Create a container for dynamic content
    const container = document.createElement('div');
    container.id = 'dynamic-content-container';
    container.style.padding = '20px';
    container.style.border = '2px solid #4CAF50';
    container.style.borderRadius = '8px';
    container.style.margin = '20px 0';
    container.style.backgroundColor = '#f9f9f9';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Dynamic Content Creation Demo';
    title.style.color = '#4CAF50';
    title.style.marginBottom = '15px';
    container.appendChild(title);
    
    // Create different types of elements
    const elements = [
        { tag: 'p', content: 'This is a dynamically created paragraph', className: 'dynamic-paragraph' },
        { tag: 'div', content: '<strong>Bold text</strong> with <em>emphasis</em>', className: 'dynamic-div' },
        { tag: 'button', content: 'Click me!', className: 'dynamic-button' },
        { tag: 'ul', content: '<li>Item 1</li><li>Item 2</li><li>Item 3</li>', className: 'dynamic-list' }
    ];
    
    elements.forEach((elementData, index) => {
        const element = document.createElement(elementData.tag);
        element.className = elementData.className;
        element.id = `dynamic-${elementData.tag}-${index}`;
        
        // Set content based on element type
        if (elementData.tag === 'ul') {
            element.innerHTML = elementData.content;
        } else if (elementData.tag === 'button') {
            element.textContent = elementData.content;
            element.style.padding = '8px 16px';
            element.style.backgroundColor = '#2196F3';
            element.style.color = 'white';
            element.style.border = 'none';
            element.style.borderRadius = '4px';
            element.style.cursor = 'pointer';
            element.style.margin = '5px';
            
            // Add click event
            element.addEventListener('click', function() {
                console.log(`Button ${index} clicked!`);
                this.style.backgroundColor = '#ff9800';
                setTimeout(() => {
                    this.style.backgroundColor = '#2196F3';
                }, 1000);
            });
        } else {
            element.innerHTML = elementData.content;
        }
        
        // Add some styling
        element.style.margin = '10px 0';
        element.style.padding = '10px';
        element.style.border = '1px solid #ddd';
        element.style.borderRadius = '4px';
        
        // Add data attributes
        element.setAttribute('data-created', new Date().toISOString());
        element.setAttribute('data-type', elementData.tag);
        
        container.appendChild(element);
    });
    
    // Add container to page
    document.body.appendChild(container);
    
    console.log('Dynamic content creation setup complete');
    console.log('Created elements:', elements.length);
}

// Test your function
setupDynamicContentCreation();

// Exercise 2: Content templating
console.log("\n2. Content Templating:");
// TODO: Create a function called setupContentTemplating that:
// - Uses template elements for content creation
// - Implements simple templating with placeholders
// - Clones and customizes template content
// - Manages template data binding
// Hint: Use template elements and cloneNode()

function setupContentTemplating() {
    // Your code here
}

// Test your function
setupContentTemplating();

// Exercise 3: Content filtering and searching
console.log("\n3. Content Filtering and Searching:");
// TODO: Create a function called setupContentFiltering that:
// - Implements content filtering based on criteria
// - Provides search functionality for content
// - Shows/hides content based on filters
// - Manages filter state and UI updates
// Hint: Use querySelectorAll() and conditional display

function setupContentFiltering() {
    // Your code here
}

// Test your function
setupContentFiltering();

// Exercise 4: Content pagination
console.log("\n4. Content Pagination:");
// TODO: Create a function called setupContentPagination that:
// - Implements pagination for large content sets
// - Manages page navigation and state
// - Updates content based on current page
// - Provides pagination controls and indicators
// Hint: Use array slicing and page state management

function setupContentPagination() {
    // Your code here
}

// Test your function
setupContentPagination();

// Exercise 5: Content sorting and ordering
console.log("\n5. Content Sorting and Ordering:");
// TODO: Create a function called setupContentSorting that:
// - Implements content sorting by different criteria
// - Manages sort order and direction
// - Updates content display after sorting
// - Provides sort controls and indicators
// Hint: Use array sorting methods and DOM manipulation

function setupContentSorting() {
    // Your code here
}

// Test your function
setupContentSorting();

// Exercise 6: Content lazy loading
console.log("\n6. Content Lazy Loading:");
// TODO: Create a function called setupContentLazyLoading that:
// - Implements lazy loading for content
// - Loads content when it becomes visible
// - Manages loading states and placeholders
// - Optimizes performance for large content sets
// Hint: Use Intersection Observer API and loading states

function setupContentLazyLoading() {
    // Your code here
}

// Test your function
setupContentLazyLoading();

// Exercise 7: Content virtualization
console.log("\n7. Content Virtualization:");
// TODO: Create a function called setupContentVirtualization that:
// - Implements virtual scrolling for large lists
// - Renders only visible content
// - Manages scroll position and content updates
// - Optimizes performance for large datasets
// Hint: Use scroll events and dynamic content rendering

function setupContentVirtualization() {
    // Your code here
}

// Test your function
setupContentVirtualization();

// Exercise 8: Content caching and optimization
console.log("\n8. Content Caching and Optimization:");
// TODO: Create a function called setupContentCaching that:
// - Implements content caching strategies
// - Manages cache invalidation and updates
// - Optimizes content loading and rendering
// - Handles cache storage and retrieval
// Hint: Use caching patterns and performance optimization

function setupContentCaching() {
    // Your code here
}

// Test your function
setupContentCaching();

// Exercise 9: Content synchronization
console.log("\n9. Content Synchronization:");
// TODO: Create a function called setupContentSynchronization that:
// - Synchronizes content across multiple views
// - Manages content updates and consistency
// - Handles concurrent content modifications
// - Provides conflict resolution mechanisms
// Hint: Use event systems and state management

function setupContentSynchronization() {
    // Your code here
}

// Test your function
setupContentSynchronization();

// Exercise 10: Content performance monitoring
console.log("\n10. Content Performance Monitoring:");
// TODO: Create a function called setupContentPerformanceMonitoring that:
// - Monitors content rendering performance
// - Tracks content loading times and metrics
// - Identifies performance bottlenecks
// - Provides performance optimization recommendations
// Hint: Use Performance API and performance monitoring

function setupContentPerformanceMonitoring() {
    // Your code here
}

// Test your function
setupContentPerformanceMonitoring();

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced dynamic content management.");
console.log("Key concepts practiced:");
console.log("- Dynamic content creation and manipulation");
console.log("- Content templating and data binding");
console.log("- Content filtering and searching functionality");
console.log("- Content pagination and navigation");
console.log("- Content sorting and ordering");
console.log("- Content lazy loading and optimization");
console.log("- Content virtualization and performance");
console.log("- Content caching and optimization strategies");
console.log("- Content synchronization and consistency");
console.log("- Content performance monitoring and analysis");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 5: Animation Effects");
console.log("4. Ask questions if you need help");

console.log("\n🎉 Exercise 4 Complete!");
console.log("=====================");
console.log("Great job! You've practiced dynamic content creation.");
console.log("Key concepts practiced:");
console.log("- Dynamic element creation");
console.log("- Content templating and cloning");
console.log("- Content filtering and searching");
console.log("- Dynamic styling and animations");
console.log("- Content state management");
