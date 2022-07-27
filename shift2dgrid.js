/* Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
In one shift operation:
    Element at grid[i][j] moves to grid[i][j + 1].
    Element at grid[i][n - 1] moves to grid[i + 1][0].
    Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times. */


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function(grid, k) {
    var subgridLen = grid[0].length;
    var straightenedGrid = grid.flat();
    var straightenedGridLen = straightenedGrid.length;
    var returnGrid = [];
    
    k %= straightenedGridLen;
    
    if(k == straightenedGridLen) return grid;
    
    straightenedGrid.splice(0, 0, ...straightenedGrid.slice(straightenedGridLen-k));
    
    for (let i = 0; i < straightenedGridLen; i += subgridLen) {
        returnGrid.push(straightenedGrid.slice(i, i+subgridLen));
    }
    return returnGrid;
    
    };


/* var shiftGrid = function(g, k, arr1=[],arr2=[],arr3=[], res=[]) {
    arr1=g.flat()
    k=k%arr1.length
    arr2=arr1.splice(-k,k)
    arr3=[...arr2, ...arr1]
    for(let q=0;q<g.length;q++){
        res.push(arr3.splice(0,g[0].length))
    }
    return res
}; */

