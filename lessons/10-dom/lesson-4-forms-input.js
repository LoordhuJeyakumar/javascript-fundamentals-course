// Lesson 4: Forms and User Input
// Handling forms and user input

console.log("🎓 Lesson 4: Forms and User Input");
console.log("===============================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. Understanding Forms
console.log("\n📚 1. Understanding Forms");
console.log("-----------------------");

console.log("Forms are essential for user interaction:");
console.log("- Data collection and submission");
console.log("- User input validation");
console.log("- Form state management");
console.log("- Accessibility considerations");

// 📚 2. Form Elements
console.log("\n📚 2. Form Elements");
console.log("-----------------");

class FormSimulator {
    constructor() {
        this.elements = new Map();
        this.forms = new Map();
        this.setupFormElements();
    }
    
    setupFormElements() {
        // Create a form
        const form = {
            id: 'user-form',
            tagName: 'FORM',
            className: 'user-form',
            action: '/submit',
            method: 'POST',
            elements: []
        };
        
        // Create form elements
        const textInput = {
            id: 'username',
            tagName: 'INPUT',
            type: 'text',
            name: 'username',
            placeholder: 'Enter username',
            value: '',
            required: true,
            className: 'form-control'
        };
        
        const emailInput = {
            id: 'email',
            tagName: 'INPUT',
            type: 'email',
            name: 'email',
            placeholder: 'Enter email',
            value: '',
            required: true,
            className: 'form-control'
        };
        
        const passwordInput = {
            id: 'password',
            tagName: 'INPUT',
            type: 'password',
            name: 'password',
            placeholder: 'Enter password',
            value: '',
            required: true,
            className: 'form-control'
        };
        
        const selectElement = {
            id: 'country',
            tagName: 'SELECT',
            name: 'country',
            className: 'form-control',
            options: [
                { value: 'us', text: 'United States' },
                { value: 'ca', text: 'Canada' },
                { value: 'uk', text: 'United Kingdom' },
                { value: 'au', text: 'Australia' }
            ],
            selectedValue: ''
        };
        
        const textarea = {
            id: 'message',
            tagName: 'TEXTAREA',
            name: 'message',
            placeholder: 'Enter your message',
            value: '',
            rows: 4,
            className: 'form-control'
        };
        
        const checkbox = {
            id: 'newsletter',
            tagName: 'INPUT',
            type: 'checkbox',
            name: 'newsletter',
            checked: false,
            className: 'form-check-input'
        };
        
        const radio1 = {
            id: 'gender-male',
            tagName: 'INPUT',
            type: 'radio',
            name: 'gender',
            value: 'male',
            checked: false,
            className: 'form-check-input'
        };
        
        const radio2 = {
            id: 'gender-female',
            tagName: 'INPUT',
            type: 'radio',
            name: 'gender',
            value: 'female',
            checked: false,
            className: 'form-check-input'
        };
        
        const submitButton = {
            id: 'submit-btn',
            tagName: 'BUTTON',
            type: 'submit',
            textContent: 'Submit',
            className: 'btn btn-primary'
        };
        
        // Store elements
        this.elements.set('form', form);
        this.elements.set('username', textInput);
        this.elements.set('email', emailInput);
        this.elements.set('password', passwordInput);
        this.elements.set('country', selectElement);
        this.elements.set('message', textarea);
        this.elements.set('newsletter', checkbox);
        this.elements.set('gender-male', radio1);
        this.elements.set('gender-female', radio2);
        this.elements.set('submit-btn', submitButton);
        
        // Add elements to form
        form.elements = [
            textInput, emailInput, passwordInput, selectElement,
            textarea, checkbox, radio1, radio2, submitButton
        ];
    }
    
    getElementById(id) {
        return this.elements.get(id);
    }
    
    getFormData(form) {
        const formData = {};
        form.elements.forEach(element => {
            if (element.tagName === 'INPUT') {
                if (element.type === 'checkbox') {
                    formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        formData[element.name] = element.value;
                    }
                } else {
                    formData[element.name] = element.value;
                }
            } else if (element.tagName === 'SELECT') {
                formData[element.name] = element.selectedValue;
            } else if (element.tagName === 'TEXTAREA') {
                formData[element.name] = element.value;
            }
        });
        return formData;
    }
    
    setValue(element, value) {
        if (element.tagName === 'INPUT') {
            if (element.type === 'checkbox') {
                element.checked = value;
            } else {
                element.value = value;
            }
        } else if (element.tagName === 'SELECT') {
            element.selectedValue = value;
        } else if (element.tagName === 'TEXTAREA') {
            element.value = value;
        }
        console.log(`Set value for ${element.name}: ${value}`);
    }
    
    getValue(element) {
        if (element.tagName === 'INPUT') {
            if (element.type === 'checkbox') {
                return element.checked;
            } else {
                return element.value;
            }
        } else if (element.tagName === 'SELECT') {
            return element.selectedValue;
        } else if (element.tagName === 'TEXTAREA') {
            return element.value;
        }
        return '';
    }
}

