// Exercise 1: Basic Number Formatting
console.log("\n1. Basic number formatting:");

let number = 1234.5678;
let formatted2 = number.toFixed(2);
let formatted4 = number.toFixed(4);
let formattedSig = number.toPrecision(3);
let formattedSig6 = number.toPrecision(6);
let scientific = number.toExponential();
let scientific2 = number.toExponential(2);
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
let usFormat = price.toLocaleString('en-US');
let ukFormat = price.toLocaleString('en-GB');
let germanFormat = price.toLocaleString('de-DE');
let frenchFormat = price.toLocaleString('fr-FR');
let japaneseFormat = price.toLocaleString('ja-JP');
console.log("Original:", price);
console.log("US format:", usFormat);
console.log("UK format:", ukFormat);
console.log("German format:", germanFormat);
console.log("French format:", frenchFormat);
console.log("Japanese format:", japaneseFormat);

// Exercise 3: Currency Formatting
console.log("\n3. Currency formatting:");

let amount = 1234.56;
let usdFormat = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
let eurFormat = amount.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
let gbpFormat = amount.toLocaleString('en-US', { style: 'currency', currency: 'GBP' });
let jpyFormat = amount.toLocaleString('en-US', { style: 'currency', currency: 'JPY' });
let cadFormat = amount.toLocaleString('en-US', { style: 'currency', currency: 'CAD' });
console.log("Original:", amount);
console.log("USD:", usdFormat);
console.log("EUR:", eurFormat);
console.log("GBP:", gbpFormat);
console.log("JPY:", jpyFormat);
console.log("CAD:", cadFormat);

// Exercise 4: Percentage Formatting
console.log("\n4. Percentage formatting:");

let percentages = [0.15, 0.75, 1.25, 0.05];
let formattedPercentages = percentages.map(p => p.toLocaleString('en-US', { style: 'percent' }));
let formattedPercentages2 = percentages.map(p => p.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 }));
let formattedPercentages1 = percentages.map(p => p.toLocaleString('en-US', { style: 'percent', maximumFractionDigits: 1 }));
console.log("Original:", percentages);
console.log("Percentages:", formattedPercentages);
console.log("Percentages (2 decimals):", formattedPercentages2);
console.log("Percentages (1 decimal max):", formattedPercentages1);

// Exercise 5: Number Formatting Options
console.log("\n5. Number formatting options:");

let testNumber = 1234567.89;
let option1 = testNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
let option2 = testNumber.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
let option3 = testNumber.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
let option4 = testNumber.toLocaleString('en-US', { useGrouping: false });
let option5 = testNumber.toLocaleString('en-US', { useGrouping: true });
let option6 = testNumber.toLocaleString('en-US', { minimumIntegerDigits: 3 });
console.log("Original:", testNumber);
console.log("Option 1 (2 decimals):", option1);
console.log("Option 2 (no decimals):", option2);
console.log("Option 3 (4 decimals):", option3);
console.log("Option 4 (no grouping):", option4);
console.log("Option 5 (with grouping):", option5);
console.log("Option 6 (min 3 digits):", option6);

// Exercise 6: Custom Number Formatting
console.log("\n6. Custom number formatting:");

