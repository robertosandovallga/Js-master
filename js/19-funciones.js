'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones.

function calculadora(){
    //Conjunto de instrucciones a ejecutar.
    console.log("1.- Hola soy la calculadora");
    console.log("2.- Si soy yo");
    
    return "3.- Hola de nuevo si soy la calculadora";
}
calculadora(); // Asi se llama directamente una función

//Invocar o llamar a la función.
var resultado = calculadora(); // Asi se llama una función desde una variable.

console.log(resultado); // La variable de función conservará el resultado lanzado en la sentencia return.

