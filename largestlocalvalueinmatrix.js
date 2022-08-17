/* You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

    maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix. 
*/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
    const ans = [];
        
    for (let r = 0; r < grid.length - 2; r++) {
        const row = [];
        for (let c = 0; c < grid[r].length - 2; c++) {
            row.push(Math.max(
                grid[r][c], grid[r][c + 1], grid[r][c + 2],
                grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2],
                grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2]
            ));
        }
        ans.push(row);
    }

    return ans;
};



