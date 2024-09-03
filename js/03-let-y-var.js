"use strict"

//Prueba con let y var

var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero); // value 50

// prueba con Let
var texto= "Curso JS roberto sandoval";
console.log(texto);

if(true) {
    let texto = "Curso numero 3";
    console.log(texto); 
}

console.log (texto);