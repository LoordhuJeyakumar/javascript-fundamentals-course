// Lesson 5: String Validation and Processing
// This file teaches string validation and data processing techniques

console.log("📝 Welcome to Strings Lesson 5: String Validation and Processing!");
console.log("==============================================================");

// 1. Basic String Validation
console.log("\n📚 1. Basic String Validation");
console.log("-----------------------------");

function validateString(str) {
    return {
        isEmpty: str.length === 0,
        isWhitespace: str.trim().length === 0,
        hasLength: str.length > 0,
        isTooShort: str.length < 3,
        isTooLong: str.length > 100,
        hasNumbers: /\d/.test(str),
        hasLetters: /[a-zA-Z]/.test(str),
        hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(str),
        isAlphanumeric: /^[a-zA-Z0-9]+$/.test(str),
        isOnlyLetters: /^[a-zA-Z]+$/.test(str),
        isOnlyNumbers: /^\d+$/.test(str)
    };
}

let testStrings = [
    "",
    "   ",
    "a",
    "ab",
    "abc",
    "hello123",
    "Hello World!",
    "123456",
    "user@email.com",
    "   valid text   "
];

testStrings.forEach(str => {
    let validation = validateString(str);
    console.log(`"${str}":`, validation);
});

// 2. Email Validation
console.log("\n📚 2. Email Validation");
console.log("--------------------");

function validateEmail(email) {
    // Basic email regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // for example: user@example.com
    
    // More strict email regex
    let strictEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // for example: user@example.com, test.email@domain.co.uk, invalid-email, @domain.com, user@, user@domain, user.name@domain.com, user+tag@domain.com
    
    return {
        isValid: emailRegex.test(email),
        isStrictValid: strictEmailRegex.test(email),
        hasAtSymbol: email.includes('@'),
        hasDot: email.includes('.'),
        hasLocalPart: email.split('@')[0]?.length > 0,
        hasDomain: email.split('@')[1]?.length > 0
    };
}

let emails = [
    "user@example.com",
    "test.email@domain.co.uk",
    "invalid-email",
    "@domain.com",
    "user@",
    "user@domain",
    "user.name@domain.com",
    "user+tag@domain.com"
];

emails.forEach(email => {
    let validation = validateEmail(email);
    console.log(`"${email}":`, validation);
});

// 3. Phone Number Validation
console.log("\n📚 3. Phone Number Validation");
console.log("----------------------------");

function validatePhone(phone) {
    // Various phone number formats
    let formats = {
        us: /^\(\d{3}\)\s?\d{3}-\d{4}$/,
        usSimple: /^\d{3}-\d{3}-\d{4}$/,
        international: /^\+?[\d\s\-\(\)]{10,}$/,
        digitsOnly: /^\d{10}$/, // for example: 5551234567
        india: /^\+?[\d\s\-\(\)]{10,}$/ // for example: +91 9876543210
    };
    
    return {
        isValidUS: formats.us.test(phone),
        isValidUSSimple: formats.usSimple.test(phone),
        isValidInternational: formats.international.test(phone),
        isValidDigitsOnly: formats.digitsOnly.test(phone),
        hasDigits: /\d/.test(phone),
        digitCount: (phone.match(/\d/g) || []).length,
        isValidIndia: formats.india.test(phone)
    };
}

let phones = [
    "(555) 123-4567",
    "555-123-4567",
    "5551234567",
    "+1 555 123 4567",
    "123-456-7890",
    "invalid-phone",
    "555-123",
    "+44 20 7946 0958",
    "+91 9876543210"
];

phones.forEach(phone => {
    let validation = validatePhone(phone);
    console.log(`"${phone}":`, validation);
});

// 4. URL Validation
console.log("\n📚 4. URL Validation");
console.log("-------------------");

function validateURL(url) {
    let urlRegex = /^https?:\/\/.+/;
    let strictUrlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    
    return {
        isValid: urlRegex.test(url),
        isStrictValid: strictUrlRegex.test(url),
        hasProtocol: url.startsWith('http://') || url.startsWith('https://'),
        hasDomain: url.includes('.'),
        isHTTPS: url.startsWith('https://')
    };
}

let urls = [
    "https://www.example.com",
    "http://example.com",
    "https://subdomain.example.com/path?query=value",
    "ftp://example.com",
    "example.com",
    "https://",
    "not-a-url"
];

