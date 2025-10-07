// Exercise 5: Multidimensional Arrays
// Complete the TODO sections below

console.log("💪 Exercise 5: Multidimensional Arrays");
console.log("=====================================");

// Exercise 1: 2D Array Basics
console.log("\n1. 2D Array Basics:");
const matrix2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("2D Matrix:", matrix2D);

// TODO 1: Access element at row 1, column 2
console.log("\n1.1 Access element at row 1, column 2:");
let element = matrix2D[1][2]; // Your code here
console.log("Element at [1][2]:", element);

// TODO 2: Print all elements of the matrix
console.log("\n1.2 Print all elements:");
for (let i = 0; i < matrix2D.length; i++) {
    for (let j = 0; j < matrix2D[i].length; j++) {
        console.log(`[${i}][${j}]: ${matrix2D[i][j]}`);
    }
}

// TODO 3: Calculate the sum of all elements
console.log("\n1.3 Calculate sum of all elements:");
let sum = 0;
for (let i = 0; i < matrix2D.length; i++) {
    for (let j = 0; j < matrix2D[i].length; j++) {
        sum += matrix2D[i][j];
    }
}
console.log("Sum of all elements:", sum);

// Exercise 2: 3D Array Basics
console.log("\n2. 3D Array Basics:");
const matrix3D = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log("3D Matrix:", matrix3D);

// TODO 4: Access element at depth 1, row 0, column 1
console.log("\n2.1 Access element at [1][0][1]:");
let element3D = matrix3D[1][0][1]; // Your code here
console.log("Element at [1][0][1]:", element3D);

// TODO 5: Print all elements of the 3D matrix
console.log("\n2.2 Print all elements of 3D matrix:");
for (let i = 0; i < matrix3D.length; i++) {
    for (let j = 0; j < matrix3D[i].length; j++) {
        for (let k = 0; k < matrix3D[i][j].length; k++) {
            console.log(`[${i}][${j}][${k}]: ${matrix3D[i][j][k]}`);
        }
    }
}

// Exercise 3: Matrix Operations
console.log("\n3. Matrix Operations:");
const matrixA = [
    [1, 2],
    [3, 4]
];
const matrixB = [
    [5, 6],
    [7, 8]
];

console.log("Matrix A:", matrixA);
console.log("Matrix B:", matrixB);

// TODO 6: Add two matrices
console.log("\n3.1 Add two matrices:");
let matrixSum = [];
for (let i = 0; i < matrixA.length; i++) {
    matrixSum[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
        matrixSum[i][j] = matrixA[i][j] + matrixB[i][j];
    }
}
console.log("Matrix A + B:", matrixSum);

// TODO 7: Multiply matrix by scalar
console.log("\n3.2 Multiply matrix by scalar (2):");
let scalar = 2;
let scalarProduct = [];
for (let i = 0; i < matrixA.length; i++) {
    scalarProduct[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
        scalarProduct[i][j] = matrixA[i][j] * scalar;
    }
}
console.log("Matrix A * 2:", scalarProduct);

// Exercise 4: Matrix Transpose
console.log("\n4. Matrix Transpose:");
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log("Original matrix:", originalMatrix);

// TODO 8: Transpose the matrix
console.log("\n4.1 Transpose the matrix:");
let transposedMatrix = [];
for (let i = 0; i < originalMatrix[0].length; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < originalMatrix.length; j++) {
        transposedMatrix[i][j] = originalMatrix[j][i];
    }
}
console.log("Transposed matrix:", transposedMatrix);

// Exercise 5: Complex Data Structures
console.log("\n5. Complex Data Structures:");
const students = [
    [
        {name: "Alice", grade: 85},
        {name: "Bob", grade: 92}
    ],
    [
        {name: "Charlie", grade: 78},
        {name: "Diana", grade: 96}
    ],
    [
        {name: "Eve", grade: 88},
        {name: "Frank", grade: 91}
    ]
];

console.log("Students by class:", students);

// TODO 9: Find the student with the highest grade
console.log("\n5.1 Find student with highest grade:");
let highestGrade = 0;
let topStudent = null;
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        if (students[i][j].grade > highestGrade) {
            highestGrade = students[i][j].grade;
            topStudent = students[i][j];
        }
    }
}
console.log("Top student:", topStudent);

// TODO 10: Calculate average grade for each class
console.log("\n5.2 Calculate average grade for each class:");
let classAverages = [];
for (let i = 0; i < students.length; i++) {
    let classSum = 0;
    let classCount = 0;
    for (let j = 0; j < students[i].length; j++) {
        classSum += students[i][j].grade;
        classCount++;
    }
    classAverages.push({
        class: i + 1,
        average: classSum / classCount
    });
}
console.log("Class averages:", classAverages);

// Exercise 6: Nested Array Processing
console.log("\n6. Nested Array Processing:");
const data = [
    [1, 2, [3, 4]],
    [5, [6, 7], 8],
    [[9, 10], 11, 12]
];

console.log("Nested data:", data);

// TODO 11: Flatten the nested array
console.log("\n6.1 Flatten the nested array:");
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
let flattened = flattenArray(data);
console.log("Flattened array:", flattened);

