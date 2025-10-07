// Lesson 6: Financial Calculations
// This file teaches financial calculations and applications

console.log("🔢 Welcome to Numbers Lesson 6: Financial Calculations!");
console.log("=====================================================");

// 1. Interest Calculations
console.log("\n📚 1. Interest Calculations");
console.log("-------------------------");

// Simple Interest
function calculateSimpleInterest(principal, rate, time) {
    return principal * rate * time;
}

// Compound Interest
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 12) {
    let amount = principal * Math.pow(1 + (rate / compoundFrequency), compoundFrequency * time);
    return amount - principal;
}

// Continuous Compound Interest
function calculateContinuousCompoundInterest(principal, rate, time) {
    let amount = principal * Math.exp(rate * time);
    return amount - principal;
}

// Effective Annual Rate
function calculateEffectiveAnnualRate(nominalRate, compoundFrequency) {
    return Math.pow(1 + (nominalRate / compoundFrequency), compoundFrequency) - 1;
}

console.log("Interest calculations:");
let principal = 10000;
let rate = 0.05; // 5% annual rate
let time = 5; // 5 years

console.log("Principal:", principal);
console.log("Rate:", rate * 100 + "%");
console.log("Time:", time + " years");

console.log("Simple interest:", calculateSimpleInterest(principal, rate, time).toFixed(2));
console.log("Compound interest (monthly):", calculateCompoundInterest(principal, rate, time, 12).toFixed(2));
console.log("Compound interest (daily):", calculateCompoundInterest(principal, rate, time, 365).toFixed(2));
console.log("Continuous compound interest:", calculateContinuousCompoundInterest(principal, rate, time).toFixed(2));
console.log("Effective annual rate (monthly):", (calculateEffectiveAnnualRate(rate, 12) * 100).toFixed(2) + "%");

// 2. Loan Calculations
console.log("\n📚 2. Loan Calculations");
console.log("---------------------");

// Monthly Payment (PMT)
function calculateMonthlyPayment(principal, annualRate, years) {
    let monthlyRate = annualRate / 12;
    let numberOfPayments = years * 12;
    
    if (monthlyRate === 0) {
        return principal / numberOfPayments;
    }
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}

// Loan Amortization
function calculateAmortizationSchedule(principal, annualRate, years) {
    let monthlyRate = annualRate / 12;
    let numberOfPayments = years * 12;
    let monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
    
    let schedule = [];
    let remainingBalance = principal;
    
    for (let month = 1; month <= numberOfPayments; month++) {
        let interestPayment = remainingBalance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
        
        schedule.push({
            month: month,
            payment: monthlyPayment,
            principalPayment: principalPayment,
            interestPayment: interestPayment,
            remainingBalance: Math.max(0, remainingBalance)
        });
    }
    
    return schedule;
}

// Total Interest Paid
function calculateTotalInterest(principal, annualRate, years) {
    let monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
    let totalPayments = monthlyPayment * years * 12;
    return totalPayments - principal;
}

console.log("Loan calculations:");
let loanPrincipal = 200000;
let loanRate = 0.04; // 4% annual rate
let loanYears = 30;

console.log("Loan principal:", loanPrincipal);
console.log("Annual rate:", loanRate * 100 + "%");
console.log("Loan term:", loanYears + " years");

let monthlyPayment = calculateMonthlyPayment(loanPrincipal, loanRate, loanYears);
console.log("Monthly payment:", monthlyPayment.toFixed(2));

let totalInterest = calculateTotalInterest(loanPrincipal, loanRate, loanYears);
console.log("Total interest paid:", totalInterest.toFixed(2));
console.log("Total amount paid:", (loanPrincipal + totalInterest).toFixed(2));

// Show first few months of amortization
let amortizationSchedule = calculateAmortizationSchedule(loanPrincipal, loanRate, loanYears);
console.log("First 3 months of amortization:");
for (let i = 0; i < 3; i++) {
    let month = amortizationSchedule[i];
    console.log(`Month ${month.month}: Payment=${month.payment.toFixed(2)}, Principal=${month.principalPayment.toFixed(2)}, Interest=${month.interestPayment.toFixed(2)}, Balance=${month.remainingBalance.toFixed(2)}`);
}

// 3. Investment Calculations
console.log("\n📚 3. Investment Calculations");
console.log("----------------------------");

// Future Value of Single Investment
function calculateFutureValue(presentValue, rate, time) {
    return presentValue * Math.pow(1 + rate, time);
}

// Future Value of Annuity
function calculateFutureValueAnnuity(payment, rate, time) {
    if (rate === 0) {
        return payment * time;
    }
    return payment * ((Math.pow(1 + rate, time) - 1) / rate);
}

// Present Value
function calculatePresentValue(futureValue, rate, time) {
    return futureValue / Math.pow(1 + rate, time);
}

