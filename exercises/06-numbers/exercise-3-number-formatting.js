// Exercise 3: Number Formatting
// Complete the TODO sections below

console.log("💪 Exercise 3: Number Formatting");
console.log("===============================");

// Exercise 1: Basic Number Formatting
console.log("\n1. Basic number formatting:");
let number = 1234.5678;

// TODO: Format to 2 decimal places using toFixed()
let formatted2 = ""; // Your code here
// Hint: Use number.toFixed(2)

// TODO: Format to 4 decimal places using toFixed()
let formatted4 = ""; // Your code here
// Hint: Use number.toFixed(4)

// TODO: Format with 3 significant digits using toPrecision()
let formattedSig = ""; // Your code here
// Hint: Use number.toPrecision(3)

// TODO: Format with 6 significant digits using toPrecision()
let formattedSig6 = ""; // Your code here
// Hint: Use number.toPrecision(6)

// TODO: Format in scientific notation using toExponential()
let scientific = ""; // Your code here
// Hint: Use number.toExponential()

// TODO: Format in scientific notation with 2 decimal places
let scientific2 = ""; // Your code here
// Hint: Use number.toExponential(2)

console.log("Original:", number);
console.log("2 decimals:", formatted2);
console.log("4 decimals:", formatted4);
console.log("3 significant:", formattedSig);
console.log("6 significant:", formattedSig6);
console.log("Scientific:", scientific);
console.log("Scientific (2):", scientific2);

// Exercise 2: Locale-Specific Formatting
console.log("\n2. Locale-specific formatting:");
let price = 1234.56;

// TODO: Format for US locale
let usFormat = ""; // Your code here
// Hint: Use price.toLocaleString('en-US')

// TODO: Format for UK locale
let ukFormat = ""; // Your code here
// Hint: Use price.toLocaleString('en-GB')

// TODO: Format for German locale
let germanFormat = ""; // Your code here
// Hint: Use price.toLocaleString('de-DE')

// TODO: Format for French locale
let frenchFormat = ""; // Your code here
// Hint: Use price.toLocaleString('fr-FR')

// TODO: Format for Japanese locale
let japaneseFormat = ""; // Your code here
// Hint: Use price.toLocaleString('ja-JP')

console.log("Original:", price);
console.log("US format:", usFormat);
console.log("UK format:", ukFormat);
console.log("German format:", germanFormat);
console.log("French format:", frenchFormat);
console.log("Japanese format:", japaneseFormat);

// Exercise 3: Currency Formatting
console.log("\n3. Currency formatting:");
let amount = 1234.56;

// TODO: Format as USD currency
let usdFormat = ""; // Your code here
// Hint: Use amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

// TODO: Format as EUR currency
let eurFormat = ""; // Your code here
// Hint: Use amount.toLocaleString('en-US', {style: 'currency', currency: 'EUR'})

// TODO: Format as GBP currency
let gbpFormat = ""; // Your code here
// Hint: Use amount.toLocaleString('en-US', {style: 'currency', currency: 'GBP'})

// TODO: Format as JPY currency
let jpyFormat = ""; // Your code here
// Hint: Use amount.toLocaleString('en-US', {style: 'currency', currency: 'JPY'})

// TODO: Format as CAD currency
let cadFormat = ""; // Your code here
// Hint: Use amount.toLocaleString('en-US', {style: 'currency', currency: 'CAD'})

console.log("Original:", amount);
console.log("USD:", usdFormat);
console.log("EUR:", eurFormat);
console.log("GBP:", gbpFormat);
console.log("JPY:", jpyFormat);
console.log("CAD:", cadFormat);

// Exercise 4: Percentage Formatting
console.log("\n4. Percentage formatting:");
let percentages = [0.15, 0.75, 1.25, 0.05];

// TODO: Format each percentage using toLocaleString with percent style
let formattedPercentages = []; // Your code here
// Hint: Use percent.toLocaleString('en-US', {style: 'percent'})

// TODO: Format with 2 decimal places
let formattedPercentages2 = []; // Your code here
// Hint: Use percent.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2})

