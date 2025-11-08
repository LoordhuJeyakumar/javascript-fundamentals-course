// Lesson 5: Statistical Calculations
// This file teaches statistical calculations and data analysis

console.log("🔢 Welcome to Numbers Lesson 5: Statistical Calculations!");
console.log("=======================================================");

// 1. Basic Statistical Measures
console.log("\n📚 1. Basic Statistical Measures");
console.log("-----------------------------");

let dataset = [12, 15, 18, 20, 22, 25, 28, 30, 32, 35];
console.log("Dataset:", dataset);

// Mean (Average)
function calculateMean(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// Median = Middle value of the dataset formula: (sorted[middle - 1] + sorted[middle]) / 2
// If the dataset is odd, return the middle value
// If the dataset is even, return the average of the two middle values

function calculateMedian(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b); // Sort the dataset in ascending order 

    let middle = Math.floor(sorted.length / 2); //=> Middle index of the dataset 5
    
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

// Mode = Most frequent value in the dataset
function calculateMode(numbers) {
    let frequency = {};
    /* 
    frequency = {
        12: 1,
        15: 1,
        18: 1,
        20: 1,
        22: 1,
        25: 1,
        28: 1,
        30: 1,
    
    */
    numbers.forEach(num => {
        // Count the frequency of each value in the dataset
        frequency[num] = (frequency[num] || 0) + 1;
    });
    
    let maxFreq = Math.max(...Object.values(frequency));
    let modes = Object.keys(frequency).filter(num => frequency[num] === maxFreq);
    
    return modes.map(Number);
}

// Range
function calculateRange(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return { min, max, range: max - min };
}

console.log("Basic statistical measures:");
console.log("Mean:", calculateMean(dataset));
console.log("Median:", calculateMedian(dataset));
console.log("Mode:", calculateMode(dataset));
console.log("Range:", calculateRange(dataset));

// 2. Measures of Spread
console.log("\n📚 2. Measures of Spread");
console.log("----------------------");

// Variance = Average of the squared differences from the mean
function calculateVariance(numbers) {
    let mean = calculateMean(numbers);
    let squaredDiffs = numbers.map(num => Math.pow(num - mean, 2));
    return calculateMean(squaredDiffs); //=> Average of the squared differences from the mean
}

// Standard Deviation => Square root of the variance
function calculateStandardDeviation(numbers) {
    return Math.sqrt(calculateVariance(numbers)); //=> Square root of the variance
}

// Population vs Sample variance = Population variance is the variance of the entire population
function calculatePopulationVariance(numbers) {
    let mean = calculateMean(numbers);
    let squaredDiffs = numbers.map(num => Math.pow(num - mean, 2));
    return calculateMean(squaredDiffs);
}

function calculateSampleVariance(numbers) {
    let mean = calculateMean(numbers);
    let squaredDiffs = numbers.map(num => Math.pow(num - mean, 2));
    return squaredDiffs.reduce((a, b) => a + b, 0) / (numbers.length - 1);
}

console.log("Measures of spread:");
console.log("Variance:", calculateVariance(dataset).toFixed(2));
console.log("Standard deviation:", calculateStandardDeviation(dataset).toFixed(2));
console.log("Population variance:", calculatePopulationVariance(dataset).toFixed(2));
console.log("Sample variance:", calculateSampleVariance(dataset).toFixed(2));

// 3. Percentiles and Quartiles
console.log("\n📚 3. Percentiles and Quartiles");
console.log("----------------------------");

// Percentile calculation = The value below which a certain percentage of the data falls
function calculatePercentile(numbers, percentile) {
    let sorted = [...numbers].sort((a, b) => a - b); //= [12, 15, 18, 20, 22, 25, 28, 30, 32, 35]
    let index = (percentile / 100) * (sorted.length - 1); //=> Index of the percentile in the sorted dataset 9 * 0.25 = 2.25
    
    if (Number.isInteger(index)) {
        return sorted[index];
    } else {
        let lower = Math.floor(index); //=> Lower index of the percentile in the sorted dataset
        let upper = Math.ceil(index); //=> Upper index of the percentile in the sorted dataset
        let weight = index - lower; //=> Weight of the percentile in the sorted dataset
        return sorted[lower] * (1 - weight) + sorted[upper] * weight; //=> 18 * (1 - 0.25) + 20 * 0.25 = 18 * 0.75 + 20 * 0.25 = 13.5 + 5 = 18.5
    }
}

// Quartiles = The values that divide the dataset into four equal parts
// Q1 = 25th percentile
// Q2 = 50th percentile = Median
// Q3 = 75th percentile
function calculateQuartiles(numbers) {
    return {
        Q1: calculatePercentile(numbers, 25),
        Q2: calculatePercentile(numbers, 50), // Same as median
        Q3: calculatePercentile(numbers, 75)
    };
}

// Interquartile Range (IQR) = The range of the middle 50% of the data
function calculateIQR(numbers) {
    let quartiles = calculateQuartiles(numbers);
    return quartiles.Q3 - quartiles.Q1; //=> Q3 - Q1 = 30 - 12 = 18
}

console.log("Percentiles and quartiles:");
console.log("25th percentile:", calculatePercentile(dataset, 25).toFixed(2));
console.log("50th percentile:", calculatePercentile(dataset, 50).toFixed(2));
console.log("75th percentile:", calculatePercentile(dataset, 75).toFixed(2));
console.log("Quartiles:", calculateQuartiles(dataset));
console.log("IQR:", calculateIQR(dataset).toFixed(2));

// 4. Correlation and Regression
console.log("\n📚 4. Correlation and Regression");
console.log("-------------------------------");

// Sample data for correlation
let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let yValues = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Pearson correlation coefficient

/* 

    Pearson correlation coefficient formula:
    r = (n * sumXY - sumX * sumY) / sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY))

*/
function calculateCorrelation(x, y) {
    let n = x.length;
    let sumX = x.reduce((a, b) => a + b, 0);
    let sumY = y.reduce((a, b) => a + b, 0);
    let sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0); //=> sum of the product of x and y
    let sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0); //=> sum of the square of x
    let sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0); //=> sum of the square of y
    
    let numerator = n * sumXY - sumX * sumY; //=> n * sumXY - sumX * sumY = 10 * 220 - 55 * 110 = 2200 - 6050 = -3850
    let denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)); //=> Math.sqrt((10 * 385 - 55 * 55) * (10 * 385 - 110 * 110)) = Math.sqrt((3850 - 3025) * (3850 - 12100)) = Math.sqrt(825 * 2640) = Math.sqrt(2178000) = 1475.806
    
    return numerator / denominator;
}