// Present Value of Annuity
function calculatePresentValueAnnuity(payment, rate, time) {
    if (rate === 0) {
        return payment * time;
    }
    return payment * ((1 - Math.pow(1 + rate, -time)) / rate);
}

// Net Present Value
function calculateNPV(cashFlows, discountRate) {
    let npv = 0;
    for (let i = 0; i < cashFlows.length; i++) {
        npv += cashFlows[i] / Math.pow(1 + discountRate, i);
    }
    return npv;
}

console.log("Investment calculations:");
let presentValue = 10000;
let investmentRate = 0.07; // 7% annual return
let investmentTime = 10; // 10 years

console.log("Present value:", presentValue);
console.log("Annual return:", investmentRate * 100 + "%");
console.log("Investment period:", investmentTime + " years");

console.log("Future value:", calculateFutureValue(presentValue, investmentRate, investmentTime).toFixed(2));

let annualPayment = 5000;
console.log("Annual payment:", annualPayment);
console.log("Future value of annuity:", calculateFutureValueAnnuity(annualPayment, investmentRate, investmentTime).toFixed(2));

let futureValue = 20000;
console.log("Future value:", futureValue);
console.log("Present value:", calculatePresentValue(futureValue, investmentRate, investmentTime).toFixed(2));

console.log("Present value of annuity:", calculatePresentValueAnnuity(annualPayment, investmentRate, investmentTime).toFixed(2));

// NPV example
let cashFlows = [-10000, 3000, 3000, 3000, 3000, 3000];
let discountRate = 0.1;
console.log("NPV:", calculateNPV(cashFlows, discountRate).toFixed(2));

// 4. Retirement Planning
console.log("\n📚 4. Retirement Planning");
console.log("------------------------");

// Retirement Savings Calculator
function calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn) {
    let yearsToRetirement = retirementAge - currentAge;
    let monthsToRetirement = yearsToRetirement * 12;
    
    // Future value of current savings
    let futureValueCurrent = calculateFutureValue(currentSavings, annualReturn, yearsToRetirement);
    
    // Future value of monthly contributions
    let monthlyRate = annualReturn / 12;
    let futureValueContributions = calculateFutureValueAnnuity(monthlyContribution, monthlyRate, monthsToRetirement);
    
    let totalRetirementSavings = futureValueCurrent + futureValueContributions;
    
    return {
        currentAge: currentAge,
        retirementAge: retirementAge,
        yearsToRetirement: yearsToRetirement,
        currentSavings: currentSavings,
        monthlyContribution: monthlyContribution,
        annualReturn: annualReturn,
        futureValueCurrent: futureValueCurrent,
        futureValueContributions: futureValueContributions,
        totalRetirementSavings: totalRetirementSavings
    };
}

// Required Monthly Contribution
function calculateRequiredMonthlyContribution(currentAge, retirementAge, currentSavings, targetRetirementSavings, annualReturn) {
    let yearsToRetirement = retirementAge - currentAge;
    let monthsToRetirement = yearsToRetirement * 12;
    
    // Future value of current savings
    let futureValueCurrent = calculateFutureValue(currentSavings, annualReturn, yearsToRetirement);
    
    // Required future value from contributions
    let requiredFutureValueContributions = targetRetirementSavings - futureValueCurrent;
    
    // Calculate required monthly contribution
    let monthlyRate = annualReturn / 12;
    if (monthlyRate === 0) {
        return requiredFutureValueContributions / monthsToRetirement;
    }
    
    let requiredMonthlyContribution = requiredFutureValueContributions / 
        ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate);
    
    return requiredMonthlyContribution;
}

console.log("Retirement planning:");
let retirementPlan = calculateRetirementSavings(30, 65, 50000, 1000, 0.07);
console.log("Retirement savings plan:");
Object.entries(retirementPlan).forEach(([key, value]) => {
    if (typeof value === 'number') {
        console.log(`${key}: ${value.toFixed(2)}`);
    } else {
        console.log(`${key}: ${value}`);
    }
});

let requiredContribution = calculateRequiredMonthlyContribution(30, 65, 50000, 1000000, 0.07);
console.log("Required monthly contribution for $1M retirement:", requiredContribution.toFixed(2));

// 5. Tax Calculations
console.log("\n📚 5. Tax Calculations");
console.log("---------------------");

// Simple Tax Calculator
function calculateTax(income, taxBrackets) {
    let totalTax = 0;
    let remainingIncome = income;
    
    for (let bracket of taxBrackets) {
        if (remainingIncome <= 0) break;
        
        let taxableInThisBracket = Math.min(remainingIncome, bracket.max - bracket.min);
        totalTax += taxableInThisBracket * bracket.rate;
        remainingIncome -= taxableInThisBracket;
    }
    
    return totalTax;
}

