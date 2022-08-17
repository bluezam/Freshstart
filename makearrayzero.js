/* You are given a non-negative integer array nums. In one operation, you must:

    Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
    Subtract x from every positive element in nums.

Return the minimum number of operations to make every element in nums equal to 0. */

/**
 * @param {number[]} nums
 * @return {number}
 */


 var minimumOperations = function(nums) {
    nums.sort((a,b) => a-b);
    let i = 0;
    let count = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            i++;
            continue;
        }
        let substract = nums[i];
        for (let j = i; j < nums.length; j++) {
            nums[j] -= substract;
        }
        count++;
    }
    return count;
};

/*
const minimumOperations = (nums) => {
    let answer = 0;
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len && nums[len - 1] !== 0;) {
      while (nums[i] === 0 && i < len) {
        i++;
      }
      let minus = nums[i];
      for (let j = i; j < len; j++) {
        nums[j] -= minus;
        if (nums[j] < 0) nums[j] = 0;
      }
      answer++;
    }
    return answer;
  };

*/