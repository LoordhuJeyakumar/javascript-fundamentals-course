// Lesson 4: Nested Loops and Complex Patterns
// This file teaches nested loops and complex iteration patterns

console.log("🔄 Welcome to Loops Lesson 4: Nested Loops and Complex Patterns!");
console.log("===============================================================");

// 1. Basic Nested For Loops
console.log("\n📚 1. Basic Nested For Loops");
console.log("----------------------------");

console.log("Creating a 3x3 grid:");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += `(${i},${j}) `;
    }
    console.log(row);
}

// 2. Number Patterns with Nested Loops
console.log("\n📚 2. Number Patterns with Nested Loops");
console.log("--------------------------------------");

console.log("Triangle pattern:");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    console.log(pattern);
}

console.log("\nPyramid pattern:");
for (let i = 1; i <= 5; i++) {
    let spaces = "";
    let numbers = "";
    
    // Add spaces
    for (let j = 1; j <= 5 - i; j++) {
        spaces += " ";
    }
    
    // Add numbers
    for (let k = 1; k <= i; k++) {
        numbers += k + " ";
    }
    
    console.log(spaces + numbers);
}

// 3. Multi-dimensional Arrays
console.log("\n📚 3. Multi-dimensional Arrays");
console.log("-----------------------------");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix traversal:");
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(`Row ${i + 1}: ${row}`);
}

// 4. Processing Multi-dimensional Data
console.log("\n📚 4. Processing Multi-dimensional Data");
console.log("-------------------------------------");

let students = [
    ["Alice", 95, 87, 92],
    ["Bob", 78, 85, 90],
    ["Charlie", 88, 92, 85]
];

console.log("Student grades:");
for (let i = 0; i < students.length; i++) {
    let name = students[i][0];
    let grades = students[i].slice(1);
    let sum = 0;
    
    for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
    }
    
    let average = sum / grades.length;
    console.log(`${name}: ${grades.join(", ")} (Average: ${average.toFixed(1)})`);
}

// 5. Complex Patterns: Diamond
console.log("\n📚 5. Complex Patterns: Diamond");
console.log("-------------------------------");

function printDiamond(size) {
    // Upper half
    for (let i = 1; i <= size; i++) {
        let spaces = "";
        let stars = "";
        
        // Add spaces
        for (let j = 1; j <= size - i; j++) {
            spaces += " ";
        }
        
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            stars += "*";
        }
        
        console.log(spaces + stars);
    }
    
    // Lower half
    for (let i = size - 1; i >= 1; i--) {
        let spaces = "";
        let stars = "";
        
        // Add spaces
        for (let j = 1; j <= size - i; j++) {
            spaces += " ";
        }
        
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            stars += "*";
        }
        
        console.log(spaces + stars);
    }
}

console.log("Diamond pattern (size 4):");
printDiamond(4);

// 6. Complex Patterns: Spiral
console.log("\n📚 6. Complex Patterns: Spiral");
console.log("-----------------------------");

function printSpiral(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = 0;
        }
    }
    
    let num = 1;
    let top = 0, bottom = size - 1, left = 0, right = size - 1;
    
    while (top <= bottom && left <= right) {
        // Top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        
        // Right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        
        // Bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }
        
        // Left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }
    
    // Print spiral
    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            row += matrix[i][j].toString().padStart(2, " ") + " ";
        }
        console.log(row);
    }
}

console.log("Spiral pattern (4x4):");
printSpiral(4);

// 7. Nested Loops with Different Data Types
console.log("\n📚 7. Nested Loops with Different Data Types");
console.log("---------------------------------------------");

let inventory = [
    { category: "Electronics", items: ["Laptop", "Phone", "Tablet"] },
    { category: "Clothing", items: ["Shirt", "Pants", "Shoes"] },
    { category: "Books", items: ["Novel", "Textbook", "Magazine"] }
];

console.log("Inventory by category:");
for (let i = 0; i < inventory.length; i++) {
    console.log(`\n${inventory[i].category}:`);
    for (let j = 0; j < inventory[i].items.length; j++) {
        console.log(`  - ${inventory[i].items[j]}`);
    }
}

// 8. Performance Considerations
console.log("\n📚 8. Performance Considerations");
console.log("--------------------------------");

console.log("Inefficient nested loop (O(n²)):");
let numbers = [1, 2, 3, 4, 5];
let pairs = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
            pairs.push([numbers[i], numbers[j]]);
        }
    }
}
console.log("All pairs:", pairs.slice(0, 5), "...");

console.log("\nMore efficient approach (O(n²) but optimized):");
let optimizedPairs = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        optimizedPairs.push([numbers[i], numbers[j]]);
    }
}
console.log("Unique pairs:", optimizedPairs);

// 9. Practical Example: Game Board
console.log("\n📚 9. Practical Example: Game Board");
console.log("-----------------------------------");

function createGameBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = (i + j) % 2 === 0 ? "X" : "O";
        }
    }
    return board;
}

function printGameBoard(board) {
    for (let i = 0; i < board.length; i++) {
        let row = "";
        for (let j = 0; j < board[i].length; j++) {
            row += board[i][j] + " ";
        }
        console.log(row);
    }
}

console.log("3x3 Game Board:");
let gameBoard = createGameBoard(3);
printGameBoard(gameBoard);

// 10. Practical Example: Matrix Operations
console.log("\n📚 10. Practical Example: Matrix Operations");
console.log("------------------------------------------");

function transposeMatrix(matrix) {
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}

let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log("Original matrix:");
for (let i = 0; i < originalMatrix.length; i++) {
    console.log(originalMatrix[i]);
}

let transposed = transposeMatrix(originalMatrix);
console.log("\nTransposed matrix:");
for (let i = 0; i < transposed.length; i++) {
    console.log(transposed[i]);
}

console.log("\n🎉 Lesson 4 Complete!");
console.log("=====================");
console.log("Key Takeaways:");
console.log("- Nested loops are essential for 2D data processing");
console.log("- Use nested loops for patterns and matrices");
console.log("- Be mindful of performance with nested loops");
console.log("- Break complex problems into smaller nested loops");
console.log("- Practice with different data structures");

console.log("\n📝 Practice Exercises:");
console.log("1. Create a multiplication table using nested loops");
console.log("2. Print a chessboard pattern");
console.log("3. Create a Pascal's triangle");
console.log("4. Process a 2D array to find the maximum value");
console.log("5. Create a pattern that looks like a tree");
