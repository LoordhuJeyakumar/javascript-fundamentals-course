console.log("Exercise 5: String Validation");
// Exercise 1: Validate Email Addresses
console.log("\n1. Validate Email Addresses:");

function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email.trim());
}
let emails = [
    "user@example.com",
    "test.email@domain.co.uk",
    "invalid.email",
    "@domain.com",
    "user@",
    "user@domain",
    "user.name@domain.com"
];
emails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});

// Exercise 2: Validate Phone Numbers
console.log("\n2. Validate Phone Numbers:");

function validatePhoneNumber(phone) {
    const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-. ]?)\d{3}[-. ]?\d{4}$/;
    return phoneRegex.test(phone.trim());
}
let phones = [
    "(555) 123-4567",
    "555-123-4567",
    "555.123.4567",
    "5551234567",
    "123-456-789",
    "123-456-78901",
    "abc-def-ghij"
];
phones.forEach(phone => {
    console.log(`${phone}: ${validatePhoneNumber(phone)}`);
});

// Exercise 3: Validate Passwords
console.log("\n3. Validate Passwords:");

function validatePassword(password) {
    const results = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    results.isValid = Object.values(results).every(v => v === true);
    return results;
}
let passwords = [
    "Password123!",
    "weak",
    "NoNumbers!",
    "nouppercase123!",
    "NOLOWERCASE123!",
    "NoSpecial123",
    "Perfect123!"
];
passwords.forEach(password => {
    console.log(`${password}:`, validatePassword(password));
});

// Exercise 4: Validate URLs
console.log("\n4. Validate URLs:");

function validateURL(url) {
    const urlRegex = /^(https?:\/\/|ftp:\/\/)[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url.trim());
}
let urls = [
    "https://www.example.com",
    "http://example.com",
    "ftp://files.example.com",
    "www.example.com",
    "example.com",
    "not-a-url",
    "https://",
    "https://example.com/path?query=value"
];
urls.forEach(url => {
    console.log(`${url}: ${validateURL(url)}`);
});

// Exercise 5: Validate Credit Card Numbers
console.log("\n5. Validate Credit Card Numbers:");

function validateCreditCard(cardNumber) {
    const sanitized = cardNumber.replace(/\D/g, '');
    const cardTypeRegex = /^(4\d{12}(\d{3})?|5[1-5]\d{14}|3[47]\d{13})$/;
    if (!cardTypeRegex.test(sanitized)) return false;

    let sum = 0;
    let shouldDouble = false;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i]);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}
let cardNumbers = [
    "4111111111111111", // Visa
    "5555555555554444", // MasterCard
    "378282246310005",  // American Express
    "1234567890123456", // Invalid
    "4111111111111112", // Invalid Luhn
    "378282246310006"   // Invalid Luhn
];
cardNumbers.forEach(card => {
    console.log(`${card}: ${validateCreditCard(card)}`);
});

// Exercise 6: Sanitize HTML Content
console.log("\n6. Sanitize HTML Content:");

function sanitizeHTML(html) {
    const allowedTags = ['b', 'i', 'em', 'strong', 'p', 'div', 'span', 'a', 'ul', 'ol', 'li'];
    return html
        .replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/<iframe.*?>.*?<\/iframe>/gi, '')
        .replace(/\son\w+="[^"]*"/gi, '')
        .replace(/\shref=['"]javascript:[^'"]*['"]/gi, '')
        .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (match, tag) => {
            return allowedTags.includes(tag.toLowerCase()) ? match : '';
        });
}
let htmlContent = [
    "<p>Safe paragraph</p>",
    "<script>alert('dangerous')</script>",
    "<img src='image.jpg' onerror='alert(1)'>",
    "<a href='javascript:alert(1)'>Link</a>",
    "<div>Safe content</div>",
    "<iframe src='malicious.com'></iframe>"
];
htmlContent.forEach(html => {
    console.log(`Original: ${html}`);
    console.log(`Sanitized: ${sanitizeHTML(html)}`);
    console.log("---");
});

// Exercise 7: Validate Postal Codes
console.log("\n7. Validate Postal Codes:");

function validatePostalCode(postalCode, country = 'US') {
    postalCode = postalCode.trim();
    const patterns = {
        US: /^\d{5}(-\d{4})?$/,
        UK: /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i,
        CA: /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i
    };

    return patterns[country.toUpperCase()]?.test(postalCode) || false;
}
let postalCodes = [
    { code: "12345", country: "US" },
    { code: "SW1A 1AA", country: "UK" },
    { code: "K1A 0A6", country: "CA" },
    { code: "1234", country: "US" },
    { code: "SW1A", country: "UK" },
    { code: "K1A", country: "CA" }
];
postalCodes.forEach(({ code, country }) => {
    console.log(`${code} (${country}): ${validatePostalCode(code, country)}`);
});

// Exercise 8: Validate and Sanitize User Input
console.log("\n8. Validate and Sanitize User Input:");

function validateAndSanitizeInput(input, type = 'text') {
    input = input.trim();

    switch (type) {
        case 'text':
            return { valid: true, sanitized: input.replace(/[<>]/g, '') };
        case 'email':
            return { valid: validateEmail(input), sanitized: input.toLowerCase() };
        case 'phone':
            return { valid: validatePhoneNumber(input), sanitized: input.replace(/\D/g, '') };
        case 'url':
            return { valid: validateURL(input), sanitized: input };
        case 'html':
            return { valid: true, sanitized: sanitizeHTML(input) };
        default:
            return { valid: false, sanitized: input };
    }
}
let inputs = [
    { input: "  Hello World  ", type: "text" },
    { input: "user@example.com", type: "email" },
    { input: "(555) 123-4567", type: "phone" },
    { input: "https://example.com", type: "url" },
    { input: "<p>Safe HTML</p>", type: "html" },
    { input: "invalid.email", type: "email" },
    { input: "not-a-url", type: "url" }
];
inputs.forEach(({ input, type }) => {
    console.log(`Input: "${input}" (${type}):`, validateAndSanitizeInput(input, type));
});