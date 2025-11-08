// Lesson 5: Multidimensional Arrays
// This file teaches multidimensional arrays and complex data structures

console.log("📦 Welcome to Arrays Lesson 5: Multidimensional Arrays!");
console.log("=====================================================");

// 1. Creating 2D Arrays
console.log("\n📚 1. Creating 2D Arrays");
console.log("----------------------");

// Method 1: Array literal
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array (literal):", matrix1);

// Method 2: Using Array constructor
let matrix2 = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log("2D Array (constructor):", matrix2);

// Method 3: Nested loops
let matrix3 = [];
for (let i = 0; i < 3; i++) {
    matrix3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3[i][j] = i * 3 + j + 1;
    }
}
console.log("2D Array (nested loops):", matrix3);

// 2. Accessing 2D Array Elements
console.log("\n📚 2. Accessing 2D Array Elements");
console.log("--------------------------------");

let grid = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
];
console.log("Grid:", grid);

// Access specific elements
console.log("Element at [0][0]:", grid[0][0]);
console.log("Element at [1][2]:", grid[1][2]);
console.log("Element at [2][1]:", grid[2][1]);

// Access entire rows
console.log("Row 0:", grid[0]);
console.log("Row 1:", grid[1]);
console.log("Row 2:", grid[2]);

// Access entire columns
console.log("Column 0:", grid.map(row => row[0]));
console.log("Column 1:", grid.map(row => row[1]));
console.log("Column 2:", grid.map(row => row[2]));

// 3. Modifying 2D Arrays
console.log("\n📚 3. Modifying 2D Arrays");
console.log("-----------------------");

let gameBoard = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];
console.log("Original game board:", gameBoard);

// Modify specific element
gameBoard[1][1] = "O";
console.log("After modifying [1][1]:", gameBoard);

// Add new row
gameBoard.push(["O", "X", "O"]);
console.log("After adding row:", gameBoard);

// Modify entire row
gameBoard[0] = ["O", "O", "O"];
console.log("After modifying row 0:", gameBoard);

// 4. Iterating Through 2D Arrays
console.log("\n📚 4. Iterating Through 2D Arrays");
console.log("--------------------------------");

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Numbers matrix:", numbers);

// Using nested for loops
console.log("Using nested for loops:");
for (let i = 0; i < numbers.length; i++) {
    let row = "";
    for (let j = 0; j < numbers[i].length; j++) {
        row += numbers[i][j] + " ";
    }
    console.log(`Row ${i}: ${row}`);
}

// Using forEach
console.log("Using forEach:");
numbers.forEach((row, rowIndex) => {
    console.log(`Row ${rowIndex}:`, row.join(" "));
});

// Using for...of
console.log("Using for...of:");
for (let row of numbers) {
    console.log("Row:", row.join(" "));
}

// 5. Common 2D Array Operations
console.log("\n📚 5. Common 2D Array Operations");
console.log("-------------------------------");

let matrix = [
    [1, 2, 3],
    [4, 15, 6],
    [7, 8, 9]
];

// Find maximum value
let max = matrix[0][0];
for (let row of matrix) {
    for (let value of row) {
        if (value > max){
            max = value;
        } 
    
    }
}
console.log("Maximum value:", max);

// Calculate sum of all elements
let sum = 0;
for (let row of matrix) {
    for (let value of row) {
        sum += value;//sum = sum + value
    }
}
console.log("Sum of all elements:", sum);

// Count elements
let count = 0;
for (let row of matrix) {
    count += row.length;
}
console.log("Total elements:", count);

// 6. Matrix Transpose => Swap rows and columns
console.log("\n📚 6. Matrix Transpose");
console.log("--------------------");

let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("Original matrix:", originalMatrix);