// After-tax return
function calculateAfterTaxReturn(preTaxReturn, taxRate) {
    return preTaxReturn * (1 - taxRate);
}

// Tax-equivalent yield
function calculateTaxEquivalentYield(taxableYield, taxRate) {
    return taxableYield / (1 - taxRate);
}

console.log("Tax calculations:");
let income = 75000;
let taxBrackets = [
    { min: 0, max: 10000, rate: 0.10 },
    { min: 10000, max: 40000, rate: 0.20 },
    { min: 40000, max: 100000, rate: 0.30 },
    { min: 100000, max: Infinity, rate: 0.40 }
];

let totalTax = calculateTax(income, taxBrackets);
console.log("Income:", income);
console.log("Total tax:", totalTax.toFixed(2));
console.log("Effective tax rate:", (totalTax / income * 100).toFixed(2) + "%");

let preTaxReturn = 0.08;
let taxRate = 0.25;
console.log("Pre-tax return:", preTaxReturn * 100 + "%");
console.log("After-tax return:", (calculateAfterTaxReturn(preTaxReturn, taxRate) * 100).toFixed(2) + "%");
console.log("Tax-equivalent yield:", (calculateTaxEquivalentYield(preTaxReturn, taxRate) * 100).toFixed(2) + "%");

// 6. Risk and Return Metrics
console.log("\n📚 6. Risk and Return Metrics");
console.log("----------------------------");

// Sharpe Ratio
function calculateSharpeRatio(portfolioReturn, riskFreeRate, portfolioStdDev) {
    return (portfolioReturn - riskFreeRate) / portfolioStdDev;
}

// Beta (simplified)
function calculateBeta(portfolioReturns, marketReturns) {
    let portfolioMean = calculateMean(portfolioReturns);
    let marketMean = calculateMean(marketReturns);
    
    let covariance = 0;
    let marketVariance = 0;
    
    for (let i = 0; i < portfolioReturns.length; i++) {
        covariance += (portfolioReturns[i] - portfolioMean) * (marketReturns[i] - marketMean);
        marketVariance += Math.pow(marketReturns[i] - marketMean, 2);
    }
    
    covariance /= portfolioReturns.length;
    marketVariance /= portfolioReturns.length;
    
    return covariance / marketVariance;
}

// Value at Risk (VaR)
function calculateVaR(returns, confidenceLevel = 0.05) {
    let sortedReturns = [...returns].sort((a, b) => a - b);
    let index = Math.floor(confidenceLevel * sortedReturns.length);
    return sortedReturns[index];
}

console.log("Risk and return metrics:");
let portfolioReturns = [0.05, 0.08, -0.02, 0.12, 0.06, 0.09, -0.01, 0.07];
let marketReturns = [0.04, 0.06, -0.01, 0.10, 0.05, 0.08, 0.00, 0.06];
let riskFreeRate = 0.02;

let portfolioMean = calculateMean(portfolioReturns);
let portfolioStdDev = calculateStandardDeviation(portfolioReturns);

console.log("Portfolio returns:", portfolioReturns);
console.log("Market returns:", marketReturns);
console.log("Risk-free rate:", riskFreeRate * 100 + "%");

console.log("Portfolio mean return:", (portfolioMean * 100).toFixed(2) + "%");
console.log("Portfolio standard deviation:", (portfolioStdDev * 100).toFixed(2) + "%");
console.log("Sharpe ratio:", calculateSharpeRatio(portfolioMean, riskFreeRate, portfolioStdDev).toFixed(2));
console.log("Beta:", calculateBeta(portfolioReturns, marketReturns).toFixed(2));
console.log("VaR (5%):", (calculateVaR(portfolioReturns, 0.05) * 100).toFixed(2) + "%");

// 7. Practical Example: Financial Calculator
console.log("\n📚 7. Practical Example: Financial Calculator");
console.log("--------------------------------------------");

class FinancialCalculator {
    constructor() {
        this.history = [];
    }
    
    // Loan calculations
    calculateLoan(principal, annualRate, years) {
        let monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
        let totalInterest = calculateTotalInterest(principal, annualRate, years);
        let totalPayments = principal + totalInterest;
        
        let result = {
            principal: principal,
            annualRate: annualRate,
            years: years,
            monthlyPayment: monthlyPayment,
            totalInterest: totalInterest,
            totalPayments: totalPayments
        };
        
        this.history.push({ type: 'loan', ...result });
        return result;
    }
    
    // Investment calculations
    calculateInvestment(presentValue, rate, time) {
        let futureValue = calculateFutureValue(presentValue, rate, time);
        let totalReturn = futureValue - presentValue;
        let returnPercentage = (totalReturn / presentValue) * 100;
        
        let result = {
            presentValue: presentValue,
            rate: rate,
            time: time,
            futureValue: futureValue,
            totalReturn: totalReturn,
            returnPercentage: returnPercentage
        };
        
        this.history.push({ type: 'investment', ...result });
        return result;
    }
    
