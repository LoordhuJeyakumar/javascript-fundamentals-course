// Ex 5: 2D Array Processing
console.log("\n5. 2D Array Processing:");
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log("Original matrix:");
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + "\t";
    }
    console.log(row);
}
console.log("\nMatrix sum:");
let matrixSum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrixSum += matrix[i][j];
    }
}
console.log(`Sum: ${matrixSum}`);
console.log("\nMatrix diagonal sum:");
let diagonalSum = 0;
for (let i = 0; i < matrix.length; i++) {
    diagonalSum += matrix[i][i];
}
console.log(`Diagonal sum: ${diagonalSum}`);


// Ex 6: Find Maximum in Each Row
console.log("\n6. Find Maximum in Each Row:");
for (let i = 0; i < matrix.length; i++) {
    let max = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
    console.log(`Row ${i + 1} max: ${max}`);
}


// Ex 7: Transpose Matrix
console.log("\n7. Transpose Matrix:");
let transposed = [];
for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
        transposed[i][j] = matrix[j][i];
    }
}
console.log("Transposed matrix:");
for (let row of transposed) {
    console.log(row.join("\t"));
}


// Ex 8: Chessboard Pattern
console.log("\n8. Chessboard Pattern:");
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        row += ((i + j) % 2 === 0 ? "1 " : "0 ");
    }
    console.log(row);
}


// Ex 9: Pascal's Triangle
console.log("\n9. Pascal's Triangle:");
let rows = 6;
let pascal = [];
for (let i = 0; i < rows; i++) {
    pascal[i] = [];
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            pascal[i][j] = 1;
        } else {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }
    }
    console.log(pascal[i].join(" "));
}


// Ex 10: Spiral Pattern (4x4)
console.log("\n10. Spiral Pattern:");
let n = 4;
let spiral = Array.from({ length: n }, () => Array(n).fill(0));
let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;
while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) spiral[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) spiral[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) spiral[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) spiral[i][left] = num++;
    left++;
}
for (let row of spiral) {
    console.log(row.join("\t"));
}


// Ex 11: Diamond Pattern
console.log("\n11. Diamond Pattern:");
let size = 5;
for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "* ".repeat(i));
}
for (let i = size - 1; i >= 1; i--) {
    console.log(" ".repeat(size - i) + "* ".repeat(i));
}


// Ex 12: Matrix Multiplication
console.log("\n12. Matrix Multiplication:");
const matrixA = [
    [1, 2],
    [3, 4]
];
const matrixB = [
    [5, 6],
    [7, 8]
];
let result = [];
for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
            sum += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = sum;
    }
}
console.log("Resultant Matrix:");
for (let row of result) {
    console.log(row.join("\t"));
}


// Ex 13: Find Common Elements
console.log("\n13. Find Common Elements:");
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
let common = [];
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            common.push(array1[i]);
        }
    }
}
console.log("Common elements:", common);


// Ex 14: Bubble Sort
console.log("\n14. Bubble Sort:");
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Sorted array:", numbers);


// Ex 15: Pattern Recognition
console.log("\n15. Pattern Recognition:");
const pattern = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1]
];
let countOnes = 0;
console.log("Pattern:");
for (let i = 0; i < pattern.length; i++) {
    let row = "";
    for (let j = 0; j < pattern[i].length; j++) {
        row += pattern[i][j] + " ";
        if (pattern[i][j] === 1) countOnes++;
    }
    console.log(row);
}
console.log(`Total 1s in pattern: ${countOnes}`);