const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {

    return this.array.length

  },
  addLink( value = "" ) {
   
    this.array.push(value);

    return this

  },

  removeLink( position ) {  

 if (typeof(position) !=`number`) { this.array = [];  throw new Error (`You can't remove incorrect link!`)}
 if (!Number.isInteger(position)) { this.array = [];  throw new Error (`You can't remove incorrect link!`)}

 if ( (position <= this.array.length) && (position > 0) ) 
  this.array = this.array.filter((a,i)=> i != position-1)

 else { this.array = [];  throw new Error (`You can't remove incorrect link!`)}

  return this  

  },

 reverseChain() {
    this.array = this.array.reverse()
      
  return this  
  },

  finishChain() {
    this.copy = this.array; 
    this.array = [];
    return this.copy.map((a,i)=>(i>0)? `~~`+ `( ${a} )`: `( ${a} )`).
      join("") 
  }
};

module.exports = {
  chainMaker
};
