// Exercise 6: Financial Calculations
// Practice with financial mathematics and calculations

console.log("💪 Exercise 6: Financial Calculations");
console.log("===================================");

// Exercise 1: Calculate simple interest
console.log("\n1. Calculate Simple Interest:");
// TODO: Create a function called calculateSimpleInterest that:
// - Takes principal, rate, and time as parameters
// - Returns the simple interest amount
// - Formula: I = P * R * T
// Hint: Convert rate to decimal and time to years

function calculateSimpleInterest(principal, rate, time) {
    // Your code here
}

// Test your function
console.log("Principal: $1000, Rate: 5%, Time: 2 years");
console.log("Simple Interest:", calculateSimpleInterest(1000, 5, 2));
console.log("Principal: $5000, Rate: 3.5%, Time: 6 months");
console.log("Simple Interest:", calculateSimpleInterest(5000, 3.5, 0.5));

// Exercise 2: Calculate compound interest
console.log("\n2. Calculate Compound Interest:");
// TODO: Create a function called calculateCompoundInterest that:
// - Takes principal, rate, time, and compounding frequency as parameters
// - Returns the compound interest amount
// - Formula: A = P(1 + r/n)^(nt)
// Hint: Handle different compounding frequencies

function calculateCompoundInterest(principal, rate, time, compoundingFrequency = 1) {
    // Your code here
}

// Test your function
console.log("Principal: $1000, Rate: 5%, Time: 2 years, Compounding: Annually");
console.log("Compound Interest:", calculateCompoundInterest(1000, 5, 2, 1));
console.log("Principal: $1000, Rate: 5%, Time: 2 years, Compounding: Monthly");
console.log("Compound Interest:", calculateCompoundInterest(1000, 5, 2, 12));

// Exercise 3: Calculate loan payment (PMT)
console.log("\n3. Calculate Loan Payment:");
// TODO: Create a function called calculateLoanPayment that:
// - Takes principal, rate, and time as parameters
// - Returns the monthly payment amount
// - Use the PMT formula for fixed payments
// Hint: PMT = P * [r(1+r)^n] / [(1+r)^n - 1]

function calculateLoanPayment(principal, annualRate, years) {
    // Your code here
}

// Test your function
console.log("Principal: $200000, Rate: 4.5%, Time: 30 years");
console.log("Monthly Payment:", calculateLoanPayment(200000, 4.5, 30));
console.log("Principal: $50000, Rate: 6%, Time: 5 years");
console.log("Monthly Payment:", calculateLoanPayment(50000, 6, 5));

// Exercise 4: Calculate present value
console.log("\n4. Calculate Present Value:");
// TODO: Create a function called calculatePresentValue that:
// - Takes future value, rate, and time as parameters
// - Returns the present value
// - Formula: PV = FV / (1 + r)^t
// Hint: Use the present value formula

function calculatePresentValue(futureValue, rate, time) {
    // Your code here
}

// Test your function
console.log("Future Value: $10000, Rate: 5%, Time: 5 years");
console.log("Present Value:", calculatePresentValue(10000, 5, 5));
console.log("Future Value: $50000, Rate: 3%, Time: 10 years");
console.log("Present Value:", calculatePresentValue(50000, 3, 10));

// Exercise 5: Calculate future value
console.log("\n5. Calculate Future Value:");
// TODO: Create a function called calculateFutureValue that:
// - Takes present value, rate, and time as parameters
// - Returns the future value
// - Formula: FV = PV * (1 + r)^t
// Hint: Use the future value formula

function calculateFutureValue(presentValue, rate, time) {
    // Your code here
}

// Test your function
console.log("Present Value: $5000, Rate: 6%, Time: 10 years");
console.log("Future Value:", calculateFutureValue(5000, 6, 10));
console.log("Present Value: $10000, Rate: 4%, Time: 15 years");
console.log("Future Value:", calculateFutureValue(10000, 4, 15));

// Exercise 6: Calculate annuity payment
console.log("\n6. Calculate Annuity Payment:");
// TODO: Create a function called calculateAnnuityPayment that:
// - Takes present value, rate, and time as parameters
// - Returns the annuity payment amount
// - Use the annuity payment formula
// Hint: PMT = PV * [r(1+r)^n] / [(1+r)^n - 1]

function calculateAnnuityPayment(presentValue, rate, time) {
    // Your code here
}

// Test your function
console.log("Present Value: $100000, Rate: 5%, Time: 20 years");
console.log("Annuity Payment:", calculateAnnuityPayment(100000, 5, 20));
console.log("Present Value: $50000, Rate: 3%, Time: 15 years");
console.log("Annuity Payment:", calculateAnnuityPayment(50000, 3, 15));

// Exercise 7: Calculate mortgage payment
console.log("\n7. Calculate Mortgage Payment:");
// TODO: Create a function called calculateMortgagePayment that:
// - Takes loan amount, annual rate, and years as parameters
// - Returns the monthly mortgage payment
// - Include property tax and insurance estimates
// Hint: Use PMT formula with additional costs