urls.forEach(url => {
    let validation = validateURL(url);
    console.log(`"${url}":`, validation);
});

// 5. Password Validation
console.log("\n📚 5. Password Validation");
console.log("------------------------");

function validatePassword(password) {
    return {
        hasMinLength: password.length >= 8,
        hasMaxLength: password.length <= 128,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        hasNoSpaces: !/\s/.test(password),
        isStrong: password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
}

let passwords = [
    "password",
    "Password",
    "Password123",
    "Password123!",
    "Pass123!",
    "password123!",
    "PASSWORD123!",
    "Pass 123!",
    "VeryStrongPassword123!"
];

passwords.forEach(password => {
    let validation = validatePassword(password);
    console.log(`"${password}":`, validation);
});

// 6. String Sanitization
console.log("\n📚 6. String Sanitization");
console.log("------------------------");

function sanitizeString(str) {
    return {
        trimmed: str.trim(),
        toLowerCase: str.toLowerCase(),
        toUpperCase: str.toUpperCase(),
        noSpaces: str.replace(/\s/g, ''),
        noSpecialChars: str.replace(/[^a-zA-Z0-9]/g, ''),
        noNumbers: str.replace(/\d/g, ''),
        noLetters: str.replace(/[a-zA-Z]/g, ''),
        htmlEscaped: str.replace(/[&<>"']/g, (match) => {
            const escapeMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;'
            };
            return escapeMap[match];
        }),
        normalized: str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    };
}

let dirtyStrings = [
    "  Hello World  ",
    "HELLO WORLD",
    "hello123world",
    "Hello <script>alert('xss')</script>",
    "café",
    "  Special@Chars#Here  "
];

dirtyStrings.forEach(str => {
    let sanitized = sanitizeString(str);
    console.log(`"${str}":`, sanitized);
});

// 7. Input Validation Pipeline
console.log("\n📚 7. Input Validation Pipeline");
console.log("-------------------------------");

