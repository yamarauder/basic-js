const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mat) {
 	let array = [];
 	let arr = [];

 	for (let i = 0; i < mat[0].length; i++) {
 		arr = [];
 		for (let j = 0; j < mat.length; j++) {
 				arr.push(mat[j][i])
 		}
 		array.push(arr)
 	}
		
 		let ar =[];
 		for (let j = 0; j < array.length; j++) {

 			for (let i = 0; i < array[j].length; i++) {
 							if ( array[j][i] == 0 ) break
 											ar.push(array[j][i])
 			}
 	}

				return ar.reduce( (a,b)=> a + b, 0)
 }

module.exports = {
  getMatrixElementsSum
};
