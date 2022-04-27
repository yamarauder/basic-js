const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
	if (!(inputString.length == 17 ) )  return false 

	let array = inputString.split(`-`)

	if (!(array.length == 6 ) )  return false 

	let amount = 0;
for (let i = 0; i < array.length ; i++) {
	amount = 0;
	for (let j = 0; j < array[0].length ; j++) {
					if (   ((`ABCDEF`.includes(array[0][j]))) 
									|| ((`0123456789`.includes(array[0][j])))  )  amount++
	}
if (!(amount == 2)) return false
}


return true

}

module.exports = {
  isMAC48Address
};
