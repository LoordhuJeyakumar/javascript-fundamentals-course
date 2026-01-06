// Exercise 4: Nested Loops
// Complete the TODO sections below

console.log("💪 Exercise 4: Nested Loops");
console.log("==========================");

// Exercise 1: Basic Nested Loop Pattern
console.log("\n1. Basic Nested Loop Pattern:");
console.log("Create a pattern like this:");
console.log("1");
console.log("1 2");
console.log("1 2 3");
console.log("1 2 3 4");
console.log("1 2 3 4 5");

// TODO: Create nested loops to print the pattern above
// Hint: Use outer loop for rows, inner loop for columns
// Your code here

// Exercise 2: Multiplication Table
console.log("\n2. Multiplication Table:");
console.log("Create a 5x5 multiplication table");


/* 
Sudo code and detailed explanation for printing a 5x5 multiplication table:

1. We want to print a table where each row and column shows the product of their respective indices. 
   For example, row 1 shows 1×1  1×2  1×3  1×4  1×5, row 2 shows 2×1  2×2 ... etc.
2. Use an outer loop to represent each row, from 1 to 5.
3. For each row, set up an empty string to accumulate the values for that row.
4. Use an inner loop for the columns, also from 1 to 5.
5. Multiply the current row number (from outer loop) by the column number (from inner loop).
6. Format the product with spaces for neat alignment.
7. Append each product to the row string.
8. After the inner loop finishes, print the whole row string (one row of the table).
9. Repeat for all 5 rows.

Detailed Comments:

- Outer loop: runs 5 times, representing each row `i` of the table (i = 1 to 5)
- Inner loop: for each row `i`, runs 5 times for columns `j` (j = 1 to 5)
- For each (i, j) combination, compute the product i * j. This gives us the value for that cell.
- Formatting (`padStart(3)` in the code) aligns numbers into columns for easy reading.
- Row string accumulates values, then is printed after all columns are added.

Example of what the output looks like (with correct alignment):
  1   2   3   4   5 
  2   4   6   8  10 
  3   6   9  12  15 
  4   8  12  16  20 
  5  10  15  20  25 
*/

// TODO: Create nested loops to print multiplication table
// Hint: Use i * j for each cell
// Your code here

//Outer loop that handle rows
for (let outer_i = 1; outer_i <= 5; outer_i++) {
    //Inner loop that handle columns
    let row_string = "";
    for (let inner_j = 1; inner_j <= 5; inner_j++) {
      const product = outer_i * inner_j;

      row_string += product.toString().padStart(3) + " "; //Append the formatted product to the row string
    }   
    console.log(row_string);

}



// Exercise 3: Star Pattern
console.log("\n3. Star Pattern:");
console.log("Create a pattern like this:");
console.log("*");
console.log("* *");
console.log("* * *");
console.log("* * * *");
console.log("* * * * *");

// TODO: Create nested loops to print the star pattern
// Hint: Use console.log("* ") in inner loop, console.log() for new line
// Your code here

// Exercise 4: Number Pyramid
console.log("\n4. Number Pyramid:");
console.log("Create a pyramid like this:");
console.log("    1");
console.log("   1 2");
console.log("  1 2 3");
console.log(" 1 2 3 4");
console.log("1 2 3 4 5");

// TODO: Create nested loops to print the number pyramid
// Hint: Use spaces before numbers, outer loop for rows, inner loop for spaces and numbers
// Your code here

// Exercise 5: 2D Array Processing
console.log("\n5. 2D Array Processing:");
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log("Original matrix:");
// TODO: Print the matrix using nested loops
// Hint: Use nested loops to access matrix[i][j]
// Your code here

console.log("\nMatrix sum:");
// TODO: Calculate the sum of all elements in the matrix
let matrixSum = 0;
// Your code here
console.log(`Sum: ${matrixSum}`);

console.log("\nMatrix diagonal sum:");
// TODO: Calculate the sum of diagonal elements (1, 6, 11, 16)
let diagonalSum = 0;
// Your code here
console.log(`Diagonal sum: ${diagonalSum}`);

// Exercise 6: Find Maximum in Each Row
console.log("\n6. Find Maximum in Each Row:");
// TODO: Find the maximum value in each row of the matrix
// Hint: Use nested loops, outer for rows, inner for columns
// Your code here

// Exercise 7: Transpose Matrix
console.log("\n7. Transpose Matrix:");
console.log("Create a transposed version of the matrix:");
// TODO: Create a transposed matrix (rows become columns)
// Hint: transposed[i][j] = original[j][i]
// Your code here

// Exercise 8: Chessboard Pattern
console.log("\n8. Chessboard Pattern:");
console.log("Create an 8x8 chessboard pattern:");
// TODO: Create a chessboard pattern using nested loops
// Hint: Use (i + j) % 2 to alternate between 0 and 1
// Your code here

// Exercise 9: Pascal's Triangle
console.log("\n9. Pascal's Triangle:");
console.log("Create the first 6 rows of Pascal's triangle:");
// TODO: Create Pascal's triangle using nested loops
// Hint: Each number is the sum of the two numbers above it
// Your code here

// Exercise 10: Spiral Pattern
console.log("\n10. Spiral Pattern:");
console.log("Create a spiral pattern:");
// TODO: Create a spiral pattern using nested loops
// Hint: Use direction changes and boundary checks
// Your code here

// Exercise 11: Diamond Pattern
console.log("\n11. Diamond Pattern:");
console.log("Create a diamond pattern:");
// TODO: Create a diamond pattern using nested loops
// Hint: Use two sets of nested loops - one for top half, one for bottom half
// Your code here

// Exercise 12: Matrix Multiplication
console.log("\n12. Matrix Multiplication:");
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

// TODO: Multiply matrixA and matrixB
// Hint: result[i][j] = sum of matrixA[i][k] * matrixB[k][j] for all k
// Your code here

// Exercise 13: Find Common Elements
console.log("\n13. Find Common Elements:");
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Array 1:", array1);
console.log("Array 2:", array2);

// TODO: Find common elements between the two arrays
// Hint: Use nested loops to compare each element
// Your code here

// Exercise 14: Bubble Sort
console.log("\n14. Bubble Sort:");
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

// TODO: Implement bubble sort using nested loops
// Hint: Use nested loops, compare adjacent elements and swap if needed
// Your code here

// Exercise 15: Pattern Recognition
console.log("\n15. Pattern Recognition:");
const pattern = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1]
];

console.log("Pattern:");
// TODO: Print the pattern and count occurrences of 1
// Hint: Use nested loops to count 1s
// Your code here

console.log("\n🎉 Congratulations! You've completed Exercise 4: Nested Loops!");
console.log("You now understand how to use nested loops for complex patterns and data processing!");
