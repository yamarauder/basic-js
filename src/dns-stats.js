const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats (domains) {
	let array = [...domains];
	let array_r = [];
	let array_rr = [];
 let k = 0;
	let obj = {};

			for (let i = 0; i <array.length; i++) {  	
								array_r = [];																							
				array[i] = `.` + array[i]
				k = array[i].length;
				array_revers = [];
				for (let j = array[i].length - 1; j >=0 ; j--) {   // cим блоком мы вычисляем общие домены 
			     if (array[i][j] == `.`) {
			     	array_r.push( array[i].slice(j,k));
			     	k=j
			     }
					}
						array_rr[i] = [...array_r];
						for (let k = 1; k < array_rr[i].length  ; k++) {   // cим блоком мы вычисляем общие домены 
			     
			     array_rr[i][k] = array_rr[i][k-1] + array_rr[i][k];
			     }
					}


					array_rr = array_rr.flat(); // все домены 

	let array_bezpovtora = new Set (array_rr); // 'домены без повтора для названий св.объекта '
	array_bezpovtora= [...array_bezpovtora];  

let amount = 0;

	   	for (let i = 0; i < array_bezpovtora.length; i++) { 
	   						amount = 0;
	   					for (let j = 0; j < array_rr.length; j++) {
 												if (array_bezpovtora[i] == array_rr[j] ) amount++
	   					}
	   				obj[ array_bezpovtora[i] ]= amount;
	   	}

					 			return obj
			}

module.exports = {
  getDNSStats
};
