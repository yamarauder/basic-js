const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function  minesweeper(mat) {
	 let array = []; // основной массив 
	 let arr = []; //подмассив
	 let ar = []; 


	for ( let i = 0; i < mat.length; i++) { //3
		 //обновим подмассив для конкретной позиции 
		for ( let j = 0; j < mat[i].length; j++) { //3х3
arr = [];
if (i>0) { 
 if ( typeof(mat[i-1][j]) != `undefined` )  arr.push( +mat[i-1][j] )
 	if (j>0) {
 if ( typeof(mat[i-1][j-1]) != `undefined` )  arr.push( +mat[i-1][j-1] )
 		}
 		if (j < mat[i].length-1) { // j < 2
 if ( typeof(mat[i-1][j+1]) != `undefined` )  arr.push( +mat[i-1][j+1] )
			}
}

if (i < mat.length-1) { 
 if ( typeof(mat[i+1][j]) != `undefined` )  arr.push( +mat[i+1][j] )
if (j < mat[i].length-1) {

 if ( typeof(mat[i+1][j+1]) != `undefined` )  arr.push( +mat[i+1][j+1] )
 								}
if (j>0) {
 if ( typeof(mat[i+1][j-1]) != `undefined` )  arr.push( +mat[i+1][j-1] )
 								}
}

if (j>0) {
 if ( typeof(mat[i][j-1]) != `undefined` )  arr.push( +mat[i][j-1] )
}
if (j < mat[i].length-1) {
 if ( typeof(mat[i][j+1]) != `undefined` )  arr.push( +mat[i][j+1] )
}
		array.push(arr)
		}
	}
  amount = 0;
 	for ( let i = 0; i < array.length; i++) { 
 		amount = 0;
 		for ( let j = 0; j < array[i].length; j++) { 
 			amount = amount + array[i][j]
				}
				ar.push(amount)
		}

arr = [];
array = [];


	for ( let i = 0; i < mat.length; i++) {
		array = [];

		for ( let j = 0 ; j < mat[i].length; j++) { 

			array.push( ar[j+i*mat[i].length] )

		}

		arr.push(array)

	}


return arr


}

module.exports = {
  minesweeper
};
