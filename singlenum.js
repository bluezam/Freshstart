/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let x = 0;
    
    for (const num of nums) {
        x ^= num;
    };
    
    return x;
};