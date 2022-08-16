'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var reves= num.split("").reverse().join("");
  var resultado = 0;

  for (var i = 0;i < reves.length;i++){
    resultado = resultado +( reves.charAt(i)* (Math.pow(2,i)) )

  }
  return resultado;


}

function DecimalABinario(num) {
  // tu codigo aca

  var resultado = '';
  while (num >= 0.5){
    resultado =resultado + (num % 2);
    num = Math.trunc(num/2);
  }
  return resultado.split("").reverse().join("");;


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}