function calculateMortgagePayment(loanAmount, annualRate, years, propertyTax = 0, insurance = 0) {
    // Your code here
}

// Test your function
console.log("Loan: $300000, Rate: 4.5%, Years: 30, Tax: $300/month, Insurance: $100/month");
console.log("Total Monthly Payment:", calculateMortgagePayment(300000, 4.5, 30, 300, 100));

// Exercise 8: Calculate investment return
console.log("\n8. Calculate Investment Return:");
// TODO: Create a function called calculateInvestmentReturn that:
// - Takes initial investment, final value, and time as parameters
// - Returns the annual return percentage
// - Formula: Return = ((FV - PV) / PV) / t
// Hint: Calculate the annualized return

function calculateInvestmentReturn(initialInvestment, finalValue, time) {
    // Your code here
}

// Test your function
console.log("Initial: $10000, Final: $15000, Time: 3 years");
console.log("Annual Return:", calculateInvestmentReturn(10000, 15000, 3));
console.log("Initial: $5000, Final: $8000, Time: 5 years");
console.log("Annual Return:", calculateInvestmentReturn(5000, 8000, 5));

// Exercise 9: Calculate net present value (NPV)
console.log("\n9. Calculate Net Present Value:");
// TODO: Create a function called calculateNPV that:
// - Takes initial investment and cash flows array as parameters
// - Returns the net present value
// - Use a discount rate (default 10%)
// Hint: NPV = -Initial Investment + Σ(CF / (1 + r)^t)

function calculateNPV(initialInvestment, cashFlows, discountRate = 10) {
    // Your code here
}

// Test your function
let cashFlows = [5000, 5000, 5000, 5000, 5000];
console.log("Initial Investment: $20000, Cash Flows:", cashFlows, "Discount Rate: 10%");
console.log("NPV:", calculateNPV(20000, cashFlows, 10));

// Exercise 10: Calculate internal rate of return (IRR)
console.log("\n10. Calculate Internal Rate of Return:");
// TODO: Create a function called calculateIRR that:
// - Takes initial investment and cash flows array as parameters
// - Returns the internal rate of return
// - Use approximation method (Newton-Raphson)
// Hint: Find the rate where NPV = 0

function calculateIRR(initialInvestment, cashFlows, maxIterations = 100) {
    // Your code here
}

// Test your function
let irrCashFlows = [3000, 3000, 3000, 3000, 3000];
console.log("Initial Investment: $10000, Cash Flows:", irrCashFlows);
console.log("IRR:", calculateIRR(10000, irrCashFlows));

// Exercise 11: Calculate portfolio return
console.log("\n11. Calculate Portfolio Return:");
// TODO: Create a function called calculatePortfolioReturn that:
// - Takes portfolio weights and returns arrays as parameters
// - Returns the weighted average return
// - Formula: Return = Σ(weight * return)
// Hint: Ensure weights sum to 1

function calculatePortfolioReturn(weights, returns) {
    // Your code here
}

// Test your function
let portfolioWeights = [0.4, 0.3, 0.2, 0.1];
let portfolioReturns = [8, 12, 6, 15];
console.log("Weights:", portfolioWeights);
console.log("Returns:", portfolioReturns);
console.log("Portfolio Return:", calculatePortfolioReturn(portfolioWeights, portfolioReturns));

// Exercise 12: Calculate loan amortization schedule
console.log("\n12. Calculate Loan Amortization Schedule:");
// TODO: Create a function called calculateAmortizationSchedule that:
// - Takes principal, rate, and time as parameters
// - Returns an array of payment details for each period
// - Include principal, interest, and remaining balance
// Hint: Calculate payment first, then work through each period

function calculateAmortizationSchedule(principal, annualRate, years) {
    // Your code here
}

// Test your function
console.log("Principal: $100000, Rate: 5%, Years: 5");
let schedule = calculateAmortizationSchedule(100000, 5, 5);
console.log("First 3 payments:", schedule.slice(0, 3));

console.log("\n🎉 Exercise 6 Complete!");
console.log("=====================");
console.log("Great job! You've practiced financial calculations.");
console.log("Key concepts practiced:");
console.log("- Simple interest calculation");
console.log("- Compound interest calculation");
console.log("- Loan payment calculation");
console.log("- Present value calculation");
console.log("- Future value calculation");
console.log("- Annuity payment calculation");
console.log("- Mortgage payment calculation");
console.log("- Investment return calculation");
console.log("- Net present value (NPV)");
console.log("- Internal rate of return (IRR)");
console.log("- Portfolio return calculation");
console.log("- Loan amortization schedule");

console.log("\n📝 Next Steps:");
console.log("1. Review your solutions");
console.log("2. Try the exercises again with different values");
console.log("3. Move on to the Numbers assignments");
console.log("4. Ask questions if you need help");
