/* Given a string s consisting of lowercase English letters, return the first letter to appear twice.
Note:

    A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
    s will contain at least one letter that appears twice.
*/

/**
 * @param {string} s
 * @return {character}
 */

 var repeatedCharacter = function(s) {
    
    let single=[];
    let duplicate=[];
    
    for(let i=0; i<s.length; i++){
       (single.indexOf(s[i]) === -1) ? single.push(s[i]) :  duplicate.push(s[i]); 
    }
    
    return duplicate[0];
};

/* 
 var repeatedCharacter = function(s) {
    let obj={}
    for(let q of s){
        if(q in obj)return q
        obj[q]=1
    }
};

const repeatedCharacter = (s) => {
    let cur = '';
    for (const c of s) {
        cur += c;
        if (cur.length != new Set(cur).size) return c;
    }
};

*/