// Transpose function
function transpose(matrix) {
    let transposed = [];
    for (let j = 0; j < matrix[0].length; j++) {
        transposed[j] = [];
        for (let i = 0; i < matrix.length; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}

let transposedMatrix = transpose(originalMatrix);
console.log("Transposed matrix:", transposedMatrix);

// 7. Matrix Addition
console.log("\n📚 7. Matrix Addition");
console.log("------------------");

let matrixA = [
    [1, 2],
    [3, 4]
];
let matrixB = [
    [5, 6],
    [7, 8]
];
console.log("Matrix A:", matrixA);
console.log("Matrix B:", matrixB);

// Add matrices
function addMatrices(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

let sumMatrix = addMatrices(matrixA, matrixB);
console.log("Sum of matrices:", sumMatrix);

// 8. 3D Arrays
console.log("\n📚 8. 3D Arrays");
console.log("--------------");

// Create 3D array
let cube = [];
for (let x = 0; x < 2; x++) {
    cube[x] = [];
    for (let y = 0; y < 2; y++) {
        cube[x][y] = [];
        for (let z = 0; z < 2; z++) {
            cube[x][y][z] = x * 4 + y * 2 + z;
        }
    }
}
console.log("3D Array (cube):", cube); 
/* 
[ 
    [ [ 0, 1 ], [ 2, 3 ] ], 
    [ [ 4, 5 ], [ 6, 7 ] ] 

]


x  |  y  |  z  |  Value (x4 + y2 + z)
---+-----+-----+---------------------
0  |  0  |  0  |  0                  
0  |  0  |  1  |  1                  
0  |  1  |  0  |  2                  
0  |  1  |  1  |  3                  
1  |  0  |  0  |  4                  
1  |  0  |  1  |  5                  
1  |  1  |  0  |  6                  
1  |  1  |  1  |  7                  

*/



// Access 3D array elements
console.log("Element at [0][0][0]:", cube[0][0][0]);
console.log("Element at [1][1][1]:", cube[1][1][1]);

// 9. Practical Example: Student Grades
console.log("\n📚 9. Practical Example: Student Grades");
console.log("--------------------------------------");

let studentGrades = [
    ["Alice", 95, 87, 92],
    ["Bob", 78, 85, 90],
    ["Charlie", 88, 92, 85],
    ["Diana", 76, 80, 82]
];
console.log("Student grades:", studentGrades);

// Calculate average for each student
let studentAverages = [];
for (let i = 0; i < studentGrades.length; i++) {
    let name = studentGrades[i][0];
    let grades = studentGrades[i].slice(1);
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / grades.length;
    studentAverages.push([name, average]);
}
console.log("Student averages:", studentAverages);

// Find highest average
let highestAverage = studentAverages[0];
for (let student of studentAverages) {
    if (student[1] > highestAverage[1]) {
        highestAverage = student;
    }
}
console.log("Highest average:", highestAverage);

// 10. Practical Example: Game Board
console.log("\n📚 10. Practical Example: Game Board");
console.log("-----------------------------------");

// Create empty game board
let ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Make moves
ticTacToe[0][0] = "X";
ticTacToe[1][1] = "O";
ticTacToe[2][2] = "X";
ticTacToe[0][2] = "O";
ticTacToe[1][0] = "X";

console.log("Tic-tac-toe board:");
for (let row of ticTacToe) {
    console.log(row.join(" | "));
}

// Check for winner
function checkWinner(board) {
    // Check rows
    for (let row of board) {
        if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
            return row[0];
        }
    }
    
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== "") {
            return board[0][j];
        }
    }
    
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
        return board[0][2];
    }
    
    return null;
}

let winner = checkWinner(ticTacToe);
console.log("Winner:", winner || "No winner yet");

// 11. Practical Example: Image Processing
console.log("\n📚 11. Practical Example: Image Processing");
console.log("----------------------------------------");

// Create a simple 3x3 image (grayscale values 0-255)
let image = [
    [100, 150, 200],
    [50, 75, 125],
    [25, 100, 175]
];
console.log("Original image:", image);

// Apply brightness adjustment
function adjustBrightness(img, factor) {
    let adjusted = [];
    for (let i = 0; i < img.length; i++) {
        adjusted[i] = [];
        for (let j = 0; j < img[i].length; j++) {
            let newValue = img[i][j] + factor;
            adjusted[i][j] = Math.max(0, Math.min(255, newValue));
        }
    }
    return adjusted;
}

let brighterImage = adjustBrightness(image, 50);
console.log("Brighter image:", brighterImage);

// Apply contrast adjustment
function adjustContrast(img, factor) {
    let adjusted = [];
    for (let i = 0; i < img.length; i++) {
        adjusted[i] = [];
        for (let j = 0; j < img[i].length; j++) {
            let newValue = (img[i][j] - 128) * factor + 128;
            adjusted[i][j] = Math.max(0, Math.min(255, newValue));
        }
    }
    return adjusted;
}

let contrastImage = adjustContrast(image, 1.5);
console.log("Contrast image:", contrastImage);

// 12. Performance Considerations
console.log("\n📚 12. Performance Considerations");
console.log("-------------------------------");

// Create large 2D array
let largeMatrix = [];
let size = 100;
for (let i = 0; i < size; i++) {
    largeMatrix[i] = [];
    for (let j = 0; j < size; j++) {
        largeMatrix[i][j] = Math.random();
    }
}

console.log(`Created ${size}x${size} matrix`);

// Time different operations
console.time("Row-wise access");
let rowSum = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        rowSum += largeMatrix[i][j];
    }
}
console.timeEnd("Row-wise access");

console.time("Column-wise access");
let colSum = 0;
for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        colSum += largeMatrix[i][j];
    }
}
console.timeEnd("Column-wise access");

console.log("Row-wise sum:", rowSum);
console.log("Column-wise sum:", colSum);

console.log("\n🎉 Lesson 5 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- 2D arrays are arrays of arrays");
console.log("- Access elements using [row][column] notation");
console.log("- Use nested loops to iterate through 2D arrays");
console.log("- Common operations: transpose, addition, multiplication");
console.log("- 3D arrays extend the concept to three dimensions");
console.log("- Consider performance for large multidimensional arrays");
console.log("- Row-wise access is generally faster than column-wise");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a 2D array and access its elements");
console.log("2. Implement matrix transpose function");
console.log("3. Create a tic-tac-toe game board");
console.log("4. Process a 2D array to find maximum values");
console.log("5. Implement matrix addition and multiplication");