// TODO: Format with 1 decimal place maximum
let formattedPercentages1 = []; // Your code here
// Hint: Use percent.toLocaleString('en-US', {style: 'percent', maximumFractionDigits: 1})

console.log("Original:", percentages);
console.log("Percentages:", formattedPercentages);
console.log("Percentages (2 decimals):", formattedPercentages2);
console.log("Percentages (1 decimal max):", formattedPercentages1);

// Exercise 5: Number Formatting Options
console.log("\n5. Number formatting options:");
let testNumber = 1234567.89;

// TODO: Format with 2 decimal places
let option1 = ""; // Your code here
// Hint: Use toLocaleString with minimumFractionDigits and maximumFractionDigits

// TODO: Format with no decimal places
let option2 = ""; // Your code here
// Hint: Use toLocaleString with minimumFractionDigits and maximumFractionDigits set to 0

// TODO: Format with 4 decimal places
let option3 = ""; // Your code here
// Hint: Use toLocaleString with minimumFractionDigits and maximumFractionDigits set to 4

// TODO: Format without grouping
let option4 = ""; // Your code here
// Hint: Use toLocaleString with useGrouping: false

// TODO: Format with grouping
let option5 = ""; // Your code here
// Hint: Use toLocaleString with useGrouping: true

// TODO: Format with minimum 3 integer digits
let option6 = ""; // Your code here
// Hint: Use toLocaleString with minimumIntegerDigits: 3

console.log("Original:", testNumber);
console.log("Option 1 (2 decimals):", option1);
console.log("Option 2 (no decimals):", option2);
console.log("Option 3 (4 decimals):", option3);
console.log("Option 4 (no grouping):", option4);
console.log("Option 5 (with grouping):", option5);
console.log("Option 6 (min 3 digits):", option6);

// Exercise 6: Custom Number Formatting
console.log("\n6. Custom number formatting:");
// TODO: Create a custom number formatter class
class NumberFormatter {
    constructor() {
        this.defaultLocale = 'en-US';
    }
    
    // TODO: Format as currency
    formatCurrency(amount, currency = 'USD', locale = this.defaultLocale) {
        // Your code here
        // Hint: Use amount.toLocaleString with currency options
        return "";
    }
    
    // TODO: Format as percentage
    formatPercentage(value, decimals = 2, locale = this.defaultLocale) {
        // Your code here
        // Hint: Use value.toLocaleString with percent style
        return "";
    }
    
    // TODO: Format with custom decimal places
    formatDecimal(number, decimals = 2, locale = this.defaultLocale) {
        // Your code here
        // Hint: Use number.toLocaleString with fraction digits
        return "";
    }
    
    // TODO: Format large numbers with K, M, B suffixes
    formatCompact(number, locale = this.defaultLocale) {
        // Your code here
        // Hint: Use number.toLocaleString with compact notation
        return "";
    }
    
    // TODO: Format with scientific notation
    formatScientific(number, decimals = 2) {
        // Your code here
        // Hint: Use number.toExponential
        return "";
    }
    
    // TODO: Format with custom separators
    formatWithSeparators(number, thousandsSeparator = ',', decimalSeparator = '.') {
        // Your code here
        // Hint: Split by decimal point, format integer part, rejoin
        return "";
    }
    
    // TODO: Format phone number
    formatPhoneNumber(number) {
        // Your code here
        // Hint: Remove non-digits, format as (XXX) XXX-XXXX
        return "";
    }
    
