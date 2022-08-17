/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

 function isPalindrome(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
  
    let rev = 0;
    while (rev < x) {
      rev *= 10;
      rev += x%10;
      x = Math.trunc(x/10);
    }
    return rev === x || Math.trunc(rev/10) === x;
};


/*

 var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x+'';
};

*/