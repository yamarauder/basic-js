const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles (names) {
	let k = 1;
	for (let i = 0; i < names.length; i++) {
		for (let j = i+1; j < names.length; j++) {
			if ( names[i] == names[j] ) names[j] = names[j]+`(${k++})`;
		}
		k = 1;
	}
return names
}

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
  renameFiles
};
