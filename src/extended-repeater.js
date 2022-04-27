const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater( str, options ) {

	str = String(str);
	let array = [null, null, null, null, null]; 
	
	for (let key in options) {
		   if ( key == `repeatTimes` ) array[0] = (options[key]);
		   if ( key == `separator` ) array[1] =(options[key]);
		   if ( key == `addition` ) array[2] =String((options[key]));
		   if ( key == `additionRepeatTimes` ) array[3] = (options[key]);
		   if ( key == `additionSeparator` ) array[4] = (options[key]);		   	
	}
 

   for (let i = 0; i < array.length; i++) {
   		if ( array[0] == null ) array[0] = 1;
		   if ( array[1] == null ) array[1] = '+';
		   if ( array[2] == null ) array[2] = "";
		   if ( array[3] == null ) array[3] = 1;
		  (( array[4] == null )&& (array[2] != "")) ? array[4] = '|':"";
   }


let addi = []
for (let i = 0; i < array[3]; i++) {
	addi.push(array[2])
}

				let stt = str + addi.join(array[4]);

let repe = []
for (let i = 0; i < array[0]; i++) {
	repe.push(stt)
}


return repe.join(array[1])

}

module.exports = {
  repeater
};
