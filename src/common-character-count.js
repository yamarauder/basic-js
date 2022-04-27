const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount( s1, s2 ) {
let array1= s1.split("");
let array2= s2.split("");
let amount = 0; 
 for (let i = 0; i < array1.length; i++) {
 	for (let j = 0; j < array2.length; j++) {

 		if (array1[i] == array2[j]) { 
     	   amount++
 			array1[i] = null;
 			array2[j] = null;
 			break

 		}	
 	}
 }
  return amount   
}

module.exports = {
  getCommonCharacterCount
};
