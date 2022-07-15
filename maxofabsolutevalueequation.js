/* https://leetcode.com/problems/maximum-of-absolute-value-expression/
Given two arrays of integers with equal lengths, return the maximum value of:

|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

where the maximum is taken over all 0 <= i, j < arr1.length. */


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
 var maxAbsValExpr = function(arr1, arr2) {
    const n = arr1.length;
    const bucket1 = new Array(n);
    const bucket2 = new Array(n);
    const bucket3 = new Array(n);
    const bucket4 = new Array(n);
    
    for(let i = 0; i < n; i++)
    {
        bucket1[i] = arr1[i] + arr2[i] + i;
        bucket2[i] = arr1[i] + arr2[i] - i;
        bucket3[i] = arr1[i] - arr2[i] + i;
        bucket4[i] = arr1[i] - arr2[i] - i;
    }

    return Math.max(
        getMinMaxDiff(bucket1),
        getMinMaxDiff(bucket2),
        getMinMaxDiff(bucket3),
        getMinMaxDiff(bucket4),
    );
};

function getMinMaxDiff(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }
    
    return max - min;
}