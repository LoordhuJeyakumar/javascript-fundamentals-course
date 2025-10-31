// Lesson 3: Number Formatting
// This file teaches number formatting and conversion techniques

console.log("🔢 Welcome to Numbers Lesson 3: Number Formatting!");
console.log("=================================================");

// 1. Basic Number Formatting Methods
console.log("\n📚 1. Basic Number Formatting Methods");
console.log("-----------------------------------");

let number = 1234.5678;
console.log("Original number:", number);

// toFixed() - Fixed decimal places => Rounds the number to a specified number of decimal places
console.log("toFixed() method:");
console.log("toFixed(0):", number.toFixed(0));
console.log("toFixed(1):", number.toFixed(1));
console.log("toFixed(2):", number.toFixed(2));
console.log("toFixed(4):", number.toFixed(4));

// toPrecision() - Significant digits => Formats the number to a specified number of significant digits 
console.log("toPrecision() method:");
console.log("toPrecision(2):", number.toPrecision(2));
console.log("toPrecision(4):", number.toPrecision(4));
console.log("toPrecision(6):", number.toPrecision(6));
console.log("toPrecision(8):", number.toPrecision(8));

// toExponential() - Scientific notation => Represents the number in exponential notation
console.log("toExponential() method:");
console.log("toExponential():", number.toExponential());
console.log("toExponential(2):", number.toExponential(2));
console.log("toExponential(4):", number.toExponential(4));

// 2. Locale-Specific Formatting
console.log("\n📚 2. Locale-Specific Formatting");
console.log("-------------------------------");

let price = 1234.56;
let largeNumber = 1234567.89;

console.log("Locale-specific formatting:");
console.log("Original number:", price);

// Different locales
let locales = ['en-US', 'en-GB', 'de-DE', 'fr-FR', 'ja-JP'];

locales.forEach(locale => {
    console.log(`${locale}:`, price.toLocaleString(locale));
});

// 3. Currency Formatting
console.log("\n📚 3. Currency Formatting");
console.log("-------------------------");

let amount = 1234.56;
let currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];

console.log("Currency formatting:");
currencies.forEach(currency => {
    let formatted = amount.toLocaleString('en-US', {
        style: 'currency',
        currency: currency
    });
    console.log(`${currency}:`, formatted);
});

// Different locales with currency
console.log("Currency in different locales:");
let currencyLocales = [
    { locale: 'en-US', currency: 'USD' },
    { locale: 'de-DE', currency: 'EUR' },
    { locale: 'ja-JP', currency: 'JPY' }
];

currencyLocales.forEach(({ locale, currency }) => {
    let formatted = amount.toLocaleString(locale, {
        style: 'currency',
        currency: currency
    });
    console.log(`${locale} ${currency}:`, formatted);
});

// 4. Percentage Formatting
console.log("\n📚 4. Percentage Formatting");
console.log("--------------------------");

let percentages = [0.15, 0.75, 1.25, 0.05];
console.log("Percentage formatting:");

percentages.forEach(percent => {
    console.log(`${percent}:`);
    console.log(`  toLocaleString('en-US', {style: 'percent'}):`, 
        percent.toLocaleString('en-US', {style: 'percent'}));
    console.log(`  toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2}):`, 
        percent.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2}));
    console.log(`  toLocaleString('en-US', {style: 'percent', maximumFractionDigits: 1}):`, 
        percent.toLocaleString('en-US', {style: 'percent', maximumFractionDigits: 1}));
    console.log("");
});

// 5. Number Formatting Options
console.log("\n📚 5. Number Formatting Options");
console.log("------------------------------");

let testNumber = 1234567.89;
console.log("Test number:", testNumber);

// Different formatting options
let options = [
    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
    { minimumFractionDigits: 0, maximumFractionDigits: 0 },
    { minimumFractionDigits: 4, maximumFractionDigits: 4 },
    { useGrouping: false },
    { useGrouping: true },
    { minimumIntegerDigits: 3 },
    { minimumSignificantDigits: 3, maximumSignificantDigits: 6 }
];

options.forEach((option, index) => {
    let formatted = testNumber.toLocaleString('en-US', option);
    console.log(`Option ${index + 1}:`, formatted);
});