// TODO 12: Count the depth of nesting
console.log("\n6.2 Count maximum depth of nesting:");
function getMaxDepth(arr, currentDepth = 1) {
    let maxDepth = currentDepth;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let depth = getMaxDepth(arr[i], currentDepth + 1);
            maxDepth = Math.max(maxDepth, depth);
        }
    }
    return maxDepth;
}
let maxDepth = getMaxDepth(data);
console.log("Maximum depth:", maxDepth);

// Exercise 7: Matrix Multiplication
console.log("\n7. Matrix Multiplication:");
const matrix1 = [
    [1, 2],
    [3, 4]
];
const matrix2 = [
    [5, 6],
    [7, 8]
];

console.log("Matrix 1:", matrix1);
console.log("Matrix 2:", matrix2);

// TODO 13: Multiply two matrices
console.log("\n7.1 Multiply two matrices:");
let product = [];
for (let i = 0; i < matrix1.length; i++) {
    product[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
        product[i][j] = 0;
        for (let k = 0; k < matrix2.length; k++) {
            product[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    }
}
console.log("Matrix product:", product);

// Exercise 8: Array of Arrays Processing
console.log("\n8. Array of Arrays Processing:");
const salesData = [
    [100, 150, 200], // Q1 sales
    [120, 180, 220], // Q2 sales
    [110, 160, 190], // Q3 sales
    [130, 170, 210]  // Q4 sales
];

console.log("Sales data by quarter:", salesData);

// TODO 14: Calculate total sales for each quarter
console.log("\n8.1 Calculate total sales for each quarter:");
let quarterlyTotals = [];
for (let i = 0; i < salesData.length; i++) {
    let quarterTotal = 0;
    for (let j = 0; j < salesData[i].length; j++) {
        quarterTotal += salesData[i][j];
    }
    quarterlyTotals.push({
        quarter: `Q${i + 1}`,
        total: quarterTotal
    });
}
console.log("Quarterly totals:", quarterlyTotals);

// TODO 15: Find the best performing quarter
console.log("\n8.2 Find best performing quarter:");
let bestQuarter = quarterlyTotals.reduce((best, quarter) => 
    quarter.total > best.total ? quarter : best
);
console.log("Best quarter:", bestQuarter);

// TODO 16: Calculate average sales across all quarters
console.log("\n8.3 Calculate average sales across all quarters:");
let totalSales = quarterlyTotals.reduce((sum, quarter) => sum + quarter.total, 0);
let averageSales = totalSales / quarterlyTotals.length;
console.log("Average sales:", averageSales);

// Exercise 9: Dynamic Array Creation
console.log("\n9. Dynamic Array Creation:");

// TODO 17: Create a 5x5 identity matrix
console.log("\n9.1 Create 5x5 identity matrix:");
let identityMatrix = [];
for (let i = 0; i < 5; i++) {
    identityMatrix[i] = [];
    for (let j = 0; j < 5; j++) {
        identityMatrix[i][j] = i === j ? 1 : 0;
    }
}
console.log("Identity matrix:", identityMatrix);

// TODO 18: Create a multiplication table
console.log("\n9.2 Create 5x5 multiplication table:");
let multiplicationTable = [];
for (let i = 1; i <= 5; i++) {
    multiplicationTable[i - 1] = [];
    for (let j = 1; j <= 5; j++) {
        multiplicationTable[i - 1][j - 1] = i * j;
    }
}
console.log("Multiplication table:", multiplicationTable);

// Exercise 10: Advanced Multidimensional Operations
console.log("\n10. Advanced Multidimensional Operations:");
const image = [
    [[255, 0, 0], [0, 255, 0], [0, 0, 255]],     // Red, Green, Blue
    [[255, 255, 0], [255, 0, 255], [0, 255, 255]], // Yellow, Magenta, Cyan
    [[128, 128, 128], [255, 255, 255], [0, 0, 0]]  // Gray, White, Black
];

console.log("Image data (RGB values):", image);

// TODO 19: Convert to grayscale
console.log("\n10.1 Convert to grayscale:");
let grayscaleImage = [];
for (let i = 0; i < image.length; i++) {
    grayscaleImage[i] = [];
    for (let j = 0; j < image[i].length; j++) {
        let r = image[i][j][0];
        let g = image[i][j][1];
        let b = image[i][j][2];
        let gray = Math.round((r + g + b) / 3);
        grayscaleImage[i][j] = gray;
    }
}
console.log("Grayscale image:", grayscaleImage);

// TODO 20: Find the brightest pixel
console.log("\n10.2 Find brightest pixel:");
let maxBrightness = 0;
let brightestPixel = null;
for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
        let brightness = image[i][j].reduce((sum, value) => sum + value, 0);
        if (brightness > maxBrightness) {
            maxBrightness = brightness;
            brightestPixel = {row: i, col: j, rgb: image[i][j]};
        }
    }
}
console.log("Brightest pixel:", brightestPixel);

console.log("\n🎉 Congratulations! You've completed Exercise 5: Multidimensional Arrays!");
console.log("You now understand how to work with complex nested array structures!");
