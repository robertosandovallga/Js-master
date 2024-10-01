'use strict'

/*
Hacer tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt('¿De que numero quieres la tabla?', 1));

document.write("<h1>Tabla del "+numero+"</h1>")

for (var i = 1; i <= 10; i++) {
    document.write(numero+" x "+ i +" = " + (i * numero)+"<br>");
}


//todas la tabl<as de multiplicar

