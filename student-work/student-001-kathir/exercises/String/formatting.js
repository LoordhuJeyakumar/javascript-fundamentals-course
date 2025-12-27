console.log("Exercise 4: String Formatting");
// Exercise 1: Format Currency
console.log("\n1. Format Currency:");

function formatCurrency(amount, currency = 'USD') {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
console.log("USD 1234.56:", formatCurrency(1234.56, 'USD'));
console.log("EUR 987.65:", formatCurrency(987.65, 'EUR'));
console.log("JPY 1000:", formatCurrency(1000, 'JPY'));
console.log("GBP 500.25:", formatCurrency(500.25, 'GBP'));

// Exercise 2: Format Percentages
console.log("\n2. Format Percentages:");

function formatPercentage(value, decimalPlaces = 2) {
    let percent = (value * 100).toFixed(decimalPlaces);
    return percent + "%";
}
console.log("0.1234 (2 decimals):", formatPercentage(0.1234, 2));
console.log("0.5678 (1 decimal):", formatPercentage(0.5678, 1));
console.log("0.9999 (0 decimals):", formatPercentage(0.9999, 0));
console.log("1.5 (2 decimals):", formatPercentage(1.5, 2));

// Exercise 3: Format Phone Numbers
console.log("\n3. Format Phone Numbers:");

function formatPhoneNumber(digits, format = 'US') {
    digits = digits.replace(/\D/g, '');
    let part1 = digits.slice(0, 3);
    let part2 = digits.slice(3, 6);
    let part3 = digits.slice(6, 10);

    switch (format) {
        case 'US':
            return `(${part1}) ${part2}-${part3}`;
        case 'dash':
            return `${part1}-${part2}-${part3}`;
        case 'dots':
            return `${part1}.${part2}.${part3}`;
        case 'space':
            return `${part1} ${part2} ${part3}`;
        default:
            return digits;
    }
}
console.log("1234567890 (US):", formatPhoneNumber("1234567890", 'US'));
console.log("1234567890 (dash):", formatPhoneNumber("1234567890", 'dash'));
console.log("1234567890 (dots):", formatPhoneNumber("1234567890", 'dots'));
console.log("1234567890 (space):", formatPhoneNumber("1234567890", 'space'));

// Exercise 4: Format Dates
console.log("\n4. Format Dates:");

function formatDate(date, format = 'MM/DD/YYYY') {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    switch (format) {
        case 'MM/DD/YYYY':
            return `${month}/${day}/${year}`;
        case 'DD/MM/YYYY':
            return `${day}/${month}/${year}`;
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
        case 'Month DD, YYYY':
            return `${monthNames[date.getMonth()]} ${day}, ${year}`;
        default:
            return date.toDateString();
    }
}
let testDate = new Date('2023-12-25');
console.log("MM/DD/YYYY:", formatDate(testDate, 'MM/DD/YYYY'));
console.log("DD/MM/YYYY:", formatDate(testDate, 'DD/MM/YYYY'));
console.log("YYYY-MM-DD:", formatDate(testDate, 'YYYY-MM-DD'));
console.log("Month DD, YYYY:", formatDate(testDate, 'Month DD, YYYY'));

// Exercise 5: Format File Sizes
console.log("\n5. Format File Sizes:");

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = bytes / Math.pow(1024, i);
    return `${size.toFixed(2)} ${units[i]}`;
}
console.log("1024 bytes:", formatFileSize(1024));
console.log("1048576 bytes:", formatFileSize(1048576));
console.log("1073741824 bytes:", formatFileSize(1073741824));
console.log("1099511627776 bytes:", formatFileSize(1099511627776));

// Exercise 6: Format Names
console.log("\n6. Format Names:");

function formatName(name, format = 'first last') {
    let parts = name.trim().split(/\s+/);
    let first = parts[0] || "";
    let last = parts[parts.length - 1] || "";

    switch (format) {
        case 'first last':
            return `${first} ${last}`;
        case 'last, first':
            return `${last}, ${first}`;
        case 'F. Last':
            return `${first[0].toUpperCase()}. ${last}`;
        case 'First L.':
            return `${first} ${last[0].toUpperCase()}.`;
        default:
            return name;
    }
}
let fullName = "John Doe";
let threeNames = "John Michael Doe";
console.log("First Last:", formatName(fullName, 'first last'));
console.log("Last, First:", formatName(fullName, 'last, first'));
console.log("F. Last:", formatName(fullName, 'F. Last'));
console.log("First L.:", formatName(fullName, 'First L.'));
console.log("Three names:", formatName(threeNames, 'first last'));

// Exercise 7: Format Addresses
console.log("\n7. Format Addresses:");

function formatAddress(address, format = 'US') {
    const { street, city, state, zipCode, postalCode, country } = address;

    switch (format) {
        case 'US':
            return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}, ${country || ''}`.replace(/,\s*,/g, ',');
        case 'international':
            return `${street || ''}, ${city || ''}, ${postalCode || ''}, ${country || ''}`.replace(/,\s*,/g, ',');
        case 'single':
            return [street, city, state || postalCode, country].filter(Boolean).join(', ');
        default:
            return Object.values(address).filter(Boolean).join(', ');
    }
}
let usAddress = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA"
};

let intlAddress = {
    street: "456 High Street",
    city: "London",
    postalCode: "SW1A 1AA",
    country: "UK"
};
console.log("US format:", formatAddress(usAddress, 'US'));
console.log("International format:", formatAddress(intlAddress, 'international'));
console.log("Single line format:", formatAddress(usAddress, 'single'));

// Exercise 8: Format Text with Padding
console.log("\n8. Format Text with Padding:");

function formatWithPadding(str, width, alignment = 'left', paddingChar = ' ') {
    if (str.length >= width) return str;

    const padLength = width - str.length;

    switch (alignment) {
        case 'right':
            return str.padStart(width, paddingChar);
        case 'center':
            const leftPad = Math.floor(padLength / 2);
            const rightPad = padLength - leftPad;
            return paddingChar.repeat(leftPad) + str + paddingChar.repeat(rightPad);
        case 'left':
        default:
            return str.padEnd(width, paddingChar);
    }
}
let text = "Hello";
console.log("Left aligned (width 10):", formatWithPadding(text, 10, 'left'));
console.log("Right aligned (width 10):", formatWithPadding(text, 10, 'right'));
console.log("Center aligned (width 10):", formatWithPadding(text, 10, 'center'));
console.log("With dots (width 15):", formatWithPadding(text, 15, 'center', '.'));