class NumberFormatter {
    constructor() {
        this.defaultLocale = 'en-US';
    }
    formatCurrency(amount, currency = 'USD', locale = this.defaultLocale) {
        return amount.toLocaleString(locale, { style: 'currency', currency });
    }
    formatPercentage(value, decimals = 2, locale = this.defaultLocale) {
        return value.toLocaleString(locale, { style: 'percent', minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    formatDecimal(number, decimals = 2, locale = this.defaultLocale) {
        return number.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    formatCompact(number, locale = this.defaultLocale) {
        return number.toLocaleString(locale, { notation: 'compact' });
    }
    formatScientific(number, decimals = 2) {
        return number.toExponential(decimals);
    }
    formatWithSeparators(number, thousandsSeparator = ',', decimalSeparator = '.') {
        let [intPart, decPart] = number.toString().split('.');
        intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        return decPart ? `${intPart}${decimalSeparator}${decPart}` : intPart;
    }
    formatPhoneNumber(number) {
        let digits = number.toString().replace(/\D/g, '');
        return digits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    formatCreditCard(number) {
        let digits = number.toString().replace(/\D/g, '');
        return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
}
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
let parsedNumbers = numberStrings.map(s => Number(s.replace(/[^0-9.eE+-]/g, '')));
let parsedInts = numberStrings.map(s => parseInt(s));
let parsedFloats = numberStrings.map(s => parseFloat(s));
let isValidNumbers = parsedNumbers.map(n => !isNaN(n));
console.log("Number parsing examples:");
numberStrings.forEach((str, index) => {
    console.log(`"${str}": Number=${parsedNumbers[index]}, parseInt=${parsedInts[index]}, parseFloat=${parsedFloats[index]}, isValid=${isValidNumbers[index]}`);
});

// Exercise 8: Financial Calculator with Formatting
console.log("\n8. Financial calculator with formatting:");

class FinancialCalculator {
    constructor() {
        this.formatter = new NumberFormatter();
    }
    calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
        let finalAmount = principal * Math.pow((1 + rate / compoundFrequency), compoundFrequency * time);
        let interestEarned = finalAmount - principal;
        let totalReturn = (finalAmount / principal - 1);
        return {
            principal: this.formatter.formatCurrency(principal),
            rate: this.formatter.formatPercentage(rate),
            time: time + " years",
            compoundFrequency,
            finalAmount: this.formatter.formatCurrency(finalAmount),
            interestEarned: this.formatter.formatCurrency(interestEarned),
            totalReturn: this.formatter.formatPercentage(totalReturn)
        };
    }
    calculateLoanPayment(principal, annualRate, years) {
        let monthlyRate = annualRate / 12;
        let n = years * 12;
        let monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
        let totalPayments = monthlyPayment * n;
        let totalInterest = totalPayments - principal;
        return {
            principal: this.formatter.formatCurrency(principal),
            annualRate: this.formatter.formatPercentage(annualRate),
            years,
            monthlyPayment: this.formatter.formatCurrency(monthlyPayment),
            totalPayments: this.formatter.formatCurrency(totalPayments),
            totalInterest: this.formatter.formatCurrency(totalInterest)
        };
    }
    calculateInvestmentGrowth(initialInvestment, monthlyContribution, annualRate, years) {
        let months = years * 12;
        let monthlyRate = annualRate / 12;
        let futureValue = initialInvestment * Math.pow(1 + monthlyRate, months) +
            monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        let totalContributions = initialInvestment + monthlyContribution * months;
        let totalGrowth = futureValue - totalContributions;
        let growthPercentage = totalGrowth / totalContributions;
        return {
            initialInvestment: this.formatter.formatCurrency(initialInvestment),
            monthlyContribution: this.formatter.formatCurrency(monthlyContribution),
            annualRate: this.formatter.formatPercentage(annualRate),
            years,
            futureValue: this.formatter.formatCurrency(futureValue),
            totalContributions: this.formatter.formatCurrency(totalContributions),
            totalGrowth: this.formatter.formatCurrency(totalGrowth),
            growthPercentage: this.formatter.formatPercentage(growthPercentage)
        };
    }
}
let finCalc = new FinancialCalculator();

console.log("Financial calculations:");
let compoundResult = finCalc.calculateCompoundInterest(10000, 0.05, 10, 12);
console.log("Compound Interest:");
Object.entries(compoundResult).forEach(([key, value]) => console.log(`  ${key}: ${value}`));
let loanResult = finCalc.calculateLoanPayment(200000, 0.04, 30);
console.log("Loan Payment:");
Object.entries(loanResult).forEach(([key, value]) => console.log(`  ${key}: ${value}`));
let investmentResult = finCalc.calculateInvestmentGrowth(5000, 500, 0.07, 20);
console.log("Investment Growth:");
Object.entries(investmentResult).forEach(([key, value]) => console.log(`  ${key}: ${value}`));

// Exercise 9: Number Formatting Best Practices
console.log("\n9. Number formatting best practices:");

function formatNumberSafely(number, options = {}) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return "Invalid number";
    }
    try {
        return number.toLocaleString('en-US', {
            minimumFractionDigits: options.minimumFractionDigits ?? 2,
            maximumFractionDigits: options.maximumFractionDigits ?? 2
        });
    } catch {
        return "Formatting error";
    }
}
let testNumbers = [1234.56, NaN, Infinity, -Infinity, 0, 0.123456789];
console.log("Safe number formatting:");
testNumbers.forEach(num => {
    console.log(`${num} -> ${formatNumberSafely(num)}`);
});

// Exercise 10: Number Formatting Performance
console.log("\n10. Number formatting performance:");

function testFormattingPerformance() {
    let numbers = Array.from({ length: 100000 }, (_, i) => Math.random() * 1000000);
    let start1 = performance.now();
    numbers.map(n => n.toFixed(2));
    let end1 = performance.now();
    let start2 = performance.now();
    numbers.map(n => n.toLocaleString('en-US', { minimumFractionDigits: 2 }));
    let end2 = performance.now();
    let start3 = performance.now();
    numbers.map(n => `${n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
    let end3 = performance.now();
    return {
        toFixed: end1 - start1,
        toLocaleString: end2 - start2,
        customFormat: end3 - start3
    };
}
let performanceResults = testFormattingPerformance();
console.log("Formatting performance comparison:");
console.log("toFixed():", performanceResults.toFixed.toFixed(2) + "ms");
console.log("toLocaleString():", performanceResults.toLocaleString.toFixed(2) + "ms");
console.log("Custom format:", performanceResults.customFormat.toFixed(2) + "ms");