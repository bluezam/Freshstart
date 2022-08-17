/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows); */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


const convert = (s, numRows) => {

    const zigzag = [...new Array(numRows).keys()];
    zigzag.push(...zigzag.slice(1, -1).reverse());
    const rows = new Array(numRows).fill('');
    [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
    return rows.join('');

  };

  /*

var convert = function(s, numRows) {
    var rows = Array.from({length: numRows}, e => []);
    s = s.split('');
    while (s.length > 0) {
        for (var i = 0; i < numRows; i++) {
            rows[i].push(s.shift());
        }
        for (var i = numRows - 2; i >= 1; i--) {
            rows[i].push(s.shift());
        }
    }
    return rows.map(row => row.join('')).join('');
};


var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    const matrix = [];
    
    for (let i = 0 ; i < numRows; i++) {
        matrix[i] = [];
    }
    
    for (let i = 0, j = 0, dir = 1; i < s.length; i++, j += dir) {
        matrix[j].push(s.charAt(i));
        
        if (j === 0) dir = 1;
        if (j === numRows - 1) dir = -1; 
    }
    
    return matrix.reduce((res, row) => res + row.join(""), "");
};

*/