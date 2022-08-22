"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.cont=0;
  this.head=null;
}

function Node(value) {
  this.value=value;
  this.next=null;
}

LinkedList.prototype.add=function(value){
  var newnodo = new Node(value);
  var current = this.head;
  if(!current){
    this.head=newnodo;
    this.cont++;
    return newnodo;
  }
  while(current.next){
    current=current.next;
  }
  current.next=newnodo;
  this.cont++;

}
LinkedList.prototype.remove=function(){
  var current= this.head;
  var valor = null;
  if(this.head === null){
    return valor;
  }else if(this.cont==1){
    valor= current
    this.head=null;
    this.cont--;
    return valor.value;
    
  }else{
    for(var i=2;i<this.cont;i++){
      current=current.next;
   
  }
}
valor = current.next;
this.cont--;
current.next=null;
return valor.value;

 
}

LinkedList.prototype.search = function(valor){
   var current = this.head;
   console.log(valor)
  if (typeof (valor) =='string'){
    
    for(var i=0;i<this.cont;i++){    
      if(current.value===valor){ 
        return(current.value);  
      }else{
        current=current.next;
      }  
  }
    return null;
  }else {
    
    for(var i=0;i<this.cont;i++){
        
      if(valor(current.value)){ 
        return(current.value);  
      }else{
        current=current.next;
      }
  }
    return null;


  }


}

// var lista = new LinkedList;
// lista.add('54');
// lista.add('22');
// lista.add('11');
// console.log(lista.remove());
// lista.add('66');
// lista.add('88');

//  var a= function(nodeValue) {
//   return nodeValue === '66';
// }
// console.log(lista.search(a));
// // console.log( typeof ('hola') =='string')

// // console.log(lista.search('87'));
// // console.log(lista.cont)
// // console.log(lista);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

   this.tabla =new Array(35);
   this.numBuckets= 35;
}
HashTable.prototype.hash=function(dato){
  var suma =0;
  for (var letra of dato){
    suma = suma + letra.charCodeAt();
   
  }
  return suma % 35;
}
HashTable.prototype.set=function(key,valor){
  const indice = this.hash(key);
  if (this.tabla[indice]) {
    for (let i = 0; i < this.tabla[indice].length; i++) {
      // Encuentra llave-valor en el arreglo
      if (this.tabla[indice][i][0] == key) {
        this.tabla[indice][i][1] = valor;
        return;
      }
    }
    // No encontrado, añade un nuevo llave valor
    this.tabla[indice].push([key, valor]);
  } else {
    this.tabla[indice] = [];
    this.tabla[indice].push([key, valor]);
  }
    
  

}

HashTable.prototype.get=function(key){

  const objetivo = this.hash(key);

  if (this.tabla[this.hash(key)]) {
    
    for (let i = 0; i < this.tabla.length; i++) {
      if (this.tabla[objetivo][i][0] == key) {
        return this.tabla[objetivo][i][1];
      }
    }
  }
  return undefined
}

HashTable.prototype.hasKey=function(key){


  if (this.tabla[this.hash(key)] && this.tabla[this.hash(key)].length) {

    for (let i = 0; i < this.tabla[this.hash(key)].length; i++) {
      if (this.tabla[this.hash(key)][i][0] === key) {
        return true;
      }
    }
  }
return false;
}


var prueba = new HashTable;

console.log(prueba.hash('asd')) 
console.log(prueba.set('asdf','asfd'));
console.log(prueba.set('af','asfd'));

console.log(prueba.get('af'));
console.log(prueba.set('fa','lkj'));
console.log(prueba.get('fa'));
console.log(prueba.get('af'));
console.log(prueba);
console.log(prueba.hasKey(''));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