// 6. Custom Number Formatting
console.log("\n📚 6. Custom Number Formatting");
console.log("----------------------------");

class NumberFormatter {
    constructor() {
        this.defaultLocale = 'en-US';
    }
    
    // Format as currency
    formatCurrency(amount, currency = 'USD', locale = this.defaultLocale) {
        return amount.toLocaleString(locale, {
            style: 'currency',
            currency: currency
        });
    }
    
    // Format as percentage
    formatPercentage(value, decimals = 2, locale = this.defaultLocale) {
        return value.toLocaleString(locale, {
            style: 'percent',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
    
    // Format with custom decimal places
    formatDecimal(number, decimals = 2, locale = this.defaultLocale) {
        return number.toLocaleString(locale, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
    
    // Format large numbers with K, M, B suffixes
    formatCompact(number, locale = this.defaultLocale) {
        return number.toLocaleString(locale, {
            notation: 'compact',
            compactDisplay: 'short'
        });
    }
    
    // Format with scientific notation
    formatScientific(number, decimals = 2) {
        return number.toExponential(decimals);
    }
    
    // Format with custom separators
    formatWithSeparators(number, thousandsSeparator = ',', decimalSeparator = '.') {
        let parts = number.toString().split('.');
        let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        let decimalPart = parts[1] ? decimalSeparator + parts[1] : '';
        return integerPart + decimalPart;
    }
    
    // Format phone number
    formatPhoneNumber(number) {
        let cleaned = number.toString().replace(/\D/g, '');
        if (cleaned.length === 10) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        }
        return number.toString();
    }
    
    // Format credit card number
    formatCreditCard(number) {
        let cleaned = number.toString().replace(/\D/g, '');
        let formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
        return formatted.trim();
    }
}

// Test custom formatter
let formatter = new NumberFormatter();
let testAmount = 1234567.89;
let testPercent = 0.15;
let testPhone = 1234567890;
let testCard = 1234567890123456;

console.log("Custom formatting examples:");
console.log("Currency:", formatter.formatCurrency(testAmount));
console.log("Percentage:", formatter.formatPercentage(testPercent));
console.log("Decimal:", formatter.formatDecimal(testAmount, 3));
console.log("Compact:", formatter.formatCompact(testAmount));
console.log("Scientific:", formatter.formatScientific(testAmount));
console.log("Custom separators:", formatter.formatWithSeparators(testAmount, ' ', ','));
console.log("Phone number:", formatter.formatPhoneNumber(testPhone));
console.log("Credit card:", formatter.formatCreditCard(testCard));

// 7. Number Parsing and Conversion
console.log("\n📚 7. Number Parsing and Conversion");
console.log("----------------------------------");

let numberStrings = [
    "123.45",
    "1,234.56",
    "$1,234.56",
    "15%",
    "1.23e4",
    "0xFF",
    "010",
    "not a number"
];

console.log("Number parsing examples:");
numberStrings.forEach(str => {
    console.log(`"${str}":`);
    console.log(`  Number(): ${Number(str)}`);
    console.log(`  parseInt(): ${parseInt(str)}`);
    console.log(`  parseFloat(): ${parseFloat(str)}`);
    console.log(`  isNaN(): ${isNaN(Number(str))}`);
    console.log("");
});

// 8. Practical Example: Financial Calculator
console.log("\n📚 8. Practical Example: Financial Calculator");
console.log("--------------------------------------------");

class FinancialCalculator {
    constructor() {
        this.formatter = new NumberFormatter();
    }
    
    // Calculate compound interest
    calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
        let amount = principal * Math.pow(1 + (rate / compoundFrequency), compoundFrequency * time);
        let interest = amount - principal;
        
        return {
            principal: this.formatter.formatCurrency(principal),
            rate: this.formatter.formatPercentage(rate),
            time: `${time} years`,
            compoundFrequency: `${compoundFrequency} times per year`,
            finalAmount: this.formatter.formatCurrency(amount),
            interestEarned: this.formatter.formatCurrency(interest),
            totalReturn: this.formatter.formatPercentage(interest / principal)
        };
    }
    
    // Calculate loan payment
    calculateLoanPayment(principal, annualRate, years) {
        let monthlyRate = annualRate / 12;
        let numberOfPayments = years * 12;
        
        if (monthlyRate === 0) {
            return principal / numberOfPayments;
        }
        
        let monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        
        return {
            principal: this.formatter.formatCurrency(principal),
            annualRate: this.formatter.formatPercentage(annualRate),
            years: years,
            monthlyPayment: this.formatter.formatCurrency(monthlyPayment),
            totalPayments: this.formatter.formatCurrency(monthlyPayment * numberOfPayments),
            totalInterest: this.formatter.formatCurrency(monthlyPayment * numberOfPayments - principal)
        };
    }
    
    // Calculate investment growth
    calculateInvestmentGrowth(initialInvestment, monthlyContribution, annualRate, years) {
        let monthlyRate = annualRate / 12;
        let numberOfMonths = years * 12;
        
        let futureValue = initialInvestment * Math.pow(1 + monthlyRate, numberOfMonths) +
                         monthlyContribution * ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate);
        
        let totalContributions = initialInvestment + (monthlyContribution * numberOfMonths);
        let totalGrowth = futureValue - totalContributions;
        
        return {
            initialInvestment: this.formatter.formatCurrency(initialInvestment),
            monthlyContribution: this.formatter.formatCurrency(monthlyContribution),
            annualRate: this.formatter.formatPercentage(annualRate),
            years: years,
            futureValue: this.formatter.formatCurrency(futureValue),
            totalContributions: this.formatter.formatCurrency(totalContributions),
            totalGrowth: this.formatter.formatCurrency(totalGrowth),
            growthPercentage: this.formatter.formatPercentage(totalGrowth / totalContributions)
        };
    }
}

// Test financial calculator
let finCalc = new FinancialCalculator();

console.log("Financial calculations:");
console.log("Compound Interest:");
let compoundResult = finCalc.calculateCompoundInterest(10000, 0.05, 10, 12);
Object.entries(compoundResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

console.log("\nLoan Payment:");
let loanResult = finCalc.calculateLoanPayment(200000, 0.04, 30);
Object.entries(loanResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

console.log("\nInvestment Growth:");
let investmentResult = finCalc.calculateInvestmentGrowth(5000, 500, 0.07, 20);
Object.entries(investmentResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// 9. Number Formatting Best Practices
console.log("\n📚 9. Number Formatting Best Practices");
console.log("------------------------------------");

console.log("Best practices for number formatting:");
console.log("1. Always specify locale for consistent formatting");
console.log("2. Use appropriate precision for the context");
console.log("3. Consider the audience when choosing format");
console.log("4. Validate numbers before formatting");
console.log("5. Handle edge cases (NaN, Infinity, very large numbers)");
console.log("6. Use consistent formatting throughout your application");
console.log("7. Consider performance for large datasets");

// Example of best practices
function formatNumberSafely(number, options = {}) {
    // Validate input
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid number';
    }
    
    if (!isFinite(number)) {
        return number > 0 ? '∞' : '-∞';
    }
    
    // Set default options
    let defaultOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
    };
    
    let finalOptions = { ...defaultOptions, ...options };
    
    try {
        return number.toLocaleString('en-US', finalOptions);
    } catch (error) {
        return 'Formatting error';
    }
}

// Test safe formatting
let testNumbers = [1234.56, NaN, Infinity, -Infinity, 0, 0.123456789];
testNumbers.forEach(num => {
    console.log(`${num} -> ${formatNumberSafely(num)}`);
});

console.log("\n🎉 Lesson 3 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Use toFixed() for fixed decimal places");
console.log("- Use toPrecision() for significant digits");
console.log("- Use toLocaleString() for locale-specific formatting");
console.log("- Currency formatting requires currency codes");
console.log("- Percentage formatting uses style: 'percent'");
console.log("- Always validate numbers before formatting");
console.log("- Consider your audience when choosing formats");
console.log("- Handle edge cases gracefully");

console.log("\n📝 Practice Exercises:");
console.log("1. Format numbers as currency in different locales");
console.log("2. Create custom number formatting functions");
console.log("3. Format percentages with different precision");
console.log("4. Parse formatted numbers back to values");
console.log("5. Build a financial calculator with proper formatting");