const formSimulator = new FormSimulator();

// 📚 3. Form Validation
console.log("\n📚 3. Form Validation");
console.log("--------------------");

class FormValidator {
    constructor() {
        this.rules = new Map();
        this.errors = new Map();
    }
    
    addRule(fieldName, rule) {
        if (!this.rules.has(fieldName)) {
            this.rules.set(fieldName, []);
        }
        this.rules.get(fieldName).push(rule);
    }
    
    validate(formData) {
        this.errors.clear();
        let isValid = true;
        
        for (const [fieldName, rules] of this.rules) {
            const value = formData[fieldName];
            
            for (const rule of rules) {
                const result = rule(value, formData);
                if (!result.valid) {
                    if (!this.errors.has(fieldName)) {
                        this.errors.set(fieldName, []);
                    }
                    this.errors.get(fieldName).push(result.message);
                    isValid = false;
                }
            }
        }
        
        return isValid;
    }
    
    getErrors(fieldName = null) {
        if (fieldName) {
            return this.errors.get(fieldName) || [];
        }
        return Object.fromEntries(this.errors);
    }
    
    clearErrors() {
        this.errors.clear();
    }
}

const formValidator = new FormValidator();

// Add validation rules
formValidator.addRule('username', (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Username is required' };
    }
    if (value.length < 3) {
        return { valid: false, message: 'Username must be at least 3 characters' };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return { valid: false, message: 'Username can only contain letters, numbers, and underscores' };
    }
    return { valid: true };
});

formValidator.addRule('email', (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Email is required' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return { valid: false, message: 'Please enter a valid email address' };
    }
    return { valid: true };
});

formValidator.addRule('password', (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Password is required' };
    }
    if (value.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters' };
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return { valid: false, message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number' };
    }
    return { valid: true };
});

formValidator.addRule('country', (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Please select a country' };
    }
    return { valid: true };
});

// Test validation
const testFormData = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'Password123',
    country: 'us',
    message: 'Hello world',
    newsletter: true,
    gender: 'male'
};

const isValid = formValidator.validate(testFormData);
console.log('Form validation result:', isValid);
console.log('Validation errors:', formValidator.getErrors());

// Test with invalid data
const invalidFormData = {
    username: 'jo',
    email: 'invalid-email',
    password: '123',
    country: '',
    message: '',
    newsletter: false,
    gender: ''
};

const isInvalid = formValidator.validate(invalidFormData);
console.log('Invalid form validation result:', isInvalid);
console.log('Validation errors:', formValidator.getErrors());

// 📚 4. Form Event Handling
console.log("\n📚 4. Form Event Handling");
console.log("------------------------");

class FormEventHandler {
    constructor() {
        this.elements = new Map();
        this.eventListeners = new Map();
        this.setupFormEvents();
    }
    
    setupFormEvents() {
        const form = formSimulator.elements.get('form');
        const username = formSimulator.elements.get('username');
        const email = formSimulator.elements.get('email');
        const password = formSimulator.elements.get('password');
        
        this.elements.set('form', form);
        this.elements.set('username', username);
        this.elements.set('email', email);
        this.elements.set('password', password);
    }
    
