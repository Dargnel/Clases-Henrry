"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.tamaño = 1;
}
//tamaño del arbol
BinarySearchTree.prototype.size= function(){
  return this.tamaño;

}
//insertar valores en el arbol
BinarySearchTree.prototype.insert=function(value){

  if (value < this.value){ 
    if(this.left){
      this.left.insert(value);
    }else{
      this.left = new BinarySearchTree(value);
    }
  }
  if (value > this.value){
    
    if(this.right){
    this.right.insert(value);
   
    }else{
      this.right = new BinarySearchTree(value);
    }
  }
   return this.tamaño++;
  }

//existe el valor ??
BinarySearchTree.prototype.contains=function(value){
if (value === this.value){
  return true;
}else 
if (this.left){
  if (value < this.value){ 
   return (this.left.contains(value))
  } 
}
if(this.right){
  if (value > this.value){
    return (this.right.contains(value));
  }
}
return false;
}
//recorrer arbol DFS
BinarySearchTree.prototype.depthFirstForEach=function(cb,valor){
if(valor =='in-order'||valor==undefined){
  if(this.left  ){
      this.left.depthFirstForEach(cb,valor);
  }
  cb(this.value);
  if(this.right){
    this.right.depthFirstForEach(cb,valor);
  }
}
if(valor =='pre-order'){
  cb(this.value);
  if(this.left  ){
      this.left.depthFirstForEach(cb,valor);  
  }
  if(this.right){
    this.right.depthFirstForEach(cb,valor);
  }
}

if(valor =='post-order'){
  if(this.left  ){
      this.left.depthFirstForEach(cb,valor);
      
  }
  if(this.right){
    this.right.depthFirstForEach(cb,valor);
  }
  cb(this.value);
}
      
    
}
//recorrer arbol BFS
BinarySearchTree.prototype.breadthFirstForEach=function(cb){

  
    let queue = [];
    queue.push(this);
    let pointer = 0;
    while(pointer < queue.length) {
      let node = queue [pointer ++]; 
      cb(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    







}


var patata = new BinarySearchTree(8);
patata.insert(6);
patata.insert(7);
patata.insert(9);
  // patata.insert(10);
  // patata.insert(4);
  // patata.insert(4);
console.log(patata.size())
console.log(patata)
console.log(patata.contains())
var a = [patata];

console.log(patata)
// console.log(patata.breadthFirstForEach());
// patata.depthFirstForEach()
// var tree = new BinarySearchTree(20);
// tree.insert(12);
// tree.insert(22);

// console.log(tree.size())


// console.log(patata);



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
