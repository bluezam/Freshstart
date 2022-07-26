/* Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
Write an algorithm to minimize the largest sum among these m subarrays. */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
    function canSplit(largest) {
        let [subArrCt, sum] = [0, 0];
        for (let n of nums) {
            sum += n;
            if (sum > largest) {
                subArrCt += 1;
                sum = n;
            }
        }
        return subArrCt + 1 <= m;
    }
    
    
    let [l, r] = [Math.max(...nums), nums.reduce((acc, item) => item + acc, 0)];
    let res = r;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (canSplit(mid)) {
            res = mid;
            r = mid - 1;
        } else l = mid + 1;
    }
    return res;
};