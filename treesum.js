/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    if (nums.length < 3) return [];
    const list = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      //nums is sorted,so it's impossible to have a sum = 0
      if (nums[i] > 0) break;
      // skip duplicated result without set
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
  
      // for each index i
      // we want to find the triplet [i, left, right] which sum to 0
      while (left < right) {
        // since left < right, and left > i, no need to compare i === left and i === right.
        if (nums[left] + nums[right] + nums[i] === 0) {
          list.push([nums[left], nums[right], nums[i]]);
          // skip duplicated result without set
          while (nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          // skip duplicated result without set
          while (nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
          continue;
        } else if (nums[left] + nums[right] + nums[i] > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
    return list;
  };