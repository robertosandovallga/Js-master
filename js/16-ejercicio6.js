'use strict'

/*
Hacer un programa que nos diga si un numero es par o impar.
- Tiene que tener ventana prompt
- Tiene que comprobar si tiene un numero que no es valido, que nos pida de nuevo el numero
*/

var number = parseInt(prompt('Introduce un numero', 0));

while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 ==0){
    alert("Es un numero par");    
}else{
    alert("Es impar");
}