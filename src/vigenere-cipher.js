const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor (variant) {
      if (String(variant) == `false`) this.car = false; //обратная машина
        else {this.car = true; } // прямая машина

    }
//метод для создания таблицы Квадрат Виженера 
    alfavit () {
            let arr = [];
            let array = [];
            let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
            for (let i = 0; i < str.length; i++) {
              arr.push((str.slice(i) + str.slice(0,i)).split(""))
            }
                return arr
          };    
// сделано 

  encrypt(message, key) { // шифрование строки

    if (!(message)||  !(key) ) throw new Error(`Incorrect arguments!`)

let tabl = this.alfavit();

let key_new = key.toUpperCase().split("");
let mes = message.toUpperCase().split("");
let key_n = [];

 // подготовить буквачки для ключа
let z = 0;
for (let i = 0; i < message.length;i++ )  {

      
    if ( !(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.includes(mes[i]) ) ) { 
      key_n.push( mes[i] ) //все что не буквы
      //i = i+1
    } else {
       if( key_n.length == message.length ) break
   if( z == key_new.length ) z = 0
    key_n.push(key_new[z]) //буквы алфавита 
    z++
    }
    //

  
}
  
// сделано 
let strin = message.toUpperCase().split("");
// шифровка
let kol;
let  stt;
for (let i = 0; i < mes.length; i++) {

  if (!(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.includes(mes[i]))) continue
kol = ``;
stt = ``;

    for (let j = 0; j < tabl.length; j++) {   

          if (tabl[0][j] == mes [i]) kol=j;//столбец 
          if (tabl[0][j] == key_n [i]) stt=j;//строка
   
  }
  strin[i] = tabl [kol][stt]
}

return (this.car)?strin.join(``):strin.reverse().join(``)
//сделано

  }


  decrypt(message, key) { // расшифрование строки
    if (!(message) ||  !(key) ) throw new Error(`Incorrect arguments!`)



let tabl = this.alfavit();

let key_new = key.toUpperCase().split("");
let mes = message.toUpperCase().split("");
let key_n = [];


//console.log(mes.join(""))
 // подготовить буквачки для ключа 2.0



let z = 0;
for (let i = 0; i < message.length;i++ )  {

      
    if ( !(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.includes(mes[i]) ) ) { 
      key_n.push( mes[i] ) 
      //i = i+1
    } else {

      if( key_n.length == message.length ) break
      if( z == key_new.length ) z = 0
    key_n.push(key_new[z]) 
    z++

    }

   
}

//console.log(key_n.join(""))

let strin = [];



z=0;

for (let i = 0; i < key_n.length; i++) {

  if ( !(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.includes(key_n[i])))  {
   strin.push(key_n[i]);
   z = z + 1;
   continue
  }

//console.log(z)//6
other:
    for (let j = 0; j < tabl.length; j++) {   

          if (tabl[j][0] == key_n[z]) {

                for (let k = 0; k < tabl.length; k++) {   
                      if (tabl[j][k] == mes[i]) {
                        strin.push( tabl[0][k] )
                        z++
                        break other
                      }
                }

            }

      }

}

return  (this.car)?strin.join(``):strin.reverse().join(``)

  }

}


module.exports = {
  VigenereCipheringMachine
};
