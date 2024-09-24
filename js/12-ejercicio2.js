'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeroas introducidos
hasta introducir un número negativo y ahí mostrar el resultado.
*/

//parseInt() se utiliza para convertir una cadena de texto (string) en un número entero (integer).

//isNaN() se utiliza para determinar si un valor no es un número (NaN significa "Not-a-Number"). Devuelve true si el valor proporcionado es NaN, y false en caso contrario.

var suma = 0;
var contador = 0;

do {
var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0));


if(isNaN(numero)){
    numero = 0;

}else if(numero >= 0) {
suma = suma + numero;
// suma += numero;  

contador++;

}

console.log(suma);
console.log(contador);

}while(numero >= 0)

    alert("La suma de todos los numeros es: "+ suma);
    alert(" La media de todos los numeros es: "+ (suma/contador));