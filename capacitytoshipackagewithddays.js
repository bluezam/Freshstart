/* A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days. */


/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
    var shipWithinDays = function(weights, D) {
    
    function getDays(capacity) {
        let days = 1, total = 0;
        
        for(let n of weights) {
            total += n;
            if(total > capacity) {
                total = n;
                days++;
            }
        }
        return days;
    }
    
    let start = Math.max(...weights), 
        end = weights.reduce((acc, cur) => acc + cur, 0);
    
    while(start < end) {
        const mid = Math.floor((end+start)/2);
        const days = getDays(mid);
        if(days > D) start = mid+1;
        else end = mid;
    }
    return end;
};