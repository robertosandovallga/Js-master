"use strict"

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
console.log(operacion);
/* alert("El resultado de la operacion es: "+operacion); */
var operacion = numero1 - numero2;
console.log(operacion);
/* alert("El resultado de la operacion es: "+operacion); */
var operacion = numero1 * numero2;
console.log(operacion);
/* alert("El resultado de la operacion es: "+operacion); */
var operacion = numero1 / numero2;
console.log(operacion);
/* alert("El resultado de la operacion es: "+operacion); */

// Tipo de datos
var numeroEntero = 44; // Numero entero
console.log(numeroEntero);

var cadenaTexto =  "Hola que tal"; //Cadena de texto se refiere a un string
console.log(cadenaTexto);
var verdaderoOFalso = true; // Boleano es true  es 1 o false es 0
console.log(verdaderoOFalso);

// Funciones para convertir un tipo de dato a otro

 var numeroFalso = "33"; // Este es un numero convertido a un string
console.log(numeroFalso+7); // No lo suma porque el 33 lo toma como un string
console.log(Number(numeroFalso)+7); // Number convierte un numero representado como un string a un numero entero

numeroFalso = "33.4"; 
console.log(numeroFalso);
console.log(parseInt(numeroFalso)+7); // parseInt convierte un numero a entero
console.log(parseFloat(numeroFalso)+7); //Convierte un numero a un numero decimal 
console.log(String(numeroFalso)+7); // el contenido de la variable lo convierte a texto


console.log(typeof numeroFalso); // typeof operador que se usa para saber cual es el tipo de datos de una variable