    addEventListener(element, eventType, handler) {
        const elementId = element.id;
        if (!this.eventListeners.has(elementId)) {
            this.eventListeners.set(elementId, new Map());
        }
        
        const elementListeners = this.eventListeners.get(elementId);
        if (!elementListeners.has(eventType)) {
            elementListeners.set(eventType, []);
        }
        
        const listeners = elementListeners.get(eventType);
        listeners.push(handler);
        
        console.log(`Added ${eventType} listener to ${element.tagName}`);
    }
    
    dispatchEvent(element, eventType, eventData = {}) {
        const elementId = element.id;
        const elementListeners = this.eventListeners.get(elementId);
        
        if (elementListeners && elementListeners.has(eventType)) {
            const listeners = elementListeners.get(eventType);
            const event = {
                type: eventType,
                target: element,
                currentTarget: element,
                preventDefault: () => console.log('preventDefault() called'),
                ...eventData
            };
            
            console.log(`Dispatching ${eventType} event to ${element.tagName}`);
            listeners.forEach(handler => handler(event));
        }
    }
}

const formEventHandler = new FormEventHandler();

// Form submission handler
function handleFormSubmit(event) {
    console.log('Form submitted!');
    event.preventDefault(); // Prevent default form submission
    
    const form = formSimulator.elements.get('form');
    const formData = formSimulator.getFormData(form);
    
    console.log('Form data:', formData);
    
    // Validate form
    const isValid = formValidator.validate(formData);
    if (isValid) {
        console.log('Form is valid, processing...');
        // Process form data
        processFormData(formData);
    } else {
        console.log('Form validation failed:', formValidator.getErrors());
        displayValidationErrors(formValidator.getErrors());
    }
}

// Input change handler
function handleInputChange(event) {
    const element = event.target;
    const value = formSimulator.getValue(element);
    
    console.log(`Input changed: ${element.name} = ${value}`);
    
    // Real-time validation
    const fieldData = { [element.name]: value };
    const isValid = formValidator.validate(fieldData);
    
    if (!isValid) {
        const errors = formValidator.getErrors(element.name);
        console.log(`Validation error for ${element.name}:`, errors);
        showFieldError(element, errors[0]);
    } else {
        clearFieldError(element);
    }
}

// Focus handlers
function handleInputFocus(event) {
    const element = event.target;
    console.log(`Input focused: ${element.name}`);
    element.className = element.className.replace('error', '').trim();
}

function handleInputBlur(event) {
    const element = event.target;
    console.log(`Input blurred: ${element.name}`);
    
    // Validate on blur
    const value = formSimulator.getValue(element);
    const fieldData = { [element.name]: value };
    const isValid = formValidator.validate(fieldData);
    
    if (!isValid) {
        const errors = formValidator.getErrors(element.name);
        showFieldError(element, errors[0]);
    }
}

// Add event listeners
formEventHandler.addEventListener(formEventHandler.elements.get('form'), 'submit', handleFormSubmit);
formEventHandler.addEventListener(formEventHandler.elements.get('username'), 'input', handleInputChange);
formEventHandler.addEventListener(formEventHandler.elements.get('email'), 'input', handleInputChange);
formEventHandler.addEventListener(formEventHandler.elements.get('password'), 'input', handleInputChange);

formEventHandler.addEventListener(formEventHandler.elements.get('username'), 'focus', handleInputFocus);
formEventHandler.addEventListener(formEventHandler.elements.get('email'), 'focus', handleInputFocus);
formEventHandler.addEventListener(formEventHandler.elements.get('password'), 'focus', handleInputFocus);

formEventHandler.addEventListener(formEventHandler.elements.get('username'), 'blur', handleInputBlur);
formEventHandler.addEventListener(formEventHandler.elements.get('email'), 'blur', handleInputBlur);
formEventHandler.addEventListener(formEventHandler.elements.get('password'), 'blur', handleInputBlur);

