// function saludar(saludo) {
//   // var saludo = "Hola"
//   return function (nombre) {
//     console.log(saludo + " " + nombre);
//   };
// }

// var saludarHola = saludar("Hola");
// var saludarHello = saludar("Hello");

// // saludo = Hola
// // saludarHola = function (nombre) {
// //     console.log(saludo + " " + nombre);
// // };

// saludarHola("Jorge");
// saludarHola("Ezequiel");
// saludarHola("Lucila");
// saludarHello("George");

// //******************************************************** */

// function crearContador() {
//   var count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// var contador1 = crearContador();
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());

// var contador2 = crearContador();
// console.log(contador2());
// console.log(contador2());
// console.log(contador2());

// // CONTADOR 1 ==========> count = 5
// // function () {
// //     count++;
// //     return count;
// //   };

// BIND, CALL Y APPLY!

var persona = {
  nombre: "Ivan",
  apellido: "Escalante",
};

var logNombre = function () {
  console.log(this.nombre);
};

logNombre();

// var logNombrePersona = logNombre.bind(persona);
// // el primer parametro de bind es el this!
// logNombrePersona();

// BIND DEVUELVE UNA FUNCION!
