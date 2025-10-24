// Exercise 3: Form Processing
// Practice with form handling, validation, and data processing

console.log("💪 Exercise 3: Form Processing");
console.log("============================");

// Exercise 3: Form Processing
// Practice with form handling, validation, and data processing

console.log("💪 Exercise 3: Form Processing");
console.log("============================");

// Exercise 1: Basic form handling
console.log("\n1. Basic Form Handling:");
// Create a function called setupBasicFormHandling that:
// - Handles form submission events
// - Prevents default form submission
// - Extracts form data using FormData API
// - Logs form data to console
// Hint: Use addEventListener on form submit and FormData constructor

function setupBasicFormHandling() {
    // Find all forms on the page
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Extract form data
            const formData = new FormData(form);
            const data = {};
            
            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            console.log('Form submitted with data:', data);
            
            // Show success message
            const message = document.createElement('div');
            message.textContent = 'Form submitted successfully!';
            message.style.color = 'green';
            message.style.padding = '10px';
            message.style.border = '1px solid green';
            message.style.borderRadius = '4px';
            message.style.marginTop = '10px';
            
            form.appendChild(message);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 3000);
        });
    });
    
    console.log('Basic form handling setup complete');
}

// Test your function
setupBasicFormHandling();

// Exercise 2: Form validation
console.log("\n2. Form Validation:");
// Create a function called setupFormValidation that:
// - Validates form fields in real-time
// - Shows validation errors to users
// - Prevents submission of invalid forms
// - Provides visual feedback for validation states
// Hint: Use input events and validation methods

function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Real-time validation on input
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            // Validation on blur
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
        
        // Prevent form submission if invalid
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                console.log('Form submission prevented - validation errors');
            }
        });
    });
    
    console.log('Form validation setup complete');
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (required && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Password validation
    if (type === 'password' && value) {
        if (value.length < 8) {
            isValid = false;
            errorMessage = 'Password must be at least 8 characters';
        }
    }
    
    // Pattern validation
    if (field.hasAttribute('pattern') && value) {
        const pattern = new RegExp(field.getAttribute('pattern'));
        if (!pattern.test(value)) {
            isValid = false;
            errorMessage = 'Please match the required format';
        }
    }
    
    // Show/hide error message
    showFieldValidation(field, isValid, errorMessage);
    
    return isValid;
}

function showFieldValidation(field, isValid, errorMessage) {
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Update field styling
    field.classList.remove('valid', 'invalid');
    field.classList.add(isValid ? 'valid' : 'invalid');
    
    // Add error message if invalid
    if (!isValid && errorMessage) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        
        field.parentNode.appendChild(errorDiv);
    }
}

// Test your function
setupFormValidation();

// Exercise 3: Dynamic form fields
console.log("\n3. Dynamic Form Fields:");
// Create a function called setupDynamicFormFields that:
// - Adds and removes form fields dynamically
// - Manages field dependencies and relationships
// - Updates form validation when fields change
// - Handles field state and data consistency
// Hint: Use DOM manipulation to add/remove elements