// Helper functions
function processFormData(formData) {
    console.log('Processing form data:', formData);
    // Simulate API call
    setTimeout(() => {
        console.log('Form data submitted successfully!');
    }, 1000);
}

function displayValidationErrors(errors) {
    console.log('Displaying validation errors:', errors);
    // In a real app, you would display these errors in the UI
}

function showFieldError(element, errorMessage) {
    console.log(`Showing error for ${element.name}: ${errorMessage}`);
    element.className = element.className + ' error';
}

function clearFieldError(element) {
    console.log(`Clearing error for ${element.name}`);
    element.className = element.className.replace('error', '').trim();
}

// 📚 5. Form State Management
console.log("\n📚 5. Form State Management");
console.log("-------------------------");

class FormStateManager {
    constructor() {
        this.state = {
            isSubmitting: false,
            isDirty: false,
            isValid: false,
            errors: {},
            values: {},
            touched: {}
        };
        this.listeners = [];
    }
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyListeners();
    }
    
    getState() {
        return { ...this.state };
    }
    
    setValue(fieldName, value) {
        this.setState({
            values: { ...this.state.values, [fieldName]: value },
            isDirty: true,
            touched: { ...this.state.touched, [fieldName]: true }
        });
    }
    
    setError(fieldName, error) {
        this.setState({
            errors: { ...this.state.errors, [fieldName]: error }
        });
    }
    
    clearError(fieldName) {
        const errors = { ...this.state.errors };
        delete errors[fieldName];
        this.setState({ errors });
    }
    
    setSubmitting(isSubmitting) {
        this.setState({ isSubmitting });
    }
    
    reset() {
        this.setState({
            isSubmitting: false,
            isDirty: false,
            isValid: false,
            errors: {},
            values: {},
            touched: {}
        });
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            const index = this.listeners.indexOf(listener);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
    
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

const formStateManager = new FormStateManager();

// Subscribe to state changes
const unsubscribe = formStateManager.subscribe((state) => {
    console.log('Form state changed:', state);
});

// Test state management
formStateManager.setValue('username', 'john_doe');
formStateManager.setValue('email', 'john@example.com');
formStateManager.setError('password', 'Password is required');
formStateManager.setSubmitting(true);

// 📚 6. Form Serialization
console.log("\n📚 6. Form Serialization");
console.log("----------------------");

class FormSerializer {
    constructor() {
        this.elements = new Map();
    }
    
    serialize(form) {
        const formData = {};
        
        form.elements.forEach(element => {
            if (element.tagName === 'INPUT') {
                if (element.type === 'checkbox') {
                    if (element.checked) {
                        formData[element.name] = element.value || 'on';
                    }
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        formData[element.name] = element.value;
                    }
                } else {
                    formData[element.name] = element.value;
                }
            } else if (element.tagName === 'SELECT') {
                formData[element.name] = element.selectedValue;
            } else if (element.tagName === 'TEXTAREA') {
                formData[element.name] = element.value;
            }
        });
        
        return formData;
    }
    
    serializeToJSON(form) {
        const formData = this.serialize(form);
        return JSON.stringify(formData, null, 2);
    }
    
    serializeToFormData(form) {
        const formData = this.serialize(form);
        const formDataObj = new FormData();
        
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });
        
        return formDataObj;
    }
    
    serializeToURLSearchParams(form) {
        const formData = this.serialize(form);
        const params = new URLSearchParams();
        
        Object.entries(formData).forEach(([key, value]) => {
            params.append(key, value);
        });
        
        return params;
    }
}

const formSerializer = new FormSerializer();

// Test serialization
const form = formSimulator.elements.get('form');
const serializedData = formSerializer.serialize(form);
console.log('Serialized form data:', serializedData);

const jsonData = formSerializer.serializeToJSON(form);
console.log('JSON form data:', jsonData);

// 📚 7. Form Accessibility
console.log("\n📚 7. Form Accessibility");
console.log("--------------------");

class AccessibleForm {
    constructor() {
        this.elements = new Map();
        this.setupAccessibleForm();
    }
    
