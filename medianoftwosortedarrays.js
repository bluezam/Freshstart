/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)). */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    
    let median = 0
    let i = Math.ceil(arr.length/2) - 1
    
    return arr.length % 2 === 0 ? (arr[i] + arr[i+1])/2 : arr[i]
}; 