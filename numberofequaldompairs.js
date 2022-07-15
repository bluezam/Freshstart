/* Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j]. */

// https://leetcode.com/problems/number-of-equivalent-domino-pairs

/**
 * @param {number[][]} dominoes
 * @return {number}
 */

const numEquivDominoPairs = dominoes => {
    const cnts = new Array(100).fill(0);
    for (const d of dominoes) cnts[+`${Math.min(...d)}${Math.max(...d)}`]++;
    return cnts.reduce((acc, curr) => acc + ((curr - 1) * curr) / 2, 0);
  };


/* 
var numEquivDominoPairs = function(dominoes) {
  const lookup = new Map();
  let pairs = 0;
  dominoes.forEach(d => {
    lookup.set(hash(d), (lookup.get(hash(d)) || 0) + 1);
  });
  for (const v of lookup.values()) {
    pairs += (v * (v - 1)) >> 1;
  }
  return pairs;
};

const hash = p => (p[0] < p[1] ? `${p[0]}${p[1]}` : `${p[1]}${p[0]}`);
*/