    // Retirement planning
    calculateRetirement(currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn) {
        let result = calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn);
        this.history.push({ type: 'retirement', ...result });
        return result;
    }
    
    // Compare scenarios
    compareScenarios(scenarios) {
        let comparison = [];
        
        scenarios.forEach((scenario, index) => {
            let result;
            switch (scenario.type) {
                case 'loan':
                    result = this.calculateLoan(scenario.principal, scenario.rate, scenario.years);
                    break;
                case 'investment':
                    result = this.calculateInvestment(scenario.presentValue, scenario.rate, scenario.time);
                    break;
                case 'retirement':
                    result = this.calculateRetirement(scenario.currentAge, scenario.retirementAge, 
                        scenario.currentSavings, scenario.monthlyContribution, scenario.rate);
                    break;
            }
            comparison.push({ scenario: index + 1, ...result });
        });
        
        return comparison;
    }
    
    // Get history
    getHistory() {
        return this.history;
    }
    
    // Clear history
    clearHistory() {
        this.history = [];
    }
    
    // Export results
    exportResults() {
        return {
            timestamp: new Date().toISOString(),
            calculations: this.history
        };
    }
}

// Test financial calculator
let finCalc = new FinancialCalculator();

console.log("Financial calculator examples:");
let loanResult = finCalc.calculateLoan(200000, 0.04, 30);
console.log("Loan calculation:", loanResult);

let investmentResult = finCalc.calculateInvestment(10000, 0.07, 10);
console.log("Investment calculation:", investmentResult);

let retirementResult = finCalc.calculateRetirement(30, 65, 50000, 1000, 0.07);
console.log("Retirement calculation:", retirementResult);

// Compare scenarios
let scenarios = [
    { type: 'investment', presentValue: 10000, rate: 0.05, time: 10 },
    { type: 'investment', presentValue: 10000, rate: 0.07, time: 10 },
    { type: 'investment', presentValue: 10000, rate: 0.10, time: 10 }
];

let comparison = finCalc.compareScenarios(scenarios);
console.log("Scenario comparison:");
comparison.forEach(scenario => {
    console.log(`Scenario ${scenario.scenario}: Future value = ${scenario.futureValue.toFixed(2)}, Return = ${scenario.returnPercentage.toFixed(2)}%`);
});

// 8. Financial Planning Tools
console.log("\n📚 8. Financial Planning Tools");
console.log("-----------------------------");

// Emergency Fund Calculator
function calculateEmergencyFund(monthlyExpenses, monthsCoverage = 6) {
    return monthlyExpenses * monthsCoverage;
}

// Debt-to-Income Ratio
function calculateDebtToIncomeRatio(monthlyDebtPayments, monthlyIncome) {
    return monthlyDebtPayments / monthlyIncome;
}

// Savings Rate
function calculateSavingsRate(monthlySavings, monthlyIncome) {
    return monthlySavings / monthlyIncome;
}

// 50/30/20 Budget Rule
function calculateBudgetRule(monthlyIncome) {
    return {
        needs: monthlyIncome * 0.50,
        wants: monthlyIncome * 0.30,
        savings: monthlyIncome * 0.20
    };
}

console.log("Financial planning tools:");
let monthlyExpenses = 3000;
let monthlyIncome = 5000;
let monthlyDebtPayments = 800;
let monthlySavings = 1000;

console.log("Emergency fund (6 months):", calculateEmergencyFund(monthlyExpenses));
console.log("Debt-to-income ratio:", (calculateDebtToIncomeRatio(monthlyDebtPayments, monthlyIncome) * 100).toFixed(2) + "%");
console.log("Savings rate:", (calculateSavingsRate(monthlySavings, monthlyIncome) * 100).toFixed(2) + "%");
console.log("50/30/20 budget rule:", calculateBudgetRule(monthlyIncome));

console.log("\n🎉 Lesson 6 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Simple interest is linear, compound interest is exponential");
console.log("- Loan payments include principal and interest components");
console.log("- Investment returns depend on time, rate, and contributions");
console.log("- Retirement planning requires long-term thinking");
console.log("- Tax considerations affect investment returns");
console.log("- Risk and return metrics help evaluate investments");
console.log("- Financial planning tools help manage money effectively");

console.log("\n📝 Practice Exercises:");
console.log("1. Calculate loan payments and amortization schedules");
console.log("2. Plan retirement savings with different scenarios");
console.log("3. Compare investment options using financial metrics");
console.log("4. Calculate tax implications of different investments");
console.log("5. Build a comprehensive financial planning tool");
