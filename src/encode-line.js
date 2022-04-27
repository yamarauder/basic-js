const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
str =  str.split("")
let amount = 0;
let array = [];

		for (let i = 0; i <str.length; i++) {

			if (str[i] == str[i+1]) continue // только неповторяющиеся элементы 
	   //console.log(i);
			for (let j = i; j >= 0; j--) {
				//console.log(j)
				if ( str[i] == str[j]) amount++ 				//счетчик повторений 
else break

			}
		 if (amount == 1) { amount = ""}
													array.push(amount)
													array.push(str[i])
													amount = 0;  // обнуляем 
		}
//[2,a,3,b,1,c]
	return array.join(``)//обойти выход без привязки 

}

module.exports = {
  encodeLine
};