    // TODO: Format credit card number
    formatCreditCard(number) {
        // Your code here
        // Hint: Remove non-digits, add spaces every 4 digits
        return "";
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

// Exercise 7: Number Parsing and Conversion
console.log("\n7. Number parsing and conversion:");
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

// TODO: Parse each string using Number()
let parsedNumbers = []; // Your code here
// Hint: Use Number() on each string

// TODO: Parse each string using parseInt()
let parsedInts = []; // Your code here
// Hint: Use parseInt() on each string

// TODO: Parse each string using parseFloat()
let parsedFloats = []; // Your code here
// Hint: Use parseFloat() on each string

// TODO: Check if each parsed number is valid
let isValidNumbers = []; // Your code here
// Hint: Use isNaN() to check validity

console.log("Number parsing examples:");
numberStrings.forEach((str, index) => {
    console.log(`"${str}": Number=${parsedNumbers[index]}, parseInt=${parsedInts[index]}, parseFloat=${parsedFloats[index]}, isValid=${isValidNumbers[index]}`);
});

// Exercise 8: Financial Calculator with Formatting
console.log("\n8. Financial calculator with formatting:");
// TODO: Create a financial calculator class
class FinancialCalculator {
    constructor() {
        this.formatter = new NumberFormatter();
    }
    
    // TODO: Calculate compound interest
    calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
        // Your code here
        // Hint: Use the compound interest formula
        // Return formatted result object
        return {
            principal: "",
            rate: "",
            time: "",
            compoundFrequency: "",
            finalAmount: "",
            interestEarned: "",
            totalReturn: ""
        };
    }
    
    // TODO: Calculate loan payment
    calculateLoanPayment(principal, annualRate, years) {
        // Your code here
        // Hint: Use the loan payment formula
        // Return formatted result object
        return {
            principal: "",
            annualRate: "",
            years: 0,
            monthlyPayment: "",
            totalPayments: "",
            totalInterest: ""
        };
    }
    
    // TODO: Calculate investment growth
    calculateInvestmentGrowth(initialInvestment, monthlyContribution, annualRate, years) {
        // Your code here
        // Hint: Use future value formulas
        // Return formatted result object
        return {
            initialInvestment: "",
            monthlyContribution: "",
            annualRate: "",
            years: 0,
            futureValue: "",
            totalContributions: "",
            totalGrowth: "",
            growthPercentage: ""
        };
    }
}

// Test financial calculator
let finCalc = new FinancialCalculator();

console.log("Financial calculations:");
let compoundResult = finCalc.calculateCompoundInterest(10000, 0.05, 10, 12);
console.log("Compound Interest:");
Object.entries(compoundResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

let loanResult = finCalc.calculateLoanPayment(200000, 0.04, 30);
console.log("Loan Payment:");
Object.entries(loanResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

let investmentResult = finCalc.calculateInvestmentGrowth(5000, 500, 0.07, 20);
console.log("Investment Growth:");
Object.entries(investmentResult).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// Exercise 9: Number Formatting Best Practices
console.log("\n9. Number formatting best practices:");
// TODO: Create a safe number formatting function
function formatNumberSafely(number, options = {}) {
    // Your code here
    // Hint: Validate input, set defaults, handle errors
    // Return formatted string or error message
    return "";
}

// Test safe formatting
let testNumbers = [1234.56, NaN, Infinity, -Infinity, 0, 0.123456789];
console.log("Safe number formatting:");
testNumbers.forEach(num => {
    console.log(`${num} -> ${formatNumberSafely(num)}`);
});

// Exercise 10: Number Formatting Performance
console.log("\n10. Number formatting performance:");
// TODO: Create a performance test function
function testFormattingPerformance() {
    // Your code here
    // Hint: Test different formatting methods with large datasets
    // Return performance comparison
    return {
        toFixed: 0,
        toLocaleString: 0,
        customFormat: 0
    };
}

let performanceResults = testFormattingPerformance();
console.log("Formatting performance comparison:");
console.log("toFixed():", performanceResults.toFixed.toFixed(2) + "ms");
console.log("toLocaleString():", performanceResults.toLocaleString.toFixed(2) + "ms");
console.log("Custom format:", performanceResults.customFormat.toFixed(2) + "ms");

console.log("\n🎉 Exercise 3 Complete!");
console.log("=====================");
console.log("Great job! You've practiced number formatting.");
console.log("Key concepts practiced:");
console.log("- Basic number formatting methods");
console.log("- Locale-specific formatting");
console.log("- Currency and percentage formatting");
console.log("- Custom formatting functions");
console.log("- Number parsing and conversion");
console.log("- Financial calculator with formatting");
console.log("- Safe formatting practices");
console.log("- Performance considerations");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Numbers Assignment");
console.log("4. Ask questions if you need help");