// Simple linear regression
function linearRegression(x, y) {
    let n = x.length;
    let sumX = x.reduce((a, b) => a + b, 0);
    let sumY = y.reduce((a, b) => a + b, 0);
    let sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    let sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
    
    let slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    let intercept = (sumY - slope * sumX) / n;
    
    return { slope, intercept };
}

// R-squared (coefficient of determination)
function calculateRSquared(x, y) {
    let correlation = calculateCorrelation(x, y);
    return correlation * correlation;
}

console.log("Correlation and regression:");
console.log("X values:", xValues);
console.log("Y values:", yValues);
console.log("Correlation coefficient:", calculateCorrelation(xValues, yValues).toFixed(4));
console.log("Linear regression:", linearRegression(xValues, yValues));
console.log("R-squared:", calculateRSquared(xValues, yValues).toFixed(4));

// 5. Probability Distributions
console.log("\n📚 5. Probability Distributions");
console.log("-------------------------------");

// Binomial distribution
function binomialProbability(n, k, p) {
    let combination = factorial(n) / (factorial(k) * factorial(n - k));
    return combination * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

// Factorial function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Poisson distribution
function poissonProbability(lambda, k) {
    return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
}

// Normal distribution probability density
function normalPDF(x, mean, stdDev) {
    let coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    let exponent = -Math.pow(x - mean, 2) / (2 * stdDev * stdDev);
    return coefficient * Math.exp(exponent);
}

console.log("Probability distributions:");
console.log("Binomial P(X=3) for n=10, p=0.5:", binomialProbability(10, 3, 0.5).toFixed(4));
console.log("Poisson P(X=2) for λ=3:", poissonProbability(3, 2).toFixed(4));
console.log("Normal PDF at x=0 for μ=0, σ=1:", normalPDF(0, 0, 1).toFixed(4));

// 6. Hypothesis Testing
console.log("\n📚 6. Hypothesis Testing");
console.log("----------------------");

// Z-score calculation
function calculateZScore(value, mean, stdDev) {
    return (value - mean) / stdDev;
}

// T-score calculation (simplified)
function calculateTScore(sampleMean, populationMean, sampleStdDev, sampleSize) {
    return (sampleMean - populationMean) / (sampleStdDev / Math.sqrt(sampleSize));
}

// Confidence interval for mean
function calculateConfidenceInterval(sampleMean, sampleStdDev, sampleSize, confidenceLevel = 0.95) {
    let alpha = 1 - confidenceLevel;
    let zScore = 1.96; // For 95% confidence (simplified)
    let marginOfError = zScore * (sampleStdDev / Math.sqrt(sampleSize));
    
    return {
        lower: sampleMean - marginOfError,
        upper: sampleMean + marginOfError,
        marginOfError: marginOfError
    };
}

console.log("Hypothesis testing:");
console.log("Z-score for value 85 (mean=80, std=5):", calculateZScore(85, 80, 5).toFixed(2));
console.log("T-score for sample mean 82 (pop mean=80, sample std=4, n=25):", 
    calculateTScore(82, 80, 4, 25).toFixed(2));
console.log("95% Confidence interval:", calculateConfidenceInterval(82, 4, 25));

// 7. Data Analysis Tools
console.log("\n📚 7. Data Analysis Tools");
console.log("-----------------------");

class DataAnalyzer {
    constructor(data) {
        this.data = data;
        this.sorted = [...data].sort((a, b) => a - b);
    }
    
    // Descriptive statistics
    getDescriptiveStats() {
        return {
            count: this.data.length,
            mean: calculateMean(this.data),
            median: calculateMedian(this.data),
            mode: calculateMode(this.data),
            range: calculateRange(this.data),
            variance: calculateVariance(this.data),
            stdDev: calculateStandardDeviation(this.data),
            quartiles: calculateQuartiles(this.data),
            iqr: calculateIQR(this.data)
        };
    }
    
    // Outlier detection
    detectOutliers() {
        let quartiles = calculateQuartiles(this.data);
        let iqr = quartiles.Q3 - quartiles.Q1;
        let lowerBound = quartiles.Q1 - 1.5 * iqr;
        let upperBound = quartiles.Q3 + 1.5 * iqr;
        
        return this.data.filter(value => value < lowerBound || value > upperBound);
    }
    
    // Data summary
    getSummary() {
        let stats = this.getDescriptiveStats();
        let outliers = this.detectOutliers();
        
        return {
            ...stats,
            outliers: outliers,
            outlierCount: outliers.length,
            outlierPercentage: (outliers.length / this.data.length * 100).toFixed(2) + '%'
        };
    }
    
    // Data transformation
    normalize() {
        let mean = calculateMean(this.data);
        let stdDev = calculateStandardDeviation(this.data);
        return this.data.map(value => (value - mean) / stdDev);
    }
    
    // Data scaling
    scale(min = 0, max = 1) {
        let dataMin = Math.min(...this.data);
        let dataMax = Math.max(...this.data);
        return this.data.map(value => 
            min + (value - dataMin) * (max - min) / (dataMax - dataMin)
        );
    }
}

// Test data analyzer
let testData = [12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 100]; // Added outlier
let analyzer = new DataAnalyzer(testData);

console.log("Data analysis results:");
console.log("Descriptive statistics:", analyzer.getDescriptiveStats());
console.log("Outliers detected:", analyzer.detectOutliers());
console.log("Data summary:", analyzer.getSummary());
console.log("Normalized data:", analyzer.normalize().map(x => x.toFixed(2)));
console.log("Scaled data (0-1):", analyzer.scale(0, 1).map(x => x.toFixed(2)));

// 8. Statistical Tests
console.log("\n📚 8. Statistical Tests");
console.log("--------------------");

// Chi-square test (simplified)
function chiSquareTest(observed, expected) {
    let chiSquare = 0;
    for (let i = 0; i < observed.length; i++) {
        chiSquare += Math.pow(observed[i] - expected[i], 2) / expected[i];
    }
    return chiSquare;
}

// ANOVA (simplified)
function oneWayANOVA(groups) {
    let allData = groups.flat();
    let grandMean = calculateMean(allData);
    let totalSS = allData.reduce((sum, value) => sum + Math.pow(value - grandMean, 2), 0);
    
    let betweenSS = 0;
    let withinSS = 0;
    
    groups.forEach(group => {
        let groupMean = calculateMean(group);
        betweenSS += group.length * Math.pow(groupMean - grandMean, 2);
        withinSS += group.reduce((sum, value) => sum + Math.pow(value - groupMean, 2), 0);
    });
    
    let betweenDF = groups.length - 1;
    let withinDF = allData.length - groups.length;
    
    let betweenMS = betweenSS / betweenDF;
    let withinMS = withinSS / withinDF;
    
    let fStatistic = betweenMS / withinMS;
    
    return {
        fStatistic: fStatistic,
        betweenSS: betweenSS,
        withinSS: withinSS,
        totalSS: totalSS,
        betweenDF: betweenDF,
        withinDF: withinDF
    };
}

console.log("Statistical tests:");
let observed = [10, 15, 20, 25];
let expected = [12, 18, 18, 22];
console.log("Chi-square test:", chiSquareTest(observed, expected).toFixed(2));

let group1 = [10, 12, 14, 16];
let group2 = [18, 20, 22, 24];
let group3 = [26, 28, 30, 32];
console.log("One-way ANOVA:", oneWayANOVA([group1, group2, group3]));

// 9. Practical Example: Statistical Calculator
console.log("\n📚 9. Practical Example: Statistical Calculator");
console.log("-----------------------------------------------");

class StatisticalCalculator {
    constructor() {
        this.datasets = new Map();
    }
    
    // Add dataset
    addDataset(name, data) {
        this.datasets.set(name, data);
    }
    
    // Get dataset
    getDataset(name) {
        return this.datasets.get(name);
    }
    
    // Calculate all statistics for a dataset
    calculateAllStats(datasetName) {
        let data = this.getDataset(datasetName);
        if (!data) return null;
        
        let analyzer = new DataAnalyzer(data);
        return analyzer.getSummary();
    }
    
    // Compare two datasets
    compareDatasets(name1, name2) {
        let data1 = this.getDataset(name1);
        let data2 = this.getDataset(name2);
        
        if (!data1 || !data2) return null;
        
        let stats1 = this.calculateAllStats(name1);
        let stats2 = this.calculateAllStats(name2);
        
        return {
            dataset1: { name: name1, ...stats1 },
            dataset2: { name: name2, ...stats2 },
            comparison: {
                meanDifference: stats1.mean - stats2.mean,
                stdDevRatio: stats1.stdDev / stats2.stdDev,
                varianceRatio: stats1.variance / stats2.variance
            }
        };
    }
    
    // Generate random dataset
    generateRandomDataset(name, size, mean, stdDev) {
        let data = [];
        for (let i = 0; i < size; i++) {
            // Box-Muller transform for normal distribution
            let u1 = Math.random();
            let u2 = Math.random();
            let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
            data.push(z0 * stdDev + mean);
        }
        this.addDataset(name, data);
        return data;
    }
    
    // Export dataset
    exportDataset(name) {
        let data = this.getDataset(name);
        if (!data) return null;
        
        return {
            name: name,
            data: data,
            statistics: this.calculateAllStats(name)
        };
    }
}

// Test statistical calculator
let statCalc = new StatisticalCalculator();

// Add sample datasets
statCalc.addDataset('test1', [1, 2, 3, 4, 5]);
statCalc.addDataset('test2', [2, 4, 6, 8, 10]);

// Generate random dataset
statCalc.generateRandomDataset('random', 100, 50, 10);

console.log("Statistical calculator examples:");
console.log("Test1 statistics:", statCalc.calculateAllStats('test1'));
console.log("Test2 statistics:", statCalc.calculateAllStats('test2'));
console.log("Dataset comparison:", statCalc.compareDatasets('test1', 'test2'));

// 10. Data Visualization Preparation
console.log("\n📚 10. Data Visualization Preparation");
console.log("-----------------------------------");

// Create histogram data
function createHistogram(data, bins = 10) {
    let min = Math.min(...data);
    let max = Math.max(...data);
    let binWidth = (max - min) / bins;
    
    let histogram = new Array(bins).fill(0);
    let binLabels = [];
    
    for (let i = 0; i < bins; i++) {
        binLabels.push(`${(min + i * binWidth).toFixed(1)}-${(min + (i + 1) * binWidth).toFixed(1)}`);
    }
    
    data.forEach(value => {
        let binIndex = Math.min(Math.floor((value - min) / binWidth), bins - 1);
        histogram[binIndex]++;
    });
    
    return {
        bins: histogram,
        labels: binLabels,
        binWidth: binWidth
    };
}

// Create box plot data
function createBoxPlotData(data) {
    let quartiles = calculateQuartiles(data);
    let iqr = quartiles.Q3 - quartiles.Q1;
    let outliers = analyzer.detectOutliers();
    
    return {
        min: Math.min(...data),
        q1: quartiles.Q1,
        median: quartiles.Q2,
        q3: quartiles.Q3,
        max: Math.max(...data),
        iqr: iqr,
        outliers: outliers
    };
}

console.log("Data visualization preparation:");
let histogramData = createHistogram(testData, 5);
console.log("Histogram data:", histogramData);

let boxPlotData = createBoxPlotData(testData);
console.log("Box plot data:", boxPlotData);

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Mean, median, and mode are central tendency measures");
console.log("- Variance and standard deviation measure data spread");
console.log("- Percentiles and quartiles help understand data distribution");
console.log("- Correlation measures linear relationships between variables");
console.log("- Statistical tests help make data-driven decisions");
console.log("- Outlier detection is important for data quality");
console.log("- Data normalization and scaling prepare data for analysis");

console.log("\n📝 Practice Exercises:");
console.log("1. Calculate descriptive statistics for datasets");
console.log("2. Detect outliers using IQR method");
console.log("3. Calculate correlation between variables");
console.log("4. Perform simple hypothesis tests");
console.log("5. Create data visualization summaries");