function setupDynamicFormFields() {
    // Find forms with dynamic field capabilities
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add "Add Field" buttons to forms
        const addFieldBtn = document.createElement('button');
        addFieldBtn.type = 'button';
        addFieldBtn.textContent = 'Add Dynamic Field';
        addFieldBtn.className = 'add-field-btn';
        addFieldBtn.style.margin = '10px 0';
        addFieldBtn.style.padding = '8px 16px';
        addFieldBtn.style.backgroundColor = '#4CAF50';
        addFieldBtn.style.color = 'white';
        addFieldBtn.style.border = 'none';
        addFieldBtn.style.borderRadius = '4px';
        addFieldBtn.style.cursor = 'pointer';
        
        form.appendChild(addFieldBtn);
        
        // Create container for dynamic fields
        const dynamicContainer = document.createElement('div');
        dynamicContainer.className = 'dynamic-fields';
        dynamicContainer.style.marginTop = '10px';
        form.appendChild(dynamicContainer);
        
        let fieldCounter = 0;
        
        // Add field functionality
        addFieldBtn.addEventListener('click', function() {
            fieldCounter++;
            
            const fieldWrapper = document.createElement('div');
            fieldWrapper.className = 'dynamic-field-wrapper';
            fieldWrapper.style.display = 'flex';
            fieldWrapper.style.alignItems = 'center';
            fieldWrapper.style.marginBottom = '10px';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `dynamicField_${fieldCounter}`;
            input.placeholder = `Dynamic Field ${fieldCounter}`;
            input.required = true;
            input.style.flex = '1';
            input.style.marginRight = '10px';
            input.style.padding = '8px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '4px';
            
            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-field-btn';
            removeBtn.style.backgroundColor = '#f44336';
            removeBtn.style.color = 'white';
            removeBtn.style.border = 'none';
            removeBtn.style.padding = '8px 12px';
            removeBtn.style.borderRadius = '4px';
            removeBtn.style.cursor = 'pointer';
            
            // Remove field functionality
            removeBtn.addEventListener('click', function() {
                fieldWrapper.remove();
                updateFieldValidation(form);
            });
            
            fieldWrapper.appendChild(input);
            fieldWrapper.appendChild(removeBtn);
            dynamicContainer.appendChild(fieldWrapper);
            
            // Add validation to new field
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            updateFieldValidation(form);
        });
    });
    
    console.log('Dynamic form fields setup complete');
}

function updateFieldValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        validateField(input);
    });
}

// Test your function
setupDynamicFormFields();

// Exercise 4: Form data serialization
console.log("\n4. Form Data Serialization:");
// Create a function called setupFormSerialization that:
// - Serializes form data to different formats (JSON, URL-encoded)
// - Handles nested form data and arrays
// - Manages file uploads and binary data
// - Provides data format conversion utilities
// Hint: Use FormData API and custom serialization logic

function setupFormSerialization() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add serialization buttons
        const serializationContainer = document.createElement('div');
        serializationContainer.className = 'serialization-controls';
        serializationContainer.style.marginTop = '15px';
        serializationContainer.style.padding = '10px';
        serializationContainer.style.border = '1px solid #ddd';
        serializationContainer.style.borderRadius = '4px';
        
        const jsonBtn = document.createElement('button');
        jsonBtn.type = 'button';
        jsonBtn.textContent = 'Serialize to JSON';
        jsonBtn.style.marginRight = '10px';
        jsonBtn.style.padding = '8px 12px';
        jsonBtn.style.backgroundColor = '#2196F3';
        jsonBtn.style.color = 'white';
        jsonBtn.style.border = 'none';
        jsonBtn.style.borderRadius = '4px';
        jsonBtn.style.cursor = 'pointer';
        
        const urlBtn = document.createElement('button');
        urlBtn.type = 'button';
        urlBtn.textContent = 'Serialize to URL';
        urlBtn.style.marginRight = '10px';
        urlBtn.style.padding = '8px 12px';
        urlBtn.style.backgroundColor = '#FF9800';
        urlBtn.style.color = 'white';
        urlBtn.style.border = 'none';
        urlBtn.style.borderRadius = '4px';
        urlBtn.style.cursor = 'pointer';
        
        const outputDiv = document.createElement('div');
        outputDiv.className = 'serialization-output';
        outputDiv.style.marginTop = '10px';
        outputDiv.style.padding = '10px';
        outputDiv.style.backgroundColor = '#f5f5f5';
        outputDiv.style.borderRadius = '4px';
        outputDiv.style.fontFamily = 'monospace';
        outputDiv.style.fontSize = '12px';
        outputDiv.style.whiteSpace = 'pre-wrap';
        
        serializationContainer.appendChild(jsonBtn);
        serializationContainer.appendChild(urlBtn);
        serializationContainer.appendChild(outputDiv);
        form.appendChild(serializationContainer);
        
        // JSON serialization
        jsonBtn.addEventListener('click', function() {
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    // Handle multiple values (arrays)
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            
            outputDiv.textContent = JSON.stringify(data, null, 2);
            console.log('Form data serialized to JSON:', data);
        });
        
        // URL serialization
        urlBtn.addEventListener('click', function() {
            const formData = new FormData(form);
            const params = new URLSearchParams();
            
            for (let [key, value] of formData.entries()) {
                params.append(key, value);
            }
            
            outputDiv.textContent = params.toString();
            console.log('Form data serialized to URL:', params.toString());
        });
    });
    
    console.log('Form serialization setup complete');
}

