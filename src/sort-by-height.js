const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
let array = arr.map(a=> { return (a == -1)? a: "" })
let ar = arr.filter(a=> a != -1).sort((a,b)=>a-b)
let j=0;

for (let i = 0; i <array.length; i++) {

	 if( array[i] == -1 ) continue 

	for (j ; j <ar.length; j++) {    
 					array[i] =ar[j] 
 					j++
 					break
	} 
}
return array

}

module.exports = {
  sortByHeight
};
