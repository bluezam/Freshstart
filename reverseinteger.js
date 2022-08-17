// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */

 var reverse = function(x) {
    let val;
    val= parseInt(x.toString().split('').reverse().join(''));
    if(val > Math.pow(2, 31)){
       return 0;
    }else{
        if(x<0){
           return val*-1;
        }
    }
    return val;
};

/* 
 var reverse = function(x) {
    let record = '';
    if (x < 0) {
        record = '-';
        x =  Math.abs(x);
    }
    let num = Number((x + '').split('').reverse().join(''));
    if(!(num > Math.pow(-2, 31) && num < Math.pow(2,31) - 1)) return 0
    return (record == '-') ? num* -1: num;
};

 var reverse = function(x) {
    let reverse = 0;
    const limit = 2147483648;
    while(x != 0) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x/10);
    }
    if(reverse < -limit || reverse > limit) {
        return 0
    }
    return reverse
};

*/