    setupAccessibleForm() {
        const form = {
            id: 'accessible-form',
            tagName: 'FORM',
            className: 'accessible-form',
            role: 'form',
            'aria-label': 'User registration form'
        };
        
        const fieldset = {
            id: 'personal-info',
            tagName: 'FIELDSET',
            className: 'fieldset',
            legend: 'Personal Information'
        };
        
        const usernameGroup = {
            id: 'username-group',
            tagName: 'DIV',
            className: 'form-group'
        };
        
        const usernameLabel = {
            id: 'username-label',
            tagName: 'LABEL',
            className: 'form-label',
            textContent: 'Username',
            htmlFor: 'username-input'
        };
        
        const usernameInput = {
            id: 'username-input',
            tagName: 'INPUT',
            type: 'text',
            name: 'username',
            className: 'form-control',
            required: true,
            'aria-describedby': 'username-help',
            'aria-invalid': false
        };
        
        const usernameHelp = {
            id: 'username-help',
            tagName: 'DIV',
            className: 'form-help',
            textContent: 'Choose a unique username (3-20 characters)'
        };
        
        const usernameError = {
            id: 'username-error',
            tagName: 'DIV',
            className: 'form-error',
            textContent: '',
            role: 'alert',
            'aria-live': 'polite'
        };
        
        this.elements.set('form', form);
        this.elements.set('fieldset', fieldset);
        this.elements.set('username-group', usernameGroup);
        this.elements.set('username-label', usernameLabel);
        this.elements.set('username-input', usernameInput);
        this.elements.set('username-help', usernameHelp);
        this.elements.set('username-error', usernameError);
    }
    
    setAriaInvalid(element, isInvalid) {
        element['aria-invalid'] = isInvalid;
        console.log(`Set aria-invalid="${isInvalid}" for ${element.tagName}`);
    }
    
    setAriaDescribedBy(element, describedBy) {
        element['aria-describedby'] = describedBy;
        console.log(`Set aria-describedby="${describedBy}" for ${element.tagName}`);
    }
    
    setAriaLabel(element, label) {
        element['aria-label'] = label;
        console.log(`Set aria-label="${label}" for ${element.tagName}`);
    }
    
    setAriaRequired(element, isRequired) {
        element['aria-required'] = isRequired;
        console.log(`Set aria-required="${isRequired}" for ${element.tagName}`);
    }
    
    announceError(element, errorMessage) {
        element.textContent = errorMessage;
        element.className = 'form-error visible';
        console.log(`Announced error: ${errorMessage}`);
    }
    
    clearError(element) {
        element.textContent = '';
        element.className = 'form-error';
        console.log('Cleared error message');
    }
}

const accessibleForm = new AccessibleForm();

// Test accessibility features
const usernameInput = accessibleForm.elements.get('username-input');
const usernameError = accessibleForm.elements.get('username-error');

accessibleForm.setAriaRequired(usernameInput, true);
accessibleForm.setAriaDescribedBy(usernameInput, 'username-help');
accessibleForm.setAriaInvalid(usernameInput, false);

// Simulate validation error
accessibleForm.setAriaInvalid(usernameInput, true);
accessibleForm.announceError(usernameError, 'Username is required');

// Clear error
accessibleForm.setAriaInvalid(usernameInput, false);
accessibleForm.clearError(usernameError);

// 📚 8. Form Best Practices
console.log("\n📚 8. Form Best Practices");
console.log("------------------------");

console.log("1. Always provide clear labels for form fields");
console.log("2. Use appropriate input types (email, password, etc.)");
console.log("3. Implement client-side validation with server-side backup");
console.log("4. Provide helpful error messages");
console.log("5. Use proper form structure (fieldset, legend)");
console.log("6. Implement proper focus management");
console.log("7. Use ARIA attributes for accessibility");
console.log("8. Provide visual feedback for form state");
console.log("9. Handle form submission gracefully");
console.log("10. Test forms with keyboard navigation");

console.log("\n🎉 Lesson 4 Complete: Forms and User Input");
console.log("You now understand how to handle forms and user input!");