// Test your function
setupFormSerialization();

// Exercise 5: Form state management
console.log("\n5. Form State Management:");
// TODO: Create a function called setupFormStateManagement that:
// - Tracks form state (dirty, pristine, valid, invalid)
// - Manages form data persistence
// - Implements undo/redo functionality
// - Handles form reset and restoration
// Hint: Use state management patterns and data persistence

function setupFormStateManagement() {
    // Your code here
}

// Test your function
setupFormStateManagement();

// Exercise 6: Form submission with async operations
console.log("\n6. Form Submission with Async Operations:");
// TODO: Create a function called setupAsyncFormSubmission that:
// - Handles form submission with async operations
// - Shows loading states during submission
// - Manages submission errors and retries
// - Provides user feedback for submission status
// Hint: Use async/await with form submission and state management

function setupAsyncFormSubmission() {
    // Your code here
}

// Test your function
setupAsyncFormSubmission();

// Exercise 7: Form field dependencies
console.log("\n7. Form Field Dependencies:");
// TODO: Create a function called setupFormFieldDependencies that:
// - Manages dependencies between form fields
// - Shows/hides fields based on other field values
// - Updates field options dynamically
// - Handles cascading field changes
// Hint: Use event listeners and conditional logic

function setupFormFieldDependencies() {
    // Your code here
}

// Test your function
setupFormFieldDependencies();

// Exercise 8: Form accessibility
console.log("\n8. Form Accessibility:");
// TODO: Create a function called setupFormAccessibility that:
// - Implements proper form accessibility features
// - Associates labels with form controls
// - Provides error announcements for screen readers
// - Manages focus and keyboard navigation
// Hint: Use ARIA attributes and accessibility best practices

function setupFormAccessibility() {
    // Your code here
}

// Test your function
setupFormAccessibility();

// Exercise 9: Form data validation with regex
console.log("\n9. Form Data Validation with Regex:");
// TODO: Create a function called setupRegexValidation that:
// - Validates form data using regular expressions
// - Provides real-time validation feedback
// - Handles complex validation patterns
// - Shows validation error messages
// Hint: Use RegExp objects and validation patterns

function setupRegexValidation() {
    // Your code here
}

// Test your function
setupRegexValidation();

// Exercise 10: Form data export and import
console.log("\n10. Form Data Export and Import:");
// TODO: Create a function called setupFormDataExportImport that:
// - Exports form data to different formats
// - Imports form data from external sources
// - Validates imported data
// - Handles data format conversion
// Hint: Use JSON serialization and file handling

function setupFormDataExportImport() {
    // Your code here
}

// Test your function
setupFormDataExportImport();

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced form processing.");
console.log("Key concepts practiced:");
console.log("- Basic form handling and submission");
console.log("- Form validation and error handling");
console.log("- Dynamic form fields and management");
console.log("- Form data serialization and formats");
console.log("- Form state management and persistence");
console.log("- Async form submission and loading states");
console.log("- Form field dependencies and relationships");
console.log("- Form accessibility and screen reader support");
console.log("- Regex validation and complex patterns");
console.log("- Form data export and import functionality");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to Exercise 4: Dynamic Content");
console.log("4. Ask questions if you need help");

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced form processing.");
console.log("Key concepts practiced:");
console.log("- Basic form handling and data extraction");
console.log("- Real-time form validation");
console.log("- Dynamic form field management");
console.log("- Form data serialization");
console.log("- Error handling and user feedback");