function validateUserInput(input, rules = {}) {
    let errors = [];
    let warnings = [];
    
    // Required field check
    if (rules.required && (!input || input.trim().length === 0)) {
        errors.push("Field is required");
    }
    
    // Length checks
    if (rules.minLength && input.length < rules.minLength) {
        errors.push(`Minimum length is ${rules.minLength}`);
    }
    
    if (rules.maxLength && input.length > rules.maxLength) {
        errors.push(`Maximum length is ${rules.maxLength}`);
    }
    
    // Pattern checks
    if (rules.pattern && !rules.pattern.test(input)) {
        errors.push("Invalid format");
    }
    
    // Type checks
    if (rules.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        errors.push("Invalid email format");
    }
    
    if (rules.type === 'phone' && !/^\d{3}-\d{3}-\d{4}$/.test(input)) {
        errors.push("Invalid phone format");
    }
    
    // Warning checks
    if (rules.warnOnSpecialChars && /[!@#$%^&*(),.?":{}|<>]/.test(input)) {
        warnings.push("Contains special characters");
    }
    
    return {
        isValid: errors.length === 0,
        errors,
        warnings,
        input: input.trim()
    };
}

// Test validation pipeline
let validationRules = {
    required: true,
    minLength: 3,
    maxLength: 50,
    type: 'email',
    warnOnSpecialChars: true
};

let testInputs = [
    "user@example.com",
    "invalid-email",
    "a@b.c",
    "verylongemailaddressthatmightbeinvalid@example.com",
    "user@example.com!",
    ""
];

testInputs.forEach(input => {
    let result = validateUserInput(input, validationRules);
    console.log(`"${input}":`, result);
});

// 8. Data Cleaning and Normalization
console.log("\n📚 8. Data Cleaning and Normalization");
console.log("------------------------------------");

function cleanData(data) {
    if (typeof data !== 'string') return data;
    
    return data
        .trim()                           // Remove whitespace
        .replace(/\s+/g, ' ')             // Normalize spaces
        .replace(/[^\w\s@.-]/g, '')       // Remove special chars except @.-
        .toLowerCase()                    // Normalize case
        .replace(/\b\w/g, l => l.toUpperCase()); // Title case
}

let dirtyData = [
    "  JOHN DOE  ",
    "user@EMAIL.COM",
    "  hello   world  ",
    "Special@Chars#Here",
    "  mixed   CASE   text  "
];

dirtyData.forEach(data => {
    let cleaned = cleanData(data);
    console.log(`"${data}" -> "${cleaned}"`);
});

// 9. String Format Validation
console.log("\n📚 9. String Format Validation");
console.log("-------------------------------");

function validateFormat(str, format) {
    switch (format) {
        case 'uuid':
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
        case 'credit-card':
            return /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(str);
        case 'ssn':
            return /^\d{3}-\d{2}-\d{4}$/.test(str);
        case 'zip-code':
            return /^\d{5}(-\d{4})?$/.test(str);
        case 'ip-address':
            return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
        default:
            return false;
    }
}

let formatTests = [
    { value: "550e8400-e29b-41d4-a716-446655440000", format: "uuid" },
    { value: "1234-5678-9012-3456", format: "credit-card" },
    { value: "123-45-6789", format: "ssn" },
    { value: "12345", format: "zip-code" },
    { value: "192.168.1.1", format: "ip-address" },
    { value: "invalid", format: "uuid" }
];

formatTests.forEach(test => {
    let isValid = validateFormat(test.value, test.format);
    console.log(`"${test.value}" (${test.format}): ${isValid}`);
});

// 10. Practical Example: Form Validation
console.log("\n📚 10. Practical Example: Form Validation");
console.log("----------------------------------------");

class FormValidator {
    constructor() {
        this.rules = {
            name: { required: true, minLength: 2, maxLength: 50, pattern: /^[a-zA-Z\s]+$/ },
            email: { required: true, type: 'email' },
            phone: { required: true, type: 'phone' },
            password: { required: true, minLength: 8, maxLength: 128 },
            confirmPassword: { required: true, match: 'password' }
        };
    }
    
    validate(field, value, formData = {}) {
        let rule = this.rules[field];
        if (!rule) return { isValid: true, errors: [] };
        
        let errors = [];
        
        // Required check
        if (rule.required && (!value || value.trim().length === 0)) {
            errors.push(`${field} is required`);
        }
        
        // Length checks
        if (value && rule.minLength && value.length < rule.minLength) {
            errors.push(`${field} must be at least ${rule.minLength} characters`);
        }
        
        if (value && rule.maxLength && value.length > rule.maxLength) {
            errors.push(`${field} must be no more than ${rule.maxLength} characters`);
        }
        
        // Pattern check
        if (value && rule.pattern && !rule.pattern.test(value)) {
            errors.push(`${field} contains invalid characters`);
        }
        
        // Type checks
        if (value && rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors.push(`${field} must be a valid email address`);
        }
        
        if (value && rule.type === 'phone' && !/^\d{3}-\d{3}-\d{4}$/.test(value)) {
            errors.push(`${field} must be in format XXX-XXX-XXXX`);
        }
        
        // Match check
        if (value && rule.match && formData[rule.match] !== value) {
            errors.push(`${field} must match ${rule.match}`);
        }
        
        return {
            isValid: errors.length === 0,
            errors
        };
    }
    
    validateForm(formData) {
        let results = {};
        let isValid = true;
        
        for (let field in this.rules) {
            let result = this.validate(field, formData[field], formData);
            results[field] = result;
            if (!result.isValid) isValid = false;
        }
        
        return {
            isValid,
            results
        };
    }
}

// Test form validation
let validator = new FormValidator();
let formData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "555-123-4567",
    password: "password123",
    confirmPassword: "password123"
};

let validationResult = validator.validateForm(formData);
console.log("Form validation result:", validationResult);

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- String validation ensures data quality and security");
console.log("- Regular expressions are powerful for pattern matching");
console.log("- Email, phone, and URL validation have specific patterns");
console.log("- Password validation should check multiple criteria");
console.log("- String sanitization prevents security issues");
console.log("- Validation pipelines provide comprehensive checking");
console.log("- Form validation helps create better user experiences");
console.log("- Always validate on both client and server side");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a function to validate email addresses");
console.log("2. Build a password strength checker");
console.log("3. Implement a form validation system");
console.log("4. Create a string sanitization function");
console.log("5. Build a data cleaning pipeline");
